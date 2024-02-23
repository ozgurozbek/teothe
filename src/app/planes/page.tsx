"use client"

import GetCrumbs from "@/components/NavigationCrumb";
import Location from "@/components/locations/Locations";
import { Card, Skeleton } from "antd";
import useSWR from "swr";

/**
 * Fetches planes data from the backend and uses local images
 * @backend fetch
 * @see Location
 * @returns Location array
 */
function GetPlanes() {
  const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://gi5vwiheg0.execute-api.eu-central-1.amazonaws.com/Stage/getPlanes",
    fetcher
  );
  if (error) {
    console.log(error);
    return <div>Failed to access API</div>;
  }
  if (!data) return <Skeleton active />;

  let renderedPlanes = [];
  for (let item of data) {
    {
      renderedPlanes.push(
        <Location
          imageSrc={"./Planes/" + item[0] + ".png"}
          locationProps={{
            name: item[0],
            description: item[1],
          }}
        />
      );
    }
  }
  return renderedPlanes;
}

/**
 * Displays information from GetPlanes
 * @returns Location array wrapped by Card(antd) in section
 */
export default function LocationsPage() {
  return (
    <section>
      <GetCrumbs path={"Teothe3K,Planes of Existence"} />
      <Card bordered={false} className=" w-full">
        {GetPlanes()}
      </Card>
    </section>
  );
}

/* Burayı sen yapabilirsin muhtemelen problem yaşamadan.

Görmek için bu sayfayı da src/app/SideNav.tsx içine koyman gerek, 
yeni bir buton ile Locations veya Planes of Existence etc. gibi bir şey yazabilirsin.

Deities içindeki getDeities fonksiyonunun aynısını getLocations olarak yazacaksın:
  veritabanı sana deities'de 4 tane column dönüyor, bunları da ben item[0] item[1] item[2] item[3] olarak kullanıyorum.
  senin kullanacağın locations tablosu 2 tane column dönüyor: 
  planes > planeName, planeDescription ---> bunları item[0] ve item[1] olarak kullanabilirsin,
  ya da parse edip doğru düzgün isim ver. Sen bilirsin.

pages/PageDeities.tsx sana bayağı iyi bir örnek.

Lütfen sayfayı yaparken Wheel3K.jpg'i en üste koy. Diğerleri için resim yok, 
istersen public içine benzer bir resim ekleyip onu da yapabilirsin.
  Onun dışında, return ettiğin kısım da buna benzeyecek:

<SimpleContent
  contentProps={{
    image: {
      src: "https://ozgurozbek.github.io/dnd/Wheel3K.jpg",
      alt: "Planes Information Image",
    },
    text: [
      "Beastlands: Rangers dream of it on a good night. This is pure wilderness of any environment with no rules past nature.",
      "Arboria: Governed by pure emotion, rage and joy are everpresent.",
      "Limbo: Most dangerous plane birthing the essence of chaos. Only strong minds can last more than a minute, and elements are randomly shuffled.",
      "Pandemonium: Plane of madness, screaming winds tearing through tunnels exist to torment poor souls.",
      "Abyss: Houses every nightmare imaginable and consists of endless layers with unique horrors. Some say the demon kings of the abyss occasionally venture to underdark to rampage.]",
    ],
    title: "Overseer Planes These are located in the Astral Sea.",
  }}
/>

*/
