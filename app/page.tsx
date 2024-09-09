import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MyApproach from "@/components/MyApproach";
import RecentProjects from "@/components/RecentProjects";
import BackwordEmblaCarousel from "@/components/ui/BackwordCarousal";
import EmblaCarousel from "@/components/ui/Carousal";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true}

export default function Home() {
  return (
    <main>
      <FloatingNav navItems={navItems} />
      <Hero/>
      <About/>
      <Experience/>
      <RecentProjects/>
      <EmblaCarousel options={OPTIONS} />
      <BackwordEmblaCarousel options={OPTIONS}/>
      <MyApproach/>
      <Footer/>
    </main>
  );
}
