"use client";
import { Button, Card, Divider, Dropdown, Empty, MenuProps, Space } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import { useState } from "react";
import SimpleContent from "@/components/SimpleCon";
import {
  getNpcOptionsValues,
  NpcGenerateOptions,
  generate,
  GenerateOptionValueSimple,
} from "npc-generator-teothe";
import { DownOutlined } from "@ant-design/icons";

/* Hoisted variables */
//Utility to pull stat modifiers
var statBonusHash: any = {
  0: "-5",
  1: "-5",
  2: "-4",
  3: "-4",
  4: "-3",
  5: "-3",
  6: "-2",
  7: "-2",
  8: "-1",
  9: "-1",
  10: "+0",
  11: "+0",
  12: "+1",
  13: "+1",
  14: "+2",
  15: "+2",
  16: "+3",
  17: "+3",
  18: "+4",
  19: "+4",
  20: "+5",
  21: "+5",
  22: "+6",
  23: "+6",
  24: "+7",
  25: "+7",
  26: "+8",
  27: "+8",
  28: "+9",
  29: "+9",
  30: "+10",
};

// Utility for languages
var languages: string[] = [
  "only the local languages",
  "common and one more language",
  "common and two more languages",
  "common and three more languages",
  "exotic languages",
];

// Utility for voices
var voices: string[] = [
  "filled with air",
  "rough",
  "deep",
  "high",
  "enthusiastic",
  "bored",
  "angry",
  "authoritative",
  "comedic",
  "conversational",
  "elegant",
  "enticing",
  "inspiring",
  "nurturing",
  "playful",
  "sad",
  "scared",
  "unorthodox",
];

/**
 * React component for rendering a Quest Idea Generator interface.
 * The component includes a button that, when clicked, conditionally fetches data from an API using the useSWR hook.
 * The fetched data is displayed or replaced with data on the fetch state.
 * The component utilizes the useMemo hook to memoize the handleButtonClick function, preventing unnecessary re-fetching on each render.
 * @generator
 * @returns JSX elements representing the Quest Idea Generator interface.
 */
