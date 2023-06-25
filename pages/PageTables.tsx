import { Card } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import ResurrectionTable from "Comp/tables/TableResurrection";
import MaterialsTable from "Comp/tables/TableMaterials";
import CalendarTable from "Comp/tables/TableCalendar";
import TablesNavigator from "Comp/tables/TableNavigation";

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
