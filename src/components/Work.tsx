import { site } from "@/content/site";
import { PreviousRoles } from "./PreviousRoles";
import { RoleCard } from "./RoleCard";
import { SectionHeader } from "./SectionHeader";

export function Work() {
  const [current, ...previous] = site.roles;
  return (
    <section aria-labelledby="work">
      <SectionHeader id="work">Work</SectionHeader>
      <div className="mt-4">
        <RoleCard role={current} />
        <PreviousRoles roles={previous} />
      </div>
    </section>
  );
}
