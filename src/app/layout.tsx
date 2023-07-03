import "App/globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

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
        <Script src="https://mozilla.github.io/pdf.js/build/pdf.js"></Script>
        <Script src="https://booksjs.github.io/books/js/books.min.js"></Script>
        <link
          rel="stylesheet"
          href="https://booksjs.github.io/books/css/booksjs.css"
        ></link>
      </head>
      <body className={"text-white " + inter.className}>{children}</body>
    </html>
  );
}
