import GetCrumbs from "@/components/NavigationCrumb";
import SimpleContent from "@/components/SimpleCon";
import { Card, Divider } from "antd";
import useSWR from "swr";

function GetHomebrews(category: string) {
  const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR("http://localhost:5000/getHomebrews", fetcher);
  if (error) {
    console.log(error);
    return <div>Failed to access API</div>;
  }
  if (!data) return <div>Loading...</div>;

  let renderedEntries = [];
  let first: boolean = true;
  for (let item of data) {
    if (item[0] === category) {
      if (first) {
        renderedEntries.push(
          <li className="hover:bg-[#630436] py-4">{item[1]}</li>
        );
        first = false;
      } else {
        renderedEntries.push(
          <li className="hover:bg-[#630436] py-4 border-t border-[#e5e7eb]">
            {item[1]}
          </li>
        );
      }
    }
  }
  return renderedEntries;
}

export default function HomebrewsPage() {
  return (
    <section>
      <GetCrumbs path={"Pages,Homebrews"} />
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
