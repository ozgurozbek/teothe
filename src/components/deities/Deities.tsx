import { Typography, Avatar, Tooltip, Space, Divider, Card } from "antd";

const { Title } = Typography;

/**
 * Returns a domain image based on domain name.
 * @generator
 * @param name
 * @returns Tooltip(antd) > Avatar(antd)
 */
function GetDomainObject(name: string) {
  switch (name) {
    case "War":
      return (
        <Tooltip placement="left" color={"#630436"} title={"War"}>
          {" "}
          <Avatar
            // title="War"
            size={{ xs: 48, sm: 48, md: 48, lg: 60, xl: 60, xxl: 60 }}
            src={"./Icons/Domains/war.png"}
            alt={""}
            draggable={false}
            shape="square"
          />
        </Tooltip>
      );
    case "Nature":
      return (
        <Tooltip placement="left" color={"#630436"} title={"Nature"}>
          {" "}
          <Avatar
            // title="Nature"
            size={{ xs: 48, sm: 48, md: 48, lg: 60, xl: 60, xxl: 60 }}
            src={"./Icons/Domains/nature.png"}
            alt={""}
            draggable={false}
            shape="square"
          />
        </Tooltip>
      );
    case "Trickery":
      return (
        <Tooltip placement="left" color={"#630436"} title={"Trickery"}>
          {" "}
          <Avatar
            // title="Trickery"
            size={{ xs: 48, sm: 48, md: 48, lg: 60, xl: 60, xxl: 60 }}
            src={"./Icons/Domains/trickery.png"}
            alt={""}
            draggable={false}
            shape="square"
          />
        </Tooltip>
      );
    case "Fundamental":
      return (
        <Tooltip placement="left" color={"#630436"} title={"Fundamental"}>
          {" "}
          <Avatar
            // title="Fundamental"
            size={{ xs: 48, sm: 48, md: 48, lg: 60, xl: 60, xxl: 60 }}
            src={"./Icons/Domains/fundamental.png"}
            alt={""}
            draggable={false}
            shape="square"
          />
        </Tooltip>
      );
    case "Knowledge":
      return (
        <Tooltip placement="left" color={"#630436"} title={"Knowledge"}>
          {" "}
          <Avatar
            // title="Knowledge"
            size={{ xs: 48, sm: 48, md: 48, lg: 60, xl: 60, xxl: 60 }}
            src={"./Icons/Domains/knowledge.png"}
            alt={""}
            draggable={false}
            shape="square"
          />
        </Tooltip>
      );
    case "Tempest":
      return (
        <Tooltip placement="left" color={"#630436"} title={"Tempest"}>
          {" "}
          <Avatar
            // title="Tempest"
            size={{ xs: 48, sm: 48, md: 48, lg: 60, xl: 60, xxl: 60 }}
            src={"./Icons/Domains/tempest.png"}
            alt={""}
            draggable={false}
            shape="square"
          />
        </Tooltip>
      );
    case "Life":
      return (
        <Tooltip placement="left" color={"#630436"} title={"Life"}>
          {" "}
          <Avatar
            // title="Life"
            size={{ xs: 48, sm: 48, md: 48, lg: 60, xl: 60, xxl: 60 }}
            src={"./Icons/Domains/life.png"}
            alt={""}
            draggable={false}
            shape="square"
          />
        </Tooltip>
      );
    case "Light":
      return (
        <Tooltip placement="left" color={"#630436"} title={"Light"}>
          {" "}
          <Avatar
            // title="Light"
            size={{ xs: 48, sm: 48, md: 48, lg: 60, xl: 60, xxl: 60 }}
            src={"./Icons/Domains/light.png"}
            alt={""}
            draggable={false}
            shape="square"
          />
        </Tooltip>
      );
    case "Death":
      return (
        <Tooltip placement="left" color={"#630436"} title={"Death"}>
          {" "}
          <Avatar
            // title="Death"
            size={{ xs: 48, sm: 48, md: 48, lg: 60, xl: 60, xxl: 60 }}
            src={"./Icons/Domains/death.png"}
            alt={""}
            draggable={false}
            shape="square"
          />
        </Tooltip>
      );
    default:
      return "Error";
  }
}

/**
 * Splits multiple domains by ", " and pushes a GetDomainObject image into an array. Used for deities, some can have multiple domains.
 * @generator
 * @param data
 * @returns array
 */
function GetDomains(data: string) {
  let splitData = data.split(", ");
  let result = [];
  for (let i = 0; i < splitData.length; i++) {
    result.push(GetDomainObject(splitData[i]));
  }
  return result;
}

/**
 * Creates the inline deity entry on Deities page.
 * @tutorial
 * @param imageSrc
 * @param descriptionProps
 * @returns div
 */
export default function Deity({
  imageSrc,
  descriptionProps,
}: {
  imageSrc: string;
  descriptionProps: { title: string; body: string; domain: string };
}) {
  return (
    <div className="h-full p-2">
      <Card className="w-full h-full relative pb-16">
        {" "}
        {/* Add `relative` and padding-bottom */}
        <Space size="small" className="mb-2">
          <Avatar
            size={{ xs: 64, sm: 64, md: 64, lg: 80, xl: 100, xxl: 120 }}
            src={imageSrc}
            alt={descriptionProps.title}
            draggable={false}
            onClick={() => window.open(imageSrc, "_blank")}
            className="cursor-pointer"
          />
          <Title level={3}>{descriptionProps.title}</Title>
        </Space>
        <p>{descriptionProps.body}</p>
        <div className="absolute bottom-0 my-4">
          {GetDomains(descriptionProps.domain)}
        </div>
      </Card>
    </div>
  );
}
