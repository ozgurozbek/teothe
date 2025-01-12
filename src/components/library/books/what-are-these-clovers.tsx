"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function WhatAreTheseCloversContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,What Are These Clovers"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "What Are These Clovers",
              text: [
                "These magically infused clovers seem to pop out of nowhere, and you can think about them while doing things. Do they help you get better results? Why? HOW? This must be Nepi's doing. By gods, I need more of them!",
                "As I delved deeper into my research, I discovered that these clovers were not just any ordinary plants. They were the result of a powerful spell cast by the god Nepi, the patron of luck and prosperity.",
                "The first type of clover, the guidance clover, provides direction and clarity in times of uncertainty. It helps you make important decisions and guides you towards the path of success. The second type, the fortune clover, brings good luck and prosperity, helping you to achieve your goals and realize your dreams. The third type, the emotional support clover, provides comfort and reassurance in times of stress and anxiety, helping you to stay calm and focused.",
                "But how do these clovers work? It seems that Nepi imbued them with a small portion of his own power, allowing them to respond to the thoughts and desires of those who possess them. By simply thinking about the clover and what you wish to achieve, you can tap into its power and harness its magic to help you achieve your goals.",
                "As I continued my research, I also discovered that these clovers were not easy to come by. They were extremely rare and could only be found in the most remote and hidden places. But I was determined to find more of these clovers, and so I set out on a journey to search for them.",
                "I traveled to the far reaches of the land, seeking out ancient ruins and hidden caves, searching for any clues that might lead me to the elusive clovers. Along the way, I encountered many obstacles and dangers, but I persevered, driven by my determination to uncover the secrets of these magical plants.",
                "And finally, after many months of searching, I succeeded in my quest. I discovered a hidden grove of clovers, protected by powerful magic and guarded by fierce beasts. But with the help of my knowledge and skill, I was able to overcome these obstacles and claim the clovers as my own.",
                "With my newfound knowledge and powerful clovers by my side, I returned to my home, eager to share my discovery with the world and help others to harness the power of these magical plants.",
                "But my journey was not over yet. As I shared my knowledge with others, I began to receive reports of a new type of clover that is said to be the most powerful of them all. It is said to grant the power to avoid death by “Being Certain”. This new discovery sparked a new adventure for me as I set out to find this legendary clover and uncover its secrets.",
                "As I embark on this new journey, I can't help but feel a sense of excitement and wonder. Who knows what other discoveries and surprises await me on this new adventure? But one thing is for sure, with the help of these magical clovers, anything is possible."
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
