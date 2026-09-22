import Link from "next/link";
import PageHero from "@/components/PageHero";
import PropertyMedia from "@/components/PropertyMedia";
import { properties, type PropertyCategory } from "@/lib/properties";

const CATEGORIES: (PropertyCategory | "All")[] = ["All", "Land", "Residential", "Luxury"];

export const metadata = {
  title: "Properties | Bricks & Builders",
};

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = (category as PropertyCategory | undefined) ?? "All";
  const list =
    active === "All" ? properties : properties.filter((p) => p.category === active);

  return (
    <div>
      <PageHero>
        <p className="eyebrow text-gold">Portfolio</p>
        <h1 className="mt-4 font-display text-4xl md:text-6xl">Properties</h1>
        <p className="mt-6 max-w-xl text-sm text-on-ink-muted">
          Land, residential developments, and luxury estates across Abuja&rsquo;s
          highest-growth corridors and most prestigious addresses.
        </p>
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="flex flex-wrap gap-3 border-b hairline-on-paper pb-8">
          {CATEGORIES.map((c) => (
            <Link
              key={c}
              href={c === "All" ? "/properties" : `/properties?category=${c}`}
              className={`px-5 py-2 text-xs uppercase tracking-[0.14em] transition-colors ${
                active === c
                  ? "bg-ink text-on-ink"
                  : "border hairline-on-paper text-on-paper-muted hover:border-gold hover:text-gold"
              }`}
            >
              {c}
            </Link>
          ))}
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {list.map((property) => (
            <Link
              key={property.slug}
              href={`/properties/${property.slug}`}
              className="reveal-up group block"
            >
              <PropertyMedia
                property={property}
                className="aspect-[4/3] transition-opacity group-hover:opacity-90"
              />
              <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                  <p className="eyebrow text-gold text-[10px]">{property.category}</p>
                  <h3 className="mt-2 font-display text-xl">{property.name}</h3>
                  <p className="mt-1 text-sm text-on-paper-muted">{property.location}</p>
                </div>
                <span className="mt-1 shrink-0 text-[10px] uppercase tracking-[0.12em] text-on-paper-muted">
                  {property.status}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
