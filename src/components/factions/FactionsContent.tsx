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
  Assassins = "Assassins",
  Bandits = "Bandits",
  Bardic = "Bardic",
  Berserker = "Berserker",
  Charitable = "Charitable",
  Criminal = "Criminal",
  Crusader = "Crusader",
  Enforcement = "Enforcement",
  Fleet = "Fleet",
  House = "House",
  Mercenary = "Mercenary",
  Merchant = "Merchant",
  Monastic = "Monastic",
  Peacekeeping = "Peacekeeping",
  Political = "Political",
  Professional = "Professional",
  Psionic = "Psionic",
  Rebel = "Rebel",
  Religious = "Religious",
  Secret = "Secret",
  Slaving = "Slaving",
  Tribe = "Tribe",
  Weave = "Weave",
} 

const factionsData: DataType[] = [
  {
  "factionType": FactionTypes.Adventuring,
  "factionName": "Adventurer's Guild",
  "factionAliases": ["Adventurer's League"],
  "factionDeity": "Radu",
  "factionEnemies": ["Inthizilelgghinn","Obsidian Order"],
  "factionAllies": ["Meadowcrew","Warrior's Guild"],
  "factionDetail": [
    "A common adventurer's go-to place for new beginnings. Full of tasks and adventures, sometimes taking place in bars and inns, sometimes in castles.",
    "Quest difficulty and rewards are categorized by stars, from No star or ⭐ to 🌟🌟🌟.",
    "Rewards include gold, bonuses for timeliness, challenges, and inconvenience. Guild takes a small cut.",
  ],
  "factionHQ": "Arikna",
  "factionKey": 1
},
{
  "factionType": FactionTypes.Peacekeeping,
  "factionName": "Ancientry Preservation Union",
  "factionAliases": [],
  "factionDeity": "Ayrugcumoak",
  "factionEnemies": [],
  "factionAllies": ["Black Scripture","Artificer's Union"],
  "factionDetail": [
    "They preserve whatever was left regarding Ancients of Teothe, mostly vague information from that time.",
    "Formed after Sivirron Paracix's guide and within the Blue Era."
  ],
  "factionHQ": "",
  "factionKey": 2
},{
  "factionType": FactionTypes.Enforcement,
  "factionName": "Arcanum Alliance",
  "factionAliases": ["Arcanum","Tybalum"],
  "factionDeity": "Wusor",
  "factionEnemies": ["Pearl Plunderers"],
  "factionAllies": ["Sapphire Sanctum"],
  "factionDetail": [
    "The magical body governing the plane by seeking order between all magic and magic casters. Their greatest feat was being on the winning side of the Mages' Uprising, also known as the Mages' Crisis. Consists of two divisions: Arcanum (above ground) and Tybalum (below ground).",
    "Arcanum often interfere with other planes of existence if actions there could affect Teothe.",
    "Owns the world's largest magic academy located on the island of Fei, near Konark.",
  ],
  "factionHQ": "Konark",
  "factionKey": 3
},{
  "factionType": FactionTypes.Professional,
  "factionName": "Artificer's Union",
  "factionAliases": [],
  "factionDeity": "The Eye",
  "factionEnemies": [],
  "factionAllies": ["The Ashen Fire","Artisan's Guild","Ancientry Preservation Union"],
  "factionDetail": [
    "With meticulous documentation about anything related to advancement and automation, whether it's magically enhanced or not, is being worked in this union.",
    "One of the most memorable honorary member is Isaac, the man that informed the Steamcart's development.",
  ],
  "factionHQ": "Fireward",
  "factionKey": 4
},{
  "factionType": FactionTypes.Professional,
  "factionName": "Artisan's Guild",
  "factionAliases": [],
  "factionDeity": "Tsahnrad",
  "factionEnemies": ["Thieve's Guild"],
  "factionAllies": ["Artificer's Union","Brewer's Guild"],
  "factionDetail": [
    "A guild of artisans and craftsmen, which also has many contacts to vast resources and royalty."
  ],
  "factionHQ": "",
  "factionKey": 5
},{
  "factionType": FactionTypes.Adventuring,
  "factionName": "Black Scripture",
  "factionAliases": [],
  "factionDeity": "Pwazo",
  "factionEnemies": ["Sapphire Sanctum"],
  "factionAllies": [],
  "factionDetail": [
    "Responsible for old, very antique magical items, most of which are cursed.",
    "They have no leader worthy, and members are often missing. Black Scripture cultists, however, still wander around. Cultists are mostly leeches infusing others' thoughts."
  ],
  "factionHQ": "",
  "factionKey": 6
},{
  "factionType": FactionTypes.Professional,
  "factionName": "Brewer's Guild",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": [],
  "factionAllies": ["Poor Bruisers"],
  "factionDetail": [
    "A guild for craft alcohol and potion enthusiasts. Members specialize in drinking, brewing and potion-making."
  ],
  "factionHQ": "",
  "factionKey": 7
},{
  "factionType": FactionTypes.Merchant,
  "factionName": "Crimson Caravan Company",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": ["Fisherman's Guild"],
  "factionAllies": [
    "Horizon Conglomerate"
  ],
  "factionDetail": [
    "A group of caravanners that grew huge by acquiring many other caravaneer companies.",
    "Due to greed and raising taxes/pricing, the Crimson Caravan Company disbanded into three caravan companies operating the main trade routes.",
    "The three companies are Crimson Caravan Company, Amazon, and Azure Caravan Company.",
    "They trade on all routes and mostly between cities."
  ],
  "factionHQ": "",
  "factionKey": 8
},{
  "factionType": FactionTypes.Merchant,
  "factionName": "Fisherman's Guild",
  "factionAliases": [],
  "factionDeity": "Wadqwofm",
  "factionEnemies": ["Crimson Caravan Company"],
  "factionAllies": ["Poor Bruisers"],
  "factionDetail": [
    "Fisherman's Guild is now, mostly, just a title and no longer is influencial.",
    "Most of the fishermen joined one of the caravaneer companies."
  ],
  "factionHQ": "",
  "factionKey": 9
},{
  "factionType": FactionTypes.Secret,
  "factionName": "Guild of Afternoon Tea",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": [],
  "factionAllies": ["Guild of Dark Blood Witchers"],
  "factionDetail": [
    "ʞᎸʏɿƚᎸǫƚʜʏ! To apply, summon Ꮈɿʏᴎꙅƚʏꞁ."
  ],
  "factionHQ": "The Abyss",
  "factionKey": 10
},{
  "factionType": FactionTypes.Berserker,
  "factionName": "The Ashen Fire",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": [],
  "factionAllies": ["Artificer's Union"],
  "factionDetail": [
    "A clandestine organization specializing in gunpowder-based technologies. Comprised of skilled alchemists, engineers, and gunsmiths who master gunpowder's explosive properties. Known for crafting devastating firearms, explosive devices, and intricate traps.",
    "They operate from hidden workshops and underground laboratories and carefully guard their gunpowder recipes and techniques. It is a rough balance being guardians of their craft and wielding its explosive power responsibly in a dangerous world."
  ],
  "factionHQ": "",
  "factionKey": 11
},{
  "factionType": FactionTypes.Merchant,
  "factionName": "Horizon Conglomerate",
  "factionAliases": ["Horizon Syndicate"],
  "factionDeity": "",
  "factionEnemies": [],
  "factionAllies": ["Crimson Caravan Company"],
  "factionDetail": [
    "A merchant conglomerate that organized trade between Underdark communities and surface ones."
  ],
  "factionHQ": "",
  "factionKey": 12
},{
  "factionType": FactionTypes.Assassins,
  "factionName": "Inthizilelgghinn",
  "factionAliases": [],
  "factionDeity": "Xua",
  "factionEnemies": ["Adventurer's Guild"],
  "factionAllies": ["Meadowcrew","Obsidian Order"],
  "factionDetail": [
    "Name means 'Plan as Death' in Drow. It is an Assassins' Guild and Rogue school, providing training in blending in with heat hues."
  ],
  "factionHQ": "",
  "factionKey": 13
},{
  "factionType": FactionTypes.Weave,
  "factionName": "Mage's Guild",
  "factionAliases": [],
  "factionDeity": "Wusor",
  "factionEnemies": ["Pearl Plunderers"],
  "factionAllies": [],
  "factionDetail": [
    "Nowhere near its old glory; the reformed Mage's Guild has no HQ. Many mages miss their former demiplane HQ, but none are strong enough to relocate or create another.",
    "After many political issues and the murder of mages, they caused a coup killing many world leaders. Over time, this oppression was stopped."
  ],
  "factionHQ": "",
  "factionKey": 14
},{
  "factionType": FactionTypes.Adventuring,
  "factionName": "Meadowcrew",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": [],
  "factionAllies": ["Horizon Conglomerate","Inthizilelgghinn"],
  "factionDetail": [
    "A guild of treasure hunters that actively delve into dungeons, tombs, and museums. They do not have official openings for new members but if you know which dungeon they are delving into..."
  ],
  "factionHQ": "",
  "factionKey": 15
},{
  "factionType": FactionTypes.Mercenary,
  "factionName": "Melody Union",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": ["Poor Bruisers"],
  "factionAllies": [],
  "factionDetail": [
    "A guild for Fighters and Barbarians who seek natural glory rather than fighting rings or battles.",
    "Members all have broken bones and squeaky parts in their bodies, hence, they have a bad taste and appreciation for music.",
    "Entry requires members to have had broken bones from combat, preferably squeaky."
  ],
  "factionHQ": "",
  "factionKey": 16
},{
  "factionType": FactionTypes.Assassins,
  "factionName": "Obsidian Order",
  "factionAliases": [],
  "factionDeity": "Xua",
  "factionEnemies": [],
  "factionAllies": ["Inthizilelgghinn","Thieve's Guild"],
  "factionDetail": [
    "An Assassin's Guild strictly operating in Teothe's lands, excluding the Underdark."
  ],
  "factionHQ": "",
  "factionKey": 17
},{
  "factionType": FactionTypes.Political,
  "factionName": "Opal Observatory",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": [],
  "factionAllies": ["Arcanum Alliance","Sapphire Sanctum"],
  "factionDetail": [
    "Group of people who carry diplomatic business to elemental planes, whom helped defend the Major Cities of Feianthe during the Mages' Crisis."
  ],
  "factionHQ": "City of Brass",
  "factionKey": 18
},{
  "factionType": FactionTypes.Crusader,
  "factionName": "Adamantium Concordat",
  "factionAliases": ["Paladin's Guild"],
  "factionDeity": "Yr'snn",
  "factionEnemies": ["Guild of Dark Blood Witchers"],
  "factionAllies": ["Adventurer's Guild","Slayer's Take"],
  "factionDetail": [
    "An order of paladins of different oaths and creeds.",
    "Membership is earned by recounting your deeds rather than entering a physical place. Guild ranks go up to 3 marks; 4 marks are considered extraordinary."
  ],
  "factionHQ": "Fex",
  "factionKey": 19
},{
  "factionType": FactionTypes.Weave,
  "factionName": "Pearl Plunderers",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": ["Arcanum Alliance","Mage's Guild","Thieve's Guild"],
  "factionAllies": [],
  "factionDetail": [
    "A battle mage army that forms weapons out of pure magical energy, drawing from various planar sources. Some believe they were the underlying cause of the Mages' Crisis."
  ],
  "factionHQ": "Plane of Choll",
  "factionKey": 20
},{
  "factionType": FactionTypes.Mercenary,
  "factionName": "Poor Bruisers",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": ["Melody Union"],
  "factionAllies": [],
  "factionDetail": [
    "An underground illegal pit fighting ring with a gig under every city around the world!",
    "Their HQ is in the Colosseum of Wukhim.",
    "Hell's Kitchen, a criminal organization, is a wing of Poor Bruisers based in Fex."
  ],
  "factionHQ": "Wukhim",
  "factionKey": 21
},{
  "factionType": FactionTypes.Peacekeeping,
  "factionName": "Sapphire Sanctum",
  "factionAliases": [],
  "factionDeity": "Lcaoc",
  "factionEnemies": [],
  "factionAllies": ["Arcanum Alliance"],
  "factionDetail": [
    "A court for international and extraplanar criminals, especially those whose crimes are magical in nature.",
    "They have enforcers rated as Grandmaster, International Master, National Master, and Master. Members can move from the court to being an enforcer, but not the other way around.",
    "To join, you must complete 3 mundane quests that aren't very real. After completing the quests, you gain a rating and start as a Master."
  ],
  "factionHQ": "",
  "factionKey": 22
},{
  "factionType": FactionTypes.Peacekeeping,
  "factionName": "Slayer's Take",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": ["Guild of Dark Blood Witchers"],
  "factionAllies": [],
  "factionDetail": [
    "A group of witchers and monster hunters. They scout potential, gather newcomers, search for jobs, and hunt. Includes traders, rogues, and wizards, but the majority are monster hunters.",
    "They hunt wild creatures and beasts under contracts from the government, nobles, or villagers. They also offer excellent combat training against monsters for members and prospective members."
  ],
  "factionHQ": "Wukhim",
  "factionKey": 23
},{
  "factionType": FactionTypes.Berserker,
  "factionName": "Guild of Dark Blood Witchers",
  "factionAliases": ["Better Slayer's Take"],
  "factionDeity": "",
  "factionEnemies": ["Adamantium Concordat"],
  "factionAllies": ["Guild of Afternoon Tea","Black Scripture"],
  "factionDetail": [
    "Extremely skilled individuals above and beyond Slayer's Take. They serve the greater good but are deemed heretics by common folk for using foul magics that taint their being.",
    "Mostly consists of high-level Blood Hunters and some high-level utility spellcasters, with the Guild master only revealing themselves to the advanced members. Yet, members argue that the guild has no leader."
  ],
  "factionHQ": "",
  "factionKey": 24
},{
  "factionType": FactionTypes.Secret,
  "factionName": "The Orchestra",
  "factionAliases": [],
  "factionDeity": "Naahv",
  "factionEnemies": [],
  "factionAllies": [],
  "factionDetail": [
    "A legendary guild of bards.",
  ],
  "factionHQ": "",
  "factionKey": 25
},{
  "factionType": FactionTypes.Bardic,
  "factionName": "The Quartet",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": [],
  "factionAllies": ["Warrior's Guild"],
  "factionDetail": [
    "Guild for Bards and Sorcerers skilled in combat and entertainment. Some members have circuses, others bear battle trophies and scars."
  ],
  "factionHQ": "",
  "factionKey": 26
},{
  "factionType": FactionTypes.Criminal,
  "factionName": "Thieve's Guild",
  "factionAliases": [],
  "factionDeity": "Xua",
  "factionEnemies": ["Sapphire Sanctum","Pearl Plunderers"],
  "factionAllies": ["Obsidian Order","Inthizilelgghinn"],
  "factionDetail": [
    "A secret organization with branches in nearly all towns, cities, and villages. Led by a female human named Katarina.",
    "Often hired for information rather than for stealing and selling goods."
  ],
  "factionHQ": "Oywego",
  "factionKey": 27
},{
  "factionType": FactionTypes.Berserker,
  "factionName": "Warrior's Guild",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": [],
  "factionAllies": ["Poor Bruisers"],
  "factionDetail": [
    "Home for the fiercest warriors that also has a Feywild connection!",
    "Their rough entry trial is respected by all, including bandits and the nature."
  ],
  "factionHQ": "Wukhim",
  "factionKey": 28
},{
  "factionType": FactionTypes.Bandits,
  "factionName": "Winston's Fleet",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": ["Sapphire Sanctum"],
  "factionAllies": ["Thieve's Guild","Meadowcrew","Pearl Plunderers","Poor Bruisers"],
  "factionDetail": [
    "A group of bandit fleets answering only to the legendary pirate Winston.",
    "Consists of multiple pirate crews, most famous Winston's Ship, Alean II, Madame Cheng's Ship, The Prostitute, and Firebeard's Fleet, 'If you are reading this, you are now retired'"
  ],
  "factionHQ": "",
  "factionKey": 29
},{
  "factionType": FactionTypes.Tribe,
  "factionName": "Wonderers of Du'Ora",
  "factionAliases": ["N'Tiora Folk","Druids"],
  "factionDeity": "Cyaxo",
  "factionEnemies": ["Crimson Caravan Company"],
  "factionAllies": ["Slayer's Take"],
  "factionDetail": [
    "Guild for Druids who belong to a circle and have ventured to Du'Ora at least once. Members must agree with the guild's views on pollution, destruction, and preservation.",
    "Includes branches such as the Kaio branch."
  ],
  "factionHQ": "N'Tiora Tree",
  "factionKey": 30
}
];

// Shows all factions in one layout
function AllFactions() {
  const sortedData = [...factionsData].sort((a, b) => a.factionType.localeCompare(b.factionType));

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

// Page component
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
