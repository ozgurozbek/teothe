"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function FishermenUprisingContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,Fishermen Uprising"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "Fishermen Uprising",
              text: [
                "A stable way of earning wage was every lower class family's wish for their younglings. About a 100 years before the magic crisis, Any kid that was born to a humble family would be encouraged to be a fisherman so they would never worry about starving. And even though that was a wise path to choose until then, it wasn't in that particular time.",
                "For commoners and peasants who are looking not to waste their precious earnings rather than sleep with a full stomach, fish is the best option to stay relatively full since hunting wild game and growing grain is much much harder in harsh climates such as the lower sides of Wavekeep Sea.",
                "Similar to now, back then fish was every folk's every meal. There were literally plenty of fish in the sea, and plenty of fishermen as well. Being a fisherman paid well, and it was a well respected job. So in overtime the number of fishermen in the Wavekeep Sea grew and grew. Eventually a Fishermen's Guild was formed. The Guild kept the peace among fishermen and even helped out common folk every now and then. The Guild wasn't based in any country, had its own rules and worked with multiple harbours of multiple countries.",
                "Since at the time countries were not exactly in peace terms, more than one party was interested in the fish since eating anything else got harder and harder for the citizens of both countries. although rulers had other worries.",
                "Tension between Akairo and Kheranthe was rising. Contact in between was barely existent and both sides were insistent on their terms.",
                "Akairo's problem with the guild started when some members of the guild started to smuggle people in and out of Akairo. When Akairo started to take precautions that affected the Guild's ability to help simple folk in Akairo. Then rulers of Akairo decided to tax the Guild even more to be in their waters. That didn't sit well with the Guild.",
                "The real problem for Akairo began when a drug lord named Junkie Neimann, who is thought to work for the Kheranthe government, bribed some of the fishermen to smuggle opium into Akairo. Its unknown if the Guild knew about this and turned a blind eye, or made profit off of it but many believe that they were not just an innocent bystander. And it was at this time that the war broke between the two countries.",
                "Fishermen were not educated people though, they not only carried opium but also used it. And when the demand for opium increased, so did the amounts of opium carried in a single ship until the point where fishermen would often not make it to Akairo but choked in opium on the way instead. The rumors got around when highly ranked Guild members started either dying of opium or going insane instead. That caused commoners to lose respect in the Guild. In a short period of time the Guild sank by most members forfeiting their membership and the rest died on opium.",
                "What's left of the guild is few fishermen ships you can spot crewed with opium crazed fishermen-turned-pirates scourging the Wavekeep Sea."
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
