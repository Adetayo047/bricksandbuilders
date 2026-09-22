import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-on-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Image src="/logo-mark.png" alt="" width={42} height={36} className="h-9 w-auto" />
              <p className="font-display text-2xl uppercase tracking-[0.06em]">
                Bricks<span className="text-gold">&</span>Builders
              </p>
            </div>
            <p className="mt-4 max-w-sm text-sm text-on-ink-muted">{site.tagline}</p>
          </div>
          <div>
            <p className="eyebrow text-gold">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-on-ink-muted">
              <li>{site.address}</li>
              <li>
                <a href={`tel:${site.phoneIntl}`} className="hover:text-gold transition-colors">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-gold transition-colors">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-gold">Explore</p>
            <ul className="mt-4 space-y-2 text-sm text-on-ink-muted">
              <li>
                <Link href="/properties" className="hover:text-gold transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li className="flex gap-4 pt-2">
                <a
                  href={site.instagram}
                  target="_blank"
                  className="hover:text-gold transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={site.facebook}
                  target="_blank"
                  className="hover:text-gold transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-2 border-t hairline-on-ink pt-6 text-xs text-on-ink-muted md:flex-row md:justify-between">
          <span>
            &copy; {new Date().getFullYear()} {site.legalName} ({site.rcNumber}). All
            rights reserved.
          </span>
          <span>Abuja, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
