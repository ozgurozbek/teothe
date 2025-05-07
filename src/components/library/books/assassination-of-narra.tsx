"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function AssassinationOfNarraContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,Assassination of Narra"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "Assassination of Narra",
              text: [
                "Kingdoms come, kingdoms go. Some see this too early in their life and some live so long that they eventually realize it. People with opportunities tend to use them and that is why high-achieving Mages, Clerics, Bards, and some others stick as a community rather than being a part of any ruling land. There is said to be a cleric who was on this very land long before any history we recall was written down.",
                "Successors who hold people's respect and Successors who were born to the right family share the same people as their source of fame. Even though generally a mage doesn't care about this fame but a Prince does. And any Prince who cares about fame plans on sitting on the throne and ruling forever wants the said “mage” by his side in order to make himself feel and seem trusted.",
                "Prince Ozgu, son of Kuko was the perfect example of this. Kuko lived a little longer than expected which resulted in Ozgu sitting on the throne about 10 years later than when he should. That may not sound like much to some, but for a human it sure is. He spent his young adult life planning his reign and one day the long wait was over. He was an ordinary king. Wanted the best for himself and then his people. Liked power and knew not to cross some lines.",
                "He saw the great opportunity to marry a princess to get ahold of even more land and power without any blood being spilled. So he reached King Carl Clefar to marry her daughter, Victoria Clefar. King Carl refused the offer but Ozgu managed to get Victoria's heart, which left King Carl little choice.",
                "Ozgu was an ambitious but good man and in plain sight, there wasn't any reason to deny him the hand of Victoria. King Carl nevertheless thought it necessary to express his power. He took Ozgu for a walk through some of his Castles. He thought if he seemed strong, no harm would be done to her daughter.",
                "One of the said travels was to Castle Noryein, Which is placed right next to a big crater from about a hundred years ago when a meteor fell. It's said the reason Castle Noryein is such a bright green is because of the glowing crater caused for about 50 years when it first landed. The crash site held much power and was often visited by many mages and some druids. Some traveled from other planes just to inspect it.",
                "King Ozgu had a great interest in the crash site and felt it was calling for him. But he knew that he needed to seem uninterested in it for the time being to gain Carl's trust. On their journey back from Castle Noryein, Carl and Ozgu learned about the terrible news that Victoria has been kidnapped. Which was planned by Ozgu after he reached Castle Noryein to create an opportunity to visit the crash site.",
                "As planned Ozgu and Carl moved separately to search for Victoria. After a few days, this time not according to plan Victoria was found dead with her eyes, mouth, and feet cauterized. This was a way to Express someone living an unhonorable life. May he/she never walk, talk or see herself without the honesty of gods. This was usually done to sex workers or people who steal from where they work.",
                "Carl was devastated and angry with the situation so he asked for help from some mages but many were not interested. They knew with no male heir and now losing his only child, this man meant so little.",
                "Ozgu was also angry and devastated but his reasoning was different. Without a wife, he didn't hold a different future from Carl. Other kingdoms saw King Ozgu as not the person responsible for the tragic death of Victoria, but since he was around there when it happened, no one wanted him near their priceless princess.",
                "Ozgu turned to a mage that was living in his kingdom at the time. Narra was at least a dozen hundred years old and it was possible she kept the answer. Ozgu invited her to be by her side and counsel him. Narra respectfully rejected the offer and said with her understanding of the time she had no time to serve.",
                "Before visiting another mage, Ozgu wanted to do the same thing Carl did to him. He wanted to Express his power so no mage would deny him. He ordered Narra to be kicked from his Kingdom. The very next day Ozgu woke up to loud noises of people shouting and demanding him dead.",
                "Narra was found dead shortly after she was seen with King Ozgu. Her feet, eyes, and mouth were also cauterized and people did the math. Ozgu shocked that he didn't see he was being betrayed by people right by his side, tried to explain. But his little younger brother Dahbaa told people Ozgu was a good man possessed by the mages in Noryein and that the mages had a big plan to destroy all kingdoms and rule everything themselves.",
                "He took charge of his country, recruited armies from some other kingdoms including Carl's, and went on a crusade to kill mages. Head of The Mages Council Magus said people Dahbaa was behind all this and none of the accusations was true.",
                "Most people didn't believe them and chose to believe their King instead. Great Mage Magus knew he couldn't let all these people go around cutting people's heads off. He couldn't use magic to persuade these people since it was the very thing they were against. He gave the Army and both brothers an instant, painless death.",
                "Wrong news travelled faster and all people were convinced that mages are the villain. This is how the Mages' Crisis started."
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
