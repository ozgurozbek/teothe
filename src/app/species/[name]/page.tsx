import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

// Define a mapping of species names to their corresponding components
const speciesComponents: Record<string, ComponentType<{}>> = {
  aarakocra: dynamic(() => import('@/components/species/subpages/aarakocra')),
  aasimar: dynamic(() => import('@/components/species/subpages/aasimar')),
  aokin: dynamic(() => import('@/components/species/subpages/aokin')),
  bugbear: dynamic(() => import('@/components/species/subpages/bugbear')),
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
      description: "Coloured avian species with a focus on freedom.",
    },
    aasimar: {
      title: "Aasimar",
      description: "Infused with heavenly power, aasimar are the ones who carry a spark of the Upper Planes.",
    },
    aokin: {
      title: "Aokin",
      description: "Aokin of Teothe are a spiritual, nature-bound species in Aoradon, shaped by Natuva beliefs, ancestral rituals, and cosmic forces.",
    },
    bugbear: {
      title: "Bugbear",
      description: "Neither bugs nor bears, bugbears are the hulking cousins of goblins and hobgoblins.",
    },
    // Add metadata for other species as needed
  };

  // Return the metadata for the current species or fallback if not found
  return metadata[params.name] || { title: "Species Not Found", description: "This species does not exist." };
};

// This function generates static paths at build time
export const generateStaticParams = async () => {
  const speciesList = ['aarakocra', 'aasimar', 'aokin', 'bugbear']; // Add all dynamic species names here

  return speciesList.map(name => ({
    name,
  }));
};

export default SpeciesPage;