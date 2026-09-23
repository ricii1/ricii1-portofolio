import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import { getPostBySlug } from "@/lib/posts";

const markdownComponents: Components = {
  h1: ({ ...props }) => (
    <h1 className="mt-10 text-2xl font-bold text-foreground" {...props} />
  ),
  h2: ({ ...props }) => (
    <h2 className="mt-8 text-xl font-bold text-foreground" {...props} />
  ),
  h3: ({ ...props }) => (
    <h3 className="mt-6 text-lg font-semibold text-foreground" {...props} />
  ),
  p: ({ ...props }) => (
    <p className="mt-4 leading-relaxed text-foreground/90" {...props} />
  ),
  a: ({ ...props }) => (
    <a className="text-signal underline underline-offset-2" {...props} />
  ),
  ul: ({ ...props }) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-foreground/90" {...props} />
  ),
  ol: ({ ...props }) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 text-foreground/90" {...props} />
  ),
  code: ({ ...props }) => (
    <code
      className="rounded bg-panel px-1.5 py-0.5 font-mono text-sm"
      {...props}
    />
  ),
  pre: ({ ...props }) => (
    <pre
      className="mt-4 overflow-x-auto rounded-lg bg-panel p-4 font-mono text-sm"
      {...props}
    />
  ),
  blockquote: ({ ...props }) => (
    <blockquote
      className="mt-4 border-l-2 border-signal/50 pl-4 text-muted"
      {...props}
    />
  ),
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <div className="flex items-center gap-3 font-mono text-xs text-muted">
        <span className="text-signal">{post.category}</span>
        <span>
          {post.createdAt.toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
      <h1 className="mt-2 text-3xl font-bold text-foreground">{post.title}</h1>
      <div className="mt-6">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
          {post.content}
        </ReactMarkdown>
      </div>
    </main>
  );
}
