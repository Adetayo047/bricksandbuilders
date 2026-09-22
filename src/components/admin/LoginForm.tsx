"use client";

import { useActionState } from "react";
import { loginAction } from "@/lib/admin-actions";

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, null);

  return (
    <form action={formAction} className="w-full max-w-sm space-y-5">
      <div>
        <label htmlFor="password" className="text-xs uppercase tracking-[0.12em] text-neutral-500">
          Admin Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          className="mt-2 w-full border border-neutral-300 px-3 py-2 focus:border-neutral-900 focus:outline-none"
        />
      </div>
      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="w-full bg-neutral-900 px-4 py-2 text-sm uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {pending ? "Checking..." : "Log In"}
      </button>
    </form>
  );
}
