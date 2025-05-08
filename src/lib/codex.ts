import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'codex');

type PostMeta = {
  title: string;
  date: string;
  description?: string;
  category?: string;
  authorName?: string;
  contentWarning?: string;
};

function isValidMarkdown(filename: string) {
  return filename.endsWith('.md') && filename !== '_DEV.md';
}

export function getSortedPosts() {
  const filenames = fs
    .readdirSync(postsDirectory)
    .filter(isValidMarkdown);

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      ...(data as PostMeta),
    };
  });

  // Sort by date descending (most recent first)
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllSlugs() {
  const filenames = fs
    .readdirSync(postsDirectory)
    .filter(isValidMarkdown);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(data as PostMeta),
  };
}

export function getPreviousPostsByCategory(currentSlug: string, category: string, count: number = 2) {
  const posts = getSortedPosts();
  const index = posts.findIndex((post) => post.slug === currentSlug);
  if (index === -1) return [];

  return posts
    .slice(index + 1) // only older posts
    .filter((post) => post.category === category)
    .slice(0, count);
}

export function getMostRecentPost(currentSlug: string) {
  const posts = getSortedPosts();
  return posts.find((post) => post.slug !== currentSlug) || null;
}

export function getMostRecentPostInCategory(currentSlug: string, category: string) {
  const posts = getSortedPosts();
  return posts.find(
    (post) => post.category === category && post.slug !== currentSlug
  ) || null;
}

export function getRecentPostsByAuthor(currentSlug: string, authorName: string, count: number = 3) {
  const posts = getSortedPosts();
  return posts
    .filter((post) => post.authorName === authorName && post.slug !== currentSlug)
    .slice(0, count);
}
