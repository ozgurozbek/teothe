import { Button, Card, Image, Space } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import SimpleContent from "@/components/SimpleCon";

export default function MapOverlayPage() {
  let visibleMaps: string[] = [];
  function handleMapVisibility(mapName: string) {
    if (visibleMaps.includes(mapName)) {
      (document.getElementById(mapName) as HTMLInputElement).style.visibility =
        "hidden";
      const index = visibleMaps.indexOf(mapName);
      if (index > -1) {
        visibleMaps.splice(index, 1);
      }
    } else {
      (document.getElementById(mapName) as HTMLInputElement).style.visibility =
        "visible";
      visibleMaps.push(mapName);
    }
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
              handleMapVisibility("Campuses");
            }}
          >
            Campuses Overlay
          </Button>
          <Button
            onClick={() => {
              handleMapVisibility("Climates");
            }}
          >
            Climates Overlay
          </Button>
          <Button
            onClick={() => {
              handleMapVisibility("Compass");
            }}
          >
            Compass Overlay
          </Button>
          <Button
            onClick={() => {
              handleMapVisibility("Continents");
            }}
          >
            Continents Overlay
          </Button>
          <Button
            onClick={() => {
              handleMapVisibility("Echoes");
            }}
          >
            Echoes Overlay
          </Button>
          <Button
            onClick={() => {
              handleMapVisibility("Kingdoms");
            }}
          >
            Kingdoms Overlay
          </Button>
          <Button
            onClick={() => {
              handleMapVisibility("Places");
            }}
          >
            Places Overlay
          </Button>
          <Button
            onClick={() => {
              handleMapVisibility("Resources");
            }}
          >
            Resources Overlay
          </Button>
          <Button
            onClick={() => {
              handleMapVisibility("Steamcart");
            }}
          >
            Steamcart Overlay
          </Button>
          <Button
            onClick={() => {
              handleMapVisibility("Trade");
            }}
          >
            Trade Overlay
          </Button>
          <Button
            onClick={() => {
              handleMapVisibility("Travel");
            }}
          >
            Travel Overlay
          </Button>
        </Space>
        <div className="relative mt-4">
          <Image
            rootClassName="absolute"
            preview={false}
            draggable={false}
            src={"./Maps/Base.png"}
            alt={"Base"}
          />
          <Image
            rootClassName="absolute invisible"
            preview={false}
            draggable={false}
            src={"./Maps/Campuses.png"}
            alt={"Campuses"}
            id={"Campuses"}
          />
          <Image
            rootClassName="absolute invisible"
            preview={false}
            draggable={false}
            src={"./Maps/Climates.png"}
            alt={"Climates"}
            id={"Climates"}
          />
          <Image
            rootClassName="absolute invisible"
            preview={false}
            draggable={false}
            src={"./Maps/Compass.png"}
            alt={"Compass"}
            id={"Compass"}
          />
          <Image
            rootClassName="absolute invisible"
            preview={false}
            draggable={false}
            src={"./Maps/Continents.png"}
            alt={"Continents"}
            id={"Continents"}
          />
          <Image
            rootClassName="absolute invisible"
            preview={false}
            draggable={false}
            src={"./Maps/Echoes.png"}
            alt={"Echoes"}
            id={"Echoes"}
          />
          <Image
            rootClassName="absolute invisible"
            preview={false}
            draggable={false}
            src={"./Maps/Kingdoms.png"}
            alt={"Kingdoms"}
            id={"Kingdoms"}
          />
          <Image
            rootClassName="absolute invisible"
            preview={false}
            draggable={false}
            src={"./Maps/Places.png"}
            alt={"Places"}
            id={"Places"}
          />
          <Image
            rootClassName="absolute invisible"
            preview={false}
            draggable={false}
            src={"./Maps/Resources.png"}
            alt={"Resources"}
            id={"Resources"}
          />
          <Image
            rootClassName="absolute invisible"
            preview={false}
            draggable={false}
            src={"./Maps/Steamcart.png"}
            alt={"Steamcart"}
            id={"Steamcart"}
          />
          <Image
            rootClassName="absolute invisible"
            preview={false}
            draggable={false}
            src={"./Maps/Trade.png"}
            alt={"Trade"}
            id={"Trade"}
          />
          <Image
            rootClassName="absolute invisible"
            preview={false}
            draggable={false}
            src={"./Maps/Travel.png"}
            alt={"Travel"}
            id={"Travel"}
          />
        </div>
      </Card>
    </section>
  );
}
