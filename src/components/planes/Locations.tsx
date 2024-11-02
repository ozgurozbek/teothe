import { Typography } from "antd";

const { Title } = Typography;

/**
 * Generates plane information using plane name and text. Plane name is centered.
 * @param imageSrc
 * @param locationProps
 * @returns div
 */
export default function Location({
  imageSrc,
  locationProps,
}: {
  imageSrc: string;
  locationProps: { name: string; description: string };
}) {
  return (
    <div className="inline-flex xl:w-1/2 lg:w-1/2 md:w-full sm:w-full xs:w-full relative group">
      <div
        className="pt-40 text-center w-full min-h-[60vh]"
        style={{
          color: "white",
          textShadow: "0 0 8px #000000",
          backgroundImage: "url('" + imageSrc + "')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      <div className="absolute inset-0 bg-slate-900 opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
        <Title
          className="drop-shadow-[0_0_4px_rgba(0,0,0,1)]"
          style={{ color: "white" }}
        >
          {locationProps.name}
        </Title>
        <p className="px-24 drop-shadow-[0_0_4px_rgb(0,0,0)] md:pb-4 sm:pb-4 xs:pb-4">
          {locationProps.description}
        </p>
      </div>
    </div>
  );
}
