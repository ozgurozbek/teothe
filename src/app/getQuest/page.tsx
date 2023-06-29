"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import { Card } from "antd";
import useSWR from "swr";

export default function GetQuest() {
  const fetcher = (...args: string[]) =>
    fetch(
      // ...args // use for build
      "https://cors-anywhere.herokuapp.com/" + args[0] // use for testing
    ).then((res) => res.text());
  const { data, error } = useSWR(
    "https://xeculus.pythonanywhere.com/generate",
    fetcher
  );
  if (error) {
    console.log(error);
    return <div>failed to load</div>;
  }
  if (!data) return <div>loading...</div>;
  return (
    <>
      <GetCrumbs path="Quest Generator API,Generate" />
      <Card>{data}</Card>
    </>
  );
}
