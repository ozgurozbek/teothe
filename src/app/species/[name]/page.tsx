import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

// Define a mapping of species names to their corresponding components
const speciesComponents: Record<string, ComponentType<{}>> = {
  aarakocra: dynamic(() => import('@/components/species/subpages/aarakocra')),
  aasimar: dynamic(() => import('@/components/species/subpages/aasimar')),
  aokin: dynamic(() => import('@/components/species/subpages/aokin')),
  bugbear: dynamic(() => import('@/components/species/subpages/bugbear')),
  changeling: dynamic(() => import('@/components/species/subpages/changeling')),
  // Add additional species components here
};

// The main species page component
const SpeciesPage = ({ params }: { params: { name: string } }) => {
  const { name } = params; // Extract name from params
  const SpeciesContent = speciesComponents[name] || (() => <div>Species not found.</div>); // Fallback if the species doesn't exist

  return <SpeciesContent />;
};

// Function to dynamically set the metadata based on species name
export const generateMetadata = async ({ params }: { params: { name: string } }): Promise<Metadata> => {
  const metadata: Record<string, Metadata> = {
    aarakocra: {
      title: "Aarakocra",
      description: "Aarakocra are avian beings with colorful feathers, known for their love of freedom and guardianship of the skies.",
    },
    aasimar: {
        title: "Aasimar",
        description: "Aasimar are mortals touched by celestial power, often driven to champion good and uphold justice.",
    },
    aokin: {
        title: "Aokin",
        description: "The Aokin are nature-bound beings from Teothe, shaped by ancestral traditions and a deep connection to the cosmos.",
    },
    bugbear: {
        title: "Bugbear",
        description: "Bugbears are large, brutish creatures, blending surprising stealth with strength, often underestimated by their foes.",
    },
    changeling: {
      title: "Changeling",
      description: "Changelings are shape-shifters, capable of altering their appearance at will, often hiding their true selves beneath a façade.",
    },
    dragonborn: {
        title: "Dragonborn",
        description: "Dragonborn are proud, draconic humanoids, known for their honor and strength, often seeking to prove their worth to their kin.",
    },
    dwarf: {
        title: "Dwarf",
        description: "Dwarves are stout and hardy, famed for their craftsmanship, resilience, and a deep connection to their mountain homes.",
    },
    drow: {
        title: "Drow",
        description: "Drow are dark elves from the Underdark, known for their cunning, innate magical abilities, and complex societal structures.",
    },
    elf: {
        title: "Elf",
        description: "Elves are graceful and agile beings, with a natural affinity for magic and a deep connection to the forests and the fey.",
    },
    fairy: {
        title: "Fairy",
        description: "Fairies are tiny, magical creatures with wings, embodying whimsy and playfulness, often involved in the affairs of nature.",
    },
    goliath: {
        title: "Goliath",
        description: "Goliaths are towering and powerful, often found in mountainous regions, they value strength, endurance, and communal living.",
    },
    genasi: {
        title: "Genasi",
        description: "Genasi are beings infused with elemental power, embodying the traits of air, earth, fire, or water, and often seen as outsiders.",
    },
    gnome: {
        title: "Gnome",
        description: "Gnomes are clever and inventive, known for their curiosity and knack for tinkering with magic and technology.",
    },
    human: {
        title: "Human",
        description: "Humans are versatile and ambitious, capable of adapting to any environment and driven by a desire to explore and innovate.",
    },
    "half-orc": {
        title: "Half-orc",
        description: "Half-orcs are a blend of human and orc heritage, often struggling with their dual nature while displaying fierce strength and resilience.",
    },
    halfling: {
        title: "Halfling",
        description: "Halflings are small and nimble folk, known for their resourcefulness, love for comfort, and ability to go unnoticed.",
    },
    "half-elf": {
        title: "Half-elf",
        description: "Half-elves combine the best traits of humans and elves, often navigating two worlds while seeking to carve out their own identity.",
    },
    kenku: {
        title: "Kenku",
        description: "Kenku are avian humanoids, skilled in mimicry and stealth, often struggling with their lost ability to fly and seeking to reclaim their heritage.",
    },
    loxodon: {
        title: "Loxodon",
        description: "Loxodons are elephantine humanoids, known for their wisdom, compassion, and strong sense of community.",
    },
    leonin: {
        title: "Leonin",
        description: "Leonin are proud, lion-like humanoids who value honor and strength, often living in tribes and defending their territory fiercely.",
    },
    svirfneblin: {
        title: "Svirfneblin",
        description: "Svirfneblin, or deep gnomes, are a subrace of gnomes dwelling in the Underdark, known for their stealth, magic, and elusive nature.",
    },
    shifter: {
        title: "Shifter",
        description: "Shifters are descendants of humans and lycanthropes, capable of taking on bestial traits and embodying primal instincts.",
    },
    tortle: {
        title: "Tortle",
        description: "Tortles are turtle-like humanoids with a slow and steady demeanor, known for their deep connection to the sea and nature.",
    },
    tiefling: {
        title: "Tiefling",
        description: "Tieflings bear the legacy of infernal heritage, marked by their unusual appearance and often grappling with societal prejudices.",
    },
    warforged: {
        title: "Warforged",
        description: "Warforged are living constructs, created for battle but seeking purpose and identity beyond their original design.",
    }
    // Add metadata for other species as needed
  };

  // Return the metadata for the current species or fallback if not found
  return metadata[params.name] || { title: "Species Not Found", description: "This species does not exist." };
};

// This function generates static paths at build time
export const generateStaticParams = async () => {
  const speciesList = ['aarakocra', 'aasimar', 'aokin', 'bugbear', 'changeling', 'dragonborn', 'dwarf', 'drow', 'elf', 'fairy', 'goliath', 'genasi', 'gnome', 'human', 'half-orc', 'halfling', 'half-elf', 'kenku', 'loxodon', 'leonin', 'svirfneblin', 'shifter', 'tortle', 'tiefling', 'warforged']; // Add all dynamic species names here

  return speciesList.map(name => ({
    name,
  }));
};

export default SpeciesPage;