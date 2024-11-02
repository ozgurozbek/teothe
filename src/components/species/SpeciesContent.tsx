"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SpeciesCon from "@/components/species/SpeciesCon";
import { Card, Divider, Row, Space, Switch } from "antd";
import { useState } from "react";
/**
 * Function to fetch and render species data based on homebrew and official toggle switches.
 * @generator
 * @see SpeciesCon
 * @returns An array of rendered species components.
 */
function GetSpecies() {
  const data = [
    {
      phrase: "Through triumphs forged in stone, our wisdom soars.",
      description: "Goliaths are towering and powerful, often found in mountainous regions, they value strength, endurance, and communal living.",
      name: "goliath",
    },
    {
      phrase: "We humans have to stick together! Never trust the other species, never!",
      description: "Humans are versatile and ambitious, capable of adapting to any environment and driven by a desire to explore and innovate.",
      name: "human",
    },
    {
      phrase: "A secret is hidden, mine is beneath the hidden surface.",
      homebrew:
        "Their most prized city in the Underdark of Teothe is called Gnormandy. Famous amongst svirfneblin for their strawberry drinks._Deep gnomes take pride in their inpenetrable forts and often hide in plain sight to watch third parties fail finding an entrance._They normally have a fatty face with a tall forehead, and often look very bland and pale.",
      description:
        "Deep gnomes, or svirfneblin, are natives of the Underdark and are suffused with that subterranean realm's magic. They can supernaturally camouflage themselves, and their svirfneblin magic renders them difficult to locate. These abilities have enabled them to survive for generations among the perils of the Underdark. Guarded, and suspicious of outsiders, svirfneblin are cunning and taciturn, but can be just as kind-hearted, loyal, and compassionate as their surface cousins._Svirfneblin seem more like creatures of stone than flesh. Their leathery skin is usually a gray, brown, or dun hue that acts as a natural camouflage with the rock around them. Their bodies are gnarled with hard muscle or fat, and they are heavier than their small stature suggests; svirfneblin often weigh 100 pounds or more but rarely stand much more than 3 feet tall._Male svirfneblin are bald from early childhood, although adults can grow stiff beards or mustaches. Females have full heads of hair, and they usually tie their hair back in braids or cut it short to keep it from getting in their way as they work._Svirfneblin are well adapted for their subterranean existence. They have excellent darkvision, and many of them have magical talents that rival the innate spellcasting of the drow and duergar. They are surprisingly strong for their size, enduring toil and danger that would overwhelm most other people._Despite their guarded natures, svirfneblin aren't joyless. They admire skillful work and delicate craftsmanship, just like any other gnome. Svirfneblin love gemstones of all kinds, and they boldly seek out precious stones in the deepest and darkest tunnels. They are also expert gemcutters and miners, and they prize rubies above all other gemstones._Svirfneblin are known as deep gnomes because they choose to live far below the earth's surface. Most svirfneblin never see the light of day. Their homes are well-hidden strongholds concealed by mazelike passages and clever illusions. Vast networks of mine tunnels ring most svirfneblin settlements, guarded by deadly traps and concealed sentries. Once a traveler passes through the outer defenses, the tunnels open up into marvelous cavern-towns carved from the surrounding rock with exquisite care. The svirfneblin are austere in their comforts compared to their surface cousins, but they take great pride in their stonework._Deep gnomes do their best to remain hidden. Even if surface travelers succeed in locating a svirfneblin community, winning their trust can be even more difficult. Those rare travelers who do succeed in befriending deep gnomes find that they are loyal and courageous allies against any foe._Because of this, the svirfneblin that dwell here are much more distrusting and wary than their kin on other worlds. Rarely do they allow strangers within their midst, and those that they must deal with are kept at arms length. If one is lucky enough to be trusted by the deep gnomes, they are a friend for life. For the svirfneblin of the Underdark, genuine trust is a commodity far more valuable than gold._By comparison to the surface dwelling gnomes, most svirfneblin possess very little wanderlust and rarely travel far from home. They see the surface world as a bewildering place without boundaries and filled with unknown dangers. Nevertheless, a few svirfneblin understand that it is necessary to know something about what is happening on the surface near their hidden refuges. As a result, some svirfneblin become scouts, spies, or messengers who venture abroad, doing their best to avoid attention. These travelers are notoriously close-mouthed about where they come from and what they are up to, but a few eventually learn to trust good-hearted people of the surface world._A few svirfneblin become merchants who deal with other species both above and below ground. Drow, duergar, and other peoples know that svirfneblin are usually neutral in outlook and typically honest in their dealings. Serving as middlemen between species too hostile to deal with each other directly can be lucrative, and it serves an important defensive function; svirfneblin middlemen tend to know more about rumors and threats between rival merchants than anybody else._Like other gnomes, deep gnomes can live for centuries, up to 500 years.",
      name: "svirfneblin",
    },
    {
      phrase: "Fury stoked by joint might, a legacy beyond mere pillage!",
      description: "Half-orcs are a blend of human and orc heritage, often struggling with their dual nature while displaying fierce strength and resilience.",
      name: "half-orc",
    },
    {
      phrase: "I had 100 mothers and each had 100 children, who are you gazing at single-skin?",
      description: "Changelings are shape-shifters, capable of altering their appearance at will, often hiding their true selves beneath a façade.",
      name: "changeling",
    },
    {
      phrase: "Feeble mortals, witness the genius of a genasi artisan, for in my hands, the elements dance with envy, while your pitiful craftsmanship pales in comparison to the unparalleled majesty I bestow upon this world!",
      description: "Genasi are beings infused with elemental power, embodying the traits of air, earth, fire, or water, and often seen as outsiders.",
      name: "genasi",
    },
    {
      phrase: "Roahr - Why are you so afraid, never seen sharp teeth?",
      homebrew:
        "Shifters, sometimes called weretouched, are not native to Teothe or similar material planes. Their nomadic nature led them to many other places, but most of the time they don't have a place to call home. They fill this gap with religion or arcane studies._Shifters, with exceptions, feel strong hatred towards smears as they are not reliable nor spirited to the Shifter's eyes.",
      description:
        "Shifters are sometimes called weretouched, as they are descendants of people who contracted full or partial lycanthropy. Humanoids with a bestial aspect, shifters can't fully change shape, but they can temporarily enhance their animalistic features by entering a state they call shifting._Shifters are similar to humans in height and build but are typically more lithe and flexible. Their facial features have a bestial cast, often with large eyes and pointed ears. Most shifters also have prominent canine teeth. They grow fur-like hair on nearly every part of their bodies. Shifters resembled humans, their close brethren, but with distinctively bestial features such as sharp teeth, claws, pointed ears, or fur. However, to a human's eye, the resemblance was less obvious than the differences. Unlike humans, shifters had flat, animal-like noses, larger than usual eyes that allowed them to see better in low light, heavy eyebrows, pointed ears, skin that was often of a brownish shade, and much more hair, also commonly brown, than was typical for the common human._Shifters lived to about as long humans did on average. Shifters were commonly self-reliant and free-spirited. However, they were restrained in their actions by a fear that they might become lost in the savagery that dwelled in their blood. However, this feral predatory nature could be to the shifter's advantage, and they made excellent rangers or druids._Most shifters resemble a particular kind of lycanthrope. Therefore, Shifters were often feared wherever they went, much like their lycanthrope ancestors. This was due to a common misconception that all lycanthropes were invariably and irreversibly evil, including shifters. While a shifter's appearance might remind an onlooker of an animal, they remain clearly identifiable as shifters even when at their most feral._Instead, shifters preferred either a nomadic lifestyle or living close to the edges of society, supporting it as fishers, trackers, hunters, guides, or scouts._Shifters favored gods of nature, the moon, and primal strength. Just like lycanthropes, shifters could be found scattered throughout, but only a few gathered in larger communities._While they form powerful bonds to friends and kin, shifters place great value on self-reliance and freedom. It's a shifter proverb to 'always be prepared for the journey yet to come' and most shifters strive to be ready for change or opportunity. Shifters have a natural inclination toward classes with a primal connection. A shifter barbarian draws their rage from the beast within. A shifter ranger indulges their urge to wander and hunt. A shifter rogue harnesses their own predatory instincts. But shifters can pursue any path or faith.",
      name: "shifter",
    },
    {
      phrase: "Within our veins flows the essence of Ehx, the fire of ambition ignites our spirits, and with scales gleaming like gems, we rise as Dragonborn, protectors of legacy and seekers of untold glory.",
      description: "Dragonborn are proud, draconic humanoids, known for their honor and strength, often seeking to prove their worth to their kin.",
      name: "dragonborn",
    },
    {
      phrase: "We, the steadfast, choose to embrace the Modest Truth for its unyielding clarity, its resolute guidance that cuts through the veils of uncertainty, and its unwavering foundation upon which we stand as stalwart defenders of justice and guardians of unwavering principles.",
      description: "Loxodons are elephantine humanoids, known for their wisdom, compassion, and strong sense of community.",
      name: "loxodon",
    },
    {
      phrase: "Echoes may escape my beak, but the stories remain forever in my heart as I am both the authentic and the mimic.",
      description: "Kenku are avian humanoids, skilled in mimicry and stealth, often struggling with their lost ability to fly and seeking to reclaim their heritage.",
      name: "kenku",
    },
    {
      phrase: "Life's truest treasures lie not in grand quests or towering achievements, but in the embrace of family, the bonds of kinship, and the curious pursuit of simple pleasures that weave the tapestry of our Halfling hearts.",
      description: "Halflings are small and nimble folk, known for their resourcefulness, love for comfort, and ability to go unnoticed.",
      name: "halfling",
    },
    {
      phrase: "Oh, the Material Plane, a delightful canvas for my mischievous play!",
      description: "Fairies are tiny, magical creatures with wings, embodying whimsy and playfulness, often involved in the affairs of nature.",
      name: "fairy",
    },
    {
      name: "aokin",
      phrase: "Should we look? No, no... Stay silent.",
      description: "The Aokin are nature-bound beings from Teothe, shaped by ancestral traditions and a deep connection to the cosmos."
    },
    {
      phrase:
        "I caught a big fish. Now I search for a good friend. To share my lunch with.",
      homebrew:
        "Tortles often adapt their settlement name, or the beach's name they have hatched in as their family name._When a tortle nears the end of its natural lifespan, or is guided by the primal call of reproduction, it seeks out the mate and procreates. Male tortles experience an overwhelming urge they are unable to resist for long. In a bittersweet resolve, a sacred and celebrated act, the male Tortle selflessly offers his life to nurture the birth of his offspring. This sacrifice is revered rather than mourned by the Tortle community._Tortles lay their eggs (numbering as few as one or as many as a dozen) in a fortified compound enclosed by stone walls that are easily defensible. If no such compound exists, they build one. The female parent spend the remainder of their lives guarding the compound, defending their offspring, and sharing a lifetime of knowledge before they die. When the children are old enough to leave the compound, they pick up whatever weapons and tools their parents left behind and set out on their own.",
      description:
        "What many tortles consider a simple life, others might call a life of adventure. They are nomad survivalists eager to explore the wilderness._These turtle folk live on many worlds, most often journeying up and down coasts, along waterways, and across the sea. Tortles don't have a unified story of how they were created, but they all have a sense of being mystically connected to the natural world. Carrying their shelter on their backs gives tortles a special feeling of security wherever they go, for even if they visit a far, unknown country, they have a place to lay their heads._Tortles exhibit the same range of coloration and patterns found among turtles, and many tortles enjoy adorning their shells in distinctive ways._A tortle hatches from a thick-shelled egg and spends the first few weeks of its life crawling on all fours. Its parents, old and near death, spend what little time they have left telling stories to their offspring. Within a year, the young tortle becomes an orphan, though not before it learns to speak and to survive on its own._A young tortle and its siblings inherit whatever tools, weapons, and gifts their parents left behind. Each young tortle is expected to fend for itself. It leaves the place of its birth and finds its own corner of the wilderness in which to hunt, catch fish, and get by. With each passing year, a tortle hones its survival skills. It forms friendships with its neighbors while also respecting their privacy. At some point, a tortle feels an almost overwhelming urge to venture far away from home and see more of the world. It gathers up its possessions and heads into the wilderness, returning months or years later with stories of its exploits and new skills._Tortles don't have their own pantheon of gods, but they often worship the gods of other species. It's not unusual for a tortle to hear stories or legends related to a god and choose to worship that deity. Tortles are often drawn to the Gods of Good, among the deities, Ehx, Cyaxo, Nmei and Boghradyn relate to tortles most._Tortles believe that night and day watch over them and other creatures. The moon is the eye of night that watches over them in darkness, and the sun is the equally vigilant eye of day. Tortles feel most at peace when one or both of these 'eyes' are looking down on them. They become more nervous and uneasy when neither orb is visible in the sky. Tortles tend to be most uncomfortable underground, where neither the sun nor the moon is visible to them._Blessed are the days when both the sun and moon are visible in the sky at the same time. Tortles often choose such days to leave their homes and begin a wilderness expedition, or perform some other task they know to be dangerous._Tortles have a saying: 'We wear our homes on our backs.' The shells they carry around provide all the shelter they require. Consequently, tortles don't feel the need to root themselves in one place for too long. A tortle settlement is primarily used as a kind of moot, where tortles can socialize with one another, share useful information, and trade with strangers in the safety of greater numbers. Tortles don't regard these settlements as places worth defending with their lives, and they will abandon a settlement when it no longer serves their needs._Most tortles like to see how other creatures live and discover new customs and new ways of doing things. The urge to procreate doesn't kick in until the end of a tortle's life, and a tortle can spend decades away from its native land without feeling homesick._Tortles embrace a simple view of the world. It is a place of wonder, and tortles see beauty in the ordinary. They live for the chance to hear a soft wind blowing through palm trees, to watch a frog croaking on a lily pad, or to stand in a crowded human marketplace._Tortles like to learn new skills. They craft their own tools and weapons, and they are good at building structures and fortifications. They marvel at the works of other civilized creatures, humans in particular, and can lose themselves for years in a city, studying its architectural wonders and learning skills they can put to use when building forts to contain their offspring._Although they spend a considerable portion of their lives in isolation, tortles are social creatures that like to form meaningful friendships. They have no inbred animus toward people of other species. In fact, a tortle will often seek out friendships with non-tortles to learn new customs and new points of view._Tortles prefer simple, non-gender-specific names that are usually no more than two syllables. Tortles don't have surnames or family names. If a tortle doesn't like its name for whatever reason, it can change it. A tortle might change its name a dozen times in its life. Some examples include Baka, Damu, Gar, Gura, Ini, Jappa, Kinlek, Krull, Lim, Lop, Nortle, Nulka, Olo, Ploqwat, Quee, Queg, Quott, Steram, Sunny, Tibor, Ubo, Uhok, Wabu, Xelbuk, Xopa, Yog",
      name: "tortle",
    },
    {
      phrase: "With ale in hand and hammers ablaze, we forge joy into progress amidst the cold winds.",
      description: "Dwarves are stout and hardy, famed for their craftsmanship, resilience, and a deep connection to their mountain homes.",
      name: "dwarf",
    },
    {
      phrase: "The web of dominance thrives in shadows.",
      description: "A drow, also known as dark elf, deep elf, night elf, and the Dark One, is infused with the magic of the Underdark.",
      name: "drow",
    },
    {
      phrase: "In the realm of boundless imagination, we wield invention and exploration, painting life's canvas with the curious brush of creation, where each moment becomes a masterpiece of play and delight.",
      description: "Gnomes are clever and inventive, known for their curiosity and knack for tinkering with magic and technology.",
      name: "gnome",
    },
    {
      phrase: "For honor, for sacrifice, for the forge.",
      homebrew:
        "Warforged never tire and rarely allow themselves to become bored. Having no fear of ageing and no need for sleep or food, warforged have an almost unending patience, yet a hard life as constant soldiers has accustomed them to endless toil and so long periods of inactivity can make them anxious. Warforged are not spellscribed._Warforged are made in a 'creation forge', a spellcasting station. They don't have souls, but in their eyes, nobody does._There is also Psiforged and Faerzforged, one utilising Psionic magic while the other is using Faerzress. Warforged of the Underdark is an extremely rare sight._Warforged in Teothe or similar material planes have a more exploration focused creation, as during the war they were not utilized as Humans lacked the knowledge to do so, while needing them. Human nations, now trying to get back after losing the information war, see the Warforged as free labor, ignoring their free will and sense of individualism.",
      description:
        "Warforged were a rare species of humanoid constructs created through powerful rituals. They average 1.8 meters and weight about 140kg. Extremely powerful and durable, warforged were able fighters. Unlike most constructs, warforged were fully self-aware and maintained mental faculties on par with elves, humans, or similar species. The most important marking for any warforged was their 'truth', a rune distinctive to each warforged which was placed upon their forehead._Warforged are formed from a blend of organic and inorganic materials. Root-like cords infused with alchemical fluids serve as their muscles, wrapped around a framework of steel, darkwood, or stone. Armored plates form a protective outer shell and reinforce joints. Warforged share a common facial design, with a hinged jaw and crystal eyes embedded beneath a reinforced brow ridge. Beyond these common elements of warforged design, the precise materials and build of a warforged vary based on the purpose for which it was designed. Although they were manufactured, warforged are living humanoids. Resting, healing magic, and the Medicine skill all provide the same benefits to warforged that they do to other humanoids._They are sexless and incapable of reproduction. The warforged's artificial nature also gave the species a unique relationship to pain, which seemed limited to actual injury. This allowed warforged to modify themselves with some ease, giving them a varied appearance in spite of their lack of inherent biological diversity._Warforged's artificial nature also meant they did not need to eat, drink, or breathe. Likewise, warforged did not need to sleep but did nonetheless require rest in a fully-aware state for a period of at least four hours._Warforged took their name from their original purpose, as soldiers, and many had a dutiful attitude towards life, taking pleasure from fulfilling commands. Warforged as a whole had a strong work ethic and shared an aversion to failure. Warforged were capable of fear, often of death or pain, as much as other species and could come to hate the sources of these fears just as easily. Warforged were also capable of loyalty and joy, particularly in relations to friends and allies and could be driven to anger when their loves or goals were threatened. However, warforged as a whole exhibited a simple-minded and reserved approach to life with straightforward goals and reactionary passions._Since warforged were created in a state of physical maturity, many exhibited a childlike perspective that was often mistaken as na\u00efve or emotionally crippled; this was not necessarily true. Some warforged, in fact, developed a particularly sophisticated view of the world, ever curious about its mysteries in part due to the odd nature of their creation. Many wondered where they might go in death and if they even have souls. Some created deeply ordered philosophies to govern themselves or maintained a perpetual list of tasks to occupy themselves with. Others fell in with the religions and mindsets of other species. Some warforged even lived long enough to develop a deep and weathered personality as tempered by time as that of other species._Warforged are made from wood and metal, but they can feel pain and emotion. Built as weapons, they must now find a purpose beyond war._Many warforged embrace a concrete purpose\u2014such as protecting allies, completing a contract, or exploring a land\u2014and embrace this task as they once did war. However, there are warforged who delight in exploring their feelings, their freedom, and their relationships with others. Most warforged have no interest in religion, but some embrace faith and mysticism, seeking higher purpose and deeper meaning._The typical warforged has a sexless body shape. Some warforged ignore the concept of gender entirely, while others adopt a gender identity._The more a warforged develops its individuality, the more likely it is to modify its body, seeking out an artificer to customize the look of its face, limbs, and plating._Most warforged were assigned numerical designations for use in military service. Many of them adopted nicknames, often given to them by their comrades. As independent individuals, some have chosen new names as a way to express their path in life. A few take on human names, often the name of a fallen friend or mentor.",
      name: "warforged",
    },
    {
      phrase:
        "We Tieflings bear the scars of bitter pasts, our hearts burdened with deep-seated distrust and the weight of abandonment, yet, through the flames of adversity, we tread the path in search of power, for in its embrace, we find solace and the means to forge our own destiny.",
      homebrew:
        "Some tieflings were not descended from mere fiends at all, but from powerful gods. These tieflings often had their own physical characteristics that set them apart. Many centuries ago, Tieflings sired by Uke, for instance, often had antlers instead of horns and pale, white hair._Tiefling arcane spellcasters of all kinds, felt a draw towards the fiendish energies of the planes and tiefling wizards commonly specialized as diviners for the purposes of seeking knowledge of the Lower Planes or as conjurers so that they might summon the dark spirits whom they called kin. Those tieflings who were religious were a varied lot, since no god held more sway over tieflings than any other, though Pwazo, as the lord over the fiendish species of devils, may come close. Tieflings also have a divine that is their kin, Eve, and will do anything to keep them fed as having a channel to place trust within them without expectance is a foreign but a warm concept. All tieflings, no matter how bitter, find solace in her radiance._Tieflings were not strictly carnivores, but they mostly consumed blood, blubber, bone, gristle and meat. They even roasted insects and considered raw bone marrow a delicacy.",
      description:
        "Tieflings were human-based planetouched, native outsiders that were infused with the touch of the fiendish planes, most often through descent from fiends, demons, Yugoloths, devils, evil deities, and others who had bred with humans. Although their evil ancestors could be many generations removed, the taint lingered. The celestial counterparts of tieflings were called aasimar._Tieflings tended to have an unsettling air about them, and most people were uncomfortable around them, whether they were aware of the tiefling's unsavory ancestry or not. While some looked like normal humans, most retained physical characteristics derived from their ancestor, with the most common such features being horns, prehensile tails, and pointed teeth. Some tieflings also had eyes that were solid orbs of black, red, white, silver, or gold, while others had eyes more similar to those of humans. Tieflings who had strikingly inhuman features were often killed at birth by their horrified parents or others._Most tieflings were aware from an early age that they were different from others around them, and were given to strange urges and desires because of their unusual ancestry. Few tieflings were raised with the love a normal human child might expect to receive and this shaped most of the species into bitter individuals who expected eventual rejection from all whom they meet. While some would follow this path towards evil, others rejected it wholeheartedly and sought to make a good impact on the world around them, sometimes becoming the most heroic characters of all. Few could maintain this discipline however, and most tieflings fell somewhere between both extremes. Because tieflings were generally distrusted throughout the world, owing to their fiendish heritage, many were themselves distrusting and self-reliant._Tieflings were talented warriors. In melee combat they were agile and quick on their feet. They preferred to use weapons that combined sharpness with speed. Those tieflings who sought power through arcane magic were most often warlocks._Like other species that were the result of the breeding of two or more others, tieflings had no true culture they could call their own. Regardless of their motivations, tieflings often distrusted one another, sometimes even casting the same preconceptions on one another that others did on them. In spite of this, many secretly desired to have another tiefling nearby, if only to experience some small kind of kinship._Animosity that tieflings had for others was taken to its extreme in the case of aasimar, whom tieflings instinctively feared or loathed.",
      name: "tiefling",
    },
    {
      phrase: "Betwixt two realms, hunted and foreign, we arise with unyielding ambition.",
      description: "Half-elves combine the best traits of humans and elves, often navigating two worlds while seeking to carve out their own identity.",
      name: "half-elf",
    },
    {
      phrase: "With the divine light coursing through our veins, we, the embodiment of radiance, carry the flame of hope, serving justice against the foul.",
      description: "Aasimar are mortals touched by celestial power, often driven to champion good and uphold justice.",
      name: "aasimar",
    },
    {
      phrase: "Night's terror is mine to wield.",
      description: "Bugbears are large, brutish creatures, blending surprising stealth with strength, often underestimated by their foes.",
      name: "bugbear",
    },
    {
      phrase: "Sometimes it's not about being talented, it's about being hungrier.",
      description: "Leonin are proud, lion-like humanoids who value honor and strength, often living in tribes and defending their territory fiercely.",
      name: "leonin",
    },
    {
      phrase: "Sad it is, as we Aarakocra soar above earthly bounds amidst wind and cloud, finding sanctuary in mountains and guidance in the eternal sky, while those confined fail to witness how each flight unveils boundless wonders untold.",
      description: "Aarakocra are avian beings with colorful feathers, known for their love of freedom and guardianship of the skies.",
      name: "aarakocra",
    },
    {
      phrase: "Embrace of the green and tranquil heart of the forests, where our spirits find solace, whispers of nature weave our eternal song.",
      description: "Elves are graceful and agile beings, with a natural affinity for magic and a deep connection to the forests and the fey.",
      name: "elf",
    },
  ];

  interface DataType {
    description: string;
    homebrew: string;
    name: string;
    phrase: string;
    key: string;
  }

  //@ts-ignore
  data.sort((a: DataType, b: DataType) => a.name.charCodeAt(0) - b.name.charCodeAt(0));

  let renderedSpecies = [];
  for (let item of data) {
    {
      renderedSpecies.push(
        <SpeciesCon
          SpeciesPic={{
            src: "./Species/" + item.name + ".png",
            alt: item.name + " image",
            phrase: item.phrase,
          }}
          DescriptionText={{
            title: item.name,
            paragraph: item.description
                ? item.description.split("_")
              : "",
            homebrew: item.homebrew
                ? item.homebrew.split("_")
              : "",
          }}
        />
      );
    }
  }
  return <Row>{renderedSpecies}</Row>;
}

/**
 * Component for the species page, displaying breadcrumbs, toggle switches for homebrew and official species, and a card containing species data.
 * @returns The species page section with breadcrumbs, toggle switches, and species data.
 */
export default function SpeciesContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species"} />
      <Card bordered={false}>{GetSpecies()}</Card>
    </section>
  );
}
