"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SpeciesCon from "@/components/species/SpeciesCon";
import { Card, Row } from "antd";
/**
 * Function to fetch and render species data based on homebrew and official toggle switches.
 * @generator
 * @see SpeciesCon
 * @returns An array of rendered species components.
 */
function GetSpecies() {
  const data = [
    {
      phrase: "Through triumphs forged in stone, our wisdom soars.",
      description: "Goliaths are towering and powerful, often found in mountainous regions, they value strength, endurance, and communal living.",
      name: "goliath",
    },
    {
      phrase: "We humans have to stick together! Never trust the other species, never!",
      description: "Humans are versatile and ambitious, capable of adapting to any environment and driven by a desire to explore and innovate.",
      name: "human",
    },
    {
      phrase: "A secret is hidden, mine is beneath the hidden surface.",
      description: "Svirfneblin, or deep gnomes, are a subrace of gnomes dwelling in the Underdark, known for their stealth, magic, and elusive nature.",
      name: "svirfneblin",
    },
    {
      phrase: "Fury stoked by joint might, a legacy beyond mere pillage!",
      description: "Half-orcs are a blend of human and orc heritage, often struggling with their dual nature while displaying fierce strength and resilience.",
      name: "half-orc",
    },
    {
      phrase: "I had 100 mothers and each had 100 children, who are you gazing at single-skin?",
      description: "Changelings are shape-shifters, capable of altering their appearance at will, often hiding their true selves beneath a façade.",
      name: "changeling",
    },
    {
      phrase: "Feeble mortals, witness the genius of a genasi artisan, for in my hands, the elements dance with envy, while your pitiful craftsmanship pales in comparison to the unparalleled majesty I bestow upon this world!",
      description: "Genasi are beings infused with elemental power, embodying the traits of air, earth, fire, or water, and often seen as outsiders.",
      name: "genasi",
    },
    {
      phrase: "Roahr - Why are you so afraid, never seen sharp teeth?",
      description: "Shifters are descendants of humans and lycanthropes, capable of taking on bestial traits and embodying primal instincts.",
      name: "shifter",
    },
    {
      phrase: "Within our veins flows the essence of Ehx, the fire of ambition ignites our spirits, and with scales gleaming like gems, we rise as Dragonborn, protectors of legacy and seekers of untold glory.",
      description: "Dragonborn are proud, draconic humanoids, known for their honor and strength, often seeking to prove their worth to their kin.",
      name: "dragonborn",
    },
    {
      phrase: "We, the steadfast, choose to embrace the Modest Truth for its unyielding clarity, its resolute guidance that cuts through the veils of uncertainty, and its unwavering foundation upon which we stand as stalwart defenders of justice and guardians of unwavering principles.",
      description: "Loxodons are elephantine humanoids, known for their wisdom, compassion, and strong sense of community.",
      name: "loxodon",
    },
    {
      phrase: "Echoes may escape my beak, but the stories remain forever in my heart as I am both the authentic and the mimic.",
      description: "Kenku are avian humanoids, skilled in mimicry and stealth, often struggling with their lost ability to fly and seeking to reclaim their heritage.",
      name: "kenku",
    },
    {
      phrase: "Life's truest treasures lie not in grand quests or towering achievements, but in the embrace of family, the bonds of kinship, and the curious pursuit of simple pleasures that weave the tapestry of our Halfling hearts.",
      description: "Halflings are small and nimble folk, known for their resourcefulness, love for comfort, and ability to go unnoticed.",
      name: "halfling",
    },
    {
      phrase: "Oh, the Material Plane, a delightful canvas for my mischievous play!",
      description: "Fairies are tiny, magical creatures with wings, embodying whimsy and playfulness, often involved in the affairs of nature.",
      name: "fairy",
    },
    {
      name: "aokin",
      phrase: "Should we look? No, no... Stay silent.",
      description: "The Aokin are nature-bound beings from Teothe, shaped by ancestral traditions and a deep connection to the cosmos."
    },
    {
      phrase: "I caught a big fish. Now I search for a good friend. To share my lunch with.",
      description: "Tortles are turtle-like humanoids with a slow and steady demeanor, known for their deep connection to the sea and nature.",
      name: "tortle",
    },
    {
      phrase: "With ale in hand and hammers ablaze, we forge joy into progress amidst the cold winds.",
      description: "Dwarves are stout and hardy, famed for their craftsmanship, resilience, and a deep connection to their mountain homes.",
      name: "dwarf",
    },
    {
      phrase: "The web of dominance thrives in shadows.",
      description: "A drow, also known as dark elf, deep elf, night elf, and the Dark One, is infused with the magic of the Underdark.",
      name: "drow",
    },
    {
      phrase: "In the realm of boundless imagination, we wield invention and exploration, painting life's canvas with the curious brush of creation, where each moment becomes a masterpiece of play and delight.",
      description: "Gnomes are clever and inventive, known for their curiosity and knack for tinkering with magic and technology.",
      name: "gnome",
    },
    {
      phrase: "For honor, for sacrifice, for the forge.",
      description: "Warforged are living constructs, created for battle but seeking purpose and identity beyond their original design.",
      name: "warforged",
    },
    {
      phrase: "We Tieflings bear the scars of bitter pasts, our hearts burdened with deep-seated distrust and the weight of abandonment, yet, through the flames of adversity, we tread the path in search of power, for in its embrace, we find solace and the means to forge our own destiny.",
      description: "Tieflings bear the legacy of infernal heritage, marked by their unusual appearance and often grappling with societal prejudices.",
      name: "tiefling",
    },
    {
      phrase: "Betwixt two realms, hunted and foreign, we arise with unyielding ambition.",
      description: "Half-elves combine the best traits of humans and elves, often navigating two worlds while seeking to carve out their own identity.",
      name: "half-elf",
    },
    {
      phrase: "With the divine light coursing through our veins, we, the embodiment of radiance, carry the flame of hope, serving justice against the foul.",
      description: "Aasimar are mortals touched by celestial power, often driven to champion good and uphold justice.",
      name: "aasimar",
    },
    {
      phrase: "Night's terror is mine to wield.",
      description: "Bugbears are large, brutish creatures, blending surprising stealth with strength, often underestimated by their foes.",
      name: "bugbear",
    },
    {
      phrase: "Sometimes it's not about being talented, it's about being hungrier.",
      description: "Leonin are proud, lion-like humanoids who value honor and strength, often living in tribes and defending their territory fiercely.",
      name: "leonin",
    },
    {
      phrase: "Sad it is, as we Aarakocra soar above earthly bounds amidst wind and cloud, finding sanctuary in mountains and guidance in the eternal sky, while those confined fail to witness how each flight unveils boundless wonders untold.",
      description: "Aarakocra are avian beings with colorful feathers, known for their love of freedom and guardianship of the skies.",
      name: "aarakocra",
    },
    {
      phrase: "Embrace of the green and tranquil heart of the forests, where our spirits find solace, whispers of nature weave our eternal song.",
      description: "Elves are graceful and agile beings, with a natural affinity for magic and a deep connection to the forests and the fey.",
      name: "elf",
    },
  ];

  interface DataType {
    description: string;
    homebrew: string;
    name: string;
    phrase: string;
    key: string;
  }

  //@ts-ignore
  data.sort((a: DataType, b: DataType) => a.name.charCodeAt(0) - b.name.charCodeAt(0));

  let renderedSpecies = [];
  for (let item of data) {
    {
      renderedSpecies.push(
        <SpeciesCon
          SpeciesPic={{
            src: "./Species/" + item.name + ".png",
            alt: item.name + " image",
            phrase: item.phrase,
          }}
          DescriptionText={{
            title: item.name,
            paragraph: item.description,
          }}
        />
      );
    }
  }
  return <Row>{renderedSpecies}</Row>;
}

/**
 * Component for the species page, displaying breadcrumbs, toggle switches for homebrew and official species, and a card containing species data.
 * @returns The species page section with breadcrumbs, toggle switches, and species data.
 */
export default function SpeciesContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species"} />
      <Card bordered={false}>{GetSpecies()}</Card>
    </section>
  );
}
