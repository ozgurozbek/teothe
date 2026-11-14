import deities from "@/jsons/deities/deities.json";
import EntityPopover from "@/components/EntityPopover";

export interface DeityType {
  order: number;
  id: string;
  rank: string;
  name: string;
  image: string;
  description: string;
  domains: string[];
}

function getDeityByName(name: string): DeityType | null {
  if (!name) return null;
  return deities.find((d) => d.name === name) ?? null;
}

export default function DeityPopover({ name }: { name: string }) {
  const deity = getDeityByName(name);

  if (!deity) return <span>{name}</span>;

  return (
    <EntityPopover
      triggerLabel={deity.name}
      title={deity.name}
      imageSrc={`/Deities/${deity.name}.png`}
      subtitle={deity.domains.join(", ")}
      description={deity.description}
    />
  );
}
