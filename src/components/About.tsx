import { site } from "@/content/site";
import { SectionHeader } from "./SectionHeader";

export function About() {
  const { bio, stack } = site.about;
  return (
    <section aria-labelledby="what-i-do">
      <SectionHeader id="what-i-do">What I do</SectionHeader>
      <div className="mt-4 rounded-card border border-border bg-card p-4">
        <p className="text-sm leading-relaxed">{bio}</p>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-muted">{stack.join(" · ")}</p>
    </section>
  );
}
