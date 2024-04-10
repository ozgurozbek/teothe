"use client";
import { Button, Card, Divider, Empty, Skeleton } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import { useState } from "react";
import SimpleContent from "@/components/SimpleCon";
/**
 * React component for rendering a Quest Idea Generator interface.
 * The component includes a button that, when clicked, conditionally fetches data from an API using the useSWR hook.
 * The fetched data is displayed or replaced with a loading skeleton based on the fetch state.
 * The component utilizes the useMemo hook to memoize the handleButtonClick function, preventing unnecessary re-fetching on each render.
 * @generator
 * @returns JSX elements representing the Quest Idea Generator interface.
 */
function GetQuestIdea() {
  const [displayEmpty, setDisplayEmpty] = useState(true);
  const [innerText, setInnerText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleButtonClick = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://xeculus.pythonanywhere.com/generate"
      );

      if (!response.ok) {
        throw new Error("Failed to access Quest Idea Generator API");
      }

      const data = await response.text();

      setInnerText(data);
      setDisplayEmpty(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    } //I like this approach better, it'd help us retry if something goes wrong - Unlike the rest of the fetchers
  };

  return (
    <>
      <Button onClick={handleButtonClick}>
        {displayEmpty ? "Generate Quest Idea" : "Generate New Quest Idea"}
      </Button>
      <Divider />
      {loading ? (
        <Skeleton active />
      ) : displayEmpty ? (
        <Empty />
      ) : (
        <SimpleContent
          contentProps={{
            title: innerText,
            text: [
              "Xeculus' Quest Idea Generator for D&D is a tool that uses artificial intelligence to create high-quality, unique content based on keywords or phrases from many sources. With some human intervention, you can use it to create new quest lines, item and character descriptions, unique story points, etc. This AI-generated content writing tool ingest a lot of example data that train its algorithms to produce content. Quest Idea Generator is designed to take that example data and create something new, not rehash what’s already out there. Compared against human structural quest analysis, the current generator was found to be able to replicate the elaborate quest structures found in commercial video game quests.",
              "The Quest Idea Generator system is designed to generate unique stories and quests for players to play through. The system uses the rules of Dungeons & Dragons 5th edition and its associated books to create a series of events that occur over time. It also uses a set of pre-defined rules and algorithms to determine what makes an interesting quest. The system is designed to allow users to create their own unique stories and quests using the same basic structure. The whole of Xeculus' creative app includes a number of different components including a simple NPC naming and detailing tool, a quest design tool, and an API for developers.",
              "You, the user, should evaluate quests through the classification of the motivations behind the quests, based on the sequences of actions required to complete the quests. Also, compare different world descriptions and analyze the difference in motivations for the quests produced by the generator. That’s how Xeculus' Quest Idea Generator comes in handy! Provided tools can help you brainstorm new quest ideas and storylines, and can even help you write the story itself! AI story generators can help you create engaging characters, great plots (including plots with a three-act story structure), and help make sure that you include all the essential story elements!",
              "Remember that any RPG is a game, in which the players are the main focus. Each encounter is part of a larger puzzle, and so of course there are different stories, dungeons and quests. The proposed quests are composed entirely of some number of challenges, allowing for a unique story, as well as a number of problems to solve, allowing for a unique experience.",
              "The quest generator is designed to help authors create unique stories and quests for the player characters to experience. The system proposes a series of events that may happen over time and requires the user to make decisions about how those events will unfold. Quest Idea Generator also tries to help authors build a narrative and plot out their story, to help designers plan out the layout of their dungeon, add traps, monsters, loot, and items.",
              "In order to gain the most advanced tools for creating content, writers may find it useful to modify their world and equipment as an active part of the creative interpretation process. With all its different characteristics, like the different monsters, the various spells and the various bonuses, the generated quest is not final. Additionally, it is very important that players choose to invest in the quest if they wish to improve the overall experience, as such it is necessary to create a game that is extremely enjoyable as this type of experience is also very important. Quest Idea Generator, while it is a simple generator, it is very powerful as writers will not care much about the level or difficulty of previous game content generation since they are eventually the ones narrating it.",
              "Here are some text generators I used to help me write this, and you could use them to iterate on quests or descriptions too:",
              "The images in this orb are so strange and foreign that you can't help but feel a sense of awe at their beauty. Their colors and shapes speak to your soul and leave you feeling peaceful and refreshed. Your thoughts wander. What wonders await you when you look deeper? With a glazed stare, you watch and ponder what you see in the orb: random images from all around the world. You gaze into the globe and contemplate what these images mean to you. A forest, an ocean, a desert, a mountain range... you spend countless hours staring at the image, pondering its meaning.",
            ],
          }}
        />
      )}
    </>
  );
}

// Main component rendering the page
export default function QuestIdeaGeneratorContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Generators,Quest Idea Generator"} />
      <Card bordered={false} className="w-full">
        {GetQuestIdea()}
      </Card>
    </section>
  );
}
