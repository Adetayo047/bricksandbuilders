import Link from "next/link";
import { notFound } from "next/navigation";
import { readPropertiesFromDisk } from "@/lib/properties-admin";
import PropertyEditForm from "@/components/admin/PropertyEditForm";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = readPropertiesFromDisk().find((p) => p.slug === slug);
  return { title: property ? `Edit ${property.name} | Admin` : "Not Found | Admin" };
}

export default async function AdminEditPropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = readPropertiesFromDisk().find((p) => p.slug === slug);
  if (!property) notFound();

  return (
    <div>
      <Link href="/admin/properties" className="text-xs uppercase tracking-[0.1em] text-neutral-500">
        ← All Properties
      </Link>
      <h1 className="mt-4 text-xl font-semibold">{property.name}</h1>
      <PropertyEditForm property={property} />
    </div>
  );
}
