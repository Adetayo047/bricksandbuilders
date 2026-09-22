import Image from "next/image";

/** Shared hero banner for inner pages — aerial land photo background with a
 * dark gradient for legibility, matching the treatment used on property
 * detail pages. Keeps every page's top banner visually consistent instead
 * of a plain flat black section. */
export default function PageHero({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-ink text-on-ink">
      <Image
        src="/hero/hero-aerial-land.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/55" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">{children}</div>
    </section>
  );
}
