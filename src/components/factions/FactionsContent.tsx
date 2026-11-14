"use client";

import { Card, Col, Collapse, Divider, Row, Typography } from "antd";
import { Column } from "@ant-design/plots";
import alignmentJSON from "@/jsons/factions/alignment.json";
import Faction from "@/components/factions/Factions";
import GetCrumbs from "Comp/NavigationCrumb";
import SimpleContent from "Comp/SimpleCon";
import { factionsData } from "@/lib/factions";

const { Title } = Typography;

// Shows all factions in one layout
function AllFactions() {
  const sortedData = [...factionsData].sort((a, b) =>
    a.factionType.localeCompare(b.factionType),
  );

  return (
    <Row gutter={[16, 16]}>
      {sortedData.map((item) => (
        <Col
          key={item.factionKey}
          xs={24}
          sm={24}
          md={12}
          lg={8}
          xl={8}
          xxl={6}
        >
          <Faction
            imageSrc={`./Factions/${item.factionImageName || item.factionName}.png`}
            typeImageSrc={`./Icons/FactionTypes/${item.factionType}.png`}
            descriptionProps={item}
          />
        </Col>
      ))}
    </Row>
  );
}

// Page component
export default function FactionsContent() {
  // Prepare chart data by summing alignment values across all factions
  const alignmentKeyMap: Record<string, string> = {
    good: "Good",
    civil: "Civil",
    active: "Active",
    lawful: "Lawful",
    pragmatic: "Pragmatic",
    reformist: "Reformist",
    evil: "Evil",
    wild: "Wild",
    reactive: "Reactive",
    chaotic: "Chaotic",
    precise: "Precise",
    traditional: "Traditional",
  };

  const alignmentKeys = Object.keys(alignmentKeyMap);
  const chartData = alignmentKeys.map((k, i) => ({
    alignment: alignmentKeyMap[k],
    value: Object.entries(
      alignmentJSON as Record<string, Record<string, number>>,
    ).reduce(
      (sum, [, factionAlignment]) => sum + (Number(factionAlignment[k]) || 0),
      0,
    ), // first 6 columns use #630436, remaining 6 use #30011a
    color: i < 6 ? "#630436" : "#30011a",
  }));

  const columnConfig = {
    data: chartData,
    xField: "alignment",
    yField: "value",
    // ensure columns use the color provided on each data item
    colorField: "color",
    // provide both colors so the library's color scale can pick them
    scale: { color: { range: ["#630436", "#30011a"] } },
    columnStyle: { fill: "#630436", stroke: "#630436" },
    xAxis: { label: { autoRotate: false } },
    // Use top labels ("middle" can be unsupported in some plot versions)
    label: { position: "top" as const, style: { fill: "#ffffff" } },
    meta: { value: { alias: "Total" } },
    interactions: [{ type: "active-region" }],
    // hide legend to match AlignmentRadar styling
    legend: false,
    theme: {
      type: "dark",
      components: {
        axis: {
          common: {
            label: { style: { fill: "#ffffff" } },
            title: { style: { fill: "#ffffff" } },
          },
        },
        legend: { common: { itemName: { style: { fill: "#ffffff" } } } },
        // tooltip: { domStyles: { 'g2-tooltip': { color: '#ffffff' } } },
      },
    },
  };
  return (
    <section>
      <GetCrumbs path="Teothe,Factions" />
      <Card variant="outlined" className="w-full">
        <SimpleContent
          contentProps={{
            title: "Factions of Teothe",
            text: ["An overview of the various factions in the world of Teothe."],
          }}
        />
        <Collapse
          items={[
            { key: '1', label: 'Radar axis descriptions', children: <section>
              <p><b>Good:</b> Acts with intent to reduce harm and improve others&apos; lives, even at personal cost.</p>
              <p><b>Civil:</b> Respects social norms, cooperation, and shared responsibility to keep society functioning.</p>
              <p><b>Active:</b> Initiates change rather than waiting; believes action is better than inaction.</p>
              <p><b>Lawful:</b> Values rules, structure, and consistency; order is seen as the foundation of stability.</p>
              <p><b>Pragmatic:</b> Chooses what works over what is ideal; results matter more than principles.</p>
              <p><b>Reformist:</b> Pushes for reform and adaptation; views change as necessary and generally beneficial.</p>
              <p><b>Evil:</b> Willing to cause harm or suffering to achieve goals, with little regard for others.</p>
              <p><b>Wild:</b> Driven by instinct, impulse, or nature; resists control and imposed structure.</p>
              <p><b>Reactive:</b> Responds to events rather than planning ahead; shaped by circumstance and pressure.</p>
              <p><b>Chaotic:</b> Rejects order and predictability; values freedom, disruption, or personal expression.</p>
              <p><b>Precise:</b> Demands precision and high standards; flaws are problems to be eliminated, not tolerated.</p>
              <p><b>Traditional:</b> Defends established customs and inherited systems; trusts what has endured over time.</p>
            </section> },
            { key: '2', label: 'How to read the charts?', children: <section>
              <p><b>Radar:</b> The axes on this chart represent independent, non-exclusive tendencies of a faction. A high score on one axis does not negate others. For example, a faction with a score of 8 in &quot;Good&quot; can still have a score of 3 in &quot;Evil&quot;. This means the faction strongly embodies good traits while also expressing some evil tendencies.</p>
              <p><b>Column:</b> This chart shows the combined scores of all factions. It provides a reference point for the overall balance of the setting and can be used to align new factions or characters with the existing landscape.</p>
              </section> },
            { key: '3', label: 'Faction alignment chart', children: <div style={{ minHeight: 320 }}><Column {...columnConfig} /></div> },
          ]}
        />
        <Divider />
        <Title level={2}>Common Factions</Title>
        <AllFactions />
      </Card>
    </section>
  );
}
