import "App/globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Teothe3K",
  description: "A Material Plane for TTRPG Systems",
};

/**
 * returns the main html page as layout. Imports external JS and CSS libraries. Provides html head tags.
 * @param children 
 * @returns html
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#630436" />
        <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
        <Script src="https://mozilla.github.io/pdf.js/build/pdf.js"></Script>
        <Script src="https://booksjs.github.io/books/js/books.min.js"></Script>
        <link
          rel="stylesheet"
          href="https://booksjs.github.io/books/css/booksjs.css"
        ></link>
        <link rel="manifest" href="./manifest.json" />
        <link rel="apple-touch-icon" href="/dragon.png" />
      </head>
      <body className={"text-white " + inter.className}>{children}</body>
    </html>
  );
}
