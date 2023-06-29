import { Card, Divider } from "antd";
import GetCrumbs from "@/components/NavigationCrumb";
import SimpleContent from "@/components/SimpleCon";

export default function CommonLorePage() {
  return (
    <section>
      <GetCrumbs path={"Pages,Common Lore"} />
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Intro",
            text: [
              'Long before their battles, gods were once "All," harnessing the energy and magic of reality. However, their egos led to conflicts and the need to determine superiority. Lesser creatures desired an end to the fighting, but gods, being immortal and unforgiving, couldn\'t accept another "Perfect Being\'s" actions.',
              "Eventually, prayers were answered, and the gods ceased fighting, but this created a worse situation. They stopped communicating and individually created humans from Mceeju, who, despite their differences, served the gods. The gods made peace with their divergences and established various races within the Astral Sea.",
              "Humans, lacking intelligence and divine guidance, possessed magic but often perished due to imperfections. Their deaths released magic into the universe. The gods accepted their punishment and judged themselves, losing their perfect nature and becoming distinct from one another.",
              "The gods continued to create humans, who exhibited predictable yet mysterious traits. They showed mercy and guided some humans towards greatness, rewarding them with demigod status. However, such accomplishments became scarce over time.",
              "Despite sharing the same creators, races clashed or multiplied uncontrollably, losing control of the Weave and facing an unstoppable force: Mceeju.",
              "Mceeju divided the Astral Sea, creating the Material Planes and the Inner Worlds while isolating the Elemental Chaos with a dimensional barrier. Races were divided, and even the gods' domains were split. The Overworld, Underworld, and Outer Worlds emerged.",
              "With newfound freedom, the gods led by Mceeju's order. Some stayed united, some pursued separate paths, and others descended to the Material Planes.",
            ],
          }}
        />
        <Divider />
        <SimpleContent
          contentProps={{
            title: "Gate Keepers",
            text: [
              "All take their power from Mceeju so all are close to gods in power.",
              "Images of Raajod are the gate-keepers of Overworld Vocals that are in Outer Realms for many marbles.",
              "Images of Raxy are the gate-keepers of Underworld Vocals that are in Outer Realms for many marbles.",
              "Onposufm or Wefhiza maintains order in the Astral Sea, but is believed to be the guardian of accidents.",
            ],
          }}
        />
        <Divider />
        <SimpleContent
          contentProps={{
            title: "Ancients",
            text: [
              "All take their power from Mceeju so all are close to gods in power.",
              "An old civilization that has evolved and found great meaning in both magic and immortality. They made immortality possible and destroyed every meaning they've found within it. With their last magic, they left a warning for future, unfortunately too difficult to grasp, lacking their understanding of magic, life and time. They managed to process light, and believed to achieve a hive-mind society. Nobody knows how they disappeared.",
              "Their offsprings from humans tend to get a disoriented body with partial ancient bodyparts. They live for about a millenia years without aging beyond their thirties, body-wise. They are sterile.",
              "The last Ancient Relic dwindled out of existance, causing the Blue Era in Teothe. Steram Wayogo, known as the last half-ancient embarked on a journey across countless marbles sealing Ancient Gates, that once provided a unique magical flow to the Material Planes.",
            ],
          }}
        />
        <Divider />
        <SimpleContent
          contentProps={{
            title: "Domains",
            text: [
              "Nature, Tempest, Trickery, Death, Knowledge, War, Life and Light.",
              "Pantheon deities use fundamental domains. Gameplay-wise, other domains like Endless domains (destruction, destiny, despair, desire, delirium, dream), Broad domains (decay, drama, fabrication, fate, time, distance, potential) or ones introduced in XGE (forge, grave), or UA (order) are welcome.",
            ],
          }}
        />
      </Card>
    </section>
  );
}
