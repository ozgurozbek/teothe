"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function FuckMarryKillContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,Fuck Marry Kill"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "Fuck, Marry, Kill",
              text: [
                "Co-Authored by Quebec",
                "The three paths to complete life. Accomplishing any of these three feats before you die is noteworthy. But for Bann Jacket, noteworthy just wasn't good enough.",
                "Catching up with Bann was easy as he is now an old, retired elf who spends most of his time in an old handmade rocking chair. We knew that Bann had both fucked and been married because the local affiliate mage showed us a vision of his children and he seemed unhappy. One look in his eyes face to face confirmed the trifecta—this man had definitely taken a life.",
                "Fuck.",
                "As the old man harked back to the days of his sexual peak we found ourselves, cringing. There is just something about a 729-year-old elf recalling his past encounters and using words 'slurping', 'damp', and 'honking' throughout those stories that really made us wonder why we were listening anymore. At one point he rambled about how confusing it can be when you're blindfolded and the woman you're with has an outie belly button. We will spare you the details, just trust us on this one. This guy fucked.",
                "Marry.",
                "Bann has been married to his beautiful, loving wife, Jonda for 237 years. Much to her approval and help, she made several appearances in his stories from the paragraph above. The two have accumulated 11 children over their time together. They married after Bann saw Jonda one evening, before even talking to her he walked right up to her father the next day and asked for her hand in marriage.",
                "Kill.",
                "Bann was exuberant to tell us about all the people he's killed. He spent some time in Seimon Pass but claims the 'real fun' happened when he did a brief 30-year stay in Wavekeep Archipelago before Mages Uprising. He explained to us the killings haven't stopped with his old age, they have merely just slowed down. Bann told us he can not stop killing, it's more addicting than heroin. Which he also admitted to doing during his Wavekeep Archipelago stint.",
                "Our time with Bann Jacket has taught us all one thing, legends never die, and they are smarter than the state guards."
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
