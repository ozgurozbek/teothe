import TablesContent from "@/components/tables/TablesContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tables",
  description:
    "Enhance your gameplay with our collection of tables, from weapon enhancements to resurrection chances and expenses, optimizing your TTRPG experience.",
};

export default function TablesPage() {
  return <TablesContent />;
}
