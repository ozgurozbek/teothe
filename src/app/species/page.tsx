import SpeciesContent from "@/components/species/SpeciesContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Species",
  description:
    "Discover the myriad of species that inhabit Teothe, each with its own abilities, cultures, and histories, enriching your adventures with diversity and depth.",
};

export default function SpeciesPage() {
  return <SpeciesContent />;
}
