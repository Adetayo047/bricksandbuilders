import FadeHero from "@/components/FadeHero";
import FeaturedReveal from "@/components/FeaturedReveal";
import StatsReveal from "@/components/StatsReveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { properties, getFeaturedProperties } from "@/lib/properties";
import { site } from "@/lib/site";

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
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="reveal-up">
              <p className="eyebrow text-gold">Real Estate</p>
              <p className="mt-4 text-sm leading-relaxed text-on-paper-muted">
                Land and finished properties across Abuja&rsquo;s growth corridors, from
                early-stage plots to move-in-ready homes.
              </p>
            </div>
            <div className="reveal-up">
              <p className="eyebrow text-gold">Project Management</p>
              <p className="mt-4 text-sm leading-relaxed text-on-paper-muted">
                End-to-end oversight of development projects, from planning through to
                handover.
              </p>
            </div>
            <div className="reveal-up">
              <p className="eyebrow text-gold">Property Consultancy</p>
              <p className="mt-4 text-sm leading-relaxed text-on-paper-muted">
                Independent guidance on where and how to invest, tailored to your budget and
                goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="reveal-up flex flex-col items-center gap-10 border-y hairline-on-paper py-14 text-center md:flex-row md:justify-between md:text-left">
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
