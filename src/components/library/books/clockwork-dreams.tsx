"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function ClockworkDreamsContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,Clockwork Dreams"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "Clockwork Dreams",
              text: [
                "Isaac had always been fascinated by machines and gadgets, ever since he was a child. Growing up in the bustling city of Teothe, he spent his days tinkering with whatever mechanical contraptions he could get his hands on. Eventually, his curiosity and passion led him to become an artificer, using his talents to create intricate clockwork devices and automatons.",
                "But Isaac's abilities didn't stop at just building machines. He was also an adept spellcaster, able to harness the power of magic to imbue his creations with additional abilities and functions. He quickly gained a reputation as one of the most skilled and innovative artificers in Teothe.",
                "One day, Isaac received a commission from the city's ruling council to create a new type of clockwork security system to protect the city's precious resources and citizens. As the Iron Golem melted, Isaac eagerly accepted the challenge and set to work designing and building the system.",
                "As he delved deeper into the project, Isaac began to uncover a sinister plot to sabotage the city's defences and steal its resources. He quickly realized that his clockwork security system was the key to stopping the thieves and saving Teothe.",
                "Determined to protect his city, Isaac worked tirelessly to perfect his system, and soon it was ready for testing. He set it up in the city's main square and activated it, watching with pride as his automatons sprang to life and began patrolling the area.",
                "But the thieves were not so easily deterred. They launched a surprise attack on the city, but Isaac's clockwork security system proved to be more than a match for them. The automatons successfully defended the city, and the thieves were captured and brought to justice.",
                "Thanks to Isaac's ingenuity and determination, Teothe was saved and he was hailed as a hero. From that day on, his clockwork creations were used to protect the city and its citizens, and Isaac became known as the 'Clockwork Guardian' of Teothe.",
                "One day, he was wandering through the bustling streets of Teothe, searching for the perfect set of gears to add to his latest invention. As he rummaged through the stalls of a local market, he couldn't help but feel a sense of excitement and wonder at the sights and sounds around him. The clanking of gears, the whirring of machines, and the chatter of merchants all added to the vibrant energy of the city.",
                "As he walked, he couldn't help but feel a sense of familiarity as he passed by a young woman with striking red hair. Her name was Evelynn. She was a skilled sorceress, known for her unique blend of magic and fey energy. She caught Isaac's eye and they started talking, Isaac was smooth. They quickly found that they had a lot in common, and soon they were inseparable. He even showed her how to make a water filter!",
                "But their happiness was short-lived as Evelynn's brother, Netheron, became a problem. Netheron was a powerful fighter-warlock and had always resented Isaac's presence in Evelynn's life. He saw Isaac as a rival for his sister's affections and was determined to drive him out of Teothe. He began to use dark magic to sabotage Isaac's inventions, if not brute force, causing them to malfunction and injuring several people.",
                "Desperate to protect his loved ones, Isaac turned to an old friend, a powerful wizard named Zeandil, for help. Zeandil was able to provide Isaac with an enchanted clover that would provide him with guidance and emotional support. With this powerful tool, Isaac was able to find the courage and strength he needed to confront Netheron.",
                "Isaac and Netheron had a fierce battle in which Isaac's ability to control machines and Netheron's ability to control elements clashed. But in the end, Isaac emerged victorious. He was able to not only defeat Netheron but also banish him from Teothe for good. With the city safe and his loved ones protected, Isaac and Evelynn were finally able to live in peace and happiness.",
                "Or that’s what he believed. Evelynn sobbed for decades for the absence of her brother, and her lover being the cause did not help. Isaac made it work, after long trials and verifications, but Evelynn, even though affectionate, was never the same.",
                "Moreover, the clockmaker's curse still lingers. Isaac's inventions are still malfunctioning and no one knows why. Isaac is determined to find out what is causing the malfunctions and put an end to the curse once and for all. He sets out on a journey with Evelynn to uncover the truth and put an end to the curse. They encounter many obstacles, but with the help of Nepi's Clover, they are able to overcome them and find the source of the curse.",
                "In the end, they discover that the curse was not caused by Netheron but by an ancient mechanical creature that had been awakened by the city's expansion. The one who wielded a dragon scale armour! They were able to defeat the creature and put an end to the curse, but not without losing a dear friend in the process. But they knew that they had saved the city and their loved ones, and that was all that mattered.",
                "With their love stronger than ever, Isaac and Evelynn knew that they could face any challenge that came their way.",
                "The end."
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
