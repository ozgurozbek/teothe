import AokinContent from "@/components/species/aokin/aokin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aokin",
  description:
    "Aokin of Teothe are a spiritual, nature-bound species in Aoradon, shaped by Natuva beliefs, ancestral rituals, and cosmic forces.",
};

export default function AokinSpeciesPage() {
  return <AokinContent />;
}
