import { site } from "@/content/site";
import { SectionHeader } from "./SectionHeader";

export function AlsoBuilt() {
  return (
    <section aria-labelledby="also-built">
      <SectionHeader id="also-built">Also built</SectionHeader>
      <ul className="mt-4 space-y-3">
        {site.alsoBuilt.map((item) => (
          <li key={item.name} className="flex items-baseline justify-between gap-4">
            <div className="min-w-0">
              <p className="text-sm">{item.name}</p>
              <p className="text-xs text-muted">{item.note}</p>
            </div>
            {item.date && (
              <p className="shrink-0 font-mono text-xs text-muted">{item.date}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
