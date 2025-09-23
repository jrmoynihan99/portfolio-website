export function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-slate-700 dark:text-slate-200">
          {name}
        </span>
        <span className="text-slate-500">{level}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-slate-200/60 dark:bg-slate-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent-400 to-accent-600 transition-[width] duration-700"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
