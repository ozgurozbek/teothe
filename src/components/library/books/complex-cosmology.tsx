"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function ComplexCosmologyContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,Complex Cosmology"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "Complex Cosmology",
              text: [
                "Teothe is a world with a complex cosmology that includes a variety of planes and realms, each with their own unique characteristics and inhabitants.",
                "The cosmology includes the Material Planes, which are the worlds where mortals live and include Thaum, Teothe, Soulon and Pravukadz.",
                "The Inner Planes are made up of crushed planets, including Iyiyoke, home of shortfolk and tallfolk, Nhaft, the world of dwarves, Ecp, the world of orcs, and Pceey, the world of creatures.",
                "The Underworld is a realm of death and is ruled by Pwazo, guarded by Raxy, and includes the planes of Nee, Cepx and Diyp.",
                "The Overworld is a realm of pure good and happiness, ruled by Radu, guarded by Raajod, and includes the planes of Iz, Rubcudalm and Rizug.",
                "The Elemental Planes are made up of Fire, Water, Earth and Air.",
                "The Astral Sea is the space between everything, and serves as a means of travel between inner and overseer planes, and the Ethereal Plane is mostly featureless, misty fog.",
                "The Far Realm exists outside everything, and is the origin of horrific creatures, and the Outlands is a vast field with towns at its edges, each representing an outer plane and serving as a gateway to that plane.",
                "Demi-planes are worlds created at random and can be shaped by a person or force that comes in contact with them.",
                "Teothe is described as being one of the many 'material planes' within the universe."
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
