import { Button } from "antd";

/**
 * Includes the imported JS library on main page.tsx to this component
 * @see https://github.com/booksjs/books/pull/2
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
      className="m-1 w-72 block mx-auto sm:inline-block sm:w-auto"
      onClick={() => {
        booksjsLib(bookProps.url).loadDocument();
      }}
    >
      <p className="truncate">{bookProps.name}</p>
    </Button>
  );
}
