"use client";

import Link from "next/link";
import { Card, Typography } from "antd";
import GetCrumbs from "@/components/NavigationCrumb";

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
      <GetCrumbs path={"Teothe," + post.title.replaceAll(",", "")} />
      <Card bordered={false} className="w-full">
        <Title
          data-testid="simplecon-title"
          id={post.title.replaceAll(" ", "-").toLowerCase()}
        >
          {post.title}
        </Title>
        <p className="text-sm text-gray-500 mb-2">{post.date}</p>

        {category && (
          <p className="text-sm text-gray-500 mb-6 font-semibold">{category}</p>
        )}

        <article dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        
        {mostRecentPost && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-2">Most Recent Post</h3>
            <Link href={`/codex/${mostRecentPost.slug}`}>
              <h4 className="text-lg text-blue-600 hover:underline">
                {mostRecentPost.title}
              </h4>
            </Link>
            {mostRecentPost.category && (
              <p className="text-sm text-gray-500 italic">
                {mostRecentPost.category}
              </p>
            )}
            <p className="text-sm text-gray-500">
              {mostRecentPost.description}
            </p>
          </div>
        )}

        {nextInSeries && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-2">Next Post in Series</h3>
            <Link href={`/blog/${nextInSeries.slug}`}>
              <h4 className="text-lg text-blue-600 hover:underline">
                {nextInSeries.title}
              </h4>
            </Link>
            <p className="text-sm text-gray-500 italic">
              {nextInSeries.category}
            </p>
            <p className="text-sm text-gray-500">{nextInSeries.description}</p>
          </div>
        )}

        {mostRecentCategoryPost && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-2">
              Most Recent in {category}
            </h3>
            <Link href={`/codex/${mostRecentCategoryPost.slug}`}>
              <h4 className="text-lg text-blue-600 hover:underline">
                {mostRecentCategoryPost.title}
              </h4>
            </Link>
            <p className="text-sm text-gray-500 italic">{category}</p>
            <p className="text-sm text-gray-500">
              {mostRecentCategoryPost.description}
            </p>
          </div>
        )}

        {recentAuthorPosts.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-2">
              Previous Posts by {author}
            </h3>
            <ul className="mt-2">
              {recentAuthorPosts.map((p) => (
                <li key={p.slug} className="mb-4">
                  <Link href={`/codex/${p.slug}`}>
                    <h4 className="text-lg text-blue-600 hover:underline">
                      {p.title}
                    </h4>
                  </Link>
                  <p className="text-sm text-gray-500 italic">{p.category}</p>
                  <p className="text-sm text-gray-500">{p.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {previousPosts.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-2">
              Previous Posts in {category}
            </h3>
            <ul className="mt-2">
              {previousPosts.map((p) => (
                <li key={p.slug} className="mb-4">
                  <Link href={`/codex/${p.slug}`}>
                    <h4 className="text-lg text-blue-600 hover:underline">
                      {p.title}
                    </h4>
                  </Link>
                  <p className="text-sm text-gray-500 italic">{p.category}</p>
                  <p className="text-sm text-gray-500">{p.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Card>
    </>
  );
}
