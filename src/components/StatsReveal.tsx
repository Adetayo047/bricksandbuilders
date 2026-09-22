"use client";

import { useRef } from "react";
import { useGsapScrollTrigger } from "@/lib/gsap-scroll";

type Stat = { value: string; unit?: string; label: string };

const POSITIONS = [
  "md:col-start-2 md:col-span-1 md:justify-self-start",
  "md:col-start-3 md:col-span-1 md:justify-self-start md:mt-8",
  "md:col-start-1 md:col-span-1 md:row-start-2 md:-mt-4",
  "md:col-start-2 md:col-span-2 md:row-start-3 md:mt-10",
];

/** Splits "520+" into { digits: "520", suffix: "+" }, "06" into { digits: "06", suffix: "" }. */
function splitValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { digits: value, suffix: "", numeric: null as number | null };
  return { digits: match[1], suffix: match[2], numeric: parseInt(match[1], 10) };
}

export default function StatsReveal({ stats }: { stats: [Stat, Stat, Stat, Stat] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGsapScrollTrigger((gsap, ScrollTrigger) => {
    const section = sectionRef.current;
    const items = itemRefs.current.filter((el): el is HTMLDivElement => Boolean(el));
    if (!section || items.length === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.set(items, { opacity: 0, y: 50 });

    const parsed = stats.map((s) => splitValue(s.value));
    numberRefs.current.forEach((el, i) => {
      if (el && parsed[i].numeric !== null) el.textContent = "0".padStart(parsed[i].digits.length, "0");
    });

    // Created inside gsap.context() (see useGsapScrollTrigger), so this
    // ScrollTrigger and every tween below are auto-killed/reverted on
    // cleanup — no manual tracking or teardown needed here.
    ScrollTrigger.create({
      trigger: section,
      start: "top 75%",
      once: true,
      onEnter: () => {
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.18,
        });

        parsed.forEach((p, i) => {
          const el = numberRefs.current[i];
          if (!el || p.numeric === null) return;
          const proxy = { val: 0 };
          gsap.to(proxy, {
            val: p.numeric,
            duration: 1.4,
            delay: i * 0.18,
            ease: "power2.out",
            onUpdate: () => {
              if (!el.isConnected) return;
              el.textContent = Math.round(proxy.val).toString().padStart(p.digits.length, "0");
            },
          });
        });
      },
    });
  }, [stats]);

  return (
    <section ref={sectionRef} className="bg-ink text-on-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 md:grid-cols-3 md:gap-x-10 md:gap-y-0">
          {stats.map((stat, i) => {
            const { digits, suffix } = splitValue(stat.value);
            return (
              <div
                key={stat.label}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className={POSITIONS[i] ?? ""}
              >
                <p className="flex items-baseline gap-2 font-display text-7xl leading-none md:text-8xl lg:text-9xl">
                  <span
                    ref={(el) => {
                      numberRefs.current[i] = el;
                    }}
                  >
                    {digits}
                  </span>
                  {suffix}
                  {stat.unit && (
                    <span className="font-sans text-2xl italic text-on-ink-muted">
                      {stat.unit}
                    </span>
                  )}
                </p>
                <p className="mt-5 max-w-[16ch] text-sm text-on-ink-muted">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
