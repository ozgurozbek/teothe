import { Card } from "antd";
import GetCrumbs from "@/components/NavigationCrumb";
import ResurrectionTable from "@/components/TableResurrection";
import MaterialsTable from "@/components/TableMaterials";
import CalendarTable from "@/components/TableCalendar";
import TablesNavigator from "@/components/TableNavigation";

import "../app/PageTables.Module.css";

export default function TablesPage() {
    return (
        <section>
            <GetCrumbs
                path={"Pages,Tables"}
            />
            <Card bordered={false} className='w-full'>
                <TablesNavigator/>
                <ResurrectionTable/>
                <MaterialsTable/>
                <CalendarTable/>
            </Card>
        </section>
    )
}