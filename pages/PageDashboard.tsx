import { Card, Empty, Layout } from "antd";
import GetCrumbs from "@/components/NavigationCrumb";

const { Header, Content, Footer } = Layout;

export default function Dashboard() {
  let aud = new Audio("/ost.mp3");
  return (
    <Layout>
      <Header style={{ padding: "0px" }} />
      <Content id="PageContent" style={{ margin: "0 16px" }}>
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
        <a
          target="_blank"
          href="https://ozgurozbek.github.io/dnd/min_images/npcawards.webp"
          onClick={() => aud.play()}
        >
          {" "}
          ?{" "}
        </a>
      </Footer>
    </Layout>
  );
}
