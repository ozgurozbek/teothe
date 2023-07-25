import { Card, Empty, Layout } from "antd";
import GetCrumbs from "@/components/NavigationCrumb";

import { CaretUpOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

export default function Dashboard() {
  function goUp() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <Layout>
      <Header style={{ padding: "0px" }} />
      <Content id="PageContent" style={{ margin: "0 16px", backgroundImage: 'url("/background.png")', backgroundRepeat: "no-repeat", backgroundPosition: "center",  backgroundSize: "contain" }}>
        <GetCrumbs path="Teothe3K" />
        <Card bordered={false} className="w-full">
          <Empty />
        </Card>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Teothe, its information, its documents and the TTRPG content is provided
        under the{" "}
        <a
          target="_blank"
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode"
        >
          CC BY-NC-SA License{" "}
        </a>
        and protected by the{" "}
        <a
          target="_blank"
          href="https://ozgurozbek.github.io/dnd/SRD-OGL_V5.1.pdf"
        >
          Wizards OGL{" "}
        </a>
        and{" "}
        <a
          target="_blank"
          href="https://ozgurozbek.github.io/dnd/SRD5.1-CCBY4.0_License_live%20links.pdf"
        >
          Wizards CC BY
        </a>
        .Further attributions can be found on the{" "}
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
        . 2016-2023.
      </Footer>
      <div
        className="w-12 h-12 rounded-full bg-[#630436] hover:bg-[#30011a] fixed bottom-4 right-4 transition-all text-center text-4xl"
        onClick={goUp}
      >
        <CaretUpOutlined />
      </div>
    </Layout>
  );
}
