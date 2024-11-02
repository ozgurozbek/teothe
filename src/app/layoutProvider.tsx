"use client";

import { CaretUpOutlined, CopyOutlined } from "@ant-design/icons";
import { Alert, ConfigProvider, Layout, theme } from "antd";
import Navbar from "Comp/Navbar";
import { useState } from "react";

const { Header, Content, Footer } = Layout;

/**
 * Root layout provider component that sets up the overall layout structure.
 * Imports external JS and CSS libraries, provides ANTD ConfigProvider, and includes components like Header, Content, and Footer.
 * @param children - The content to be rendered inside the layout.
 * @returns The configured layout structure.
 */
export default function RootLayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [displayCopyAlert, setDisplayCopyAlert] = useState(false)

  function goUp() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(window.location.href);
    setDisplayCopyAlert(true)
  }

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          fontSize: 16, // set global font size
        },
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            padding: "0px",
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Navbar />
        </Header>
        <Content
          id="PageContent"
          style={{ margin: "1rem auto 0 auto" }}
          className="container"
        >
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Teothe, Teothe3K, their information, their documents and the TTRPG
          content is provided under the{" "}
          <a
            target="_blank"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode"
          >
            CC BY-NC-SA License{" "}
          </a>
          and protected by the{" "}
          <a target="_blank" href="./SRD-OGL_V5.1.pdf">
            Wizards OGL{" "}
          </a>
          and{" "}
          <a target="_blank" href="./SRD5.1-CCBY4.0_License_livelinks.pdf">
            Wizards CC BY
          </a>
          . Further attributions can be found on the{" "}
          <a
            target="_blank"
            href="https://ozgurozbek.github.io/dnd/img-credits.xml"
          >
            Image Credits
          </a>
          ,{" "}
          <a target="_blank" href="https://www.dndbeyond.com/">
            D&D Beyond Website
          </a>
          ,{" "}
          <a target="_blank" href="https://www.dmsguild.com/">
            DM&apos;s Guild
          </a>
          ,{" "}
          <a target="_blank" href="https://www.gmbinder.com/">
            GM Binder
          </a>
          ,{" "}
          <a target="_blank" href="https://www.dandwiki.com/wiki/">
            D&D Wiki
          </a>
          , and{" "}
          <a
            target="_blank"
            href="https://forgottenrealms.fandom.com/wiki/Main_Page"
          >
            Forgotten Realms Wiki
          </a>
          . 2016-2024.
        </Footer>
        <div
          className="w-12 h-12 rounded-full bg-[#630436] hover:bg-[#30011a] fixed bottom-4 right-4 transition-all flex items-center justify-center text-4xl"
          onClick={goUp}
        >
          <CaretUpOutlined />
        </div>
        <div
          className="w-12 h-12 rounded-full bg-[#630436] hover:bg-[#30011a] fixed bottom-20 right-4 transition-all flex items-center justify-center text-3xl"
          onClick={copyToClipboard}
        >
          <CopyOutlined />
        </div>
        {displayCopyAlert &&
        <div className="w-48 h-12 rounded-full fixed bottom-20 right-16 transition-all flex items-center justify-center text-3xl">
          <Alert message="Copied Page URL!" type="success" showIcon closable onClose={() => setDisplayCopyAlert(false)} />
        </div>}
      </Layout>
    </ConfigProvider>
  );
}
