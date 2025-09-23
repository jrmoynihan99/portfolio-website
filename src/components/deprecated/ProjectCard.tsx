import GlassCard from "./GlassCard";

export function ProjectCard({
  title,
  description,
  tech,
  link,
}: {
  title: string;
  description: string;
  tech: string[];
  link: string;
}) {
  return (
    <GlassCard className="p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
          {title}
        </h3>
        <a
          href={link}
          className="inline-flex items-center gap-2 rounded-full border border-glass-border/30 px-3 py-1.5 text-sm text-accent-600 hover:bg-accent-500/10"
        >
          View →
        </a>
      </div>
      <p className="mt-3 text-slate-600 dark:text-slate-300">{description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <li
            key={t}
            className="rounded-full bg-slate-500/10 px-2.5 py-1 text-xs text-slate-600 dark:text-slate-300"
          >
            {t}
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}
