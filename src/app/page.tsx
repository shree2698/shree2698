import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/ExperienceCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SkillsGrid from "@/components/SkillGrid";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <main className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <SkillsGrid />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
