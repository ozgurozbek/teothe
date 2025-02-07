"use client";

import { Button, Card, Divider, Table, Space } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import { useState } from "react";
import SimpleContent from "@/components/SimpleCon";
import adultry from "@/jsons/tables/adultry.json";
import alchemy from "@/jsons/tables/alchemy.json";
import cooking from "@/jsons/tables/cooking.json";
import enhancements from "@/jsons/tables/enhancements.json";
import material from "@/jsons/tables/material.json";
import resurrection from "@/jsons/tables/resurrection.json";
import runes from "@/jsons/tables/runes.json";
import scroll from "@/jsons/tables/scroll.json";

/**
 * Function to fetch and display data for different tables.
 * @generator
 * @returns The table displaying information about the selected table.
 */
function GetTableData() {
  const [curTable, setCurTable] = useState("resurrection");
  const [displayEmpty, setDisplayEmpty] = useState(true);
  const [query, setQuery] = useState("Resurrection");

  const tables = {
    material,
    alchemy,
    resurrection,
    enhancements,
    runes,
    adultry,
    cooking,
    scroll,
  } as const;

  // Make sure that 'curTable' is a key of 'tables'
  const currentTableData = tables[curTable as keyof typeof tables];

  // If there's no data, return empty state
  if (!currentTableData) {
    return <div>No data found for this table.</div>;
  }

  function TablesNavigator() {
    return (
      <>
        <Space wrap>
          <Button
            onClick={() => {
              setDisplayEmpty(false);
              setCurTable("material");
              setQuery("Material Variants");
            }}
          >
            Material Variants
          </Button>
          <Button
            onClick={() => {
              setDisplayEmpty(false);
              setCurTable("alchemy");
              setQuery("Alchemy");
            }}
          >
            Alchemy
          </Button>
          <Button
            onClick={() => {
              setDisplayEmpty(false);
              setCurTable("resurrection");
              setQuery("Resurrection");
            }}
          >
            Resurrection
          </Button>
          <Button
            onClick={() => {
              setDisplayEmpty(false);
              setCurTable("enhancements");
              setQuery("Enhancements");
            }}
          >
            Enhancements
          </Button>
          <Button
            onClick={() => {
              setDisplayEmpty(false);
              setCurTable("runes");
              setQuery("Runes");
            }}
          >
            Runes
          </Button>
          <Button
            onClick={() => {
              setDisplayEmpty(false);
              setCurTable("adultry");
              setQuery("Adultry");
            }}
          >
            Adultry
          </Button>
          <Button
            onClick={() => {
              setDisplayEmpty(false);
              setCurTable("cooking");
              setQuery("Cooking");
            }}
          >
            Cooking
          </Button>
          <Button
            onClick={() => {
              setDisplayEmpty(false);
              setCurTable("scroll");
              setQuery("Scrolls");
            }}
          >
            Scrolls
          </Button>
        </Space>
      </>
    );
  }

  function titleCase(text: string) {
    if (!text) return ""; // Return an empty string if text is invalid (null, undefined, or empty)
    return text
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
      .join(" ");
  }

  //dataSource, columns
  const { tableDescription, tableData } = currentTableData;

  let columns = [];
  if (tableDescription?.columns) {
    for (let j = 0; j < tableDescription.columns.length; j++) {
      columns.push({
        title: titleCase(tableDescription.columns[j]),
        dataIndex: tableDescription.columns[j],
        key: tableDescription.columns[j],
      });
    }
  }

  let dataSource = [];
  for (let rowData of tableData) {
    dataSource.push(rowData);
  }
  dataSource.sort((a, b) => parseInt(a.id) - parseInt(b.id));

  return (
    <>
      <TablesNavigator />
      <Divider />
      <SimpleContent
        contentProps={{
          title: titleCase(query),
          text: [tableDescription.description],
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
 * Component for the tables page, displaying breadcrumbs and a card containing table data.
 * @returns The tables page section with breadcrumbs and table data.
 */
export default function TablesContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Tables"} />
      <Card bordered={false} className="w-full">
        {GetTableData()}
      </Card>
    </section>
  );
}
