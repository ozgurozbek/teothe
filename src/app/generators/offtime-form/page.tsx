//@ts-nocheck
// Vibe coded with chatgpt, author chatgpt, I just edited and fixed some small stuff incl styling and day logic.
"use client";
import React, { useState } from "react";
import {
  Button,
  Input,
  Typography,
  Row,
  Col,
  Card,
  Space,
  Divider,
} from "antd";
import GetCrumbs from "@/components/NavigationCrumb";

const { TextArea } = Input;
const { Text } = Typography;

const DESCRIPTION = `Ne yapmak istediğinizi düşünüp nasıl yaptığınızı yazın ne olduğunu değil. Kısa offtime kötü değildir, soru sormam gerekirse sorarım. Yoktan bir şey var etmeyin. ChatGPT offtime YAZAMIYOR. Offtime solo session DEĞİL.`;

const WORD_LIMITS = {
  character: 5,
  goals: 10,
  action: 80,
  day: 160,
  compGoal: 20,
  compHow: 40,
  compFluff: 10,
  conditional: 20,
  free: 4000,
};

const wordCount = (text) =>
  text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

const WordLimitedInput = ({ label, placeholder, value, onChange, limit }) => {
  const count = wordCount(value);
  const exceeded = count > limit;

  return (
    <div style={{ marginBottom: 12 }}>
      <Text strong>{label}</Text>
      <TextArea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoSize
        style={{
          borderColor: exceeded ? "red" : undefined,
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Text type={exceeded ? "danger" : "secondary"}>
          {count} / {limit} words
        </Text>
      </div>
      {exceeded && (
        <Text type="danger">
          This is longer than expected, shorten if you can.
        </Text>
      )}
    </div>
  );
};

let idCounter = 0;
const newId = () => ++idCounter;

export default function OfftimeForm() {
  const [characterName, setCharacterName] = useState("");
  const [goals, setGoals] = useState("");
  const [blocks, setBlocks] = useState([]);
  const [dragId, setDragId] = useState(null);

  const BLOCK_COST = {
    action: 1,
    composition: 1,
    travel: 1,
    rest: 1,
    day: 2,
    free: 2,
    nosleep: -1,
    conditional: 0,
  };

  const recalcDays = (items) => {
    let currentDay = 1;
    let usedCapacity = 0;
    let capacity = 2;
    let nosleepUsed = false;

    return items.map((b) => {
      const cost = BLOCK_COST[b.type] ?? 0;

      // Handle "I will not sleep"
      if (b.type === "nosleep") {
        if (nosleepUsed) {
          // Start new day if already used
          currentDay++;
          usedCapacity = 0;
          capacity = 2;
          nosleepUsed = false;
        }

        capacity += 1;
        nosleepUsed = true;

        return { ...b, day: currentDay };
      }

      // Handle capacity consuming blocks
      if (cost != 0) {
        if (usedCapacity + cost > capacity) {
          currentDay++;
          usedCapacity = 0;
          capacity = 2;
          nosleepUsed = false;
        }

        usedCapacity += cost;
      }

      return { ...b, day: currentDay };
    });
  };

  const updateBlocks = (newBlocks) => {
    setBlocks(recalcDays(newBlocks));
  };

  const addBlock = (type) => {
    const block = {
      id: newId(),
      type,
      day: 1,
      parentId: null,
      content: {},
    };

    if (type === "composition") {
      block.content = { goal: "", how: "", fluff: "" };
    } else if (type === "travel" || type === "rest") {
      block.content = {};
    } else {
      block.content = { text: "" };
    }

    updateBlocks([...blocks, block]);
  };

  const deleteBlock = (id) => {
    const filtered = blocks.filter((b) => b.id !== id);
    updateBlocks(filtered);
  };

  const addConditional = (parentId) => {
    const conditional = {
      id: newId(),
      type: "conditional",
      parentId,
      content: { if: "", else: "", regardless: "" },
    };

    const parentIndex = blocks.findIndex((b) => b.id === parentId);
    if (parentIndex === -1) return;

    const newBlocks = [...blocks];
    newBlocks.splice(parentIndex + 1, 0, conditional);

    updateBlocks(newBlocks);
  };

  const onDragStart = (id) => {
    setDragId(id);
  };

  const onDrop = (targetId) => {
    if (dragId === null || dragId === targetId) return;

    const draggedIndex = blocks.findIndex((b) => b.id === dragId);
    const targetIndex = blocks.findIndex((b) => b.id === targetId);

    if (draggedIndex === -1 || targetIndex === -1) return;

    const reordered = [...blocks];
    const [removed] = reordered.splice(draggedIndex, 1);
    reordered.splice(targetIndex, 0, removed);

    updateBlocks(reordered);
    setDragId(null);
  };

  const exportMarkdown = () => {
    let md = `# ${characterName}\n\n`;
    md += `## Goals\n${goals}\n\n`;

    let currentDay = 0;

    blocks.forEach((b) => {
      if (b.day !== currentDay) {
        currentDay = b.day;
        md += `\n---\n## Day ${currentDay}\n\n`;
      }

      switch (b.type) {
        case "action":
          md += `### Action\n${b.content.text}\n\n`;
          break;

        case "day":
          md += `### Full Day\n${b.content.text}\n\n`;
          break;

        case "composition":
          md += `### Composition\n`;
          md += `- Goal: ${b.content.goal}\n`;
          md += `- How: ${b.content.how}\n`;
          md += `- Fluff: ${b.content.fluff}\n\n`;
          break;

        case "travel":
          md += `### Travelling\n\n`;
          break;

        case "rest":
          md += `### Resting +1d8 GP +1d12 SP\n\n`;
          break;

        case "free":
          md += `### Notes\n${b.content.text}\n\n`;
          break;

        case "conditional":
          md += `- IF: ${b.content.if}\n`;
          md += `- ELSE: ${b.content.else}\n`;
          md += `REGARDLESS: ${b.content.regardless}\n\n`;
          break;

        case "nosleep":
          md += `### I will not sleep\n\n`;
          break;
        default:
          break;
      }
    });

    const blob = new Blob([md], {
      type: "text/markdown;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = (characterName || "offtime").replace(/\s+/g, "_") + ".md";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <section>
      <GetCrumbs path={"Teothe,Offtime"} />
      <Row gutter={16}>
        <Col span={20}>
          <Card>
            <Typography.Paragraph>{DESCRIPTION}</Typography.Paragraph>

            <Row gutter={16}>
              <Col span={12}>
                <WordLimitedInput
                  label="Character Name"
                  placeholder="Enter character name"
                  value={characterName}
                  onChange={setCharacterName}
                  limit={WORD_LIMITS.character}
                />
              </Col>
              <Col span={12}>
                <WordLimitedInput
                  label="Offtime Goals"
                  placeholder="Briefly describe off-time goals"
                  value={goals}
                  onChange={setGoals}
                  limit={WORD_LIMITS.goals}
                />
              </Col>
            </Row>

            {blocks.map((b, index) => {
              const showDayHeader =
                index === 0 || blocks[index - 1].day !== b.day;

              return (
                <React.Fragment key={b.id}>
                  {showDayHeader && (
                    <Divider orientation="left">Day {b.day}</Divider>
                  )}

                  <div
                    draggable
                    onDragStart={() => onDragStart(b.id)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => onDrop(b.id)}
                    style={{
                      marginLeft: b.type === "conditional" ? 40 : 0,
                      marginBottom: 16,
                      cursor: "move",
                    }}
                  >
                    <Card
                      size="small"
                      extra={
                        <Button danger onClick={() => deleteBlock(b.id)}>
                          🗙
                        </Button>
                      }
                    >
                      {b.type === "action" && (
                        <>
                          <WordLimitedInput
                            label="Action"
                            placeholder="Describe what you do and how you do it"
                            value={b.content.text}
                            onChange={(val) =>
                              updateBlocks(
                                blocks.map((x) =>
                                  x.id === b.id
                                    ? {
                                        ...x,
                                        content: { text: val },
                                      }
                                    : x,
                                ),
                              )
                            }
                            limit={WORD_LIMITS.action}
                          />
                          <Button onClick={() => addConditional(b.id)}>
                            Add Conditional
                          </Button>
                        </>
                      )}

                      {b.type === "day" && (
                        <>
                          <WordLimitedInput
                            label="Full Day"
                            placeholder="Describe the full day"
                            value={b.content.text}
                            onChange={(val) =>
                              updateBlocks(
                                blocks.map((x) =>
                                  x.id === b.id
                                    ? {
                                        ...x,
                                        content: { text: val },
                                      }
                                    : x,
                                ),
                              )
                            }
                            limit={WORD_LIMITS.day}
                          />
                          <Button onClick={() => addConditional(b.id)}>
                            Add Conditional
                          </Button>
                        </>
                      )}

                      {b.type === "composition" && (
                        <>
                          <WordLimitedInput
                            label="Goal"
                            placeholder="What is the goal?"
                            value={b.content.goal}
                            onChange={(val) =>
                              updateBlocks(
                                blocks.map((x) =>
                                  x.id === b.id
                                    ? {
                                        ...x,
                                        content: {
                                          ...x.content,
                                          goal: val,
                                        },
                                      }
                                    : x,
                                ),
                              )
                            }
                            limit={WORD_LIMITS.compGoal}
                          />

                          <WordLimitedInput
                            label="How You Do It"
                            placeholder="Explain the method"
                            value={b.content.how}
                            onChange={(val) =>
                              updateBlocks(
                                blocks.map((x) =>
                                  x.id === b.id
                                    ? {
                                        ...x,
                                        content: {
                                          ...x.content,
                                          how: val,
                                        },
                                      }
                                    : x,
                                ),
                              )
                            }
                            limit={WORD_LIMITS.compHow}
                          />

                          <WordLimitedInput
                            label="Fluff"
                            placeholder="Optional flavour detail"
                            value={b.content.fluff}
                            onChange={(val) =>
                              updateBlocks(
                                blocks.map((x) =>
                                  x.id === b.id
                                    ? {
                                        ...x,
                                        content: {
                                          ...x.content,
                                          fluff: val,
                                        },
                                      }
                                    : x,
                                ),
                              )
                            }
                            limit={WORD_LIMITS.compFluff}
                          />

                          <Button onClick={() => addConditional(b.id)}>
                            Add Conditional
                          </Button>
                        </>
                      )}

                      {b.type === "free" && (
                        <WordLimitedInput
                          label="Free Text"
                          placeholder="Write anything relevant"
                          value={b.content.text}
                          onChange={(val) =>
                            updateBlocks(
                              blocks.map((x) =>
                                x.id === b.id
                                  ? {
                                      ...x,
                                      content: { text: val },
                                    }
                                  : x,
                              ),
                            )
                          }
                          limit={WORD_LIMITS.free}
                        />
                      )}

                      {b.type === "travel" && <Text strong>Travelling</Text>}

                      {b.type === "rest" && (
                        <Text strong>Resting +1d8 GP +1d12 SP</Text>
                      )}

                      {b.type === "conditional" && (
                        <>
                          <WordLimitedInput
                            label="If"
                            placeholder="If condition succeeds..."
                            value={b.content.if}
                            onChange={(val) =>
                              updateBlocks(
                                blocks.map((x) =>
                                  x.id === b.id
                                    ? {
                                        ...x,
                                        content: {
                                          ...x.content,
                                          if: val,
                                        },
                                      }
                                    : x,
                                ),
                              )
                            }
                            limit={WORD_LIMITS.conditional}
                          />

                          <WordLimitedInput
                            label="Else"
                            placeholder="If condition fails..."
                            value={b.content.else}
                            onChange={(val) =>
                              updateBlocks(
                                blocks.map((x) =>
                                  x.id === b.id
                                    ? {
                                        ...x,
                                        content: {
                                          ...x.content,
                                          else: val,
                                        },
                                      }
                                    : x,
                                ),
                              )
                            }
                            limit={WORD_LIMITS.conditional}
                          />

                          <WordLimitedInput
                            label="Regardless"
                            placeholder="Happens either way..."
                            value={b.content.regardless}
                            onChange={(val) =>
                              updateBlocks(
                                blocks.map((x) =>
                                  x.id === b.id
                                    ? {
                                        ...x,
                                        content: {
                                          ...x.content,
                                          regardless: val,
                                        },
                                      }
                                    : x,
                                ),
                              )
                            }
                            limit={WORD_LIMITS.conditional}
                          />
                        </>
                      )}

                      {b.type === "nosleep" && (
                        <Text strong>I will not sleep</Text>
                      )}
                    </Card>
                  </div>
                </React.Fragment>
              );
            })}

            <Divider />
            <Button type="primary" onClick={exportMarkdown}>
              Download Markdown
            </Button>
          </Card>
        </Col>

        <Col span={4}>
          <Space direction="vertical" style={{ width: "100%" }}>
            <Button className="w-full" onClick={() => addBlock("action")}>
              Add Action
            </Button>
            <Button className="w-full" onClick={() => addBlock("day")}>
              Add Day
            </Button>
            <Button className="w-full" onClick={() => addBlock("composition")}>
              Add Composition Block
            </Button>
            <Button className="w-full" onClick={() => addBlock("free")}>
              Add Free Text Block
            </Button>

            <Divider />

            {/* <Button danger disabled>
            Add Conditional Block
          </Button> */}

            <Button className="w-full" onClick={() => addBlock("rest")}>
              Add Rest Block
            </Button>
            <Button className="w-full" onClick={() => addBlock("travel")}>
              Add Travel Block
            </Button>
            <Button className="w-full" onClick={() => addBlock("nosleep")}>
              Add I Will Not Sleep
            </Button>
          </Space>
        </Col>
      </Row>
    </section>
  );
}
