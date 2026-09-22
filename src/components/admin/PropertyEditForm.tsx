"use client";

import { useActionState } from "react";
import { updatePropertyAction } from "@/lib/admin-actions";
import PriceTiersEditor from "@/components/admin/PriceTiersEditor";
import type { Property } from "@/lib/properties";

const inputClass =
  "mt-1 w-full border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none";
const labelClass = "text-xs uppercase tracking-[0.1em] text-neutral-500";

export default function PropertyEditForm({ property }: { property: Property }) {
  const [state, formAction, pending] = useActionState(updatePropertyAction, null);

  return (
    <form action={formAction} className="mt-8 space-y-6">
      <input type="hidden" name="slug" value={property.slug} />

      <div>
        <label className={labelClass} htmlFor="name">
          Name
        </label>
        <input id="name" name="name" defaultValue={property.name} required className={inputClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="location">
          Location
        </label>
        <input
          id="location"
          name="location"
          defaultValue={property.location}
          required
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="status">
          Status
        </label>
        <select id="status" name="status" defaultValue={property.status} className={inputClass}>
          <option value="Available">Available</option>
          <option value="Selling Fast">Selling Fast</option>
          <option value="Sold Out">Sold Out</option>
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="summary">
          Summary (short, used on cards/previews)
        </label>
        <textarea
          id="summary"
          name="summary"
          defaultValue={property.summary}
          rows={2}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="description">
          Full Description (shown on the property page)
        </label>
        <textarea
          id="description"
          name="description"
          defaultValue={property.description}
          rows={5}
          className={inputClass}
        />
      </div>

      <div>
        <p className={labelClass}>Pricing</p>
        <div className="mt-2">
          <PriceTiersEditor initial={property.priceTiers} />
        </div>
      </div>

      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}
      {state?.success && <p className="text-sm text-green-700">Saved.</p>}

      <button
        type="submit"
        disabled={pending}
        className="bg-neutral-900 px-5 py-2.5 text-sm uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {pending ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
}
