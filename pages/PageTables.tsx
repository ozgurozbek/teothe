import { Button, Card, Divider, Empty, Space } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import useSWR from "swr";
import { Table } from "antd";

import { useState } from "react";
import SimpleContent from "@/components/SimpleCon";

function GetTableData() {
  const [curTable, setCurTable] = useState("resurrection");
  const [displayEmpty, setDisplayEmpty] = useState(true);
  let query = curTable;

  function TablesNavigator() {
    return (
      <>
        <Space wrap>
          <Button
            onClick={() => {
              setDisplayEmpty(false);
              setCurTable("material");
            }}
          >
            Material Variants
          </Button>
          <Button
            onClick={() => {
              setDisplayEmpty(false);
              setCurTable("calendar");
            }}
          >
            Calendar
          </Button>
          <Button
            onClick={() => {
              setDisplayEmpty(false);
              setCurTable("alchemy");
            }}
          >
            Alchemy
          </Button>
          <Button
            onClick={() => {
              setDisplayEmpty(false);
              setCurTable("resurrection");
            }}
          >
            Resurrection
          </Button>
          <Button
            onClick={() => {
              setDisplayEmpty(false);
              setCurTable("enhancements");
            }}
          >
            Enhancements
          </Button>
          <Button
            onClick={() => {
              setDisplayEmpty(false);
              setCurTable("runes");
            }}
          >
            Runes
          </Button>
          <Button
            onClick={() => {
              setDisplayEmpty(false);
              setCurTable("adultry");
            }}
          >
            Adultry
          </Button>
          <Button
            onClick={() => {
              setDisplayEmpty(false);
              setCurTable("cooking");
            }}
          >
            Cooking
          </Button>
        </Space>
      </>
    );
  }

  const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR(
    "http://localhost:5000/getTables?tab=" + query,
    fetcher
  );
  if (error) {
    console.log(error);
    return <div>Failed to access API</div>;
  }
  if (!data) return <div>Loading...</div>;

  if (displayEmpty) {
    return (
      <>
        <TablesNavigator />
        <Divider />
        <Empty />
      </>
    );
  }

  function titleCase(text: string) {
    return text
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
      .join(" ");
  }

  //dataSource, columns
  let columns = [];
  for (let i = 0; i < data[0].length; i++) {
    columns.push({
      title: titleCase(data[0][i]),
      dataIndex: data[0][i],
      key: data[0][i],
    });
  }

  let dataSource = [];
  for (let rowData of data[1]) {
    let item: any = {};
    for (let i = 0; i < columns.length; i++) {
      item[columns[i].dataIndex] = rowData[i];
    }
    dataSource.push(item);
  }
  return (
    <>
      <TablesNavigator />
      <Divider />
      <SimpleContent
        contentProps={{
          title: titleCase(query),
          text: [data[2]],
        }}
      />
      <Table
        className="mt-4"
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      />
    </>
  );
}

export default function TablesPage() {
  return (
    <section>
      <GetCrumbs path={"Teothe3K,Tables"} />
      <Card bordered={false} className="w-full">
        {GetTableData()}
      </Card>
    </section>
  );
}
