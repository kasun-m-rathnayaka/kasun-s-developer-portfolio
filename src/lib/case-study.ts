import fs from "node:fs/promises";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx";
import { site, type Project } from "@/content/site";

type Frontmatter = { title: string; date: string; stack: string[] };

export function getProject(slug: string): Project | undefined {
  return site.projects.find((p) => p.slug === slug);
}

/**
 * Compiles src/content/projects/<slug>.mdx. The frontmatter must match the
 * project entry in site.ts (which stays the source of truth for the UI), so a
 * drifting copy fails the build instead of silently showing two versions.
 */
export async function loadCaseStudy(project: Project) {
  const file = path.join(process.cwd(), "src/content/projects", `${project.slug}.mdx`);
  const source = await fs.readFile(file, "utf8");

  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source,
    components: mdxComponents,
    options: { parseFrontmatter: true },
  });

  const mismatches: string[] = [];
  if (frontmatter.title !== project.title) mismatches.push("title");
  if (frontmatter.date !== project.date) mismatches.push("date");
  if (JSON.stringify(frontmatter.stack) !== JSON.stringify(project.stack)) mismatches.push("stack");
  if (mismatches.length) {
    throw new Error(
      `${project.slug}.mdx frontmatter differs from site.ts (${mismatches.join(", ")}). Update one to match the other.`,
    );
  }

  return content;
}
