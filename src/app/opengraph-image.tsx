import { site } from "@/content/site";
import { ogSize, renderOg } from "@/lib/og";

export const alt = `${site.profile.name}, ${site.profile.title}`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    title: site.profile.name,
    subtitle: `${site.profile.title} · ${site.profile.location}`,
    kicker: "Portfolio",
  });
}
