import { notFound } from "next/navigation";
import { Card, Divider, Image, Space } from "antd";
import Title from "antd/es/typography/Title";

import GetCrumbs from "@/components/NavigationCrumb";
import SpeciesPopover from "@/components/species/SpeciesPopover";
import DeityPopover from "@/components/deities/DeityPopover";

import pantheons from "@/jsons/pantheons/pantheons.json";

function FormatName(value: string) {
  return value
    .replaceAll("_", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

interface PantheonData {
  id: string;
  system: {
    name: string;
    description?: string[];
    species: string[];
    deities: {
      id: string;
      name?: string;
      description?: string;
      stance?: string;
    }[];
  };
}

export function generateStaticParams() {
  return (pantheons as PantheonData[]).map((pantheon) => ({
    id: pantheon.id,
  }));
}

export default async function PantheonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const pantheon = (pantheons as PantheonData[]).find((item) => item.id === id);

  if (!pantheon) {
    notFound();
  }

  const patrons = pantheon.system.deities.filter((d) => d.stance === "patron");

  const enemies = pantheon.system.deities.filter((d) => d.stance === "enemy");

  const others = pantheon.system.deities.filter(
    (d) => !d.stance || d.stance === "none",
  );

  return (
    <section>
      <GetCrumbs path={`Teothe,Pantheons,${pantheon.system.name}`} />

      <Card variant="outlined">
        <Image
          src={`/Pantheons/${pantheon.id}.png`}
          alt={pantheon.system.name}
          width="100%"
        />

        <Title>{pantheon.system.name}</Title>

        {pantheon.system.description?.map((text) => (
          <p key={text}>{text}</p>
        ))}

        <Divider />

        <Title level={3}>Species</Title>

        <Space wrap>
          {pantheon.system.species.map((species) => (
            <SpeciesPopover key={species} id={species} />
          ))}
        </Space>

        <Divider />

        {patrons.length > 0 && (
          <>
            <Title level={3}>Patrons</Title>

            {patrons.map((deity) => (
              <Card key={deity.id} className="mb-2">
                <Title level={4}>
                  <DeityPopover name={deity.name ?? FormatName(deity.id)} />
                </Title>

                {deity.description && <p>{deity.description}</p>}
              </Card>
            ))}
          </>
        )}

        {enemies.length > 0 && (
          <>
            <Divider />

            <Title level={3}>Enemies</Title>

            {enemies.map((deity) => (
              <Card key={deity.id} className="mb-2">
                <Title level={4}>
                  <DeityPopover name={deity.name ?? FormatName(deity.id)} />
                </Title>

                {deity.description && <p>{deity.description}</p>}
              </Card>
            ))}
          </>
        )}

        {others.length > 0 && (
          <>
            <Divider />

            <Title level={3}>Divine Entities</Title>

            {others.map((deity) => (
              <Card key={deity.id} className="mb-2">
                <Title level={4}>
                  <DeityPopover name={deity.name ?? FormatName(deity.id)} />
                </Title>

                {deity.description && <p>{deity.description}</p>}
              </Card>
            ))}
          </>
        )}
      </Card>
    </section>
  );
}
