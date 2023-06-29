import MapEntry from "Comp/maps/MapEntry";
import { Card } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import SimpleContent from "Comp/SimpleCon";
import useSWR from "swr";

function GetMapLegend() {
  const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR("http://localhost:5000/getMapRes", fetcher);
  if (error) {
    console.log(error);
    return <div>Failed to access API</div>;
  }
  if (!data) return <div>Loading...</div>;

  let renderedMapRes = [];
  for (let item of data) {
    renderedMapRes.push(
      //name type check image
      <MapEntry
        imageSrc={item[3]}
        textProps={{
          name: item[0],
          rarity: item[1],
          check: item[2],
        }}
      />
    );
  }
  return renderedMapRes;
}

export default function MapLegendPage() {
  return (
    <section>
      <GetCrumbs path={"Pages,Deities"} />
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
      </Card>
    </section>
  );
}
