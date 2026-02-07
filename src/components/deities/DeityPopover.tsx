import { Popover, Avatar, Typography, Space } from "antd";
import { getDeityByName } from "@/lib/deities";

const { Text } = Typography;

export default function DeityPopover({ name }: { name: string }) {
  const deity = getDeityByName(name);

  if (!deity) return <span>{name}</span>;

  const imageSrc = `/Deities/${deity.deityName}.png`;

  const imagePreview = (
    <img
      src={imageSrc}
      alt={deity.deityName}
      style={{
        maxWidth: 300,
        maxHeight: 300,
        display: "block"
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
          overlayInnerStyle={{ padding: 0 }}
        >
          <Avatar
            size={64}
            src={imageSrc}
            style={{ cursor: "zoom-in" }}
          />
        </Popover>

        <div>
          <Text strong>{deity.deityName}</Text>
          <div style={{ color: "#999" }}>{deity.deityDomains}</div>
        </div>
      </Space>

      <div style={{ marginTop: 8 }}>{deity.deityText}</div>
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