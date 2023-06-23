import { Card } from "antd";
import GetCrumbs from "@/NavigationCrumb";
import ResurrectionTable from "@/TableResurrection";
import MaterialsTable from "@/TableMaterials";
import CalendarTable from "@/TableCalendar";

export default function TablesPage() {
    return (
        <section>
            <GetCrumbs
                path={"Pages,Tables"}
            />
            <Card bordered={false} className='w-full'>
                <ResurrectionTable/>
                <MaterialsTable/>
                <CalendarTable/>
            </Card>
        </section>
    )
}