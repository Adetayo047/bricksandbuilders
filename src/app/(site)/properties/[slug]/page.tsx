import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PlaceholderImage from "@/components/PlaceholderImage";
import StatStack from "@/components/StatStack";
import WhatsAppButton from "@/components/WhatsAppButton";
import InquiryForm from "@/components/InquiryForm";
import { getProperty, properties } from "@/lib/properties";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = getProperty(slug);
  return { title: property ? `${property.name} | Bricks & Builders` : "Property Not Found" };
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) notFound();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-on-ink">
        {property.cardImage ? (
          <Image
            src={property.cardImage}
            alt=""
            fill
            sizes="100vw"
            className="absolute inset-0 object-cover"
          />
        ) : (
          <PlaceholderImage tone={property.placeholderTone} className="absolute inset-0" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="relative mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-end px-6 py-16 md:px-10">
          <Link
            href="/properties"
            className="mb-6 inline-block w-fit text-xs uppercase tracking-[0.12em] text-on-ink-muted hover:text-gold transition-colors"
          >
            ← All Properties
          </Link>
          <p className="eyebrow text-gold">{property.heroTag}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl md:text-6xl">{property.name}</h1>
          <p className="mt-4 text-sm text-on-ink-muted">{property.location}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-16 md:grid-cols-[2fr_1fr]">
          <div>
            <p className="eyebrow text-gold">Overview</p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-paper-muted">
              {property.description}
            </p>

            <div className="mt-14">
              <p className="eyebrow text-gold">Pricing</p>
              <div className="mt-6 divide-y hairline-on-paper border-t border-b hairline-on-paper">
                {property.priceTiers.map((tier) => (
                  <div
                    key={tier.label}
                    className="flex flex-col justify-between gap-1 py-4 sm:flex-row sm:items-center"
                  >
                    <div>
                      <p className="font-display text-lg">{tier.label}</p>
                      {tier.sqm && (
                        <p className="text-xs uppercase tracking-[0.1em] text-on-paper-muted">
                          {tier.sqm}
                        </p>
                      )}
                    </div>
                    <p className="font-display text-xl text-gold">{tier.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {property.flyer ? (
              <div className="mt-14">
                <p className="eyebrow text-gold">Official Listing Flyer</p>
                <div className="relative mt-6 aspect-[3/4] max-w-md overflow-hidden bg-ink">
                  <Image
                    src={property.flyer}
                    alt={`${property.name} official listing flyer`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ) : (
              <div className="mt-14 grid grid-cols-3 gap-6">
                {[1, 2, 3].map((n) => (
                  <PlaceholderImage
                    key={n}
                    tone={property.placeholderTone === "paper" ? "ink" : "paper"}
                    className="aspect-square"
                  />
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="bg-paper-dim p-8">
              <StatStack stats={property.stats} tone="paper" />
              <p className="mt-8 text-[10px] uppercase tracking-[0.1em] text-on-paper-muted">
                Status
              </p>
              <p className="mt-1 font-display text-lg">{property.status}</p>
              <div className="mt-8">
                <WhatsAppButton
                  message={`Hi, I'm interested in ${property.name} (${property.location}).`}
                  className="w-full justify-center"
                >
                  Enquire on WhatsApp
                </WhatsAppButton>
              </div>
            </div>

            <div className="mt-8">
              <p className="eyebrow text-gold">Or send an inquiry</p>
              <div className="mt-6">
                <InquiryForm propertyName={property.name} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
