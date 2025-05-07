"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function WarriorsGuildContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,Warrior's Guild & The Red Army"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "Warrior's Guild & The Red Army",
              text: [
                "Most people don't kill anything in their lives and most of the people who kill things don't kill humans. The very small population of people who kill other humans at one point or another usually uses magic. That leaves a very small number of people that use swords and hammers to kill other people. If you also consider most of these people fight against each other and each time they come across, their population decreases; it is safe to assume that if you have a bunch of fighters by your side, you achieved to gather exotic people.",
                "Life is different everywhere and so is the danger. But no matter where you live in Teothe you should be threatened by the Warriors Guild. They are not only all warriors, but they are the fiercest, the cruellest ones. You don't become a guild member and then become a warrior. To even attempt to join, you have to be a great warrior already. They don't obey many laws and who can make them? They are trained enough to face anyone. Just like Mages Guild, Warriors Guild is untouchable in this sense.",
                "Akairo or when fully translated to common “Red Land” is ruled by 6 knights. Very much like Warriors Guild members, these people are renowned commanders and they have done enough to prove their worth both in battle and in war. When your leader is a fearsome warrior though, it is really hard to explain that these skills don't exactly sit well with leadership and diplomacy. But since I, the author is already banned from that land I can confidently say that these skills don't help you rule a kingdom. This isn't propaganda but all the war Akairo has to suffer is just because it's led by 6 blood-thirsty morons.",
                "Anyway, back to the point; Akairo is at war with all the lands it's in contact with. Even if your army can beat the Red army (yeah very creative) you wouldn't want to fight them since you will lose people for no real reason. Their land has been burnt many times so nothing grows, they are at war with everyone so you can't take the lands as a part of your own before fighting all the others and they even have a civil war! So, that leaves Akairo in a position where they can get away with saying anything.",
                "Or at least everyone thought. Most Guilds don't participate in wars as expected. But one of the Ruling Knights of Akairo sent an invitation to the leader of the Warriors Guild. Said, “either you come to fight for me and earn your freedom or you don't accept my invitation and prove what kind of cowards you are”. Warriors Guild is not led by meat brains so they just didn't engage with Akairo and ignored the courier. Ruling Knights took this as a form of unacceptable disrespect since Akairo is not already at war with at least 5 Kingdoms and they absolutely have armies to spare for this childish revenge. 2 Knights led an army of hundreds of people to the Mountain Ararat at the 3rd full moon of the winter. Which is considered the hardest time to do the Warriors Guild acceptance challenge.",
                "They interrupted the ritual which was meant to send away the warriors to their test and attacked them. At that point, the Chieftain of the Warriors Guild ordered that if any of the attendants kill less than 10 Akairo soldiers, they would lose their chance to do the test and it'll instead be considered a failure. Warriors, some of which are missing weapons and most of them missing armour, charged onto the Red Army. Newbies wanted their chance to earn their Warrior's Worth and members wanted to make sure that this kind of disrespect to the Guild is never repeated. It was not a fight, it was not a battle.",
                "All of the Red Army knew that they'll die there. None of them expected to return home safely. They were not wrong because none of them did. Well, I did. But I was sent back to Akairo before the end of it. Knight personally ordered me to go ask for reinforcements. I never did. I never returned to Akairo. I didn't leave them to die, I saved many lives of the soldiers that were meant to be reinforcements. I don't feel guilty and I am releasing this the same day the last of those 6 knights died.",
                "I didn't give any names to keep myself safe and none of the knights at the moment know about this. If you are reading about this in Akairo, just find a way to get out.",
                "(Shortly after its release this book was banned in Akairo and the author was found dead in Dwarven Union)"
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
