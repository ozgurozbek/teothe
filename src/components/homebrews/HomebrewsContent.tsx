"use client";
import GetCrumbs from "@/components/NavigationCrumb";
import SimpleContent from "@/components/SimpleCon";
import { Card, Divider } from "antd";
/**
 * Function to get and render homebrew entries based on the specified category.
 * @param category - The category of homebrew entries to fetch.
 * @generator
 * @returns Array of JSX elements representing the homebrew entries.
 */
function GetHomebrews(category: string) {
  /**
   * Fetcher function for API requests.
   * @param args - RequestInfo object containing information about the request.
   * @returns Promise resolving to the parsed JSON response.
   */
  const data = [
    {
      description:
        "Learning a language or a tool proficiency during offtime takes (15 - Intelligence Modifier) * 8 actions.",
      tag: "Character",
    },
    {
      description:
        "Map based resources use map based skills. You can find them in Map Resources.",
      tag: "General",
    },
    {
      description:
        "Dealing One-Shot amounts of damage (MAX HP + 1) in healing also kills the person with Radiant damage. Radiant immunity and resistance, including species benefits, are applied.",
      tag: "General",
    },
    {
      description:
        "For classes besides Wizard, you can cast unprepared ritual spells but they take considerably longer, 30 minutes instead of 10 and require concentration during casting.",
      tag: "Character",
    },
    {
      description:
        "If we roll for HP, Minimum HP gain when leveled up is 1. If you roll a 2 and your CON MOD is -5, you still gain 1 HP.",
      tag: "Character",
    },
    { description: "Minions from 3E are used for monsters.", tag: "Combat" },
    {
      description:
        "Public Teleportation happens via Waystones (Circles), Teleportation Pillars or by using Scrolls or Teleportation Dust on landmarks.",
      tag: "General",
    },
    {
      description:
        "Beasts and Humanoids that have equal to or less than 8 Constitution score has vulnerability to poison damage, due to their fragile body health. This does not apply to PCs.",
      tag: "General",
    },
    {
      description:
        "AoE and Cancel effects are DoT, meaning you won't turn into a stone statue from Medusa's Mark in a single turn, having multiple chances to avoid.",
      tag: "Combat",
    },
    {
      description:
        "Additional AC from custom table items are capped with +3 AC.",
      tag: "General",
    },
    {
      description:
        "You get the Lucky Clover item for every session once. You have to use it that session or it is discarded.",
      tag: "General",
    },
    {
      description:
        "Mounted Combat respects the Move or Attack interpret ruling.",
      tag: "Combat",
    },
    {
      description:
        "You freely teleport from circles using teleportation runes as long as its noted, if its not noted or not to a circle, roll from teleportation fumble table.",
      tag: "Character",
    },
    {
      description:
        "Move or Attack can interpret each other. So you can Move a bit, Attack, and Move a bit again.",
      tag: "Combat",
    },
    { description: "Monster cooking is a thing.", tag: "General" },
    {
      description: "Long rest is only allowed in safe places.",
      tag: "General",
    },
    {
      description:
        "Magic Item Shop\u2122 does not sell Wondrous items and Artifacts, if you see one.",
      tag: "General",
    },
    {
      description:
        "Learning spells take 2 hours and costs 50 GP per spell level if the source is written. If not, the time and cost multiplies by spell level.",
      tag: "Character",
    },
    {
      description:
        "Property prices use D&D5eDM's Guild resource prices. Housing etc use basic math based on potential and size.",
      tag: "Social",
    },
    {
      description:
        "PCs can own property and work businesses. Property and business related stuff use influence skill, there is also a feat.",
      tag: "Social",
    },
    {
      description:
        "You gain points equal to your INT modifier. Per one point, you can become proficient on something or learn a new language. Per three points, you can become an expert on something.",
      tag: "Character",
    },
    {
      description:
        "Spell components are required to be bought if they are rare once when they are learned, and if they are consumed, GP is consumed instead.",
      tag: "Character",
    },
    {
      description: "Retainer cards from 4.5E are used for NPCs.",
      tag: "Combat",
    },
    {
      description: "Elites from 3E are uncommon but used for monsters.",
      tag: "Combat",
    },
    {
      description:
        "Two weapon fighting and any other multiattack rolls for each if not stated otherwise.",
      tag: "Combat",
    },
    { description: "Fall damage is not capped.", tag: "General" },
    { description: "AoE and Cancel effects are rarely used.", tag: "Combat" },
    {
      description:
        "Retainer spells and bonuses are not loyal to 5E sourcebooks.",
      tag: "General",
    },
    { description: "When you roll a 20 on a skill check, you get inspired if you describe why.", tag: "General" },
    { description: "You'll know of an individual if you end the session with a lucky clover on you, or you've pulled a Zeandil.", tag: "General" },
  ];
  let renderedEntries = [];
  let first: boolean = true;
  for (let item of data) {
    if (item.tag === category) {
      if (first) {
        renderedEntries.push(
          <li className="hover:bg-[#630436] py-4">{item.description}</li>
        );
        first = false;
      } else {
        renderedEntries.push(
          <li className="hover:bg-[#630436] py-4 border-t border-[#33373b]">
            {item.description}
          </li>
        );
      }
    }
  }
  return renderedEntries;
}

/**
 * Displays the list elements like other Table(antd) elements, and provides categories
 * @returns SimpleContent and response from GetHomebrews wrapped by Card(antd) in section
 */
export default function HomebrewsContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Homebrews"} />
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Character",
          }}
        />
        <ul>{GetHomebrews("Character")}</ul>
        <Divider />
        <SimpleContent
          contentProps={{
            title: "General",
          }}
        />
        <ul>{GetHomebrews("General")}</ul>
        <Divider />
        <SimpleContent
          contentProps={{
            title: "Social",
          }}
        />
        <ul>{GetHomebrews("Social")}</ul>
        <Divider />
        <SimpleContent
          contentProps={{
            title: "Combat",
          }}
        />
        <ul>{GetHomebrews("Combat")}</ul>
      </Card>
    </section>
  );
}
