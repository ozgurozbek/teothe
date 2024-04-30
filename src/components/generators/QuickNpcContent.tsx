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
} from "npc-generator";
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

// Utility for traits -> TODO: MOVE THEM TO THE NPC-GENERATOR REPO @TEOTHE BRANCH, there are many other areas for quirks.
var traits: string[] = [
  `Gourmand: Obsessed with food, cooks a lot.`,
  `Ascetic: Has forsaken physical comforts and enjoyments, enjoys simplicity.`,
  `Nimble: Moves around with ease as if they are dancing.`,
  `Clever: They are good at out-of-the-box thinking.`,
  `Open-Minded: Doesn't judge people often, will consider even the wildest claims.`,
  `Kind: Exceptionally agreeable, doesn't insult others.`,
  `Sanguine: Exceptionally upbeat, very difficult to lower their mood.`,
  `Optimist: Can always find the silver lining.`,
  `Steadfast: Mentally strong and doesn't crumble under stress.`,
  `Brave: Shows courage in the face of danger.`,
  `Iron Stomach: Has a strong resistance to ingesting contaminants and toxins.`,
  `Night Owl: Is usually awake at night and asleep during the day.`,
  `Masochist: Likes being subjected to pain.`,
  `Transhumanist: Wants to enhance their body through artifice or magic.`,
  `Tortured Artist: Feels misunderstood by other people, wants to create the greatest piece of art.`,
  `Chemical Fascination: Loves altering their mental state with drugs and chemicals, suffers withdrawal quickly.`,
  `Teetotaler: Abhors the idea of gaining pleasure from chemicals, doesn't drink or use drugs.`,
  `Absent-Minded: Will sometimes completely forget what they are doing.`,
  `Obsessed Worker: Always focused on their job, starts feeling uneasy when not working.`,
  `Perfectionist: Can't bear to stop working on something until it is perfect.`,
  `Lazy Worker: Hates their job, works slowly and would much rather be doing anything else.`,
  `Clumsy: Constantly fumbling and dropping things.`,
  `Fidgeter: Is constantly fiddling with something in their hand.`,
  `Neat: Their environment must always be clean and tidy.`,
  `Slob: Doesn't care about the cleanliness of their environment.`,
  `Animal Lover: Loves animals, and tends to be surrounded by them.`,
  `Animal Hater: Can't stand animals, and often tries to avoid them.`,
  `Rebellious: Dislikes authority, and resists any attempt at control over them.`,
  `Compliant: Always obeys authority, and shows little to no resistance to new rules.`,
  `Submissive: Meekly obedient to others, and shows no resistance in conflict.`,
  `Dominant: They must be the loudest voice, have their idea pursued, and be the most powerful in the room.`,
  `Party Animal: Loves parties, and often tries to organize them.`,
  `Introvert: Doesn't like too much social interaction, and tends to be timid or blunt in conversation.`,
  `Snob: Believes that they are of the highest class, and looks down upon those lesser than them.`,
  // `Squeamish: Gets grossed out easily.`, Already exists below, and is worse. Maybe update or remove.
  `Drunken Prodigy: Seems to perform better, work better, and just be better while they are drunk.`,
  `Stoned Prodigy: Seems to perform better, work better, and just be better while they are under the influence of drugs.`,
  `Hoplophobia: They are terrified of weapons.`,
  `Hoplophile: Has an irrational love for weaponry.`,
  `Autophobia: Has a fear of being alone.`,
  `Indecisive: Struggles to commit to a decision.`,
  `Hypochondriac: Is constantly concerned with their health, possibly believing that they have afflictions that they don't.`,
  `Twitchy: Some of their muscles seem to spasm at random.`,
  `Agoraphobia: Is scared of going outside.`,
  `Purist: Doesn't like people who are magically inclined.`,
  `Greedy: Always wants more, and gets mad if they don't get it.`,
  `Jealous: If they see something they don't have, they do what they need to get it.`,
  `Pyromaniac: They love watching and starting fires, and get angry when they are extinguished.`,
  `Sadist: Enjoys inflicting pain on others.`,
  `Wimp: Cowers at the slightest notion of violence.`,
  `Abrasive: Exceptionally blunt, doesn't consider people's feelings when talking.`,
  `Creepy Breathing: Breathes considerably heavily and sweats constantly.`,
  `Misandrist: Dislikes and distrusts men.`,
  `Misogynist: Dislikes and distrusts women.`,
  `Misanthrope: Dislikes and distrusts people, believes that all actions are taken for selfish reasons.`,
  `Pessimist: Always assumes the worst outcome.`,
  `Depressive: Perpetually in an awful mood, very difficult to raise their mood.`,
  `Nervous: Feels the strain from stress more than others.`,
  `Volatile: Even the smallest thing can make them explode, very quick to break under stress.`,
  `Sickly: They are far more likely to get sick than others.`,
  `Insomniac: Forever tired, they can't seem to get a good night's rest.`,
  `World Weary: Well-versed in world/country/state politics, but is very anxious about the fallout of world events.`,
  `Desensitized: They have seen so many traumatic events that those same events no longer faze them.`,
  `Tycoon: Always looking for business opportunities, they want to own it all.`,
  // Rephrase these to fit in with the above, where necessary.
  `Austere: Prefers the simple, simple life.`,
  `Book Burner: Is certain dry satire burns the hottest.`,
  `Braggart: Every victory, real or imagined, recounted for all, time and time again.`,
  `Chatterbox: Just. Won't. Stop. Talking.`,
  `Cowardice: No taste for thrill or danger.`,
  `Curmudgeon: Begrudgingly accepts the existence of others.`,
  `Darkly Curious: Prone to investigating the Dark Arts.`,
  `Doomsayer: Believes this all won't end well.`,
  `Cadaver Fearing: Pair me not with the husk of the departed or I shall crumble myself.`,
  `Undercommon Fearing: Underdark beings strike terror in their heart.`,
  `Cosmic Fearing: Trepidatious towards things from the Abyss and beyond.`,
  `Pillager Fearing: Bandits evoke a certain childhood trauma.`,
  `Germophobia: Pestilence lurks on every surface.`,
  // `Greedy: Always focused on their share.`, Already exists above, but can be repurposed or deleted
  `Hydrophobic: No greater terror than cool, refreshing water.`,
  // `Hypochondriac: Imagines contracting every manner of illness from enemies.`, Already exists above, but can be repurposed or deleted
  `Kleptomania: Consumed by the urge to steal.`,
  `Lazy: Not motivated to do all that much.`,
  `Lost in Space: No longer has a firm grasp on the three dimensions we depend on.`,
  `Lost in Time: Time has become an impenetrable maze.`,
  `Melophobic: Music is the trigger for deep-seated resentment.`,
  `Needler: Sharp wit, sharper words.`,
  `Occultomaniac: Enthralled with hidden cults and their trappings.`,
  `Occultophobic: Terrified of hidden cults and their influence.`,
  // `Pyromaniac: O What Fun Fire Brings For Me And Thee.`, Already exists above, but can be repurposed or deleted
  `Resolute: Has sworn off the bottle.`,
  `Selfish: Puts their own interests first.`,
  `Squeamish: Disgusted by viscera and bodily fluids.`,
  `Thanatophobia: Fear of death and dying.`,
  `Vicious: Never pulls a punch.`,
  `Tune Hummer: A hum for every occasion.`,
  `Zoophobia: Intense fear of animals and non-human creatures.`,
  // `Ascetic: Denial of pleasure in order to refine the spirit.`, This is not the same as above, change its name maybe?
  `Bon Vivant: Let's knock one back and enjoy what life has to offer!.`,
  `Compassionate: Ability to understand the trials of another.`,
  `Death Seeker: Revels in the proximity of their own end.`,
  `Devout: Committed to a power beyond themselves.`,
  `Generous: Willing to give what is asked of them.`,
  `Peacemaker: Surely, violence is the last resort.`,
  `Raconteur: Knows how to weave an absorbing tale.`,
  `Rummager: No stone left unturned.`,
  // `Sanguine: A bright future can yet still be seen.`, Already exists above, but can be repurposed or deleted
  `Sneaky: Likes to stay hidden and evasive.`,
  `Steady: A grounding aura surrounds this one.`,
  `Stress Knitter: The knitting needles fly when stress is high.`,
  `Thanatomaniac: Obsessed with death and what lies beyond this mortal coil.` 
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
  const [raceNo, setRaceNo] = useState("N/A");
  const [genderNo, setGenderNo] = useState("N/A");
  const [alignmentNo, setAlignmentNo] = useState("N/A");
  const [occupationNo, setOccupationNo] = useState("N/A");
  const [npcOptionsObject, setNpcOptionsObject] = useState<
    NpcGenerateOptions | undefined
  >(undefined);
  const [teotheNPC, setTeotheNPC] = useState<TeotheNPC>(DevelopNPC());

  // Generates NPC options from the library
  const npcOptionsValues = getNpcOptionsValues();

  /* RACES */
  const handleRaceClick: MenuProps["onClick"] = (e) => {
    setRaceNo(e.key);
    setNpcOptionsObject({
      race: Number(e.key),
      gender: npcOptionsObject?.gender,
      classorprof: npcOptionsObject?.classorprof,
      alignment: npcOptionsObject?.alignment,
    });
  };

  const raceProps = {
    items: npcOptionsValues.races.map(racesMapper),
    onClick: handleRaceClick,
  };

  // Utility for race dropdown, has an issue with their displays
  function racesMapper(raceObject: {
    name: string;
    value: number;
    subraces: GenerateOptionValueSimple | undefined;
  }) {
    return { label: raceObject.name, key: raceObject.value };
  }
  /* RACES END */

  /* GENDER */
  const handleGenderClick: MenuProps["onClick"] = (e) => {
    setGenderNo(e.key);
    setNpcOptionsObject({
      race: npcOptionsObject?.race,
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
      race: npcOptionsObject?.race,
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
      race: npcOptionsObject?.race,
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
            teotheNPC.description.race
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
            `${teotheNPC.ptraits.traits1}${teotheNPC.ptraits.traits2}${
              teotheNPC.description.pronounCapit
            } sounds ${teotheNPC.local.voice}, knows ${
              teotheNPC.local.languages
            }. ${teotheNPC.hook.description} ${
              teotheNPC.pquirks.description
            } and is known for being ${teotheNPC.local.trait.toLowerCase()} ${
              teotheNPC.ptraits.traitslizards
            } ${teotheNPC.ptraits.traitsgoliaths} ${
              teotheNPC.religion.description
            }.`.replace(/  +/g, " ")
        );
        break;
      case "stat":
        navigator.clipboard.writeText(
          `${teotheNPC.name}\r\nMedium Humanoid (${
            teotheNPC.description.race
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
      race: string;
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
      trait: string;
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
        race: npc.description.race,
      },
      local: {
        trait: traits[Math.floor(Math.random() * traits.length)],
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
        <Button onClick={() => handleFantasyGroundsClick("stat", teotheNPC)}>
          {displayEmpty ? "Generate First" : "Statblock for FGU"}
        </Button>
        <Button onClick={() => handleFantasyGroundsClick("desc", teotheNPC)}>
          {displayEmpty ? "Generate First" : "Description for FGU"}
        </Button>
      </Space>
      <Divider />
      <Space wrap>
        Race:{" "}
        <Dropdown menu={raceProps}>
          <Button>
            <Space>
              {raceNo}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        Gender:{" "}
        <Dropdown menu={genderProps}>
          <Button>
            <Space>
              {genderNo}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        Occupation:{" "}
        <Dropdown menu={occupationProps}>
          <Button>
            <Space>
              {occupationNo}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        Tendency:{" "}
        <Dropdown menu={alignmentProps}>
          <Button>
            <Space>
              {alignmentNo}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
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
                  teotheNPC.description.race
                } ${teotheNPC.description.gender}. ${
                  teotheNPC.description.pronounCapit
                } is a ${teotheNPC.description.occupation}. ${
                  teotheNPC.description.pronounCapit
                } is ${teotheNPC.relationship.status.toLocaleLowerCase()}. `,
                `${teotheNPC.description.pronounCapit} has ${teotheNPC.physical.hair} ${teotheNPC.physical.eyes}. Their ${teotheNPC.physical.skin} contribute to a distinctive appearance. ${teotheNPC.description.pronounCapit} has ${teotheNPC.physical.build} with ${teotheNPC.physical.face}. ${teotheNPC.physical.special1} ${teotheNPC.physical.special2}`,
                `${teotheNPC.ptraits.traits1}${teotheNPC.ptraits.traits2}${
                  teotheNPC.description.pronounCapit
                } sounds ${teotheNPC.local.voice}, knows ${
                  teotheNPC.local.languages
                }. ${teotheNPC.hook.description} ${
                  teotheNPC.pquirks.description
                } and is known for being ${teotheNPC.local.trait.toLowerCase()} ${
                  teotheNPC.ptraits.traitslizards
                } ${teotheNPC.ptraits.traitsgoliaths} ${
                  teotheNPC.religion.description
                }. `,
              ],
            }}
          />
          <Divider />
          <SimpleContent
            contentProps={{
              title: "Statblock",
              text: [
                `Medium Humanoid (${teotheNPC.description.race} ${teotheNPC.description.gender})`,
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
        {GetQuickNPC()}
      </Card>
    </section>
  );
}
