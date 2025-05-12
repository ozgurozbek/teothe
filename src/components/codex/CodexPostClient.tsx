"use client";

import Link from "next/link";
import { Card, Divider, Typography } from "antd";
import GetCrumbs from "@/components/NavigationCrumb";
import CodexEntry from "./CodexEntry";

const { Title } = Typography;

export default function CodexPostClient({
  post,
  author,
  mostRecentPost,
  mostRecentCategoryPost,
  previousPosts,
  recentAuthorPosts,
  nextInSeries,
}: {
  post: any;
  author: any;
  mostRecentPost: any;
  mostRecentCategoryPost: any;
  previousPosts: any[];
  recentAuthorPosts: any[];
  nextInSeries: any;
}) {
  const { category } = post;

  return (
    <>
      <GetCrumbs path={"Teothe,Codex," + post.title.replaceAll(",", "")} />
      <Card bordered={false} className="w-full">
        <Title
          data-testid="simplecon-title"
          id={post.title.replaceAll(" ", "-").toLowerCase()}
        >
          {post.title}
        </Title>
        
        {author && (<i className="text-sm text-gray-500 mb-6 font-semibold">{author+"; "}</i>)}{category && (<i className="text-sm text-gray-500 mb-6 font-semibold">{category+", "}</i>)}<i className="text-sm text-gray-500 mb-2">{post.date}</i>
        
        <Divider/>
        
        <article dangerouslySetInnerHTML={{ __html: post.contentHtml }} /> {/* MUST FIX */}

        <Divider/>
        
        {mostRecentPost && (
          <div className="mt-10">
            <Title level={2} className="text-xl font-semibold mb-2">Most Recent Post</Title>
            <CodexEntry slug={mostRecentPost.slug} title={mostRecentPost.title} date={mostRecentPost.date} description={mostRecentPost.description} category={mostRecentPost.category} contentWarning={mostRecentPost.contentWarning} staffPick={mostRecentPost.staffPick} duration={mostRecentPost.duration} level={3}></CodexEntry>
          </div>
        )}

        {nextInSeries && (
          <div className="mt-10">
            <Title level={2} className="text-xl font-semibold mb-2">Next Post in Series</Title>
            <CodexEntry slug={nextInSeries.slug} title={nextInSeries.title} date={nextInSeries.date} description={nextInSeries.description} category={nextInSeries.category} contentWarning={nextInSeries.contentWarning} staffPick={nextInSeries.staffPick} duration={nextInSeries.duration} level={3}></CodexEntry>
          </div>
        )}

        {mostRecentCategoryPost && (
          <div className="mt-10">
            <Title level={2} className="text-xl font-semibold mb-2">Most Recent in {category}</Title>
            <CodexEntry slug={mostRecentCategoryPost.slug} title={mostRecentCategoryPost.title} date={mostRecentCategoryPost.date} description={mostRecentCategoryPost.description} category={mostRecentCategoryPost.category} contentWarning={mostRecentCategoryPost.contentWarning} staffPick={mostRecentCategoryPost.staffPick} duration={mostRecentCategoryPost.duration} level={3}></CodexEntry>
          </div>
        )}

        {recentAuthorPosts.length > 0 && (
          <div className="mt-10">
            <Title level={2} className="text-xl font-semibold mb-2">Previous Posts by {author}</Title>
            <ul className="mt-2">
              {recentAuthorPosts.map((p) => (
                <li key={p.slug} className="mb-4">
                  <CodexEntry slug={p.slug} title={p.title} date={p.date} description={p.description} category={p.category} contentWarning={p.contentWarning} staffPick={p.staffPick} duration={p.duration} level={3}></CodexEntry>
                </li>
              ))}
            </ul>
          </div>
        )}

        {previousPosts.length > 0 && (
          <div className="mt-10">
            <Title level={2} className="text-xl font-semibold mb-2">Previous Posts in {category}</Title>
            <ul className="mt-2">
              {previousPosts.map((p) => (
                <CodexEntry slug={p.slug} title={p.title} date={p.date} description={p.description} category={p.category} contentWarning={p.contentWarning} staffPick={p.staffPick} duration={p.duration} level={3}></CodexEntry>
              ))}
            </ul>
          </div>
        )}
      </Card>
    </>
  );
}
