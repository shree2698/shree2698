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

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        animationDelay: `${index * 150}ms`,
        animation: `fadeInUp 0.6s ease-out both`
      }}
    >
      <Card className="relative h-full bg-background border border-border hover:border-accent/50 transition-all duration-500 overflow-hidden group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-accent/10">
        
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-cta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating Elements */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-accent/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-cta/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 delay-200" />

        <CardContent className="relative p-6 flex flex-col items-center justify-center text-center space-y-4">
          
          {/* Icon Container */}
          <div className="relative group/icon">
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-cta rounded-2xl blur-lg opacity-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500" />
            <div className="relative p-4 bg-gradient-to-br from-accent to-cta rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
              <skill.icon className="w-8 h-8 text-white drop-shadow-sm" />
            </div>
          </div>

          {/* Skill Name */}
          <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
            {skill.name}
          </h3>

          {/* Category Badge */}
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-accent/10 text-accent border border-accent/20 rounded-full">
            {skill.category}
          </span>

          {/* Description - appears on hover */}
          <div className={`transition-all duration-300 overflow-hidden ${
            isHovered ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <p className="text-xs text-foreground/70 leading-relaxed px-2">
              {skill.description}
            </p>
          </div>

          {/* Proficiency Bar */}
          <div className="w-full space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-foreground/60">Proficiency</span>
              <span className="text-xs font-medium text-accent">{skill.proficiency}%</span>
            </div>
            <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-accent to-cta rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: isHovered ? `${skill.proficiency}%` : '0%',
                  transitionDelay: '200ms'
                }}
              />
            </div>
          </div>

        </CardContent>

        <CardFooter className="pt-0 pb-4 px-6">
          <div className="w-full flex justify-center">
            <div className={`w-8 h-0.5 bg-gradient-to-r from-accent to-cta rounded-full transition-all duration-500 ${
              isHovered ? 'scale-x-100' : 'scale-x-0'
            }`} />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

const SkillsGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", "Frontend", "Backend", "Databases", "AI & Tools"];

  const filteredSkills = selectedCategory === "All"
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  return (
    <section className="relative py-20 bg-background overflow-hidden" id="skills">
      
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-cta/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(14,165,233,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.5)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
            <Layers className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground/80">Technical Expertise</span>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Tech Stack &{' '}
              <span className="bg-gradient-to-r from-accent to-cta bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Full-Stack development, modern databases, and state-of-the-art AI Agent architecture
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-accent to-cta text-white shadow-md shadow-accent/20 scale-105"
                    : "bg-background/80 border border-border text-foreground/70 hover:bg-accent/10 hover:border-accent/30 hover:text-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent/10 to-cta/10 border border-accent/20 rounded-full hover:from-accent/20 hover:to-cta/20 transition-all duration-300 cursor-pointer group">
            <Code2 className="w-5 h-5 text-accent group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-foreground/80 group-hover:text-accent transition-colors duration-300 font-medium">
              Always Learning, Always Growing
            </span>
            <div className="w-2 h-2 bg-cta rounded-full animate-pulse" />
          </div>
          
          <p className="text-sm text-foreground/60 max-w-md mx-auto">
            Passionate about clean architecture, scalable backends, and agentic AI systems
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;