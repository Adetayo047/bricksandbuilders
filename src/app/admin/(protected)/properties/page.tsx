import Link from "next/link";
import { readPropertiesFromDisk } from "@/lib/properties-admin";

export const metadata = { title: "Properties | Admin" };

export default function AdminPropertiesPage() {
  const properties = readPropertiesFromDisk();

  return (
    <div>
      <h1 className="text-xl font-semibold">Properties</h1>
      <p className="mt-1 text-sm text-neutral-500">
        Edit listing details, pricing, and status. Changes save directly to the site&rsquo;s
        data file.
      </p>

      <div className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200">
        {properties.map((p) => (
          <Link
            key={p.slug}
            href={`/admin/properties/${p.slug}`}
            className="flex items-center justify-between gap-4 py-4 hover:bg-neutral-100"
          >
            <div>
              <p className="font-medium">{p.name}</p>
              <p className="text-sm text-neutral-500">{p.location}</p>
            </div>
            <span className="text-xs uppercase tracking-[0.1em] text-neutral-500">
              {p.status}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
