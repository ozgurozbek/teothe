"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function SongOfCatastropheContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,Song of Catastrophe"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "Song of Catastrophe",
              text: [
                "The song of catastrophe echoes through the streets, turning men into beasts. Plucked from the river of time, humanity is now shunned by the cycle of rebirth. The wings of the apostles flutter by with the dark castle's wishes. The chroniclers of truth whisper from far away, their voices carried on the wind.",
                "A broken eye remains, a witness to the horrors wrought by the black flower. It sings of things that should never be, of prohibited thoughts and frozen regrets. The heart of ice is consumed by the zero, the nothingness that unbinds death.",
                "The forest is drenched in blood, and the form of nothingness emerges, ready to destroy the detestable flower of taboo.",
                "With a fierce determination, she cuts off her weaknesses and marches forward. The black flowers give voice to prayers drenched in blood, their song will not cease until the day of confessions is done. When disaster strikes the city streets, people and dreams will be broken. But she will not falter, for she knows that to end the repeating cycle, she must terminate the forbidden sound and flower.",
                "The song of catastrophe may have turned men into beasts, but she will not let it consume her. She will not let it consume anyone else. With each step she takes, the black flowers wilt, and their song grows weaker. The end is near, and she will not falter.",
                "As she reaches the heart of the city, the song of a catastrophe reaches its crescendo. The streets are filled with the screams of the broken, but she will not be broken. With one final blow, she silences the black flowers, and the song of catastrophe comes to an end. The cycle is broken, and humanity is reborn.",
                `DSE CIZT EQ MUGEHKJOJCU WIDCWJ WAZ AYGU
LAAGJJ
YWUQYUV PCOZ DSE BEHIJJ EQ DEYI, ROYECJ XIJ
CSUBCUV LK DSE MKPYO EQ BANOGKY
DSE GEZTH EQ DSE OZOGJBAL PWUHJUJ LK GEGV
DSE NUDX MUFHZU'L GEFVOJ
CIYIWEN, DSE MSDUCATDIMP EQ DCUHW GSIGDUJ
PCOZ PUDELOQ
O LCOXOD UKE BAYEUDK GEGV DSAH FIIQO PCOZ
DSE LWAQY PWOKOH
LWAQY PWOKOHK CEZT EQ DSIBVJ GSIQW CSOAZT
XAHIG LA WUQI EQ YCOVUREMIY DSOAVXLL.
BASFOKK PCONOD AY O RAAFJ EQ ANE
KADU NUZQOJ AY O XESVJCUKI
O PIDZ EQ XIGVUDXGINP IYNUEDV LK NAAHW, CSE
UXEFVUK PCOZ DSE PIDIHK NCEBRXAW AY LWOUS
DI NAFHGEQ DSE NAGIHKUTFO PWOKOH EQ DUNUA,
CSE MOGG EQR RAD GAAXCUKLIN
LWAQY PWOKOHK QEHI FIIQO DI YCAMOHK
NCEBRXAW AY LWOUS
LWAQY PWOKOHK EQ DSAH CIZT GEXY XIG MAAGO
IYGOZ DSE NUL EQ MIZSOJKIUJP AD NIZI. GSEB
DSAH NEFEHKAK CFDOYUK DSE MEGM CFDIOKK,
YAOCZU OYQ NCEEBJ GEXY LA LCOXOD
DI UYQ DSE BABIIKEGZ MKPYO, CSE QIEG DI
DADZUDUMI DSE PIDPUTVEH CIUBS OYQ PWOKOH`
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
