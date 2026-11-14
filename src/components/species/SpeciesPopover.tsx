import species from "@/jsons/species/species.json";
import EntityPopover from "@/components/EntityPopover";

export interface SpeciesType {
  id: string;
  image: string;
  content: string;
  quote: string;
}

function getSpeciesById(id: string): SpeciesType | null {
  if (!id) return null;
  return species.find((s) => s.id === id) ?? null;
}

function formatName(name: string) {
  return name
    .replaceAll("_", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function SpeciesPopover({ id }: { id: string }) {
  const entry = getSpeciesById(id);

  if (!entry) return <span>{formatName(id)}</span>;

  const displayName = formatName(entry.id);
  const imageSrc = entry.image
    ? `/Species/${entry.image}`
    : `/Species/${entry.id}.png`;

  return (
    <EntityPopover
      triggerLabel={displayName}
      title={displayName}
      imageSrc={imageSrc}
      description={entry.content}
      quote={entry.quote}
    />
  );
}
