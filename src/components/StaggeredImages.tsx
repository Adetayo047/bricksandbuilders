import PropertyMedia from "@/components/PropertyMedia";
import type { Property } from "@/lib/properties";

type Media = Pick<Property, "cardImage" | "placeholderTone" | "heroTag" | "name">;

export default function StaggeredImages({ back, front }: { back: Media; front: Media }) {
  return (
    <div className="reveal-up relative aspect-[4/3] w-full">
      <PropertyMedia property={back} className="absolute inset-0 h-full w-full" />
      <PropertyMedia
        property={front}
        className="absolute -bottom-10 -left-10 aspect-[4/3] w-2/3 border-4 border-paper shadow-xl"
      />
    </div>
  );
}
