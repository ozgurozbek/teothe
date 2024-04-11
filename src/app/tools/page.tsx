import ToolsContent from "@/components/tools/ToolsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Explore our suite of tools that empover, provide utility and add flavor to your character. Learn about how you can acquire and use them.",
};

export default function ToolsPage() {
  return <ToolsContent />;
}
