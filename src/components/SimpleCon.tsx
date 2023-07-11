import { Typography, Image } from "antd";

const { Title } = Typography;

export default function SimpleContent({
  contentProps,
}: {
  contentProps: {
    image?: { src: string; alt: string };
    title: string;
    text?: string[];
  };
}) {
  let textData = [];
  if (contentProps.text) {
    for (let i = 0; i < contentProps.text.length; i++) {
      textData.push(<p className="mb-2">{contentProps.text[i]}</p>);
    }
  }

  return (
    <section>
      <Title>{contentProps.title}</Title>
      {contentProps.image?.src && (
        <Image
          rootClassName="w-full"
          className="rounded-xl w-full"
          src={contentProps.image.src}
          alt={contentProps.image.alt}
        />
      )}
      {contentProps.text && textData}
    </section>
  );
}
