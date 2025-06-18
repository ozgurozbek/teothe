import { Typography, Avatar, Tooltip, Space, Card, Divider } from "antd";

const { Title } = Typography;

export default function Faction({
  imageSrc,
  typeImageSrc,
  descriptionProps,
}: {
  imageSrc: string;
  typeImageSrc: string;
  descriptionProps: {
    factionType: string;
    factionName: string;
    factionAliases: string[];
    factionDeity: string;
    factionEnemies: string[];
    factionAllies: string[];
    factionDetail: string[];
    factionHQ: string;
    factionKey: number;
  };
}) {
  return (
    <div className="h-full p-2" key={descriptionProps.factionKey}>
      <Card className="w-full h-full relative pb-12">
        <Space size="small" className="mb-2">
          <Avatar
            size={{ xs: 64, sm: 64, md: 64, lg: 80, xl: 100, xxl: 120 }}
            src={imageSrc}
            alt={descriptionProps.factionName}
            draggable={false}
            onClick={() => window.open(imageSrc, "_blank")}
            className="cursor-pointer"
          />
          <div>
            <Title level={3} className="mb-0">
              {descriptionProps.factionName}
            </Title>
          </div>
        </Space>
        <Divider />
        {descriptionProps.factionAliases.length > 0 && (
          <p>
            Alias{descriptionProps.factionAliases.length > 1 ? "es" : ""}:{" "}
            {descriptionProps.factionAliases.join(", ")}
          </p>
        )}
        {descriptionProps.factionAllies.length > 0 && <p>Allies: {descriptionProps.factionAllies.join(", ")}</p>}
        {descriptionProps.factionEnemies.length > 0 && <p>Enemies: {descriptionProps.factionEnemies.join(", ")}</p>}
        {descriptionProps.factionDeity && <p>Deity: {descriptionProps.factionDeity}</p>}
        {descriptionProps.factionHQ && <p>HQ: {descriptionProps.factionHQ}</p>}
        <Divider />
        {descriptionProps.factionDetail.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        <Divider />
        <div className="absolute bottom-0 my-4">
          <Tooltip
            placement="left"
            color="#630436"
            title={descriptionProps.factionType}
          >
            <Avatar
              size={{ xs: 48, sm: 48, md: 48, lg: 60, xl: 60, xxl: 60 }}
              src={typeImageSrc}
              alt={`${descriptionProps.factionType} Type Image`}
              draggable={false}
              shape="square"
            />
          </Tooltip></div>
      </Card>
    </div>
  );
}
