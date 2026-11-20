# kasun.tech — build brief

Personal portfolio for Kasun Rathnayaka, software engineer at Creative Software (Colombo, Sri Lanka).
All site copy lives in `content/plan.md`. Read it before writing any UI. Never invent facts about Kasun:
where the plan says "TBC" or "to fill in", render a clear placeholder and leave a `// TODO(kasun)` comment.

The previous portfolio lives on the `legacy-portfolio` branch. Ignore it; do not copy code or assets from it.

## Stack

- Next.js (latest stable, App Router, TypeScript, `src/` dir), deployed on Vercel at kasun.tech
- Tailwind CSS
- `next-themes` — dark by default, light available
- `cmdk` — the ⌘K / Ctrl+K command palette
- `motion` (Framer Motion) — hover preview card and small layout animations only
- MDX for case studies (`@next/mdx` or `next-mdx-remote`, whichever fits the current Next.js version)
- `@vercel/analytics`
- Package manager: npm

Check the current docs for each library before using its API; versions move fast.

## Design direction

Inspired by the layout and restraint of prateekkeshari.com. Build an original implementation: do not copy its
code, copy, images, logo or exact fonts.

- One centred column, `max-w-xl` (~576px), `p-4 sm:p-6`, generous vertical rhythm. No hero image, no grid.
- Dark default: warm near-black background (around `#1A1818`), white text, muted text at ~60% white,
  borders at ~10% white. Light theme is the same layout with inverted tokens.
- Typography: a clean sans (Inter or Geist) for body; small-caps style section labels (WORK, WHAT I DO,
  SELECTED PROJECTS…) with a thin divider line filling the rest of the row; a script font only for the
  footer signature "kasun"; monospace for tiny footer text.
- Cards: subtle 1px border, slightly lighter fill, ~12px radius. No heavy shadows except the hover card.
- Motion is quiet: 150–200ms transitions; respect `prefers-reduced-motion`.
- Accessibility: semantic headings, visible focus rings, keyboard reachable everything, AA contrast in both themes.

## Page structure

`/` (single scrolling page), in this order:

0. **Floating nav** — pill-shaped, blurred, bordered: Home · Projects · ⌘K button · theme toggle. Press `L` toggles theme.
1. **Intro** — round photo (`public/images/kasun.jpg`, placeholder until Kasun adds it), the intro sentence, "Say hello" mailto link.
2. **Work** — current role card; "Previous roles (n)" toggle that expands the rest with a height animation.
3. **What I do** — bio paragraph in a bordered card, then one muted stack line.
4. **Selected projects** — the 6 projects as rows with the hover effect (spec below); each links to its case study.
5. **Also built** — compact list of smaller projects.
6. **Beyond code** — education, awards, leadership as a compact list.
7. **Footer** — GitHub, LinkedIn, Email, CV links; script signature "kasun"; `© {year}` in monospace.

Other routes:
- `/projects/[slug]` — case study per project: title, date, stack chips, Problem / What I built / How / Outcome, cover image, back link.
- `/cv` — redirects to `public/Kasun_Rathnayaka_CV.pdf` (placeholder until Kasun adds the updated PDF).
- 404 page in the same style.

## Project row hover effect (must match this behaviour)

1. **Arrow nudge** — each row is a Tailwind `group` link: title left, arrow icon right. Arrow is ~60% opacity and
   gets `transition-transform duration-200 group-hover:translate-x-1` (4px slide).
2. **Floating preview card** — on hover (pointer devices only, `@media (hover: hover)`), a 280px card fades in:
   `position: fixed`, vertically centred in the viewport, placed just right of the content column
   (`left: 50%` plus a left margin so it clears the ~576px column: ~16px on small, ~48px on md, ~96px on lg),
   `pointer-events: none`, `z-40`. Animate with `AnimatePresence` (opacity 0→1, small y/scale offset, ~150ms).
   Only one card visible at a time; switching rows swaps content smoothly.
3. **Card contents** — cover image (`public/projects/<slug>/cover.png`, 1200×630) on top; below it a 12px medium
   title and an 11px two-line-clamped description (the project's "hover line"); a small round logo/badge in the top
   right corner. Card styling: background at ~90% opacity with `backdrop-blur`, 1px border at ~12% white,
   rounded-xl, soft shadow.
4. **Touch / small screens** — no card; tapping the row opens the case study. Hide the card below the `lg`
   breakpoint if it would overlap the column.

Until real covers exist, generate simple stylised placeholder covers per project (title + gradient or abstract
UI shapes). Never use real screenshots of Accure products that could show client data.

## Command palette (⌘K / Ctrl+K)

Built with `cmdk`, opened from the nav button or the shortcut, closes on Esc. Groups and commands:

| Group | Command | Behaviour |
| --- | --- | --- |
| Appearance | Switch theme | Toggle dark/light (also `L`) |
| Navigate | Go to project… | One item per project → its case study |
| Navigate | Download CV | Opens `/cv` |
| Contact | Copy email | Copies the address, shows a small toast |
| Contact | Open GitHub / Open LinkedIn | External links in new tab |
| Tools | Time in Colombo | Shows current Asia/Colombo time and "probably awake / asleep" |
| Tools | Calculate | If the query looks like maths (e.g. `2+2`, `34% of 567`), show the result inline; evaluate safely, never with `eval` |

Leave a commented stub for a future "ESP32 status" command.

## Code organisation

- `src/content/site.ts` — typed data for everything on the home page (profile, roles, projects, also-built,
  beyond-code, links). Components read from here; editing copy must never require touching components.
- `src/content/projects/<slug>.mdx` — case-study bodies, with frontmatter matching the project entry.
- `src/components/` — `Nav`, `SectionHeader`, `RoleCard`, `PreviousRoles`, `ProjectList`, `ProjectHoverCard`,
  `CommandPalette`, `ThemeToggle`, `Footer`, `Signature`.
- Metadata: title "Kasun Rathnayaka", description from the plan, Open Graph + Twitter `summary_large_image`,
  generated OG image via `next/og`, `metadataBase` = `https://kasun.tech`, sitemap and robots routes.

## Build order (one PR-sized step each)

1. Scaffold: Next.js + Tailwind + theme tokens + fonts + base layout + `site.ts` with all content.
2. Home page sections 1–3 and the footer.
3. Projects list with the full hover effect, plus Also built and Beyond code.
4. Case study pages from MDX + placeholder covers.
5. Command palette and keyboard shortcuts.
6. Metadata, OG image, sitemap, 404, analytics, Lighthouse pass (aim ≥ 95 on all four).

## Rules

- Run `npm run lint` and `npm run build` before every commit; fix all errors.
- Check every page in both themes and at 375px and 1440px widths.
- Never commit secrets. `.env*` is git-ignored; use Vercel environment variables if any are ever needed.
- Keep dependencies minimal; ask before adding anything not listed above.
