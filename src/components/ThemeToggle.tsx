"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

/** Toggles dark/light. Used by the nav button, the `L` shortcut and the palette. */
export function useToggleTheme() {
  const { resolvedTheme, setTheme } = useTheme();
  return () => setTheme(resolvedTheme === "dark" ? "light" : "dark");
}

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  return (
    target.isContentEditable ||
    ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
  );
}

export function ThemeToggle({ toggle }: { toggle: () => void }) {
  // Press `L` anywhere (outside text fields, without modifiers) to toggle the theme.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== "l" || e.repeat) return;
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey || e.defaultPrevented) return;
      if (isTypingTarget(e.target)) return;
      toggle();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [toggle]);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      aria-keyshortcuts="L"
      title="Toggle theme (L)"
      className="flex size-8 cursor-pointer items-center justify-center rounded-full text-muted transition-colors duration-150 hover:text-foreground"
    >
      {/* Both icons are rendered and swapped with the `dark` class, so there is no hydration mismatch. */}
      <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4 dark:hidden" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13.5 9.5A5.5 5.5 0 0 1 6.5 2.5a5.5 5.5 0 1 0 7 7Z" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 16 16" className="hidden size-4 dark:block" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="2.75" />
        <path d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1.05 1.05M11.55 11.55l1.05 1.05M3.4 12.6l1.05-1.05M11.55 4.45l1.05-1.05" />
      </svg>
    </button>
  );
}
