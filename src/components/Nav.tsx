"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useRef, useState, useSyncExternalStore } from "react";
import { MotionConfig } from "motion/react";
import { CommandPalette } from "./CommandPalette";
import { ThemeToggle, useToggleTheme } from "./ThemeToggle";
import { Toast } from "./Toast";

// Server snapshot is "⌘" so hydration matches; the client then corrects it on other platforms.
const subscribe = () => () => {};
const modKey = () => (/Mac|iPhone|iPad/.test(navigator.userAgent) ? "⌘" : "Ctrl");

const linkClass = (active: boolean) =>
  `rounded-full px-3 py-1.5 text-sm transition-colors duration-150 hover:text-foreground ${
    active ? "text-foreground" : "text-muted"
  }`;

export function Nav() {
  const pathname = usePathname();
  const mod = useSyncExternalStore(subscribe, modKey, () => "⌘");
  const toggleTheme = useToggleTheme();
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const lastFocus = useRef<HTMLElement | null>(null);

  // Remember what had focus when the palette opens and give it back when it closes,
  // so keyboard users land where they were (the dialog's own restore is unreliable here).
  const changePalette = useCallback((next: boolean) => {
    if (next) {
      lastFocus.current = document.activeElement as HTMLElement | null;
    } else {
      const target = lastFocus.current;
      requestAnimationFrame(() => {
        if (target && target !== document.body && target.isConnected) target.focus();
      });
    }
    setPaletteOpen(next);
  }, []);

  const notify = useCallback((message: string) => {
    clearTimeout(timer.current);
    setToast(message);
    timer.current = setTimeout(() => setToast(null), 2200);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <nav
        aria-label="Primary"
        className="fixed top-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-0.5 rounded-full border border-border bg-background/70 p-1 shadow-sm backdrop-blur-md"
      >
        <Link href="/" aria-current={pathname === "/" ? "page" : undefined} className={linkClass(pathname === "/")}>
          Home
        </Link>
        <Link
          href="/#selected-projects"
          aria-current={pathname.startsWith("/projects") ? "page" : undefined}
          className={linkClass(pathname.startsWith("/projects"))}
        >
          Projects
        </Link>
        <button
          type="button"
          onClick={() => changePalette(true)}
          aria-label="Open command palette"
          aria-keyshortcuts="Control+K Meta+K"
          className="flex cursor-pointer items-center gap-1.5 rounded-full px-2.5 py-1.5 text-muted transition-colors duration-150 hover:text-foreground"
        >
          <kbd className="font-mono text-xs">{mod} K</kbd>
        </button>
        <ThemeToggle toggle={toggleTheme} />
      </nav>

      <CommandPalette
        open={paletteOpen}
        onOpenChange={changePalette}
        toggleTheme={toggleTheme}
        notify={notify}
      />
      <Toast message={toast} />
    </MotionConfig>
  );
}
