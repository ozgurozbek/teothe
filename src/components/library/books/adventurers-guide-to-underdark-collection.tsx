"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function AdventurersGuideToUnderdarkContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,Adventurer’s Guide: To Underdark"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "Adventurer’s Guide: To Underdark",
              text: [
                "You want to visit the Underdark huh? It is similar to our home but different in a way that troubles most souls that venture there. Slavers and slaves, drow and duergar fill this place. The vast, multilayered underworld that imitates our home. Always cold with dry air, never feeling the sunlight and the wind. There are ways to go in and die there.",
                "On your travels, without stars and proper navigation, your way will be lit with bioluminescent fungi and glowstone. If the path is dark, you are surrounded by dark rock. You may be surprised to see old bridges and destroyed buildings but remember, these lands are full of life. That wood you see is not actually wood. Lumber-like fungus and carved stalagmites are used for them, and they are weak or sharp. Settling down below the caves, in the caves, underground magma rivers.",
                "This brief introduction may cause you to avoid this place, and you should. Scholars and brave men, listen to my words. There are grave dangers and a different pool of magic here. Faerzress. Many cities are built where Faerzress is little to protect their cities. It messes with your spells. The races below also have gear for this wild magic. They make items, gear, and wage war against each other using this. Although the threat doesn't even begin there. Purple worms, umberhulks, zornns, Kuo-Toa and others lurk in the Underdark. You will be incredibly lucky to find a recent map if there is even any. I have the overall map that I came across, distributed in this series, and have high doubts that it will ever change.",
                "Greetings adventurers to the second addition! I'll be talking about how The Underdark's layers work in this section. Reminding you that water is so scarce and fresh water is hoarded and protected, some of my many gears, including notes, have been traded with the natives of Underdark. Interesting fact that they use Electrum over there instead of gold. I managed to strike a bargain by getting an electrum piece per 2 gold pieces.",
                "The Upperdark as they call it, Underdark for children as I call it. Drow outposts and small settlements take place here. They are usually near the tunnels that are really wide, strong and old. Some of these tunnels may even go all the way up, to home. The main Deep Gnome Population also live here as well as some underground dangers like stone giants. Here, you can eat and eat and eat. You may even want to put on some weight since you'll be needing it as we descend further.",
                "Welcome to the Middledark. Miles deep and huge, the most visited and inhabited area with bigger cities and bigger monsters. Beware that even though most of you still reading this will end up here, the Underdark is never a friend. Some Illithids even travel in groups here, with a beholder here and there. Illithids eat brains, beholders eat.. well, I don't even know if that floating eyeball has a mouth.",
                "As we descend further, we should arrive at the Lowerdark. I've never been here, and never met anyone who dares to enter here. While most of the Underdark is massive caverns, glowing mushrooms, stone cities, dark lakes, long tunnels, hungry everything, stale air, barren mazes, toxic spores, ooze, lava, darkness, maddening silence, Lowerdark is where this all actively seek out for your death. There is also little to no food, so if your portal ended up in the Lowerdark, hopefully, you'll realize and hurry back.",
                "The one thing you don't want to come across here and run as fast as you can dropping any ties you had are the Aboleths. Old gods of the olden times, rulers of the worlds…",
                "If you are still reading this book series, I'll keep it information only, since you must be determined to die. Let's talk about Faerzress. It is a constant radiation of magic. A magic force that protects from receiving visions from different places, alters spells, limits teleportation and feeds plants. That is why the mushrooms are abundant, and moss still grows even in the absence of the sun. Yes, you read that right, the condensed energy is a rival to our sun.",
                "There are also small places that resemble a different world or are so unique called The Undergroves. These can be the difference between your death and survival. I've only come across one, and it is called the Barnacle Fields by the gnomes. Cavernous area, large craters. Their hard shell makes them really difficult to kill but has good meat if you can manage it. Be careful to cook it well to avoid fungus infection. Do not stand on their mouth. Never a good idea.",
                "After learning all this information, I can only hope that you don't die and come back to tell a story. Maybe, you can advance the knowledge provided by this book, or completely destroy the nonsense that is written here, if it is actually nonsense then. Seek out the fourth volume for a map and gear recommendations which I believe to be essential to my return. Good luck adventurers.",
                "The items I have used are as follows. These are a must, in my humble opinion. A lizard leather breathing hood for spore-infested caverns or gaseous chambers. A climbing kit is since stalagmites, purple worm tunnels, pits, volcanic tubes, vertical shafts and many other terrains are extremely dangerous and hard to traverse through. Monsters won’t wait for you so a spider kit and Stoneburner gloves are really good. Potion bladder is also proved useful because you are definitely going to need potions. Running and fighting happened a lot, but if need be, a mister could be used for a more stealthy approach. Best of luck to you, and don't die.",
                "[Map is long lost]"
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
