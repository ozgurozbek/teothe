"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function AncientsContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,Ancients"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "Ancients",
              text: [
                "Ancients are an ancient civilization that has evolved and found great meaning in both magic and immortality. They made immortality possible and destroyed every meaning they've found within it. They left a warning for future, unfortunately too difficult to grasp, while lacking their understanding of magic, life and time. They managed to process light, and believed to achieve a hive-mind society. Nobody knows how they disappeared. They are offsprings from humans tend to get a disoriented body with partial ancient bodyparts. They live for unknown amount of years (first believed to be millenia) without aging beyond their thirties, body-wise. They are not sterile (were believed to be sterile but they breed using magical links as evidence suggests). They are a race of hardened-light beings.",
                "Ancients are a race of beings that are said to have existed long before the current age of the world. They are believed to possess powerful magic and advanced technology, and some legends say that they were responsible for creating the various races of the world. The exact origins of the Ancients are shrouded in mystery, with many different theories and legends circulating among scholars and common folk alike.",
                "One popular theory is that the Ancients were a highly advanced civilization that existed in the distant past. They are said to have built great cities and developed powerful magic and technology. However, for reasons unknown, this civilization fell into decline and eventually disappeared, leaving behind only ruins and artifacts for future generations to discover. Some believe that the Ancients were destroyed by a great cataclysm, while others say that they simply became extinct.",
                "Another theory is that the Ancients were not a civilization at all, but rather a race of powerful beings that existed before the creation of the world. According to this theory, the Ancients were the architects of the world and the creators of the various races that inhabit it. They are said to possess god-like powers and to have been responsible for shaping the world and its inhabitants to their liking. Some legends even say that the Ancients still exist, hiding in the shadows and watching over the world. Rumors have it that the Ancients are immortal, and that they are still hiding in the shadows, waiting for the right moment to reveal themselves and take back what's theirs. Some even say that the Ancients are still among us, disguised as mortals, and that they are still exerting their influence over the world."
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
