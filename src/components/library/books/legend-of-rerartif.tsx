"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function LegendOfRerartifContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,Legend of Rerartif"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "Legend of Rerartif",
              text: [
                "Co-Authored by Sera the Pope",
                "As a young boy, Rerartif was into sculptures. He would petrify some people and make some sculptures looking just like them. Then he would kidnap more people, make them guess which one is the sculpture and if the answer was wrong he would petrify them and add them to his collection.",
                "Bounties have been put on him and many adventurers looking for either adventure, money, or revenge went after him. He killed all of them and kept doing his work.",
                "Later he made the whole city and then the whole kingdom his enemy. He killed anyone who interrupted his work and kept doing his art. And at one point people attacked his sculptures instead. Breaking almost all of them. After that, he went mad killing everything. This time not sparing the innocent or the passive.",
                "He tried to convince some gods to reverse the time just before his sculptures were destroyed. None answered his call. Then he destroyed the shrines of every god he tried to contact. Said, 'if you keep ignoring me I'll do the same to all your followers'. He shattered the sky and denied humanity rain and sun. Fought avatars of Greater-Gods.",
                "When his body was dying of old age he refused to end his reign and became a lich. Believed he got what he wanted because all of his sculptures are in one piece. They are up in Elkian Dominion and it's too risky to look at them directly. Not because sculptures are petrifying anyone who looks at them or anything, but purely because if you unknowingly form a negative or indifferent opinion about them, he'll come to hunt you and even the gods can't stop him."
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
