import { Button } from "antd";
declare function booksjsLib(url: string): any;
export default function GetBook({
  bookProps,
}: {
  bookProps: { url: string; name: string };
}) {
  return (
    <Button
      className="m-1"
      onClick={() => {
        booksjsLib(bookProps.url).loadDocument();
      }}
    >
      {bookProps.name}
    </Button>
  );
}
