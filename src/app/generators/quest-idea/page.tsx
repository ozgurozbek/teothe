"use client";

import { Button, Card, Divider, Empty, Skeleton, Space } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import useSWR from "swr";
import { useState } from "react";
import SimpleContent from "@/components/SimpleCon";

/**
 * Updates states to use selected table
 * @generator
 * @returns Buttons(antd) wrapped by Space(antd) wrapped by <>
 */
function GetQuestIdea() {
  const [displayEmpty, setDisplayEmpty] = useState(true);
  const [innerText, setInnerText] = useState("");

  // Fetcher function to fetch data
  const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.text());

  // Handling button click to trigger data fetching
  const handleButtonClick = () => {
    // Using useSWR to fetch data with conditional fetching, could've used mutate(), but it introduces errors on render.
    const { data, error } = useSWR(
      displayEmpty ? null : "https://xeculus.pythonanywhere.com/generate", // Conditionally fetch data
      fetcher
    );

    // Handling different states - error, loading, and data available
    if (error) {
      console.error(error);
      return <div>Failed to access Quest Idea Generator API</div>;
    }
    if (!data) return <Skeleton active />;

    setInnerText(data);
    setDisplayEmpty(false);
  };

  return (
    <>
      <Space wrap>
        <Button onClick={handleButtonClick}>
          {displayEmpty ? "Generate Quest Idea" : "Generate New Quest Idea"}
        </Button>
      </Space>
      <Divider />
      {displayEmpty ? (
        <Empty />
      ) : (
        <SimpleContent
          contentProps={{ title: "Quest Idea Generator", text: [innerText] }}
        />
      )}
    </>
  );
}

// Main component rendering the page
export default function QuestIdeaGeneratorPage() {
  return (
    <section>
      {/* Breadcrumb component */}
      <GetCrumbs path={"Teothe3K,Generators,Quest Idea Generator"} />
      {/* Card component containing the table data */}
      <Card bordered={false} className="w-full">
        {GetQuestIdea()}
      </Card>
    </section>
  );
}
