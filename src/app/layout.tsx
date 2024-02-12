import "App/globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Teothe3K - A 5E Campaign Setting",
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
      <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/PWA/icon-192-192.png"
        />
        <meta name="theme-color" content="#630436" />
        <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
        <Script src="https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js"></Script>
        <Script src="https://booksjs.github.io/books/js/books.min.js"></Script>
        <link
          rel="stylesheet"
          href="https://booksjs.github.io/books/css/booksjs.css"
        ></link>
        <link rel="apple-touch-icon" href="/dragon.png" />
      </head>
      <body
        id="layout-body"
        className={"opacity-0 text-white " + inter.className}
      >
        {children}
      </body>
      <Script id="opacity-script">
        document.getElementById(&quot;layout-body&quot;).classList.remove(&quot;opacity-0&quot;);
      </Script>
    </html>
  );
}
