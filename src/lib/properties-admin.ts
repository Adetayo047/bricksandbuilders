import "server-only";
import fs from "node:fs";
import path from "node:path";
import type { Property } from "@/lib/properties";

const DATA_PATH = path.join(process.cwd(), "src/data/properties.json");

export function readPropertiesFromDisk(): Property[] {
  const raw = fs.readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(raw) as Property[];
}

function writePropertiesToDisk(all: Property[]) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(all, null, 2) + "\n", "utf-8");
}

export function saveProperty(slug: string, updates: Partial<Property>): Property {
  const all = readPropertiesFromDisk();
  const index = all.findIndex((p) => p.slug === slug);
  if (index === -1) throw new Error(`Property not found: ${slug}`);

  all[index] = { ...all[index], ...updates, slug: all[index].slug };
  writePropertiesToDisk(all);
  return all[index];
}
