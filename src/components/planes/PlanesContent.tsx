"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import Location from "@/components/planes/Locations";
import { Card, Skeleton } from "antd";
import useSWR from "swr";

/**
 * Function to fetch planes of existence data from an API and render them as Location components.
 * @generator
 * @see Location
 * @returns JSX elements representing each plane of existence.
 */
function GetPlanes() {
  /**
   * Fetcher function for API requests.
   * @param args - RequestInfo object containing information about the request.
   * @returns Promise resolving to the parsed JSON response.
   */
  const data = [{"planeName": "Gehenna", "planeDescription": "Plane of avarice, housing merciless and selfish"}, {"planeName": "Acheron", "planeDescription": "Very difficult to picture. Iron cubes slamming into eachother at random, representing pain and war"}, {"planeName": "Arcadia", "planeDescription": "Realm of purity housing celestial bodies who live in harmony"}, {"planeName": "Limbo", "planeDescription": "Most dangerous plane birthing the essence of chaos. Only strong minds can last more than a minute, and elements are randomly shuffled"}, {"planeName": "Arboria", "planeDescription": "Governed by pure emotion, rage and joy are everpresent"}, {"planeName": "Soulon", "planeDescription": "Created for spores, a world with non-compacting soil and without insects. The air is heavily infused with spores as well, corroding any metal"}, {"planeName": "Elemental Plane of Air", "planeDescription": "As open as eternal sky and as solid as a child's breath and is falling forever. Weather is the main danger here. Is the most comfortable and survivable of the elemental planes. There is no ground but there are rocks or dirt floating around. There is no gravity, wherever you deem down becomes down but creatures unknowing about this have fallen to their deaths. Clouds appear plentiful"}, {"planeName": "Pceey", "planeDescription": "The world of Creatures, one big continent, Gtaaq in their tongue"}, {"planeName": "Negative Energy Plane", "planeDescription": "Seemingly empty vacuums with little to no life or matter. Seems to pull life and energy out of everything exposed to it. Is inky black and eats light"}, {"planeName": "Elemental Plane of Water", "planeDescription": "Is an ocean without a surface. It is a domain of current and wave. An entirely fluid environment and is lit by a diffused glow. Any waterbreathing outsider can make this plane their home. There are large strongholds that are usually tied to some huge solid object, like a ball of seaweed. There is also the City of Glass, half filled with water and air"}, {"planeName": "Mechanus", "planeDescription": "Perfected clockwork plane. Housing a creature called Primus and his mechanical children"}, {"planeName": "Astral Sea", "planeDescription": "The space between everything, road that goes everywhere. Mostly empty space but some parts from other planes find their way here, as well as gateways of random colors and destinations. Certain spells touch the astral sea briefly. Astral sea has many dangers and pirates with silvery chord severing swords. It is a means of travel"}, {"planeName": "Pandemonium", "planeDescription": "Plane of madness, screaming winds tearing through tunnels exist to torment poor souls"}, {"planeName": "Positive Energy Plane", "planeDescription": "Seemingly empty vacuums with little to no life or matter. Seems to give life and energy to everything exposed to it. Is bright white and shines"}, {"planeName": "Elemental Plane of Earth", "planeDescription": "It is a place of hidden riches and a wall for all. Various gems could be found here, although wise avoid it because of the constant earthquakes and heavy gravity. It is constantly in motion"}, {"planeName": "Nhaft", "planeDescription": "The world of Dwarves, one big mountain, Pjegv in their tongue"}, {"planeName": "Ecp", "planeDescription": "The world of Orcs, one big tundra, Ikv in their tongue"}, {"planeName": "Carseri", "planeDescription": "Perfect prison. Six layers and uniquely cruel to its inhabitants"}, {"planeName": "Teothe", "planeDescription": "Home plane of the Teothe campaign setting"}, {"planeName": "Thaum", "planeDescription": "Once peaceful plane of 4 moons, consisting of many islands. Heavily destroyed and damaged"}, {"planeName": "Beastlands", "planeDescription": "Rangers dream of it on a good night. This is pure wilderness of any environment with no rules past nature"}, {"planeName": "Abyss", "planeDescription": "Houses every nightmare imaginable and consists of endless layers with unique horrors. Some say the demon kings of the abyss occasionally venture to underdark to rampage"}, {"planeName": "Pravukadz", "planeDescription": "The world of Aberrations, covered with an abyssal forest of bioluminescent plants and no dirt, crystalized photosynthesizers converting cosmic radiation to energy, solarwind trees floating in space, vacuum swimmers and starlight eyes populating the fauna with electromagnetic symbiods, and more"}, {"planeName": "Outlands", "planeDescription": "A vast field that has towns based at its edges each is a settlement representing outer plane and is a gateway to that plane"}, {"planeName": "Ethereal Plane", "planeDescription": "Mostly featureless, misty fog. Visibility is limited and many things are invisible. There is no gravity but a sense of up exists. You can pass through not living things. It is a means of travel between inner planes to outer planes. Ghosts can exist here. There is no food or water here"}, {"planeName": "Epipremnum", "planeDescription": "A wasteland with a sole surviving capital"}, {"planeName": "Demi-planes", "planeDescription": "Worlds created at random and are freely shaped by a person or a force that comes in contact with them. Powerful wizards can create their own worlds and isolate themselves inside or sometimes trap other creatures"}, {"planeName": "Iyiyoke", "planeDescription": "Crushed planets of shortfolk and tallfolk"}, {"planeName": "Far Realm", "planeDescription": "Exists outside everything, horrific aberration like mind flayers and observers originate from here"}, {"planeName": "Elemental Plane of Fire", "planeDescription": "A place continuosly ablaze. Ground is nothing more than compressed flame and the most common fluid is magma. Fire burns here without fuel. Usually creatures that are somewhat comfortable in flames live here. Best known for its city, City of Brass. Certain devils also visit here and cause traffic of information, goods and prisoners between Nee. The City also blocks many of the destruction of flames, rendering it safe for travel from the material planes"}]

  let renderedPlanes = [];
  for (let item of data) {
    {
      renderedPlanes.push(
        <Location
          imageSrc={"./Planes/" + item.planeName + ".png"}
          locationProps={{
            name: item.planeName,
            description: item.planeDescription,
          }}
        />
      );
    }
  }
  return renderedPlanes;
}

/**
 * Function to fetch and display information about the planes of existence.
 * @returns An array of JSX elements representing the planes of existence.
 */
export default function LocationsContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Planes of Existence"} />
      <Card bordered={false} className=" w-full">
        {GetPlanes()}
      </Card>
    </section>
  );
}
