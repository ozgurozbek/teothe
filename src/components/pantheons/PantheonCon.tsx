import { useState } from "react";
import { Typography, Col, Button, Divider } from "antd";

const { Title } = Typography;

type PantheonData = {
  id: string;
  name: string;
  description: string[];
  species: string[];
  deities: {
    id: string;
    image?: string;
  }[];
};

export default function PantheonCon({
  PantheonData,
}: {
  PantheonData: PantheonData;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  const images = [
    {
      src: PantheonData.deities[0].image
        ? `./Deities/${PantheonData.deities[0].image}`
        : `./Deities/${PantheonData.deities[0].id}.png`,
      alt: `${PantheonData.deities[0].id} deity`,
    },
    {
      src: `./Pantheons/${PantheonData.id}.png`,
      alt: `${PantheonData.name} pantheon`,
    },
    {
      src: `./Species/${PantheonData.species[0]}.png`,
      alt: `${PantheonData.species[0]} species`,
    },
  ];

  // Section proportions.
  const shares =
    hovered === null
      ? [1 / 3, 1 / 3, 1 / 3]
      : images.map((_, index) => (index === hovered ? 0.7 : 0.15));

  const firstBoundary = shares[0] * 100;
  const secondBoundary = (shares[0] + shares[1]) * 100;

  // Diagonal inclination.
  const angle = 5;

  const clips = [
    `polygon(
      0% 0%,
      ${firstBoundary}% 0%,
      ${firstBoundary - angle}% 100%,
      0% 100%
    )`,
    `polygon(
      ${firstBoundary}% 0%,
      ${secondBoundary}% 0%,
      ${secondBoundary - angle}% 100%,
      ${firstBoundary - angle}% 100%
    )`,
    `polygon(
      ${secondBoundary}% 0%,
      100% 0%,
      100% 100%,
      ${secondBoundary - angle}% 100%
    )`,
  ];

  const boundaries = [0, firstBoundary, secondBoundary, 100];

  // Overscan allows the outer images to slide without exposing gaps.
  const overscan = 10;

  return (
    <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={6} className="p-2">
      <Col span={24} className="h-full flex flex-col">
        {/* Diagonal image display */}
        <div
          onMouseLeave={() => setHovered(null)}
          style={{
            position: "relative",
            width: "100%",
            height: "70vh",
            minHeight: 280,
            maxHeight: 500,
            overflow: "hidden",
            background: "#1a1a1a",
          }}
        >
          {images.map((image, index) => {
            const start = boundaries[index];
            const end = boundaries[index + 1];
            const width = end - start;

            // Move the outer images away from the centre.
            const outwardShift =
              hovered !== null ? (index === 0 ? -4 : index === 2 ? 4 : 0) : 0;

            return (
              <div
                key={image.src}
                onMouseEnter={() => setHovered(index)}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  clipPath: clips[index],
                  transition: "clip-path 500ms ease",
                  cursor: "pointer",
                  zIndex: hovered === index ? 2 : 1,
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: `${start - overscan + outwardShift}%`,
                    width: `${width + overscan * 2}%`,
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                    objectPosition: "center",
                    transition: "left 500ms ease, width 500ms ease",
                  }}
                />
              </div>
            );
          })}
        </div>

        <Title className="capitalize">{PantheonData.name}</Title>

        {PantheonData.description.map((text) => (
          <p key={text}>{text}</p>
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
