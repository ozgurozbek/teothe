import { Typography, Image, Tooltip, Space, Card, Divider } from "antd";
import { useState } from "react";
import DeityPopover from "@/components/deities/DeityPopover";
import { AlignmentRadar } from "../AlignmentChart";

const alignmentData: Record<
  string,
  Record<string, number>
> = require("../../jsons/factions/alignment.json");

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
  const [previewOpen, setPreviewOpen] = useState(false);
  const [typePreviewOpen, setTypePreviewOpen] = useState(false);

  const names = [
    "Good",
    "Civil",
    "Active",
    "Lawful",
    "Pragmatic",
    "Reformist",
    "Evil",
    "Wild",
    "Reactive",
    "Chaotic",
    "Precise",
    "Traditional",
  ];

  const defaultValues = Array(12).fill(0);

  const key = descriptionProps.factionName;
  const mapped = alignmentData[key] as Record<string, number> | undefined;

  const values = mapped
    ? [
        mapped.good ?? 0,
        mapped.civil ?? 0,
        mapped.active ?? 0,
        mapped.lawful ?? 0,
        mapped.pragmatic ?? 0,
        mapped.reformist ?? 0,
        mapped.evil ?? 0,
        mapped.wild ?? 0,
        mapped.reactive ?? 0,
        mapped.chaotic ?? 0,
        mapped.precise ?? 0,
        mapped.traditional ?? 0,
      ]
    : defaultValues;

  const img = encodeURI(imageSrc);
  const typeImg = encodeURI(typeImageSrc);

  return (
    <div className="h-full p-2" key={descriptionProps.factionKey}>
      <Card className="w-full h-full relative pb-80">
        <Space size="small" className="mb-2">
          <Image
            src={img}
            alt={descriptionProps.factionName}
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

        {descriptionProps.factionAllies.length > 0 && (
          <p>Allies: {descriptionProps.factionAllies.join(", ")}</p>
        )}

        {descriptionProps.factionEnemies.length > 0 && (
          <p>Enemies: {descriptionProps.factionEnemies.join(", ")}</p>
        )}

        {descriptionProps.factionDeity && (
          <p>
            Deity: <DeityPopover name={descriptionProps.factionDeity} />
          </p>
        )}

        {descriptionProps.factionHQ && <p>HQ: {descriptionProps.factionHQ}</p>}

        <Divider />

        {descriptionProps.factionDetail.map((line, index) => (
          <p key={index}>{line}</p>
        ))}

        <div className="absolute bottom-20 left-0 w-full p-2">
          <AlignmentRadar names={names} values={values} />
        </div>

        <div className="absolute bottom-0 my-4">
          <Tooltip
            placement="left"
            color="#630436"
            title={descriptionProps.factionType}
          >
            <Image
              src={typeImg}
              alt={`${descriptionProps.factionType} Type Image`}
              width={60}
              height={60}
              preview={{
                mask: false,
              }}
              style={{
                borderRadius: 6,
                objectFit: "cover",
                cursor: "pointer",
              }}
              onClick={() => setTypePreviewOpen(true)}
            />
          </Tooltip>
        </div>

        <Divider />
      </Card>
    </div>
  );
}
