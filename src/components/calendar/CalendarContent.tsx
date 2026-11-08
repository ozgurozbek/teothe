"use client";

import React, { useState } from "react";
import {
  Card,
  Divider,
  Dropdown,
  Space,
  Button,
  InputNumber,
  Empty,
  Table,
  MenuProps,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import SimpleContent from "@/components/SimpleCon";
import GetCrumbs from "Comp/NavigationCrumb";
import CalendarTable from "@/components/calendar/CalendarTable";

const calendarData = {
  months: [
    "Buibus",
    "Ukeus",
    "Verus",
    "Vihus",
    "Fexyius",
    "Vesius",
    "Cyaxus",
    "Radus",
  ],
  monthLengths: [48, 48, 48, 48, 48, 48, 48, 48],
};

function GetAPICalendar() {
  const data = {
    tableDescription: {
      description: "Every day is 24 hours. In total there are 384 days.",
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

  const columns = data.tableDescription.columns.map((col) => ({
    title: col[0].toUpperCase() + col.slice(1).toLowerCase(),
    dataIndex: col,
    key: col,
  }));

  const dataSource = [...data.tableData].sort(
    (a, b) => parseInt(a.month) - parseInt(b.month),
  );

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
        rowKey="month"
      />
    </>
  );
}

const CalendarPage: React.FC = () => {
  const [monthName, setMonthName] = useState<string>("");
  const [tableNo, setTableNo] = useState("1");
  const [yearCount, setYearCount] = useState(27);

  const monthItems: MenuProps["items"] = calendarData.months.map((m) => ({
    label: m,
    key: m,
  }));

  const tableItems: MenuProps["items"] = Array.from({ length: 5 }, (_, i) => ({
    label: String(i + 1),
    key: String(i + 1),
  }));

  const selectedMonthIndex = calendarData.months.indexOf(monthName);
  const monthLength =
    selectedMonthIndex >= 0 ? calendarData.monthLengths[selectedMonthIndex] : 0;

  return (
    <section>
      <GetCrumbs path={"Teothe,Calendar"} />
      <Card variant="outlined" className="w-full">
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
            <Dropdown
              menu={{
                items: tableItems,
                onClick: (e) => setTableNo(e.key),
              }}
            >
              <Button>
                <Space>
                  {tableNo}
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>

          <Divider orientation="vertical" style={{ borderColor: "white" }} />

          <div>
            Month:{" "}
            <Dropdown
              menu={{
                items: monthItems,
                onClick: (e) => setMonthName(e.key),
              }}
            >
              <Button>
                <Space>
                  {monthName || "Select"}
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>

          <Divider orientation="vertical" style={{ borderColor: "white" }} />

          <div className="flex items-center">
            <p className="mr-2">Year:</p>

            <InputNumber
              addonAfter="Blue Era"
              value={yearCount}
              min={27}
              precision={0}
              keyboard={false}
              onChange={(value) => {
                if (value !== null) {
                  setYearCount(value);
                }
              }}
            />
          </div>
        </Space>

        <Divider />
        {monthName ? (
          <CalendarTable
            calendarProps={{
              tableNo: tableNo,
              monthName: monthName,
              year: yearCount,
            }}
            monthLength={monthLength}
          />
        ) : (
          <Empty />
        )}
        <Divider />
        <GetAPICalendar />
      </Card>
    </section>
  );
};

export default CalendarPage;
