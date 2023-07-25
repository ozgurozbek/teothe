import { Avatar, Tooltip } from "antd";

/**
 * Generates map resources entries with icons and tooltip.
 * @tutorial
 * @param imageSrc 
 * @param textProps 
 * @returns div
 */
export default function MapEntry({
  imageSrc,
  textProps,
}: {
  imageSrc: string;
  textProps: { name: string; rarity: string; check: string };
}) {
  let tooltipEle = (
    <span>
      {textProps.name} (<i>{textProps.rarity}</i>)<br />
      {textProps.check}
    </span>
  );

  return (
    <div className="inline-flex py-4 w-[10%]">
      <Tooltip title={tooltipEle} color={"#630436"}>
        <Avatar
          size={{ xs: 24, sm: 32, md: 48, lg: 64, xl: 72, xxl: 100 }}
          src={imageSrc}
          alt={textProps.name}
          draggable={false}
          shape="square"
        />
      </Tooltip>
    </div>
  );
}
