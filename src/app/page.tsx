"use client";

import React from "react";
import { Button, Card } from "antd";
import GetCrumbs from "@/components/NavigationCrumb";
import SimpleContent from "@/components/SimpleCon";
import { DoubleRightOutlined } from "@ant-design/icons";

/**
 * Main application component that renders the Teothe Campaign Setting.
 * @returns The application section containing breadcrumbs, a card with simple content, and information about the Teothe world.
 */
export default function App() {
  return (
    <section>
      <GetCrumbs path="Teothe" />
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Teothe Campaign Setting",
            text: [
              "Welcome to the world of Teothe, a universe of darkness and light, where planetary planes and endless possibilities intertwine. Once, the Astral Sea was reformed, and the gods favored their divinity upon the land, leading the people to prosper and thrive. Adventurers formed groups and traversed other nations, sparking cultural renaissances across history, religion, politics, and technology. The people reached such heights that they questioned the necessity of the gods themselves. With waning faith, the gods starved, and to prevent their demise, domains united. But as different philosophies collided, warped concepts merged, and the ties between planes were severed, setting the cogs of fate into motion.",
              "During this tumultuous era, the world witnessed the catastrophic 'Corrosion of Rods', an event that saw the clash of the Underworld and Overworld forces. In the aftermath of this clash, the divine rods that once connected the Material Planes were shattered, and the remnants formed a mysterious 'Divine Curtain' that now veils the material realms.",
              "Amidst the turmoil, the last incomprehensible Ancient artifact, which had long stood atop Teothe's desert, vanished into nothingness, leading the magic-affiliated mourn the loss of the opportunity to grasp the past's inherited knowledge.",
              "Now, the world of Teothe stands at a crossroads of chaos and potential. The rage and confusion manifested into the very weave of reality, altering the fabric of existence itself. As a brave adventurer, you will navigate the layered planes, delve into the hidden corners of the universe, encounter diverse beings that ignore gods, time, and even reality. Secluded planes devoid of life await rediscovery, while forgotten ways between planes offer new mysteries to unravel. Embrace your destiny as you embark on an epic adventure that will leave an indelible mark on this ever-evolving universe. The corrosion of rods and the divine curtain have changed Teothe forever, and it is up to you to shape its destiny in the face of darkness and light. The fate of Teothe lies in your hands as the rage and confusion manifested into the weave... our story begins.",
              "Will you be the harbinger of unity, seeking to reunite the gods' domains and breathe life back into faith, or will you embrace the wild currents of chaos and carve your unique path through the enigmatic realms? Delve into the annals of time, unearthing ancient knowledge to guide the people of Teothe towards magical wonders, or thread the path of logic, inventing technological marvels that defy the limits of imagination? Will you weave yourself into the tapestry of the people, embracing their hopes and dreams, or shall you embrace cunning stratagems, manipulating them all for personal gain? Face the dark corners of existence, cleansing the malevolent planes, and bringing radiant light into the shadows, or grasp dominion, seizing control to shape the fate of entire realms? Amidst these momentous choices, will you chase the elusive promises of eternity or humbly submit to the raw power of elemental forces?",
              "Teothe awaits your decisions, and with each step, the universe reshapes in the wake of your actions, weaving a story of epic proportions that echoes through the ages.",
            ],
          }}
        />
        <Button href="/common-lore">
          <span>
            See Common Lore <DoubleRightOutlined />
          </span>
        </Button>
      </Card>
    </section>
  );
}
