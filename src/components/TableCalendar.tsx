import { Table } from "antd";
import SimpleContent from "Comp/SimpleCon";

export default function CalendarTable() {
  const dataSource = [
    {
      month: "1",
      name: "Buibus",
      season: "Spring",
    },
    {
      month: "2",
      name: "Ukeus",
      season: "Spring",
    },
    {
      month: "3",
      name: "Verus",
      season: "Summer",
    },
    {
      month: "4",
      name: "Vihus",
      season: "Summer",
    },
    {
      month: "5",
      name: "Fexyius",
      season: "Fall",
    },
    {
      month: "6",
      name: "Vesius",
      season: "Fall",
    },
    {
      month: "7",
      name: "Cyaxus",
      season: "Winter",
    },
    {
      month: "8",
      name: "Radus",
      season: "Winter",
    },
  ];

  const columns = [
    {
      title: "Month",
      dataIndex: "month",
      key: "month",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Season",
      dataIndex: "season",
      key: "season",
    },
  ];

  return (
    <section id="calendar" className="py-4">
      <SimpleContent
        contentProps={{
          title: "Calendar",
          text: [
            "Every month has 48 days, every week has 8 days, every day has 24 hours.",
            "In total, there are 384 days in a year.",
          ],
        }}
      />
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </section>
  );
}
