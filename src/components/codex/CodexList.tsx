"use client";

import { Card, Divider, Row } from "antd";
import SimpleContent from "@/components/SimpleCon";
import GetCrumbs from "@/components/NavigationCrumb";
import CodexEntry from "./CodexEntry";

export default function CodexList({ posts }: { posts: any[] }) {
  return (
    <section>
      <GetCrumbs path={"Teothe,Codex"} />
      <Card variant="outlined" className="w-full">
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
        <ul className="grid md:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
          {posts.map(
            ({ slug, title, date, description, category, contentWarnings, staffPick, duration }) => (
              <Card>
                <CodexEntry key={slug} slug={slug} title={title} date={date} description={description} category={category} contentWarning={contentWarnings} staffPick={staffPick} duration={duration}></CodexEntry>
              </Card>
            )
          )}
        </ul>
      </Card>
    </section>
  );
}
