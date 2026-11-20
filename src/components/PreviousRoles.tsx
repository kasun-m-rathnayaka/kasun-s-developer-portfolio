"use client";

import { useId, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import type { Role } from "@/content/site";
import { RoleCard } from "./RoleCard";

/** "Previous roles (n)" toggle that expands the remaining roles with a height animation. */
export function PreviousRoles({ roles }: { roles: Role[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  if (roles.length === 0) return null;

  return (
    // reducedMotion="user" makes the height/opacity animation instant for users who ask.
    <MotionConfig reducedMotion="user">
      <div className="mt-3">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="group inline-flex cursor-pointer items-center gap-1.5 rounded-md py-1 text-sm text-muted transition-colors duration-150 hover:text-foreground"
        >
          Previous roles ({roles.length})
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className={`size-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m4 6 4 4 4-4" />
          </svg>
        </button>

        <div id={panelId}>
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="previous-roles"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <ul className="space-y-3 pt-3">
                  {roles.map((role) => (
                    <li key={`${role.role}-${role.company}`}>
                      <RoleCard role={role} />
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </MotionConfig>
  );
}
