"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function WhatAreTheseCloversContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,Dufrene's Notes"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "Dufrene's Notes",
              text: ["Dufrene's Property. [Content warning; Dufrene is a vulgar man that uses vulgar language]"],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Verus . 14",
              level: 2,
              text: [
                'I finally bought that book from grumpy Rhett. He made such a fuss about it! It doesn\'t even look desirable. "Illusory Creatures in Medicine". That really sparked my interest. He definitely knew how to abuse it. I honestly hate that racist gnome.',
                "I wonder what good deeds I can accomplish with this book though. I know that people on the battlefield or adventurers use illusions for mere trickery, but I hope this book will be of good use. First page starts with some simple explanation about the author. I saw some drawings of plants as well. I thought this was all about the weave and magic.",
                "Days are dull as always. It's expected at this point. After seeing a couple hundred bloodied adventurers, I think there is nothing that could surprise me here. Couple of people enter the temple seeking guidance or treatment. I think they abuse it because it's free. King pays good gold for head clerics but they are not the ones committing labor! I wish I was treated like that though. Do nothing, get paid the most...",
                "Reminder: Get a decent binding, pages are going to spill out.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Verus . 17",
              level: 2,
              text: [
                'Remember that book I was talking about? It\'s utter crap. Apparently you treat people by confronting them with their great fears nowadays. "If they have a weak heart or a weak mind, they are of waste." says the book. What a sick mindset.',
                "I paid TWO GOLD PIECES for this cover. Fucking thieves I tell you. Prices are elevated recently though... We are not charging anyone so I wouldn't know. I should talk about my payment with Mr. Walker. Bad thing is, it's really heavy and I don't like how it smells. It's old leather, looks bad as well. Maybe they gave me the \"armpit cut\" from someone's armor. As expected, horrible, horrible smell. Reminder: Return the book. Maybe ask Rhett for your money.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Verus . 17",
              level: 2,
              text: [
                "Verus . 18",
                'I spent the whole day taking care of some sick couple. UKE AND VERI GUIDE ME WHO THE FUCK USES ORC TOES AS SPICE? I am cleaning their bodies and they are still defending "the taste". Lcohwuj show them the way.',
                "I'm this close to throwing up.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Verus . 23",
              level: 2,
              text: [
                "Phew, couple long days! Finally being able to track myself again is terrific. Good news, I got rid of the smell. Bad news, resting leather with flowers under the sun makes wonders smell wise but ruins the texture. It's all dark and stiff on the edges now.",
                "I returned the book to Rhett, he was mumbling on and on about some kid and how he never visits him anymore. I wonder why old man... Second thoughts, a kid enjoying being with Rhett instead of childing around is most likely as weird as him.",
                "I'm seriously pissed at this Walker fellow. Just because you can use the weave better or have some higher understanding over religion or have a fine, structured relationship with your deity doesn't mean you can boss around others. He did raise my pay but even I can't cure myself of his ill words.",
                "I just got my hands on a new book. It looks pretty old and I know people that'll beg for this! I'm just going to enjoy myself. Good night my dear.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Verus . 25",
              level: 2,
              text: [
                "WHAT IS THIS? I DON'T UNDERSTAND? WHAT ARE YOU TALKING ABOUT?",
                "NO AUTHOR? NO MEANING? NO STORY? NOT EVEN A CHILDREN'S TALE? I DON'T UNDERSTAND?",
                "ARE THESE INSTRUCTIONS?",
                "I CAN'T LEAVE THIS BOOK IT'S SO MEANINGLESS BUT BEAUTIFUL! I DON'T UNDERSTAND!",
                "I LOVE HOW I DON'T UNDERSTAND IT!",
                "OH...",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Verus . 30",
              level: 2,
              text: [
                "I don't understand what I'm doing wrong. I set up a dark area, get the plants, light the incense, say the words, ant try to bend the weave. It doesn't work. I believe this should make me see a deity or some other- worldly being. I think I fail on the weave part. Maybe I should get a good scholar to help me. I doubt I can explain the matter though.",
                'I realized I spent too much time not working. This is bad especially after my feud with "The Oh So Great Vialpando!", Mr. Walker. I should go cure people.',
                "Reminder: Look good for tomorrow. Look presentable.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Verus . 31",
              level: 2,
              text: [
                "I attended a burial today. Officially, a very first. I know that Mrs. Louann and Mr. Zonka handle adventurer guild's jobs but I guess they got a number of dead. I remember attending Braccus Rex's burial, just to see how it all worked out. Good investment.",
                "I buried Leppak Nomi and a burned corpse. Clearly a lacking group of adventurers. -I mean, a group of dead ones-",
                "Felt bad for the burned dude though. Probably kept somewhere for a week or so. He wasn't rotting but he had mold all over him. The other, already rotting. I puked a lot as you can guess. I have a weak stomach don't blame me. Precious food on their grave now though. Should I tell that to anyone?",
                "Good news, their party allegedly opened the portal to Sturgell, making the commute a couple days shorter. I wonder how much they got paid.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Verus . 34",
              level: 2,
              text: [
                "I bought new incense, new plants... I still can't figure out this puzzle in the book. I asked Rhett about it, he doesn't know anything. Mr. Walker has no idea about it as well. He said he would take a look but someone so devoted to Yadseca and still managing to be a cunt, I didn't let him borrow it.",
                "I had a weird dream last night. I was shopping at Gary's, that stuttering shop-keep kept talking about how he knows that book. I'm going to take it to him sometime.",
                "Also an Okri deed today?! What a big fuss! It's pretty impressive though. I know Malphas! It was him with his party whom brought it. Although, there is no- thing left of his party but him. Malphas is more like the Asterin in that sense. Even though all the effort, ends up sacrificing himself for the greater good but also ends up as the last man standing. He pushes his chances too much.",
                "Reminder: Get that tale. Haven't seen it in ages.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Asterin and the Sweets",
              level: 3,
              text: [
                "Once upon a time a strong horseman roamed Thaum. He never used his horse but he was strong. He kept slaughtering goblins and kobolds, saving everyone.",
                "One day, he had a struggle. He met with Ekdahl. Ekdahl was an evil sorcerer which was brutally bullying people with his magical powers. Stealing childrens sweets and tossing bugs at them! To save children and their sweets, Asterin teamed up with his friends. They attacked Ekdahl and saved everyone again. But Ekdahl ran away scared from them all.",
                "While Asterin and his friends saved everyone again and again, Ekdahl found the Deck of Wusor. Asterin felt that power being discovered and tracked Ekdahl down. Asterin beat Ekdahl again and took the deck, thus saving everyone again!",
                "I could only found the children tale of the first half...",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Human Lover of the Ill-Bringer",
              level: 3,
              text: [
                "...he reached for the deck, facing Ekdahl in great fear. Everyone in that room knew something bad was going to happen. Ekdahl was not the one to make mistakes.",
                "Melen acted first and grabbed the deck of Wusor. To get out of there and help the great adventurers even slightest, she drew a card. Upon drawing, the card disappeared out of her hand and reformed behind her as an avatar of death. Giant skull with black blood flowing around it, it impaled Melen. Sucking up her blood and soul, Melen, in an instant closed her eyes. She couldn't even scream for help.",
                'Lara screamed and tried to save her dear friend. She knew that without taking risks, she couldn\'t create a future. Catching the falling deck, Lara drew from the Deck of Wusor. Her friends screamed "No!" but it was too late. Deck consumed her and her light from her eyes, turning her into a dust. Seconds before she died, she murmured a word, a wish. Ekdahl was stunned and paralyzed. He could not attack nor move.',
                "Losing two friends, Asterin moved for the deck. There was no-one to stop him. His friends died, his party massacared, his nemessis in his reach... He drew another card from the magic nurtured deck. Thinking maybe, maybe he can be the one to end it all.",
                "An Ill-Bringer from the depths of Cepx, spawns. Ill-Bringer completes the deed of her summoning. The deed being granting Asterin the power to end Ekdahl but not end him itself. Ill-Bringer then disappears, leaving a dagger behind.",
                "Asterin never found out what that dagger was supposed to be. It was a key between planes. It was a key for him to reach that Ill-Bringer again. In a moment of anger, he believed that the dagger would solve all his problems. He took it and slit Ekdahl's throat. Ekdahl did not even fall. Lara's wish was that great. Although his adventure was done, Asterin became obsessed with the power. Fell in love with it and never forgot what happened there. What granted him this power.",
                "He eventually fell in love with the Ill-Bringer. At his final moments, a lunatic Asterin went to Rizug, complete opposite of Cepx. He never regained his lost mind of found his sick love. His usage of forbidden magic, even though it was to destroy a threat to the mankind, rewards you with the forbidden reward.",
                "A reward that you'd never want.",
                "- D.M.'s Notes e:7-2 p:122",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Verus . 41",
              level: 2,
              text: [
                "It was kind of obvious that stutter man wouldn't know a thing about the book. He asked to purchase it though. I'll not allow it. It's mine.",
                "I'm going to share some drinks with my friends. Coworkers to be exact. Hopefully the bard at the tavern would play some good pieces. I like them with continuous harmony. Sounds fast but elegant.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "3 . 42",
              level: 2,
              text: ["I'm", "nover", "gonma", "durink", "agaim"],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Verus . 43",
              level: 2,
              text: [
                "You know what they say... Failure is only the opportunity to begin anew. This time, with wisdom. I found out the missing ingredient, it's blood. The life juice. The holy wine. I need some free time before attempting this though. Maybe hire some secluded place.",
                "I tried to attempt the ritual once again, without blood. Didn't work out as intended. I need some rest.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Verus . 44",
              level: 2,
              text: [
                "I got couple of new orders today. I also have some stuff to do myself so here's a list!",
                "1 Clean the burial zones.",
                "2 Bury the new ones on top of old ones.",
                "3 Educate newcomers to the temple.",
                "    3.a Make sure they can cast...",
                "    3.b Make sure they can help without casting.",
                "4 Find some weave-free cure for drink-aches.",
                "5 Do the ritual and hopefully that'll help me under-stand the rest.",
                '6 "Decipher the puzzle" for Mr. Lorok.',
                "I'm still looking for my old journal I lost at the sewers but I guess all hope is lost there. I should elaborate more on Lorok's puzzle -again- so it still holds sense next time I read these pages.",
                "Lorok's Puzzle",
                "Basically Lorok is this shady guy who delivers me my pills. I need them because I can't sleep well. Personally, I like his company. He's chill. He even raised and took care of an orphan. I guess his name was Brelnor.",
                "Puzzle is not technically a question or a riddle but a life thing. Lorok and his buddies are thieves, rogues and blatantly outlaws. They do all sorts of crazy stuff which I'd never attempt. He is in a secret guild called \"Shattered Skull\". Unlike him, people fiddling with this organization are quite the famous. They tend to be hidden or secretive but everyone with the right mindset can find out what the organization is or who's in it.",
                'Puzzle at hand is this. Lorok and his friends joined this years ago and he now wants out. Not a huge thing. Organization is really serious though and Lorok is not "powerful". He faked his own death to get out somehow, that turned out well I guess. I still receive my medications so I know that he\'s not dead. He asked me to come up with some plan to aid him, without making him "obvious" to some peering eyes. Need to deceive them and save the poor man.',
                "He really should've gotten some wizard or sorcerer buddies. He's stuck with a good-doer cleric like me.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Verus . 48",
              level: 2,
              text: [
                "I thought I lost my journal again. It's becoming a habit, I should better keep track of my belongings.",
                "For the long time I was out, not updating this, I did all the \"cleric\" work. No one to heal, no one to cleanse. Just a graveyard job for me. I know why they select me now though. I have a hard time dealing with dead and have a weak link with the weave. My coworkers know I'm a weakling. It's sad that spending time and cherishing with them ended up like this. They just want to know that I'm suffering...",
                "About the education part, yeah. That was a prank. How fun. I was really excited about it BUT TURNS OUT MY SO CALLED CO-FRIENDS JUST WANTED A QUICK LAUGH.",
                "Reminder: Really find that cure so you can laugh at them while getting rich.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Vihus . 2",
              level: 2,
              text: [
                'Ritual day finally. I got nothing to do for the next couple of days. I got everything ready too, the plants and the incense. Kind of scared now since it requires blood though. Everything feels somewhat "evil".',
                "I set up the dark room. Got a laminated piece to stick my incense in, it's valued. Got a new silver plate to show my gratitude. Hope the silver won't ruin anything. I set up all the flowers and plants. They smell nice, it's like I'm serving some decent food to a known person. Time to chant the words but I need some encouragement. Have my drinks and pills with me, so a bit more than the usual will do the trick!",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Vihus . 4",
              level: 2,
              text: [
                "MY LEFT HAND IS CURSED! I CAN'T FEEL ANYTHING AND IT LOOKS LIKE I'M GROWING WINES FROM MY ARM INSTEAD OF MY ARM! WHAT THE FUCK? DO I TREAT THIS, HOW DO I TREAT THIS? I FEEL LIKE I'LL REGRET THIS. FUCK ME.",
                "My body aches all over. Finally I can make some sense of my surroundings and my nausea has passed. I honestly don't know what it all was, couldn't tell anything but I can swear somebody was talking to me. It's all a trick I guess. My senses deceiving me...",
                "Upon further research, I figured out the rest of the book. I see how my vision now allows me to read this. What a great magic, I've never seen anything like it. Book mentions a deity Spina, having lost multiple battles against Gud, the god of war. I've never read this elsewhere. I should talk to some other followers of Gud. There are more than plenty since trans-vision people like Gud. \"I see what you can't see in the beauty of war\". My ass.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Vihus . 5",
              level: 2,
              text: [
                "Alright. I've talked to these followers of Gud. None of them have any idea about what I'm talking about. Worst of all now they all think I'm making stuff up all because I want to be included. I already hate this quest I brought upon myself. They could be right though, maybe I have dreamed and maybe I just wanted to be included.",
                "Reminder: Get some replacement potions for the temple.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Vihus . ??",
              level: 2,
              text: [
                "Haven't realized how these days have passed. I've now been practicing the ritual over and over again whilst trying to make some decent contact. I think my blood doesn't cut it anymore?",
                "I remember hoarding valuables from the dead, I know I know. It's bad. Some of them are bloody maybe I can scrape the flakes and that'll work? I don't want to use many pills again. Or over-enchant myself with weird potions. Some of them are poisonous.",
                "Maybe I should use this wine arm? I should've shown it to my coworkers earlier as a proof but they are so retarded to even listen to me. I'm gonna murder them one by one if I get the chance. Actually, maybe a living sacrifice would work better!",
                'So called friends visited me from time to time. They claim they were worried like I\'m going to buy that. Idiots. "We are afraid that you are going to do harm to yourself!". Fucking whores now understand my value after losing me? What are them, bunch of spoiled kids? Fuck them.',
                "I now understand the power of my left hand. I realized with it I can't hurt others but instead heal them or help their insides. I can't cure it at all but most likely this is a blessing and not a curse. Why the fucking blood though? I can't find anywhere a good grace associated with blood.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Vihus . 12",
              level: 2,
              text: [
                "Such long time wasted. I've bought and returned the potions to the temple. They didn't need them anymore though. They got some a couple days ago. I got screamed at and, newer burial duty. That's irritating.",
                "Good news though, I met a curly haired half-elf woman this morning. Awilda. We shared some time together with some drinks. I took her to the temple and helped her relieve some stress.",
                "We made plans to meet again in a week or so. She works at the brewery near the Hozanek Gate so I might pay her a visit. She really is a treat.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Vihus . 15",
              level: 2,
              text: [
                "A calm day today. I pet so many animals I think I don't want to see many for a decent amount of time. While shopping I heard a feud from one of the abandoned potion shops. Shopkeepers lack the wizards to make potions these days, people just visit temples and get themselves sorted out there. I saw Lorok and his friend with a fugitive leave the place. I thought about silently approaching them but no, I should respect Lorok's wish.",
                "I could just pursue them for a while, make sure everything is okay.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Vihus . 17",
              level: 2,
              text: [
                "Rough day with Awilda. I doubt she enjoys my company. Couple days ago was fun but it was a one time thing I believe. I don't want to talk anymore about it.",
                "What a crazy evening! I heard some noise while passing near the arena. I've mentioned this before, the arena where we found about Otde and his artifact. Quite basically, it's a necklace with weave infused into it. So powerful though he made a joke out of all our adventurers. People believe he is somehow dis- appearing and re-appearing or believe he could move incredibly fast, but I know the truth. He can just stop time and move. That just sounded like a massive lie on my end.",
                "Anyhow, I saw some rookie adventurers fight a seasoned Malphas. It looked like a training but oh oh oh. First one took a massive magical hit and got replaced by the other rookie. He couldn't believe his own eyes! His replacement knew a mere power battle would only result in his defeat, so he did all sorts of mind bending light toggling magic. Although, on Malphas... Not a wise choice. Come to think of it, first one looked a lot like the child Lorok saved. I'm imagining things. I definitely need to rest.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Vihus . 20",
              level: 2,
              text: [
                'I did the unthinkable. I forgot to write about Lorok. My following lasted for a day or so, as they set up camp, I returned back. Nothing out of ordinary, he seems he was enjoying himself. Fugitive Dismas on the other hand with the man named "Cleaver" looked dead serious. Anyway, not my problem. Don\'t want to get into weird outlaw business.',
                "Massive fuss in front of the temple and also just outside the guild. Adventurers' one. They are going to locate that odd dungeon which appeared from nowhere. It's bullshit for multiple reasons. One, how can a structure just appear out of thin air? Two, if it did why are they going in there, I don't know that kind of magic and literally no promise could take me in there. Ones venturing there must be quite brave or brainless shells. Hope I won't have more burial duty. I hate it there. I hate that I'm getting used to it too. Wrong words cross my thoughts.",
                "I just found out that they were going to make sure that they can enter the structure when and if they want it. I kindly take my words back.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Vihus . 24",
              level: 2,
              text: [
                "I saw Awilda again today. She was as she was earlier. Nothing out of the ordinary. I believe I should talk to her.",
                "WE ARE GOOD! I talked to her and she game me all sorts of crap but then I remembered the power I had. My wine arm! Without hesitation I gently used it to touch her head, soothing it and making its despite disappear. She just laid down on my arms, watching others. Sweet.",
                "I felt some blood coursing through my hand though, she even lost color instantly. Maybe she was going to pass out if I were not to catch her. Anyway, I'm sure she surrendered herself to me because she has feelings for me too. I'm not an animal I'm not going to kidnap her or anything.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Vihus . 27",
              level: 2,
              text: [
                "Crazy beginnings! A ship from Sturgell arrived and with it plagued people. We hastily get them to the temple and began treating them. They appear to be under some magic and haven't slept or eaten for days.",
                'Taking care of some and unfortunately carrying some to "the pile" has tired me. I\'m the one who\'s going to bury "the pile" as well so screw this.',
                "OH, OH OH OH! I met someone with the hands just like mine! Jenelius I presume. I remember now that I were to look for a Jenelius! It was the sole outcome, the sole purpose of my ritual! SHE'S HERE!",
                "We got her out with her friend Sucal. They were both uninjured, although Sucal appeared a little sick. Jenelius told me that she has already cured him. We went to the ship where they came from and try to look for something that could help us identify this disease. A city guard is also following us, he was questioning Sucal and Jenelius for a while now. I'm glad I saved her and used my robes to cover her winified hand.",
                "After a while in the ship now, we tied the Guard to a post and Sucal declared he knew how to operate this ship so we began cruising. We are really further away from the city now and I wish I had my old notebooks and sources and my packs and pouches with me. Kind of tiring that now I have to reassemble all that.",
                "Jenelius demonstrated her use of the wine. She has a different looking wine than mine. Mine is at least appealing, hers is outright evil looking. She had a small chat with the guard, sat on his laps and hit his face. Unfortunately she does not look appealing under her clothes. She just wears underwear and some other thin clothing. To assert dominance? Weirdo.",
                "She sucked all the blood from Mr. Guard with a couple hits to his face. He lost all color whilst her wine grew. She probably did this before. A murderer. I can see though, I choose this path and ritual and this deep inside, I doubt I can leave now.",
                'We set sail to a cave that she and I both saw in our dreams. Well, by dreams I do not mean sleeping dreams, I mean worshiping dreams. This so called "deity" makes me see things and apparently, make Jenelius too.',
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Vihus . 30",
              level: 2,
              text: [
                "We finally reached to this cave. It is surrounded by a river flowing almost into it and a lake a little further away. It has been a long time since I left the city and ventured out in the open, nature, like this. We've also been cleaning the ship with Sucal, checking for valuables all around the ship. I tought him some basic cooking and he now makes our food. Although it lacks taste, we have a decent supply to fill ourselves.",
                "Said looting is not finished yet so I might return the ship since Jenelius told me that it was important. I also prefer the solitary. About the cave, she ventured inside ordering me to stay outside. I have no problems with getting orders, I am used to it but she could be kind with these. Has been a long time since I saw her fully clothed and in armor though. She looks bearable. Jenelius Londste. She has green eyes and bright blonde hair. As an elf too, she'd be crispy if not for her weight. Not my taste. She also looks really young, I know they live for a long time but she feels young too.",
                "After her dive into this cave, a dwarf emerged. He looked tipsy and didn't even utter a word. He was also waiting next to me, I believe he's going to help Jenelius anyway so I'll head back.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Vihus . 34",
              level: 2,
              text: [
                "Finally they are back. I completely cleaned the ship, looted it, got some valuables and tomes I wanted to keep and showed them all to Jenelius. She was really angry at me for leaving her. What an idiot, it's not like I'm a fighter. If she needed my help she should've called me inside. I though she'd be different but she's turning out the be exactly like the ones on the temple. Anyway, she has a long path ahead her if she wants to go there. Also, I can understand that something happened so she might just be scared. I heard the bang everyone felt. It was horrific.",
                "I gave Sucal a marble, engraved incense holder and told him to gift it to Jenelius. He was feeling ashamed and out of reach since she saved his life. Maybe this'll help him.",
                "While talking to Dergrog -the dwarf from the cave- I saw that he too had wined body parts. He said he was waiting for this Tabobeum fella and apparently he found him? I can't speak Dwarven so I'll just let it slide.",
                "Getting the ship out and making plans to make it unidentifiable, we decided to replace some parts and paint it. I also know of people who can \"forge\" an ownership title to us so I mentioned it to Sucal. He's the one who's going to handle all this and I am glad that I finally can have some free time to focus on my assembly. I have nothing useful next to me.",
                "Barely sailed, we saw a torchlit shore with a girl waving at us. Sucal said we had a small boat below the deck so we got it out. Dergrog, Sucal and Jenelius left me here and started going to the shore. Said girl started attacking them with a couple arrows but It was okay. Shae is a ranger and quite the beauty. She uncannily looks like Awilda. A younger, more ripe version of her anyway.",
                "We set sail to Loutra. Not long after a Tiefling Wizard attacked us, making us almost surrender to it. It is not a man but a hellish spawn so no wonder he can float and do shit like this. Acolytes of Gud are after us as we knew but we never expected to be found this quickly. They were the ones banishing our deity at the various points on time. This cursed spawn used a spell that deceived our eyes into thinking we were ambushed. Not long after, he showed himself amidst the mist and proceeded to display his chest. A torso full of wine. It never talks to me but I heard a deep sound coming from it whilst listening to their conversation with Jenelius.",
                "IT HAS A ROOM RIGHT NEXT TO MINE AND I DO NOT ENJOY THIS.",
                "Reminder: Convince Sucal to rearranging the rooms. I want a room next to Shae's but not this'.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Vihus . 38",
              level: 2,
              text: [
                "We are back to Loutra! How I missed this place. It stinks of boredom and dullness. I single-handedly gained friends that have more adventuring experience than everyone here. Probably not.",
                "Ship is a mess again and -hopefully- it'll get fixed and cleaned soon. Sucal is onto it, I don't know if he could use my help. Better ask.",
                "I think Yenn has some stuff to do here. Other than ship repairing she seems to have a couple days planned with bank, guild and social work. I'm just going to study with this free time.",
                "Reminder: Maybe Rhett is here, could check on him!",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Vihus . 41",
              level: 2,
              text: [
                "There is a talk about a dungeon now. We are going to clean that up for a reward for ourselves. It is good that we are also helping the community here. I wonder what expects us there.",
                "I just found out that this information I wrote a couple hours ago was given to us by the high wizard of the adventurer's guild. What a blast! This is a massive opportunity for us to make some names.",
                'I honestly can not wait for tomorrow. I figured out how to use my healing as well. Casting it, bending the magic using this wine "toy" helps massively. I wonder how others perform compared to their pasts...',
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Vihus . 42",
              level: 2,
              text: [
                "As we approach the dungeon, others arrive. Malphas and the ones fighting him before. Brelnor and Khadgar! Great! We need all the help we can get.",
                "DEAR GOD! WHAT THE FUCK HAPPENED. DERGROG TURNED TO A GIANT, WE MET CARNAGE DEMONS, MALPHAS AND GREYHOUND ARE BEASTS ON A COMPLETELY DIFFERENT LEAGUE THAN THE REST OF US! I CAN'T COMPREHEND WHAT HAPPENED! WE ALL PASSED OUT AT THE END. THE DUDE WAS FLYING AND JUMPING AND TURNING AND DEAR GOD of the wine thing? WHAT THE HELL WAS THAT?!",
                "Fucking hell, Khadgar was in a critical situation, we barely got him out alive. He is in a pretty messed up state now. Hopefully he'll get better.",
                "Upon further thinking, I don't have a clue who that gravedigger magician was? Was it his dungeon, I'm also lost? I hope we will not see him again but he clearly said that our paths would cross again.",
                "Jokes aside, hope we got paid well. Yenn does not pay us enough but we are free to spend what we have. It's nice. I'm gonna get wasted.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Vihus . 43",
              level: 2,
              text: [
                "I overheard that Brelnor needed to send some letters to someone. Shady fellow I tell you. Still, Jenelius trusts him so do I. That's a big lie though he might need to earn my trust. I don't think it'd be difficult.",
                "Dergrog is fucked up. We can't get a cure for him and compared to the day before, he has some weird scars around his body. He seems to have lost his wines as well. Hopefully we can cure him at Akuzar.",
                "Speaking of that, we are now traveling there. Jenelius had a vision about that and well, here we go to fight The Second. I think I've read somewhere that Akuzar had a treasure underneath one of it's many caves. I'm excited.",
                'Shae came up to me, saying that Yenn is "not caring enough" and "not a team player" and "making all the major decisions herself". She has a point, we are not side characters on a play she stars. Though, I gave her my opinion and shared some of my experience with her. She is a better adventurer than me, but being with Yenn more than her, I can tell that she actually cares. Can\'t prove it, but she does. She is also a blood drying healer, of course she is a team player. I hope this won\'t turn out as a big fuss.',
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Fexyius . 7",
              level: 2,
              text: [
                "GOBRE! This place stinks and after all this relaxing travel time, I am not going to complain about this place. I'm going out, having a good day shopping. Sucal and I also going to restock stuff for the ship. I know he gets all the credit because he presents himself that way but I truly don't care. It's good enough to know that I've helped. Also Jenelius needs my other qualities.",
                "Wonderful night, and I just heard that Shae, Brelnor and Yenn burned a whole street down. How fun! Speaking of Shae, I know she lied about me supporting her on her claims but I think others are wise enough to see that she was lying.",
                "Can't sleep. Shithole stinks like... shit.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Fexyius . 11",
              level: 2,
              text: [
                "We finally arrived at Akuzar. Dergrog is in a horrible state and I honestly can't find anything to do, to help him. I've even done the ritual and contacted our lord, which ended as he belittled my efforts. Does he not want to save him? I thought Dergrog was one of us, dwarves are not known to cross with their beliefs, maybe he truly betrayed us?",
                "First time I spoke with Khadgar today. We have been traveling together but he is such a depressed gnome scholar. His studies seem greater than mine, he even has an Ancient's Book. Good stuff. I asked for his input on Dergrog but he had none. Guess he's just not a well educated practitioner.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Fexyius . 18",
              level: 2,
              text: [
                "Today ended up being a rough day. We have lost Dergrog at the end of all these unfortunate events His ashes -and what was left of him- were gathered by Shae and Brelnor. It is a sad day dear diary. Hope he can now see crystal clear ahead from the cliff he is now resting. I should check on Shae because this apparently had the most impact on her.",
                "I think I made our beloved mistress angry because she explicitly told me to take care of him. I failed as a cleric and as a friend to both Yenn and Dergrog. Fuck.",
                "I should have a talk with the only female of our group that actually has a sex drive. Just wow. All this had no impact on her I presume. THE INDECENCY FOR ALL THESE SOUNDS! I wonder who the lucky",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Fexyius . 19",
              level: 2,
              text: [
                "Something small, blazing red landed on the ship with a lightning strike. It is called Aksha. It is the demon we summoned by breaking a deity's statue. It caused a wreck to our ship and made a joke out of all of us. Shae and I got caught up in the coal circle and it exploded. The truest experience I've head closes with death. I tried to nurse everyone back to their healthy selves all the time but at the end this hell spawn saved them. Curses on him. I do not want to hear, know, meet NOR see Raxy and the unholy place that he keeps guard over.",
                "We ended up sleeping outside. Ship is a total wreck but it is nice. We kinda have a small picnic or a camp. This is nice. It's with friends and is peaceful. Unfortunately Sucal is nowhere to be found. Hope he is safe.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Fexyius . 21",
              level: 2,
              text: [
                "So the town's folk gathered, out with a medium sized army against the skeleton cunt. He was heard attacking Loutra earlier but I never thought he'd come here to attack as well. How unlucky, he seems to attack wherever I am. Finally murdered thanks to Jenelius of course. I guess Brelnor coordinated the attack so I have to give him some credit there. Shae was with him but she probably was of no use. She's in a bad mood lately. It is difficult to control yourself and even more to control a group of freaks like yourself. I should spend some time with him, he's bright.",
                "Yenn, Ulysses and Brelnor is going to a party thing. Finally I have time to actually figure out what happened to Dergrog. Also need to find Khadgar now, first Sucal now him. Something is wrong.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Fexyius . 23",
              level: 2,
              text: [
                "Yenn woke me up today. Like a mother caressing her child, as a bonus she looked nice. Talked to me about some vampire and how we needed to take care of it.",
                "We got to the library and found some information. We were weak before, as in being dumb but now we are smart. I am just unsure if being dumb was better. All this study we do here, makes me think we will lose horribly. I'm scared, but should be brave instead. I'm going to do my best.",
                "Ulysses apparently got some last night. Cool but first Brelnor or Greyhound (I hope it's not Greyhound) and now him. Do I fail as a man? I'm just hungry or jealous, since it has been a while.",
                "Sucal came with a gathered crew. Tomorrow we march in. Let's see what awaits us there. Hope nothing will go poorly.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Fexyius . 28",
              level: 2,
              text: [
                "I'm really confused. I am writing this with fading memories. I was in a place, place with, towers and dead farms. I was there for a long time. I had friends I think, I stood there and traveled. I think, it was afterlife? It was, silent. Cold.",
                "Peaceful.",
                "We went to the chambers under Akuzar, at first it looked ruined, but as we ventured down inside, it got bigger and re-structured.",
                "We had a tough time. We definitely were not ready for this, I don't know why we even decided to take on a Vampire. I guess though, it is on me since I could not provide good information. I should study more. I don't feel any negativity from Spina now. It was, complicated earlier.",
                "I tried to heal everyone, did my best. It was going good till Aksha came back. My best was not enough. I think I should talk to Yenn when I'm ready. I'll give it a week or so.",
                "Also I remember spending so much time with a beautiful woman at the... place. I wish I could see her again, It's like I'm missing something.",
                "I woke up at the so called cleanup camp Akuzar guards set up. Next to Yenn, Brelnor and Ulysses. They picked up a Tiefling but I don't know what to make of it.",
                "I hope Yenn did not see me naked. Should I worry about that?",
                "I wrote this too complicated even for my standards. My mind is blank. I hate this feeling. Is this how death feels like?",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Spina's Domain - Sketch",
              level: 3,
              image: { src: "/Books/dufrene-s-notes-map.png", alt: "Sketch of a very small town" }
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Fexyius . 29",
              level: 2,
              text: [
                "I learned what Sucal has been doing recently. Since he is going to leave and none of these uninterested dumbs are going to fill his shoes. We are LIVING HERE. Anyway, they ended up saving me again, so I'll try my best.",
                "I tried to convince him that he can always find a better person to be with and that love only lasts for a bit, while finding a mentor -yet alone one that risked her life to save his- is near impossible. Yenn and Ulysses went out doing whatever. He finally looks like he has gained a different perspective on life. Hope it's not a difficult one.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Fexyius . 30",
              level: 2,
              text: [
                "Sucal and Shae left while Brelnor Yenn and Quebec left for the so called heist. Quebec is that new Tiefling we just acquired. He is in a way familiar but I've never seen him before I think. He is a chill person and unexpectedly devoted to Spina for a Tiefling. Best of luck to his virgin eyes. These lands will not welcome him as he welcomes.",
                "I respect Brelnor, don't get me wrong, but this code of behavior makes me aware. I'm really unsure of it. I should talk to him about the impact of this Tiefling. Maybe there is something that he is doing and I can't see. He must be trusted right? Do we include randoms now?",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Fexyius . 31",
              level: 2,
              text: [
                "I just received a letter from Khadgar. I should write one back. He is doing well apparently, and now is in the guild. He says he is still searching for the answers to the problems of his ancient book. Cute little scholar. I should tell him about Rhett.",
                "Dismas and Brelnor apparently knew each other. They came back together. What a small world. I organized almost everything Sucal kept in the kitchen. It's a wonder how we didn't get sick. Maybe it's because of Yenn's random blessings.",
                "I also really need my pills after all this. I can't sleep. Did anything happen to Lorok? I overheard Dismas talking about it. Maybe I should go talk to him and introduce myself better. Tee has also set up a board which I like. I hope I can get some use of her too. Maybe helping her with Cleric-y duties will help.",
                "I realized I haven't talked about Tee. She is a decent smith we acquired from Akuzar. I hope she'll prove her worth like we all did. I also hope she won't end up like Dergrog.",
                "Reminder: Get some Winter clothing. A month left.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Fexyius . 33",
              level: 2,
              text: [
                "Ulysses left the ship to get something sorted. Hopefully that little amount of gold I gave him would help him. I wonder if he can find the way back from Alax.",
                "I studied magic schools a bit further today. I'm again lost at evocation and necromancy. Evocation still close to me but damn necromancers. How does one comprehend this.",
                "Ship is in a shit state. I cleaned it since I couldn't sleep last night but I'm getting tired really fast. Maybe Brelnor can give me some tips on keeping fit because he is really quick.",
                "We are going to meet with Auriel Von Everec. Man's got himself a reputation but hopefully we wont get hurt. With Dismas and Lakia on board, we are crowded and more versat versita varsiteli durable.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Fexyius . 43",
              level: 2,
              text: [
                "Man what a long long week-ish. At least I'm eating something with chocolate Quebec made while writing this. It's unexpectedly bitter and sweet. I've never had chocolate before but if this sour taste does not go away fast, it's not my thing. Also, what in the 3 hells Yenn?",
                "Mentioning Quebec I saw him praying a couple times, especially after the heat of the battle. Maybe he was paying respect to the fallen. Whatever, he looks like he has some sort of faith. I never knew Tieflings did experience this. Talking with Brelnor about this topic and more, like Quebec's impact on Brelnor's actions, I learned that Brelnor also thinks that Quebec is inferior as a Tiefling.",
                "Jenelius The IV called me an experienced cleric. She trusts me with her life and that, actually, puts a smile to my face. I guess this is not me having reliable companions but finally having a dear friend. I found out that Brelnor also knew Rhett. These coincidances are piling up at an alarming rate. Did he follow me or something?",
                "Aksha's attack was of significancy but it did not cause so much harm. Me and Yenn actually kept manipulating the ocean below us so it was a piece of cake this time. I also saw Spina in action at the demise of Aksha. My chest fills with pride after getting confirmation on our path. Not that we would be wrong.",
                "Lakia left after getting denied from almost all of us. Fucking retard, do we look like the merry band that'll leave our cause for a small, earthly endevour? We finally reached Auriel's ship. As I'm writing this 2 men are approaching us on a boat. Let's see how things are going to turn out…",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Fexyius . 44",
              level: 2,
              text: [
                "Today started in a problematic way. The encounters we had with Auriel's men was not nice. Dismas even had to intervene and kill someone boarding our ship. Yenn had to go on her own which on itself was alarming. Oh diary, I wish you actually saw what happened.",
                "Auriel's cunt belittled us but it's no problem. They are all dead. Problem was, something attacked us. It first took control over our minds, then the weave surrounding us, then the people in front of us. IT CONSUMED people's lives with some spell I've never seen before. Nobody cared though, so maybe I'm only out of the loop. Need to visit Rhett.",
                'I wish that was the sole problem. With the weave going wild, we also got interrupted with some sound, calling to me, Brelnor, Dismas and Quebec that "it" hated us because we are close to Yenn. "Show yourself weakling" would be my initial response but man, THE MAN was crazy. I honestly feared for all our lives. It said things that did not make any sense, like "personal space" or "interventions on inventions" or "forced end of scholarship". He made a clear statement that he\'d attack the adventurer\'s guild. I wish all the people to get what they fucking deserve. Little rats. Like that\'s not enough, we also got attacked by a group of pirates carrying Cleaver\'s banner according to Brelnor. Why is he after us, I thought Dismas and him were friends?',
                "I couldn't see how it got resolved but man, Quebec was very proud about it. He said that he single-handedly sank the whole thing. What a lost sight. After our trade with Auriel's cocky men, we got a small navigation information. We ran away from the messed up field near Bahatt and started to go towards Mendes. I am glad that we are finally going to visit the capital of Thaum. I'm sure I'll find many interesting things there.",
                "Reminder: Definitely visit Rhett, or get help from Brelnor to get in the library.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Vesius . 1",
              level: 2,
              text: [
                "We arrived here on the first day of Vesius. Being named after Vesvjdegz (Ves), the God of Lightning, I wonder if this is a bad omen. We'll see. We made plans to go to the dungeon at the first lights, tomorrow. Brelnor and others went shopping tonight as we arrived here, but everyone came back before Brelnor. They came with a blue humanoid creature. It was talking aswell and I don't know why, Quebec had a liking on it. I gave it a room and helped it settle down. It seems nice aswell, not sure. I gave my holy book to Quebec since he seemed to be lost in wrong toughts. There was no need to argue with Jenelius.",
                "Yup, that blue thing blue humanoid is apparently a Genasi. An Air Genasi to be exact. He has a calming appearance but I've never seen anyone like him before.",
                "I literally gave Quebec the book and then did the same thing myself. Comparing Cyaxo with Spina was not nice. I, a devoted cleric, should've not done it. Thankfully Yenn was understanding. Maybe it was because she heard that the genasi male was a follower of Cyaxo. Anyway.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Vesius . 2",
              level: 2,
              text: [
                "After helping Brelnor carry his stuff around the ship, we went out towards the dungeon. Hastily, Quebec murdered those poor souls guarding the enterance. He had a fair point though, Jolynn tried to get in the night before and they did not allow him. Who doesn't want a blue creature inside their dungeon though…",
                "We saved Dismas' friends quickly so, I now have no time to write. I'll continue this tomorrow hopefully. A DUNGEON AWAITS!",
                "Nope, fuck. YENN LOST BOTH HER EYES. I did my best trying to cure her but eventually Quebec helped her get her one eye back. We are now going in. Man. I will NEVER forget the look she had when bleeding on my arms and saying that I was a great friend and follower. FUCK. Why would she try to take her own life after uttering these words. FUCK.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Vesius . 3",
              level: 2,
              text: [
                "First things first, we are all okay now. Event that tops everything was, when everyone realized that we were safe, while carrying Quebec to the ship, he kissed my bald spot. Then Yenn. Then Brelnor… It was awkward but joy in life is in these moments. Everyone was happy. A rare occurance. We got great loot too! I was even given a Bag of Holding, which puts a smile to face. It'll help me a lot. Wonderful.",
                "Anyway, as to what happened yesterday: We went inside the tomb of Azdial, the Leg Chopper. We cleared many traps, opened hidden paths inside, solved small puzzles. We even got Spina's assistance on a great beast, a giant snake. We met with a red dragonling. Overall it was an interesting exhibition. Aside from Quebec's 90% lost body only gained life back thanks to his devotion to Spina, Jolynn saving my life once, Yenn getting a medical operation with hellfires, Brelnor getting swallowed by a snake and then getting spit out, Quebec then losing his leg thrice, Azdial chopping us all and carrying Yenn like a toy, then blinding us periodically, killing Quebec, almost killing me avoided thanks to Brelnor and almost, almost making us crawl out without our legs, things were fine. Jolynn helped us navigate multiple difficult rooms and I honestly didn't think a new addition could be THIS effective. Also kudos to everyone since we all came back alive. Brelnor killing Azdial and finding a golden chest also deserves credit.",
                "I'll copy the small prophecy from the loot to here aswell. We took it with us as a reminder I guess. It'd be nice to have it written here. Also I would like to note everything important we got.",
                "We got the cloak of arachnida! IT IS PERFECT for Brelnor. I'm both glad and jealous to be frank. He already has a flaming sword thingy and with this, cool. Cool. Seeing everyone's cool gear and especially Jolynn's tiara, I want to give a gift to Yenn. She deserves something nice. Plus, as a part-time leader full-time prophet, she needs something like this! We got some dust of heat, a staff of birdcalls, an armor of resistance for lightning which Yenn took, a cool looking boomerang and the cloak I mentioned earlier.",
                '"Upon the day flesh brings light, a marked child causing fractures on others, shall be rid by might and be forgotten at the dawn of hope." Fuck Azdial and his tomb.',
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Vesius . 4",
              level: 2,
              text: [
                "ALAS! My friends Sucal and Ulysses have returned. This is great since we were lacking a front- line and Sucal. Every household needs a Sucal, even though we are a, dare I say, shiphold. Ulysses seems to become stronger since his quest in Alax is completed. Sucal, well, he has returned and Shae is not with him. Well, I'm just glad he listened to my advice. As we embarked, everyone had stuff to do so silently, they went on with their duties. Except me and Sucal. We were watching Quebec cry on his small dirt tub for plants. He tried to bury himself in and tried to regrow his wines? Wow. We helped him bury himself further to \"enhance\" his \"immersion\" with \"the soil\". I knew it wouldn't work but, I've learned. I'm not going to say OH YE OL' MAGGOT YA LEG WON' GRUWH ITH'S MAGICAL! Writing in accents are not fun. I just tried. Don't judge me dear notebook. Anyway, we left Quebec alone for him to tend to his more, inner, wounds. Brelnor and Lorok got into a heated argument. I better ask what's wrong but seems like they did wrong by Brelnor. Lorok mentioned about my pills and told me to go ask them from Brelnor. Man, If you think he's capable why did you ignore him from the start? Poor call, he might be a thief but he has all the good qualities of a Halfling. Why make him feel blue? Vesius . 6 I spoke with Tee again, about the smelter. I think we figured a way to move air from one room to another with the help of some pipes. Tee now has to make them. We need to get some material that is resistant to the heat a bit more than wood aswell, to cover her room. Something needs to be done for the bottom of the smelter too but Tee said she has an idea for that. Looking forward to it since I'll probably be the one who fixes things afterwards. Now now now, Brelnor and Sucal seem to gel along together. Well, either one of them do not know what they are on about aswell. This ship needs educating. Hopefully Yenn will get around it sooner or later. Vesius . 9 After failing to communicate with Spina again and again, I feel neglected. Did we accomplish what we were supposed to accomplish? Quebec still says we should find the blue shrine of Hozanek but I don't understand. Special treatment? Weird. The ship has many faulty parts now and every day I end up with the \"removing water from the ship or it might sink but nobody else volunteers to do it\" duty. Anyway, no good to puke everything here, I better go clean the water. Hopefully we will get it fixed when we arrive Bahatt. I'm excited aswell since everyone has things to do there and no one has the time to hang around a city. Vesius . 10 First lights of the day and we approach Bahatt. All this way from Mendes took a toll on all of us mostly because we had nothing to do. We all get to know each other better but even with our size, it took little time. I really enjoy talking nonsense to eachother and when everyone laughs. Yenn is acting weird around Ulysses and unfortunately they seem they can't get along well. I should speak with Ulysses or Yenn. We are good friends, things like this can't happen between us. As we arrived we all had designated duties to attend to. Tee and Brelnor went to see a smith, Quebec went to a library, Sucal and Yenn went to gather a crew and hopefully repair the ship, Jolynn went to see a wizard and Ulysses went to meet with a friend of his.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Vesius . 12",
              level: 2,
              text: [
                "Tiberius is… a different soul. I don't see what Ulysses is so happy about, it can not be just because he saw an old acquaint.",
                "We went down to the city once again, Brelnor and Jolynn now state that they have lost a certain smith. I was listening to Brelnor when he mentioned this \"cursed armah\" and then realized that they were mocking me. I thought Jolynn was cool with all this. Is it my hair? What would he know, he's fucking blue. I bought a jewelry for Yenn, to finally give her some thanks. A token of gratitude and a seal of a friendship for, forever I hope! I was not that good with this that's why I asked Brelnor and Jolynn to help me pick it, but they were kind of busy. Also, there is apparently no problem that toushands of gold can't solve. This tiara hopefully brings some joy to her. We saw a Mage and for the love of Spina, I'm not going to bother with burial services. S C R E W that.",
                "On our way back, Quebec shot a flare that Tee gave. Haste-jogging this whole flare thing. Although it worked. When we tried to rescue him we saw some guards. Brelnor and Jolynn was with me, and we saw Yenn and Ulysses too. Yenn was being looked upon because apparently she blew up somebody with radiant damage. Man, she definitely does deserve some of this crazy. I love it.",
                "We boarded the ship to flee. I should hit the bed now but these things need to be documented.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Vesius . 13",
              level: 2,
              text: [
                "I gave Yenn the tiara I bought. For a 4000GP tiara, that humble smile on her elven features was priceless. Definitely worth it. I'm glad I picked this tiara.",
                "After hanging around with Quebec, I watched him cook and kind of nurture himself. The man is a chef.",
                "As we sail towards Gobre, I wonder what happened to that town since I last heard about it…",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Vesius . 17",
              level: 2,
              text: [
                "Arriving at Gobre was unpleasent. Especially problematic about the attitude of the city guards. This place was supposed to be like trash, king is working I guess.",
                "We were almost executed because some guards thought that we stole from a shop even though we turned in a drug smuggler! What the fuck is happening here. Aren't drugs legal here or some shit? Also, Brelnor is literally famous amongst guards right, I'm sure they knew something and kept us here without a clue on their path.",
                "Some guards took our bribe, now we march back to get some quests. I'm so glad that my remains did not end up in a shit-hole pit that nobody cares about.",
                "We saw Walker just a moment ago! My old friend, I missed him. I'm glad to see him too, he invited me over for some drinks but we both are busy.",
                "We were given a quest about some tower that produces some Shades. Scary, uneasy, but has to be investigated. Hope we will get some rough idea about the issue.",
              ],
            }}
          />
          <SimpleBookContent
            contentProps={{
              title: "Vesius . 18",
              level: 2,
              text: [
                "We broke the pillar inside the tower, crumbling the stone pieces above us onto ourselves. Bad news, now everyone is looking for some way in since that was our only clue. Although, these magical purple flowers are soothing.",
                "FUCK FUCK FUCK FUCK FUCK FUCK FUCK",
                "FUCK FUCK FUCK FUCK FUCK FUCK FUCK FUCK WE",
                "ARE IN BUT MY HANDS ARE SHAKING",
                "I GUESS JOLYNN IS ALIVE AND WELL I",
                "HOPE JOLYNN IS ALIVE AND WELL I HOPE HE IS",
                "ALIVE AND WELL",
                "FUCK",
                "We are now about to rest in this god-forsaken room with a FUCKING MONSTROSITY of a creature with dead FUCKING cultists. Jolynn is back up. Yenn is doing FUCK KNOWS what. I only sense some calm from Quebec and man it is his fiendish blood that I can't just…",
                "Yenn is trying to scrape her name on the wall with some weird fucking symbols that were definitely these cultist's doing. Fuck.",
                "When I saw Jolynn die and revive, my insides fucking collapsed. Yenn is still trying to do her best and is still smiling but, everyone can almost see a thick blanket of stress around her. Brelnor, searching the room for further clues or even an exit maybe? Why are you all so calm?!",
                "Well after a couple hours, I think I see their point. With them around, I think this place is not an obstacle that we will not be able to overcome. I definitely need to sleep.",
                "I'm losing it.",
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
