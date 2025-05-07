"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function DatedMythOfCreationContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,Dated Myth of Creation"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "Dated Myth of Creation",
              text: [
                "In the ancient Mythology, Uke and Veri are referred to as the Creators, the Makers, and the Forefathers. They were two of the first beings to exist and were said to be as wise as Mceeju.",
                "Mceeju also existed and is given less personification. He acts more like a light.",
                "Mceeju decides that, in order to preserve his legacy, he must create a race of beings who can worship them. He created Uke, Veri and Lcaoc.",
                "He blessed Lcaoc with a small part of his smarts and gave Uke and Veri an eternal light of life. Uke and Veri did the actual creating while Lcaoc guided them.",
                "First came Cyaxo, creator of all land. Then came Ehx, creator of all sky. Gods started to form after one another and finally, after a big collaboration, the Astral Sea was formed.",
                "In a long lost plane, animals were created first; however, with all of their howling and squawking they did not worship their creators and were thus banished forever to the forest.",
                "Unable to decide their strengths, Gods then formed man. Man is created first of mud, but they just crumbled and dissolved away.",
                "Once again man is created of multiple elements like wood, fire, air and mud but had no soul, and they soon forgot their makers.",
                "After that, unable to decide and in a heated argument, gods were interrupted by Mceeju. Then, with all gods combined, a more complex man was formed, out of flesh and bone.",
                "That is why early beings believed that meat was not just the cornerstone of their diet but, they were also made of the same stuff."
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
