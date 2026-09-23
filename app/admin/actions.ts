"use server";

import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db/client";
import { posts } from "@/lib/db/schema";
import {
  SESSION_COOKIE_NAME,
  SESSION_TTL_SECONDS,
  createSessionToken,
  verifyPassword,
  verifySessionToken,
} from "@/lib/auth";

async function requireSession() {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE_NAME)?.value;
  if (!verifySessionToken(token)) {
    redirect("/admin/login");
  }
}

export async function login(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  const storedHash = process.env.ADMIN_PASSWORD_HASH;

  if (!storedHash || !verifyPassword(password, storedHash)) {
    redirect("/admin/login?error=1");
  }

  const store = await cookies();
  store.set(SESSION_COOKIE_NAME, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_TTL_SECONDS,
    path: "/",
  });

  redirect("/admin");
}

export async function logout() {
  const store = await cookies();
  store.delete(SESSION_COOKIE_NAME);
  redirect("/admin/login");
}

function readPostFields(formData: FormData) {
  return {
    slug: String(formData.get("slug") ?? "").trim(),
    title: String(formData.get("title") ?? "").trim(),
    category: String(formData.get("category") ?? "").trim() || "General",
    excerpt: String(formData.get("excerpt") ?? "").trim(),
    content: String(formData.get("content") ?? "").trim(),
    published: formData.get("published") === "on",
  };
}

export async function createPost(formData: FormData) {
  await requireSession();
  const fields = readPostFields(formData);

  await db.insert(posts).values(fields);

  revalidatePath("/blog");
  revalidatePath("/admin");
  redirect("/admin");
}

export async function updatePost(id: number, formData: FormData) {
  await requireSession();
  const fields = readPostFields(formData);

  await db
    .update(posts)
    .set({ ...fields, updatedAt: new Date() })
    .where(eq(posts.id, id));

  revalidatePath("/blog");
  revalidatePath(`/blog/${fields.slug}`);
  revalidatePath("/admin");
  redirect("/admin");
}

export async function deletePost(id: number) {
  await requireSession();
  await db.delete(posts).where(eq(posts.id, id));

  revalidatePath("/blog");
  revalidatePath("/admin");
}
