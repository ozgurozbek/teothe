import RacesContent from "@/components/races/RacesContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Races",
  description:
    "Discover the myriad races that inhabit Teothe, each with its own abilities, cultures, and histories, enriching your adventures with diversity and depth.",
};

export default function RacesPage() {
  return <RacesContent />;
}
