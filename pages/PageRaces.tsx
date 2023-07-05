import GetCrumbs from "@/components/NavigationCrumb";
import RacesCon from "@/components/races/RacesCon";
import { Card, Divider, Switch } from "antd";
import useSWR from "swr";
import { useState } from "react";

function GetRaces(brewCheck: boolean) {
  const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR("http://localhost:5000/getRaces", fetcher);
  if (error) {
    console.log(error);
    return <div>Failed to access API</div>;
  }
  if (!data) return <div>Loading...</div>;

  let renderedRaces = [];
  for (let item of data) {
    {
      renderedRaces.push(
        <>
          <RacesCon
            RacePic={{
              src: "./Races/" + item[0] + ".png",
              alt: item[0] + "image",
              phrase: item[1],
            }}
            DescriptionText={{
              title: item[0],
              paragraph: item[2].split("_"),
              homebrew: brewCheck ? item[3].split("_") : "",
            }}
          />
          <Divider />
        </>
      );
    }
  }
  return renderedRaces;
}

export default function RacesPage() {
  const [brew, setBrewVis] = useState(true);

  function ShowBrew() {
    setBrewVis(!brew);
  }

  return (
    <>
      <GetCrumbs path={"Teothe3K,Races"} />
      <div className="float-right text-pink-600">
        <span className="align-bottom">Homebrew </span>
        <Switch defaultChecked className="bg-[#630436]" onChange={ShowBrew} />
      </div>
      <Card bordered={false}>{GetRaces(brew)}</Card>
    </>
  );
}
