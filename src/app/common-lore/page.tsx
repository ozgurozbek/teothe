"use client";

import { Button, Card, Divider } from "antd";
import GetCrumbs from "@/components/NavigationCrumb";
import SimpleContent from "@/components/SimpleCon";
import { DoubleRightOutlined } from "@ant-design/icons";
/**
 * Uses SimpleContent to generate a page full of text describing the common lore of teothe.
 * @tutorial
 * @see SimpleContent
 * @returns Card(antd) wrapped by section
 */
export default function CommonLorePage() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Common Lore"} />
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
            image: {
              src: "./wheel.png",
              alt: "Wheel Cosmology",
            },
            title: "Dimensional Cosmology",
            text: [
              "The Wheel Cosmology in Teothe is a conceptual framework that organizes the multiverse into a series of interconnected planes and realms. It envisions existence as a great wheel with various planes revolving around a central hub, the Marble. The cosmology encompasses the Far Realms, Outer Planes representing different alignments, Inner Planes embodying elemental forces, the Astral Sea connecting all planes, and additional planes like the Feywild and Shadowfell that mirror and intersect with the Material Plane. This cosmological model provides a structured and interconnected backdrop for adventures and campaigns, offering a vast array of realms and dimensions for exploration and storytelling.",
              "Material Plane: The planes of existence where most D&D adventures take place. It is a diverse and varied world, consisting of continents, seas, and skies. It is the realm inhabited by mortals, and it serves as a central hub connecting with other planes. Teothe is one of many material planes, inhabited by a diverse selection of races across all continents.",
              "Feywild: Also known as the Plane of Faerie, it is a vibrant and magical reflection of the Material Plane. It is home to fey creatures, such as fairies, elves, and other enchanted beings. Time and nature behave differently in the Feywild.",
              "Shadowfell: A dark and gloomy plane that mirrors the Material Plane, associated with darkness, decay, and negative emotions. It is a realm of shadows and is inhabited by undead creatures and other dark entities. Time and nature behave differently in the Shadow plane.",
              "Ethereal Plane: A misty and insubstantial realm that coexists with the Material Plane. It is often accessed through magical means and is used for travel and interaction with ethereal beings and objects.",
              "Elemental Planes: In addition to the Inner Planes, there are also Para-Elemental Planes and Quasi-Elemental Planes. The Para-Elemental Planes lie between two adjacent Inner Planes and contain a blend of elemental energies. The Quasi-Elemental Planes exist between the Elemental Planes and combine elemental forces with other phenomena like ash, steam, ice, and more.",
              "Inner Planes: Elemental planes that embody the raw forces of nature. They include the Elemental Plane of Fire, Elemental Plane of Water, Elemental Plane of Air, and Elemental Plane of Earth. Each plane is abundant in its corresponding elemental energy.",
              "Outer Planes: A collection of planes representing different moral and ethical alignments. These planes include the Overseer realms. They are home to powerful deities and beings embodying these alignments.",
              "Astral Sea: The plane that connects all the other planes, serving as a vast void of silvery mist. It is traversed by the Astral Projection and acts as a conduit between different realms. It is also home to astral creatures.",
              "Far Realms: A plane of existence that lies beyond the known multiverse, characterized by eldritch and incomprehensible entities. It is a realm of madness and alien horrors. Even sympathizing with such concepts is forbidden in most material planes including Teothe.",
              "These summaries provide a brief overview of each component within the Dimensional Cosmology of Teothe, offering a glimpse into the diverse and interconnected planes that players and characters may explore during their adventures.",
            ],
          }}
        />
        <Button href="/planes">
          <span>
            See Planes <DoubleRightOutlined />
          </span>
        </Button>
        <Divider />
        <SimpleContent
          contentProps={{
            title: "Gate Keepers",
            text: [
              "All take their power from Mceeju so all are close to gods in power. In Teothe, Gate Keepers are a topic of interest for many sages and very little about them is known.",
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
              "Ancients all take their power from Mceeju so all are close to gods in power. People of Teothe, the ones who know about ancients, believe all of them to be perished over time. ",
              "An old civilization that has evolved and found great meaning in both magic and immortality. They made immortality possible and destroyed every meaning they've found within it. With their last magic, they left a warning for future, unfortunately too difficult to grasp, lacking their understanding of magic, life and time. They managed to process light, and believed to achieve a hive-mind society. Nobody knows how they disappeared.",
              "Their offsprings from humans tend to get a disoriented body with partial ancient bodyparts. They live for about a millenia years without aging beyond their thirties, body-wise. They are sterile. Even though some were legends, no half-ancient have been spotted in Teothe in centuries.",
              "The last Ancient Relic dwindled out of existance, causing the Blue Era in Teothe. Steram Wayogo, known as the last half-ancient embarked on a journey across countless marbles sealing Ancient Gates, that once provided a unique magical flow to the Material Planes.",
            ],
          }}
        />
        <Divider />
        <SimpleContent
          contentProps={{
            title: "Domains",
            text: [
              "Deities of Teothe are divided into 8 domains. These domains are Nature, Tempest, Trickery, Death, Knowledge, War, Life and Light. Most Deities exist within one to two domains.",
              "Pantheon deities use fundamental domains. Gameplay-wise, other domains like Endless domains (destruction, destiny, despair, desire, delirium, dream), Broad domains (decay, drama, fabrication, fate, time, distance, potential) or ones introduced in XGE (forge, grave), or UA (order) are welcome.",
            ],
          }}
        />
        <Button href="/deities">
          <span>
            See Deities <DoubleRightOutlined />
          </span>
        </Button>
      </Card>
    </section>
  );
}
