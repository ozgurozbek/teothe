"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function GeneralJetsReformContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,General Jet's Reform"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "General Jet’s Reform",
              text: [
                "These 10 points must be acknowledged by all. After the Mages' Crisis, anyone violating these will be hunted down, especially by the Arcanum Alliance or Sapphire Sanctum.",
                "1. You are not allowed to use magic on a living creature to cause it harm that will not kill it.",
                "   a. Magic cast with the intention of killing but failed do not adhere this since it is in the nature of our realm.",
                "2. You are not allowed to use magic to alter or remove memories for reasons that could be solved otherwise.",
                "3. You are not allowed to use magic to change the past.",
                "4. You are not allowed to ease the pain or intensify the pain when it is caused by a judicial process.",
                "5. You are not allowed to control other's magic or limit their access.",
                "6. You are not allowed to create, control, possess or use any magic item that will not adhere this list.",
                "7. You are not allowed to harness legendary or endangered creatures for your benefit.",
                "8. You are not allowed to target civilians.",
                "   a. You must provide safe passage for civilians to flee.",
                "   b. You can't use magic to attack hospitals, sick and aid workers.",
                "9. You are not allowed to use magic to torture or conduct inhumane treatment of detainees.",
                "   a. You must provide access to humanitarian organizations.",
                "10. You are not allowed to deal unnecessary or excessive loss and suffering.",
                "— General Jet",
                "Arcanum Alliance",
                "Representatives of Elves, Dwarves, Humans and Minorities"
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
