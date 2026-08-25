"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Code, Users, Zap } from "lucide-react";

type ExperienceItem = {
  title: string;
  company: string;
  description: string;
  date: string;
  location: string;
  skills: string[];
  highlights: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: "Junior Software Development Engineer",
    company: "Jnine Infotech",
    description: `Developing and maintaining scalable web applications using modern MERN stack technologies. Leading frontend optimization initiatives and collaborating with cross-functional teams to deliver exceptional user experiences.`,
    date: "Jan 2024 - Present",
    location: "On-site",
    skills: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
    highlights: ["Enhanced app performance by 40%", "Led UI/UX improvements", "Mentored junior developers"]
  },
  {
    title: "Junior Software Engineer",
    company: "Technoboot Pvt Ltd",
    description: `Built robust web applications and implemented agile development practices. Collaborated with senior developers on complex projects while maintaining high code quality standards.`,
    date: "Jul 2023 - Dec 2024",
    location: "On-site",
    skills: ["React", "Node.js", "JavaScript", "Git", "Agile"],
    highlights: ["Reduced bug reports by 30%", "Implemented CI/CD pipeline", "Contributed to 5+ major releases"]
  },
  {
    title: "Associate Software Engineer",
    company: "Technoboot Pvt Ltd",
    description: `Focused on feature development and performance optimization. Conducted thorough code reviews and provided technical support to ensure delivery of high-quality software solutions.`,
    date: "Mar 2023 - Jun 2023",
    location: "On-site",
    skills: ["JavaScript", "React", "API Integration", "Testing"],
    highlights: ["Optimized database queries", "Improved code coverage to 85%", "Streamlined debugging process"]
  },
  {
    title: "Software Development Intern",
    company: "Quantumware Pvt Ltd",
    description: `Gained hands-on experience in full-stack development while contributing to real-world projects. Collaborated with experienced developers to learn industry best practices.`,
    date: "Mar 2022 - Jun 2022",
    location: "On-site",
    skills: ["MERN Stack", "Git", "Problem Solving"],
    highlights: ["Completed 3 projects successfully", "Learned agile methodology", "Received excellence award"]
  },
];

function ExperienceCardItem({ experience, index }: { experience: ExperienceItem; index: number }) {
  return (
    <Card className="group relative overflow-hidden border border-slate-300 dark:border-[#30363d] rounded-md bg-slate-50 dark:bg-[#0d1117] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent">
      <CardContent className="relative p-5">
        {/* Header */}
        <div className="flex items-start gap-3.5 mb-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-md bg-gradient-to-br from-accent to-cta p-2 shadow-md">
              <div className="w-full h-full bg-white dark:bg-[#161b22] rounded-sm flex items-center justify-center">
                <Code className="w-5 h-5 text-accent" />
              </div>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#3fb950] rounded-full animate-pulse" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground mb-0.5 group-hover:text-accent transition-colors font-display">
              {experience.title}
            </h3>
            <p className="text-accent font-semibold text-sm font-sans">{experience.company}</p>
            
            <div className="flex items-center gap-3 mt-1.5 text-xs text-foreground/70 font-mono">
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{experience.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-foreground/80 leading-relaxed mb-4 font-sans">
          {experience.description}
        </p>

        {/* Highlights */}
        <div className="mb-4 font-sans">
          <h4 className="text-xs font-semibold text-foreground/90 mb-2 flex items-center gap-1.5 font-display">
            <Zap className="w-3.5 h-3.5 text-accent" />
            Key Achievements
          </h4>
          <div className="space-y-1">
            {experience.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-2 font-sans">
                <div className="w-1.5 h-1.5 bg-[#3fb950] rounded-sm" />
                <span className="text-xs text-foreground/80">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h4 className="text-xs font-semibold text-foreground/90 mb-2 flex items-center gap-1.5 font-display">
            <Users className="w-3.5 h-3.5 text-accent" />
            Technologies
          </h4>
          <div className="flex flex-wrap gap-1.5 font-mono">
            {experience.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 bg-slate-100 dark:bg-[#161b22] text-accent rounded-md text-xs font-medium border border-slate-300 dark:border-[#30363d] hover:bg-accent/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Connecting line for timeline effect */}
        {index < experiences.length - 1 && (
          <div className="absolute left-10 bottom-0 w-0.5 h-6 bg-gradient-to-b from-accent to-transparent" />
        )}
      </CardContent>
    </Card>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-12 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-cta/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cta/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-display">
              Professional{" "}
              <span className="bg-gradient-to-r from-accent to-cta bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-accent to-cta rounded-full w-20 mx-auto" />
          </div>
          <p className="text-sm md:text-base text-foreground/80 mt-3 max-w-2xl mx-auto font-sans">
            Crafting digital experiences and building scalable solutions with modern technologies
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <ExperienceCardItem experience={exp} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="text-center p-4 bg-slate-50 dark:bg-[#0d1117] border border-slate-300 dark:border-[#30363d] rounded-md">
            <div className="text-2xl font-bold text-accent mb-1 font-display">2.5+</div>
            <div className="text-xs text-foreground/70 font-mono">Years Experience</div>
          </div>
          <div className="text-center p-4 bg-slate-50 dark:bg-[#0d1117] border border-slate-300 dark:border-[#30363d] rounded-md">
            <div className="text-2xl font-bold text-[#3fb950] mb-1 font-display">15+</div>
            <div className="text-xs text-foreground/70 font-mono">Projects Completed</div>
          </div>
          <div className="text-center p-4 bg-slate-50 dark:bg-[#0d1117] border border-slate-300 dark:border-[#30363d] rounded-md">
            <div className="text-2xl font-bold text-sky-400 mb-1 font-display">10+</div>
            <div className="text-xs text-foreground/70 font-mono">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </section>
  );
}