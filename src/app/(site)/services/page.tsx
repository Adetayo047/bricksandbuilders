import Link from "next/link";
import PageHero from "@/components/PageHero";
import StaggeredImages from "@/components/StaggeredImages";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getProperty } from "@/lib/properties";

export const metadata = { title: "Services | Bricks & Builders" };

const SERVICES = [
  {
    tag: "01",
    title: "Real Estate",
    body: "Land and finished properties across Abuja's growth corridors — from early-stage plots in emerging areas to move-in-ready homes and luxury estates.",
    points: ["Land sales & title verification", "Residential developments", "Luxury estate brokerage"],
    back: getProperty("bricksville-estate-karshi")!,
    front: getProperty("noble-villa-estate-asokoro")!,
  },
  {
    tag: "02",
    title: "Project Management",
    body: "End-to-end oversight of development projects, from planning and permitting through construction to handover.",
    points: ["Planning & permitting", "Contractor coordination", "Quality & timeline oversight"],
    back: getProperty("solaris-court-estate-life-camp")!,
    front: getProperty("champion-abode-estate-kurudu")!,
  },
  {
    tag: "03",
    title: "Property Consultancy",
    body: "Independent guidance on where and how to invest, tailored to a client's budget, timeline, and goals.",
    points: ["Investment strategy", "Market & location analysis", "Portfolio advisory"],
    back: getProperty("aso-drive-maitama")!,
    front: getProperty("builders-empire-lugbe")!,
  },
];

export default function ServicesPage() {
  return (
    <div>
      <PageHero>
        <p className="eyebrow text-gold">What We Do</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl md:text-6xl">Our Services</h1>
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="space-y-20">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`grid items-center gap-12 md:grid-cols-2 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <StaggeredImages back={s.back} front={s.front} />
              <div className="reveal-up">
                <p className="eyebrow text-gold">{s.tag}</p>
                <h2 className="mt-4 font-display text-3xl">{s.title}</h2>
                <p className="mt-5 text-sm leading-relaxed text-on-paper-muted">{s.body}</p>
                <ul className="mt-6 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="text-sm text-on-paper-muted">
                      — {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-on-ink">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:px-10">
          <h2 className="mx-auto max-w-xl font-display text-3xl md:text-4xl">
            Ready to start a project or make an inquiry?
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WhatsAppButton message="Hi, I'd like to discuss a service with Bricks & Builders.">
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
