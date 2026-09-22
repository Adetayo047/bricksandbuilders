"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGsapScrollTrigger } from "@/lib/gsap-scroll";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function FadeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const leftBlockRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGsapScrollTrigger((gsap, ScrollTrigger) => {
    const section = sectionRef.current;
    const fade = fadeRef.current;
    if (!section || !fade) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const entranceTargets = [
      line1Ref.current,
      line2Ref.current,
      leftBlockRef.current,
      introRef.current,
      scrollRef.current,
    ].filter((el): el is HTMLElement => Boolean(el));

    if (reduced) {
      gsap.set(entranceTargets, { opacity: 1, y: 0 });
    } else {
      gsap.set([line1Ref.current, line2Ref.current], { yPercent: 110 });
      gsap.set(
        [leftBlockRef.current, introRef.current, scrollRef.current],
        { opacity: 0, y: 24 }
      );

      const tl = gsap.timeline({ delay: 0.15 });
      tl.to([line1Ref.current, line2Ref.current], {
        yPercent: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.12,
      })
        .to(leftBlockRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, 0.55)
        .to(introRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, 0.7)
        .to(scrollRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0.9);
    }

    if (reduced) return;

    gsap.to(fade, {
      opacity: 0.15,
      y: -60,
      scale: 0.96,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 0.4,
      },
    });
    // Cleanup handled by gsap.context().revert() in useGsapScrollTrigger.
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-ink text-on-ink">
      <div ref={fadeRef} className="relative min-h-[90vh]">
        <Image
          src="/hero/hero-house-dusk.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />
        <div className="absolute inset-0 bg-ink/20" />

        <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-between px-6 pb-10 pt-16 md:px-10">
          <h1 className="select-none font-display text-[16vw] uppercase leading-[0.85] tracking-tight md:text-[10vw]">
            <span className="block overflow-hidden">
              <span ref={line1Ref} className="block">
                Bricks<span className="text-gold">&</span>
              </span>
            </span>
            <span className="block overflow-hidden">
              <span ref={line2Ref} className="block">
                Builders
              </span>
            </span>
          </h1>

          <div className="mt-16 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div ref={leftBlockRef}>
              <p className="eyebrow text-gold">Abuja, Nigeria</p>
              <h2 className="mt-4 max-w-sm font-display text-2xl leading-snug md:text-3xl">
                Real Estate, Project Management &amp; Property Consultancy.
              </h2>
              <div className="mt-8">
                <WhatsAppButton message="Hi, I'd like to book a call with Bricks & Builders.">
                  Book a Call
                </WhatsAppButton>
              </div>
            </div>
            <p
              ref={introRef}
              className="max-w-xs text-sm leading-relaxed text-on-ink-muted md:text-right"
            >
              Welcome to Bricks &amp; Builders, where local insight, honest guidance, and
              full-lifecycle project delivery converge to help you invest with confidence across
              Abuja&rsquo;s highest-growth corridors.
            </p>
          </div>

          <div
            ref={scrollRef}
            className="mt-10 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.2em] text-on-ink-muted"
          >
            <span className="h-8 w-px animate-pulse bg-on-ink-muted" />
            Scroll
          </div>
        </div>
      </div>
    </section>
  );
}
