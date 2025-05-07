import { Button, Card, Col, Image } from "antd";

/**
 * Generates book preview component
 * @see https://www.figma.com/proto/R8gs41YADmA01ZNXFfPUmJ/Teothe?node-id=168-462
 * @param url
 */
export default function GetBook({
  bookProps,
}: {
  bookProps: { name: string; author?: string; image?: string; url: string};
}) {
  bookProps.author = bookProps.author ? bookProps.author : "Unknown";
  bookProps.image = bookProps.image ? bookProps.image : "/Books/undefined.png";
  return (
    <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4} className="p-2">
      <a style={{textDecoration: "none", color: "inherit"}} href={bookProps.url} target="_blank"> {/* Ignore the cheesy implementation, no idea how to make it accessible otherwise */}
        <section className="p-2 h-full hover:bg-opacity-20 hover:bg-white">
          <div style={{backgroundImage: `url(${bookProps.image})`}} className="w-full h-[20rem] bg-cover bg-center">
            <div className="w-full h-full bg-gradient-to-b from-slate-800 p-4">
              <p className="font-semibold break-words">{bookProps.name}</p>
              <p><i>{bookProps.author}</i></p>
            </div>
          </div>
          <p className="text-center font-semibold break-words">{bookProps.name}</p>
          <p className="text-center"><i>{bookProps.author}</i></p>
        </section>
      </a>
    </Col>
  );
}
