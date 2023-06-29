import { Typography, Avatar, Image } from "antd";
import {
  CrownTwoTone, // Fundamental
  BookTwoTone, //Knowledge
  HeartTwoTone, //Life
  FireTwoTone, //Light
  UsbTwoTone, //Death
  TrophyTwoTone, // Tempest
  EyeInvisibleTwoTone, // Trickery
  PictureTwoTone, // Nature
  FlagTwoTone, // War
} from "@ant-design/icons";

const { Title } = Typography;

function GetDomainObject(name: string) {
  switch (name) {
    case "War":
      return (
        <FlagTwoTone
          title="War"
          className="py-2 text-2xl"
          twoToneColor="#eb2f00"
        />
      );
    case "Nature":
      return (
        <PictureTwoTone
          title="Nature"
          className="py-2 text-2xl"
          twoToneColor="#eb0096"
        />
      );
    case "Trickery":
      return (
        <EyeInvisibleTwoTone
          title="Trickery"
          className="py-2 text-2xl"
          twoToneColor="#0b2f96"
        />
      );
    case "Fundamental":
      return (
        <CrownTwoTone
          title="Fundamental"
          className="py-2 text-2xl"
          twoToneColor="#333333"
        />
      );
    case "Knowledge":
      return (
        <BookTwoTone
          title="Knowledge"
          className="py-2 text-2xl"
          twoToneColor="#bb362f"
        />
      );
    case "Tempest":
      return (
        <TrophyTwoTone
          title="Tempest"
          className="py-2 text-2xl"
          twoToneColor="#aaaa00"
        />
      );
    case "Life":
      return (
        <HeartTwoTone
          title="Life"
          className="py-2 text-2xl"
          twoToneColor="#eb2f96"
        />
      );
    case "Light":
      return (
        <FireTwoTone
          title="Light"
          className="py-2 text-2xl"
          twoToneColor="#eb2f42"
        />
      );
    case "Death":
      return (
        <UsbTwoTone
          title="Death"
          className="py-2 text-2xl"
          twoToneColor="#424242"
        />
      );
    default:
      return "Error";
  }
}

function GetDomains(data: string) {
  let splitData = data.split(", ");
  let result = [];
  for (let i = 0; i < splitData.length; i++) {
    result.push(GetDomainObject(splitData[i]));
  }
  return result;
}

export default function Deity({
  imageSrc,
  descriptionProps,
}: {
  imageSrc: string;
  descriptionProps: { title: string; body: string; domain: string };
}) {
  return (
    <div className="inline-flex w-full py-4">
      <Avatar
        size={{ xs: 24, sm: 40, md: 64, lg: 80, xl: 100, xxl: 120 }}
        src={imageSrc}
        alt={descriptionProps.title}
        draggable={false}
        onClick={() => window.open(imageSrc, "_blank")}
      />
      <div className="px-4 w-[90%]">
        <Title>{descriptionProps.title}</Title>
        <p>{descriptionProps.body}</p>
      </div>
      <i className="px-4 w-[5%]">{GetDomains(descriptionProps.domain)}</i>
    </div>
  );
}
