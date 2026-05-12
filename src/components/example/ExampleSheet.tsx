"use client";

import { Card, Typography, Carousel, Row, Col, Descriptions } from "antd";

const { Title, Paragraph } = Typography;

type ExampleData = {
  name: string;
  appearance: string;
  images: string[];

  base: {
    alignment?: string;
    gender?: string;
    eyes?: string;
    size?: string;
    height?: string;
    faith?: string;
    hair?: string;
    skin?: string;
    age?: string;
    weight?: string;
  };

  personality: {
    traits: string[];
    ideals: string[];
    bonds: string[];
    flaws: string[];
  };

  background: string[];
  relations: {
    organizations: string[];
    allies: string[];
    enemies: string[];
  };

  notes: string[];
  backstory: string[];
};

type Props = {
  data: ExampleData;
};

const SectionCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Card title={title} variant="outlined" className="h-full">
    {children}
  </Card>
);

const ListBlock = ({ items }: { items: string[] }) => (
  <ul className="space-y-1">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

export default function ExampleSheet({ data }: Props) {
  return (
    <section className="space-y-6">
      {/* Name + Image + Appearance */}
      <Card variant="outlined">
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Carousel autoplay>
              {data.images?.length ? (
                data.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    className="h-[30rem] object-cover object-top rounded-xl"
                  />
                ))
              ) : (
                <div className="h-[30rem] flex items-center justify-center rounded-xl">
                  No Image
                </div>
              )}
            </Carousel>
          </Col>

          <Col xs={24} md={12}>
            <Title>{data.name}</Title>
            {data.appearance && <Paragraph>{data.appearance}</Paragraph>}
          </Col>
        </Row>
      </Card>

      {/* Base Info */}
      <SectionCard title="Base">
        <Descriptions column={2} size="small">
          {Object.entries(data.base).map(([key, value]) =>
            value ? (
              <Descriptions.Item key={key} label={key}>
                {value}
              </Descriptions.Item>
            ) : null
          )}
        </Descriptions>
      </SectionCard>

      {/* Personality */}
      <Row gutter={[16, 16]}>
        <Col xs={24} md={6}>
          <SectionCard title="Traits">
            <ListBlock items={data.personality.traits} />
          </SectionCard>
        </Col>
        <Col xs={24} md={6}>
          <SectionCard title="Ideals">
            <ListBlock items={data.personality.ideals} />
          </SectionCard>
        </Col>
        <Col xs={24} md={6}>
          <SectionCard title="Bonds">
            <ListBlock items={data.personality.bonds} />
          </SectionCard>
        </Col>
        <Col xs={24} md={6}>
          <SectionCard title="Flaws">
            <ListBlock items={data.personality.flaws} />
          </SectionCard>
        </Col>
      </Row>

      {/* Background */}
      <SectionCard title="Background">
        <div className="prose max-w-none">
          {data.background.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </SectionCard>

      {/* Relations */}
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <SectionCard title="Organizations">
            <ListBlock items={data.relations.organizations} />
          </SectionCard>
        </Col>
        <Col xs={24} md={8}>
          <SectionCard title="Allies">
            <ListBlock items={data.relations.allies} />
          </SectionCard>
        </Col>
        <Col xs={24} md={8}>
          <SectionCard title="Enemies">
            <ListBlock items={data.relations.enemies} />
          </SectionCard>
        </Col>
      </Row>

      {/* Notes */}
      {data.notes && data.notes.length > 0 && (
        <SectionCard title="Notes">
          <ListBlock items={data.notes} />
        </SectionCard>
      )}

      {/* Backstory */}
      <SectionCard title="Backstory">
        <div className="prose max-w-none max-h-[500px] overflow-y-auto">
          {data.backstory.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </SectionCard>
    </section>
  );
}