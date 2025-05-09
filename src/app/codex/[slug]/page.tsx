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
import CodexPostClient from '@/components/codex/CodexPostClient';

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export default async function CodexPost({ params }: { params: { slug: string } }) {
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
    <section>
      <CodexPostClient post={post} mostRecentPost={mostRecentPost} mostRecentCategoryPost={mostRecentCategoryPost} previousPosts={filteredPreviousCategoryPosts}/>
    </section>
  );
}
