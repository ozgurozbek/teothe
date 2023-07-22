import { Button } from "antd";
/**
 * Includes the imported JS library on main page.tsx to this component
 * @param url
 */
declare function booksjsLib(url: string): any;

/**
 * Uses booksjsLib and Mozilla PDF to render an interactive pdf like a book.
 * @param bookProps
 * @returns Button(antd)
 */
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
