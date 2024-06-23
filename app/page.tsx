import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Tech from "@/components/Tech";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Contact/>
    </main>
  );
}
