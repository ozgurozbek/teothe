"use client";

import { Card, Row } from "antd";

import GetCrumbs from "@/components/NavigationCrumb";
import PantheonCon from "@/components/pantheons/PantheonCon";

import pantheons from "@/jsons/pantheons/pantheons.json";

interface PantheonData {
  id: string;
  system: {
    name: string;
    description?: string[];
    species: string[];
    deities: {
      id: string;
      name?: string;
      image?: string;
      description?: string;
      stance?: "patron" | "enemy" | "none";
    }[];
  };
}

function GetPantheons() {
  const data = pantheons as PantheonData[];

  const renderedPantheons = [...data]
    .sort((a, b) =>
      a.system.name.localeCompare(b.system.name)
    )
    .map((item) => (
      <PantheonCon
        key={item.id}
        PantheonData={{
          id: item.id,
          name: item.system.name,
          description: item.system.description ?? [],
          species: item.system.species,
        }}
      />
    ));

  return <Row>{renderedPantheons}</Row>;
}

export default function PantheonContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Pantheons"} />

      <Card variant="outlined">
        {GetPantheons()}
      </Card>
    </section>
  );
}