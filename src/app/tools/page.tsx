"use client";

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
 * Function to fetch and display player tool data from the API.
 * @generator
 * @returns The table displaying information about player tools.
 */
function GetTableData() {
  /**
   * Fetcher function for API requests.
   * @param args - RequestInfo object containing information about the request.
   * @returns Promise resolving to the parsed JSON response.
   */
  const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://gi5vwiheg0.execute-api.eu-central-1.amazonaws.com/Stage/getTools",
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
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
    }
  );

  let dataSource = [];
  for (let rowData of data) {
    let item: any = {};
    item["tool"] = rowData.tool;
    item["proficiency"] = rowData.proficiency;
    item["allows"] = rowData.allows;
    item["cost"] = rowData.cost;
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
        scroll={{ x: 1200 }}
      />
    </>
  );
}

/**
 * Component for the tools page, displaying breadcrumbs and a card containing table data.
 * @returns The tools page section with breadcrumbs and table data.
 */
export default function ToolsPage() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Tools"} />
      <Card bordered={false} className="w-full">
        {GetTableData()}
      </Card>
    </section>
  );
}
