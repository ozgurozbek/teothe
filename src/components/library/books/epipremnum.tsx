"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function EpipremnumContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,Epipremnum"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "Epipremnum",
              text: [
                "The City and its Academica Epipremnum In Epipremnum, technology and magic coexist in a steamy, oily and brassy setting. Olden adventurers often called this Steampunk. Proudly, the city is enclosed in a dome, protecting its citizens from the harsh conditions of the surrounding wasteland. Furthermore, the dome is powered by a combination of steam technology and magic, allowing the city to maintain a comfortable climate and provide for its inhabitants.",
                "The city is ruled by a council of powerful sorcerers and inventors, who use their knowledge of technology, numerical deduction and magic to govern the city and protect it from the dangers of the wasteland. Their powers are generally used to maintain the dome and keep the city running smoothly.",
                "The citizens of Epipremnum are a mix of many races, as they were forced to migrate over time. They live in a hierarchical society, with the sorcerers and inventors at the top, followed by the skilled workers and craftsmen, and then the general population, no matter the race.",
                "The economy of the city is based on trade and the manufacturing of goods using both technology and magic. The city is home to many workshops and factories that produce steam-powered machines, magical artifacts, and other unique items. The economy circulates without many hiccups, essentially providing the common folk with a surplus of resources but no room for growth.",
                "The city is also home to a thriving adventurer's guild, where brave warriors, sorcerers, and other heroes gather to take on dangerous missions in the wasteland and beyond. These adventurers battle monsters, find treasure, and complete quests for the citizens of Epipremnum.",
                "Overall, the world of Epipremnum is a unique blend of steampunk and magic, where technology and weave work together to create a bustling and exciting city, surrounded by a dangerous and mysterious wasteland.",
                "UNLOCK YOUR FULL POTENTIAL WITH US The school in Epipremnum is an academy of magic and technology, where students learn to harness both the natural and industrial resources of the world to survive and thrive in the harsh wasteland outside the city's dome. The school offers a variety of classes and subjects, including Inborn Magic and Emotion, Nature and the Feywilds, and Practical Magic and Technology.",
                "The professors are experienced and knowledgeable, and the school's library and laboratory are filled with ancient texts and cutting-edge equipment.",
                "The school's atmosphere is characterized by ornate and decorative designs, often featuring elements such as turrets, towers, and elaborate detailing on the exterior and interior of buildings, same with the city. This style of architecture is often associated with grandeur and opulence, and was popular during the construction of Epipremnum. The school also has a lot of steampunk elements, with dark stone and metal walls adorned with clockwork gears, brass pipes, and intricate machinery.",
                "The school is not just a place for learning but also a sanctuary, with a sense of camaraderie and community among the students and faculty.",
                "As the individuals start their journey as students, they will be introduced to a variety of magical and technological concepts and will have the opportunity to make new friends and allies. They may also discover hidden secrets and mysteries within the school, such as the Mirror of Erised or the ghost of the founders.",
                "Throughout their time at the school, the players will face challenges and adventures, but will also have the opportunity to learn and grow, both as individuals and as a team. They will also be able to make a difference in the world outside of the city's dome, using their newfound knowledge and skills to help the people of Epipremnum and the wasteland.",
                "UNLEASH YOUR INNER WARRIOR The school also has a dedicated section for martial classes, known as the Combat Wing. The Combat Wing is located in the basement of the school and is accessible via a separate entrance (3). The wing is designed to simulate battlefield conditions and is equipped with training grounds, obstacle courses, and mock battlefields.",
                "The Combat Wing is run by a team of experienced combat instructors, who are skilled in various forms of combat, including swordsmanship, archery, and hand-to-hand combat. These instructors are available to train students in the art of warfare, and to teach them how to use weapons and armor effectively. They also teach students how to survive in the wasteland, how to fight and how to defend oneself.",
                "The Combat Wing also features a armory and a forge, where students can learn how to repair and maintain weapons and armor. The armory also contains a wide variety of weapons and armor, including swords, shields, axes, and bows. The forge also provides students with the opportunity to craft their own weapons and armor, under the guidance of experienced blacksmiths.",
                "Students who choose to specialize in martial classes will spend most of their time in the Combat Wing. They will take classes in various forms of combat, and will participate in regular training sessions and mock battles. They will also have the opportunity to join the school's combat teams, which participate in regular inter-school competitions and battles against the creatures that threaten the city.",
                "In addition to the combat training, students will also learn about strategy, tactics, and leadership. They will also learn about the history of warfare and the different types of weapons and armor used throughout history. This will give them a well-rounded education in the art of war and will prepare them for a variety of careers, including becoming a warrior, a knight or a general.",
                "DISCOVER THE MAGIC WITHIN YOU Sorcery and mathematics are two key subjects taught in the school's dedicated section for magical classes.",
                "Sorcery classes focus on the manipulation of energy and matter through the use of incantations and ritualistic practices. Students learn to harness their innate magical abilities and channel them through various forms of spellcasting, such as elemental magic, divination, and necromancy. They also learn about the history and theory of sorcery, including the study of ancient texts and the study of different magical traditions from around the world.",
                "Mathematics classes focus on the application of mathematical principles to the study of magic. Students learn to understand the underlying mathematical concepts that govern the workings of magic, such as the principles of symmetry and proportion. They also learn to use mathematical formulas and algorithms to create and control magical effects, such as teleportation and illusion spells.",
                "The section also includes classes of martial arts and self-defense. These classes are designed to teach students how to defend themselves in the dangerous world outside the dome. Students learn various forms of hand-to-hand combat, swordplay, and archery. They also learn how to use magical abilities in combat, such as using spells to enhance their physical abilities or to create magical barriers for protection.",
                "Overall, the dedicated section for magical classes at the school provides students with a comprehensive education in the art and science of magic, equipping them with the knowledge and skills they need to survive and thrive in the harsh wasteland outside the dome.",
                "EMPOWERING THE MAGIC GENERATION In addition to the standard curriculum, the school has a dedicated section for students interested in the more advanced and specialized field of sorcery. This section is known as the Greater Magic Program, and it is considered one of the most prestigious programs within the school.",
                "The Greater Magic Program is focused on the study of advanced magical theory and practice, including the use of complex mathematical formulas and advanced magical constructs. Students in this program learn how to harness the power of magic in new and creative ways, and to use it for a wide range of applications, from teleportation and evocation to the manipulation of time and space.",
                "The curriculum for the Greater Magic Program is rigorous and demanding, and students are expected to have a strong background in mathematics and physics, as well as a deep understanding of magical theory. The coursework includes classes on advanced spellcasting, magical energy manipulation, and the use of magical symbols and incantations.",
                "In addition to the classroom lectures, students in the Greater Magic Program are also expected to engage in independent research, preferably over Ancients, under the guidance of a mentor or professor. This research is often focused on developing new and innovative ways to use magic, and students are encouraged to explore the boundaries of what is possible with this powerful force.",
                "The Greater Magic Program is not for the faint of heart and requires a lot of hard work and dedication. But for those who are willing to put in the effort, it offers the opportunity to make a real difference in the world and to push the boundaries of what is possible with magic.",
                "WHERE KNOWLEDGE AND POWER MEETS The dormitory at the school islocated behind the second gate, providing a safe and secure area for students to live and study. The dorm rooms are spacious and comfortable, with four beds, a kitchen, and a common area for students to gather and socialize. The common area is a great place for students to relax and unwind after a long day of classes, and the kitchen allows them to prepare their own meals and snacks.",
                "The social environment at the school is vibrant and active, with plenty of opportunities for students to connect and make new friends. The main yard of the school serves as the hub of social activity, hosting events and gatherings that are appropriate for the grim and harsh wasteland of Epipremnum. The yard is also a great place for students to practice their skills and show off their talents, whether they are magical, martial or other.",
                "Overall, the school provides a safe and nurturing environment for students to learn, grow, and make lasting connections. The dormitory, main yard, and the dedicated sections for magical and martial classes all contribute to the social and educational experience at the school, and help prepare students for the challenges they will face in the world outside the dome."
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
