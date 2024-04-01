"use client";

import { Card, Divider, Skeleton } from "antd";
import Deity from "Comp/commonlore/Deities";
import GetCrumbs from "Comp/NavigationCrumb";
import SimpleContent from "Comp/SimpleCon";
import useSWR from "swr";

interface DataType {
  deityDomains: string;
  deityTitle: string;
  deityName: string;
  deityText: string;
  deityId: number;
}

/**
 * Gets Deity data and passes the props to Deity component
 * @see Deity
 * @generator
 * @param rank The deity rank as string
 * @returns Deity component array
 */
function GetDeities(rank: string) {
  /**
   * Fetcher function for API requests.
   * @param args - RequestInfo object containing information about the request.
   * @returns Promise resolving to the parsed JSON response.
   */
  const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://gi5vwiheg0.execute-api.eu-central-1.amazonaws.com/Stage/getDeities",
    fetcher
  );
  if (error) {
    console.log(error);
    return <div>Failed to access API</div>;
  }
  if (!data) return <Skeleton active />;

  data.sort((a: DataType, b: DataType) => a.deityId - b.deityId);

  let renderedDeities = [];
  for (let item of data) {
    if (item.deityTitle === rank) {
      renderedDeities.push(
        <Deity
          imageSrc={"./Deities/" + item.deityName + ".png"}
          descriptionProps={{
            title: item.deityName,
            body: item.deityText,
            domain: item.deityDomains,
          }}
        />
      );
    }
  }
  return renderedDeities;
}

/**
 * Categorizes and displays deities with text describing each category
 * @returns SimpleContent and GetDeities response wrapped with Card(antd) in section
 */
export default function DeitiesPage() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Deities"} />
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Overdeities",
            text: [
              "Overdeities, the supreme rulers of the divine realm, command unparalleled respect and reverence from mortals and deities alike. Their unfathomable power extends not only over the fabric of reality but also into the hearts and minds of all who dwell within their domain. Their presence shakes the foundations of existence and everyone in Teothe knows them. Even the slightest hint of disrespect towards these divine beings can incur the wrath of lesser deities, who eagerly seek to curry favor with their omnipotent overlords.",
            ],
          }}
        />
        {GetDeities("Over")}
        <Divider />
        <SimpleContent
          contentProps={{
            title: "Greater Deities",
            text: [
              "Greater Deities, worshipped by millions across the realm of Teothe, embody the pinnacle of divine power and foresight. With the ability to discern events a week in advance and shape reality with the creation of artifacts, they command unwavering respect and awe. Their strength is unmatched, rendering them unchallengeable by mortals and lesser beings. Often veiled in mystery, their presence is seldom witnessed by worshipers, who revere them from afar. Avatars, mere echoes of their divine essence, carry but a fraction of their immense power, yet each remains as formidable as a lesser deity. Destruction is a fleeting setback, for these deities can summon up to ten avatars at will, ensuring their influence endures across the ages. It is no wonder that lesser gods flock to their ranks, drawn by the irresistible allure of their omnipotence.",
            ],
          }}
        />
        {GetDeities("Greater")}
        <Divider />
        <SimpleContent
          contentProps={{
            title: "Higher Deities",
            text: [
              "Higher Deities, worshipped by tens of thousands throughout the realm of Teothe, possess a keen insight into unfolding events. Though their powers may not rival those of the Greater Deities, they wield significant influence over mortal affairs. Worshipers turn to them for guidance and protection, acknowledging their role in shaping the course of destiny. As beacons of divine wisdom, they illuminate the paths of the faithful, offering solace and hope in times of uncertainty.",
            ],
          }}
        />
        {GetDeities("Higher")}
        <Divider />
        <SimpleContent
          contentProps={{
            title: "Lesser Deities",
            text: [
              "Lesser Deities, worshipped by thousands across Teothe, govern and represent specific aspects of mortal existence. Worshipers offer prayers beseech their favor, recognizing their role in shaping mortal destinies. From the depths of the oceans to the heights of the heavens, their influence extends far and wide, guiding the faithful on their journey through life.",
            ],
          }}
        />
        {GetDeities("Lesser")}
        <Divider />
        <SimpleContent
          contentProps={{
            title: "Demi Deities",
            text: [
              "Demi Deities, worshipped by hundreds within the realm of Teothe, hold a special place as intermediaries between mortals and the divine. Easier to reach and quicker to respond, they offer solace and guidance to those who seek their aid. Worshipers offer prayers and offerings to these benevolent beings, knowing that their compassionate gaze watches over them in times of need. With open hearts and willing ears, Demi Deities listen to the pleas of the faithful, offering comfort and support when it is needed most.",
            ],
          }}
        />
        {GetDeities("Demi")}
      </Card>
    </section>
  );
}
