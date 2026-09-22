import LoginForm from "@/components/admin/LoginForm";

export const metadata = { title: "Admin Login | Bricks & Builders" };

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 px-6">
      <div className="w-full max-w-sm">
        <h1 className="text-lg font-semibold text-neutral-900">Bricks & Builders Admin</h1>
        <p className="mt-1 text-sm text-neutral-500">Sign in to edit property listings.</p>
        <div className="mt-8">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
