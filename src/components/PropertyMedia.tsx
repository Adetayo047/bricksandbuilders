import Image from "next/image";
import PlaceholderImage from "@/components/PlaceholderImage";
import type { Property } from "@/lib/properties";

/** Card/tile image: prefers the clean cardImage crop, falls back to the abstract placeholder. Never shows the busy full flyer — use flyer directly for that. */
export default function PropertyMedia({
  property,
  className = "",
}: {
  property: Pick<Property, "cardImage" | "cardImageIsStock" | "placeholderTone" | "heroTag" | "name">;
  className?: string;
}) {
  if (property.cardImage) {
    const hasOwnPosition = /\b(absolute|fixed|sticky)\b/.test(className);
    return (
      <div
        className={`${hasOwnPosition ? "" : "relative"} overflow-hidden bg-ink ${className}`}
      >
        <Image
          src={property.cardImage}
          alt={property.name}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
        {property.cardImageIsStock && (
          <span className="absolute bottom-3 left-3 bg-ink/70 px-2 py-1 text-[9px] uppercase tracking-[0.12em] text-on-ink-muted">
            Illustrative Photo
          </span>
        )}
      </div>
    );
  }

  return (
    <PlaceholderImage
      tone={property.placeholderTone}
      label={property.heroTag}
      className={className}
    />
  );
}
