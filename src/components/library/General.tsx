import { Card, Space } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import GetBook from "Comp/library/GetBook";

export default function GeneralTab() {
  return (
    <>
      <GetCrumbs path={"Pages,Library"} />
      <Card bordered={false} className="w-full h-full">
        <Space wrap>
          <GetBook
            bookProps={{
              url: "https://ozgurozbek.github.io/dnd/books/TheseClovers.pdf",
              name: "TheseClovers",
            }}
          />
          <GetBook
            bookProps={{
              url: "https://ozgurozbek.github.io/dnd/books/SeraBook.pdf",
              name: "SeraBook",
            }}
          />
          <GetBook
            bookProps={{
              url: "https://ozgurozbek.github.io/dnd/books/DivineTales1.pdf",
              name: "DivineTales1",
            }}
          />
          <GetBook
            bookProps={{
              url: "https://ozgurozbek.github.io/dnd/books/AncientSummary.pdf",
              name: "AncientSummary",
            }}
          />
          <GetBook
            bookProps={{
              url: "https://ozgurozbek.github.io/dnd/books/Reform.pdf",
              name: "Reform",
            }}
          />
        </Space>
      </Card>
    </>
  );
}
