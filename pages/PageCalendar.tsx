import { Button, Card, Dropdown, InputNumber, MenuProps, Space } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import SimpleContent from "@/components/SimpleCon";
import CalendarTable from "@/components/calendar/CalendarTable";
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
export default function CalendarPage() {
  const [monthName, setMonthName] = useState("Radus");

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    setMonthName(e.key);
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

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <section>
      <GetCrumbs path={"Teothe3K,Calendar"} />
      <Card bordered={false} className="w-full">
        <SimpleContent contentProps={{ title: "Calendar" }} />
        <Space className="mb-4">
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                Month
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Space>
        <CalendarTable calendarProps={{ monthName: monthName, year: 27 }} />
      </Card>
    </section>
  );
}
