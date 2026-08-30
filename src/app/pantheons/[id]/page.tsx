import { notFound } from "next/navigation";
import { Button, Card, Col, Divider, Image, Row, Space } from "antd";
import Title from "antd/es/typography/Title";

import GetCrumbs from "@/components/NavigationCrumb";
import SpeciesPopover from "@/components/species/SpeciesPopover";
import Deity from "@/components/deities/Deities";

import { DoubleRightOutlined } from "@ant-design/icons";

import pantheons from "@/jsons/pantheons/pantheons.json";
import deities from "@/jsons/deities/deities.json";

interface PantheonData {
  id: string;
  system: {
    name: string;
    description?: string[];
    species: string[];
    deities: {
      id: string;
      image?: string;
      name?: string;
      description?: string;
      stance?: string;
    }[];
  };
}

interface DeityData {
  id: string;
  name: string;
  image: string;
  description: string;
  domains: string[];
}

interface ResolvedDeity extends DeityData {
  stance?: string;
}

export function generateStaticParams() {
  return (pantheons as PantheonData[]).map((pantheon) => ({
    id: pantheon.id,
  }));
}

function ResolveDeity(
  deity: PantheonData["system"]["deities"][number],
): ResolvedDeity {
  const base = (deities as DeityData[]).find((item) => item.id === deity.id);

  return {
    id: deity.id,
    name: deity.name ?? base?.name ?? deity.id.replaceAll("_", " "),
    image: deity.image ?? base?.image ?? "",
    description: deity.description ?? base?.description ?? "",
    domains: base?.domains ?? [],
    stance: deity.stance,
  };
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

  const resolvedDeities = pantheon.system.deities.map(ResolveDeity);

  return (
    <section>
      <GetCrumbs path={`Teothe,Pantheons,${pantheon.system.name}`} />

      <Card variant="outlined">
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="pr-4">
            <Image
              src={`/Pantheons/${pantheon.id}.png`}
              alt={pantheon.system.name}
              rootClassName="w-full"
            />
          </Col>

          <Col xs={24} sm={24} md={12} lg={18} xl={18} xxl={18} className="p-4">
            <Title>{pantheon.system.name}</Title>

            {pantheon.system.description?.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </Col>
        </Row>

        <Button href="/pantheons">
          See All Pantheons <DoubleRightOutlined />
        </Button>

        <Divider />

        {pantheon.system.species.length > 0 && (
          <>
            <Title level={3}>Species</Title>

            <Space wrap>
              {pantheon.system.species.map((species) => (
                <Button key={species} href={`/species/${species}`}>
                  <SpeciesPopover id={species} />
                </Button>
              ))}

              <Button href="/species">
                See All Species <DoubleRightOutlined />
              </Button>
            </Space>

            <Divider />
          </>
        )}

        {resolvedDeities.length > 0 && (
          <>
            <Title level={3}>Divine Entities</Title>

            <Row gutter={[16, 16]}>
              {resolvedDeities.map((deity) => (
                <Col
                  key={deity.id}
                  xs={24}
                  sm={24}
                  md={12}
                  lg={8}
                  xl={8}
                  xxl={6}
                >
                  <div
                    className="rounded-lg h-full"
                    style={{
                      border:
                        deity.stance === "patron"
                          ? "3px solid #630436"
                          : deity.stance === "enemy"
                            ? "3px solid #30011a"
                            : undefined,
                    }}
                  >
                    <Deity
                      imageSrc={
                        deity.image
                          ? `/Deities/${deity.image}`
                          : `/Deities/${deity.id}.png`
                      }
                      descriptionProps={{
                        title: deity.name,
                        body: deity.description,
                        domains: deity.domains,
                      }}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </>
        )}
      </Card>
    </section>
  );
}
