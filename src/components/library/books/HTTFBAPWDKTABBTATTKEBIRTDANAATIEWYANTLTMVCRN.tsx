"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function HTTFBAPWDKTABBTATTKEBIRTDANAATIEWYANTLTMVCRNContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,HTTFBAPWDKTABBTATTKEBIRTDANAATIEWYANTLTMVCRN"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "How to Teleport for Beginners and People Who Doesn't Know They Are Beginners Because They Always Think They Know Everything But in Reality They Don't At Least Not Always and That Is Exactly Why You All Need to Listen to Me Very Carefully Right Now",
              text: [
                "Did you teleport before? Did you know teleporting can go wrong? AND I MEAN REEEEALLY WRONG????",
                "No one tells you that. Because the first time you teleport is always at a sigil, a gate, a whatever so the chances of something happening in a way it's not supposed to, are slim to none. But teleporting to a place without a permanent circle or an associated object has risks. Real risks. The risk of dying is one of them. I once found myself at the top of a mountain freezing my ass off because some idiot gave me a false description.",
                "Yeah, don't do that. MAKE SURE YOUR DESCRIPTION IS VERY REAL AND VERY CORRECT. People think it 10 times before they send a message with sending but they think once or twice before teleporting. Mostly because if you think 10 times about teleporting you'll probably just take a god damn ship to there.",
                "ONCE WE TELEPORTED AND MY WIFE SAID SHE NO LONGER HAS FEELINGS FOR ME! I mean if only I knew the risks of that happening. We had a great marriage and this was one hundred percent because of the teleportation.",
                "I honestly don't see the point in teleporting anymore but I know most of you idiots won't stop it so I suggest at least teleport FROM a circle TO a circle and quadruple check your information."
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
