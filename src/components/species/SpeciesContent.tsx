"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SpeciesCon from "@/components/species/SpeciesCon";
import { Card, Row } from "antd";
import species from "@/jsons/species/species.json";

/**
 * Function to fetch and render species data.
 * @generator
 * @see SpeciesCon
 * @returns An array of rendered species components.
 */
function GetSpecies() {
  interface SpeciesData {
    id: string;
    image: string;
    content: string;
    quote: string;
  }

  const data = species as SpeciesData[];

  const renderedSpecies = [...data]
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((item) => (
      <SpeciesCon
        key={item.id}
        SpeciesId={item.id}
        SpeciesPic={{
          src: item.image
            ? `./Species/${item.image}`
            : `./Species/${item.id}.png`,
          alt: `${item.id} image`,
          phrase: item.quote,
        }}
        DescriptionText={{
          title: item.id,
          paragraph: item.content,
        }}
      />
    ));

  return <Row>{renderedSpecies}</Row>;
}

/**
 * Component for the species page, displaying species data.
 * @returns The species page section with breadcrumbs and species data.
 */
export default function SpeciesContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species"} />
      <Card variant="outlined">{GetSpecies()}</Card>
    </section>
  );
}
