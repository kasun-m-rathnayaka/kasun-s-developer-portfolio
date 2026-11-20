import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Intro } from "@/components/Intro";
import { Work } from "@/components/Work";

// Sections 4–6 (projects, also built, beyond code) land in step 3.
export default function Home() {
  return (
    <>
      <main className="space-y-12 pt-12 sm:pt-16">
        <Intro />
        <Work />
        <About />
      </main>
      <Footer />
    </>
  );
}
