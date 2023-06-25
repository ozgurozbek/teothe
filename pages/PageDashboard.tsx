import { Card, Empty, Layout } from "antd";
import GetCrumbs from "@/components/NavigationCrumb";

const { Header, Content, Footer } = Layout;

export default function Dashboard() {
  return (
    <Layout>
      <Header style={{ padding: "0px" }} />
      <Content id="PageContent" style={{ margin: "0 16px" }}>
        <GetCrumbs path="Teothe3K" />
        <Card bordered={false} className="w-full">
          <Empty />
        </Card>
      </Content>
      <Footer style={{ textAlign: "center" }}>God Damn</Footer>
    </Layout>
  );
}
