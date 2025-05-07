"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function TheLastAncientMagicContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,The Last Ancient Magic"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "The Last Ancient Magic",
              text: [
                "The world of Teothe was once ruled by the powerful and advanced civilization of the Ancients. They had unlocked the secrets of immortality and harnessed the power of magic in ways that were beyond the understanding of any other race. But as they grew older and more powerful, they began to realize that immortality was not the blessing they had thought it to be.",
                "They became disillusioned with their own existence, and with their last magic, they left a warning for the future, though it was unfortunately too difficult for anyone to grasp.",
                "As the millennia passed, the Ancients disappeared, leaving behind only their ruins and artifacts. But their legacy lived on in the form of their offspring, the half-Ancients, who possess a disoriented body with partial ancient body parts. They live for a millennium without aging beyond their thirties, but they are sterile.",
                "The story follows the journey of a young half-Ancient named Selene, who has always felt out of place in the world. She has always been fascinated by the Ancients and their magic, and she is determined to uncover the truth about her heritage and their last magic.",
                "Along the way, she will face many challenges and make powerful allies, but she will also uncover secrets that threaten to tear her world apart."
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
