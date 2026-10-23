import GradientBg from "@/components/GradientBg";
import Hero from "@/components/Hero";
import FloatingNavbar from "@/components/FloatingNavbar";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { projects } from "@/data/portfolio";

export default function Home() {
  return (
    <GradientBg>
      <FloatingNavbar />
      <main>
        <Hero />
        <About />
        <Projects projects={projects} />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </GradientBg>
  );
}
