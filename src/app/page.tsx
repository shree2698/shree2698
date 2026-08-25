import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/ExperienceCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SkillsGrid from "@/components/SkillGrid";
import GitHubStats from "@/components/GitHubStats";
import { CurvedLoop } from "@/components/reactbits/CurvedLoop";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <main className="w-full">
        <Hero />
        <div className="py-2 opacity-80 hover:opacity-100 transition-opacity">
          <CurvedLoop
            text="NEXT.JS • REACT • AGENTIC AI • TYPESCRIPT • FULL STACK • MCP • PYTHON • "
            speed={1.2}
            className="fill-accent font-mono text-xs tracking-widest uppercase font-semibold"
          />
        </div>
        <About />
        <SkillsGrid />
        <Experience />
        <Projects />
        <GitHubStats />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
