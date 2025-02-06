"use client";

import { Card, Skeleton } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import useSWR from "swr";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import SimpleContent from "@/components/SimpleCon";

interface DataType {
  key: React.Key;
  title: string;
  dataIndex: string;
  cost: string;
}

/**
 * Function to fetch and display player tool data from the API.
 * @generator
 * @returns The table displaying information about player tools.
 */
function GetTableData() {
  /**
   * Fetcher function for API requests.
   * @param args - RequestInfo object containing information about the request.
   * @returns Promise resolving to the parsed JSON response.
   */

  //dataSource, columns
  let columns: ColumnsType<DataType> = [];
  columns.push(
    {
      title: "Player Tool",
      dataIndex: "tool",
      key: "tool",
    },
    {
      title: "Proficiency Bonus",
      dataIndex: "proficiency",
      key: "proficiency",
    },
    {
      title: "Exclusive Benefits",
      dataIndex: "allows",
      key: "allows",
    },
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
    }
  );

  const data = [
    {
      tool: "Gaming Set",
      proficiency: "History, Insight, Sleight of Hand",
      cost: "Varies",
    },
    {
      proficiency: "Arcana, Investigation",
      allows: "Allows identifying gems",
      cost: "25 gp",
      tool: "Jeweler's Tools",
    },
    {
      proficiency: "History, Performance",
      allows: "Allows taking the Compose action",
      cost: "Varies",
      tool: "Musical Instruments",
    },
    {
      proficiency: "History, Medicine, Survival",
      allows: "Allows preparing adequate food",
      cost: "1 gp",
      tool: "Cook's Utensils",
    },
    {
      proficiency: "Survival",
      allows: "Allows charting the area and approximating time",
      cost: "25 gp",
      tool: "Navigator's Tools",
    },
    {
      proficiency: "History, Investigation, Perception, Stealth",
      allows: "Allows taking the Fortify action and creating temporary shelter",
      cost: "8 gp",
      tool: "Carpenter's Tools",
    },
    {
      proficiency: "Deception, Intimidation, Performance, Persuasion",
      allows: "Allows for creating disguise",
      cost: "25 gp",
      tool: "Disguise Kit",
    },
    {
      proficiency: "History, Investigation, Perception",
      allows: "Allows reconstructing",
      cost: "10 gp",
      tool: "Potter's Tools",
    },
    {
      proficiency: "Arcana, Investigation, Perception",
      allows: "Allows vehicle handling",
      cost: "Varies",
      tool: "Land & Water Vehicles",
    },
    {
      proficiency:
        "History, Investigation, Perception, Medicine, Nature, Survival",
      allows: "Allows handling poison",
      cost: "50 gp",
      tool: "Poisoner's Kit",
    },
    {
      proficiency: "Arcana, History, Investigation",
      allows: "Allows for maintaining shoes and building hidden compartments",
      cost: "5 gp",
      tool: "Cobbler's Tools",
    },
    {
      proficiency: "Arcana, History, Religion, Nature, Survival",
      allows: "Allows crafting maps",
      cost: "15 gp",
      tool: "Cartographer's Tools",
    },
    {
      proficiency: "Nature, Survival",
      allows: "Allows harvesting Cylphnia with proficiency",
      cost: "1 gp",
      tool: "Cylphniaphile's Tools",
    },
    {
      proficiency: "History, Medicine, Persuasion",
      allows: "Allows brewing beer & purified water",
      cost: "20 gp",
      tool: "Brewer's Supplies",
    },
    {
      proficiency: "Arcana, Investigation",
      allows: "Allows taking the Identify Source and Method action",
      cost: "5 gp",
      tool: "Leatherworker's Tools",
    },
    {
      proficiency: "History, Investigation, Perception",
      allows: "Allows taking the Demolition action",
      cost: "10 gp",
      tool: "Mason's Tools",
    },
    {
      proficiency: "Arcana, History, Religion, Investigation, Perception",
      allows: "Allows for painting",
      cost: "10 gp",
      tool: "Painter's Supplies",
    },
    {
      proficiency: "History, Investigation",
      allows: "Allows repair",
      cost: "50 gp",
      tool: "Tinker's Tools",
    },
    {
      proficiency: "Arcana, Investigation",
      allows: "Allows alchemical items to be crafted",
      cost: "50 gp",
      tool: "Alchemist's Supplies",
    },
    {
      proficiency: "Arcana, History, Investigation",
      allows: "Allows repair",
      cost: "20 gp",
      tool: "Smith's Tools",
    },
    {
      proficiency: "Arcana, Deception, History, Investigation",
      allows: "Allows taking the Quick Fake action, other tools can help",
      cost: "15 gp",
      tool: "Forgery Kit",
    },
    {
      proficiency: "Arcana, Investigation, Medicine, Nature, Survival",
      allows: "Allows identifying plants",
      cost: "5 gp",
      tool: "Herbalism Kit",
    },
    {
      proficiency: "Arcana, History, Investigation",
      allows: "Allows identifying weak spots",
      cost: "30 gp",
      tool: "Glassblower's Tools",
    },
    {
      proficiency: "Arcana, History",
      allows: "Allows examining maps (INT) for extra information",
      cost: "10 gp",
      tool: "Calligrapher's Supplies",
    },
    {
      proficiency: "Arcana, History, Nature",
      allows: "Allows carving and repair",
      cost: "1 gp",
      tool: "Woodcarver's Tools",
    },
    {
      proficiency: "History, Investigation, Perception",
      allows: "Allows setting or disabling traps",
      cost: "25 gp",
      tool: "Thieve's Tools",
    },
    {
      proficiency: "History, Medicine, Survival",
      allows: "Allows performing cooking tasks on Smears",
      cost: "1 gp",
      tool: "Smearatarian's Utensils",
    },
    {
      proficiency: "Arcana, History, Investigation",
      allows: "Allows crafting clothing and repair",
      cost: "1 gp",
      tool: "Weaver's Tools",
    },
  ];

  let dataSource = [];
  for (let rowData of data) {
    let item: any = {};
    item["tool"] = rowData.tool;
    item["proficiency"] = rowData.proficiency;
    item["allows"] = rowData.allows;
    item["cost"] = rowData.cost;
    dataSource.push(item);
  }
  return (
    <>
      <SimpleContent
        contentProps={{
          title: "Tools",
          text: [
            "This is a reference for player tools. Keep in mind that certain situations ask for different rolls, and certain prerequisities sometimes won't be met. Arguably, this table is good for referencing and ideas, but is not always true.",
          ],
        }}
      />
      <Table
        className="mt-4"
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        scroll={{ x: 1200 }}
      />
    </>
  );
}

/**
 * Component for the tools page, displaying breadcrumbs and a card containing table data.
 * @returns The tools page section with breadcrumbs and table data.
 */
export default function ToolsContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Tools"} />
      <Card bordered={false} className="w-full">
        {GetTableData()}
      </Card>
    </section>
  );
}
