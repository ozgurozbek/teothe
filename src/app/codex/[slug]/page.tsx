import {
  getAllSlugs,
  getPostBySlug,
  getPreviousPostsByCategory,
  getMostRecentPost,
  getMostRecentPostInCategory,
  getRecentPostsByAuthor,
  getNextPostInSeries,
} from '@/lib/codex';
import { notFound } from 'next/navigation';
import CodexPostClient from '@/components/codex/CodexPostClient';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested post could not be found.',
    };
  }

  return {
    title: post.title,
    description: post.description || 'Explore this post in our library.',
  };
}


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

  const nextInSeries =
  post.category && post.authorName
    ? getNextPostInSeries(post.slug, post.category, post.authorName)
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
  if (nextInSeries) shownSlugs.add(nextInSeries.slug);

  const filteredPreviousCategoryPosts = previousCategoryPosts.filter(
    (p) => !shownSlugs.has(p.slug)
  );
  filteredPreviousCategoryPosts.forEach((p) => shownSlugs.add(p.slug));

  const filteredAuthorPosts = recentAuthorPosts.filter(
    (p) => !shownSlugs.has(p.slug)
  );

  return (
    <section>
      <CodexPostClient post={post} author={authorName} mostRecentPost={mostRecentPost} mostRecentCategoryPost={mostRecentCategoryPost}
      previousPosts={filteredPreviousCategoryPosts} recentAuthorPosts={filteredAuthorPosts} nextInSeries={nextInSeries}/>
    </section>
  );
}
