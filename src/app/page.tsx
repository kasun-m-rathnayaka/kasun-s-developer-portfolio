import { site } from "@/content/site";

// Scaffold placeholder. The real sections land in build steps 2–3.
export default function Home() {
  const { profile, intro } = site;
  return (
    <main className="py-16">
      <h1 className="text-lg font-medium">{profile.name}</h1>
      <p className="mt-1 text-sm text-muted">{profile.title}</p>
      <p className="mt-6 text-sm leading-relaxed text-muted">
        <span className="text-foreground">{intro.greeting}</span> {intro.body}
      </p>
    </main>
  );
}
