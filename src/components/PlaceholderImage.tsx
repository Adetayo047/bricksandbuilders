const TONES = {
  ink: {
    bg: "bg-[radial-gradient(circle_at_30%_20%,_#2a2318_0%,_#0b0a08_70%)]",
    line: "stroke-[color:var(--color-gold)]/40",
    text: "text-[color:var(--color-on-ink-muted)]",
  },
  gold: {
    bg: "bg-[radial-gradient(circle_at_70%_30%,_#3a2c12_0%,_#0b0a08_75%)]",
    line: "stroke-[color:var(--color-gold-bright)]/50",
    text: "text-[color:var(--color-on-ink-muted)]",
  },
  paper: {
    bg: "bg-[radial-gradient(circle_at_40%_30%,_#ece3d0_0%,_#dcd0b3_80%)]",
    line: "stroke-[color:var(--color-on-paper)]/25",
    text: "text-[color:var(--color-on-paper-muted)]",
  },
} as const;

export default function PlaceholderImage({
  tone = "ink",
  label,
  className = "",
}: {
  tone?: keyof typeof TONES;
  label?: string;
  className?: string;
}) {
  const t = TONES[tone];
  return (
    <div className={`relative overflow-hidden ${t.bg} ${className}`}>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g className={t.line} strokeWidth="1">
          <path d="M40 260 L40 140 L110 90 L180 140 L180 260" />
          <path d="M180 260 L180 110 L260 60 L340 110 L340 260" />
          <line x1="0" y1="260" x2="400" y2="260" />
          <path d="M95 260 V170 H125 V260" />
          <path d="M245 260 V150 H275 V260" />
        </g>
      </svg>
      {label && (
        <span
          className={`absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.18em] ${t.text}`}
        >
          {label}
        </span>
      )}
    </div>
  );
}
