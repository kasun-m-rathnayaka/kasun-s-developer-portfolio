import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return site.projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = site.projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return renderOg({
    title: project.title,
    subtitle: `${project.date} · ${project.stack.join(", ")}`,
    kicker: `Case study · ${site.profile.name}`,
  });
}
