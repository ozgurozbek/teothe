import { Button, Card, Dropdown, InputNumber, MenuProps, Space } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import SimpleContent from "@/components/SimpleCon";
import CalendarTable from "@/components/calendar/CalendarTable";
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
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
        <Space className="mb-4">
          Table:{" "}
          <Dropdown menu={tableProps}>
            <Button>
              <Space>
                {tableNo}
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          Month:{" "}
          <Dropdown menu={monthProps}>
            <Button>
              <Space>
                {monthName}
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          <InputNumber
            addonAfter="Blue Era"
            defaultValue={27}
            min={27}
            precision={0}
            keyboard={false}
            onChange={handleYearClick}
          />
        </Space>
        <CalendarTable
          calendarProps={{
            tableNo: tableNo,
            monthName: monthName,
            year: yearCount,
          }}
        />
      </Card>
    </section>
  );
}
