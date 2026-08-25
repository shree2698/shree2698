import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/ExperienceCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SkillsGrid from "@/components/SkillGrid";
import GitHubStats from "@/components/GitHubStats";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <main className="w-full max-w-7xl px-3 sm:px-4 lg:px-6">
        <Hero />
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
