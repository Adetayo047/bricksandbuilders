"use client";

import { useEffect, type DependencyList } from "react";
import type { gsap as GsapType } from "gsap";
import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";

type Setup = (gsap: typeof GsapType, ScrollTrigger: typeof ScrollTriggerType) => void;

/**
 * Loads gsap + ScrollTrigger client-side and runs `setup` inside a gsap.context().
 * Guards against React Strict Mode's double effect-invocation in dev: if the
 * effect is torn down before the dynamic import resolves, the setup never runs.
 *
 * Cleanup uses ctx.revert() rather than manually killing individual
 * tweens/ScrollTriggers. This matters specifically for ScrollTriggers with
 * `pin: true` (see FeaturedReveal): GSAP restructures the DOM to implement
 * pinning (wrapping the pinned element in a pin-spacer), and only revert()
 * is guaranteed to undo that restructuring synchronously before React
 * continues unmounting. Killing tweens by hand and leaving the pin-spacer in
 * place causes React to later try to remove a node that GSAP already moved/
 * unwrapped, throwing "Failed to execute 'removeChild': the node to be
 * removed is not a child of this node" on navigation away from the page.
 */
export function useGsapScrollTrigger(setup: Setup, deps: DependencyList = []) {
  useEffect(() => {
    let cancelled = false;
    let ctx: ReturnType<(typeof GsapType)["context"]> | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => setup(gsap, ScrollTrigger));
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
