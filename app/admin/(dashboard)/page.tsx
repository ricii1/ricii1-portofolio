import Link from "next/link";
import { getAllPostsForAdmin } from "@/lib/posts";
import { deletePost } from "@/app/admin/actions";

export default async function AdminPostsPage() {
  const posts = await getAllPostsForAdmin();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Posts</h1>
        <Link
          href="/admin/posts/new"
          className="rounded-lg bg-signal px-4 py-2 font-mono text-sm text-background transition hover:opacity-90"
        >
          New post
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="mt-8 text-muted">No posts yet.</p>
      ) : (
        <ul className="mt-8 divide-y divide-white/10 rounded-lg border border-white/10 bg-panel">
          {posts.map((post) => (
            <li
              key={post.id}
              className="flex items-center justify-between gap-4 px-6 py-4"
            >
              <div>
                <p className="font-semibold text-foreground">{post.title}</p>
                <p className="mt-1 font-mono text-xs text-muted">
                  /{post.slug} · {post.category} ·{" "}
                  {post.published ? (
                    <span className="text-signal">published</span>
                  ) : (
                    <span>draft</span>
                  )}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href={`/admin/posts/${post.id}`}
                  className="font-mono text-sm text-foreground transition-colors hover:text-signal"
                >
                  Edit
                </Link>
                <form action={deletePost.bind(null, post.id)}>
                  <button
                    type="submit"
                    className="font-mono text-sm text-muted transition-colors hover:text-red-400"
                  >
                    Delete
                  </button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
