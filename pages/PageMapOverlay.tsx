import { useState } from "react";
import { Button, Card, Image, Space } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import SimpleContent from "@/components/SimpleCon";

export default function MapOverlayPage() {
  const [maps, setMapVis] = useState(["Base"]);
  let temp: string[] = [];

  function handleVis(data: string) {
    temp = maps;
    if (maps.includes(data)) {
      const index = temp.indexOf(data);
      if (index > -1) {
        temp.splice(index, 1);
      }
    } else {
      temp.push(data);
    }
    setMapVis(temp);
  }

  function ShowMaps() {
    let mapData = [];
    for (let i = 0; i < maps.length; i++) {
      mapData.push(
        <Image
          rootClassName="absolute"
          preview={false}
          src={"./Maps/" + maps[i] + ".png"}
          alt={maps[i]}
        />
      );
    }
    return <div className="mt-4">{mapData}</div>;
  }

  return (
    <section>
      <GetCrumbs path={"Teothe3K,Map Overlay"} />
      <Card bordered={false} className="w-full min-h-[110vh]">
        <SimpleContent
          contentProps={{
            title: "Map Overlay",
            text: [
              "Map overlays change their index in the order of the button press. You can add or remove overlays. There are obviously not HD, and small campuses or travel routes may provide difficult to see.",
            ],
          }}
        />
        <Space wrap>
          <Button
            onClick={() => {
              handleVis("Campuses");
            }}
          >
            Campuses Overlay
          </Button>
          <Button
            onClick={() => {
              handleVis("Climates");
            }}
          >
            Climates Overlay
          </Button>
          <Button
            onClick={() => {
              handleVis("Compass");
            }}
          >
            Compass Overlay
          </Button>
          <Button
            onClick={() => {
              handleVis("Continents");
            }}
          >
            Continents Overlay
          </Button>
          <Button
            onClick={() => {
              handleVis("Echoes");
            }}
          >
            Echoes Overlay
          </Button>
          <Button
            onClick={() => {
              handleVis("Kingdoms");
            }}
          >
            Kingdoms Overlay
          </Button>
          <Button
            onClick={() => {
              handleVis("Places");
            }}
          >
            Places Overlay
          </Button>
          <Button
            onClick={() => {
              handleVis("Resources");
            }}
          >
            Resources Overlay
          </Button>
          <Button
            onClick={() => {
              handleVis("Steamcart");
            }}
          >
            Steamcart Overlay
          </Button>
          <Button
            onClick={() => {
              handleVis("Trade");
            }}
          >
            Trade Overlay
          </Button>
          <Button
            onClick={() => {
              handleVis("Travel");
            }}
          >
            Travel Overlay
          </Button>
        </Space>
        <div className="relative">
          <ShowMaps />
        </div>
      </Card>
    </section>
  );
}
