"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function MujinaArmyContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,Mujina Army & The Serpents"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "Mujina Army & The Serpents",
              text: [
                "Mujina Army was founded by an ambitious ex-soldier named Tywin the Weasel in the Elkian Dominion (287BMC). It's believed he travelled to town doing odd jobs, working as a mercenary, gathering enough gold to hire a few inexperienced muscles for himself. With each payment he got, he hired new muscle, and with each muscle he hired, he found new jobs with thicker payment. He wasn't an excellent fighter, but he was an excellent teacher. He knew how to turn an inexperienced commoner into a fearsome mercenary. It wasn't long before he built himself a small army numbering up to 400 men.",
                "No mercenary group would ever recruit more than 150-200 soldiers, and there is a good reason for that. Chances of getting employed with numbers that high are slim to none because people who need more than 100 people to solve their problems are usually kings or rulers of that decree, and they usually have soldiers to their name. Tywin knew this very well but he also knew that Akairo never had enough soldiers. He offered his services to the 6 rulers of Akairo and immediately got employed by their general.",
                "Mujina Army went from war to war under the Akairo banner and travelled the continent under the orders from the general. It took time for mercenaries to adjust to the harsher life of the battlefield. Eventually, they managed. After a dragon problem within the Akairo soils, rulers ordered the Mujina Army to track and slay the beast. With their numbers still 250 to 300 strong, they were confident they could succeed.",
                "While they were searching for the beast in the Dyatlov Pass, the beast found them and surprised them with an earthquake attack. The whole pass collapsed on them, creating a huge cavern in the pass with no possible exits. Some of them got crushed under rocks, dying immediately, while the rest got trapped inside this newly created cavern. It took the survivors about 2 months to manage to create an exit.",
                "Mujina Army's turn to cannibalism is thought to have happened around this time. Mujina’s leader, Tywin the Weasel, did not survive the cavern. The causes of his death, to this day, are still unknown.",
                "Survivors of the Dyatlov Pass got kicked out of the Red Army upon arrival to the mainland. There were about 30 of them left. Mujina Army travelled north, looking for jobs but was unable to find any. They set camp near Wukhim. They helped and worked for free in the city and the nearby settlements. They built themselves a lovely commune. Then people and children around the area started to go missing.",
                "Southside Serpents got contracted by various people around the area, relatives of the missing people, to find their loved ones. Upon a short investigation, Serpents concluded that the Mujina Commune was at the root of this problem. One night, Serpents attacked the Commune, killing everyone inside easily.",
                "Unfortunately, upon investigation, Serpents couldn't find any bone remains of the missing victims. And because Mujina Commune managed to build itself a major reputation around the area, no one believed the Serpents that members of the commune were cannibals and abductors. Serpents got shunned by society and did not receive any other contracts. Unable to work under contract or in any other place in the area, Serpents changed their appearance. They formed another contractor guild in the city, Slayer's Take, under false identities as new adventurers."
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
