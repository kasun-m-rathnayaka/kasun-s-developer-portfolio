import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Tech from "@/components/Tech";
import EmblaCarousel from "@/components/TechLogos";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Works from "@/components/Works";
import { navItems } from "@/data";
import {EmblaOptionsType} from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  return (
    <main>
      <FloatingNav navItems={navItems} />
      <Hero/>
      <About/>
      <Experience/>
      <RecentProjects/>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <Tech/>
      <Works/>
      <Contact/>
    </main>
  );
}
