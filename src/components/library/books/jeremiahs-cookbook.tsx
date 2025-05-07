"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function BookByJeremiahWuxia() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,10 Signatures of Thaum"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "10 Signatures of Thaum",
              text: [
                "4 Drinks",
                "The Flaming Dragon",
                "A spicy beer that causes the customer to breathe fire when they burp.",
                "Prepare by getting freshly brewed beer and mixing in some dusts of heat with a hint of ground pepper. For more of a kick, decrease the amount of water from your homemade beer or add more malted barley.",
                ".",
                "The Banshee’s Breath",
                "Tastes sweet, has an effect similar to mint in that it always feels cold.",
                "Prepare by mixing pure liquor with white, almost translucent Banshee berry. For more cooling effect, shave ice on top while serving. For more kick, melt sugar to a caramelized point and then freeze it by sprinkling it on a cold surface. Quickly bend it to form a shape that’ll with the glass and you are good to go.",
                ".",
                "Mawxie",
                "A drink all the locals of Gobre cite as a local treasure.",
                "Mix in orange, lemon, citrus fruit and lime zests when aged to green color with steamed thyme leaves. Pour boiling water and stir till colored bland gold.",
                ".",
                "The Quieker",
                "Do talk if you want entertainment.",
                "This recipe uses fossil oil. Extract the oil from inside fossil bones and place it on a furnace with high heat. Collect excess gas. Then trap it with magical balls made with mage armor.",
                "Make cinnamon tea and let it cool. Hole blueberries and place mage armor balls inside them.",
                "Place blueberries under the glass, hold them there with the help of a wooden grate. Pour cold tea.",
                "Consume fast when the cast mage armor loses it’s effect.",
                "Appetizers",
                "Sugar Rain",
                "A white powder that is good for light dishes.",
                "Mix eggs, flour and salted water. When it’s mixed, add chocolate, raisins or nothing and let it to rest for a day. Cut them in shapes according to your taste and dip them on melted sugar. Let them freeze upside down so excess sugar can drip.",
                ".",
                "Unsatisfied Potatoes",
                "Sweet potatoes that are good for heavier dishes.",
                "Chop sweet potatoes in half and extract it’s insides. Insert following in between when mixed:",
                "Thyme leaves, Garlic, Pepper, Ground Beef. Boil milk with lot’s of rock salt and when it get’s creamy, pour it in almost to the brim. Place the extracted insides on top carefully. Place potatoes between a campfire woods for better smoking. Cook the potatoes and they are ready to be served.",
                "Sweets",
                "Red Apple",
                "Great sweet for children of all ages!",
                "Boil beets until the water turns red. Extract beets and save the water. Melt lot’s of sugar to caramel and add small amounts of beet water. Mix until it is smooth.",
                "Get ripe apples and coat them with the mix. Stab it with a stick to make it easier to eat.",
                "Beware, this is not good for ones with weak teeth.",
                ".",
                "Soft White",
                "Try it by eating from your special one’s kiss!",
                "Whip egg whites till they are bubbly. Add sugar to the mix and keep whipping. When they can hold stiff peaks, pour it on a container that you can squeeze. Decorate anything, then pour boiled, thick wine on top for extra kick. You can also add the beet water from earlier to give it more color!",
                "Dishes",
                "Chaliapin Steak with Puree’d Potatoes",
                "Cut a thin piece of steak, preferably lamb. Make small cuts on top and bottom of it following a parallel line. Be careful not to cut it apart.",
                "Chop a lot of onions and cover the steak with them. Place it in between of some plates or wrap it with cured leather to make it air tight. Let it rest for a day.",
                "Prepare a potato puree by boiling it and then adding milk to it. Mix until smooth.",
                "Fry your steak with the onions and only take the steak. You can add carrots while frying.",
                "Plate the puree first, add the steak and then grate fresh onions on top.",
                ".",
                "Sea Breeze",
                "This is not good for people that show red skin to sea food.",
                "Get some shrimp and fish scales. Make a fish stock and boil the shrimp in it.",
                "Boil some rice and then prepare your mixture. Chop tomatoes, green pepper, carrots, eggplant and add turmeric. Mix them with the rice and then fry the rice with olive oil.",
                "Add the shrimps.",
                "If you want an extra ocean taste, you can keep adding fish parts that are boiled in the fish stock. Do not add more spice.",
                "Make sure to clean your surroundings and then serve with a smile on your face"
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
