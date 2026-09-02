"use client";

import { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  Divider,
  Dropdown,
  InputNumber,
  Space,
  Tooltip,
} from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import SimpleContent from "@/components/SimpleCon";
import {
  CheckCircleOutlined,
  CheckCircleFilled,
  ExclamationCircleOutlined,
  ExclamationCircleFilled,
  DownOutlined,
} from "@ant-design/icons";
//@ts-ignore
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Draggable from "react-draggable";

const MAP_LAYERS = [
  "Campuses",
  "Climates",
  "Compass",
  "Continents",
  "Rivers",
  "Grid",
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

  const [gridOpen, setGridOpen] = useState(false);
  const [speed, setSpeed] = useState(30);
  const [hours, setHours] = useState(8);
  const [pace, setPace] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const calculatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");

    const updateMobile = () => setIsMobile(media.matches);

    updateMobile();
    media.addEventListener("change", updateMobile);

    return () => media.removeEventListener("change", updateMobile);
  }, []);

  const hexes = (speed / 120) * pace * hours;
  const miles = hexes * 12;

  const paceItems = [
    { key: "slow", label: "Slow" },
    { key: "normal", label: "Normal" },
    { key: "fast", label: "Fast" },
  ];

  const paceLabels: Record<number, string> = {
    [2 / 3]: "Slow",
    1: "Normal",
    [4 / 3]: "Fast",
  };

  const handlePaceChange = ({ key }: { key: string }) => {
    const paceMap: Record<string, number> = {
      slow: 2 / 3,
      normal: 1,
      fast: 4 / 3,
    };

    setPace(paceMap[key]);
  };

  useEffect(() => {
    if (!mapRef.current) {
      const imageWidth = 1920;
      const imageHeight = 960;
      const maxTilesVisible = 36;

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

      const makeBounds = (x: number, y: number): L.LatLngBoundsExpression => [
        [imageHeight * y, imageWidth * x],
        [imageHeight * (y + 1), imageWidth * (x + 1)],
      ];

      const pruneTiles = (
        minX: number,
        maxX: number,
        minY: number,
        maxY: number,
      ) => {
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

      const renderVisibleTiles = () => {
        const currentMap = mapRef.current;
        if (!currentMap) return;

        const bounds = currentMap.getBounds();

        const minX = Math.floor(bounds.getWest() / imageWidth);
        const maxX = Math.floor(bounds.getEast() / imageWidth);
        const minY = Math.floor(bounds.getNorth() / imageHeight);
        const maxY = Math.floor(bounds.getSouth() / imageHeight);

        const totalTiles = (maxX - minX + 1) * (maxY - minY + 1);

        if (totalTiles > maxTilesVisible) return;

        for (let y = minY - 1; y <= maxY + 1; y++) {
          for (let x = minX - 1; x <= maxX + 1; x++) {
            const key = `${x},${y}`;

            if (renderedTiles.current.has(key)) continue;

            const tileBounds = makeBounds(x, y);

            const baseOverlay = L.imageOverlay(
              "/Maps/Base.webp",
              tileBounds,
            ).addTo(map);

            baseImageRefs.current[key] = baseOverlay;

            MAP_LAYERS.forEach((layer) => {
              const shouldShow = visibleMaps.includes(layer);

              const overlay = L.imageOverlay(`/Maps/${layer}.png`, tileBounds, {
                opacity: shouldShow ? 1 : 0,
                interactive: false,
              }).addTo(map);

              if (!imageRefs.current[layer]) {
                imageRefs.current[layer] = {};
              }

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

  function handleMapVisibility(mapName: string) {
    const overlays = imageRefs.current[mapName];
    const shouldShow = !visibleMaps.includes(mapName);

    if (overlays) {
      Object.values(overlays).forEach((overlay) => {
        overlay.setOpacity(shouldShow ? 1 : 0);
      });
    }

    setVisibleMaps((prev) =>
      shouldShow ? [...prev, mapName] : prev.filter((name) => name !== mapName),
    );

    return shouldShow;
  }

  function handleGridClick() {
    const shouldShow = handleMapVisibility("Grid");

    if (shouldShow) {
      setGridOpen(true);
    }
  }

  return (
    <section>
      <GetCrumbs path={"Teothe,Map Overlay"} />

      <Card variant="outlined" className="w-full">
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
          <Button onClick={() => handleMapVisibility("Campuses")}>
            <span>
              Campuses <CheckCircleOutlined />
            </span>
          </Button>

          <Tooltip
            title="Bottom left has the scale for the map with a single unit displaying a day in travel pace (8hrs)"
            color="#630436"
          >
            <Button onClick={() => handleMapVisibility("Compass")}>
              <span>
                Compass <CheckCircleFilled />
              </span>
            </Button>
          </Tooltip>

          <Button onClick={() => handleMapVisibility("Continents")}>
            <span>
              Continents <CheckCircleOutlined />
            </span>
          </Button>

          <Button onClick={() => handleMapVisibility("Rivers")}>
            <span>
              Rivers <CheckCircleOutlined />
            </span>
          </Button>

          <Button onClick={() => handleMapVisibility("Kingdoms3K")}>
            <span>
              Kingdoms3K <CheckCircleOutlined />
            </span>
          </Button>

          <Button onClick={() => handleMapVisibility("KingdomsMC")}>
            <span>
              KingdomsMC <CheckCircleOutlined />
            </span>
          </Button>

          <Button onClick={() => handleMapVisibility("Places")}>
            <span>
              Places <CheckCircleOutlined />
            </span>
          </Button>

          <Divider orientation="vertical" style={{ borderColor: "white" }} />

          <Tooltip
            title="Each hex represents 12 miles of travel, roughly 4 hours of travel at normal pace, covering 2 hexes in a standard 8-hour day. Travel scales with movement speed using Hexes = (Speed ÷ 120) × Pace × Hours, where Pace is 2/3 (slow), 1 (normal), or 4/3 (fast). Fractional progress is retained. Fast pace imposes a -5 penalty to passive Perception and slow pace enables stealth and careful searching. Extending travel beyond 8 hours in a day risks exhaustion. Terrain, mounts, and environmental conditions may further modify these rates."
            color="#630436"
          >
            <Button onClick={handleGridClick}>
              <span>
                Grid <ExclamationCircleFilled />
              </span>
            </Button>
          </Tooltip>

          <Button onClick={() => handleMapVisibility("Climates")}>
            <span>
              Climate <ExclamationCircleOutlined />
            </span>
          </Button>

          <Tooltip
            title="Fear 😱, Joy 😊, Sorrow 😔, Love 😍, Anger 😠, Hope 🥺, Anxiety 😵, Awe 😨, Desire 😳, Abandonment 😒"
            color="#630436"
          >
            <Button onClick={() => handleMapVisibility("Echoes")}>
              <span>
                Emotional Echoes <ExclamationCircleFilled />
              </span>
            </Button>
          </Tooltip>

          <Tooltip title="See Map Legend for more detail" color="#630436">
            <Button onClick={() => handleMapVisibility("Resources")}>
              <span>
                Map Legend <ExclamationCircleFilled />
              </span>
            </Button>
          </Tooltip>

          <Button onClick={() => handleMapVisibility("Steamcart")}>
            <span>
              Steamcart <ExclamationCircleOutlined />
            </span>
          </Button>

          <Tooltip
            title="Red: Woven Route, Blue: Wavekeep Route, Purple: Elkian Route"
            color="#630436"
          >
            <Button onClick={() => handleMapVisibility("Trade")}>
              <span>
                Trade Routes <ExclamationCircleFilled />
              </span>
            </Button>
          </Tooltip>

          <Button onClick={() => handleMapVisibility("Travel")}>
            <span>
              Travel Routes <ExclamationCircleOutlined />
            </span>
          </Button>
        </Space>

        <div className="relative mt-4 h-[60vh] w-full">
          <div
            id="leaflet-map"
            className="absolute left-0 top-0 z-0 h-full w-full"
          />
        </div>
      </Card>

      {gridOpen && (
        <Draggable
          nodeRef={calculatorRef}
          disabled={isMobile}
          handle=".grid-calculator-drag"
          bounds="body"
        >
          <div
            ref={calculatorRef}
            className="
              fixed z-[1000]
              w-[200px]
              select-none
              rounded-md
              border border-white/15
              bg-[#171b20]
              text-white
              shadow-2xl
              sm:right-20 sm:bottom-4
              max-sm:bottom-3 max-sm:left-3 max-sm:w-[calc(100vw-24px)]
            "
          >
            <div
              className="
                grid-calculator-drag
                flex items-center justify-between
                border-b border-white/10
                px-3 py-2
                sm:cursor-move
              "
            >
              <span>Travel Calculator</span>

              <button
                type="button"
                onClick={() => setGridOpen(false)}
                className="
                  ml-2
                  flex h-6 w-6 items-center justify-center
                  rounded
                  leading-none
                  text-white/50
                  hover:bg-white/10
                  hover:text-white
                "
                aria-label="Close travel calculator"
              >
                ×
              </button>
            </div>

            <div className="p-3">
              <div className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-2">
                <span>Speed</span>
                <InputNumber
                  min={1}
                  value={speed}
                  addonAfter="ft"
                  inputMode="numeric"
                  onChange={(value) => setSpeed(value ?? 0)}
                  className="w-[65px]"
                />

                <span>Time</span>
                <InputNumber
                  min={0}
                  step={0.25}
                  value={hours}
                  addonAfter="h"
                  inputMode="decimal"
                  onChange={(value) => setHours(value ?? 0)}
                  className="w-[67px]"
                />

                <span>Pace</span>
                <Dropdown
                  popupRender={() => (
                    <div className="w-[125px] rounded-md border border-white/10 bg-[#1f1f1f] p-1 shadow-xl">
                      {paceItems.map((item) => {
                        const selected =
                          (item.key === "slow" && pace === 2 / 3) ||
                          (item.key === "normal" && pace === 1) ||
                          (item.key === "fast" && pace === 4 / 3);

                        return (
                          <button
                            key={item.key}
                            type="button"
                            onClick={() => {
                              handlePaceChange({ key: item.key });
                            }}
                            className={`w-full rounded px-2 py-1.5 text-left transition-colors ${selected ? "bg-white/10 text-white" : "text-white hover:bg-white/5"}`}
                          >
                            {item.label}
                          </button>
                        );
                      })}
                    </div>
                  )}
                >
                  <Button className="w-[100px]">
                    <Space>
                      {paceLabels[pace]}
                      <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
              </div>

              <Divider className="my-2 border-white/10" />

              <div className="grid grid-cols-2 gap-2">
                <div className="rounded border border-transparent bg-[#292d31] py-1.5 text-center">
                  <div>Hexes</div>
                  <div className="text-base font-semibold tabular-nums">
                    {hexes.toFixed(2)}
                  </div>
                </div>

                <div className="rounded border border-transparent bg-[#292d31] py-1.5 text-center">
                  <div>Miles</div>
                  <div className="text-base font-semibold tabular-nums">
                    {miles.toFixed(1)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Draggable>
      )}
    </section>
  );
}
