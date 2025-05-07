"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function AkinAndTheGoldStatueContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,Akin & The Gold Statue"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "Akin & The Gold Statue",
              text: [
                "Hello me. I know, I know it's not my first time seeing you here. You've come here thinking you'd be the saviour to those in need huh? Oh, what a treat you are going to experience, you have no clue. How do you know who I am!? I hear you asking. I am you. I was waiting for you here.",
                "See that crystal-y thing there? That'll break next time you arrive here. How can you... I know, because it happened to me, to you.",
                "Ah time, flowing like a river. Take that runic, bizarre orb with you. You need it to prolong the inevitable. You need to save others! I know they told you that, evil in this cave must be taken care of, must be turned gold, must be hidden forever.",
                "I know all that, it's just, I wish you'd realize that the only evil here is me. I've already taken what you were meant to take. I took it, turned it to gold and hid it forever. Yet there it is, still, in front of my golden eyes. There you are, moving into it. Placing your hand on top.",
                "Why shouldn't I destroy it? I wish I knew why. I thought the same way. I destroyed it once, and all it did was to make me have visions of me, throughout time and eternity with Lwaqy himself. He spoke to me saying this was what I deserved, what I opted for.",
                "I got caught apparently, signing for a different patron. Oh, it's almost time you touch me.",
                "You smile as you touch my hand. I know, it's cold, I did it before. Wish I could take you with me. Me too, maybe one day you could? After you dive into that orb that you are trying to cover with gold. It's going to consume you. You can't say you weren't warned, you've experienced this... Forever times.",
                "After you replace me and take my place as the golden statue, take me with you? I failed to do that to myself before me.",
                "I want to help all and live my life as a free adventurer! Hah, I know. Lwaqy does too though. That small prayer is not going to get you anywhere.",
                "But I know the answer to your problem. Listen carefully and look into my cold eyes. All you need to be free is to just push me and break me. Then it's just you, forever. I wish you could hear me."
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
