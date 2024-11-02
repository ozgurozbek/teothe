"use client";
import SimpleContent from "@/components/SimpleCon";
import { Card, Skeleton } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: React.Key;
  title: string;
  dataIndex: string;
  cost: string;
}

/**
 * Function to fetch and display common pricing table data.
 * @generator
 * @returns JSX element containing the common pricing table data.
 */
function GetTableData() {
  /**
   * Fetcher function for API requests.
   * @param args - RequestInfo object containing information about the request.
   * @returns Promise resolving to the parsed JSON response.
   */
  const data = [{"cost": "7 sp", "item": "Nurse"}, {"cost": "5 sp", "item": "Tinderbox"}, {"cost": "2 sp", "item": "Paper (one sheet)"}, {"cost": "5 gp", "item": "Companion, Average"}, {"cost": "1 sp", "item": "Oil (flask)"}, {"cost": "5 sp", "item": "Day's Worth of Rations"}, {"cost": "2 gp", "item": "Clothing, Traveller"}, {"cost": "1 cp", "item": "Sack"}, {"cost": "Caster level x spell level x 10 gp", "item": "Spellcasting (See spell description for additional costs. If the additional costs put the spell's total cost above 3,000 gp, that spell is not generally available. Use a spell level of 1/2 for 0-level spells to calculate the cost.)"}, {"cost": "1 gp", "item": "Scribe, text"}, {"cost": "5 sp", "item": "Clothing, Common"}, {"cost": "1 sp", "item": "Beef or Mutton, 1 lb"}, {"cost": "1 gp", "item": "Bedroll"}, {"cost": "1 gp", "item": "Laundry, magic"}, {"cost": "1 gp", "item": "Steamcart (Per hour)"}, {"cost": "5 gp", "item": "Sending Book*"}, {"cost": "5 sp", "item": "Lawyer, novice"}, {"cost": "10 gp", "item": "Lawyer, experienced"}, {"cost": "1 cp", "item": "Whetstone"}, {"cost": "5 cp", "item": "Companion, Cheap"}, {"cost": "50 pp", "item": "Platinum ore, 1 lb"}, {"cost": "10 gp", "item": "Scribe, map"}, {"cost": "8 sp", "item": "Messenger (One day's travel)"}, {"cost": "5 cp", "item": "Salt, 1 lb"}, {"cost": "3 pp", "item": "Contingency Service, suicidal (One day)"}, {"cost": "16 gp", "item": "Inn suite, 2 person"}, {"cost": "10 gp", "item": "Ink (1 ounce)"}, {"cost": "1 gp", "item": "Rope, Hempen (50 ft)"}, {"cost": "1 sp minimum", "item": "Hireling, untrained (Town crier, general laborer, maid, mourner, porter, or other menial worker. One day)"}, {"cost": "5 sp", "item": "Copper ore, 1 lb"}, {"cost": "2 cp", "item": "Bath, cold"}, {"cost": "5 sp", "item": "Salmon"}, {"cost": "15 gp", "item": "Cart"}, {"cost": "15 gp", "item": "Wine (cheap), One barrel"}, {"cost": "1 sp", "item": "Laundry"}, {"cost": "3 sp minimum", "item": "Hireling, trained (Mason, mercenary warrior, carpenter, blacksmith, cook, scribe, painter, teamster etc. One day)"}, {"cost": "25 sp", "item": "Electrum, 1 lb"}, {"cost": "2 gp", "item": "Ivory, 1 lb"}, {"cost": "2 sp - 1 gp", "item": "Bath, public"}, {"cost": "15 gp", "item": "Clothing, Fine"}, {"cost": "15 gp", "item": "Cartographer's Tools"}, {"cost": "50 gp", "item": "Spellbook"}, {"cost": "10 gp", "item": "Salmon (cleaned and salted), One barrel"}, {"cost": "2 sp", "item": "Waterskin"}, {"cost": "6 cp", "item": "Bath, hot"}, {"cost": "10 gp", "item": "Companion, Expensive"}, {"cost": "10 gp", "item": "Rope, Silk (50 ft)"}, {"cost": "1 cp", "item": "Piece of Chalk"}, {"cost": "6 sp", "item": "Contingency Service, questionable (One day)"}, {"cost": "3 gp", "item": "Cloves, 1 lb"}, {"cost": "5 gp", "item": "Silver ore, 1 lb"}, {"cost": "2 cp", "item": "Bread, loaf"}, {"cost": "50 gp", "item": "Wine (extraordinary), One barrel"}, {"cost": "50 gp", "item": "Gold ore, 1 lb"}, {"cost": "5 gp", "item": "Chronicler (One day)"}, {"cost": "1 cp", "item": "Flour, 1 lb"}, {"cost": "2 gp", "item": "Backpack"}, {"cost": "1 sp", "item": "Honey (Pint)"}, {"cost": "3 gp", "item": "Contingency Service, deadly (One day)"}, {"cost": "10 gp", "item": "A Shield"}, {"cost": "2 gp", "item": "Good Inn (One night)"}, {"cost": "1 gp", "item": "Cotton, 0.5 lb"}, {"cost": "1 sp", "item": "Craft Beer (Mug)"}, {"cost": "4 gp", "item": "Inn suite, 1 person"}, {"cost": "8 sp", "item": "Honey (Gallon)"}, {"cost": "5 sp", "item": "Butter, 1 lb"}, {"cost": "5 sp", "item": "Modest Inn (One night)"}, {"cost": "3 sp", "item": "Contingency Service, harmless (One day)"}, {"cost": "1 cp", "item": "Candle"}, {"cost": "4 cp", "item": "Beer (Mug)"}, {"cost": "1 gp", "item": "Contingency Service, hazardous (One day)"}, {"cost": "1 cp", "item": "Stuffed baked sandwich"}, {"cost": "1 cp", "item": "Road or gate toll"}, {"cost": "1 gp", "item": "Hammer"}, {"cost": "50 gp", "item": "Potion of Healing"}, {"cost": "1 gp", "item": "Doctor"}, {"cost": "1 gp", "item": "Garlic, 1 lb"}, {"cost": "3 gp", "item": "Cinnamon, 1 lb"}, {"cost": "5 gp", "item": "Mirror, Steel"}, {"cost": "2 gp", "item": "Tent, Two-Person"}, {"cost": "1 sp", "item": "Poor Inn (One night)"}, {"cost": "5 sp", "item": "Sealing wax"}, {"cost": "15 gp", "item": "Vestaments"}, {"cost": "2 gp", "item": "Pickaxe"}, {"cost": "2 cp", "item": "Coal, 1 lb"}, {"cost": "32 gp minimum", "item": "Inn suite, 4 person"}, {"cost": "10 gp", "item": "Lock, Average"}, {"cost": "3 gp", "item": "Lawyer, competent"}, {"cost": "1 cp", "item": "Torch"}, {"cost": "1 sp", "item": "Iron ore, 1 lb"}, {"cost": "5 gp", "item": "Rothe Meat (3 kg)"}, {"cost": "1 sp", "item": "4 Hours of Laborer's Work"}, {"cost": "5 sp", "item": "Treacle (Liter of Sugar Syrup)"}, {"cost": "5 sp", "item": "House Servant"}, {"cost": "15 gp", "item": "Sage, Consultant (One day)"}, {"cost": "20 gp", "item": "Beef (salted), One barrel"}, {"cost": "2 cp", "item": "Root vegetables, 1 lb"}]

  interface ResponseDataType {
    cost: string;
    item: string;
  }

  function PriceSorter(cost: string) {
    //gp sp ye göre stringi böl
    let resp = cost.split(" ");
    let multiplier = 1;
    let value = 0;

    //çarpan bulmak için 2. kısmı kullan
    switch (resp[1]) {
      case "cp":
        value = Number(resp[0]);
        break;
      case "sp":
        value = Number(resp[0]) * 10;
        break;
      case "gp":
        value = Number(resp[0]) * 100;
        break;
      case "pp":
        value = Number(resp[0]) * 1000;
        break;
      default:
        value = 999999;
        break;
    }

    //çarp sonucu döndür
    return value;
  }

  data.sort(
    (a: ResponseDataType, b: ResponseDataType) =>
      PriceSorter(a.cost) - PriceSorter(b.cost)
  );

  //dataSource, columns
  let columns: ColumnsType<DataType> | undefined = [];
  columns.push(
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
      filters: [
        {
          text: "CP",
          value: "cp",
        },
        {
          text: "SP",
          value: "sp",
        },
        {
          text: "GP",
          value: "gp",
        },
        {
          text: "PP",
          value: "pp",
        },
      ],
      width: "16%", //funny number for spellcasting entry on FHD displays :)
      filterMode: "tree",
      onFilter: (value: any, record: DataType) =>
        record.cost.split(" ")[1].startsWith(value),
    },
    {
      title: "Item",
      dataIndex: "item",
      key: "item",
    }
  );

  let dataSource = data;

  return (
    <>
      <SimpleContent
        contentProps={{
          title: "Teothe Pricing Table: Your Comprehensive D&D Item Price Resource",
          text: [
            "This is a reference for common pricing in the Teothe. Keep in mind that personal gain, state the provider is, countries, and many other things affect pricing, therefore rendering this table somewhat inaccurate.",
            "The Teothe Pricing Table serves as an essential resource for calculating mundane item prices in Dungeons & Dragons (D&D) campaigns. This extensive database features a diverse selection of items drawn from medieval Europe, various fantasy settings, and official D&D 5e content. By providing a comprehensive view of item costs, it equips players and Dungeon Masters with the necessary tools to enhance their gameplay.",
            "With the ability to filter items by category, type, and cost, the pricing table allows users to quickly access vital information about pricing in their campaigns. This functionality is particularly useful for determining daily item prices, budgeting for quests, and understanding the economic aspects of their fantasy worlds. Accurate pricing is critical for creating a realistic marketplace within any D&D setting, and the Teothe Pricing Table delivers this with precision.",
            "The table features both official D&D content and well-researched homebrew options, accommodating a wide range of campaign styles. By integrating data from historical sources alongside fantasy literature, the Teothe Pricing Table reflects the complexities of pricing in medieval economies, ensuring that players can navigate their adventures with confidence.",
            "This comprehensive tool not only simplifies the process of calculating mundane item prices but also enriches the overall D&D experience. Whether a campaign involves the purchase of basic gear, trade negotiations, or managing in-game finances, the Teothe Pricing Table provides the accurate item prices needed to elevate gameplay. With its robust selection of costs, the table is indispensable for any D&D enthusiast looking to deepen their understanding of item pricing in both official and homebrew content.  ",
          ],
        }}
      />
      <Table
        className="mt-4"
        dataSource={dataSource}
        //@ts-ignore
        columns={columns}
        pagination={false}
      />
    </>
  );
}

/**
 * Component for the pricing page, displaying breadcrumbs and a card containing pricing table data.
 * @returns The pricing page section with breadcrumbs and pricing table data.
 */
export default function PricingContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Common Pricing"} />
      <Card bordered={false} className="w-full">
        {GetTableData()}
      </Card>
    </section>
  );
}
