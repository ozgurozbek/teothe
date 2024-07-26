"use client";

import SimpleContent from "@/components/SimpleCon";
import {
  Card,
  MenuProps,
  InputNumber,
  Dropdown,
  Space,
  Button,
  Divider,
} from "antd";
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { DoubleRightOutlined } from "@ant-design/icons";
import GetCrumbs from "../NavigationCrumb";

/**
 * Component for easily calculating map resources. Allows users to input and get weight and prices of resources.
 * @generator
 * @returns The calendar note update page with input fields and buttons for updating and fetching data.
 */
export default function CalculateTradeContent() {
  const [d12Result, setd12Result] = useState<number>(0);
  const [selectedResource, setSelectedResource] = useState("Select Resource");

  const handleD12Click = (value: number) => {
    setd12Result(value);
  };

  const handleResourceClick: MenuProps["onClick"] = (e) => {
    setSelectedResource(e.key);
  };

  const items: MenuProps["items"] = [
    {
      label: "Wine",
      key: "Wine",
    },
    {
      label: "Spices",
      key: "Spices",
    },
    {
      label: "Deer",
      key: "Deer",
    },
    {
      label: "Crabs",
      key: "Crabs",
    },
    {
      label: "Skyforge Metal",
      key: "Skyforge Metal",
    },
    {
      label: "Truffles",
      key: "Truffles",
    },
    {
      label: "Diamonds",
      key: "Diamonds",
    },
    {
      label: "Cosmetics",
      key: "Cosmetics",
    },
    {
      label: "Honey",
      key: "Honey",
    },
    {
      label: "Silk",
      key: "Silk",
    },
    {
      label: "Ivory",
      key: "Ivory",
    },
    {
      label: "Bananas",
      key: "Bananas",
    },
    {
      label: "Whales",
      key: "Whales",
    },
    {
      label: "Antique",
      key: "Antique",
    },
    {
      label: "Sheep",
      key: "Sheep",
    },
    {
      label: "Cinnamon",
      key: "Cinnamon",
    },
    {
      label: "Amber",
      key: "Amber",
    },
    {
      label: "Turtles",
      key: "Turtles",
    },
    {
      label: "Dyes",
      key: "Dyes",
    },
    {
      label: "Sugar",
      key: "Sugar",
    },
    {
      label: "Incense",
      key: "Incense",
    },
    {
      label: "Tea",
      key: "Tea",
    },
    {
      label: "Cloves",
      key: "Cloves",
    },
    {
      label: "Rice",
      key: "Rice",
    },
    {
      label: "Cocoa",
      key: "Cocoa",
    },
    {
      label: "Coffee",
      key: "Coffee",
    },
    {
      label: "Iron",
      key: "Iron",
    },
    {
      label: "Gold Ore",
      key: "Gold Ore",
    },
    {
      label: "Jeans",
      key: "Jeans",
    },
    {
      label: "Cattle",
      key: "Cattle",
    },
    {
      label: "Silver",
      key: "Silver",
    },
    {
      label: "Red Corn",
      key: "Red Corn",
    },
    {
      label: "Wheat",
      key: "Wheat",
    },
    {
      label: "Tobacco",
      key: "Tobacco",
    },
    {
      label: "Perfume",
      key: "Perfume",
    },
    {
      label: "Salt",
      key: "Salt",
    },
    {
      label: "Horses",
      key: "Horses",
    },
    {
      label: "Pearls",
      key: "Pearls",
    },
    {
      label: "Olives",
      key: "Olives",
    },
    {
      label: "Coal",
      key: "Coal",
    },
    {
      label: "Marble",
      key: "Marble",
    },
    {
      label: "Frostforge Steel",
      key: "Frostforge Steel",
    },
    {
      label: "Copper",
      key: "Copper",
    },
    {
      label: "Stone",
      key: "Stone",
    },
    {
      label: "Fish",
      key: "Fish",
    },
    {
      label: "Cotton",
      key: "Cotton",
    },
    {
      label: "Toys",
      key: "Toys",
    },
    {
      label: "Citrus",
      key: "Citrus",
    },
    {
      label: "Furs",
      key: "Furs",
    },
  ];

  // These are in copper pieces. Calculator formats to be more readable.
  const resourceValues: { value: number; key: string }[] = [
    {
      value: 1200, //cheap barrel of wine from Teothe website
      key: "Wine",
    },
    {
      value: 480, //a week of worker's salary per sack, which is 6sp*8 according to medieval europe prices, although this is a mix.
      key: "Spices",
    },
    {
      value: 100, //market price of a deer is about 1800$, and meat with furs would cost about 4.5gp in D&D. Since this is very common and easy to get I cut to 100$, which is 1gp
      key: "Deer",
    },
    {
      value: 55, //its very common and cheap, with some alchemical use. 4sp per crab, with some alchemy I go with 5sp 5cp
      key: "Crabs",
    },
    {
      value: 5000000, //it's basically a legendary upgrade to a weapon. so it should be around 50k gp, since it has to be cheaper compared to RAW
      key: "Skyforge Metal",
    },
    {
      value: 480, //compared to medieval europe wine, if a bottle of wine was 15 truffles are 120 per lb. Therefore, its 4x the price of wine. Cut 10x for balance
      key: "Truffles",
    },
    {
      value: 26600, //large diamond is 500gp, small is 100gp. we expect to get useful mid range diamonds, so 266gp ish.
      key: "Diamonds",
    },
    {
      value: 73, //Church of Veri and Vihi sell these basically printing them. salves balms and perfume make the most totaling to 7 pence in medieval europe. 7 pence is about 1 cp. but cosmetics are luxury so should be around 7.3sp per lb. since hard to get too.
      key: "Cosmetics",
    },
    {
      value: 80, //Artificers can basically print these. 1 gallon is 8sp according to Teothe.
      key: "Honey",
    },
    {
      value: 500, //silk rope is 10gp per 50ft. making rope should cost but its nowhere near a kg. Maybe multiply by 2.5? Still not processed so cut 5x?
      key: "Silk",
    },
    // Got a fair base, so I'll populate according to difficulty class.
    {
      value: 222,
      key: "Ivory",
    },
    {
      value: 180,
      key: "Bananas",
    },
    {
      value: 300,
      key: "Whales",
    },
    {
      value: 4812,
      key: "Antique",
    },
    {
      value: 100,
      key: "Sheep",
    },
    {
      value: 460,
      key: "Cinnamon",
    },
    {
      value: 220,
      key: "Amber",
    },
    {
      value: 210,
      key: "Turtles",
    },
    {
      value: 560,
      key: "Dyes",
    },
    {
      value: 450,
      key: "Sugar",
    },
    {
      value: 1000,
      key: "Incense",
    },
    {
      value: 174,
      key: "Tea",
    },
    {
      value: 300,
      key: "Cloves",
    },
    {
      value: 144,
      key: "Rice",
    },
    {
      value: 427,
      key: "Cocoa",
    },
    {
      value: 427,
      key: "Coffee",
    },
    {
      value: 10,
      key: "Iron",
    },
    {
      value: 5000,
      key: "Gold Ore",
    },
    {
      value: 1850, //funny. common clothes are 5sp fine are 15gp. These are unique luxury so fine. 18.5gp should do
      key: "Jeans",
    },
    {
      value: 100,
      key: "Cattle",
    },
    {
      value: 500,
      key: "Silver",
    },
    {
      value: 3,
      key: "Red Corn",
    },
    {
      value: 1,
      key: "Wheat",
    },
    {
      value: 501,
      key: "Tobacco",
    },
    {
      value: 63, //deduct perfume from cosmetics entry
      key: "Perfume",
    },
    {
      value: 360,
      key: "Salt",
    },
    {
      value: 5000, //50gp in phb, for profit keeping it same since calculator basically doubles
      key: "Horses",
    },
    {
      value: 500,
      key: "Pearls",
    },
    {
      value: 460,
      key: "Olives",
    },
    {
      value: 2,
      key: "Coal",
    },
    {
      value: 460,
      key: "Marble",
    },
    {
      value: 450000, //about 5k since rare
      key: "Frostforge Steel",
    },
    {
      value: 50,
      key: "Copper",
    },
    {
      value: 10,
      key: "Stone",
    },
    {
      value: 80, //no fur
      key: "Fish",
    },
    {
      value: 420,
      key: "Cotton",
    },
    {
      value: 560,
      key: "Toys",
    },
    {
      value: 460,
      key: "Citrus",
    },
    {
      value: 400, //Already included in deer, sheep, cattle. I take it this is luxury, so quad.
      key: "Furs",
    },
  ];

  const resourceProps = {
    items,
    onClick: handleResourceClick,
  };

  function splitCurrency(value: number) {
    if (value == 0) {
      return "nothing";
    }

    let pp = Math.floor(value / 1000); // Calculate platinum pieces
    value %= 1000; // Get the remainder

    let gp = Math.floor(value / 100); // Calculate gold pieces
    value %= 100; // Get the remainder

    let sp = Math.floor(value / 10); // Calculate silver pieces
    value %= 10; // Get the remainder

    let cp = value; // The remainder is copper pieces

    let result = [];
    if (pp > 0) result.push(pp + "pp");
    if (gp > 0) result.push(gp + "gp");
    if (sp > 0) result.push(sp + "sp");
    if (cp > 0) result.push(cp + "cp");

    return result.join(" ");
  }

  const selectedResourceValue =
    resourceValues.find((resource) => resource.key === selectedResource)
      ?.value || 0;

  return (
    <section>
      <GetCrumbs path={"Teothe,Calculate Trade"} />
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Map Resources Trade Calculator",
            text: [
              "There is external information for this section to work, provided at the Teothe Website under map resources. Other skills such as Arcana or Constitution represented on the Map Resources Table. They work as presented in SRD, rules as written, and only provide a check or a bonus for research checks. You need to pass these checks to acquire what it represents.",
              "Mining: You need Athletics with a Pickaxe to mine materials that are available on the map. These include some Common, Strategic and Luxury materials. Proficiency with Jeweler’s tools or Mason’s tools can provide your Athletics check with additional proficiency. Upon succeeding the DC, roll a D12 for the amount of kg you manage to find and acquire in an hour, if it is not a single item. For example, mining Iron (Strategic) requires a DC18 Athletics check with Smith’s Tools. When you succeed you make a D12 roll to determine how much you’ve mined. In 8 hours with maximum efficiency without failing any checks you’ll collect 211lb of iron ore, which is estimated to be 21gp according to Teothe pricing.",
              "Farming: You need to make a Nature skill check with appropriate common tools to properly tile or harvest the land that is presented on the map. These include some Common and Luxury materials. You also need a fair share of information on farming represented by how efficient you are. Upon succeeding in the DC and managing to raise the crops, roll a D12 for grains, a D8 for fruits and vegetables, and a D6 for unique ones. This determines the amount of lbs you’ll harvest. A common small-plot farmer will make around 250GP/year ignoring their expenses. For example harvesting Wheat (Common) requires a DC12 Nature check with appropriate tools. When you succeed you make a D12 roll to determine how much you’ve harvested since Wheat is a grain, and not a unique one. In 8 hours with maximum efficiency without failing any checks you’ll harvest ~211lbs of wheat, which is estimated to be 211cp when sold as flour according to Teothe pricing.",
              "Make sure when selling across the borders to add the +10% on the regions that receive that resource and don't have it in their lands.",
            ],
          }}
        />
        <Space>
          <Button href="/map-overlay">
            <span>
              See the Teothe Map <DoubleRightOutlined />
            </span>
          </Button>
          <Button href="/map-legend">
            <span>
              See Map Legends <DoubleRightOutlined />
            </span>
          </Button>
        </Space>
        <Divider />
        <Space size={4} wrap={true}>
          <InputNumber
            min={0}
            defaultValue={0}
            onChange={(x) => {
              if (x != null) {
                handleD12Click(x);
              }
            }}
            addonAfter="kgs or units"
            style={{ width: "12rem" }}
          />{" "}
          of
          <Dropdown
            menu={resourceProps}
            overlayClassName={"max-h-64 overflow-auto"}
          >
            <Button className="w-full">
              <Space>
                {selectedResource}
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          equals {Math.floor(d12Result * 2.2)} lbs (if not a single unit), which
          is worth{" "}
          {splitCurrency(Math.floor(d12Result * 2.2 * selectedResourceValue))}{" "}
          rounded down.
        </Space>
      </Card>
    </section>
  );
}
