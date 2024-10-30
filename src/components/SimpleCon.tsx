import { Typography, Image } from "antd";

const { Title } = Typography;

/**
 * For basic static text or image content. Images are full-width.
 * @tutorial
 * @param contentProps
 * @returns Title, if Image(antd), if text
 */
export default function SimpleContent({
  contentProps,
}: {
  contentProps: {
    image?: { src: string; alt: string };
    title: string;
    level?: 1 | 2 | 3 | 4 | 5 | undefined;
    text?: string[];
  };
}) {
  let textData = [];
  if (contentProps.text) {
    for (let i = 0; i < contentProps.text.length; i++) {
      textData.push(
        <p key={i} className="mb-2">
          {contentProps.text[i]}
        </p>
      );
    }
  }

  return (
    <section>
      <Title data-testid="simplecon-title" level={contentProps.level} id={contentProps.title.replaceAll(" ", "-").toLowerCase()}>
        {contentProps.title}
    </Title>
      {contentProps.image?.src && (
        <Image
          rootClassName="w-full"
          className="rounded-xl w-full"
          src={contentProps.image.src}
          alt={contentProps.image.alt}
        />
      )}
      <div data-testid="simplecon-paragraph">{contentProps.text && textData}</div>
    </section>
  );
}
