import { Popover, Avatar, Space } from "antd";
import species from "@/jsons/species/species.json";
import Text from "antd/es/typography/Text";

export interface SpeciesType {
  id: string;
  image: string;
  content: string;
  quote: string;
}

function getSpeciesById(id: string): SpeciesType | null {
  if (!id) return null;

  return species.find((s) => s.id === id) ?? null;
}

function formatName(name: string) {
  return name
    .replaceAll("_", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function SpeciesPopover({ id }: { id: string }) {
  const entry = getSpeciesById(id);

  if (!entry) {
    return <span>{formatName(id)}</span>;
  }

  const displayName = formatName(entry.id);

  const imageSrc = entry.image
    ? `/Species/${entry.image}`
    : `/Species/${entry.id}.png`;

  const imagePreview = (
    <img
      src={imageSrc}
      alt={displayName}
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
            container: {
              padding: 0,
            },
          }}
        >
          <Avatar
            size={64}
            src={imageSrc}
            style={{
              cursor: "zoom-in",
            }}
          />
        </Popover>

        <div>
          <Text strong>{displayName}</Text>
        </div>
      </Space>

      <div style={{ marginTop: 8 }}>{entry.content}</div>

      {entry.quote && (
        <div
          style={{
            marginTop: 8,
            color: "#999",
            fontStyle: "italic",
          }}
        >
          "{entry.quote}"
        </div>
      )}
    </div>
  );

  return (
    <Popover content={content} trigger={["hover", "click"]} placement="top">
      <span
        style={{
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        {displayName}
      </span>
    </Popover>
  );
}
