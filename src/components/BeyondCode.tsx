import { site } from "@/content/site";
import { SectionHeader } from "./SectionHeader";

export function BeyondCode() {
  return (
    <section aria-labelledby="beyond-code">
      <SectionHeader id="beyond-code">Beyond code</SectionHeader>
      <ul className="mt-4 space-y-3">
        {site.beyondCode.map((item) => (
          <li key={item.title} className="flex items-baseline justify-between gap-4">
            <div className="min-w-0">
              <p className="text-sm">{item.title}</p>
              {item.org && <p className="text-xs text-muted">{item.org}</p>}
            </div>
            {/* A null date is "to fill in" (see site.ts): show a visible placeholder. */}
            <p
              className={`shrink-0 font-mono text-xs ${item.date ? "text-muted" : "text-muted italic"}`}
            >
              {item.date ?? "Date TBC"}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
