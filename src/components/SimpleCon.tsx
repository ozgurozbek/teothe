import { Typography, Image } from "antd";
import { LinkOutlined } from "@ant-design/icons";

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
      <Title id={contentProps.title.replaceAll(" ", "-").toLowerCase()}>
        {contentProps.title}{" "}
        <LinkOutlined className="cursor-pointer hover:text-white text-[#630436] hover:underline transition" onClick={()=>{navigator.clipboard.writeText(window.location.href.split("#")[0]+"#"+contentProps.title.replaceAll(" ", "-").toLowerCase())}} />
      </Title>
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
