import { site } from "@/content/site";
import { Signature } from "./Signature";

const linkClass =
  "text-sm text-muted underline-offset-4 transition-colors duration-150 hover:text-foreground hover:underline";

export function Footer() {
  const { profile, footer } = site;
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border pt-8">
      {footer.availability && (
        <p className="mb-6 text-sm text-muted">{footer.availability}</p>
      )}
      <nav aria-label="Links">
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
              LinkedIn
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} className={linkClass}>
              Email
            </a>
          </li>
          <li>
            {/* /cv redirects to the PDF; the route is added in a later step. */}
            <a href={profile.cv} className={linkClass}>
              CV
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-8 flex items-end justify-between gap-4">
        <Signature>kasun</Signature>
        <p className="font-mono text-[11px] text-muted">© {year}</p>
      </div>
    </footer>
  );
}
