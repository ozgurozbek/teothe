import { useState } from "react";
import { Button, Card, Image, Space } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";

export default function MapOverlayPage() {
  const [maps, setMapVis] = useState("1");
  let temp: any;

  function handleVis(data: string) {
    // This is not an array, it is an ugly substring hack
    if (!maps.includes(data)) {
      temp = maps + data;
    } else {
      temp = maps.split(data);
      temp = temp[0] + temp[1];
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
          src={"./map" + maps[i] + ".png"}
          alt={maps[i]}
        />
      );
    }
    return <div className="mt-4 h-[400px]">{mapData}</div>;
  }

  return (
    <section>
      <GetCrumbs path={"Pages,Map Overlay"} />
      <Card bordered={false} className="w-full">
        <Space wrap>
          <Button
            onClick={() => {
              handleVis("2");
            }}
          >
            Mountain Overlay
          </Button>
          <Button
            onClick={() => {
              handleVis("3");
            }}
          >
            Water Overlay
          </Button>
          <Button
            onClick={() => {
              handleVis("4");
            }}
          >
            City Overlay
          </Button>
        </Space>
        <ShowMaps />
      </Card>
    </section>
  );
}
