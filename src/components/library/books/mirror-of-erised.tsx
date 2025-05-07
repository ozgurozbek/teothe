"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function MirrorOfErisedContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,Mirror of Erised"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "Mirror of Erised",
              text: [
                "As the students of the magic school in Epipremnum explored their new surroundings, they stumbled upon a mysterious object in the depths of the library. It was a large mirror, ornately framed and surrounded by strange runes and symbols. The students were immediately drawn to the mirror, and as they looked into it, they saw visions of their deepest desires and dreams.",
                "As they delved deeper into the mirror's secrets, they discovered that it was known as the 'Mirror of Erised' and it had the power to grant the viewer's greatest wish. However, the students soon realized that the mirror came with a dangerous price. The more they looked into the mirror, the more their desires consumed them, leading them down a path of obsession and self-destruction.",
                "The students soon found themselves caught in a battle between their own desires and the mirror's manipulation. They banded together to find a way to destroy the mirror, but their attempts were fruitless. It was then one of the students had a realization, the mirror was not something to be destroyed, but something to be understood.",
                "With this newfound understanding, the students were able to overcome the mirror's power and use it for good. They used the mirror to help their classmates and even the people of Epipremnum, granting wishes that benefited the greater good.",
                "And as they graduated from school and went out into the world, they knew that the blessings from the Mirror of Erised would always be with them.",
                "As the sun set on the magic school, the students said their goodbyes and headed back to their dormitory one last time. They were exhausted from the day's events but they couldn't shake the feeling that something was still off. They couldn't shake the feeling that the mirror was trying to tell them something, something important. They would have to be brave and face the unknown, just like the founders had done before them. And as they lay in bed that night, they knew that the next generation of magic students are to make a difference in the world, fixing the arrogance over the Mirror of Erised."
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
