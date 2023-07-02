import { Typography, Col, Row, Image } from "antd";

const { Title } = Typography;

export default function RacesCon({
  RacePic,
  DescriptionText,
}: {
  RacePic: { src: string; alt: string; phrase: string };
  DescriptionText: { title: string; paragraph: string[]; homebrew: string };
}) {
  let textData = [];
  {
    for (let i = 0; i < DescriptionText.paragraph.length; i++) {
      textData.push(<p className="mb-1">{DescriptionText.paragraph[i]}</p>);
    }
  }

  return (
    <Row justify="space-between">
      <Col span={6}>
        <Col span={24}>
          <Image
            src={RacePic.src}
            alt={RacePic.alt}
            rootClassName="object-cover"
          />
        </Col>
        <Col span={18} offset={3}>
          <p className="italic text-center pt-2 px-2 text-lg">
            {RacePic.phrase}
          </p>
        </Col>
      </Col>
      <Col span={18}>
        <Title className="capitalize">{DescriptionText.title}</Title>
        {textData}
        <p className="pt-2 text-pink-600"> {DescriptionText.homebrew}</p>
      </Col>
    </Row>
  );
}
