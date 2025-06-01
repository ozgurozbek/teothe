"use client";

import { Card, Col, Divider, Row, Typography } from "antd";
import Faction from "@/components/factions/Factions";
import GetCrumbs from "Comp/NavigationCrumb";
import SimpleContent from "Comp/SimpleCon";

const { Title } = Typography;

interface DataType {
  factionType: string;
  factionName: string;
  factionAliases: string[];
  factionDeity: string;
  factionEnemies: string[];
  factionAllies: string[];
  factionDetail: string[];
  factionHQ: string;
  factionKey: number;
}

enum FactionTypes {
  Adventuring = "Adventuring",
  Aquatic = "Aquatic",
  Assassins = "Assassins",
  Bandits = "Bandits",
  Bardic = "Bardic",
  Berserker = "Berserker",
  Charitable = "Charitable",
  Criminal = "Criminal",
  Crusader = "Crusader",
  Entertainment = "Entertainment",
  Enforcement = "Enforcement",
  Legal = "Legal",
  Knighthood = "Knighthood",
  Fleet = "Fleet",
  Mercenary = "Mercenary",
  Merchant = "Merchant",
  Military = "Military",
  Monastic = "Monastic",
  House = "House",
  Peacekeeping = "Peacekeeping",
  Philosophical = "Philosophical",
  Planar = "Planar",
  Political = "Political",
  Professional = "Professional",
  Psionic = "Psionic",
  Rebel = "Rebel",
  Religious = "Religious",
  Secret = "Secret",
  Slaving = "Slaving",
  Social = "Social",
  Sorcerous = "Sorcerous",
  Spellcasting = "Spellcasting",
  Terrorist = "Terrorist",
  Tribe = "Tribe",
  Vigilante = "Vigilante",
} 
// 🔄 Shows all factions in one layout
function AllFactions() {
  const sortedData = [...factionsData].sort((a, b) => a.factionKey - b.factionKey);

  return (
    <Row gutter={[16, 16]}>
      {sortedData.map((item) => (
        <Col
          key={item.factionKey}
          xs={24}
          sm={24}
          md={12}
          lg={8}
          xl={8}
          xxl={6}
        >
          <Faction
            imageSrc={`./Factions/${item.factionName}.png`}
            typeImageSrc={`./Icons/FactionTypes/${item.factionType}.png`}
            descriptionProps={item}
          />
        </Col>
      ))}
    </Row>
  );
}

// 🧭 Page component
export default function FactionsContent() {
  return (
    <section>
      <GetCrumbs path="Teothe,Factions" />
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Factions of Teothe",
            text: ["An overview of the various factions in the world of Teothe."],
          }}
        />
        <Divider />
        <Title level={2}>Common Factions</Title>
        <AllFactions />
      </Card>
    </section>
  );
}
