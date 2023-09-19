import GetCrumbs from "@/components/NavigationCrumb";
import RacesCon from "@/components/races/RacesCon";
import { Card, Divider, Skeleton, Space, Switch } from "antd";
import useSWR from "swr";
import { useState } from "react";

/**
 * Fetches races data from the backend and uses local images
 * @backend fetch
 * @param brewCheck The state that controls whether homebrew content is turned on or off
 * @param officialCheck The state that controls whether official content is turned on or off
 * @returns RacesCon and Divider(antd) wrapped with <> 
 */
function GetRaces(brewCheck: boolean, officialCheck: boolean) {
  const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://teothe.pythonanywhere.com/getRaces",
    fetcher
  );
  if (error) {
    console.log(error);
    return <div>Failed to access API</div>;
  }
  if (!data) return <Skeleton active />;

  let renderedRaces = [];
  for (let item of data) {
    {
      renderedRaces.push(
        <>
          <RacesCon
            RacePic={{
              src: "./Races/" + item[0] + ".png",
              alt: item[0] + " image",
              phrase: item[1],
            }}
            DescriptionText={{
              title: item[0],
              paragraph: officialCheck ? item[2].split("_") : "",
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

/**
 * Gathers every race and displays image, information and homebrew in a card. Homebrew is also controlled by a state that is reversed in the switch.
 * @returns GetCrumbs, div > Switch(antd), Card(antd)
 */
export default function RacesPage() {
  const [brew, setBrewVis] = useState(true);
  const [official, setOfficialVis] = useState(true);

  function ToggleBrew() {
    setBrewVis(!brew);
  }

  function ToggleOfficial() {
    setOfficialVis(!official);
  }

  return (
    <>
      <GetCrumbs path={"Teothe3K,Races"} />
      
      <Space className="float-right">
      <div className="text-pink-600">
        <span className="align-bottom">Homebrew </span>
        <Switch defaultChecked onChange={ToggleBrew} />
        {" "}
      </div>
      <div>
        <span className="align-bottom">Official </span>
        <Switch defaultChecked onChange={ToggleOfficial} />
        {" "}
      </div></Space>
      <Card bordered={false}>{GetRaces(brew, official)}</Card>
    </>
  );
}