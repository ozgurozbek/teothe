import { Typography, Col, Row, Image } from "antd";

const { Title } = Typography;

export default function RacesCon({
  RacePic,
  DescriptionText,
}: {
  RacePic: { src: string; alt: string; phrase: string };
  DescriptionText: { title: string; paragraph: string[]; homebrew?: string[] };
}) {
  let textData = [];
  let textData2 = [];

  {
    for (let i = 0; i < DescriptionText.paragraph.length; i++) {
      textData.push(<p className="mb-1">{DescriptionText.paragraph[i]}</p>);
    }
  }
  if (DescriptionText.homebrew) {
    for (let i = 0; i < DescriptionText.homebrew.length; i++) {
      textData2.push(
        <p className="pt-2 text-pink-600"> {DescriptionText.homebrew[i]}</p>
      );
    }
  }

  return (
    <Row justify="space-between">
      <Col span={6} className="pr-4">
        <Col span={24}>
          <Image src={RacePic.src} alt={RacePic.alt} rootClassName="w-full" />
        </Col>
        <Col span={24}>
          <p className="italic text-center pt-2 px-2 text-lg">
            {RacePic.phrase}
          </p>
        </Col>
      </Col>
      <Col span={18}>
        <Title className="capitalize">{DescriptionText.title}</Title>
        {textData}
        {textData2}
      </Col>
    </Row>
  );
}
