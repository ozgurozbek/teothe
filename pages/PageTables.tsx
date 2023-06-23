import { Card } from "antd";
import GetCrumbs from "@/NavigationCrumb";
import ResurrectionTable from "@/TableResurrection";
import MaterialsTable from "@/TableMaterials";
import CalendarTable from "@/TableCalendar";
import TablesNavigator from "@/TableNavigation";

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