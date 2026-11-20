"use client";

import { useState } from "react";

/**
 * Small bottom-centre toast: CSS-only fade (no animation library on every page).
 * Polite live region so screen readers announce it.
 */
export function Toast({ message }: { message: string | null }) {
  // Keep the last message so the text doesn't vanish while the toast fades out.
  const [last, setLast] = useState(message ?? "");
  if (message && message !== last) setLast(message);

  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-6 z-[60] flex justify-center px-4"
    >
      <p
        aria-hidden={!message}
        className={`rounded-full border border-popover-border bg-popover px-4 py-2 text-sm shadow-lg backdrop-blur-md transition duration-150 ease-out ${
          message ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        {last}
      </p>
    </div>
  );
}
