import { Card } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import ResurrectionTable from "Comp/TableResurrection";
import MaterialsTable from "Comp/TableMaterials";
import CalendarTable from "Comp/TableCalendar";
import TablesNavigator from "Comp/TableNavigation";

import "App/css/PageTables.Module.css";

export default function TablesPage() {
  return (
    <section>
      <GetCrumbs path={"Pages,Tables"} />
      <Card bordered={false} className="w-full">
        <TablesNavigator />
        <ResurrectionTable />
        <MaterialsTable />
        <CalendarTable />
      </Card>
    </section>
  );
}
