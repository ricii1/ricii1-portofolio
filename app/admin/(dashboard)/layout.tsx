import Link from "next/link";
import { logout } from "@/app/admin/actions";

export default function AdminLayout({ children }: LayoutProps<"/admin">) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-panel bg-background/90 px-6 py-4">
        <nav className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/admin" className="font-mono text-sm text-foreground">
            Admin
          </Link>
          <form action={logout}>
            <button
              type="submit"
              className="font-mono text-sm text-muted transition-colors hover:text-signal"
            >
              Log out
            </button>
          </form>
        </nav>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
    </div>
  );
}
