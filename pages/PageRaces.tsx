import GetCrumbs from "@/components/NavigationCrumb";
import RacesCon from "@/components/RacesCon";
import { Card, Divider } from "antd";

export default function RacesPage() {
  return (
    <>
      <GetCrumbs path={"Pages,Races"} />
      <Card bordered={false} className="">
        <RacesCon
          RacePic={{
            src: "https://ozgurozbek.github.io/dnd/min_images/race_images/human.png",
            alt: "human",
          }}
          DescriptionText={{
            title: "Human",
            paragraph:
              "Humans were widespread, could be found in most regions and, in general, were fierce and disagreeable, which could sometimes lead certain other races to view them with contempt. They were renowned for their diversity and ambition, and although they lacked specialization, they could excel in many areas. While there were no natural human subraces, planetouched subspecies of humans were found in the Realms. These included the aasimars, genasi, and tieflings. There was also great ethnic diversity between humans in different regions. Humans bred outside their race many times, resulting in the various half-human races like half-elves and half-orcs.",
          }}
        />
        <Divider />
      </Card>
    </>
  );
}
