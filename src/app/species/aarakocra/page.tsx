import AarakocraContent from "@/components/species/subpages/aarakocra";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aarakocra",
  description: "Coloured avian species with a focus on freedom.",
};

export default function AarakocraSpeciesPage() {
  return <AarakocraContent />;
}
