async function getData() {
  let data = await fetch("https://xeculus.pythonanywhere.com/generate", {
    cache: "no-store",
  });
  return data.text();
}

export default async function GetQuest() {
  const data = await getData();
  return <div>{data}</div>;
}

/*
import GetCrumbs from "@/components/NavigationCrumb";
import { Card } from "antd";

async function getData() {
  let data = await fetch("https://xeculus.pythonanywhere.com/generate", {
    cache: "no-store",
  });
  return data.text();
}

export default async function GetQuest() {
  const data = await getData();
  return (
    <>
      <GetCrumbs path="Quest Generator API,Generate" />
      <Card>{data}</Card>
    </>
  );
}
*/
