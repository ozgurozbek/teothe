import AasimarContent from "@/components/species/subpages/aasimar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aasimar",
  description: "Infused with heavenly power, aasimar are the ones who carry a spark of the Upper Planes",
};

export default function AasimarSpeciesPage() {
  return <AasimarContent />;
}
