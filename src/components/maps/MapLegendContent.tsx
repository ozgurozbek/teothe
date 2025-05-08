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
  const data = [
    {
      name: "Wine",
      dice: "DC16 Nature with Brewer's Supplies",
      type: "Luxury",
    },
    {
      name: "Spices",
      dice: "DC16 Artifice with Herbalism Kit",
      type: "Luxury",
    },
    {
      name: "Deer",
      dice: "DC12 Animal Handling with Thieve's Tools",
      type: "Common",
    },
    { name: "Crabs", dice: "DC12 Animal Handling", type: "Common" },
    { name: "Phosite", dice: "-", type: "Unique" },
    {
      name: "Skyforge Metal",
      dice: "DC20 Athletics, 20 Intelligence Dwarf requirement",
      type: "Unique",
    },
    {
      name: "Truffles",
      dice: "DC25 Nature with Cook's Utensils",
      type: "Luxury",
    },
    {
      name: "Diamonds",
      dice: "DC30 Athletics with Jeweler's Tools",
      type: "Luxury",
    },
    {
      name: "Cosmetics",
      dice: "DC20 Arcana, or DC16 Artifice with Glassblower's Tools",
      type: "Luxury",
    },
    {
      name: "Honey",
      dice: "DC20 Animal Handling with Brewer's Supplies",
      type: "Luxury",
    },
    { name: "Silk", dice: "DC20 Artifice with Weaver's Tools", type: "Luxury" },
    { name: "Ivory", dice: "DC24 Animal Handling", type: "Luxury" },
    {
      name: "Bananas",
      dice: "DC12 Nature with appropriate tools",
      type: "Common",
    },
    {
      name: "Whales",
      dice: "DC30 Animal Handling with Navigator's Tools",
      type: "Luxury",
    },
    {
      name: "Antique",
      dice: "DC20 History with Mason's Tools",
      type: "Artifact",
    },
    { name: "Demonic", dice: "-", type: "Unique" },
    { name: "Sheep", dice: "DC12 Animal Handling", type: "Common" },
    {
      name: "Cinnamon",
      dice: "DC20 Nature with Herbalism Kit",
      type: "Luxury",
    },
    {
      name: "Amber",
      dice: "DC24 Athletics with Jeweler's Tools",
      type: "Luxury",
    },
    {
      name: "Turtles",
      dice: "DC20 Animal Handling with appropriate tools",
      type: "Luxury",
    },
    {
      name: "Dyes",
      dice: "DC18 Religion with Painter's Supplies",
      type: "Luxury",
    },
    { name: "Sugar", dice: "DC16 Artifice", type: "Luxury" },
    {
      name: "Incense",
      dice: "DC14 Artifice with Calligrapher's Supplies",
      type: "Luxury",
    },
    { name: "Tea", dice: "DC12 Nature with Herbalism Kit", type: "Luxury" },
    { name: "Cloves", dice: "DC25 Nature with Herbalism Kit", type: "Luxury" },
    {
      name: "Rice",
      dice: "DC12 Nature with appropriate tools",
      type: "Common",
    },
    { name: "Shipwreck", dice: "-", type: "Artifact" },
    {
      name: "Cocoa",
      dice: "DC25 Nature with appropriate tools",
      type: "Luxury",
    },
    {
      name: "Coffee",
      dice: "DC25 Nature with Woodcarver's Tools",
      type: "Luxury",
    },
    {
      name: "Iron",
      dice: "DC18 Athletics with Smith's Tools",
      type: "Strategic",
    },
    {
      name: "Runes",
      dice: "DC30 Intelligence with Calligrapher's Supplies",
      type: "Unique",
    },
    { name: "Gold Ore", dice: "DC18 Athletics with a pickaxe", type: "Luxury" },
    {
      name: "Jeans",
      dice: "DC18 Artifice with Weaver's Tools",
      type: "Luxury",
    },
    { name: "Cattle", dice: "DC12 Survival", type: "Common" },
    { name: "Silver", dice: "DC18 Athletics with a pickaxe", type: "Luxury" },
    {
      name: "Red Corn",
      dice: "DC12 Nature with appropriate tools",
      type: "Common",
    },
    {
      name: "Wheat",
      dice: "DC12 Nature with appropriate tools",
      type: "Common",
    },
    { name: "Hexed", dice: "-", type: "Unique" },
    {
      name: "Tobacco",
      dice: "DC20 Artifice with Herbalism Kit",
      type: "Luxury",
    },
    { name: "Aluminum", dice: "-", type: "Strategic" },
    {
      name: "Perfume",
      dice: "DC20 Artifice, or DC16 Arcana with Tinker's Tools",
      type: "Luxury",
    },
    {
      name: "Salt",
      dice: "DC12 Nature with Brewer's Supplies",
      type: "Luxury",
    },
    { name: "Horses", dice: "DC18 Animal Handling", type: "Strategic" },
    { name: "Weave Line", dice: "DC20 Constitution to Use", type: "Artifact" },
    {
      name: "Pearls",
      dice: "DC20 Artifice with Jeweler's Tools",
      type: "Luxury",
    },
    {
      name: "Olives",
      dice: "DC20 Nature with appropriate tools",
      type: "Luxury",
    },
    {
      name: "Coal",
      dice: "DC10 Athletics with a Pickaxe or Mining Gauntlets",
      type: "Strategic",
    },
    {
      name: "Marble",
      dice: "DC20 Athletics with Mining Gloves",
      type: "Luxury",
    },
    {
      name: "Frostforge Steel",
      dice: "DC20 Athletics, 20 Constitution Dwarf requirement",
      type: "Unique",
    },
    { name: "Copper", dice: "DC12 Athletics with a Pickaxe", type: "Common" },
    {
      name: "Stone",
      dice: "DC10 Athletics with a Pickaxe or Mining Gauntlets",
      type: "Common",
    },
    { name: "Fish", dice: "DC12 Animal Handling", type: "Common" },
    { name: "Cotton", dice: "DC20 Nature with Weaver's Tools", type: "Luxury" },
    { name: "Toys", dice: "DC18 Artifice", type: "Luxury" },
    {
      name: "Citrus",
      dice: "DC20 Nature with appropriate tools",
      type: "Luxury",
    },
    {
      name: "Furs",
      dice: "DC20 Animal Handling with Leatherworker's Tools",
      type: "Luxury",
    },
  ];

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
        <Space size={[8,16]} wrap>
          <Button target="_blank" href="./Trading_Doc.pdf">
            <span>
              Teothe Map Resources Supplement <DoubleRightOutlined />
            </span>
          </Button>
          <Button href="/calculate-trade">
            <span>
              Teothe Map Resources Trade Calculator <DoubleRightOutlined />
            </span>
          </Button>
          <Button href="https://civilization.fandom.com/wiki/Category:Resource_icons_(Civ6)" target="_blank">
            <span>
              Resource Icons <DoubleRightOutlined />
            </span>
          </Button>
        </Space>
      </Card>
    </section>
  );
}
