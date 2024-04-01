"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleContent from "@/components/SimpleCon";
import { Card, Divider, Skeleton } from "antd";
import useSWR from "swr";

/**
 * Function to get and render homebrew entries based on the specified category.
 * @param category - The category of homebrew entries to fetch.
 * @generator
 * @returns Array of JSX elements representing the homebrew entries.
 */
function GetHomebrews(category: string) {
  /**
   * Fetcher function for API requests.
   * @param args - RequestInfo object containing information about the request.
   * @returns Promise resolving to the parsed JSON response.
   */
  const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://gi5vwiheg0.execute-api.eu-central-1.amazonaws.com/Stage/getHomebrews",
    fetcher
  );
  if (error) {
    console.log(error);
    return <div>Failed to access API</div>;
  }
  if (!data) return <Skeleton active />;

  let renderedEntries = [];
  let first: boolean = true;
  for (let item of data) {
    if (item.tag === category) {
      if (first) {
        renderedEntries.push(
          <li className="hover:bg-[#630436] py-4">{item.description}</li>
        );
        first = false;
      } else {
        renderedEntries.push(
          <li className="hover:bg-[#630436] py-4 border-t border-[#33373b]">
            {item.description}
          </li>
        );
      }
    }
  }
  return renderedEntries;
}

/**
 * Displays the list elements like other Table(antd) elements, and provides categories
 * @returns SimpleContent and response from GetHomebrews wrapped by Card(antd) in section
 */
export default function HomebrewsPage() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Homebrews"} />
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Character",
          }}
        />
        <ul>{GetHomebrews("Character")}</ul>
        <Divider />
        <SimpleContent
          contentProps={{
            title: "General",
          }}
        />
        <ul>{GetHomebrews("General")}</ul>
        <Divider />
        <SimpleContent
          contentProps={{
            title: "Social",
          }}
        />
        <ul>{GetHomebrews("Social")}</ul>
        <Divider />
        <SimpleContent
          contentProps={{
            title: "Combat",
          }}
        />
        <ul>{GetHomebrews("Combat")}</ul>
      </Card>
    </section>
  );
}