function GetQuickNPC() {
  const [displayEmpty, setDisplayEmpty] = useState(true);
  const [speciesNo, setSpeciesNo] = useState("N/A");
  const [genderNo, setGenderNo] = useState("N/A");
  const [alignmentNo, setAlignmentNo] = useState("N/A");
  const [occupationNo, setOccupationNo] = useState("N/A");
  const [npcOptionsObject, setNpcOptionsObject] = useState<
    NpcGenerateOptions | undefined
  >(undefined);
  const [teotheNPC, setTeotheNPC] = useState<TeotheNPC>(DevelopNPC());

  // Generates NPC options from the library
  const npcOptionsValues = getNpcOptionsValues();

  /* SPECIES */
  const handleSpeciesClick: MenuProps["onClick"] = (e) => {
    setSpeciesNo(e.key);
    setNpcOptionsObject({
      race: Number(e.key), //Library uses race instead of species
      gender: npcOptionsObject?.gender,
      classorprof: npcOptionsObject?.classorprof,
      alignment: npcOptionsObject?.alignment,
    });
  };

  const speciesProps = {
    items: npcOptionsValues.races.map(speciesMapper), //Library uses race instead of species
    onClick: handleSpeciesClick,
  };

  // Utility for species dropdown, has an issue with their displays
  function speciesMapper(speciesObject: {
    name: string;
    value: number;
    subraces: GenerateOptionValueSimple | undefined; //Library uses race instead of species
  }) {
    return { label: speciesObject.name, key: speciesObject.value };
  }
  /* SPECIES END */

  /* GENDER */
  const handleGenderClick: MenuProps["onClick"] = (e) => {
    setGenderNo(e.key);
    setNpcOptionsObject({
      race: npcOptionsObject?.race, //Library uses race instead of species
      gender: Number(e.key),
      classorprof: npcOptionsObject?.classorprof,
      alignment: npcOptionsObject?.alignment,
    });
  };

  const genderProps = {
    items: npcOptionsValues.genders.map(genderMapper),
    onClick: handleGenderClick,
  };

  //Utility for gender dropdown, has an issue with their displays
  function genderMapper(genderObject: { name: string; value: number }) {
    return { label: genderObject.name, key: genderObject.value };
  }
  /* GENDER END */

  /* CLASS OR OCCUPATION */
  const handleOccupationClick: MenuProps["onClick"] = (e) => {
    setOccupationNo(e.key);
    setNpcOptionsObject({
      race: npcOptionsObject?.race, //Library uses race instead of species
      gender: npcOptionsObject?.gender,
      classorprof: Number(e.key),
      alignment: npcOptionsObject?.alignment,
    });
  };

  const occupationProps = {
    items: npcOptionsValues.occupations.map(occupationsMapper),
    onClick: handleOccupationClick,
  };

  // Utility for occupation dropdown, has an issue with their displays
  function occupationsMapper(occupationObject: {
    name: string;
    value: number;
  }) {
    return { label: occupationObject.name, key: occupationObject.value };
  }
  /* CLASS OR OCCUPATION END */

  /* ALIGNMENT */
  const handleAlignmentClick: MenuProps["onClick"] = (e) => {
    setAlignmentNo(e.key);
    setNpcOptionsObject({
      race: npcOptionsObject?.race, //Library uses race instead of species
      gender: npcOptionsObject?.gender,
      classorprof: npcOptionsObject?.classorprof,
      alignment: Number(e.key),
    });
  };

  const alignmentProps = {
    items: npcOptionsValues.alignments.map(alignmentsMapper),
    onClick: handleAlignmentClick,
  };

  // Utility for alignment dropdown, has an issue with their displays
  function alignmentsMapper(alignmentsObject: { name: string; value: number }) {
    return { label: alignmentsObject.name, key: alignmentsObject.value };
  }
  /* ALIGNMENT END */

  // Develops NPC depending on value (norm: normal npc, spcf: specific npc)
  const handleButtonClick = (value: string) => {
    switch (value) {
      case "norm":
        setTeotheNPC(DevelopNPC());
        break;
      case "spcf":
        setTeotheNPC(DevelopNPC(npcOptionsObject));
        break;
    }
    setDisplayEmpty(false);
  };

  // Handles statblock and description generation for Fantasy Grounds depending on value (desc, stat)
  const handleFantasyGroundsClick = (value: string, teotheNPC: TeotheNPC) => {
    switch (value) {
      case "desc":
        navigator.clipboard.writeText(
          `${teotheNPC.name} (${teotheNPC.alignment}) is a ${
            teotheNPC.description.age
          } years old, ${teotheNPC.relationship.orientation.toLowerCase()} ${
            teotheNPC.description.species
          } ${teotheNPC.description.gender}. ${
            teotheNPC.description.pronounCapit
          } is a ${teotheNPC.description.occupation}. ${
            teotheNPC.description.pronounCapit
          } is ${teotheNPC.relationship.status.toLocaleLowerCase()}.\r\n`.replace(
            /  +/g,
            " "
          ) +
            `${teotheNPC.description.pronounCapit} has ${teotheNPC.physical.hair} ${teotheNPC.physical.eyes}. Their ${teotheNPC.physical.skin} contribute to a distinctive appearance. ${teotheNPC.description.pronounCapit} has ${teotheNPC.physical.build} with ${teotheNPC.physical.face}. ${teotheNPC.physical.special1} ${teotheNPC.physical.special2}\r\n`.replace(
              /  +/g,
              " "
            ) +
            `${teotheNPC.ptraits.traits1}${teotheNPC.ptraits.traits2}${teotheNPC.description.pronounCapit} sounds ${teotheNPC.local.voice}, knows ${teotheNPC.local.languages}. ${teotheNPC.hook.description} ${teotheNPC.pquirks.description} ${teotheNPC.ptraits.traitslizards} ${teotheNPC.ptraits.traitsgoliaths} ${teotheNPC.religion.description}.`.replace(
              /  +/g,
              " "
            )
        );
        break;
      case "stat":
        navigator.clipboard.writeText(
          `${teotheNPC.name}\r\nMedium Humanoid (${
            teotheNPC.description.species
          } ${teotheNPC.description.gender})\r\nArmor Class ${
            8 +
            Number(statBonusHash[teotheNPC.stats[1]]) +
            Number(statBonusHash[teotheNPC.stats[2]])
          } (+5 with mage armor)\r\nHit Points ${Math.floor(
            (teotheNPC.stats[0] +
              teotheNPC.stats[1] +
              teotheNPC.stats[2] * 1.5 +
              6) /
              4
          )}\r\nSpeed 30 ft.\r\n` +
            `STR DEX CON INT WIS CHA\r\n` + //For newline hopefully
            `${teotheNPC.stats[0]} (${statBonusHash[teotheNPC.stats[0]]}) ${
              teotheNPC.stats[1]
            } (${statBonusHash[teotheNPC.stats[1]]}) ${teotheNPC.stats[2]} (${
              statBonusHash[teotheNPC.stats[2]]
            }) ${teotheNPC.stats[3]} (${statBonusHash[teotheNPC.stats[3]]}) ${
              teotheNPC.stats[4]
            } (${statBonusHash[teotheNPC.stats[4]]}) ${teotheNPC.stats[5]} (${
              statBonusHash[teotheNPC.stats[5]]
            })\r\n` +
            `Saving Throws\r\n` +
            `Skills\r\n` +
            `Damage Resistances\r\n` +
            `Damage Immunities\r\n` +
            `Condition Immunities\r\n` +
            `Senses darkvision 30 ft., passive Perception ${
              10 + Number(statBonusHash[teotheNPC.stats[4]])
            }\r\n` +
            `Languages ${teotheNPC.local.languages}\r\n` +
            `Challenge 0 (0 XP) Proficiency Bonus +2\r\n` +
            `Philosophy. ${teotheNPC.alignment}. ${teotheNPC.religion.description}\r\n` +
            `Profession. ${
              teotheNPC.description.occupation.charAt(0).toUpperCase() +
              teotheNPC.description.occupation.substring(1)
            }`
        );
        break;
      default:
        break;
    }
  };

  // Added as an AI image descriptor
  const handleAIPromptClick = (teotheNPC: TeotheNPC) => {
    navigator.clipboard.writeText(
      `A ${teotheNPC.description.age} years old ${teotheNPC.description.species} ${teotheNPC.description.gender} working as a ${teotheNPC.description.occupation}.\r\n`.replace(
        /  +/g,
        " "
      ) +
        `${teotheNPC.description.pronounCapit} has ${teotheNPC.physical.hair} ${teotheNPC.physical.eyes}. ${teotheNPC.description.pronounCapit} has ${teotheNPC.physical.skin}. ${teotheNPC.description.pronounCapit} has ${teotheNPC.physical.build} with ${teotheNPC.physical.face}. ${teotheNPC.physical.special1} ${teotheNPC.physical.special2}`.replace(
          /  +/g,
          " "
        )
    );
  };

  /** This is the main area for the Teothe style NPC generation
   * This NPC generation is also compatible with Fantasy Grounds
   * as of 2024 February. This requires two buttons, one to copy
   * the stat block and another to copy the description. Any sort
   * of AI generated content for the description area to further
   * develop the NPC could be interesting. Please see and try new
   * approaches on this page, and in this area, and make sure you
   * can import it to Fantasy Grounds.
   */

  // Defines TeotheNPC type
  interface TeotheNPC {
    description: {
      age: number;
      gender: string;
      species: string;
      occupation: string;
      pronounMinus: string;
      pronounCapit: string;
    };
    physical: {
      hair: string;
      eyes: string;
      skin: string;
      height: number;
      build: string;
      face: string;
      special1: string;
      special2: string;
    };
    relationship: {
      orientation: string;
      status: string;
    };
    religion: {
      description: string;
    };
    ptraits: {
      traitslizards: string;
      traitsgoliaths: string;
      traits1: string;
      traits2: string;
    };
    pquirks: {
      description: string;
    };
    hook: {
      description: string;
    };
    name: string;
    stats: number[];
    alignment: string;
    local: {
      languages: string;
      voice: string;
    };
  }

  // Utility to convert alignment numbers to readable alignment
  function alignmentPrefixer(
    lawful: number,
    ethicalneutral: number,
    chaotic: number,
    good: number,
    moralneutral: number,
    evil: number
  ) {
    let alignment = "";
    if (lawful > chaotic && lawful >= ethicalneutral) {
      alignment = "Lawful";
    } else if (chaotic > lawful && chaotic >= ethicalneutral) {
      alignment = "Chaotic";
    } else if (chaotic <= ethicalneutral && lawful <= ethicalneutral) {
      alignment = "Neutral";
    } else if (chaotic == lawful) {
      // and also greater than neutral
      alignment = "Any";
    }

    if (good > evil && good >= moralneutral) {
      alignment += " Good";
    } else if (evil > good && evil >= moralneutral) {
      alignment += " Evil";
    } else if (evil <= moralneutral && good <= moralneutral) {
      alignment += " Neutral";
    } else if (evil == good) {
      // and also greater than neutral
      alignment += " Any";
    }

    return alignment;
  }

  function DevelopNPC(
    objectToUse: NpcGenerateOptions | undefined = undefined
  ): TeotheNPC {
    const { npc } = generate({ npcOptions: objectToUse });

    return {
      physical: {
        hair: npc.physical.hair,
        eyes: npc.physical.eyes,
        skin: npc.physical.skin,
        height: npc.physical.height,
        build: npc.physical.build,
        face: npc.physical.face,
        special1: npc.physical.special1,
        special2: npc.physical.special2,
      },
      relationship: {
        orientation: npc.relationship.orientation,
        status: npc.relationship.status,
      },
      religion: {
        description: npc.religion.description,
      },
      ptraits: {
        traitslizards: npc.ptraits.traitslizards,
        traitsgoliaths: npc.ptraits.traitsgoliaths,
        traits1: npc.ptraits.traits1,
        traits2: npc.ptraits.traits2,
      },
      pquirks: {
        description: npc.pquirks.description,
      },
      hook: {
        description: npc.hook.description,
      },
      name: npc.description.name,
      stats: [
        npc.abilities.strength,
        npc.abilities.dexterity,
        npc.abilities.constitution,
        npc.abilities.intelligence,
        npc.abilities.wisdom,
        npc.abilities.charisma,
      ],
      alignment: alignmentPrefixer(
        npc.alignment.lawful,
        npc.alignment.ethicalneutral,
        npc.alignment.chaotic,
        npc.alignment.good,
        npc.alignment.moralneutral,
        npc.alignment.evil
      ),
      description: {
        pronounCapit: npc.description.pronounCapit,
        pronounMinus: npc.description.pronounMinus,
        age: npc.description.age,
        gender: npc.description.gender,
        occupation: npc.description.occupation,
        species: npc.description.race,
      },
      local: {
        languages: languages[Math.floor(Math.random() * languages.length)],
        voice: voices[Math.floor(Math.random() * voices.length)],
      },
    };
  }

  return (
    <>
      <Space wrap>
        <Button onClick={() => handleButtonClick("norm")}>
          {displayEmpty ? "Generate Quick NPC" : "Generate New Quick NPC"}
        </Button>
        {!displayEmpty && (
          <>
            <Divider type="vertical" style={{ borderColor: "white" }} />
            <span>Copy </span>
            <Button
              onClick={() => handleFantasyGroundsClick("stat", teotheNPC)}
            >
              Statblock for FGU
            </Button>
            <Button
              onClick={() => handleFantasyGroundsClick("desc", teotheNPC)}
            >
              Description for FGU
            </Button>
            <Button onClick={() => handleAIPromptClick(teotheNPC)}>
              Generative Prompt for AI
            </Button>
          </>
        )}
      </Space>
      <Divider />
      <Space wrap>
        Species:{" "}
        <Dropdown
          overlayStyle={{
            scrollbarWidth: "thin",
            scrollBehavior: "smooth",
          }}
          dropdownRender={(menu) => (
            <div className="max-h-64 overflow-y-scroll no-scrollbar">
              {menu}
            </div>
          )}
          menu={speciesProps}
        >
          <Button>
            <Space>
              {speciesProps.items[Number(speciesNo)]
                ? speciesProps.items[Number(speciesNo)].label
                : speciesNo}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        Gender:{" "}
        <Dropdown menu={genderProps}>
          <Button>
            <Space>
              {genderProps.items[Number(genderNo)]
                ? genderProps.items[Number(genderNo)].label
                : genderNo}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        Occupation:{" "}
        <Dropdown menu={occupationProps}>
          <Button>
            <Space>
              {occupationProps.items[Number(occupationNo)]
                ? occupationProps.items[Number(occupationNo)].label
                : occupationNo}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        Tendency:{" "}
        <Dropdown menu={alignmentProps}>
          <Button>
            <Space>
              {/* Absolutely random missing alignment on the npc-library, so we subtract 1 from the alignmentNo number on display */}
              {alignmentProps.items[Number(alignmentNo) - 1]
                ? alignmentProps.items[Number(alignmentNo) - 1].label
                : alignmentNo}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <Divider type="vertical" style={{ borderColor: "white" }} />
        <Button onClick={() => handleButtonClick("spcf")}>
          {displayEmpty ? "Generate Specific NPC" : "Generate New Specific NPC"}
        </Button>
      </Space>
      <Divider />
      {displayEmpty ? (
        <Empty />
      ) : (
        <>
          <SimpleContent
            contentProps={{
              title: teotheNPC.name,
              text: [
                `${teotheNPC.name} (${teotheNPC.alignment}) is a ${
                  teotheNPC.description.age
                } years old, ${teotheNPC.relationship.orientation.toLowerCase()} ${
                  teotheNPC.description.species
                } ${teotheNPC.description.gender}. ${
                  teotheNPC.description.pronounCapit
                } is a ${teotheNPC.description.occupation}. ${
                  teotheNPC.description.pronounCapit
                } is ${teotheNPC.relationship.status.toLocaleLowerCase()}. `,
                `${teotheNPC.description.pronounCapit} has ${teotheNPC.physical.hair} ${teotheNPC.physical.eyes}. Their ${teotheNPC.physical.skin} contribute to a distinctive appearance. ${teotheNPC.description.pronounCapit} has ${teotheNPC.physical.build} with ${teotheNPC.physical.face}. ${teotheNPC.physical.special1} ${teotheNPC.physical.special2}`,
                `${teotheNPC.ptraits.traits1}${teotheNPC.ptraits.traits2}${teotheNPC.description.pronounCapit} sounds ${teotheNPC.local.voice}, knows ${teotheNPC.local.languages}. ${teotheNPC.hook.description} ${teotheNPC.pquirks.description} ${teotheNPC.ptraits.traitslizards} ${teotheNPC.ptraits.traitsgoliaths} ${teotheNPC.religion.description}. `,
              ],
            }}
          />
          <Divider />
          <SimpleContent
            contentProps={{
              title: "Statblock",
              text: [
                `Medium Humanoid (${teotheNPC.description.species} ${teotheNPC.description.gender})`,
                `Armor Class ${
                  8 +
                  Number(statBonusHash[teotheNPC.stats[1]]) +
                  Number(statBonusHash[teotheNPC.stats[2]])
                } (+5 with mage armor)`,
                `Hit Points ${Math.floor(
                  (teotheNPC.stats[0] +
                    teotheNPC.stats[1] +
                    teotheNPC.stats[2] * 1.5 +
                    6) /
                    4
                )}`,
                `Speed 30 ft.`,
                `Strength: ${teotheNPC.stats[0]}, Dexterity: ${teotheNPC.stats[1]}, Constitution: ${teotheNPC.stats[2]} Intelligence: ${teotheNPC.stats[3]}, Wisdom: ${teotheNPC.stats[4]}, Charisma: ${teotheNPC.stats[5]}`,
                `Senses darkvision 30 ft., passive Perception ${
                  10 + Number(statBonusHash[teotheNPC.stats[4]])
                }`,
                `Languages ${teotheNPC.local.languages}`,
                `Challenge 0 (0 XP) Proficiency Bonus +2`,
                `Philosophy. ${teotheNPC.alignment}. ${teotheNPC.religion.description}`,
                `Profession. ${
                  teotheNPC.description.occupation.charAt(0).toUpperCase() +
                  teotheNPC.description.occupation.substring(1)
                }`,
              ],
            }}
          />
        </>
      )}
    </>
  );
}

