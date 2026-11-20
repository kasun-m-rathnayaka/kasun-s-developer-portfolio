import type { Role } from "@/content/site";

export function RoleCard({ role }: { role: Role }) {
  return (
    <article className="rounded-card border border-border bg-card p-4">
      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="text-sm font-medium">{role.role}</h3>
        <p className="shrink-0 font-mono text-xs text-muted">{role.dates}</p>
      </div>
      <p className="mt-0.5 text-sm text-muted">{role.company}</p>
      <p className="mt-3 text-sm leading-relaxed">{role.summary}</p>
    </article>
  );
}
