import GetCrumbs from "@/components/NavigationCrumb";
import RacesCon from "@/components/races/RacesCon";
import { Card, Divider } from "antd";
import useSWR from "swr";

function GetRaces() {
  const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR("http://localhost:5000/getRaces", fetcher);
  if (error) {
    console.log(error);
    return <div>Failed to access API</div>;
  }
  if (!data) return <div>Loading...</div>;

  let renderedRaces = [];
  for (let item of data) {
    {
      renderedRaces.push(
        <>
          <RacesCon
            RacePic={{
              src: "./Races/" + item[0] + ".png",
              alt: item[0],
              phrase: item[1],
            }}
            DescriptionText={{
              title: item[0],
              paragraph: item[2].split("_"),
              homebrew: item[3],
            }}
          />
          <Divider />
        </>
      );
    }
  }
  return renderedRaces;
}

export default function RacesPage() {
  return (
    <>
      <GetCrumbs path={"Pages,Races"} />
      <Card bordered={false} className="">
        {GetRaces()}
      </Card>
    </>
  );
}
