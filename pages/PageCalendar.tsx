import { Card } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import SimpleContent from "@/components/SimpleCon";
import CalendarTable from "@/components/calendar/CalendarTable";
import { useState } from "react";

export default function CalendarPage() {
  const [monthName, setMonthName] = useState("Buibus");
  const [year, setYear] = useState(27);

  return (
    <section>
      <GetCrumbs path={"Teothe3K,Calendar"} />
      <Card bordered={false} className="w-full">
        <SimpleContent contentProps={{ title: "Calendar" }} />
        <CalendarTable calendarProps={{ monthName: monthName, year: year }} />
      </Card>
    </section>
  );
}
