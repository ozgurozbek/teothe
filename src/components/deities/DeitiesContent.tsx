"use client";

import { Card, Col, Divider, Row, Skeleton } from "antd";
import Deity from "@/components/deities/Deities";
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
  const data = [{"deityId": 7, "deityTitle": "Greater", "deityDomains": "Nature, Tempest", "deityName": "Ehx", "deityText": "Dragon goddess, creator of all sky. Also known as Coz, Goddess of the sun and Ledr, Goddess of birds. Mother of metallic dragons and takes a human form to give wisdom"}, {"deityId": 47, "deityTitle": "Lesser", "deityDomains": "War, Death", "deityName": "Lwaro", "deityText": "Goddess of blades, believed to be shackled since the Black Rain"}, {"deityId": 8, "deityTitle": "Greater", "deityDomains": "Nature", "deityName": "Buib", "deityText": "Goddess of rain. Rain gives life to crops and cleans hidden trails of who need it. Buib is also the patron goddess of Bards. Considering how bards are the media, no wonder she is a greater god"}, {"deityId": 54, "deityTitle": "Demi", "deityDomains": "Light", "deityName": "Czeis", "deityText": "Demigod of speed, also associated with news and respect. Unfortunately since Buib exists, many decide to believe in her"}, {"deityId": 32, "deityTitle": "Lesser", "deityDomains": "Nature, Life", "deityName": "Tezr", "deityText": "God of flowers"}, {"deityId": 56, "deityTitle": "Demi", "deityDomains": "Trickery", "deityName": "Xenia", "deityText": "Demigoddess of hallucinogens"}, {"deityId": 44, "deityTitle": "Lesser", "deityDomains": "Nature, Life", "deityName": "Waqorafe", "deityText": "God of medicine"}, {"deityId": 39, "deityTitle": "Lesser", "deityDomains": "Knowledge", "deityName": "Ayrugcumoak", "deityText": "Goddess of knowledge. Hates the ones hiding knowledge from the ones seeking it. She greatly favors research instead of practice. Those worship her work tirelessly to preserve information. She is referenced as \"The Eye\", \"Eye of Knowledge\" and in many other ways"}, {"deityId": 10, "deityTitle": "Greater", "deityDomains": "Trickery", "deityName": "Pwazo", "deityText": "Dark Goddess of flames, of tyrannical control, believed to be the lord of Underworld. Creatures inhabiting the Underworld usually pray to their ruler. Known for the ambition and cruel dispositions"}, {"deityId": 31, "deityTitle": "Lesser", "deityDomains": "Tempest, Light", "deityName": "Raxcoh", "deityText": "Helper to the ones in need"}, {"deityId": 58, "deityTitle": "Demi", "deityDomains": "Knowledge, Trickery", "deityName": "Anomenada", "deityText": "Demigoddess of alchemy"}, {"deityId": 3, "deityTitle": "Over", "deityDomains": "Knowledge", "deityName": "Lcaoc", "deityText": " God of wit, right side of Mceeju. Undisputed lord of the Outer Planes. Even though people does not pray to him, any being that has an order or a way of thinking and functioning give power to Lcaoc. Also mentioned as the God of civilization. He promotes united work towards a single work and sets in place laws to keep his followers undistracted from ever moving forward"}, {"deityId": 38, "deityTitle": "Demi", "deityDomains": "Life, Death", "deityName": "Nepi", "deityText": "Formerly god of dice, also known as Vopx. Redirects his worshippers to his domain for balance, therefore a demigod."}, {"deityId": 2, "deityTitle": "Over", "deityDomains": "Tempest", "deityName": "Nmei", "deityText": " God of fate, left side of Mceeju"}, {"deityId": 21, "deityTitle": "Higher", "deityDomains": "Trickery", "deityName": "Fexyiaf", "deityText": "Goddess of villains. Deception and destruction flow through Fexyiaf. Power to obliterate enemies. People that want something destroyed. Besides these people, there is Evocation"}, {"deityId": 40, "deityTitle": "Lesser", "deityDomains": "Tempest", "deityName": "Afez", "deityText": "God of belongings"}, {"deityId": 14, "deityTitle": "Greater", "deityDomains": "Knowledge, Nature", "deityName": "Yr'snn", "deityText": "Creator of Elves and patron of all things in elf values. His creativity are granted to all artists including the arcane arts. He shares Boghradyn's hatred of orcs and holds a special thing for the drow. Also known as Corellon"}, {"deityId": 55, "deityTitle": "Demi", "deityDomains": "Nature", "deityName": "Lara Navye", "deityText": "Demigoddess of rabbits, also associated with love and children"}, {"deityId": 18, "deityTitle": "Higher", "deityDomains": "Nature, Light", "deityName": "Vesvjdegz", "deityText": "God of lightning, also known as Ves and Biaf because of the roaring. He promotes freedom and dislikes safety. Luck alone guides his followers. He smiles upon those whom had a positive change on the world"}, {"deityId": 25, "deityTitle": "Higher", "deityDomains": "Knowledge", "deityName": "Tsahnrad", "deityText": "God of crafting. Many artisans, dwarves and gnomes believe in this deity. Also known as Gond"}, {"deityId": 12, "deityTitle": "Greater", "deityDomains": "Death", "deityName": "Naahv", "deityText": "God of death. The Unavoidable. Judges souls in the City of Judgement and sends them to a respective plane. If the soul is faithless, they get cast away at the wall of souls, that make up the walls of the City of Judgement"}, {"deityId": 9, "deityTitle": "Greater", "deityDomains": "War, Tempest", "deityName": "Radu", "deityText": "God of heroism, believed to be the lord of Overworld. Inspirations, youth, morning, vitality, self improvement are all Radu's points"}, {"deityId": 53, "deityTitle": "Demi", "deityDomains": "Death", "deityName": "Oxar Ares", "deityText": "Demigod of chaos, associated with wounds. His followers usually lack determination and the required attention span and they are overall chaotic to get things done for Oxar Ares and end up working for another deity"}, {"deityId": 52, "deityTitle": "Demi", "deityDomains": "Death", "deityName": "Astro", "deityText": "Mage of corruption, also associated with mosquitoes. Oddly specific, people who want corruption are less than those who hate mosquitoes. Astro being an evil demigod gains from this"}, {"deityId": 27, "deityTitle": "Higher", "deityDomains": "Trickery", "deityName": "Yrchenn", "deityText": "Goddess of sea. Even though she is evil, many pray to her out of fear. She punishes those whom do not give proper sacrifice. Sentient water creatures also pray to her, and are the cause that she is an intermediate deity. Also known as Umberlee"}, {"deityId": 4, "deityTitle": "Over", "deityDomains": "Life, Tempest", "deityName": "Veri", "deityText": " Goddess of life, sister responsible from Iz. The most widespread worshipped deity. Her light heals the sick and grows the crops. She is a beacon of hope and freedom. Her servants spread charity and goodwill while hunting the undead. Her being responsible of the plane Iz, is the reason she is an overdeity"}, {"deityId": 26, "deityTitle": "Higher", "deityDomains": "Nature, Tempest", "deityName": "Wusor", "deityText": "God of magic, also known as Czeyz"}, {"deityId": 13, "deityTitle": "Greater", "deityDomains": "Knowledge, Tempest", "deityName": "Boghradyn", "deityText": "Values wisdom and virtue as highly as gold. The allfather god of the Dwarves encourages the two simple desires of all Dwarves. A good heart beneath your forge and a family warmed by it. Also known as Moradin"}, {"deityId": 16, "deityTitle": "Higher", "deityDomains": "Fundamental", "deityName": "Zharathuun", "deityText": "Crazed god of madness. Seeks to undo all there is and ever will be. Also known as Tharizdun"}, {"deityId": 45, "deityTitle": "Lesser", "deityDomains": "Light", "deityName": "Megm", "deityText": "Goddess of architecture and cities, associated with building"}, {"deityId": 41, "deityTitle": "Lesser", "deityDomains": "Knowledge", "deityName": "Wugv", "deityText": "Goddess of numbers, also known as Xoypoh"}, {"deityId": 17, "deityTitle": "Higher", "deityDomains": "Nature, Tempest", "deityName": "Cfofb", "deityText": "God of storms. Barbaric god of power, both in nature and creatures. Well placed lightnings gives broad pleasure. Represents focused power and reckless fury"}, {"deityId": 6, "deityTitle": "Greater", "deityDomains": "Nature, Tempest", "deityName": "Cyaxo", "deityText": "Snake god, creator of all land. Also known as Dcei, God of forests. God of tamed nature, crops, breeding animals and farming. Many people besides adventurers pray to him at night. Protects and watches nature in its purest form. Worshippers of Cyaxo see civilization in a disturbed way. Wood elves, rangers, fishermen and anyone else who get in the wild pray for Cyaxo's protection and guidance"}, {"deityId": 46, "deityTitle": "Lesser", "deityDomains": "Trickery, Tempest", "deityName": "Wadqwofm", "deityText": "God of merchants"}, {"deityId": 50, "deityTitle": "Demi", "deityDomains": "Tempest, War", "deityName": "Catequil", "deityText": "Young man blessed with the power of thunder. Disappeared 3000 years ago and then resurfaced as shadowborn, Catequil is raised once more by mortals and is also known as Gregor Catequil"}, {"deityId": 36, "deityTitle": "Lesser", "deityDomains": "Life", "deityName": "Lunm", "deityText": "God of childbirth, also known as Msiys"}, {"deityId": 59, "deityTitle": "Lesser", "deityDomains": "Life, Tempest", "deityName": "Jenelius Londste", "deityText": "Former demigoddess of devotion, usually associated with fanatic determination"}, {"deityId": 20, "deityTitle": "Higher", "deityDomains": "Trickery, Death", "deityName": "Lwaqy", "deityText": "God of pain, darkness and suffering. Crying, broken god. Connected to Fey, he holds as many secrets as the night sky. The one who endures. Takes on the pain of people and tells his paladins to do the same. Anyone who suffers prays to him"}, {"deityId": 19, "deityTitle": "Higher", "deityDomains": "War", "deityName": "Gud", "deityText": "God of war. Gud's sense of war only applies to ones that are orderly, with a win-lose condition and something to gain. His followers are not against war but does not promote it, because that benefits Fexyiaf and such war would cause Wodroh to rise up"}, {"deityId": 61, "deityTitle": "Lesser", "deityDomains": "Trickery, Death", "deityName": "Eve Archambeau", "deityText": "Former demigoddess of redemption, also associated with gemstones and jewelry. Commonly addressed as Ruby"}, {"deityId": 33, "deityTitle": "Lesser", "deityDomains": "War", "deityName": "Maies", "deityText": "God of battles, also associated with violent takebacks of past promises"}, {"deityId": 34, "deityTitle": "Lesser", "deityDomains": "Nature", "deityName": "Yadseca", "deityText": "Goddess of smell"}, {"deityId": 35, "deityTitle": "Lesser", "deityDomains": "Tempest", "deityName": "Nizi", "deityText": "Goddess of completion"}, {"deityId": 42, "deityTitle": "Lesser", "deityDomains": "Trickery", "deityName": "Gaajyx", "deityText": "Wicked goddess of wealth. Greedy queen of hoarders. Her greed and lust for eternal wealth risk the world of an eternal unbalance"}, {"deityId": 1, "deityTitle": "Over", "deityDomains": "Fundamental", "deityName": "Mceeju", "deityText": "Root one, the one of joy and light"}, {"deityId": 49, "deityTitle": "Higher", "deityDomains": "Trickery", "deityName": "Xua", "deityText": "Goddess of shadows, stealth and secrecy. Thieves and assassins pray to Xua. Responsible for a stain on the underdark known as the drow. Malicious and cruel, Xua favors female followers to men"}, {"deityId": 37, "deityTitle": "Lesser", "deityDomains": "Trickery", "deityName": "Cyani", "deityText": "God poison, patron of nearly every assassin. His methods are methodical but results are definite. Worshippers are promised with great wealth and success, with great punishment upon failure. Among some of is most zealous priests are Yuan-Ti"}, {"deityId": 51, "deityTitle": "Lesser", "deityDomains": "Life, Death", "deityName": "Spina", "deityText": "God of thorns, natural pain, fell from their throne as a lesser god"}, {"deityId": 43, "deityTitle": "Lesser", "deityDomains": "Nature, Trickery", "deityName": "Gezi", "deityText": "Goddess of wine and food"}, {"deityId": 5, "deityTitle": "Greater", "deityDomains": "Life", "deityName": "Uke", "deityText": "God of life. While mysterious, Uke is one of the oldest 3 gods. Has ties to many other worlds since life is a wonderful thing to pray about"}, {"deityId": 22, "deityTitle": "Higher", "deityDomains": "Trickery, War", "deityName": "Modgo", "deityText": "God of curses. While most wouldn't pray to him, the ones seeking control and domination in a competitive environment usually follow his ways. This is why Modgo has churches and temples as an evil, intermediate god"}, {"deityId": 29, "deityTitle": "Lesser", "deityDomains": "Nature", "deityName": "Mykthyr", "deityText": "Goddess of rangers and trees. Also known as Mielikki. Mykthyr calls to rangers on a good dream"}, {"deityId": 24, "deityTitle": "Higher", "deityDomains": "Death", "deityName": "Wodroh", "deityText": "God of murder. Him and his followers are dedicated to one cause; unnatural ending of the mortal life. Truly evil deity who delights in simple pleasures. Torture and slavery. The crawling king of the underdark represents all the more menacing dark aspects of the underdark itself and the cruelty that has shaped its people"}, {"deityId": 23, "deityTitle": "Higher", "deityDomains": "Light", "deityName": "Wiob", "deityText": "Hero of the moon, believed to oversee the Inner Planes. Shines light at night to all who need it. Browses stars for who seek it and navigates the ones that are lost. Wiob always answers to a call for help and will always respond. Picking him is not allowed"}, {"deityId": 30, "deityTitle": "Lesser", "deityDomains": "Nature, Trickery", "deityName": "Pedi", "deityText": "Underworld demon, created by Pwazo to assist him"}, {"deityId": 15, "deityTitle": "Greater", "deityDomains": "War", "deityName": "Guulagh", "deityText": "Orc God. Not ambitious, and not quite admirable, Guulagh commands all his children to multiply, raid and take. Savage god of savage people, wages a war towards the destruction of all other species. Also known as Gruumsh"}, {"deityId": 28, "deityTitle": "Higher", "deityDomains": "Nature, Light", "deityName": "Atlatmak", "deityText": "Kobold deity. Kobolds are monotheistic and very, very crowded. Also known as Kurtulmak"}, {"deityId": 11, "deityTitle": "Greater", "deityDomains": "Life, Light", "deityName": "Vihi", "deityText": "Goddess of love and affection, sister responsible from Iz. Vihi's church also specializes in beauty products, help people be more charming, teach how to seduce and more. Everyone wants to be charming, therefore the size of worshippers are massive"}, {"deityId": 57, "deityTitle": "Demi", "deityDomains": "Trickery", "deityName": "Sai", "deityText": "Demigod of runes and traps"}, {"deityId": 60, "deityTitle": "Demi", "deityDomains": "War", "deityName": "Czeeg", "deityText": "Once the god of spears also associated with war, now a demigod. Picking him is not allowed"}, {"deityId": 48, "deityTitle": "Lesser", "deityDomains": "Tempest, Life, Light", "deityName": "Gaxaca", "deityText": "God of strength, son of Wiob and Vihi"}]

  data.sort((a: DataType, b: DataType) => a.deityId - b.deityId);

  let renderedDeities = [];
  for (let item of data) {
    if (item.deityTitle === rank) {
      renderedDeities.push(
        <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={6}>
          <Deity
            imageSrc={"./Deities/" + item.deityName + ".png"}
            descriptionProps={{
              title: item.deityName,
              body: item.deityText,
              domain: item.deityDomains,
            }}
          />
        </Col>
      );
    }
  }
  return <Row>{renderedDeities}</Row>;
}

/**
 * Categorizes and displays deities with text describing each category
 * @returns SimpleContent and GetDeities response wrapped with Card(antd) in section
 */
export default function DeitiesContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Deities"} />
      <Card bordered={false} className="w-full">
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
        {GetDeities("Over")}
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
        {GetDeities("Greater")}
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
        {GetDeities("Higher")}
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
        {GetDeities("Lesser")}
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
        {GetDeities("Demi")}
      </Card>
    </section>
  );
}
