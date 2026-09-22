"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;

    if (typeof IntersectionObserver === "undefined") {
      // No IntersectionObserver support — never hide content in the first place.
      return;
    }

    root.classList.add("js-reveal-ready");

    const targets = document.querySelectorAll(".reveal-up:not(.is-visible)");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    // Safety net: if anything goes wrong and a target never intersects
    // (e.g. it's already off-screen in a weird layout), force it visible
    // after a few seconds rather than leaving it hidden forever.
    const fallback = window.setTimeout(() => {
      targets.forEach((el) => el.classList.add("is-visible"));
    }, 4000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}
