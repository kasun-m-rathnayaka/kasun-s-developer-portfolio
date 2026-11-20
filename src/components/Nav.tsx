"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ThemeToggle, useToggleTheme } from "./ThemeToggle";
import { Toast } from "./Toast";

// cmdk + its dialog are only needed once the palette is used, so keep them out of the initial bundle.
const loadPalette = () => import("./CommandPalette").then((m) => m.CommandPalette);
const CommandPalette = dynamic(loadPalette, { ssr: false });

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
  const [paletteWanted, setPaletteWanted] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const lastFocus = useRef<HTMLElement | null>(null);

  // Remember what had focus when the palette opens and give it back when it closes,
  // so keyboard users land where they were (the dialog's own restore is unreliable here).
  const changePalette = useCallback((next: boolean) => {
    if (next) {
      lastFocus.current = document.activeElement as HTMLElement | null;
      setPaletteWanted(true);
    } else {
      const target = lastFocus.current;
      requestAnimationFrame(() => {
        if (target && target !== document.body && target.isConnected) target.focus();
      });
    }
    setPaletteOpen(next);
  }, []);

  // ⌘K / Ctrl+K lives here, not in the lazy palette, so it works before the chunk has loaded.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        changePalette(!paletteOpen);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [paletteOpen, changePalette]);

  // Warm the chunk once the page is idle, so first open is instant without costing initial load.
  useEffect(() => {
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 2500));
    idle(() => void loadPalette());
  }, []);

  const notify = useCallback((message: string) => {
    clearTimeout(timer.current);
    setToast(message);
    timer.current = setTimeout(() => setToast(null), 2200);
  }, []);

  return (
    <>
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
          aria-keyshortcuts="Control+K Meta+K"
          className="flex cursor-pointer items-center gap-1.5 rounded-full px-2.5 py-1.5 text-muted transition-colors duration-150 hover:text-foreground"
        >
          {/* The shortcut is a visual hint; the accessible name is the action. */}
          <span className="sr-only">Open command palette</span>
          <kbd aria-hidden="true" className="font-mono text-xs whitespace-nowrap">
            {mod} K
          </kbd>
        </button>
        <ThemeToggle toggle={toggleTheme} />
      </nav>

      {paletteWanted && (
        <CommandPalette
          open={paletteOpen}
          onOpenChange={changePalette}
          toggleTheme={toggleTheme}
          notify={notify}
        />
      )}
      <Toast message={toast} />
    </>
  );
}
