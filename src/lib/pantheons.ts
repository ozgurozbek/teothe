import pantheons from "@/jsons/pantheons/pantheons.json";

export interface PantheonData {
  id: string;
  system: {
    name: string;
    description?: string[];
    species: string[];
    deities: {
      id: string;
      name?: string;
      image?: string;
      description?: string;
      stance?: string;
    }[];
  };
}

const data = pantheons as PantheonData[];

export function GetPantheonsForSpecies(speciesId: string) {
  return data.filter((pantheon) =>
    pantheon.system.species.includes(speciesId)
  );
}