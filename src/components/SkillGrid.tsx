"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  Globe, 
  Layers, 
  Palette, 
  Zap, 
  FileCode, 
  Cpu,
  Server,
  Wrench,
  Bot,
  Container,
  GitBranch,
  Terminal,
  Sparkles
} from "lucide-react";

import { BlurText } from "@/components/reactbits/BlurText";
import { DecryptedText } from "@/components/reactbits/DecryptedText";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { Magnet } from "@/components/reactbits/Magnet";
import { AnimatedContent } from "@/components/reactbits/AnimatedContent";

type Skill = {
  name: string;
  category: "Frontend" | "Backend" | "Databases" | "AI & Tools";
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  proficiency: number;
};

const skills: Skill[] = [
  // Frontend
  { 
    name: "React.js", 
    category: "Frontend", 
    icon: Code2, 
    description: "Component-driven architecture, custom hooks, state management",
    proficiency: 95
  },
  { 
    name: "Next.js", 
    category: "Frontend", 
    icon: Globe, 
    description: "App router, SSR, SSG, Server Actions, Edge optimization",
    proficiency: 92
  },
  { 
    name: "TypeScript", 
    category: "Frontend", 
    icon: FileCode, 
    description: "Strict static typing, interfaces, generics, enterprise DX",
    proficiency: 90
  },
  { 
    name: "Tailwind CSS", 
    category: "Frontend", 
    icon: Palette, 
    description: "Modern responsive utility-first CSS, dark mode design",
    proficiency: 95
  },
  { 
    name: "JavaScript (ES6+)", 
    category: "Frontend", 
    icon: Zap, 
    description: "Asynchronous patterns, modern DOM APIs, closures",
    proficiency: 92
  },

  // Backend
  { 
    name: "Node.js", 
    category: "Backend", 
    icon: Server, 
    description: "High-throughput asynchronous event-driven backend services",
    proficiency: 90
  },
  { 
    name: "Express.js", 
    category: "Backend", 
    icon: Globe, 
    description: "RESTful routing, middleware pipelines, microservices",
    proficiency: 90
  },
  { 
    name: "NestJS", 
    category: "Backend", 
    icon: Cpu, 
    description: "Modular enterprise architecture, dependency injection, decorators",
    proficiency: 82
  },

  // Databases & ORM
  { 
    name: "MongoDB", 
    category: "Databases", 
    icon: Database, 
    description: "Document aggregation pipelines, indexing, Mongoose schemas",
    proficiency: 88
  },
  { 
    name: "PostgreSQL", 
    category: "Databases", 
    icon: Database, 
    description: "Relational modeling, complex queries, transactions",
    proficiency: 85
  },
  { 
    name: "Prisma ORM", 
    category: "Databases", 
    icon: Layers, 
    description: "Type-safe database queries, schema migrations, relations",
    proficiency: 88
  },
  { 
    name: "MySQL", 
    category: "Databases", 
    icon: Database, 
    description: "Relational database design, ACID compliance, query tuning",
    proficiency: 82
  },

  // AI & DevOps
  { 
    name: "Agentic AI & MCP", 
    category: "AI & Tools", 
    icon: Bot, 
    description: "Custom AI Agent skills, Model Context Protocol, tool leasing",
    proficiency: 90
  },
  { 
    name: "LangChain & RAG", 
    category: "AI & Tools", 
    icon: Sparkles, 
    description: "Context retrieval augmentation, vector search, prompt chains",
    proficiency: 84
  },
  { 
    name: "Docker", 
    category: "AI & Tools", 
    icon: Container, 
    description: "Containerization, multi-stage Dockerfiles, compose environments",
    proficiency: 80
  },
  { 
    name: "Git & GitHub", 
    category: "AI & Tools", 
    icon: GitBranch, 
    description: "Version control workflows, CI/CD actions, open source",
    proficiency: 94
  },
];

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SpotlightCard 
      className="relative h-full transition-all duration-300 group-hover:-translate-y-1 group cursor-pointer"
      spotlightColor="rgba(88, 166, 255, 0.18)"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="relative p-4 flex flex-col items-center justify-center text-center space-y-3">
        {/* Icon Container */}
        <div className="relative group/icon">
          <div className="relative p-3 bg-gradient-to-br from-accent to-cta rounded-md group-hover:scale-105 transition-all duration-300 shadow-md">
            <skill.icon className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Skill Name */}
        <h3 className="text-base font-bold text-foreground group-hover:text-accent transition-colors duration-300 font-display">
          {skill.name}
        </h3>

        {/* Category Badge */}
        <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-slate-100 dark:bg-[#161b22] text-accent border border-slate-300 dark:border-[#30363d] rounded-md font-mono">
          {skill.category}
        </span>

        {/* Description - appears on hover */}
        <div className={`transition-all duration-300 overflow-hidden ${
          isHovered ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <p className="text-xs text-foreground/80 leading-relaxed px-1 font-sans">
            {skill.description}
          </p>
        </div>

        {/* Proficiency Bar */}
        <div className="w-full space-y-1.5 font-mono">
          <div className="flex justify-between items-center">
            <span className="text-[11px] text-foreground/70">Proficiency</span>
            <span className="text-[11px] font-medium text-accent">{skill.proficiency}%</span>
          </div>
          <div className="w-full h-1 bg-slate-200 dark:bg-[#30363d] rounded-sm overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-accent to-cta rounded-sm transition-all duration-700 ease-out"
              style={{ 
                width: isHovered ? `${skill.proficiency}%` : '0%',
                transitionDelay: '100ms'
              }}
            />
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0 pb-3 px-4">
        <div className="w-full flex justify-center">
          <div className={`w-6 h-0.5 bg-gradient-to-r from-accent to-cta rounded-sm transition-all duration-300 ${
            isHovered ? 'scale-x-100' : 'scale-x-0'
          }`} />
        </div>
      </CardFooter>
    </SpotlightCard>
  );
};

const SkillsGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", "Frontend", "Backend", "Databases", "AI & Tools"];

  const filteredSkills = selectedCategory === "All"
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  return (
    <section className="relative py-12 bg-background overflow-hidden" id="skills">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-cta/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedContent distance={25} direction="vertical" className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-[#161b22] border border-slate-300 dark:border-[#30363d] rounded-md font-mono">
            <Layers className="w-4 h-4 text-accent" />
            <span className="text-xs font-medium text-foreground">
              <DecryptedText text="Technical Expertise" animateOn="hover" speed={30} />
            </span>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">
              Tech Stack &{' '}
              <BlurText 
                text="Skills" 
                className="bg-gradient-to-r from-accent to-cta bg-clip-text text-transparent"
                animateBy="words" 
                delay={60} 
              />
            </h2>
            
            <p className="text-sm md:text-base text-foreground/80 max-w-2xl mx-auto leading-relaxed font-sans">
              Full-Stack development, modern databases, and state-of-the-art AI Agent architecture
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4 font-mono">
            {categories.map((category) => (
              <Magnet key={category} magnetStrength={4} padding={20}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    selectedCategory === category
                      ? "bg-[#238636] border border-[#2ea043] text-white shadow-sm scale-105"
                      : "bg-slate-100 dark:bg-[#161b22] border border-slate-300 dark:border-[#30363d] text-foreground/80 hover:border-accent hover:text-accent"
                  }`}
                >
                  {category}
                </button>
              </Magnet>
            ))}
          </div>
        </AnimatedContent>

        {/* Skills Grid */}
        <AnimatedContent distance={30} direction="vertical" delay={150}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {filteredSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </AnimatedContent>

        {/* Bottom Section */}
        <AnimatedContent distance={20} direction="vertical" delay={250} className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-[#161b22] border border-slate-300 dark:border-[#30363d] rounded-md hover:border-accent transition-all duration-300 cursor-pointer group font-mono">
            <Code2 className="w-4 h-4 text-accent group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xs text-foreground/80 group-hover:text-accent transition-colors duration-300 font-medium">
              Always Learning, Always Growing
            </span>
            <div className="w-1.5 h-1.5 bg-[#3fb950] rounded-full animate-pulse" />
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default SkillsGrid;