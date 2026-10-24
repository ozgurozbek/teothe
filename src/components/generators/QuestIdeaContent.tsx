"use client";

import { useState } from "react";
import {
  Alert,
  Button,
  Card,
  Divider,
  Empty,
  Grid,
  Image,
  Skeleton,
  Space,
  Typography,
  Carousel,
} from "antd";

import GetCrumbs from "Comp/NavigationCrumb";
import SimpleContent from "@/components/SimpleCon";
import Title from "antd/es/typography/Title";

const { Text } = Typography;
const { useBreakpoint } = Grid;

type QuestFlags = {
  hasNpc: boolean;
  hasSpecies: boolean;
  hasDeity: boolean;
  hasFaction: boolean;
  hasPlane: boolean;
  hasMap: boolean;
  hasCalendar: boolean;
  hasCommonLore: boolean;
};

type QuestAiResponse = {
  paragraphs: [string, string];
  imageUrls: string[];
  flags: QuestFlags;
};

const questResponseSchema = {
  type: "object",
  properties: {
    paragraphs: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: { type: "string" },
    },
    imageUrls: {
      type: "array",
      minItems: 0,
      maxItems: 6,
      items: { type: "string" },
    },
    hasNpc: { type: "boolean" },
    hasSpecies: { type: "boolean" },
    hasDeity: { type: "boolean" },
    hasFaction: { type: "boolean" },
    hasPlane: { type: "boolean" },
    hasMap: { type: "boolean" },
    hasCalendar: { type: "boolean" },
    hasCommonLore: { type: "boolean" },
  },
  required: [
    "paragraphs",
    "imageUrls",
    "hasNpc",
    "hasSpecies",
    "hasDeity",
    "hasFaction",
    "hasPlane",
    "hasMap",
    "hasCalendar",
    "hasCommonLore",
  ],
  additionalProperties: false,
} as const;

const parseQuestResponse = (raw: string, lore: string): QuestAiResponse => {
  let value: unknown;

  try {
    value = JSON.parse(raw);
  } catch {
    throw new Error("Gemini doesn't understand JSON structures, so we stopped it.");
  }

  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new Error("Gemini tried to invent it's own data, so we invalidated it.");
  }

  const response = value as Record<string, unknown>;

  if (
    !Array.isArray(response.paragraphs) ||
    response.paragraphs.length !== 2 ||
    !response.paragraphs.every((paragraph) => typeof paragraph === "string")
  ) {
    throw new Error("Gemini is writing a book instead of helping you, so we stopped it.");
  }

  if (!Array.isArray(response.imageUrls)) {
    throw new Error("Gemini doesn't understand what an image is, so we patted it's head.");
  }

  if (
    response.imageUrls.length > 6 ||
    !response.imageUrls.every((imageUrl) => typeof imageUrl === "string")
  ) {
    throw new Error("Gemini decided to include all images available to it, so we stopped it.");
  }

  const flagNames: Array<keyof QuestFlags> = [
    "hasNpc",
    "hasSpecies",
    "hasDeity",
    "hasFaction",
    "hasPlane",
    "hasMap",
    "hasCalendar",
    "hasCommonLore",
  ];

  for (const flag of flagNames) {
    if (typeof response[flag] !== "boolean") {
      throw new Error(`Gemini returned an invalid ${flag} flag.`);
    }
  }

  const imageUrls = response.imageUrls
    .map((imageUrl) => imageUrl.trim())
    .filter(Boolean);

  // for (const imageUrl of imageUrls) {
    // if (!lore.includes(imageUrl)) {
      // throw new Error(
        // "Chrome Gemini selected an image URL that is not in the Teothe lore.",
      // );
    // }
  // }

  return {
    paragraphs: [response.paragraphs[0].trim(), response.paragraphs[1].trim()],
    imageUrls,
    flags: {
      hasNpc: response.hasNpc as boolean,
      hasSpecies: response.hasSpecies as boolean,
      hasDeity: response.hasDeity as boolean,
      hasFaction: response.hasFaction as boolean,
      hasPlane: response.hasPlane as boolean,
      hasMap: response.hasMap as boolean,
      hasCalendar: response.hasCalendar as boolean,
      hasCommonLore: response.hasCommonLore as boolean,
    },
  };
};

