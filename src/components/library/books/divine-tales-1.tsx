"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function WhatAreTheseCloversContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,Divine Tales 1"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "Divine Tales 1",
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Creation of Fexyiaf",
              level: 2,
              text: [
                "From the dawn of time, Buib and Pwazo had a feud between them. Being on the most opposite sides of the spectrum, like death and life and, light and dark, they hated each other, deeply and constantly. Pwazo knowing that Buib had a strong interest in Cfofb, believed that if her manipulations succeeded she could use Cfofb and overthrow Buib.",
                "In the meantime Buib began thinking that if she could mix her powers with the ones Cfofb posess they could gain greater power, maybe reaching Mceeju and being the next in line with the allmighty. These thoughts and probably many many more, caused her to be in love with Cfofb.",
                "The goddess of flames, having this eternal hatred towards Buib started to develop expectations from Cfofb over time. After countless arguments, her hatred towards Buib grew as well as her expectations from Cfofb. She began to feel love thus starting a competition between herself and Buib. Cfofb knowing nothing about this feud, he missed his chance to maybe stop what was going to happen.",
                "Lwaqy, the god of darkness realized this situation and then harassed both Buib and Pwazo, working behind their backs. Buib being pure, she instantly fell for the traps and soon forgot about her platonic feelings towards Cfofb. Pwazo being fueled with anger couldn't take any more shutdowns and finally forget about Cfofb after being accepted and taken by Lwaqy. Lwaqy, after having his way with them, told them that the other goddesses were also interested in him. They instantly suspected one another and the hatred fueled with jealousy sparked again. The feud between Buib and Pwazo caused Fexyiaf to spawn, acting as a container filled with all their hatred and the urge to end one another.",
                "Lwaqy, accepting Fexyiaf as a creation of his own, banished him to his home plane next to Raxy. Buib and Pwazo, finally understanding their mistakes and what they caused, begged the ones associated with life to take back their gift. Uke and Veri declined their cries. Buib and Pwazo then returned to Cfofb and begged acceptance while the god of storms declined their powers, giving them the absence of storms when they most needed it. Being this stripped of the power they once longed for, they became closer. They couldn't be near each other without getting mad but they finally understood that they were the same but on a different path.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "The Binding of Lwaro",
              level: 2,
              text: [
                "Mceeju had a terrible foreboding concerning the fate of Lwaro. Lwaro would later kill Raxy during the black rain, the downfall of the cosmos. During this cataclysmic event, escaped souls from Nee, Cepx and Diyp would devour all life and even make Mceeju wake up, the chief of all gods.",
                "Lwaro, daughter of Gud, inspired too much fear in Uke and Veri for them to let him out from under their watchful eyes. Only Gud, the indefatigable upholder of honour, dared to approach Lwaro to feed her.",
                "Lwaro grew at an alarming rate. Knowing well how much devastation she would cause if she were allowed to roam free, the gods attempted to bind her with various chains. Modgo first cursed Lwaro to forever be in the form of a wolf. After this, gods were able to gain the wolf's consent by telling him that these fetters were tests of her strength, and clapping and cheering when, with each new chain they presented her, she broke free.",
                "At last, the gods sent a messenger down to Nhaft 'Pjegv in Dwarvish', the realm of the dwarves. The dwarves, being the most skilled craftspeople in the Johke Era, were able to forge a chain whose strength couldn't be equalled; it was wrought from the sound of a cat's footsteps, the smell of music, the roots of mountains, and the breath of a fish - in other words, things which don't exist, and against which it's therefore futile to struggle. Nteud ('Msaoc' in Johke) was the name sung by the dwarvish. No later with their worries gone, Gods asked Mceeju to grant them another overseer, another guardian, thus reforming Raxy one more time.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Replacing Uufh",
              level: 2,
              text: [
                "Msauh, the sage of Johke and the power-seeker, coming after Ecqig and growing with the Lcohwuj was granted great knowledge. He is told that he knew all languages, could speak with and operate all animals and even bargain with the gods.",
                "With all that information he could glimpse into the future. Even with all his great knowledge he couldn't do anything but watch; as Ecqig was prayed and thanked, acknowledged for his accomplishments and, Lcohwuj ascended. He was furious but, over time, he understood what he was and what he could do.",
                "As his life neared an ending, he called in a Pedi and asked for a small favour from it. The favour was to see what the other planes looked like. He knew what they were and what was what but he could never see or experience it. Pedi accepted this, thinking a mere human could do no harm but also ate a part of Msauh's soul. Msauh nearing his time, travelled to the Nhaft, a plane of dwarves.",
                "He begged an elderly dwarf to forge him a sword benefiting from the weight of all his knowledge and the sharpness of his wit. The dwarf, having a chance like this once in a lifetime forged the blade and gifted it to Msauh.",
                "Msauh used the one-way plane to Johke and from there, begged the god of death Naahv. Gifted him the sword that'll be known afterwards for devouring souls, the 'Nahuehak'. Naahv, delighted with this gift took Msauh near him and made Fexyiaf test the blade on the strong Lcohwuj, Uufh. This act scarred Msauh since they were once like brothers but deep inside, he wanted to be equal with them. After Uufh's death, a creator god placed Msauh in his position since he knew all the things required and he'd suffer in his once brother’s spot.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Story of Gaxaca",
              level: 2,
              text: [
                "For the longest time, Gaxaca did not know he was a god. His father was a king, the king of the moon, the mighty Wiob.",
                "Wiob loved his little son. But Uke and Veri, Mceeju's creations responsible for all life, hated Gaxaca. They were very jealous of him since he was born out of like a blessing from Mceeju himself, just like them, ignoring their purpose of creation. They tried all kinds of ways to kill Gaxaca, including sending a couple of snakes into his crib and hoping Onposufm would miss and cause a Wefhiza. Gaxaca crushed those snakes in a flash, with the powers granted from Wiob, overseed by Onposufm and stunning from Vihi. Gaxaca was incredibly powerful, even as a baby!",
                "Bored from all these attacks, to keep his small son safe, Vihi sent him to live with a mortal family in the Johke era. Gaxaca grew up loved. He married and had a couple of kids. He was happy, but he did not fit in. He was too big, too strong, too different. When outside he was hard to miss, when inside you felt that he was there. With such a strong aura, Uke and Veri soon discovered his location.",
                "Tricked by them, Gaxaca did all kinds of timeconsuming and pointless things. Some were impossible to accomplish even for gods. He believed Uke and Veri, believed that Wiob and all others were watching him. Gaxaca used clever tricks and great courage to stay alive and earn his way into the heavens, gaining a remarkable appreciation from all gods good and evil, to take his place with the gods.  ",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Radu & Nizi",
              level: 2,
              text: [
                "Radu was the god of honour and heroism. Like all gods, he loved drama and contests. His special talent was that he could shape his sense of honour into looking like anything he wanted. He could shape it into a little mouse or a dangerous animal or a fierce pirate. His favourite shape was that of a handsome young man, dripping in jewels. He had quite a sense of humour.",
                "One day, when Radu was in the form of his favourite shape, a handsome young man, dripping with jewels, he was spotted by some pirates. They thought they had stumbled across a rich prize, someone they could sell for a lot of money as a slave. Laughing cruelly, they grabbed what they thought was a rich young man and carried him off to their pirate ship. They tied him tightly to the mast.",
                "Radu found this all rather amusing. He might have waited a bit longer to see what these stupid mortals would do next, but the rope was rubbing his skin uncomfortably. Radu used his immeasurable strength to push the rope away. It landed in a heap at his feet.",
                "One of the pirates noticed the young man was no longer tied to the mast. The pirate gasped in surprise. He strongly suspected that he and his fellow pirates had made a terrible mistake. This was no ordinary mortal. Things would not go well for them if they did not quickly return the lad to shore. He pleaded with the other pirates to turn the ship about. But they tied Radu to the mast even more tightly than before, with ropes and chains, and headed out to sea.",
                "Radu waited until the ship had reached very deep water. He pushed the ropes off his body. At the same time, he waved his arm, and a thick sword emerged in his hand. Radu shape-shifted into a gigantic body and roared. With the splash of his hand to the sea, water emerged, making the ship move and come to a complete halt. He shrink to a normal size and jumped on the terrified pirates. Some jumped overboard to avoid his sharp blade. Soon, the only pirate left alive on board was the pirate who had begged for his release. That pirate would have gladly jumped overboard with his mates, but seeing Radu in awe, his feet were stuck firmly in place. 'Is that the island of Muxs?' Radu asked casually, peering ahead.",
                "The pirate nodded, too terrified to speak. 'You can drop me off that adxect there.' Radu decided. The sea calmed down. With no one at the wheel, the ship moved smoothly forward, sailing calmly towards the island of Muxs. When they arrived at the island, Radu turned into a winged lion and leapt nimbly onto the seawall. He gave the pirate a friendly look and flapped its wings as in a goodbye, thus creating a wind that gave the ship a magical shove out to sea.",
                "Laying there, on the island of Muxs, Radu first saw the lovely Nizi. Abandoned by her parents, Nizi spent her days curled on the seawall, staring out to sea. That day, she was fast asleep, worn out from weeping. She took his breath away, she was that beautiful. She smelled amazing. He transformed into his self and waited patiently until Nizi opened her eyes. She saw a handsome young man, gazing and admiring at her. Nizi felt better immediately. She told Radu about her efforts to save her brother and the children of Vihi. 'And look where it got me.' she sniffed.",
                "'You poor thing,' Radu said with great sympathy. So falling in love he used all of his charms and immediately asked the lovely young Nizi to marry him.",
                "Nizi, no longer feeling forsaken or friendless, and delighted to be admired by this handsome young man, consented to be his wife. After her consent, Radu asked Uke to grant her a blessing. Mceeju hearing this covered them with a warm light and granted that Nizi was the one for Radu, he held Nizi responsible for all things completed and blessed her with the sense of completion. Nizi and Radu still live happily, in love that could even make Vihi, the goddess of love, jealous.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "The Magical Stick",
              level: 2,
              text: [
                "Once upon a time, a long time ago, Wodroh, the god of murder, was fighting against the Johken in a field at the northernmost tip of the land. He felt that helping Ikvish would make them stronger and then he could have joy in killing them. Wodroh kept a close eye on that field as many battles had been fought there. Wodroh did not wish to miss a good battle. Lcaoc, god of wisdom, saw his half-brother, screaming and shouting happily, as the Johken died around him. Lcaoc believed the Johken's cause was just, as they were simply defending their home. He picked up a stick and threw it as hard as he could at Wodroh. Wodroh wasn't paying attention as usual, enjoying the bloodshed. The stick knocked him out cold. When he woke up, the battle was over. The Johken had won! Wodroh never knew it was his brother, Lcaoc, who had knocked him out of the battle!",
                "After that, nobody knows how but somehow, a rumour started that the great god Wodroh had been attacked by a magical twig! Nobody listened to the rumour, nobody that is except two young brothers. The brothers owned the field where battles kept happening. It was very hard to grow crops while men were fighting. The boys had grown tall, manly and strong. The boys quietly collected a huge stack of twigs and sticks, hoping one of them would be the magical one. Their neighbours thought they were building a wall to help protect their field from the wars. Although, they were waiting for Wodroh. They knew Wodroh would show up sooner or later, because Wodroh loved bloodshed, and many a battle had been fought in their field. Wodroh was bound to keep checking. Sure enough, one day, they spotted the great god Wodroh in their field! They threw all that they gathered at him and were very fortunate since one hit his spine and knocked him out before Wodroh noticed what they were doing. The boys quickly stuffed Wodroh into a huge vase and plugged the top securely.",
                "Wodroh was stuck in that vase for a very long time. And for a very long time, the brothers lived a peaceful life. No battles were fought in their field. Their crops flourished. Their neighbours became their friends. Wodroh might still be in that vase today. Even if he was out, Wodroh never came back to that field, thinking perhaps that the tale of magical twigs was true.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Creation of Pedi",
              level: 2,
              text: [
                "Lwaqy would constantly come into conflict with Mceeju and after Mceeju withdrew the use of fire by mortals, Lwaqy famously stole the fire and gave it back to humanity. As punishment for his transgressions, he was chained to a star in the sky for eternity. Every day, in the morning, a beam of light (the symbol of Mceeju) would fly towards the star and burn the eyes of Lwaqy. Since he was immortal, his sight would recover, only for the cycle to repeat the next day. Out of his burned blood, pouring from his eyes would create the Pedi. Lwaqy impressed by these creatures would send them to his home plane.",
                "Eventually, Raxcoh freed Lwaqy from his prison.",
              ],
            }}
          />
        </article>

        <Button href="/library" className="mt-2">
          <span>
            See The Library <DoubleRightOutlined />
          </span>
        </Button>
      </Card>
    </section>
  );
}
