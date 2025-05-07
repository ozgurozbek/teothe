"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function MyStudyOfChollContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,My Study of Choll"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "My Study of Choll",
              text: [
                "Choll is a floating island that is home to two settlements: Jotum and Jotum Fort. The island is surrounded by lush rainforest and is split in half by a towering mountain. However, this mountain is not just any ordinary mountain, it is home to a deadly basilisk-dragon mix that poses a great threat to the inhabitants of the island.",
                "Choll is a floating island that has been around for centuries. It is believed to have been formed by powerful magic that caused a piece of land to detach from its original plane and float in the void between planes. The first settlers of Choll were a group of powerful mages who discovered the island and decided to make it their home. They established the two settlements of Jotum and Jotum Fort, and built a mountain as a barrier between them. The mountain was home to a deadly basilisk-dragon mix, which the settlers eventually learned to coexist with.",
                "The basilisk-dragon that inhabits the mountain on Choll is a terrifying creature, a mix of the natural and the metallic. It has a large, serpentine body covered in dark scales that shimmer like obsidian in the sunlight. Its eyes are a bright, glowing red, and it has a long tail that it uses to strike at its prey. Its head is that of a dragon, with large, sharp teeth and a pair of horns that curve backwards. Its wings are large and leathery, and it can use them to fly short distances. It is known for its deadly gaze and its ability to petrify its victims.",
                "One of the key features of Choll is the presence of the Pearl Plunderers, a powerful guild that specializes in magic and magical item creation. The Pearl Plunderers are known for their ability to form weapons out of pure magical energy, drawing from various planar sources. Some believe that they were the underlying cause of the mages' crisis, but the truth remains shrouded in mystery.",
                "The Pearl Plunderers are a guild of powerful mages and magic users who specialize in the creation of magical items. They are known for their unique ability to enchant weapons out of pure magical energy, drawing from various planar sources. They are also known for their expertise in artifacts and divine magic. Some notable accomplishments of the Pearl Plunderers include the creation of a powerful magical barrier that protects Choll from external threats, and the development of a method for traveling between planes using magical portals.",
                "The island of Choll is unique in that it is a floating island, which adds to its already mysterious atmosphere. The inhabitants of Choll have learned to live in harmony with nature, and the island is home to a diverse range of flora and fauna that is truly breathtaking.",
                "Thor Ealinar is a key individual in Choll, known for his expertise in divine magic and his work with artifacts. He is a respected figure in the community and his knowledge is highly sought after.",
                "Another key individual in Choll is Zem Zem'Zu, a scholar who is dedicated to understanding the intricacies of time in different planes. She is particularly interested in objects that are capable of travelling between planes or objects with innate time.",
                "The third key individual in Choll is named Selene Nightshade. She is a powerful sorceress and leader of the Pearl Plunderers guild. Selene is known for her mastery of dark magic and her ability to summon powerful creatures from other planes to do her bidding. She is feared and respected by many in Choll, and her knowledge of the island's secrets and hidden treasures are said to be unparalleled. Selene is also known for her strict code of honour and loyalty to her guildmates, and is rumoured to have made a pact with a powerful demon to ensure the success of the Pearl Plunderers. She is considered one of the most powerful and dangerous individuals in Choll.",
                "Despite the dangers posed by the basilisk dragon mix, Choll is a place that should be visited. The island's unique floating feature, the presence of the Pearl Plunderers and the natural beauty of the rainforest make it a destination worth exploring. Additionally, the knowledge and expertise of key individuals like Thor Ealinar and Zem Zem'Zu provide a fascinating glimpse into the island's rich history and culture."
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