const FLAG_BUTTONS: Array<{
  flag: keyof QuestFlags;
  label: string;
  url: string;
}> = [
  {
    flag: "hasNpc",
    label: "Generate Quick NPC",
    url: "https://teothe.com/generators/quick-npc",
  },
  {
    flag: "hasSpecies",
    label: "Species",
    url: "https://teothe.com/species",
  },
  {
    flag: "hasDeity",
    label: "Deities",
    url: "https://teothe.com/deities",
  },
  {
    flag: "hasFaction",
    label: "Factions",
    url: "https://teothe.com/factions",
  },
  {
    flag: "hasPlane",
    label: "Planes",
    url: "https://teothe.com/planes",
  },
  {
    flag: "hasMap",
    label: "Teothe Map",
    url: "https://teothe.com/map-overlay",
  },
  {
    flag: "hasCalendar",
    label: "Calendar",
    url: "https://teothe.com/calendar",
  },
  {
    flag: "hasCommonLore",
    label: "Common Lore",
    url: "https://teothe.com/common-lore",
  },
];

function QuestGenerator() {
  const [baseQuest, setBaseQuest] = useState("");
  const [aiData, setAiData] = useState<QuestAiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiSupported, setAiSupported] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const screens = useBreakpoint();

  const enhanceQuest = async (quest: string) => {
    const LanguageModelApi = (window as any).LanguageModel;

    if (!LanguageModelApi) {
      setAiSupported(false);
      setAiLoading(false);
      return;
    }

    setAiSupported(true);
    setAiLoading(true);
    setAiData(null);
    setError(null);

    let session: any = null;

    try {
      if (typeof LanguageModelApi.availability === "function") {
        const availability = await LanguageModelApi.availability({
          expectedInputs: [{ type: "text", languages: ["en"] }],
          expectedOutputs: [{ type: "text", languages: ["en"] }],
        });

        if (availability === "unavailable") {
          throw new Error("Chrome Gemini Nano is unavailable for this environment, and that's okay. We urge you to think twice before enabling it.");
        }
      }

      const [systemResponse, promptResponse, loreResponse] = await Promise.all([
        fetch(`/prompts/quest-idea-system.txt?t=${Date.now()}`, {
          cache: "no-store",
        }),
        fetch(`/prompts/quest-idea-prompt.txt?t=${Date.now()}`, {
          cache: "no-store",
        }),
        fetch(`/prompts/teothe-lore.txt?t=${Date.now()}`, {
          cache: "no-store",
        }),
      ]);

      if (!systemResponse.ok) {
        throw new Error(
          `Failed to load quest system prompt: HTTP ${systemResponse.status}`,
        );
      }

      if (!promptResponse.ok) {
        throw new Error(
          `Failed to load quest prompt: HTTP ${promptResponse.status}`,
        );
      }

      if (!loreResponse.ok) {
        throw new Error(
          `Failed to load Teothe lore: HTTP ${loreResponse.status}`,
        );
      }

      const [systemPrompt, promptTemplate, lore] = await Promise.all([
        systemResponse.text(),
        promptResponse.text(),
        loreResponse.text(),
      ]);

      const formattedPrompt = promptTemplate
        .replace("{{BASE_QUEST}}", quest)
        .replace("{{TEOTHE_LORE}}", lore);

      session = await LanguageModelApi.create({
        initialPrompts: [
          {
            role: "system",
            content: systemPrompt,
          },
        ],
      });

      const rawResponse = await session.prompt(formattedPrompt, {
        responseConstraint: questResponseSchema,
        omitResponseConstraintInput: true,
      });

      setAiData(parseQuestResponse(rawResponse, lore));
    } catch (caught) {
      console.error("Chrome Gemini structured output error:", caught);
      setAiData(null);
      setError(
        caught instanceof Error
          ? caught.message
          : "Gemini failed to enhance the quest idea.",
      );
    } finally {
      setAiLoading(false);

      try {
        session?.destroy?.();
      } catch (caught) {
        console.warn("Could not destroy Chrome Gemini session:", caught);
      }
    }
  };

  const generateQuest = async () => {
    setLoading(true);
    setAiLoading(false);
    setBaseQuest("");
    setAiData(null);
    setError(null);
    setAiSupported(true);

    try {
      const response = await fetch(
        "https://xeculus.pythonanywhere.com/generate",
      );

      if (!response.ok) {
        throw new Error("Failed to access the Quest Idea Generator API.");
      }

      const quest = (await response.text()).trim();

      if (!quest) {
        throw new Error("The Quest Idea Generator returned an empty quest.");
      }

      setBaseQuest(quest);
      await enhanceQuest(quest);
    } catch (caught) {
      console.error("Error generating quest idea:", caught);
      setError(
        caught instanceof Error
          ? caught.message
          : "Failed to generate quest idea.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Title level={1}>
        Create Unique D&D Adventures with an AI Quest Idea Generator for the Teothe Campaign Setting
      </Title>

      <Divider />

      <Button onClick={generateQuest} loading={loading || aiLoading}>
        {baseQuest ? "Generate New Quest Idea" : "Generate Quest Idea"}
      </Button>

      {!baseQuest && !loading && !error && (
        <Card className="mt-4">
          <Empty />
        </Card>
      )}

      {baseQuest && (
        <Card className="mt-4" 
          title="Quest Idea">
          <Title level={2}>{baseQuest}</Title>
        </Card>
      )}

      {error && (
        <Alert
          className="mt-4"
          type="error"
          showIcon
          title="Gemini-based enhancement failed."
          description={error}
        />
      )}

      {aiSupported && baseQuest && !error && (
        <Card
          className="mt-4"
          title="✨ AI Enhancement"
          extra={
            !aiLoading && !aiData ? (
              <Button type="dashed" onClick={() => enhanceQuest(baseQuest)}>
                Retry Enhancement
              </Button>
            ) : null
          }
        >
          {aiLoading && !aiData ? (
            <Skeleton active paragraph={{ rows: 5 }} />
          ) : aiData ? (
            <Space orientation="vertical" className="w-full">
              <div>
                {aiData.imageUrls?.length > 0 && (
                  <div
                    style={{
                      float: screens.md ? "left" : "none",
                      width: screens.md ? 260 : "100%",
                      maxWidth: "100%",
                      margin: screens.md ? "0 20px 0 0" : "0 0 0 0",
                    }}
                  >
                    <Carousel
                      arrows
                      dots
                      infinite={aiData.imageUrls.length > 1}
                      autoplay
                    >
                      {aiData.imageUrls.map((imageUrl, index) => (
                        <div key={`${imageUrl}-${index}`}>
                          <Image
                            src={imageUrl}
                            alt={`Teothe Quest Visual ${index + 1}`}
                            preview
                            width="100%"
                            style={{
                              display: "block",
                              height: screens.md ? 260 : 220,
                              objectFit: "cover",
                              borderRadius: 8,
                            }}
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                )}

                <SimpleContent
                  contentProps={{
                    title: "",
                    level: 2,
                    text: aiData.paragraphs,
                  }}
                />

                <div style={{ clear: "both" }} />
              </div>

              {FLAG_BUTTONS.some((item) => aiData.flags[item.flag]) && (
                <>
                  <Divider />
                  <Space wrap>Enrich your quest idea:
                    {FLAG_BUTTONS.filter((item) => aiData.flags[item.flag]).map(
                      (item) => (
                        <a
                          key={item.flag}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button>{item.label}</Button>
                        </a>
                      ),
                    )}
                  </Space>
                </>
              )}
            </Space>
          ) : null}
        </Card>
      )}

      {!aiSupported && baseQuest && (
        <Alert
          className="mt-4"
          type="info"
          showIcon
          title="Chrome Built-in AI Not Available"
          description="This browser does not currently expose the Prompt API used for the local Gemini enhancement."
        />
      )}

      <Space orientation="vertical" className="mt-4">
        <p>
          Elevate your Dungeons & Dragons sessions with an innovative AI-powered
          quest idea generator tailored specifically for the Teothe campaign
          setting. This tool generates original, high-quality quest ideas,
          character descriptions, and item details based on your keywords and
          phrases, making it easier than ever to craft engaging adventures for
          your players.
        </p>
        <p>
          What sets this AI quest idea generator apart is its ability to produce
          fresh content rather than recycling existing material. Its algorithms
          are trained to create intricate storylines that mirror the elaborate
          quests found in popular video games, ensuring your campaigns are
          filled with excitement and depth. By using the core rules of Dungeons
          & Dragons 5th Edition, it crafts thrilling events and challenges that
          can enhance any main quest or side mission, offering endless
          possibilities for your storytelling in the Teothe setting.
        </p>
        <p>
          Using an AI quest generator can significantly streamline your game
          preparation, allowing you to brainstorm fresh ideas and develop
          captivating narratives. You can analyze quests based on the
          motivations behind them, fostering deeper storytelling and creating
          unique experiences for your players. D&D is all about engagement, and
          each encounter serves as a piece of a larger story, making it
          essential to create quests filled with challenges and mysteries.
        </p>
        <p>
          With this tool, crafting narratives becomes effortless. You can adapt
          generated ideas to suit your players’ choices and customize various
          elements, including monsters, spells, and items, enriching your
          storytelling experience.
        </p>
        <p>
          Transform your Dungeons & Dragons sessions in the Teothe campaign
          setting into unforgettable adventures. Harness the power of an AI
          quest idea generator to create unique quests that immerse your players
          in a world of creativity and excitement today!
        </p>
      </Space>
    </>
  );
}

// Main component rendering the page
export default function QuestIdeaGeneratorContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Generators,Quest Idea Generator"} />
      <Card variant="outlined" className="w-full">
        <QuestGenerator />
      </Card>
    </section>
  );
}
