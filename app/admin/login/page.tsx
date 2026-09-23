import { login } from "@/app/admin/actions";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center px-6">
      <h1 className="text-2xl font-bold text-foreground">Admin Login</h1>
      <form action={login} className="mt-8 space-y-4">
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          autoFocus
          className="w-full rounded-lg border border-white/10 bg-panel px-4 py-2 text-foreground outline-none focus:border-signal/50"
        />
        {error && (
          <p className="text-sm text-red-400">Wrong password.</p>
        )}
        <button
          type="submit"
          className="w-full rounded-lg bg-signal px-4 py-2 font-mono text-sm text-background transition hover:opacity-90"
        >
          Log in
        </button>
      </form>
    </main>
  );
}
