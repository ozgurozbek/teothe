"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function RiseOfMagnusContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,Rise of Magnus"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "Rise of Magnus",
              text: [
                "The city of Epipremnum is a beacon of hope in a world overrun by pollution and waste. Enclosed by a massive dome, it is the only refuge from the harsh conditions outside. But as the city's resources begin to dwindle and the population grows more desperate, a powerful industrialist named Magnus rises to power. He promises to lead the city to a new age of prosperity, but at what cost?",
                "The wasteland is a dangerous place, overrun by mutants and bandits. But there is one man who has made it his home. He is known as the Magnus of the Wasteland, a powerful sorcerer who uses his magic to protect the innocent and vanquish his enemies. But when a group of bandits begins to terrorize a small village, Magnus finds himself facing his toughest challenge yet.",
                "As Magnus consolidates his power and begins to implement his plans, a small group of rebels begins to form. They believe that there must be a better way to save the city and they are willing to risk everything to stop Magnus and his regime.",
                "As he delves deeper into the bandits' operations, he begins to uncover a sinister plot that threatens not only the village, but the entire wasteland. With the help of a skilled warrior named Kaida and a brilliant inventor named Nikolai, Magnus must stop the bandits and their mysterious leader before it's too late.",
                "The story follows the journey of a young orphan named Leo, who becomes embroiled in the rebellion and must navigate the dangerous political landscape of Epipremnum to uncover the truth and save the city.",
                "As the stakes become higher, Magnus will be forced to confront his own demons and make a sacrifice that will change his life forever."
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
