import { About } from "@/components/About";
import { AlsoBuilt } from "@/components/AlsoBuilt";
import { BeyondCode } from "@/components/BeyondCode";
import { Footer } from "@/components/Footer";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
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
