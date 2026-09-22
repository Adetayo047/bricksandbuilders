import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

export const metadata = { title: "About | Bricks & Builders" };

const VALUES = [
  {
    title: "Local Insight",
    body: "We track Abuja's growth corridors closely — from Karshi's early-stage expansion to Maitama's established prestige — so clients position ahead of the market, not behind it.",
  },
  {
    title: "End-to-End Delivery",
    body: "From title verification through construction to handover, we manage the full lifecycle of a project so clients don't have to coordinate multiple parties themselves.",
  },
  {
    title: "Straight Talk",
    body: "We tell clients what a property is actually worth and what to expect — not just what closes a sale.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero>
        <p className="eyebrow text-gold">About Us</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl md:text-6xl">
          Building Abuja&rsquo;s Next Chapter, One Address at a Time.
        </h1>
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="reveal-up grid gap-16 md:grid-cols-2 md:items-center">
          <div className="flex aspect-[4/5] items-center justify-center bg-ink p-12">
            <Image
              src="/photos/logo-full.jpg"
              alt="Bricks & Builders Properties"
              width={2048}
              height={1302}
              className="w-full"
            />
          </div>
          <div>
            <p className="eyebrow text-gold">Our Story</p>
            <p className="mt-6 text-lg leading-relaxed text-on-paper-muted">
              {site.legalName} ({site.rcNumber}) works across the full spectrum of Abuja
              real estate — from serviced land in emerging areas to finished residential
              developments and landmark luxury estates. Our services span Real Estate,
              Project Management, and Property Consultancy, giving clients a single point
              of contact whether they&rsquo;re buying their first plot or managing a
              multi-unit development.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-on-paper-muted">
              Based in Utako, Abuja, we work directly with buyers, investors, and
              developers to identify opportunity, secure the right title, and see
              projects through to completion.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="reveal-up grid gap-16 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <p className="eyebrow text-gold">Leadership</p>
            <h2 className="mt-4 font-display text-3xl">Remmie Oladokun</h2>
            <p className="mt-1 text-xs uppercase tracking-[0.12em] text-on-paper-muted">
              Chief Executive Officer
            </p>
            <p className="mt-6 text-lg leading-relaxed text-on-paper-muted">
              Under Remmie&rsquo;s leadership, {site.legalName} has grown from land sales
              into a full-service real estate, project management, and consultancy
              practice — built on the same principle every client hears first: integrity.
            </p>
          </div>
          <div className="order-1 aspect-[4/5] overflow-hidden bg-ink md:order-2">
            <Image
              src="/photos/team/ceo-portrait.jpg"
              alt="Remmie Oladokun, CEO of Bricks & Builders Properties"
              width={2656}
              height={3320}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-ink text-on-ink">
        <div className="mx-auto max-w-4xl px-6 pt-12 text-center md:px-10">
          <p className="eyebrow justify-center text-gold">Our Team</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">One Team, One Goal.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-on-ink-muted">
            From site visits in Karshi to client handovers in Maitama, the people our
            clients meet on day one are the same ones who see every deal through to
            the end — sales, project management, and consultancy, working as one.
          </p>
        </div>
        {/* Full, uncropped group photo (head to leg, nobody trimmed off the
            sides) — the campaign headline, subtext, and gold accents that
            were baked into the original image have been digitally removed
            (shadow lifted + inpainted) rather than cropped away, and the
            promo fire-graphic/contact-bar footer below the group is left
            off since it isn't part of the team. Container aspect matches
            the source exactly so nothing gets cropped further. */}
        <div className="relative mx-auto mt-10 aspect-[3277/3150] max-w-4xl overflow-hidden">
          <Image
            src="/photos/team/team-group-full-v2.jpg"
            alt="The Bricks & Builders team"
            fill
            sizes="(min-width: 768px) 56rem, 100vw"
            className="object-cover"
          />
        </div>
        <div className="h-12" />
      </section>

      <section className="bg-paper-dim">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <p className="eyebrow text-gold">Why Choose Us</p>
          <div className="mt-10 divide-y hairline-on-paper border-t hairline-on-paper">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="reveal-up grid gap-4 py-10 md:grid-cols-[auto_1fr_2fr] md:items-baseline md:gap-12"
              >
                <span className="font-display text-lg text-gold">
                  ({String(i + 1).padStart(2, "0")})
                </span>
                <h3 className="font-display text-2xl">{v.title}</h3>
                <p className="text-sm leading-relaxed text-on-paper-muted">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-on-ink">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:px-10">
          <h2 className="mx-auto max-w-xl font-display text-3xl md:text-4xl">
            Let&rsquo;s talk about where you should invest next.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WhatsAppButton message="Hi, I'd like to learn more about Bricks & Builders.">
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
