import InquiryForm from "@/components/InquiryForm";
import PageHero from "@/components/PageHero";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

export const metadata = { title: "Contact | Bricks & Builders" };

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`;

  return (
    <div>
      <PageHero>
        <p className="eyebrow text-gold">Get in Touch</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl md:text-6xl">Contact Us</h1>
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-16 md:grid-cols-2">
          <div className="reveal-up">
            <p className="eyebrow text-gold">Reach Us</p>
            <ul className="mt-8 space-y-6">
              <li>
                <p className="text-[11px] uppercase tracking-[0.14em] text-on-paper-muted">
                  Address
                </p>
                <p className="mt-1 font-display text-lg">{site.address}</p>
              </li>
              <li>
                <p className="text-[11px] uppercase tracking-[0.14em] text-on-paper-muted">
                  Phone
                </p>
                <a href={`tel:${site.phoneIntl}`} className="mt-1 block font-display text-lg">
                  {site.phone}
                </a>
              </li>
              <li>
                <p className="text-[11px] uppercase tracking-[0.14em] text-on-paper-muted">
                  Email
                </p>
                <a href={`mailto:${site.email}`} className="mt-1 block font-display text-lg">
                  {site.email}
                </a>
              </li>
            </ul>
            <div className="mt-10">
              <WhatsAppButton message="Hi, I'd like to get in touch with Bricks & Builders.">
                Chat on WhatsApp
              </WhatsAppButton>
            </div>
            <div className="mt-10 aspect-video w-full overflow-hidden border hairline-on-paper">
              <iframe
                src={mapSrc}
                className="h-full w-full grayscale"
                loading="lazy"
                title="Bricks & Builders office location"
              />
            </div>
          </div>

          <div>
            <p className="eyebrow text-gold">Send an Inquiry</p>
            <div className="mt-8">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
