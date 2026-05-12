"use client";
import GetCrumbs from "@/components/NavigationCrumb";
import GetBook from "@/components/library/GetBook";
import { Typography, Card, Divider, Row } from "antd";
import SimpleContent from "../SimpleCon";
const { Title } = Typography;

/**
 * @see GetBook
 * @returns JSX elements for the example page.
 */
export default function ExampleContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Examples"} />
      <Card variant="outlined" className="w-full h-full">
        <SimpleContent contentProps={{
          title: "Example Characters",
          text: ["This section contains curated Teothe character examples, D&D backstory examples, and archetypes designed to help players establish compelling hooks, believable personalities, motivations, and histories within the setting. Each character sheet demonstrates how a well-crafted character elevates the game by contributing something distinct to Teothe while naturally interacting with its cultures, factions, conflicts, and traditions. Strong character hooks encourage meaningful campaign development, interpersonal dynamics, and long-form storytelling. Use these examples as templates or reference points for grounded, memorable, and setting-appropriate character creation."]
        }} />
        <Divider />
        <Title level={2}>Characters</Title>
        <Row>
          <GetBook
            bookProps={{
              url: "examples/naestte-xob-lebi-aiana",
              image: "/Examples/lebi-1.png",
              author: " ",
              name: "Na’estte -!Xob Lebi Aiana",
            }}
          />
          <GetBook
            bookProps={{
              url: "examples/sectator-desidia",
              image: "/Examples/secta-1.png",
              author: " ",
              name: "Sectator Desidia",
            }}
          />
          <GetBook
            bookProps={{
              url: "examples/lothric",
              image: "/Examples/lothric-1.png",
              author: " ",
              name: "Lothric",
            }}
          />
          <GetBook
            bookProps={{
              url: "examples/teo-serna",
              image: "/Examples/teo-2.png",
              author: " ",
              name: "Teo Serna",
            }}
          />
          <GetBook
            bookProps={{
              url: "examples/jaime-alexander-aardfom",
              image: "/Examples/jaime-1.png",
              author: " ",
              name: "Jaime Alexander Aardfom",
            }}
          />
        </Row>
        <Divider />
        <Title level={2}>These are bad.</Title>
        <SimpleContent contentProps={{
          title: "Lazyman's AI Templates",
          text: ["Here are all the characters an LLM will create without adequate prompting following the template. The images show how much detail had to be explicitly demanded just to get basic differentiation, and further in, you can see how badly even that detail was executed. A shallow character like this should not be your companion for 6+ hour sessions over multiple years. Value your time. Value yourself. A bad character with identity is infinitely better than a shallow character you neither understand nor see any part of yourself in."]
        }} />
        <Row>
          <GetBook
            bookProps={{
              url: "examples/ai-template",
              image: "/Examples/ai-1.png",
              author: " ",
              name: "Lazyman's Template",
            }}
          />
          <GetBook
            bookProps={{
              url: "examples/vaelin-openai",
              image: "/Examples/openai.png",
              author: " ",
              name: "Vaelin OpenAI",
            }}
          />
          <GetBook
            bookProps={{
              url: "examples/grok-blacktusk",
              image: "/Examples/grok.png",
              author: " ",
              name: "Grok Blacktusk",
            }}
          />
          <GetBook
            bookProps={{
              url: "examples/brakka-deepseek",
              image: "/Examples/deepseek.png",
              author: " ",
              name: "Brakka Deepseek",
            }}
          />
          <GetBook
            bookProps={{
              url: "examples/kimi-gloop",
              image: "/Examples/kimi.png",
              author: " ",
              name: "Kimi Gloop",
            }}
          />
          <GetBook
            bookProps={{
              url: "examples/pip-gemini",
              image: "/Examples/gemini.png",
              author: " ",
              name: "Pip Gemini",
            }}
          />
        </Row>
      </Card>
    </section>
  );
}
