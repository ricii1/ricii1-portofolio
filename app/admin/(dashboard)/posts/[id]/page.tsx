import { notFound } from "next/navigation";
import PostForm from "@/app/admin/(dashboard)/posts/PostForm";
import { updatePost } from "@/app/admin/actions";
import { getPostById } from "@/lib/posts";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPostById(Number(id));

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground">Edit post</h1>
      <PostForm post={post} action={updatePost.bind(null, post.id)} />
    </div>
  );
}
