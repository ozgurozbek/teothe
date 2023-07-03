import "App/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Teothe3K",
  description: "A Material Plane for TTRPG Systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://mozilla.github.io/pdf.js/build/pdf.js"></script>
        <script src="https://booksjs.github.io/books/js/books.min.js"></script>
        <link
          rel="stylesheet"
          href="https://booksjs.github.io/books/css/booksjs.css"
        ></link>
      </head>
      <body className={"text-white " + inter.className}>{children}</body>
    </html>
  );
}
