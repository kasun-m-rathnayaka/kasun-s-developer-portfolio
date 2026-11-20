"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { coverSrc, type Project } from "@/content/site";

/**
 * Floating preview card for the project rows.
 *
 * Fixed, vertically centred, just right of the content column (the column is
 * max-w-xl = 18rem either side of centre). Pointer-events none, z-40, decorative
 * (aria-hidden: the same info lives on the case study page).
 *
 * A 280px card only fits beside the column on wide viewports, so it is hidden
 * below 1180px, and the gap to the column grows from 1rem to 3rem to 6rem.
 */
export function ProjectHoverCard({ project }: { project: Project | null }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-1/2 left-[calc(50%+18rem+1rem)] z-40 hidden w-[280px] -translate-y-1/2 min-[1180px]:block min-[1280px]:left-[calc(50%+18rem+3rem)] min-[1440px]:left-[calc(50%+18rem+6rem)]"
    >
      <AnimatePresence>
        {project && (
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="overflow-hidden rounded-xl border border-popover-border bg-popover shadow-xl shadow-black/20 backdrop-blur-md"
          >
            {/* Content swaps in place: both layers share one grid cell while crossfading. */}
            <div className="grid">
              <AnimatePresence initial={false}>
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="col-start-1 row-start-1"
                >
                  <div className="relative">
                    <Image
                      src={coverSrc(project.slug)}
                      alt=""
                      width={1200}
                      height={630}
                      sizes="280px"
                      className="aspect-[1200/630] w-full object-cover"
                    />
                    <span className="absolute top-2 right-2 flex size-7 items-center justify-center rounded-full border border-white/20 bg-black/50 font-mono text-[9px] font-medium text-white backdrop-blur-sm">
                      {project.badge}
                    </span>
                  </div>
                  <div className="p-3">
                    <p className="truncate text-xs font-medium">{project.title}</p>
                    <p className="mt-1 line-clamp-2 min-h-[2lh] text-[11px] leading-snug text-muted">
                      {project.hoverLine}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
