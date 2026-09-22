"use client";

import { useState } from "react";
import type { PriceTier } from "@/lib/properties";

export default function PriceTiersEditor({ initial }: { initial: PriceTier[] }) {
  const [tiers, setTiers] = useState<PriceTier[]>(initial.length > 0 ? initial : [{ label: "", sqm: "", price: "" }]);

  function update(index: number, field: keyof PriceTier, value: string) {
    setTiers((prev) => prev.map((t, i) => (i === index ? { ...t, [field]: value } : t)));
  }

  function addRow() {
    setTiers((prev) => [...prev, { label: "", sqm: "", price: "" }]);
  }

  function removeRow(index: number) {
    setTiers((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div>
      <input type="hidden" name="priceTiersJson" value={JSON.stringify(tiers)} />
      <div className="space-y-3">
        {tiers.map((tier, i) => (
          <div key={i} className="grid grid-cols-[2fr_1fr_1fr_auto] gap-2">
            <input
              value={tier.label}
              onChange={(e) => update(i, "label", e.target.value)}
              placeholder="Label (e.g. 4-Bedroom Terrace Duplex)"
              className="border border-neutral-300 px-2 py-1.5 text-sm focus:border-neutral-900 focus:outline-none"
            />
            <input
              value={tier.sqm ?? ""}
              onChange={(e) => update(i, "sqm", e.target.value)}
              placeholder="sqm"
              className="border border-neutral-300 px-2 py-1.5 text-sm focus:border-neutral-900 focus:outline-none"
            />
            <input
              value={tier.price}
              onChange={(e) => update(i, "price", e.target.value)}
              placeholder="Price"
              className="border border-neutral-300 px-2 py-1.5 text-sm focus:border-neutral-900 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => removeRow(i)}
              className="px-2 text-neutral-400 hover:text-red-600"
              aria-label="Remove row"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={addRow}
        className="mt-3 text-xs uppercase tracking-[0.1em] text-neutral-500 hover:text-neutral-900"
      >
        + Add price tier
      </button>
    </div>
  );
}
