import Link from "next/link";
import { getCategories, getPublishedPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Writing on things I build and learn.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const [posts, categories] = await Promise.all([
    getPublishedPosts(category),
    getCategories(),
  ]);

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-bold text-foreground">Blog</h1>

      {categories.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          <Link
            href="/blog"
            className={`rounded-full border px-3 py-1 font-mono text-xs transition ${
              !category
                ? "border-signal text-signal"
                : "border-white/10 text-muted hover:border-signal/50"
            }`}
          >
            All
          </Link>
          {categories.map((c) => (
            <Link
              key={c}
              href={`/blog?category=${encodeURIComponent(c)}`}
              className={`rounded-full border px-3 py-1 font-mono text-xs transition ${
                category === c
                  ? "border-signal text-signal"
                  : "border-white/10 text-muted hover:border-signal/50"
              }`}
            >
              {c}
            </Link>
          ))}
        </div>
      )}

      {posts.length === 0 ? (
        <p className="mt-8 text-muted">Coming soon</p>
      ) : (
        <ul className="mt-10 space-y-6">
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-lg border border-white/10 bg-panel p-6 transition hover:border-signal/50"
              >
                <p className="font-mono text-xs text-signal">{post.category}</p>
                <h2 className="mt-1 text-xl font-semibold text-foreground">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
                <p className="mt-4 font-mono text-xs text-muted">
                  {post.createdAt.toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
