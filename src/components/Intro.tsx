import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { site } from "@/content/site";

/** Round photo, or an initials placeholder until Kasun adds public/images/kasun.jpg. */
function Photo() {
  const { photo, name } = site.profile;
  // TODO(kasun): add the photo at public/images/kasun.jpg; the placeholder disappears automatically.
  const exists = fs.existsSync(path.join(process.cwd(), "public", photo));

  if (!exists) {
    return (
      <div
        role="img"
        aria-label="Photo placeholder"
        className="flex size-20 items-center justify-center rounded-full border border-border bg-card font-mono text-sm text-muted"
      >
        {name
          .split(" ")
          .map((w) => w[0])
          .join("")}
      </div>
    );
  }
  return (
    <Image
      src={photo}
      alt={`Portrait of ${name}`}
      width={160}
      height={160}
      loading="eager"
      fetchPriority="high"
      className="size-20 rounded-full border border-border object-cover"
    />
  );
}

export function Intro() {
  const { intro, profile } = site;
  return (
    <section aria-label="Intro">
      <Photo />
      <h1 className="mt-6 text-xl font-medium tracking-tight">{intro.greeting}</h1>
      <p className="mt-2 leading-relaxed text-muted">{intro.body}</p>
      <a
        href={`mailto:${profile.email}`}
        className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline"
      >
        {intro.cta}
        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      </a>
    </section>
  );
}
