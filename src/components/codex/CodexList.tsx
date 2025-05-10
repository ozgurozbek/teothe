"use client";

import Link from "next/link";
import { Card, Divider } from "antd";
import SimpleContent from "@/components/SimpleCon";
import GetCrumbs from "@/components/NavigationCrumb";

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
            ({ slug, title, date, description, category, contentWarning, staffPick, duration }) => (
              <li key={slug} className="mb-4">
                <Link
                  href={`/codex/${slug}`}
                  className="text-xl text-blue-600 hover:underline"
                >
                  {title}
                </Link>
                {contentWarning && (
                  <span className="bg-[#30011a] px-2 py-1 rounded ml-2">
                    ⚠️ {contentWarning}
                  </span>
                )}
                {staffPick == "True" && (
                  <span className="bg-[#49aa19] px-2 py-1 rounded ml-2">
                    ❤️ Staff Favourite
                  </span>
                )}
                <p>{description}</p>
                <div>
                  <i className="text-sm italic">{date + ", "}</i>
                  {category && (
                    <i className="text-sm italic">{category + " category, "}</i>
                  )}
                  {duration && (<i className="text-sm italic">{duration} {duration > 1 ? "minutes" : "minute"} to read</i>)}
                </div>
              </li>
            )
          )}
        </ul>
      </Card>
    </section>
  );
}
