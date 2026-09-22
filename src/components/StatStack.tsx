export default function StatStack({
  stats,
  tone = "ink",
}: {
  stats: { label: string; value: string }[];
  tone?: "ink" | "paper";
}) {
  const textColor = tone === "ink" ? "text-on-ink" : "text-on-paper";
  const mutedColor = tone === "ink" ? "text-on-ink-muted" : "text-on-paper-muted";

  return (
    <ul className="space-y-6">
      {stats.map((stat) => (
        <li key={stat.label}>
          <p className={`font-display text-2xl ${textColor}`}>{stat.value}</p>
          <p className={`text-[11px] uppercase tracking-[0.14em] ${mutedColor}`}>{stat.label}</p>
        </li>
      ))}
    </ul>
  );
}
