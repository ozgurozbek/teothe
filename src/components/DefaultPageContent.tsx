"use client";

import React from "react";
import { Button, Card, Divider } from "antd";
import GetCrumbs from "@/components/NavigationCrumb";
import SimpleContent from "@/components/SimpleCon";
import { DoubleRightOutlined } from "@ant-design/icons";

/**
 * Main application component that renders the Teothe Campaign Setting.
 * @returns The application section containing breadcrumbs, a card with simple content, and information about the Teothe world.
 */
export default function DefaultPageContent() {
  return (
    <section>
      <GetCrumbs path="Teothe" />
      <Card variant="outlined" className="w-full">
        <SimpleContent
          contentProps={{
            title: "Teothe Campaign Setting",
            text: [
"My Dear Stranger beyond the wall,",
"I do not know whether this letter shall reach a hand, an eye, or some altogether different instrument of comprehension. I have sent it through a breach in the Divine Curtain using a method that cost me three rare tomes, a perfectly good hat, and the patience of a deity. I consider the exchange favourable. One must occasionally sacrifice the present to satisfy the future, particularly when the future has the discourtesy to remain unknown.",
"You have not heard of Teothe, I imagine. Few beyond our walls have, and fewer still have reason to. Once, the sea bound our planes together, and the gods bestowed their power upon the worlds. We built temples, raised kingdoms, and mistook divine favour for an eternal arrangement. Then came the regrettable discovery that mortals could prosper without their benefactors. Faith diminished, the gods starved, and their desperate union of incompatible domains culminated in the corrosion. The overworld and underworld clashed, the divine rods shattered, and the roads between worlds were buried beneath the divine curtain. The gods survived, in one fashion or another. Certainty did not.",
"If you are inclined to regard this as ancient history, I recommend that you reconsider your definition of ancient. History in Teothe has an unfortunate habit of occurring faster than scholars can catalogue it.",
"Consider a city, whose Athenaeum once housed the accumulated wisdom of generations. A creature appeared within its halls, followed by another and another, and the resulting conflict claimed more than three and a half million dwarven lives. The city collapsed into its own subterranean depths, taking scholars, traders, and irreplaceable knowledge with it. Elsewhere, the Maggot-Eater brought a republic to ruin, while the death of a beloved Dwarven king fractured clans that had endured for generations. We have become exceptionally proficient at burying our history. The dirt, I fear, has begun to run out of room.",
"Yet Teothe is not merely a catalogue of disasters, however admirably extensive that catalogue has become. We have transformed our industries and our wars, forcing ancient traditions to contend with inventions that care very little for tradition. Volcanoes have redrawn the land and troubled the seas. A meteor, ominously known as the Bleeding Meteor, brought madness and visitors from beyond our skies. Divine intervention has opened distant territories to new peoples, while forgotten passages and isolated planes offer discoveries that our ancestors could scarcely have imagined.",
"And still, we know so little.",
"The last known artifact of the Pioneers vanished from our desert, leaving behind no satisfactory explanation and an embarrassing number of scholarly disputes. Their civilisation understood things that our finest minds can barely describe. Whether its disappearance was a consequence of the Corrosion or something altogether more deliberate remains unknown. I have several theories, all of them excellent, and none of them sufficiently proven to publish without inviting ridicule. Scholarship, you will discover, is the art of being correct in ways that are not yet demonstrable.",
"This brings me to the purpose of my letter.",
"This curtain is more than a boundary upon a map. It is the division between what we remember and what we have forgotten, between worlds we once traversed and those we can no longer reach. Beyond it, there may be civilisations untouched by our calamities, ruins older than the gods, or beings who have watched our history unfold with the detached interest of a naturalist observing insects. I confess I should find the last possibility particularly offensive.",
"If you possess knowledge of what lies beyond our heavens, I would have you share it. If you possess no such knowledge, then perhaps you might find some pleasure in acquiring it alongside us. There are lost realms to discover, old histories to challenge, new sciences to pursue, and powers whose names I have not yet had the pleasure of getting wrong.",
"I cannot promise you safety. Indeed, as a historian, I should consider such a promise a gross falsification of the evidence. But I can promise you that Teothe is seldom dull, frequently absurd, and possessed of mysteries enough to occupy a dozen lifetimes. I have spent mine in its archives and end, and I remain convinced that the most remarkable chapter has yet to be written.",
"Perhaps you shall write it. Perhaps you shall ruin everything. The distinction, in my experience, is rarely apparent until the second edition.",
"Should this letter find you, stranger, know that somewhere beneath our broken skies, a wizard waits for an answer. I have collected the accounts of kings, gods, monsters, and fools. I should very much like to hear from someone who has been none of these, or, better still, all four.",
"With the highest regard for the unknown, and a perfectly reasonable suspicion of it,",
"N. X. L. Aiana - Greatest Historian Teothe Has Yet Produced",
"P.S. Should we happen to meet and exchange me a new hat, I would be grateful. The old one was incinerated according to my friend's insisting, but I prefer to believe it has achieved a more interesting destiny."
            ],
          }}
        />
        <Divider/>
        <Button href="/common-lore">
          <span>
            See Common Lore <DoubleRightOutlined />
          </span>
        </Button>
      </Card>
    </section>
  );
}
