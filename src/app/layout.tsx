import "App/globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import RootLayoutProvider from "./layoutProvider";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

// This gets overridden by the metadata on pages but is the default
export const metadata: Metadata = {
  title: {
    template: "Teothe | %s",
    default: "Teothe",
  },
  description:
    "Dive into Teothe, a rich 5th Edition Dungeons & Dragons campaign setting offering endless adventures on the Material Plane. Discover its lore, creatures, and mysteries.",
};

/**
 * Root layout component that sets up the basic HTML structure with meta tags, links, and scripts.
 * @param children - The content to be rendered inside the layout.
 * @returns The HTML structure for the root layout.
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
        <RootLayoutProvider>{children}</RootLayoutProvider>
      </body>
      <Script id="opacity-script">
        document.getElementById(&quot;layout-body&quot;).classList.remove(&quot;opacity-0&quot;);
      </Script>
    </html>
  );
}
