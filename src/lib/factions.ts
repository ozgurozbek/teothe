import rawFactions from "@/jsons/factions/factions.json";

export interface DataType {
  factionType: string;
  factionName: string;
  factionAliases: string[];
  factionDeity: string;
  factionEnemies: string[];
  factionAllies: string[];
  factionDetail: string[];
  factionHQ: string;
  factionKey: number;
  factionImageName?: string;
  alignmentValues?: number[];
}

export const factionsData = rawFactions as DataType[];