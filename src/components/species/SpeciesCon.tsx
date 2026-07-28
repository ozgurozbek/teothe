import { Typography, Col, Image, Button, Divider, Dropdown } from "antd";

import { GetPantheonsForSpecies } from "@/lib/pantheons";

const { Title } = Typography;

/**
 * Generates Species content with image, text and related pantheons.
 */
export default function SpeciesCon({
  SpeciesId,
  SpeciesPic,
  DescriptionText,
}: {
  SpeciesId: string;
  SpeciesPic: { src: string; alt: string; phrase: string };
  DescriptionText: {
    title: string;
    paragraph: string;
  };
}) {
  const pantheons = GetPantheonsForSpecies(SpeciesId);

  return (
    <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="p-2">
      <Col span={24} className="h-full flex flex-col">
        <Image
          src={SpeciesPic.src}
          alt={SpeciesPic.alt}
          rootClassName="w-full"
        />

        <Title className="capitalize">{DescriptionText.title}</Title>

        {DescriptionText.paragraph}

        <p className="italic pl-2 border-l-[#630436] border-l-2 text-lg text-gray-400 mt-4">
          {SpeciesPic.phrase}
        </p>

        <div className="mt-auto">
          {pantheons.length === 1 && (
            <Button
              href={`/pantheons/${pantheons[0].id}`}
              className="w-full mt-4"
            >
              <span className="capitalize">See {pantheons[0].system.name}</span>
            </Button>
          )}

          {pantheons.length > 1 && (
            <Dropdown
              menu={{
                items: pantheons.map((pantheon) => ({
                  key: pantheon.id,
                  label: pantheon.system.name,
                  onClick: () => {
                    window.location.href = `/pantheons/${pantheon.id}`;
                  },
                })),
              }}
              placement="bottom"
            >
              <Button className="w-full mt-4">
                <span className="capitalize">
                  See {pantheons.length} {DescriptionText.title} Pantheons ▼
                </span>
              </Button>
            </Dropdown>
          )}

          <Button href={`/species/${SpeciesId}`} className="w-full mt-4">
            <span className="capitalize">More On {DescriptionText.title}</span>
          </Button>

          <Divider />
        </div>
      </Col>
    </Col>
  );
}
