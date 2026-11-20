import { About } from "@/components/About";
import { AlsoBuilt } from "@/components/AlsoBuilt";
import { BeyondCode } from "@/components/BeyondCode";
import { Footer } from "@/components/Footer";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";
import { Work } from "@/components/Work";
import { site } from "@/content/site";

const { profile } = site;

// Facts only from the content plan. `<` is escaped so the JSON can never close the script tag.
const personJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Software Engineer",
  worksFor: { "@type": "Organization", name: "Creative Software" },
  url: profile.url,
  sameAs: [profile.github, profile.linkedin],
  address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
}).replace(/</g, "\\u003c");

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: personJsonLd }}
      />
      <main className="space-y-12 pt-12 sm:pt-16">
        <Intro />
        <Work />
        <About />
        <Projects />
        <AlsoBuilt />
        <BeyondCode />
      </main>
      <Footer />
    </>
  );
}
