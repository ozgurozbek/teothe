import FactionsContent from "@/components/factions/FactionsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Factions",
  description:
    "Explore the pantheon of gods and goddesses that shape the destiny of Teothe, with domains, hierarchy, and legendary tales awaiting discovery.",
};

export default function FactionsPage() {
  return <FactionsContent />;
}
