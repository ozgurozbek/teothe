import { Metadata } from "next";
import MapOverlayClient from "@/components/maps/MapOverlayClient";

export const metadata: Metadata = {
  title: "Map Overlay",
  description:
    "Explore routes and unlock the mysteries of Teothe by overlaying different maps, revealing alternate maps and travel guides.",
};

export default function MapOverlayPage() {
  return (
    <main>
      <MapOverlayClient />
    </main>
  );
}