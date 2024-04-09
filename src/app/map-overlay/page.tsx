"use client";

import { Button, Card, Divider, Image, Space, Tooltip } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import SimpleContent from "@/components/SimpleCon";

import {
  CheckCircleOutlined,
  CheckCircleFilled,
  ExclamationCircleOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";

/**
 * Component that manages map overlay visibility based on user interactions.
 * @returns JSX elements representing the MapOverlayPage component.
 */
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
      <GetCrumbs path={"Teothe,Map Overlay"} />
      <Card bordered={false} className="w-full min-h-[110vh]">
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
          <Button
            onClick={() => {
              handleMapVisibility("Campuses");
            }}
          >
            <span>
              Campuses <CheckCircleOutlined />
            </span>
          </Button>
          <Tooltip
            placement="bottom"
            title={
              "Bottom left has the scale for the map with a single unit displaying a day in travel pace (8hrs)"
            }
            color={"#630436"}
          >
            <Button
              onClick={() => {
                handleMapVisibility("Compass");
              }}
            >
              <span>
                Compass <CheckCircleFilled />
              </span>
            </Button>
          </Tooltip>
          <Button
            onClick={() => {
              handleMapVisibility("Continents");
            }}
          >
            <span>
              Continents <CheckCircleOutlined />
            </span>
          </Button>
          <Button
            onClick={() => {
              handleMapVisibility("Kingdoms");
            }}
          >
            <span>
              Kingdoms <CheckCircleOutlined />
            </span>
          </Button>
          <Button
            onClick={() => {
              handleMapVisibility("Places");
            }}
          >
            <span>
              Places <CheckCircleOutlined />
            </span>
          </Button>
          <Divider type="vertical" style={{ borderColor: "white" }} />
          <Button
            onClick={() => {
              handleMapVisibility("Climates");
            }}
          >
            <span>
              Climate <ExclamationCircleOutlined />
            </span>
          </Button>
          <Tooltip
            placement="bottom"
            title={
              "Fear 😱, Joy 😊, Sorrow 😔, Love 😍, Anger 😠, Hope 🥺, Anxiety 😵, Awe 😨, Desire 😳, Abandonment 😒"
            }
            color={"#630436"}
          >
            <Button
              onClick={() => {
                handleMapVisibility("Echoes");
              }}
            >
              <span>
                Emotional Echoes <ExclamationCircleFilled />
              </span>
            </Button>
          </Tooltip>
          <Tooltip
            placement="bottom"
            title={"See Map Legend for more detail"}
            color={"#630436"}
          >
            <Button
              onClick={() => {
                handleMapVisibility("Resources");
              }}
            >
              <span>
                Map Legend <ExclamationCircleFilled />
              </span>
            </Button>
          </Tooltip>
          <Button
            onClick={() => {
              handleMapVisibility("Steamcart");
            }}
          >
            <span>
              Steamcart <ExclamationCircleOutlined />
            </span>
          </Button>
          <Tooltip
            placement="bottom"
            title={
              "Red: Woven Route, Blue: Wavekeep Route, Purple: Elkian Route"
            }
            color={"#630436"}
          >
            <Button
              onClick={() => {
                handleMapVisibility("Trade");
              }}
            >
              <span>
                Trade Routes <ExclamationCircleFilled />
              </span>
            </Button>
          </Tooltip>
          <Button
            onClick={() => {
              handleMapVisibility("Travel");
            }}
          >
            <span>
              Travel Routes <ExclamationCircleOutlined />
            </span>
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
