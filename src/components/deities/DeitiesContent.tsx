"use client";

import { Col, Divider, Row, Card } from "antd";
import Deity from "@/components/deities/Deities";
import GetCrumbs from "Comp/NavigationCrumb";
import SimpleContent from "Comp/SimpleCon";

import deities from "@/jsons/deities/deities.json";

interface DeityData {
  order: number;
  id: string;
  rank: string;
  name: string;
  image: string;
  description: string;
  domains: string[];
}

function GetDeities(rank: string) {
  const data = deities as DeityData[];

  const renderedDeities = data
    .filter((item) => item.rank === rank)
    .sort((a, b) => a.order - b.order)
    .map((item) => (
      <Col
        key={item.id}
        xs={24}
        sm={24}
        md={12}
        lg={8}
        xl={8}
        xxl={6}
      >
        <Deity
          imageSrc={
            item.image
              ? `./Deities/${item.image}`
              : `./Deities/${item.name}.png`
          }
          descriptionProps={{
            title: item.name,
            body: item.description,
            domains: item.domains,
          }}
        />
      </Col>
    ));

  return <Row>{renderedDeities}</Row>;
}

export default function DeitiesContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Deities"} />

      <Card variant="outlined" className="w-full">
        <SimpleContent
          contentProps={{
            title: "Deities of Teothe",
            text: [
              "Teothe's Deities is a rich pantheon, embodying unique aspects of divinity and cosmic power, evil or good. This divine assembly reveals the names, legends, and domains of each deity, offering insight into traditions, characteristics and the sacred forces of Teothe campaign setting they represent.",
            ],
          }}
        />

        <Divider />

        <SimpleContent
          contentProps={{
            title: "Overdeities",
            level: 2,
            text: [
              "Overdeities, the supreme rulers of the divine realm, command unparalleled respect and reverence from mortals and deities alike. Their unfathomable power extends not only over the fabric of reality but also into the hearts and minds of all who dwell within their domain. Their presence shakes the foundations of existence and everyone in Teothe knows them. Even the slightest hint of disrespect towards these divine beings can incur the wrath of lesser deities, who eagerly seek to curry favor with their omnipotent overlords.",
            ],
          }}
        />

        {GetDeities("Overdeity")}

        <Divider />

        <SimpleContent
          contentProps={{
            title: "Greater Deities",
            level: 2,
            text: [
              "Greater Deities, worshipped by millions across the realm of Teothe, embody the pinnacle of divine power and foresight. They have the ability to discern events a week in advance and shape reality with the creation of artifacts. Their strength is unchallengeable by mortals and lesser beings. Avatars, mere echoes of their divine essence that they create, carry a fraction of their immense power and each are as powerful as a lesser deity. These deities can summon up to ten avatars at will and their destruction doesn't damage their influence. It is no wonder that lesser gods flock to their ranks, drawn by the irresistible allure of their omnipotence.",
            ],
          }}
        />

        {GetDeities("Greater Deity")}

        <Divider />

        <SimpleContent
          contentProps={{
            title: "Higher Deities",
            level: 2,
            text: [
              "Higher Deities, worshipped by tens of thousands throughout the realm of Teothe, possess a keen insight into unfolding events. Though their powers may not rival those of the Greater Deities, they wield significant influence over mortal affairs. Worshipers turn to them for guidance and protection, acknowledging their role in shaping the course of destiny. As beacons of divine wisdom, they illuminate the paths of the faithful, offering solace and hope in times of uncertainty.",
            ],
          }}
        />

        {GetDeities("Higher Deity")}

        <Divider />

        <SimpleContent
          contentProps={{
            title: "Lesser Deities",
            level: 2,
            text: [
              "Lesser Deities, worshipped by thousands across Teothe, govern and represent specific aspects of mortal existence. Worshipers offer prayers beseech their favor, recognizing their role in shaping mortal destinies. From the depths of the oceans to the heights of the heavens, their influence extends far and wide, guiding the faithful on their journey through life.",
            ],
          }}
        />

        {GetDeities("Lesser Deity")}

        <Divider />

        <SimpleContent
          contentProps={{
            title: "Demi Deities",
            level: 2,
            text: [
              "Demi Deities, worshipped by hundreds within the realm of Teothe, hold a special place as intermediaries between mortals and the divine. Easier to reach and quicker to respond, they offer solace and guidance to those who seek their aid. Worshipers offer prayers and offerings to these benevolent beings, knowing that their compassionate gaze watches over them in times of need. With open hearts and willing ears, Demi Deities listen to the pleas of the faithful, offering comfort and support when it is needed most.",
            ],
          }}
        />

        {GetDeities("Demi Deity")}
      </Card>
    </section>
  );
}