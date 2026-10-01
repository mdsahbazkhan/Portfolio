import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { AIEngineering } from "@/components/sections/AIEngineering";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { StructuredData } from "@/components/SEO/StructuredData";
import { VisualEnvironment } from "@/components/sections/VisualEnvironment";

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <VisualEnvironment />
      <main>
        <Hero />
        <About />
        <Projects />
        <AIEngineering />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
