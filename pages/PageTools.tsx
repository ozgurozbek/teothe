import { Card, Skeleton } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import useSWR from "swr";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

import SimpleContent from "@/components/SimpleCon";

interface DataType {
  key: React.Key;
  title: string;
  dataIndex: string;
  cost: string;
}

/**
 * Fetches tool data from the backend
 * @returns SimpleContent, Table(antd): splits response JSON to tool, proficiency, allows
 */
function GetTableData() {
  const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://teothe.pythonanywhere.com/getTools",
    fetcher
  );
  if (error) {
    console.log(error);
    return <div>Failed to access API</div>;
  }
  if (!data) return <Skeleton active />;

  //dataSource, columns
  let columns: ColumnsType<DataType> = [];
  columns.push(
    {
      title: "Player Tool",
      dataIndex: "tool",
      key: "tool",
    },
    {
      title: "Proficiency Bonus",
      dataIndex: "proficiency",
      key: "proficiency",
    },
    {
      title: "Exclusive Benefits",
      dataIndex: "allows",
      key: "allows",
    },
    {
      title: "Pricing Table",
      dataIndex: "price",
      key: "price",
    }
  );

  let dataSource = [];
  for (let rowData of data) {
    let item: any = {};
    item["tool"] = rowData[0];
    item["proficiency"] = rowData[1];
    item["allows"] = rowData[2];
    item["price"] = rowData[3];
    dataSource.push(item);
  }
  return (
    <>
      <SimpleContent
        contentProps={{
          title: "Tools",
          text: [
            "This is a reference for player tools. Keep in mind that certain situations ask for different rolls, and certain prerequisities sometimes won't be met. Arguably, this table is good for referencing and ideas, but is not always true.",
          ],
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

export default function ToolsPage() {
  return (
    <section>
      <GetCrumbs path={"Teothe3K,Tools"} />
      <Card bordered={false} className="w-full">
        {GetTableData()}
      </Card>
    </section>
  );
}
