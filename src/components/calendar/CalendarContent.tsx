"use client";
import {
  Button,
  Card,
  Divider,
  Dropdown,
  Empty,
  InputNumber,
  MenuProps,
  Space,
  Table,
} from "antd";
import SimpleContent from "@/components/SimpleCon";
import GetCrumbs from "Comp/NavigationCrumb";
import CalendarTable from "@/components/calendar/CalendarTable";
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";

/**
 * The parent component for the calendar. Holds states that are then passed to the table then to cell. Helps fetch data depending on table number, month and year.
 * @see CalendarTable
 * @see CalendarCell
 * @returns Card(antd) wrapped by section
 */
function GetAPICalendar() {
  /**
   * Fetcher function for API requests.
   * @param args - RequestInfo object containing information about the request.
   * @returns Promise resolving to the parsed JSON response.
   */
  const data = {
    tableDescription: {
      description:
        "Every day is 24 hours, 8 days a week, 8 weeks, 48 days long months. In total there are 384 days.",
      columns: ["month", "name", "season"],
      tabName: "calendar",
    },
    tableData: [
      { season: "Spring", name: "Buibus", month: "1" },
      { season: "Spring", name: "Ukeus", month: "2" },
      { season: "Summer", name: "Verus", month: "3" },
      { season: "Summer", name: "Vihus", month: "4" },
      { season: "Fall", name: "Fexyius", month: "5" },
      { season: "Fall", name: "Vesius", month: "6" },
      { season: "Winter", name: "Cyaxus", month: "7" },
      { season: "Winter", name: "Radus", month: "8" },
    ],
  };

  function titleCase(text: string) {
    return text
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
      .join(" ");
  }
  //dataSource, columns
  let columns = [];
  for (let i = 0; i < data.tableDescription.columns.length; i++) {
    columns.push({
      title: titleCase(data.tableDescription.columns[i]),
      dataIndex: data.tableDescription.columns[i],
      key: data.tableDescription.columns[i],
    });
  }

  let dataSource = [];
  for (let rowData of data.tableData) {
    dataSource.push(rowData);
  }
  dataSource.sort((a, b) => parseInt(a.month) - parseInt(b.month));
  return (
    <>
      <SimpleContent
        contentProps={{
          title: "Calendar Information",
          text: [data.tableDescription.description],
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

export default function CalendarContent() {
  const [monthName, setMonthName] = useState("");
  const [tableNo, setTableNo] = useState("1");
  const [yearCount, setYearCount] = useState(27);

  const handleMonthClick: MenuProps["onClick"] = (e) => {
    setMonthName(e.key);
  };

  const handleTableClick: MenuProps["onClick"] = (e) => {
    setTableNo(e.key);
  };

  const handleYearClick = (value: number) => {
    setYearCount(value);
  };

  const items: MenuProps["items"] = [
    {
      label: "Buibus",
      key: "Buibus",
    },
    {
      label: "Ukeus",
      key: "Ukeus",
    },
    {
      label: "Verus",
      key: "Verus",
    },
    {
      label: "Vihus",
      key: "Vihus",
    },
    {
      label: "Fexyius",
      key: "Fexyius",
    },
    {
      label: "Vesius",
      key: "Vesius",
    },
    {
      label: "Cyaxus",
      key: "Cyaxus",
    },
    {
      label: "Radus",
      key: "Radus",
    },
  ];
  const monthProps = {
    items,
    onClick: handleMonthClick,
  };

  const tableItems: MenuProps["items"] = [
    {
      label: "1",
      key: "1",
    },
    {
      label: "2",
      key: "2",
    },
    {
      label: "3",
      key: "3",
    },
    {
      label: "4",
      key: "4",
    },
    {
      label: "5",
      key: "5",
    },
  ];
  const tableProps = {
    items: tableItems,
    onClick: handleTableClick,
  };
  return (
    <section>
      <GetCrumbs path={"Teothe,Calendar"} />
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Calendar",
            text: [
              "In the realm of Teothe, 28 unique holidays are celebrated throught 8 months of every year.",
              "16 of these holidays are recognized and celebrated by everyone in Teothe, and 12 of them are specific to different species.",
            ],
          }}
        />
        <Space className="mb-4 flex flex-wrap">
          <div>
            Table:{" "}
            <Dropdown menu={tableProps}>
              <Button>
                <Space>
                  {tableNo}
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>
          <Divider type="vertical" style={{ borderColor: "white" }} />
          <div>
            Month:{" "}
            <Dropdown menu={monthProps}>
              <Button>
                <Space>
                  {monthName}
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>
          <Divider type="vertical" style={{ borderColor: "white" }} />
          <div className="flex items-center ">
            <p className="mr-2"> Year: </p>
            <InputNumber
              addonAfter="Blue Era"
              defaultValue={27}
              min={27}
              precision={0}
              keyboard={false}
              onChange={(x) => {
                if (x != null) {
                  handleYearClick(x);
                }
              }}
            />
          </div>
        </Space>

        <Divider />
        {monthName !== "" ? (
          <CalendarTable
            calendarProps={{
              tableNo: tableNo,
              monthName: monthName,
              year: yearCount,
            }}
          />
        ) : (
          <Empty />
        )}
        <Divider />
        <GetAPICalendar />
      </Card>
    </section>
  );
}
