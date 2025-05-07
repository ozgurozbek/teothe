"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function BraveMenOfDaonContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,Poem on Akash"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "Poem on Akash",
              text: [
                "Under the mighty hills lived brave men,",
                "Men of Daon, of the inseparable union.",
                "Men of legends, born from love and faith,",
                "Saw the singing streets as their kin.",
                "The ones who blew The Sea were born,",
                "They sang of love whether cold or warm.",
                "Neither a blade nor a blossom left,",
                "That carried your air into their lungs.",
                "Last hammered steel mined floors below,",
                "Like fragile layers of the dark under.",
                "You are now in the whites of my beard,",
                "On my forehead as recordings of memories."
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
