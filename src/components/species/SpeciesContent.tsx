"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SpeciesCon from "@/components/species/SpeciesCon";
import { Card, Divider, Skeleton, Space, Switch } from "antd";
import useSWR from "swr";
import { useState } from "react";
/**
 * Function to fetch and render species data based on homebrew and official toggle switches.
 * @param {boolean} brewCheck - Toggle switch for homebrew species.
 * @param {boolean} officialCheck - Toggle switch for official species.
 * @generator
 * @see SpeciesCon
 * @returns An array of rendered species components.
 */
function GetSpecies(brewCheck: boolean, officialCheck: boolean) {
  /**
   * Fetcher function for API requests.
   * @param args - RequestInfo object containing information about the request.
   * @returns Promise resolving to the parsed JSON response.
   */
  const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://gi5vwiheg0.execute-api.eu-central-1.amazonaws.com/Stage/getRaces",
    fetcher
  );
  if (error) {
    console.log(error);
    return <div>Failed to access API</div>;
  }

  interface DataType {
    description: string;
    homebrew: string;
    name: string;
    phrase: string;
  }

  if (!data) return <Skeleton active />;

  data.sort(
    (a: DataType, b: DataType) => a.name.charCodeAt(0) - b.name.charCodeAt(0)
  );

  let renderedSpecies = [];
  for (let item of data) {
    {
      renderedSpecies.push(
        <>
          <SpeciesCon
            SpeciesPic={{
              src: "./Species/" + item.name + ".png",
              alt: item.name + " image",
              phrase: item.phrase,
            }}
            DescriptionText={{
              title: item.name,
              paragraph: officialCheck
                ? item.description
                  ? item.description.split("_")
                  : ""
                : "",
              homebrew: brewCheck
                ? item.homebrew
                  ? item.homebrew.split("_")
                  : ""
                : "",
            }}
          />
          <Divider />
        </>
      );
    }
  }
  return renderedSpecies;
}

/**
 * Component for the species page, displaying breadcrumbs, toggle switches for homebrew and official species, and a card containing species data.
 * @returns The species page section with breadcrumbs, toggle switches, and species data.
 */
export default function SpeciesContent() {
  const [brew, setBrewVis] = useState(true);
  const [official, setOfficialVis] = useState(true);

  function ToggleBrew() {
    setBrewVis(!brew);
  }

  function ToggleOfficial() {
    setOfficialVis(!official);
  }

  return (
    <section>
      <GetCrumbs path={"Teothe,Species"} />

      <Space className="float-right">
        <div className="text-pink-600">
          <span className="align-bottom">Homebrew </span>
          <Switch defaultChecked onChange={ToggleBrew} />{" "}
        </div>
        <div>
          <span className="align-bottom">Official </span>
          <Switch defaultChecked onChange={ToggleOfficial} />{" "}
        </div>
      </Space>
      <Card bordered={false}>{GetSpecies(brew, official)}</Card>
    </section>
  );
}
