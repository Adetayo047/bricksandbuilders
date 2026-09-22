import Image from "next/image";
import FadeHero from "@/components/FadeHero";
import FeaturedReveal from "@/components/FeaturedReveal";
import StatsReveal from "@/components/StatsReveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { properties, getFeaturedProperties } from "@/lib/properties";
import { site } from "@/lib/site";

const SERVICES = [
  {
    eyebrow: "Real Estate",
    body: "Land and finished properties across Abuja's growth corridors, from early-stage plots to move-in-ready homes.",
    icon: (
      <path d="M5 15 L16 6 L27 15 M8 13 V26 H24 V13 M14 26 V19 H18 V26" />
    ),
  },
  {
    eyebrow: "Project Management",
    body: "End-to-end oversight of development projects, from planning through to handover.",
    icon: (
      <>
        <rect x="8" y="6" width="16" height="22" rx="1.5" />
        <path d="M12 6 V4.5 H20 V6" />
        <path d="M12 14 L15 17 L21 11" />
        <path d="M12 22 H20" />
      </>
    ),
  },
  {
    eyebrow: "Property Consultancy",
    body: "Independent guidance on where and how to invest, tailored to your budget and goals.",
    icon: (
      <>
        <circle cx="16" cy="16" r="11" />
        <path d="M20 12 L14 14 L12 20 L18 18 Z" />
      </>
    ),
  },
];

const SOCIAL_THUMBS = [
  "/photos/promo-dream-property.jpg",
  "/photos/carousel-amenities.jpg",
  "/photos/promo-tgif.jpg",
  "/photos/carousel-investment.jpg",
  "/photos/promo-new-week.jpg",
];

const STATS: [
  { value: string; unit?: string; label: string },
  { value: string; unit?: string; label: string },
  { value: string; unit?: string; label: string },
  { value: string; unit?: string; label: string },
] = [
  { value: String(properties.length).padStart(2, "0"), label: "active developments across Abuja." },
  { value: "03", label: "service lines under one roof." },
  { value: site.instagramFollowers, label: "following our listings on Instagram." },
  { value: "24", unit: "/7", label: "WhatsApp support for buyers & investors." },
];

export default function Home() {
  const featured = getFeaturedProperties();

  return (
    <>
      {/* Hero */}
      <FadeHero />

      {/* Stats */}
      <StatsReveal stats={STATS} />

      {/* Featured properties */}
      <FeaturedReveal properties={featured} />

      {/* Trust strip */}
      <section className="bg-paper-dim">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <p className="eyebrow text-gold">What We Do</p>
          <div className="mt-10 grid gap-10 divide-y hairline-on-paper md:grid-cols-3 md:gap-x-10 md:gap-y-0 md:divide-y-0 md:divide-x">
            {SERVICES.map((service, i) => (
              <div
                key={service.eyebrow}
                className="reveal-up flex flex-col gap-4 pt-10 first:pt-0 md:pt-0 md:px-10 md:first:pl-0 md:last:pr-0"
              >
                <div className="flex items-start justify-between">
                  <svg
                    viewBox="0 0 32 32"
                    className="h-11 w-11 text-gold"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {service.icon}
                  </svg>
                  <span className="font-display text-lg text-gold">
                    ({String(i + 1).padStart(2, "0")})
                  </span>
                </div>
                <h3 className="font-display text-2xl">{service.eyebrow}</h3>
                <p className="text-sm leading-relaxed text-on-paper-muted">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="reveal-up border-y hairline-on-paper py-14">
          <div className="flex flex-col items-center gap-10 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <p className="eyebrow justify-center text-gold md:justify-start">
                Follow the Listings
              </p>
              <h2 className="mt-4 font-display text-2xl md:text-3xl">
                New plots and units go up on social first.
              </h2>
            </div>
            <div className="flex gap-10">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <p className="font-display text-3xl group-hover:text-gold transition-colors">
                  {site.instagramFollowers}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-on-paper-muted">
                  Instagram Followers
                </p>
              </a>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="group">
                <p className="font-display text-3xl group-hover:text-gold transition-colors">
                  {site.instagramPosts}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-on-paper-muted">
                  Listings Shared
                </p>
              </a>
            </div>
          </div>

          <div className="mt-12 flex gap-4 overflow-x-auto md:grid md:grid-cols-5 md:overflow-visible">
            {SOCIAL_THUMBS.map((src, i) => (
              <a
                key={src}
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square w-28 flex-shrink-0 overflow-hidden bg-ink md:w-auto"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 20vw, 112px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ transitionDelay: `${i * 40}ms` }}
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/10" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-ink text-on-ink">
        <div className="reveal-up mx-auto max-w-7xl px-6 py-24 text-center md:px-10">
          <p className="eyebrow justify-center text-gold">Get Started</p>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl md:text-5xl">
            Position before progress. Talk to us today.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm text-on-ink-muted">
            Call {site.phone} or reach us directly on WhatsApp to discuss a property.
          </p>
          <div className="mt-10 flex justify-center">
            <WhatsAppButton message="Hi, I'd like to speak with Bricks & Builders about a property.">
              Chat on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
