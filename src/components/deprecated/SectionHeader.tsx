export function SectionHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="mx-auto mb-10 md:mb-16 max-w-2xl text-center">
      {kicker && (
        <p className="mb-2 text-xs tracking-widest text-accent-600/80 uppercase">
          {kicker}
        </p>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-slate-100">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-slate-500 dark:text-slate-400">{subtitle}</p>
      )}
    </header>
  );
}
