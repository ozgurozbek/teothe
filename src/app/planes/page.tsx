import LocationsContent from "@/components/planes/PlanesContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planes",
  description:
    "Journey beyond the Material Plane of Teothe and explore the diverse realms, with unique inhabitants, rules, landscapes, and secrets awaiting discovery.",
};

export default function LocationsPage() {
  return <LocationsContent />;
}
