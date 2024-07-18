"use client";

import MapEntry from "Comp/maps/MapEntry";
import { Button, Card, Skeleton, Space } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import SimpleContent from "Comp/SimpleCon";
import useSWR from "swr";
import { DoubleRightOutlined } from "@ant-design/icons";
/**
 * Component to get and render the map legend entries.
 * @generator
 * @see MapEntry
 * @returns JSX elements representing the map legend entries.
 */
function GetMapLegend() {
  /**
   * Fetcher function for API requests.
   * @param args - RequestInfo object containing information about the request.
   * @returns Promise resolving to the parsed JSON response.
   */
  const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://gi5vwiheg0.execute-api.eu-central-1.amazonaws.com/Stage/getMapRes",
    fetcher
  );
  if (error) {
    console.log(error);
    return <div>Failed to access API</div>;
  }
  if (!data) return <Skeleton active />;

  let renderedMapRes = [];
  for (let item of data) {
    renderedMapRes.push(
      //name type check image
      <MapEntry
        imageSrc={"./Maps/Legends/" + item.name + ".png"}
        textProps={{
          name: item.name,
          rarity: item.type,
          check: item.dice,
        }}
      />
    );
  }
  return renderedMapRes;
}

/**
 * Component that asynchronously fetches map legend data from an API and renders map legend entries.
 * @returns An array of JSX elements representing map legend entries.
 */
export default function MapLegendContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Map Legend"} />
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Map Legend",
            text: [
              "Resource based legend for trader campaigns, descriptions and difficulty classes for all of them. These valuables can be found across Teothe.",
              "Adds new skills named Artifice and Influence. Difficulty classes are averaged out. They can change depending on the situation and in where you are in Teothe.",
            ],
          }}
        />
        {GetMapLegend()}
        <br />
        <Space>
          <Button target="_blank" href="./Trading_Doc.pdf">
            <span>
              Teothe Map Resources Supplement Document <DoubleRightOutlined />
            </span>
          </Button>
          <Button href="/calculate-trade">
            <span>
              Teothe Map Resources Trade Calculator <DoubleRightOutlined />
            </span>
          </Button>
        </Space>
      </Card>
    </section>
  );
}
