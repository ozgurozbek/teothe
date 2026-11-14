import { Avatar, Popover, Space } from "antd";
import Text from "antd/es/typography/Text";
import type { ReactNode } from "react";

export interface EntityPopoverProps {
  triggerLabel: string;
  title: string;
  imageSrc?: string;
  subtitle?: ReactNode;
  description?: ReactNode;
  quote?: string;
}

export default function EntityPopover({
  triggerLabel,
  title,
  imageSrc,
  subtitle,
  description,
  quote,
}: EntityPopoverProps) {
  const imagePreview = imageSrc ? (
    <img
      src={imageSrc}
      alt={title}
      style={{
        maxWidth: 300,
        maxHeight: 300,
        display: "block",
      }}
    />
  ) : null;

  const content = (
    <div style={{ maxWidth: 340 }}>
      <Space align="start">
        {imageSrc && (
          <Popover
            content={imagePreview}
            trigger="hover"
            placement="right"
            styles={{ container: { padding: 0 } }}
          >
            <Avatar
              size={64}
              src={imageSrc}
              style={{ cursor: "zoom-in" }}
            />
          </Popover>
        )}

        <div>
          <Text strong>{title}</Text>
          {subtitle && <div style={{ color: "#999" }}>{subtitle}</div>}
        </div>
      </Space>

      {description && <div style={{ marginTop: 8 }}>{description}</div>}

      {quote && (
        <div
          style={{
            marginTop: 8,
            color: "#999",
            fontStyle: "italic",
          }}
        >
          "{quote}"
        </div>
      )}
    </div>
  );

  return (
    <Popover
      content={content}
      trigger={["hover", "click"]}
      placement="top"
    >
      <span style={{ textDecoration: "underline", cursor: "pointer" }}>
        {triggerLabel}
      </span>
    </Popover>
  );
}