"use client";

import dynamic from "next/dynamic";

// Now ssr: false is allowed because it's inside a Client Component
const MapOverlayContent = dynamic(
  () => import("@/components/maps/MapOverlayContent"),
  { ssr: false }
);

export default function MapOverlayClient() {
  return <MapOverlayContent />;
}