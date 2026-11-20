import type { MDXComponents } from "mdx/types";
import { SectionHeader } from "./SectionHeader";

/** Marks content Kasun still has to supply, so it is obvious on the page. */
function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 rounded-card border border-dashed border-border px-4 py-3 text-sm text-muted italic">
      {children}
    </p>
  );
}

// Case-study body styling. `##` headings (Problem / What I built / How / Outcome)
// reuse the small-caps section label with its divider.
export const mdxComponents: MDXComponents = {
  h2: ({ children }) => (
    <div className="mt-10 first:mt-0">
      <SectionHeader>{children}</SectionHeader>
    </div>
  ),
  p: ({ children }) => <p className="mt-3 text-sm leading-relaxed">{children}</p>,
  a: ({ children, href }) => (
    <a href={href} className="underline underline-offset-4 hover:text-muted">
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed">{children}</ul>
  ),
  code: ({ children }) => (
    <code className="rounded bg-card px-1 py-0.5 font-mono text-[0.85em]">{children}</code>
  ),
  Placeholder,
};
