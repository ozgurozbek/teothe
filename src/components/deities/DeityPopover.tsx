import { Popover, Avatar, Typography, Space } from "antd";
import deities from "@/jsons/deities/deities.json";

const { Text } = Typography;

export interface DeityType { order: number; id: string; rank: string; name: string; image: string; description: string; domains: string[]; }

function getDeityByName(name: string): DeityType | null {
  if (!name) return null;
  return deities.find((d) => d.name === name) ?? null;
}


export default function DeityPopover({ name }: { name: string }) {
  const deity = getDeityByName(name);

  if (!deity) return <span>{name}</span>;

  const imageSrc = `/Deities/${deity.name}.png`;

  const imagePreview = (
    <img
      src={imageSrc}
      alt={deity.name}
      style={{
        maxWidth: 300,
        maxHeight: 300,
        display: "block",
      }}
    />
  );

  const content = (
    <div style={{ maxWidth: 300 }}>
      <Space align="start">
        <Popover
          content={imagePreview}
          trigger="hover"
          placement="right"
          styles={{
            container: { padding: 0 },
          }}
        >
          <Avatar size={64} src={imageSrc} style={{ cursor: "zoom-in" }} />
        </Popover>

        <div>
          <Text strong>{deity.name}</Text>
          <div style={{ color: "#999" }}>{deity.domains.join(", ")}</div>
        </div>
      </Space>

      <div style={{ marginTop: 8 }}>{deity.description}</div>
    </div>
  );

  return (
    <Popover content={content} trigger={["hover", "click"]} placement="top">
      <span style={{ textDecoration: "underline", cursor: "pointer" }}>
        {name}
      </span>
    </Popover>
  );
}
