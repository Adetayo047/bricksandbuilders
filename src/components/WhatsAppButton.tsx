import { whatsappLink } from "@/lib/site";

export default function WhatsAppButton({
  message,
  children = "Send us a DM",
  variant = "solid",
  className = "",
}: {
  message: string;
  children?: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-3 px-7 py-4 text-xs uppercase tracking-[0.14em] transition-all group";
  const styles =
    variant === "solid"
      ? "bg-gold text-ink hover:bg-gold-bright"
      : "border hairline-on-ink text-on-ink hover:border-gold hover:text-gold";

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <span>{children}</span>
      <span aria-hidden className="transition-transform group-hover:translate-x-1">
        »
      </span>
    </a>
  );
}
