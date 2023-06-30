import { Card } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import TablesNavigator from "Comp/tables/TableNavigation";
import useSWR from "swr";
import { Table } from "antd";

import "App/css/PageTables.Module.css";

function GetTableData(query: string) {
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
    let item = {};
    for (let i = 0; i < columns.length; i++) {
      item[columns[i].dataIndex] = rowData[i];
    }
    dataSource.push(item);
  }

  return <Table dataSource={dataSource} columns={columns} pagination={false} />;
}

export default function TablesPage() {
  return (
    <section>
      <GetCrumbs path={"Pages,Tables"} />
      <Card bordered={false} className="w-full">
        <TablesNavigator />
        {GetTableData("resurrection")} Update this with state from the
        navigator.
      </Card>
    </section>
  );
}
