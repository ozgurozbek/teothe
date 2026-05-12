import { Typography, Image, Tooltip, Space, Card } from "antd";
import { useState } from "react";

const { Title } = Typography;

const domainIcons: Record<string, string> = {
  War: "war",
  Nature: "nature",
  Trickery: "trickery",
  Fundamental: "fundamental",
  Knowledge: "knowledge",
  Tempest: "tempest",
  Life: "life",
  Light: "light",
  Death: "death",
};

/**
 * Returns a domain image based on domain name.
 */
function GetDomainObject(name: keyof typeof domainIcons) {
  return (
    <Tooltip placement="left" color="#630436" title={name} key={name}>
      <Image
        src={`./Icons/Domains/${domainIcons[name]}.png`}
        alt={name}
        width={48}
        height={48}
        preview={false}
        style={{
          borderRadius: 6,
          objectFit: "cover",
        }}
      />
    </Tooltip>
  );
}

/**
 * Splits multiple domains by ", " and returns domain icons.
 */
function GetDomains(data: string) {
  return data
    .split(", ")
    .map((d) => GetDomainObject(d as keyof typeof domainIcons));
}

/**
 * Deity card component
 */
export default function Deity({
  imageSrc,
  descriptionProps,
}: {
  imageSrc: string;
  descriptionProps: { title: string; body: string; domain: string };
}) {
  const [previewOpen, setPreviewOpen] = useState(false);

  const img = encodeURI(imageSrc);

  return (
    <div className="h-full p-2">
      <Card className="w-full h-full relative pb-16 overflow-hidden">
        {/* Background image layer */}
        <div
          className="absolute inset-0 cursor-pointer"
          onClick={() => setPreviewOpen(true)}
          style={{
            backgroundImage: `
              linear-gradient(
                to top left,
                rgba(24, 28, 36, 0.15) 0%,
                rgba(24, 28, 36, 0.65) 40%,
                rgba(24, 28, 36, 0.92) 70%,
                rgba(24, 28, 36, 1) 100%
              ),
              url("${img}")
            `,
            backgroundSize: "cover",
            backgroundPosition: "bottom right",
            backgroundRepeat: "no-repeat",
            opacity: 0.45,
          }}
        />

        {/* Content */}
        <div className="relative">
          <Space size="small" className="mb-2">
            <Image
              src={img}
              alt={descriptionProps.title}
              width={80}
              height={80}
              preview={{
                mask: false,
              }}
              style={{
                borderRadius: 8,
                objectFit: "cover",
                cursor: "pointer",
              }}
              onClick={() => setPreviewOpen(true)}
            />

            <Title level={3}>{descriptionProps.title}</Title>
          </Space>

          <p>{descriptionProps.body}</p>
        </div>

        {/* Domains */}
        <div className="absolute bottom-0 my-4 flex gap-2">
          {GetDomains(descriptionProps.domain)}
        </div>
      </Card>
    </div>
  );
}
