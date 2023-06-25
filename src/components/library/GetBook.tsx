import { EmbedPDF } from "@simplepdf/react-embed-pdf";
import { Button } from "antd";

export default function GetBook({
  bookProps,
}: {
  bookProps: { url: string; name: string };
}) {
  return (
    <EmbedPDF>
      <Button href={bookProps.url}>{bookProps.name}</Button>
    </EmbedPDF>
  );
}
