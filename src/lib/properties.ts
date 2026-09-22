import propertiesData from "@/data/properties.json";

export type PropertyCategory = "Land" | "Residential" | "Luxury";

export type PriceTier = {
  label: string;
  sqm?: string;
  price: string;
};

export type Property = {
  slug: string;
  name: string;
  category: PropertyCategory;
  location: string;
  summary: string;
  description: string;
  status: "Available" | "Selling Fast" | "Sold Out";
  featured: boolean;
  heroTag: string;
  stats: { label: string; value: string }[];
  priceTiers: PriceTier[];
  placeholderTone: "ink" | "gold" | "paper";
  /** Full marketing flyer (with pricing baked in) — shown on the property detail page. */
  flyer?: string;
  /** Clean architecture-only crop of the flyer, for use on cards/tiles. */
  cardImage?: string;
  /** True if cardImage is a generic stock photo, not this property's own photography — shows an "Illustrative Photo" label so it's never mistaken for the real listing. */
  cardImageIsStock?: boolean;
};

export const properties: Property[] = propertiesData as Property[];

export function getProperty(slug: string) {
  return properties.find((p) => p.slug === slug);
}

export function getFeaturedProperties() {
  return properties.filter((p) => p.featured);
}
