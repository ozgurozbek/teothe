import { Typography } from "antd";

const { Title } = Typography;

export default function SimpleContent({
  contentProps,
}: {
  contentProps: {
    image?: { src: string; alt: string };
    title: string;
    text: string[];
  };
}) {
  let imgData;
  if (contentProps.image) {
  }

  let textData = [];
  for (let i = 0; i < contentProps.text.length; i++) {
    textData.push(<p className="mb-2">{contentProps.text[i]}</p>);
  }

  return (
    <section>
      <Title>{contentProps.title}</Title>
      {contentProps.image?.src && (
        <img
          className="my-4 rounded-lg"
          src={contentProps.image.src}
          alt={contentProps.image.alt}
        />
      )}
      {textData}
    </section>
  );
}
