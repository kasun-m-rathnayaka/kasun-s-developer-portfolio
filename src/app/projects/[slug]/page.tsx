import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { coverSrc, site } from "@/content/site";
import { getProject, loadCaseStudy } from "@/lib/case-study";

export const dynamicParams = false;

export function generateStaticParams() {
  return site.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | ${site.profile.name}`,
    description: project.hoverLine,
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const body = await loadCaseStudy(project);

  return (
    <>
      <main className="pt-12 sm:pt-16">
        <Link
          href="/#selected-projects"
          className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-150 hover:text-foreground"
        >
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-x-1"
          >
            ←
          </span>
          Back to projects
        </Link>

        <article className="mt-8">
          <header>
            <h1 className="text-xl font-medium tracking-tight">{project.title}</h1>
            <p className="mt-1 font-mono text-xs text-muted">
              <time dateTime={project.isoDate}>{project.date}</time>
            </p>
            <ul aria-label="Stack" className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border bg-card px-2.5 py-0.5 text-xs text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </header>

          {/* Placeholder cover until a real one replaces public/projects/<slug>/cover.png. */}
          <Image
            src={coverSrc(project.slug)}
            alt={`Cover image for ${project.title}`}
            width={1200}
            height={630}
            sizes="(min-width: 576px) 528px, 100vw"
            priority
            className="mt-8 aspect-[1200/630] w-full rounded-card border border-border object-cover"
          />

          <div className="mt-10">{body}</div>
        </article>
      </main>
      <Footer />
    </>
  );
}
