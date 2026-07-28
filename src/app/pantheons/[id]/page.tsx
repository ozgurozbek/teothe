import { notFound } from "next/navigation";
import { Card, Divider } from "antd";

import GetCrumbs from "@/components/NavigationCrumb";
import pantheons from "@/jsons/pantheons/pantheons.json";

import Title from "antd/es/typography/Title";

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

  const pantheon = (pantheons as PantheonData[]).find(
    (item) => item.id === id
  );

  if (!pantheon) {
    notFound();
  }
 console.log(pantheon.system.name)
  return (
    <section>
      <GetCrumbs
        path={`Teothe,Pantheons,${pantheon.system.name}`}
      />

      <Card variant="outlined">
        <Title>
          {pantheon.system.name}
        </Title>

        {pantheon.system.description?.map((text) => (
          <p key={text}>
            {text}
          </p>
        ))}

        <Divider />

        <Title level={3}>
          Species
        </Title>

        <p>
          {pantheon.system.species.join(", ")}
        </p>

        <Divider />

        <Title level={3}>
          Divine Entities
        </Title>

        {pantheon.system.deities.map((entity) => (
          <Card key={entity.id} className="mb-2">
            <Title level={4}>
              {entity.name ?? entity.id}
            </Title>

            {entity.description && (
              <p>
                {entity.description}
              </p>
            )}

            {entity.stance && (
              <p>
                Role: {entity.stance}
              </p>
            )}
          </Card>
        ))}
      </Card>
    </section>
  );
}