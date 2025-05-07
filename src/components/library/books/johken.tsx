"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function TheJohkenContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,The Johken"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "The Johken",
              text: [
                "Also; Johkefolk, Iyiyohken, Iyijohken, Wiobfolk, Cardinals, Johk",
                "In a small time that encapsulates the struggles of the gods before Mceeju's intervention and the casting of the Black Rain, there existed a people known as the Johke. Despite being commonly depicted as humans, they were more akin to Genasi. Their world was divided and transformed into the Inner Planes, and fragments of their history can be found scattered throughout, albeit faint and incomprehensible.",
                "One element that can be grasped from their history is their 'Rixm Liox,' their sacred book. It contains their focal points, accounts of life, mythology, and other depictions, including descriptions of their appearance and achievements.",
                "Being the first among their kind, they documented the existence of the First Generation of Johken, which consisted of:",
                "Pedgj: A male whose name signifies 'first.' He wedded Giyec.",
                "Cxiyo: A male whose name means 'smile.' The gods created Czequvev specifically for him to marry.",
                "Nefhehsex: A male whose name signifies 'disturbed.' He never had the chance to marry but committed a terrible act by raping Czequvev out of jealousy.",
                "Wiob: A male whose name means 'moon.' He passed away from old age and later became the moon lord, the hero of the moon. The woman Gugig was created specifically for him.",
                "Giyec: A female whose name means 'woman.' She was brought into being specifically to be the wife of Pedgj.",
                "Czequvev: A female whose name signifies 'specific.' She was a woman created specifically to be the wife of Cxiyo. She lovingly cared for her first child Qceey (Son of Cxiyo) but tragically took her own life after the birth of her second child, Ugiy (Daughter of Nefhehsex).",
                "Gugig: A female whose name means 'water.' She was a woman created by the gods specifically to marry Wiob.",
                "Another significant chapter in their history revolves around Susaih and Wiob.",
                "According to Msauh's accounts, the legendary hero twins, Susaih and Wiob, faced great struggles in their quest to defeat the Pedi Lords, the rulers of the underworld. The twins ventured into the depths, met their demise, and were miraculously reborn. This myth symbolizes the agricultural cycle and the yearly rebirth of crops.",
                "These stories hold immense importance in early Johke Mythology and are often depicted in art, including the 'Rixm Liox,' the holy book of the Johke, which can be found in various parts of the Inner Worlds.",
                "Susaih, also known as Su, was originally the son of one of Lcohwuj. His twin was Wiob. Together, they were the renowned Johke Hero Twins.",
                "Susaih and Wiob were inseparable in their lives, cleverly outwitting arrogant gods and the lords of the underworld, Nee. While the historical records do not explicitly state it, Wiob appeared to be the dominant figure among the brothers, often taking charge in planning and communication, although Susaih was far from being a mere sidekick. In fact, Susaih is credited with saving his older brother's life on at least one occasion.",
                "After his passing, Susaih ascended to the Iz and became associated with the sun. He came to be known as the Lord of the Sun.",
                "In the vast tapestry of Johke's history, several notable individuals emerge, leaving their mark on the collective memory of the people.",
                "Ecqig: Known as the Great Sage of Johke, Ecqig possessed profound wisdom and knowledge, becoming a revered figure among the Johken.",
                "Msauh: Another esteemed sage of Johke, whose teachings and insights shaped the understanding of the Johken people.",
                "Lawog: A prominent figure, Lawog held the position of the elder brother among four siblings, a role of great responsibility.",
                "Among the pantheon of deities, the Lcohwuj stood out as four brothers, born of the divine beings Wu and Yu. These skybearers were positioned by a creator god at the four corners of the universe, with each brother associated with a cardinal direction, color, and symbolic significance.",
                "Uufh (later replaced by Msauh): Representing the eastern direction, Uufh was originally one of the Lcohwuj, later succeeded by Msauh.",
                "Lawog: Aligned with the northern direction, Lawog was attributed the color white, embodying its symbolic connotations.",
                "Raar: Governing the western direction, Raar was linked with the color black, carrying its symbolic weight.",
                "Hozanek: Guiding the southern direction, Hozanek was connected to the color blue, evoking its significance.",
                "Throughout the writings and historical accounts, references to the Lcohwuj can be found, their presence woven into the fabric of Johke's culture.",
                "At some point, the brothers became intertwined with the figure of Ecqig, an esteemed sage who served as their caretaker, adding another layer of meaning and connection to their legacy.",
                "The Divine Tower of Teothe is of importance. A testament to devotion and reverence, the Divine Tower stood as a magnificent stonework crafted to fulfill a singular purpose: prayer to Mceeju. Rising high into the heavens, its grandeur captured the hearts and aspirations of the Johken people during the Johke Era. Its towering presence served as a beacon of faith, an architectural marvel that symbolized their unwavering connection to the divine.",
                "As far as we know, their timeline consisted as follows:",
                "Johke Era: The First Generation",
                "In the dawn of the Inner Planes, a momentous collaboration among the divine entities gave birth to the first generation of inhabitants. Among them, Pedgj emerged as the very first, marking a significant milestone in the unfolding tapestry of Johke's history. With their arrival, the Inner Planes found themselves populated by the fruits of divine creation.",
                "Battles of the Abyss",
                "From the depths of the Abyss, hordes of banished creatures and lost souls rallied, forming formidable armies with a sole purpose: to wage war against the Overseer planes. The clash between these opposing forces reverberated through the cosmos, challenging the balance of power and testing the resilience of those entwined in this epic struggle.",
                "Craftsmen of Nhaft",
                "In a pivotal moment, Lwaro, a formidable entity, was finally subdued and contained. This feat was made possible through the existence of an illusory chain, an ethereal construct that defied conventional understanding. The successful binding of Lwaro brought a measure of relief to Uke and Veri, the esteemed lifegivers who had endured the trials and tribulations of their divine duties.",
                "Four Cardinals, Four Colors",
                "To guide and safeguard the Inner Planes, the Lcohwuj assumed their positions as the cardinal guardians. Each brother represented a cardinal direction, symbolizing their connection to the vast cosmos. These divine figures were associated with specific colors, further underscoring their significance and influence.",
                "The writings of Johke contain numerous references to the Lcohwuj, and over time, they became intertwined with the revered figure of Ecqig, an esteemed sage who assumed the role of their caretaker and confidant.",
                "Wiob Ascends",
                "Through his remarkable achievements and the fervent devotion of his followers, Wiob ascended to the realm of divinity. Such a mortal ascension was unprecedented, a singular event that forever altered the course of Johke's history. The pivotal moment arrived when both Susaih and Wiob triumphantly emerged from their perilous journey through the Underworld. Inspired by their return, the followers of Rixm Liox depicted Wiob as a divine figure, bestowing him with an exalted status among the pantheon of deities.",
                "The Nahuehak",
                "In his quest for immortality and to stand on equal footing with the esteemed Great Sage Ecqig, Msauh struck a fateful deal with Pedi, a figure of considerable power. As part of their agreement, Msauh commissioned a skilled Nhaft smith to forge the legendary blade known as Nahuehak, a weapon capable of devouring souls. Delighted by this sinister gift, Pedi claimed Msauh as a close companion and ordered Fexyiaf to test the blade's might on the formidable Lcohwuj, Uufh. This tragic act left a scar upon Msauh's soul, for he and Uufh had once shared a bond of brotherhood. In the wake of Uufh's demise, a creator god saw fit to place Msauh in the vacant position, recognizing his knowledge and ensuring his eternal penance in the stead of his fallen brother.",
                "The Black Rain",
                "The Black Rain, unleashed by Mceeju in response to the escalating conflicts and individual ambitions of the Divine, descends upon the cosmos, washing away the discord and strife that had consumed the Inner Planes. Its obsidian droplets cleanse the expanse of the Outer Marble, erasing the tumultuous history and restoring harmony. As the torrential downpour subsides, the Johken people emerge, carrying the echoes of ancient wisdom and fragmented tales, reminded of the delicate balance between creation and chaos, and embracing unity and reverence as they navigate the renewed cosmos shaped by the profound impact of the Black Rain."
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
