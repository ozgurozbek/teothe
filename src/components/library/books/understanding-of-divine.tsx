"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function UnderstandingOfDivineContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,Understanding Of Divine"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "Understanding Of Divine",
              text: [
                "Long before they fought, gods were not only gods but, 'All'. There was nothing but the energy, the magic in reality and gods were the ones who tamed it into purity at the dawn of every coming day.",
                "Centuries later, forging holy light to their will caused them, to have an ego. Which had only one solution: Deciding who was better. They then started to fight.",
                "Lesser creatures were only wishing for the fighting to be over but that wasn't as good as it sounded. Incomprehensible and Immortal, Gods were not capable of forgiving another 'Perfect Being' for their actions.",
                "Only because of the fact that they can do no mistake, all they ever did was to make decisions. Since they are incapable of changing what they are, each and every one of them will be thinking they were the right one until the end of time.",
                "Even breaking their promise to Mceeju.",
                "Over time, prayers of those who cannot read the future well were answered and the Gods stopped fighting... Only to create an even worse event for the reality they were in.",
                "They stopped communicating and all of them started making simpletons by themselves. Humans that come from Mceeju were different from each other in many ways but, could still serve in the same cycle to a God's benefit.",
                "That was when they decided to make peace with their differences and mustered their realities. In the meantime, creating all sorts of races scattered around the Astral Sea, originating from their plane.",
                "That was the start of us. Men who were created by Mceeju were capable of magic but, was lacking the intelligence and wisdom to use it properly. With their imperfectness and, because they were lacking any guide by the Gods, most of them perished instantly, causing the magic inside them to mix with air and flow through the universe.",
                "That was maybe intended, ruling all Gods must come with its own perspective.",
                "Although since all ended up perishing, all supreme beings accepted the punishment for their mistakes. Their craft, by its very nature, tried to have it all with magic, making all the perfect gods face with their weaknesses.",
                "So they all judged themselves by their perfect sides. Once again perfecting their 'light', their 'promise', and, they were identical no longer.",
                "They all started to create more and more of these predictable yet mysterious humans. This time giving it thought with others, grouping up.",
                "Not all of them were thankful to their creator, and almost none of them were worthy of magic, but they were there. Through time Gods showed mercy and guided them for magic, greatness, glory, happiness, a bitter taste of immortality and so many other things that humans were not capable of taking notes and studying.",
                "Some of these humans achieved great deeds. Because there were no such treasury in the manhood worthy of their deed, Gods let them to become demigods as a reward.",
                "In the first ages these events were happening considerably often, but as the time passed there were almost no deeds left worthy of becoming a demigod.",
                "Races discovering each other, even though they were made with the same gods, ended up not befriending each other, or breeding out of control. Losing control of the Weave, they faced a greater force. A force that can't be stopped by their creator, even. Mceeju.",
                "Mceeju afterwards split the Astral Sea, pulling a piece from every domain, created the Material Planes, captivating them. Elemental Chaos surrounding it was cast aside with a dimensional barrier thus creating the Inner Worlds as we know it, and races were split.",
                "Reaction from other gods, overwhelmed by this power, caused Mceeju to split everything once again, even Gods' Domains. Inner Worlds themselves were separated, Overworld and Underworld was created and boundaries were forced.",
                "Outside the barrier was Outer Worlds, unifying Elemental Chaos.",
                "Now united, Gods were 'free' once again, causing Mceeju to 'retire', allowing his order to be ruled by his'. After then, some chose to stick together, some chose to go their own way, and some even chose to descend to the Material Planes."
              ],
            }}
          />
        </article>

        <Button href="/library" className="mt-2">
          <span>
            See The Library <DoubleRightOutlined />
          </span>
        </Button>
      </Card>
    </section>
  );
}
