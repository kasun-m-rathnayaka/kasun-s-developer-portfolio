import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Tech from "@/components/Tech";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { WobbleCard } from "@/components/ui/WobbleCard";
import Works from "@/components/Works";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main>
      <FloatingNav navItems={navItems} />
      <Hero/>
      <About/>
      <Experience/>
      <RecentProjects/>
      <Tech/>
      <Works/>
      <Contact/>
    </main>
  );
}
