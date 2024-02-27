"use client";

import { Button, Card, Divider, Empty, Skeleton } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import { useState } from "react";
import SimpleContent from "@/components/SimpleCon";
import { generate } from "npc-generator";

/**
 * React component for rendering a Quest Idea Generator interface.
 * The component includes a button that, when clicked, conditionally fetches data from an API using the useSWR hook.
 * The fetched data is displayed or replaced with a loading skeleton based on the fetch state.
 * The component utilizes the useMemo hook to memoize the handleButtonClick function, preventing unnecessary re-fetching on each render.
 * @generator
 * @returns JSX elements representing the Quest Idea Generator interface.
 */
function GetQuickNPC() {
  const [displayEmpty, setDisplayEmpty] = useState(true);
  const [innerText, setInnerText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleButtonClick = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://xeculus.pythonanywhere.com/npc_generate"
      );

      if (!response.ok) {
        throw new Error("Failed to access Quest Idea Generator API");
      }

      const data = await response.text();

      setInnerText(data);
      setDisplayEmpty(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    } //I like this approach better, it'd help us retry if something goes wrong - Unlike the rest of the fetchers
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
  interface TeotheNPC {
    name: string;
    stats: number[];
    alignment: number[];
    description: {
      age: number;
      gender: string;
      name: string;
      occupation: string;
      race: string;
      hair: string;
      eyes: string;
      skin: string;
      build: string;
      face: string;
      special1: string;
      special2: string;
    };
    NPCGen: {
      languagesAndIssues: string;
      alignmentAndFaith: string;
      skillAndVoice: string;
    };
    quirks: {
      hook: string;
      orientation: string;
      quirk: string;
      trait: string;
    };
  }

  function DevelopNPC(responseText: string): TeotheNPC {
    const { npc } = generate();

    const NPCGenResponse: string[] = responseText.split(". ");

    const traits: string[] = [
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
      `Squeamish: Gets grossed out easily.`,
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
    ];

    // This is very cursed, 10th character is always unique and describes the NPCs stat tendency. Merging xeculus.pythonanywhere with the npc library requires matching stats.
    let abilityPrefixer = NPCGenResponse[3];
    if (abilityPrefixer) {
      switch (abilityPrefixer[10]) {
        case "n":
          npc.abilities.intelligence += 5;
          break;
        case "i":
          npc.abilities.wisdom += 5;
          break;
        case "t":
          npc.abilities.strength += 5;
          break;
        case "o":
          npc.abilities.constitution += 5;
          break;
        case "e":
          npc.abilities.dexterity += 5;
          break;
        case "h":
          npc.abilities.charisma += 5;
          break;
        default:
          break;
      }
    }

    return {
      name: npc.description.name,
      stats: [
        npc.abilities.strength,
        npc.abilities.dexterity,
        npc.abilities.constitution,
        npc.abilities.intelligence,
        npc.abilities.wisdom,
        npc.abilities.charisma,
      ],
      alignment: [
        npc.alignment.lawful - npc.alignment.chaotic,
        npc.alignment.good - npc.alignment.evil,
      ],
      description: {
        age: npc.description.age,
        gender: npc.description.gender,
        name: npc.description.name,
        occupation: npc.description.occupation,
        race: npc.description.race,
        hair: npc.physical.hair,
        eyes: npc.physical.eyes,
        skin: npc.physical.skin,
        build: npc.physical.build,
        face: npc.physical.face,
        special1: npc.physical.special1,
        special2: npc.physical.special2,
      },
      NPCGen: {
        languagesAndIssues: NPCGenResponse[1],
        alignmentAndFaith: NPCGenResponse[2],
        skillAndVoice: NPCGenResponse[3],
      },
      quirks: {
        hook: npc.hook.description,
        orientation: npc.relationship.orientation,
        quirk: npc.pquirks.description,
        trait: traits[Math.floor(Math.random() * traits.length)],
      },
    };
  }

  let outputNPC = DevelopNPC(innerText);

  return (
    <>
      <Button onClick={handleButtonClick}>
        {displayEmpty ? "Generate Quest Idea" : "Generate New Quest Idea"}
      </Button>
      <Divider />
      {loading ? (
        <Skeleton active />
      ) : displayEmpty ? (
        <Empty />
      ) : (
        <SimpleContent
          contentProps={{
            title: outputNPC.name,
            text: [
              // `You encounter a character who exudes an aura of ${outputNPC.alignment[0]} lawfulness and ${outputNPC.alignment[1]} goodness.`,
              `They are ${outputNPC.description.age} years old.`,
              `Strength: ${outputNPC.stats[0]}, Dexterity: ${outputNPC.stats[1]}, Constitution: ${outputNPC.stats[2]},`,
              `Intelligence: ${outputNPC.stats[3]}, Wisdom: ${outputNPC.stats[4]}, Charisma: ${outputNPC.stats[5]}.`,
              `This ${outputNPC.description.gender} individual goes by the name of ${outputNPC.description.name} and is known for their ${outputNPC.description.occupation} profession.`,
              `Belonging to the ${outputNPC.description.race} race, their ${outputNPC.description.hair}, ${outputNPC.description.eyes}, and ${outputNPC.description.skin} contribute to a distinctive appearance.`,
              `They have ${outputNPC.description.build} with a ${outputNPC.description.face}. ${outputNPC.description.special1} ${outputNPC.description.special2}`,
              `${outputNPC.quirks.quirk} and is known for being ${outputNPC.quirks.trait}`,
              `${outputNPC.quirks.hook} They identify as ${outputNPC.quirks.orientation}.`,
              `When it comes to communication: ${outputNPC.NPCGen.languagesAndIssues}. ${outputNPC.NPCGen.alignmentAndFaith}.`,
              `In the realm of skills and voice, ${outputNPC.NPCGen.skillAndVoice}.`
            ],
          }}
        />
      )}
    </>
  );
}

// Main component rendering the page
export default function QuickNPCGeneratorPage() {
  return (
    <section>
      <GetCrumbs path={"Teothe3K,Generators,Quick NPC Generator"} />
      <Card bordered={false} className="w-full">
        {GetQuickNPC()}
      </Card>
    </section>
  );
}
