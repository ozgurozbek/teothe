import { getSortedPosts } from "@/lib/codex";
import CodexList from "@/components/codex/CodexList";

export default async function BlogPage() {
  const posts = getSortedPosts();
  return <CodexList posts={posts} />;
}
