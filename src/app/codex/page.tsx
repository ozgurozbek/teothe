import Link from 'next/link';
import { getSortedPosts } from '@/lib/codex';

export default async function BlogPage() {
  const posts = getSortedPosts();

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <ul>
        {posts.map(({ slug, title, date, description, category }) => (
          <li key={slug} className="mb-4">
            <Link href={`/codex/${slug}`} className="text-xl text-blue-600 hover:underline">
              {title}
            </Link>
            <p className="text-sm text-gray-500">{date}</p>
            {category && <p className="text-sm text-gray-500 italic">{category}</p>}
            <p className="text-sm text-gray-600">{description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
