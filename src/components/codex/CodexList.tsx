"use client";

import { Card, Divider } from "antd";
import SimpleContent from "@/components/SimpleCon";
import GetCrumbs from "@/components/NavigationCrumb";
import CodexEntry from "./CodexEntry";

export default function CodexList({ posts }: { posts: any[] }) {
  return (
    <section>
      <GetCrumbs path={"Teothe,Codex"} />
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Codex",
            text: [
              "Dive into rich lore, uncover immersive stories, and get exclusive gameplay tips that deepen your understanding of the realm. Whether you're looking for the latest news, detailed character arcs, or behind-the-scenes fantasy worldbuilding, the Codex is where every path begins.",
              "Stay updated with developer insights, strategy breakdowns, and curated Teothe articles; all crafted to enhance your journey through its evolving universe.",
            ],
          }}
        />
        <Divider />
        <ul>
          {posts.map(
            ({
              slug,
              title,
              date,
              description,
              category,
              contentWarning,
              staffPick,
              duration,
            }) => (
              <CodexEntry
                key={slug}
                slug={slug}
                title={title}
                date={date}
                description={description}
                category={category}
                contentWarning={contentWarning}
                staffPick={staffPick}
                duration={duration}
              ></CodexEntry>
            )
          )}
        </ul>
      </Card>
    </section>
  );
}
