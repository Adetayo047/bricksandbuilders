import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PlaceholderImage from "@/components/PlaceholderImage";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = { title: "Gallery | Bricks & Builders" };

const REAL_TILES: { src: string; label: string; span: string }[] = [
  { src: "/photos/flyer-noble-villa-asokoro.jpg", label: "The Noble Villa Estate", span: "md:col-span-2 md:row-span-2" },
  { src: "/photos/flyer-solaris-court-lifecamp.jpg", label: "Solaris Court Estate", span: "" },
  { src: "/photos/flyer-bricksville-karshi.jpg", label: "Bricksville Estate", span: "" },
  { src: "/photos/flyer-champion-abode-kurudu.jpg", label: "Champion Abode Estate", span: "" },
  { src: "/photos/site-visit/site-visit-briefing.jpg", label: "Site Visit — Briefing", span: "" },
  { src: "/photos/site-visit/site-visit-team.jpg", label: "Site Visit — Team", span: "md:col-span-2" },
  { src: "/photos/site-visit/site-visit-review.jpg", label: "Site Visit — Plan Review", span: "" },
  { src: "/photos/site-visit/site-visit-team-wide.jpg", label: "Site Visit — Team", span: "" },
  { src: "/photos/promo-tgif.jpg", label: "Land Your Future Investment", span: "" },
  { src: "/photos/promo-dream-property.jpg", label: "Find Your Dream Property", span: "md:col-span-2" },
];

const PLACEHOLDER_TILES: { tone: "ink" | "gold" | "paper"; label: string }[] = [
  { tone: "ink", label: "Builders Empire" },
  { tone: "paper", label: "ASO Drive Residence" },
];

export default function GalleryPage() {
  return (
    <div>
      <PageHero>
        <p className="eyebrow text-gold">Visual Archive</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl md:text-6xl">Gallery</h1>
        <p className="mt-6 max-w-xl text-sm text-on-ink-muted">
          Official listing flyers and site content from our active developments. Full
          professional photo sets for Builders Empire and ASO Drive are coming soon.
        </p>
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-flow-dense gap-6 md:grid-cols-4">
          {REAL_TILES.map((tile) => (
            <div
              key={tile.src}
              className={`reveal-up relative aspect-square overflow-hidden ${tile.span}`}
            >
              <Image
                src={tile.src}
                alt={tile.label}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
          {PLACEHOLDER_TILES.map((tile) => (
            <PlaceholderImage key={tile.label} tone={tile.tone} label={tile.label} className="aspect-square" />
          ))}
        </div>
      </section>

      <section className="bg-ink text-on-ink">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:px-10">
          <h2 className="mx-auto max-w-xl font-display text-3xl md:text-4xl">
            See a plot or unit that caught your eye?
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WhatsAppButton message="Hi, I'd like to ask about a property I saw in your gallery.">
              Chat on WhatsApp
            </WhatsAppButton>
            <Link
              href="/properties"
              className="inline-flex items-center gap-3 border hairline-on-ink px-7 py-4 text-xs uppercase tracking-[0.14em] text-on-ink transition-colors hover:border-gold hover:text-gold"
            >
              View Properties
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
