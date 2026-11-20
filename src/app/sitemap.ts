import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.profile.url;
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    ...site.projects.map((project) => ({
      url: `${base}/projects/${project.slug}`,
      lastModified: project.isoDate,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
