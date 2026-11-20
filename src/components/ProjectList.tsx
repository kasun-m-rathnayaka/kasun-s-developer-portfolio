"use client";

import Link from "next/link";
import { useState } from "react";
import { MotionConfig } from "motion/react";
import type { Project } from "@/content/site";
import { ProjectHoverCard } from "./ProjectHoverCard";

// Only pointer devices get the preview card; touch just taps through to the case study.
const canHover = () =>
  typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

export function ProjectList({ projects }: { projects: Project[] }) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const active = projects.find((p) => p.slug === activeSlug) ?? null;

  const show = (slug: string) => {
    if (canHover()) setActiveSlug(slug);
  };

  return (
    <MotionConfig reducedMotion="user">
      <ul
        className="-mx-3"
        // Clear on leaving the whole list (not each row) so moving between rows swaps content
        // instead of hiding and re-showing the card.
        onPointerLeave={() => setActiveSlug(null)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setActiveSlug(null);
        }}
      >
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              onPointerEnter={() => show(project.slug)}
              onFocus={() => show(project.slug)}
              className="group flex items-center justify-between gap-4 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-card focus-visible:bg-card"
            >
              <span className="text-sm">{project.title}</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="size-4 shrink-0 opacity-60 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
      <ProjectHoverCard project={active} />
    </MotionConfig>
  );
}
