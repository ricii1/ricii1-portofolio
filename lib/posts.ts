import { and, desc, eq } from "drizzle-orm";
import { db } from "./db/client";
import { posts } from "./db/schema";

export async function getPublishedPosts(category?: string) {
  return db
    .select()
    .from(posts)
    .where(
      category
        ? and(eq(posts.published, true), eq(posts.category, category))
        : eq(posts.published, true),
    )
    .orderBy(desc(posts.createdAt));
}

export async function getCategories() {
  const rows = await db
    .selectDistinct({ category: posts.category })
    .from(posts)
    .where(eq(posts.published, true));
  return rows.map((r) => r.category).sort();
}

export async function getPostBySlug(slug: string) {
  const [post] = await db
    .select()
    .from(posts)
    .where(eq(posts.slug, slug))
    .limit(1);
  return post;
}

export async function getAllPostsForAdmin() {
  return db.select().from(posts).orderBy(desc(posts.createdAt));
}

export async function getPostById(id: number) {
  const [post] = await db.select().from(posts).where(eq(posts.id, id)).limit(1);
  return post;
}
