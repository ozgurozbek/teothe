import { Typography, Col, Row, Image } from "antd";

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
  DescriptionText: { title: string; paragraph: string[]; homebrew?: string[] };
}) {
  let speciesDesc = [];
  let speciesBrew = [];

  for (let i = 0; i < DescriptionText.paragraph.length; i++) {
    if (DescriptionText.paragraph[i] != "") {
      speciesDesc.push(<p className="mb-1">{DescriptionText.paragraph[i]}</p>);
    }
  }

  if (DescriptionText.homebrew) {
    for (let i = 0; i < DescriptionText.homebrew.length; i++) {
      speciesBrew.push(
        <p className="pt-2 text-pink-600"> {DescriptionText.homebrew[i]}</p>
      );
    }
  }

  return (
    <Row justify="space-between">
      <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="pr-4">
        <Col span={24}>
          <Image src={SpeciesPic.src} alt={SpeciesPic.alt} rootClassName="w-full" />
        </Col>
        <Col span={24}>
          <p className="italic text-center pt-2 px-2 text-lg">
            {SpeciesPic.phrase}
          </p>
        </Col>
      </Col>
      <Col xs={24} sm={24} md={12} lg={18} xl={18} xxl={18}>
        <Title className="capitalize">{DescriptionText.title}</Title>
        {speciesDesc}
        {speciesBrew}
      </Col>
    </Row>
  );
}
