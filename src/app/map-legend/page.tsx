import MapLegendContent from "@/components/maps/MapLegendContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Map Legend",
  description:
    "Decode the symbols of Teothe's maps with our Map Legend, providing clarity and understanding to the geography of the Material Plane.",
};
export default function MapLegendPage() {
  return <MapLegendContent />;
}
