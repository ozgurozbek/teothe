import { Card, Divider } from "antd";
import Deity from "Comp/commonlore/Deities";
import GetCrumbs from "Comp/NavigationCrumb";
import SimpleContent from "Comp/SimpleCon";
import useSWR from "swr";

function GetDeities(rank: string) {
  const fetcher = (...args: string[]) =>
    fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("http://localhost:5000/getDeities", fetcher);
  if (error) {
    console.log(error);
    return <div>Failed to access API</div>;
  }
  if (!data) return <div>Loading...</div>;

  let renderedDeities = [];
  for (let item of data) {
    if (item[0] === rank) {
      renderedDeities.push(
        <Deity
          imageSrc={"./Deities/" + item[1] + ".png"}
          descriptionProps={{
            title: item[1],
            body: item[2],
            domain: item[3],
          }}
        />
      );
    }
  }
  return renderedDeities;
}

export default function DeitiesPage() {
  return (
    <section>
      <GetCrumbs path={"Pages,Deities"} />
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Intro",
            text: [
              'Long before their battles, gods were once "All," harnessing the energy and magic of reality. However, their egos led to conflicts and the need to determine superiority. Lesser creatures desired an end to the fighting, but gods, being immortal and unforgiving, couldn\'t accept another "Perfect Being\'s" actions.',
              "Eventually, prayers were answered, and the gods ceased fighting, but this created a worse situation. They stopped communicating and individually created humans from Mceeju, who, despite their differences, served the gods. The gods made peace with their divergences and established various races within the Astral Sea.",
              "Humans, lacking intelligence and divine guidance, possessed magic but often perished due to imperfections. Their deaths released magic into the universe. The gods accepted their punishment and judged themselves, losing their perfect nature and becoming distinct from one another.",
              "The gods continued to create humans, who exhibited predictable yet mysterious traits. They showed mercy and guided some humans towards greatness, rewarding them with demigod status. However, such accomplishments became scarce over time.",
              "Despite sharing the same creators, races clashed or multiplied uncontrollably, losing control of the Weave and facing an unstoppable force: Mceeju.",
              "Mceeju divided the Astral Sea, creating the Material Planes and the Inner Worlds while isolating the Elemental Chaos with a dimensional barrier. Races were divided, and even the gods' domains were split. The Overworld, Underworld, and Outer Worlds emerged.",
              "With newfound freedom, the gods led by Mceeju's order. Some stayed united, some pursued separate paths, and others descended to the Material Planes.",
            ],
          }}
        />
        <Divider />
        <SimpleContent
          contentProps={{
            title: "Overdeities",
          }}
        />
        {GetDeities("Over")}
        <Divider />
        <SimpleContent
          contentProps={{
            title: "Greater Deities",
            text: [
              "Worshipped by about a million of people. They know what is going to happen a week ahead, regardless. They can create artifacts. So strong, you cant really challenge them. In most cases, worshippers don't even get to see them. Avatars of these gods are carrying a fraction of their power. Up to ten avatars can be created. Destroying one doesn't even damage since they can summon another one. An avatar is as strong as a lesser deity. For these reasons, lower ranked gods join to greater ones.",
            ],
          }}
        />
        {GetDeities("Greater")}
        <Divider />
        <SimpleContent
          contentProps={{
            title: "Higher Deities",
            text: [
              "Worshipped by about 100000 people. They know what is happening, regardless.",
            ],
          }}
        />
        {GetDeities("Higher")}
        <Divider />
        <SimpleContent
          contentProps={{
            title: "Lesser Deities",
            text: ["Worshipped by about 10000 people."],
          }}
        />
        {GetDeities("Lesser")}
        <Divider />
        <SimpleContent
          contentProps={{
            title: "Demi Deities",
            text: ["Worshipped by about 100-1000 people."],
          }}
        />
        {GetDeities("Demi")}
      </Card>
    </section>
  );
}
