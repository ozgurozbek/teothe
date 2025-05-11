"use client";

import { useEffect, useRef, useState } from "react";
import { Button, Card, Divider, Space, Tooltip } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import SimpleContent from "@/components/SimpleCon";
import {
  CheckCircleOutlined,
  CheckCircleFilled,
  ExclamationCircleOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
//@ts-ignore
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MAP_LAYERS = [
  "Campuses",
  "Climates",
  "Compass",
  "Continents",
  "Echoes",
  "Kingdoms3K",
  "KingdomsMC",
  "Places",
  "Resources",
  "Steamcart",
  "Trade",
  "Travel",
];

export default function MapOverlayContent() {
  const mapRef = useRef<L.Map | null>(null);
  const imageRefs = useRef<Record<string, Record<string, L.ImageOverlay>>>({});
  const baseImageRefs = useRef<Record<string, L.ImageOverlay>>({});
  const [visibleMaps, setVisibleMaps] = useState<string[]>([]);
  const renderedTiles = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (!mapRef.current) {
      const imageWidth = 1920;
      const imageHeight = 960;
      const maxTilesVisible = 36; // Allow up to 6x6 tiles in view

      // Initialize Leaflet map
      const map = L.map("leaflet-map", {
        crs: L.CRS.Simple,
        minZoom: -1,
        maxZoom: 2,
        zoomSnap: 0.05,
        center: [imageHeight / 2, imageWidth / 2],
        zoom: -0.3,
        scrollWheelZoom: false,
        attributionControl: false,
      });
      mapRef.current = map;

      // Helper to compute tile bounds
      const makeBounds = (x: number, y: number): L.LatLngBoundsExpression => [
        [imageHeight * y, imageWidth * x],
        [imageHeight * (y + 1), imageWidth * (x + 1)],
      ];

      // Prune off-screen tiles more generously
      const pruneTiles = (minX: number, maxX: number, minY: number, maxY: number) => {
        renderedTiles.current.forEach((key) => {
          const [xStr, yStr] = key.split(",");
          const x = parseInt(xStr);
          const y = parseInt(yStr);
          if (x < minX - 2 || x > maxX + 2 || y < minY - 2 || y > maxY + 2) {
            if (baseImageRefs.current[key]) {
              map.removeLayer(baseImageRefs.current[key]);
              delete baseImageRefs.current[key];
            }
            MAP_LAYERS.forEach((layer) => {
              if (imageRefs.current[layer]?.[key]) {
                map.removeLayer(imageRefs.current[layer][key]);
                delete imageRefs.current[layer][key];
              }
            });
            renderedTiles.current.delete(key);
          }
        });
      };

      // Dynamically load tiles based on visible bounds
      const renderVisibleTiles = () => {
        if (!mapRef.current) return;

        const bounds = mapRef.current.getBounds();
        const minX = Math.floor(bounds.getWest() / imageWidth);
        const maxX = Math.floor(bounds.getEast() / imageWidth);
        const minY = Math.floor(bounds.getNorth() / imageHeight);
        const maxY = Math.floor(bounds.getSouth() / imageHeight);

        const totalTiles = (maxX - minX + 1) * (maxY - minY + 1);
        if (totalTiles > maxTilesVisible) return;

        // Loop to add base and overlay tiles
        for (let y = minY - 1; y <= maxY + 1; y++) {
          for (let x = minX - 1; x <= maxX + 1; x++) {
            const key = `${x},${y}`;
            if (renderedTiles.current.has(key)) continue;

            const bounds = makeBounds(x, y);

            // Add base layer
            const baseOverlay = L.imageOverlay("/Maps/Base.webp", bounds).addTo(map);
            baseImageRefs.current[key] = baseOverlay;

            // Add each overlay map if active
            MAP_LAYERS.forEach((layer) => {
              const shouldShow = visibleMaps.includes(layer);
              const overlay = L.imageOverlay(`/Maps/${layer}.png`, bounds, {
                opacity: shouldShow ? 1 : 0,
              }).addTo(map);

              if (!imageRefs.current[layer]) imageRefs.current[layer] = {};
              imageRefs.current[layer][key] = overlay;
            });

            renderedTiles.current.add(key);
          }
        }

        pruneTiles(minX, maxX, minY, maxY);
      };

      renderVisibleTiles();
      map.on("moveend", renderVisibleTiles);
    }
  }, [visibleMaps]);

  // Toggle overlay visibility dynamically
  function handleMapVisibility(mapName: string) {
    const overlays = imageRefs.current[mapName];
    const shouldShow = !visibleMaps.includes(mapName);

    // If overlays are already rendered, update their opacity
    if (overlays) {
      Object.values(overlays).forEach((overlay) => overlay.setOpacity(shouldShow ? 1 : 0));
    }

    setVisibleMaps((prev) =>
      shouldShow ? [...prev, mapName] : prev.filter((name) => name !== mapName)
    );
  }

  return (
    <section>
      <GetCrumbs path={"Teothe,Map Overlay"} />
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Map Overlay",
            text: [
              "Map overlays of Teothe change their index in the order of the button press. You can add or remove overlays by clicking the respective button. These are obviously not HD, and small campuses or travel routes may provide difficult to see.",
              "Your character quite literally does not know about these. The only accessible maps to your character from the get-go are marked with a checkmark. These are also the left-hand side of the button row. The rest can be purchased in some places across Teothe or can be drawn by hiring a scriber.",
              "Moreover, icons with fills have tooltips attached to them giving additional information to the Player.",
            ],
          }}
        />
        <Space wrap>
          <Button onClick={() => handleMapVisibility("Campuses")}><span>Campuses <CheckCircleOutlined /></span></Button>
          <Tooltip title="Bottom left has the scale for the map with a single unit displaying a day in travel pace (8hrs)" color="#630436">
            <Button onClick={() => handleMapVisibility("Compass")}><span>Compass <CheckCircleFilled /></span></Button>
          </Tooltip>
          <Button onClick={() => handleMapVisibility("Continents")}><span>Continents <CheckCircleOutlined /></span></Button>
          <Button onClick={() => handleMapVisibility("Kingdoms3K")}><span>Kingdoms3K <CheckCircleOutlined /></span></Button>
          <Button onClick={() => handleMapVisibility("KingdomsMC")}><span>KingdomsMC <CheckCircleOutlined /></span></Button>
          <Button onClick={() => handleMapVisibility("Places")}><span>Places <CheckCircleOutlined /></span></Button>
          <Divider type="vertical" style={{ borderColor: "white" }} />
          <Button onClick={() => handleMapVisibility("Climates")}><span>Climate <ExclamationCircleOutlined /></span></Button>
          <Tooltip title="Fear 😱, Joy 😊, Sorrow 😔, Love 😍, Anger 😠, Hope 🥺, Anxiety 😵, Awe 😨, Desire 😳, Abandonment 😒" color="#630436">
            <Button onClick={() => handleMapVisibility("Echoes")}><span>Emotional Echoes <ExclamationCircleFilled /></span></Button>
          </Tooltip>
          <Tooltip title="See Map Legend for more detail" color="#630436">
            <Button onClick={() => handleMapVisibility("Resources")}><span>Map Legend <ExclamationCircleFilled /></span></Button>
          </Tooltip>
          <Button onClick={() => handleMapVisibility("Steamcart")}><span>Steamcart <ExclamationCircleOutlined /></span></Button>
          <Tooltip title="Red: Woven Route, Blue: Wavekeep Route, Purple: Elkian Route" color="#630436">
            <Button onClick={() => handleMapVisibility("Trade")}><span>Trade Routes <ExclamationCircleFilled /></span></Button>
          </Tooltip>
          <Button onClick={() => handleMapVisibility("Travel")}><span>Travel Routes <ExclamationCircleOutlined /></span></Button>
        </Space>
        <div className="relative mt-4 h-[60vh] w-full">
          <div id="leaflet-map" className="absolute top-0 left-0 w-full h-full z-0" />
        </div>
      </Card>
    </section>
  );
}
