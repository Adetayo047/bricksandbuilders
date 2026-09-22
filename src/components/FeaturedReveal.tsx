"use client";

import { useRef } from "react";
import Link from "next/link";
import PropertyMedia from "@/components/PropertyMedia";
import { useGsapScrollTrigger } from "@/lib/gsap-scroll";
import type { Property } from "@/lib/properties";

export default function FeaturedReveal({ properties }: { properties: Property[] }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);

  useGsapScrollTrigger((gsap, ScrollTrigger) => {
    const wrapper = wrapperRef.current;
    const title = titleRef.current;
    const caption = captionRef.current;
    if (!wrapper || !title || !caption) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(title, { opacity: 0 });
      gsap.set(caption, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(caption, { opacity: 0, y: 24 });

    // No `pin` here on purpose: GSAP's pin physically wraps the pinned
    // element in a new DOM node the moment the ScrollTrigger is created,
    // which desyncs React's fiber tree from the real DOM and throws
    // "removeChild: not a child of this node" the next time React commits
    // a change anywhere near it (e.g. navigating away). The `wrapper` div
    // below is deliberately tall with the content `sticky`-positioned in
    // CSS instead, giving the same scroll-driven crossfade without GSAP
    // ever touching the DOM structure.
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
        },
      })
      .to(title, { scale: 0.4, opacity: 0, ease: "none", duration: 1 }, 0)
      .to(caption, { opacity: 1, y: 0, ease: "none", duration: 0.6 }, 0.3);
  }, []);

  return (
    <div ref={wrapperRef} className="relative bg-paper" style={{ height: "180vh" }}>
      <section className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
          <div
            ref={captionRef}
            className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <p className="eyebrow text-gold">Portfolio</p>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">Featured Developments</h2>
            </div>
            <Link
              href="/properties"
              className="text-xs uppercase tracking-[0.14em] text-on-paper-muted hover:text-gold transition-colors"
            >
              View all properties →
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {properties.slice(0, 3).map((property) => (
              <Link
                key={property.slug}
                href={`/properties/${property.slug}`}
                className="group block"
              >
                <PropertyMedia
                  property={property}
                  className="aspect-[4/3] transition-opacity group-hover:opacity-90"
                />
                <div className="mt-5">
                  <p className="eyebrow text-gold text-[10px]">{property.category}</p>
                  <h3 className="mt-2 font-display text-xl">{property.name}</h3>
                  <p className="mt-1 text-sm text-on-paper-muted">{property.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div
          ref={titleRef}
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-paper px-6"
        >
          <h2 className="max-w-4xl text-center font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
            Featured Developments
          </h2>
        </div>
      </section>
    </div>
  );
}
