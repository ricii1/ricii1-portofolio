import type { Post } from "@/lib/db/schema";

export default function PostForm({
  post,
  action,
}: {
  post?: Post;
  action: (formData: FormData) => void;
}) {
  return (
    <form action={action} className="mt-8 space-y-6">
      <div>
        <label className="font-mono text-xs text-muted">Title</label>
        <input
          type="text"
          name="title"
          required
          defaultValue={post?.title}
          className="mt-1 w-full rounded-lg border border-white/10 bg-panel px-4 py-2 text-foreground outline-none focus:border-signal/50"
        />
      </div>

      <div>
        <label className="font-mono text-xs text-muted">Slug</label>
        <input
          type="text"
          name="slug"
          required
          defaultValue={post?.slug}
          pattern="[a-z0-9-]+"
          title="lowercase letters, numbers, and dashes only"
          className="mt-1 w-full rounded-lg border border-white/10 bg-panel px-4 py-2 font-mono text-sm text-foreground outline-none focus:border-signal/50"
        />
      </div>

      <div>
        <label className="font-mono text-xs text-muted">Category</label>
        <input
          type="text"
          name="category"
          required
          defaultValue={post?.category ?? "General"}
          className="mt-1 w-full rounded-lg border border-white/10 bg-panel px-4 py-2 text-foreground outline-none focus:border-signal/50"
        />
      </div>

      <div>
        <label className="font-mono text-xs text-muted">Excerpt</label>
        <textarea
          name="excerpt"
          required
          rows={2}
          defaultValue={post?.excerpt}
          className="mt-1 w-full rounded-lg border border-white/10 bg-panel px-4 py-2 text-foreground outline-none focus:border-signal/50"
        />
      </div>

      <div>
        <label className="font-mono text-xs text-muted">
          Content (Markdown)
        </label>
        <textarea
          name="content"
          required
          rows={16}
          defaultValue={post?.content}
          className="mt-1 w-full rounded-lg border border-white/10 bg-panel px-4 py-2 font-mono text-sm text-foreground outline-none focus:border-signal/50"
        />
      </div>

      <label className="flex items-center gap-2 font-mono text-sm text-foreground">
        <input
          type="checkbox"
          name="published"
          defaultChecked={post?.published}
        />
        Published
      </label>

      <button
        type="submit"
        className="rounded-lg bg-signal px-4 py-2 font-mono text-sm text-background transition hover:opacity-90"
      >
        Save
      </button>
    </form>
  );
}
