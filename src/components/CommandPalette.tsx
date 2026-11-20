"use client";

import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { calculate, formatResult } from "@/lib/calc";
import { colomboTime } from "@/lib/colombo";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  toggleTheme: () => void;
  notify: (message: string) => void;
};

const GROUPS = ["Appearance", "Navigate", "Contact", "Tools"] as const;

type Cmd = {
  id: string;
  group: (typeof GROUPS)[number];
  label: React.ReactNode;
  /** Text matched against the query. */
  value: string;
  keywords?: string[];
  hint?: React.ReactNode;
  run: () => void;
};

const itemClass =
  "flex cursor-pointer items-center justify-between gap-4 rounded-lg px-3 py-2 text-sm text-muted outline-none data-[selected=true]:bg-card-hover data-[selected=true]:text-foreground";

const groupClass =
  "px-1 py-1 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.14em] [&_[cmdk-group-heading]]:text-muted";

/**
 * Relevance of a command to the query (0 = hide). Strict instead of cmdk's fuzzy matcher:
 * with ~15 commands, scattered-letter matches outrank the exact command and Enter then
 * does the wrong thing. Every word typed must appear in the value or keywords;
 * whole-value-start and word-start matches rank higher.
 */
function score(value: string, search: string, keywords: string[] = []) {
  const haystack = value.toLowerCase();
  const extra = keywords.join(" ").toLowerCase();
  const words = search.toLowerCase().split(/\s+/).filter(Boolean);
  if (words.length === 0) return 1;

  let total = 0;
  for (const word of words) {
    if (haystack.startsWith(word)) total += 4;
    else if (haystack.includes(` ${word}`)) total += 3;
    else if (haystack.includes(word)) total += 2;
    else if (extra.includes(word)) total += 1;
    else return 0;
  }
  return total / words.length;
}

/** Live Colombo time. Mounted only while the palette is open, so it starts fresh each time. */
function ColomboClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 15_000);
    return () => clearInterval(id);
  }, []);
  const { time, label } = colomboTime(now);
  return (
    <span className="font-mono text-xs">
      {time} · {label}
    </span>
  );
}

export function CommandPalette({ open, onOpenChange, toggleTheme, notify }: Props) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleOpenChange = (next: boolean) => {
    if (!next) setQuery("");
    onOpenChange(next);
  };

  const copy = async (text: string, message: string) => {
    try {
      await navigator.clipboard.writeText(text);
      notify(message);
    } catch {
      notify("Couldn't copy to the clipboard");
    }
  };

  const openExternal = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

  const commands: Cmd[] = [
    {
      id: "theme",
      group: "Appearance",
      label: "Switch theme",
      value: "switch theme dark light",
      keywords: ["appearance", "mode"],
      hint: <kbd className="font-mono text-xs">L</kbd>,
      run: toggleTheme,
    },
    ...site.projects.map(
      (project): Cmd => ({
        id: `project-${project.slug}`,
        group: "Navigate",
        label: `Go to ${project.title}`,
        value: `go to project ${project.title}`,
        keywords: project.stack,
        hint: <span className="text-xs">{project.date}</span>,
        run: () => router.push(`/projects/${project.slug}`),
      }),
    ),
    {
      id: "cv",
      group: "Navigate",
      label: "Download CV",
      value: "download cv resume",
      run: () => window.open(site.profile.cv, "_blank", "noopener"),
    },
    {
      id: "email",
      group: "Contact",
      label: "Copy email",
      value: "copy email",
      keywords: ["address", "mail"],
      run: () => copy(site.profile.email, "Email copied"),
    },
    {
      id: "github",
      group: "Contact",
      label: "Open GitHub",
      value: "open github",
      run: () => openExternal(site.profile.github),
    },
    {
      id: "linkedin",
      group: "Contact",
      label: "Open LinkedIn",
      value: "open linkedin",
      run: () => openExternal(site.profile.linkedin),
    },
    {
      id: "colombo",
      group: "Tools",
      label: "Time in Colombo",
      value: "time in colombo",
      keywords: ["clock", "timezone", "awake", "asleep"],
      hint: open ? <ColomboClock /> : null,
      run: () => {
        const { time, label } = colomboTime();
        notify(`${time} in Colombo · ${label}`);
      },
    },
    // Future: "ESP32 status" command.
    // {
    //   id: "esp32",
    //   group: "Tools",
    //   label: "ESP32 status",
    //   value: "esp32 status",
    //   run: () => { /* fetch the status, then notify(...) */ },
    // },
  ];

  // "Calculate": when the query is maths, show the result inline, ranked above everything else.
  const calcResult = calculate(query);
  if (calcResult !== null) {
    const text = formatResult(calcResult);
    commands.push({
      id: "calculate",
      group: "Tools",
      label: <span className="font-mono text-xs">{query.trim()} =</span>,
      value: query,
      hint: <span className="font-mono text-sm text-foreground">{text}</span>,
      run: () => copy(text, `Copied ${text}`),
    });
  }

  // Filter and rank here (cmdk's own filtering is off) so the best match is always
  // first and therefore selected. Groups follow the order of their best item.
  const ranked = commands
    .map((cmd, order) => ({
      cmd,
      order,
      score: cmd.id === "calculate" ? Infinity : score(cmd.value, query, cmd.keywords),
    }))
    .filter((x) => x.score > 0);

  const bestOf = (group: string) =>
    Math.max(...ranked.filter((x) => x.cmd.group === group).map((x) => x.score));

  const groups = GROUPS.map((group, i) => ({ group, i, best: bestOf(group) }))
    .filter((g) => g.best > 0)
    .sort((a, b) => b.best - a.best || a.i - b.i);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={handleOpenChange}
      label="Command palette"
      shouldFilter={false}
      loop
      overlayClassName="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm"
      contentClassName="fixed top-[18vh] left-1/2 z-[80] w-[min(92vw,34rem)] -translate-x-1/2 overflow-hidden rounded-xl border border-popover-border bg-popover text-foreground shadow-2xl shadow-black/30 backdrop-blur-md"
    >
      <Command.Input
        value={query}
        onValueChange={setQuery}
        placeholder="Type a command or try 34% of 567…"
        className="w-full border-b border-border bg-transparent px-4 py-3.5 text-sm outline-none placeholder:text-muted"
      />
      <Command.List className="max-h-[min(24rem,60vh)] overflow-y-auto p-1.5">
        <Command.Empty className="px-3 py-6 text-center text-sm text-muted">
          No results.
        </Command.Empty>

        {groups.map(({ group }) => (
          <Command.Group key={group} heading={group} className={groupClass}>
            {ranked
              .filter((x) => x.cmd.group === group)
              .sort((a, b) => b.score - a.score || a.order - b.order)
              .map(({ cmd }) => (
                <Command.Item
                  key={cmd.id}
                  value={cmd.id}
                  onSelect={() => {
                    // Close first, then act, so focus returns to the page.
                    handleOpenChange(false);
                    cmd.run();
                  }}
                  className={itemClass}
                >
                  {cmd.label}
                  {cmd.hint}
                </Command.Item>
              ))}
          </Command.Group>
        ))}
      </Command.List>
    </Command.Dialog>
  );
}