// Main component rendering the page
export default function QuickNPCGeneratorContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Generators,Quick NPC Generator"} />
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Quick NPC Generator",
            text: [
              "The Teothe NPC Generator is a powerful tool for creating rich, immersive NPCs for D&D and D&D 5e campaigns, now fully compatible with Fantasy Grounds. Ideal for both Dungeon Masters and players, this NPC generator offers a massive selection of fantasy races from official D&D sources and homebrew content, ensuring characters that feel authentic in any setting. With customization options for gender, alignment, race, and more, Teothe’s NPC generator gives you full control over every detail, allowing you to create NPCs that perfectly fit your storyline.",
              "Teothe’s generator also includes a name generator, providing fantasy-themed names that align with each character's unique background. Each generated NPC includes a comprehensive stat block and background description, ready for immediate use. Simply copy the details to your clipboard for quick reference in any encounter. For added immersion, Teothe also offers AI-powered image generation to create visual representations of your characters, enhancing player engagement with custom portraits.",
              "Fast, reliable, and highly versatile, the Teothe NPC generator is an invaluable resource for any D&D 5e campaign, helping Dungeon Masters quickly build fantasy characters and populate worlds with detailed NPCs. Whether you need a quick character or an intricate story NPC, Teothe’s character generator combines official content and homebrew to give you everything you need, with seamless Fantasy Grounds integration for smooth gameplay.",
            ],
          }}
        />
        <Divider/>
        {GetQuickNPC()}
      </Card>
    </section>
  );
}
