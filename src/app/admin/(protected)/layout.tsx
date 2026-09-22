import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { logoutAction } from "@/lib/admin-actions";

export default async function AdminProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authed = await isAdminAuthenticated();
  if (!authed) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="flex items-center justify-between border-b border-neutral-200 bg-white px-6 py-4">
        <p className="text-sm font-semibold">Bricks & Builders Admin</p>
        <form action={logoutAction}>
          <button
            type="submit"
            className="text-xs uppercase tracking-[0.12em] text-neutral-500 hover:text-neutral-900"
          >
            Log Out
          </button>
        </form>
      </header>
      <main className="mx-auto max-w-4xl px-6 py-10">{children}</main>
    </div>
  );
}
