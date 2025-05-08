import {
  getAllSlugs,
  getPostBySlug,
  getPreviousPostsByCategory,
  getMostRecentPost,
  getMostRecentPostInCategory,
  getRecentPostsByAuthor,
} from '@/lib/codex';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const { slug, category, authorName } = post;

  const mostRecentPost = getMostRecentPost(slug);
  const mostRecentCategoryPost = category
    ? getMostRecentPostInCategory(slug, category)
    : null;

  const previousCategoryPosts = category
    ? getPreviousPostsByCategory(slug, category)
    : [];

  const recentAuthorPosts = authorName
    ? getRecentPostsByAuthor(slug, authorName)
    : [];

  // Deduplication set
  const shownSlugs = new Set([slug]);
  if (mostRecentPost) shownSlugs.add(mostRecentPost.slug);
  if (mostRecentCategoryPost) shownSlugs.add(mostRecentCategoryPost.slug);

  const filteredPreviousCategoryPosts = previousCategoryPosts.filter(
    (p) => !shownSlugs.has(p.slug)
  );
  filteredPreviousCategoryPosts.forEach((p) => shownSlugs.add(p.slug));

  const filteredAuthorPosts = recentAuthorPosts.filter(
    (p) => !shownSlugs.has(p.slug)
  );

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-1">{post.date}</p>
      {category && <p className="text-sm text-gray-600">Category: {category}</p>}
      {authorName && <p className="text-sm text-gray-600 mb-6">Author: {authorName}</p>}

      <article dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

      {/* Most Recent Post */}
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
          <p className="text-sm text-gray-500">{mostRecentPost.description}</p>
        </div>
      )}

      {/* Most Recent in Same Category */}
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

      {/* Previous Posts in Same Category */}
      {filteredPreviousCategoryPosts.length > 0 && (
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-2">
            Previous Posts in {category}
          </h3>
          <ul className="mt-2">
            {filteredPreviousCategoryPosts.map((p) => (
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

      {/* Posts by Same Author */}
      {filteredAuthorPosts.length > 0 && (
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-2">
            More Posts by {authorName}
          </h3>
          <ul className="mt-2">
            {filteredAuthorPosts.map((p) => (
              <li key={p.slug} className="mb-4">
                <Link href={`/codex/${p.slug}`}>
                  <h4 className="text-lg text-blue-600 hover:underline">
                    {p.title}
                  </h4>
                </Link>
                {p.category && (
                  <p className="text-sm text-gray-500 italic">{p.category}</p>
                )}
                <p className="text-sm text-gray-500">{p.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
