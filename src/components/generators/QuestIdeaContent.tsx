"use client";
import { Button, Card, Divider, Empty, Skeleton, Space } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import { useState } from "react";
import SimpleContent from "@/components/SimpleCon";
import Title from "antd/es/typography/Title";
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
      <Title>
        Create Unique D&D Adventures with an AI Quest Idea Generator for the
        Teothe Campaign Setting
      </Title>
      <Divider />
      <Button onClick={handleButtonClick} className="mb-2">
        {displayEmpty ? "Generate Quest Idea" : "Generate New Quest Idea"}
      </Button>
      <Card>
        {displayEmpty ? <Empty /> : <Title level={2}>{innerText}</Title>}
      </Card>
      <Divider />
      <Space direction="vertical">
        <p>
          Elevate your Dungeons & Dragons sessions with an innovative AI-powered
          quest idea generator tailored specifically for the Teothe campaign
          setting. This tool generates original, high-quality quest ideas,
          character descriptions, and item details based on your keywords and
          phrases, making it easier than ever to craft engaging adventures for
          your players.
        </p>
        <p>
          What sets this AI quest idea generator apart is its ability to produce
          fresh content rather than recycling existing material. Its algorithms
          are trained to create intricate storylines that mirror the elaborate
          quests found in popular video games, ensuring your campaigns are
          filled with excitement and depth. By using the core rules of Dungeons
          & Dragons 5th Edition, it crafts thrilling events and challenges that
          can enhance any main quest or side mission, offering endless
          possibilities for your storytelling in the Teothe setting.
        </p>
        <p>
          Using an AI quest generator can significantly streamline your game
          preparation, allowing you to brainstorm fresh ideas and develop
          captivating narratives. You can analyze quests based on the
          motivations behind them, fostering deeper storytelling and creating
          unique experiences for your players. D&D is all about engagement, and
          each encounter serves as a piece of a larger story, making it
          essential to create quests filled with challenges and mysteries.
        </p>
        <p>
          With this tool, crafting narratives becomes effortless. You can adapt
          generated ideas to suit your players’ choices and customize various
          elements, including monsters, spells, and items, enriching your
          storytelling experience.
        </p>
        <p>
          Transform your Dungeons & Dragons sessions in the Teothe campaign
          setting into unforgettable adventures. Harness the power of an AI
          quest idea generator to create unique quests that immerse your players
          in a world of creativity and excitement today!
        </p>
      </Space>
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
