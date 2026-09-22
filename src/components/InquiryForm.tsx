"use client";

import { useActionState } from "react";
import { submitInquiry } from "@/lib/actions";

export default function InquiryForm({ propertyName }: { propertyName?: string }) {
  const [state, formAction, pending] = useActionState(submitInquiry, null);

  return (
    <form action={formAction} className="space-y-6">
      {propertyName && <input type="hidden" name="property" value={propertyName} />}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-[11px] uppercase tracking-[0.14em] text-on-paper-muted"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-2 w-full border-0 border-b hairline-on-paper bg-transparent py-2 focus:border-gold focus:outline-none focus:ring-0"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="text-[11px] uppercase tracking-[0.14em] text-on-paper-muted"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            required
            className="mt-2 w-full border-0 border-b hairline-on-paper bg-transparent py-2 focus:border-gold focus:outline-none focus:ring-0"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="text-[11px] uppercase tracking-[0.14em] text-on-paper-muted"
        >
          Email (optional)
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="mt-2 w-full border-0 border-b hairline-on-paper bg-transparent py-2 focus:border-gold focus:outline-none focus:ring-0"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="text-[11px] uppercase tracking-[0.14em] text-on-paper-muted"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full resize-none border-0 border-b hairline-on-paper bg-transparent py-2 focus:border-gold focus:outline-none focus:ring-0"
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="w-full bg-ink px-7 py-4 text-xs uppercase tracking-[0.14em] text-on-ink transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {pending ? "Sending..." : "Send Inquiry"}
      </button>
      {state?.success && (
        <p className="text-center text-xs uppercase tracking-[0.12em] text-gold">
          Thank you — we&rsquo;ll be in touch shortly.
        </p>
      )}
      {state?.error && (
        <p className="text-center text-xs uppercase tracking-[0.12em] text-red-700">
          {state.error}
        </p>
      )}
    </form>
  );
}
