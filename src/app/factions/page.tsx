import FactionsContent from "@/components/factions/FactionsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Factions",
  description:
    "Discover the influential factions of Teothe, their goals, alliances, and rivalries that shape Teothe's politics, conflicts, and history.",
};

export default function FactionsPage() {
  return <FactionsContent />;
}
