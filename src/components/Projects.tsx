import { site } from "@/content/site";
import { ProjectList } from "./ProjectList";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  return (
    <section aria-labelledby="selected-projects">
      <SectionHeader id="selected-projects">Selected projects</SectionHeader>
      <div className="mt-3">
        <ProjectList projects={site.projects} />
      </div>
    </section>
  );
}
