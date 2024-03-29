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
 * Gets pricing table data and provides a filter in the Table
 * @backend fetch
 * @returns SimpleCon and Table(antd) wrapped with <>
 */
function GetTableData() {
  const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://gi5vwiheg0.execute-api.eu-central-1.amazonaws.com/Stage/getPricing",
    fetcher
  );
  if (error) {
    console.log(error);
    return <div>Failed to access API</div>;
  }

  interface ResponseDataType {
    cost: string;
    item: string;
  }

  if (!data) return <Skeleton active />;

  function PriceSorter(cost:string) {
    //gp sp ye göre stringi böl
    let resp = cost.split(" ")
    let multiplier = 1;
    let value = 0;

    //çarpan bulmak için 2. kısmı kullan
    switch (resp[1]) {
      case "cp":
        value = Number(resp[0])
        break;
      case "sp":
        value = Number(resp[0])*10
        break;
      case "gp":
        value = Number(resp[0])*100
        break;
      case "pp":
        value = Number(resp[0])*1000
        break;
      default:
        value = 999999;
        break;
    }

    //çarp sonucu döndür
    return value
  }

  data.sort((a: ResponseDataType, b: ResponseDataType) => PriceSorter(a.cost) - PriceSorter(b.cost));

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

  let dataSource = data;
  
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
 * Calls and displays the Common Pricing table
 * @returns Table(antd) wrapped with Card(antd) wrapped with section
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
