"use client"

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
 * Function to fetch and display common pricing table data.
 * @generator
 * @returns JSX element containing the common pricing table data.
 */
function GetTableData() {
  /**
     * Fetcher function for API requests.
     * @param args - RequestInfo object containing information about the request.
     * @returns Promise resolving to the parsed JSON response.
     */
    const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://teothe.pythonanywhere.com/getPricing",
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
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
      filters: [
        {
          text: "CP",
          value: "cp",
        },
        //{
        //  text: "EP",
        //  value: "ep 1",
        //},
        {
          text: "SP",
          value: "sp",
        },
        {
          text: "GP",
          value: "gp",
        },
        {
          text: "PP",
          value: "pp",
        },
      ],
      width: "16%", //funny number for spellcasting entry on FHD displays :)
      filterMode: "tree",
      onFilter: (value: any, record: DataType) =>
        record.cost.split(" ")[1].startsWith(value),
    },
    {
      title: "Item",
      dataIndex: "item",
      key: "item",
    }
  );

  let dataSource = [];
  for (let rowData of data) {
    let item: any = {};
    item["item"] = rowData[0];
    item["cost"] = rowData[1];
    dataSource.push(item);
  }
  return (
    <>
      <SimpleContent
        contentProps={{
          title: "Common Pricing",
          text: [
            "This is a reference for common pricing. Keep in mind that personal gain, state the provider is, countries, and many other things affect pricing, therefore rendering this table somewhat inaccurate.",
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

/**
 * Component for the pricing page, displaying breadcrumbs and a card containing pricing table data.
 * @returns The pricing page section with breadcrumbs and pricing table data.
 */
export default function PricingPage() {
  return (
    <section>
      <GetCrumbs path={"Teothe3K,Common Pricing"} />
      <Card bordered={false} className="w-full">
        {GetTableData()}
      </Card>
    </section>
  );
}
