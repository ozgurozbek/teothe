import EntityPopover from "@/components/EntityPopover";
import { factionsData } from "@/lib/factions";

type Faction = (typeof factionsData)[number];

interface Props {
  factionName: string;
}

// Support both faction names and aliases.
const factionByName = new Map<string, Faction>();

factionsData.forEach((faction) => {
  factionByName.set(faction.factionName.toLowerCase(), faction);

  faction.factionAliases?.forEach((alias) => {
    factionByName.set(alias.toLowerCase(), faction);
  });
});

export default function FactionPopover({ factionName }: Props) {
  const faction = factionByName.get(factionName.trim().toLowerCase());

  if (!faction) return <span>{factionName}</span>;

  const imageName = faction.factionImageName || faction.factionName;

  const description = (
    <>
      {faction.factionDetail?.map((paragraph, index) => (
        <p key={index} style={{ margin: "8px 0 0" }}>
          {paragraph}
        </p>
      ))}

      {faction.factionAliases?.length ? (
        <div style={{ marginTop: 8 }}>
          <strong>Also known as:</strong> {faction.factionAliases.join(", ")}
        </div>
      ) : null}
    </>
  );

  return (
    <EntityPopover
      triggerLabel={factionName}
      title={faction.factionName}
      imageSrc={`/Factions/${imageName}.png`}
      fallbackImageSrc="/Factions/_.png"
      subtitle={
        <>
          <div>{faction.factionType}</div>
          {faction.factionHQ && <div>Headquarters: {faction.factionHQ}</div>}
        </>
      }
      description={description}
    />
  );
}
