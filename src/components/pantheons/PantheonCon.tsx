import { Typography, Col, Image, Button, Divider } from "antd";

const { Title } = Typography;

export default function PantheonCon({
  PantheonData,
}: {
  PantheonData: {
    id: string;
    name: string;
    description: string[];
    species: string[];
  };
}) {
  return (
    <Col
      xs={24}
      sm={24}
      md={12}
      lg={8}
      xl={8}
      xxl={6}
      className="p-2"
    >
      <Col span={24} className="h-full flex flex-col">

        <Image
          src={`./Pantheons/${PantheonData.id}.png`}
          alt={`${PantheonData.name} image`}
          rootClassName="w-full"
        />

        <Title className="capitalize">
          {PantheonData.name}
        </Title>

        {PantheonData.description.map((text) => (
          <p key={text}>
            {text}
          </p>
        ))}

        <div className="mt-auto">

          <Button
            href={`/pantheons/${PantheonData.id}`}
            className="w-full mt-4 mb-4"
          >
            View Pantheon
          </Button>

          <Divider />

        </div>

      </Col>
    </Col>
  );
}