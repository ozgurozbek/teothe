import { Typography } from "antd";

const { Title } = Typography;

export default function Location({
  imageSrc,
  locationProps,
}: {
  imageSrc: string;
  locationProps: { name: string; description: string };
}) {
  return (
    <div className="inline-flex xl:w-1/2 lg:w-1/2 md:w-full sm:w-full xs:w-full">
      <div
        className="pt-40 text-center w-full min-h-[60vh] "
        style={{
          color: "white",
          textShadow: "0 0 8px #000000",
          backgroundImage: "url('" + imageSrc + "')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Title
          className="drop-shadow-[0_0.4px_0.4px_rgba(0,0,0,1)]"
          style={{ color: "white" }}
        >
          {locationProps.name}
        </Title>
        <p className="px-24 drop-shadow-[0_0.4px_0.4px_rgba(0,0,0,1)] md:pb-4 sm:pb-4 xs:pb-4">
          {locationProps.description}
        </p>
      </div>
    </div>
  );
}
