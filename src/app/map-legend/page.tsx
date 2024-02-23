"use client"

import MapEntry from "Comp/maps/MapEntry";
import { Card, Skeleton } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import SimpleContent from "Comp/SimpleCon";
import useSWR from "swr";
import Link from "next/link";

/**
 * Fetches map resources data from the backend and feeds MapEntry
 * @see MapEntry
 * @backend fetch
 * @returns Array of MapEntry
 */
function GetMapLegend() {
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
 * Displays all map resource entries from the GetMapLegend function and provides description
 * @returns MapEntry and SimpleContent in Card(antd) in section
 */
export default function MapLegendPage() {
  return (
    <section>
      <GetCrumbs path={"Teothe3K,Map Legend"} />
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Map Legend",
            text: [
              "Resource based legend for trader campaigns, descriptions and difficulty classes for all of them.",
              "Adds new skills named Artifice and Influence. Difficulty classes are averaged out. They can change depending on the situation.",
            ],
          }}
        />
        {GetMapLegend()}
        <br/>
        <Link href={"https://ozgurozbek.github.io/dnd/MapResourcesDoc.pdf"} target="_blank">See the mechanics document here.</Link>
      </Card>
    </section>
  );
}
