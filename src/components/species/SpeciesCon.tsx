import { Typography, Col, Row, Image, Button, Divider } from "antd";

const { Title } = Typography;

/**
 * Generates Species content with image, text and homebrew.
 * @param SpeciesPic
 * @param DescriptionText
 * @returns Row(antd)
 */
export default function SpeciesCon({
  SpeciesPic,
  DescriptionText,
}: {
  SpeciesPic: { src: string; alt: string; phrase: string };
  DescriptionText: {
    title: string;
    paragraph: string | string[];
    homebrew?: string | string[];
  };
}) {
  let speciesDesc = [];

  for (let i = 0; i < DescriptionText.paragraph.length; i++) {
    if (DescriptionText.paragraph[i] != "") {
      speciesDesc.push(<p className="mb-1">{DescriptionText.paragraph[i]}</p>);
    }
  }

  if (DescriptionText.homebrew) {
    for (let i = 0; i < DescriptionText.homebrew.length; i++) {
      speciesDesc.push(
        <p className="text-pink-600"> {DescriptionText.homebrew[i]}</p>
      );
    }
  }

  return (
    <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="p-2">
      <Col span={24} className="h-full flex flex-col">
        <Image
          src={SpeciesPic.src}
          alt={SpeciesPic.alt}
          rootClassName="w-full"
        />
        <Title className="capitalize">{DescriptionText.title}</Title>
        {speciesDesc}
        <p className="italic text-center pt-2 px-2 text-lg">
          {SpeciesPic.phrase}
        </p>
        <div className="mt-auto">
          <Button
            href={"/species/" + DescriptionText.title}
            className="w-full mt-4 mb-4"
          >
            <span className="capitalize">More On {DescriptionText.title}</span>
          </Button>
          <Divider />
        </div>
      </Col>
    </Col>
  );
}
