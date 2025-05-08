'use client';

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
            title: "title",
            text: ["Text"],
          }}
        />
        <Divider />
        <ul>
          {posts.map(({ slug, title, date, description, category, contentWarning }) => (
            <li key={slug} className="mb-4">
              <Link
                href={`/codex/${slug}`}
                className="text-xl text-blue-600 hover:underline"
              >
                {title}
              </Link>
              {contentWarning && (
              <span className="bg-[#30011a] px-2 py-1 rounded ml-2">
                ⚠ {contentWarning}
              </span>
            )}
              <p className="text-sm text-gray-500">{date}</p>
              {category && (
                <p className="text-sm text-gray-500 italic">{category}</p>
              )}
              <p className="text-sm text-gray-600">{description}</p> 
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
