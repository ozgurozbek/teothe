"use client"

import {
    Button,
    Card,
    Divider,
    Dropdown,
    Empty,
    InputNumber,
    MenuProps,
    Skeleton,
    Space,
    Table,
  } from "antd";
  import GetCrumbs from "Comp/NavigationCrumb";
  import SimpleContent from "@/components/SimpleCon";
  import CalendarTable from "@/components/calendar/CalendarTable";
  import { useState } from "react";
  import { DownOutlined } from "@ant-design/icons";
  
  import useSWR from "swr";
  
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
    const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());
    const { data, error } = useSWR(
      "https://teothe.pythonanywhere.com/getTables?tab=calendar",
      fetcher
    );
    if (error) {
      console.log(error);
      return <div>Failed to access API</div>;
    }
    if (!data) return <Skeleton active />;
  
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
        <SimpleContent
          contentProps={{
            title: "Calendar Information",
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
  
  export default function CalendarPage() {
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
    ];
    const tableProps = {
      items: tableItems,
      onClick: handleTableClick,
    };
    return (
      <section>
        <GetCrumbs path={"Teothe3K,Calendar"} />
        <Card bordered={false} className="w-full">
          <SimpleContent contentProps={{ title: "Calendar" }} />
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
  