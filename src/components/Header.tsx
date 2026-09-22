"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-ink">
      <div className="mx-auto flex max-w-7xl items-center justify-between border-b hairline-on-ink px-6 py-5 text-on-ink md:px-10">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 font-display text-lg tracking-[0.08em] uppercase"
        >
          <Image src="/logo-mark.png" alt="" width={33} height={28} className="h-7 w-auto" />
          Bricks<span className="text-gold">&</span>Builders
        </Link>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.14em] md:flex">
          {NAV.filter((item) => item.href !== "/").map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-gold transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={`tel:${site.phoneIntl}`}
          className="hidden items-center gap-2 text-xs uppercase tracking-[0.14em] hover:text-gold transition-colors md:flex"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          {site.phone}
        </a>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-px w-6 bg-on-ink transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-on-ink transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-b hairline-on-ink bg-ink px-6 py-8 text-on-ink md:hidden">
          <ul className="space-y-5">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={whatsappLink("Hi, I'd like to speak with Bricks & Builders about a property.")}
            target="_blank"
            onClick={() => setOpen(false)}
            className="mt-8 inline-block text-xs uppercase tracking-[0.14em] text-gold"
          >
            {site.phone} — Chat on WhatsApp
          </Link>
        </nav>
      )}
    </header>
  );
}
