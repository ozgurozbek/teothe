import { Typography, Image } from "antd";

const { Title } = Typography;

export default function Location({
  imageSrc,
  locationProps,
}: {
  imageSrc: string;
  locationProps: { name: string; description: string };
}) {
  return (
    <div className="inline-flex w-full py-4 ">
      <Title>{locationProps.name}</Title>
      <p>{locationProps.description}</p>
      <Image src={imageSrc} alt={imageSrc} />
    </div>
  );
}
// bg-[url('../public/Planes/{imageSrc}.png')]       bg-[src('../public/Planes/{imageSrc}.png')]
// Image in return is temporary, should be like the comment on ^this line
