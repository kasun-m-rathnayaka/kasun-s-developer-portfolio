"use client";

import { AnimatePresence, motion } from "motion/react";

/** Small bottom-centre toast. Polite live region so screen readers announce it. */
export function Toast({ message }: { message: string | null }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-6 z-[60] flex justify-center px-4"
    >
      <AnimatePresence>
        {message && (
          <motion.p
            key={message}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="rounded-full border border-popover-border bg-popover px-4 py-2 text-sm shadow-lg backdrop-blur-md"
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
