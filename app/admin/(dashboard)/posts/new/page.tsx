import PostForm from "@/app/admin/(dashboard)/posts/PostForm";
import { createPost } from "@/app/admin/actions";

export default function NewPostPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground">New post</h1>
      <PostForm action={createPost} />
    </div>
  );
}
