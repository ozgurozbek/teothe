import { Typography, Col, Row, Card, Image } from "antd";

const { Title } = Typography;

export default function RacesCon({
  RacePic,
  DescriptionText,
}: {
  RacePic: { src: string; alt: string };
  DescriptionText: { title: string; paragraph: string };
}) {
  return (
    <Row>
      <Col flex={2}>
        <Image src={RacePic.src} alt={RacePic.alt} rootClassName="rounded" />
      </Col>
      <Col flex={3}>
        <Title>{DescriptionText.title}</Title>
        <p className="mb-2">{DescriptionText.paragraph}</p>
      </Col>
    </Row>
  );
}
// cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
// add phrase to RacePic
