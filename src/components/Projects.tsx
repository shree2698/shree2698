"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { ExternalLink, Github, Code, Users, Calendar, ArrowRight, Zap, Database, Globe, Bot, Layout, ShieldCheck, Sparkles, FolderGit2 } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { BlurText } from "@/components/reactbits/BlurText";
import { DecryptedText } from "@/components/reactbits/DecryptedText";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { Magnet } from "@/components/reactbits/Magnet";
import { ShinyText } from "@/components/reactbits/ShinyText";
import { AnimatedContent } from "@/components/reactbits/AnimatedContent";

import crm from "@/assets/images/crm.jpg";
import mail from "@/assets/images/bullkmail.jpg";
import pms from "@/assets/images/pms.jpg";
import icar from "@/assets/images/icar.jpg";

interface Project {
  id: number;
  title: string;
  description: string;
  imgSrc: StaticImageData;
  category: string;
  technologies: string[];
  features: string[];
  status: "Completed" | "In Progress" | "Live";
  duration: string;
  teamSize: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project Architect",
    description: "Full-lifecycle SDLC governance and tech discovery skill for AI coding assistants (Antigravity, Cursor, Claude Code). Implements automatic technology discovery, 21-phase QA audits, architectural blueprints, and safe defect remediation.",
    imgSrc: crm,
    category: "AI & Developer Tooling",
    technologies: ["AI Agents", "TypeScript", "SDLC Governance", "Architecture", "MCP", "CLI Tooling"],
    features: ["Automated Stack Discovery", "21-Phase QA Matrix", "Defect Remediation", "Cross-Agent Protocol"],
    status: "Live",
    duration: "Open Source",
    teamSize: "Lead Architect",
    icon: Bot,
    color: "from-blue-500 to-indigo-600",
    demoUrl: "https://github.com/shree2698/project-architect",
    githubUrl: "https://github.com/shree2698/project-architect"
  },
  {
    id: 2,
    title: "QuickDesk AI Support",
    description: "AI-powered customer support and help desk platform with automated ticket routing, semantic search with RAG knowledge embeddings, multi-tenant dashboard, and real-time response analytics.",
    imgSrc: mail,
    category: "AI & SaaS Applications",
    technologies: ["Next.js", "React", "Node.js", "LangChain", "OpenAI", "PostgreSQL", "Prisma", "Tailwind CSS"],
    features: ["Autonomous AI Triage", "RAG Knowledge Base", "Multi-Tenant Workspaces", "Live Analytics"],
    status: "Live",
    duration: "Production",
    teamSize: "Full Stack Lead",
    icon: Sparkles,
    color: "from-purple-500 to-pink-600",
    demoUrl: "https://github.com/shree2698/QuickDesk",
    githubUrl: "https://github.com/shree2698/QuickDesk"
  },
  {
    id: 3,
    title: "OmniCRM Enterprise",
    description: "Full-featured Enterprise CRM platform with deal pipeline tracking, automated email dispatching, role-based access control (RBAC), and customer interaction logs.",
    imgSrc: pms,
    category: "Enterprise Web Apps",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Redis"],
    features: ["Interactive Kanban Pipeline", "Automated Email Sequences", "Granular RBAC", "Audit Trails"],
    status: "Live",
    duration: "Enterprise",
    teamSize: "Core Engineer",
    icon: Layout,
    color: "from-emerald-500 to-teal-600",
    demoUrl: "https://github.com/shree2698/crm-frontend",
    githubUrl: "https://github.com/shree2698/crm-frontend"
  },
  {
    id: 4,
    title: "ICAR Agricultural ERP",
    description: "Large-scale institutional ERP portal for agricultural research data collection, personnel directory, publication index, and secure reporting pipelines.",
    imgSrc: icar,
    category: "Full Stack & Microservices",
    technologies: ["React", "Next.js", "NestJS", "PostgreSQL", "Tailwind CSS", "Docker"],
    features: ["Institutional Data Capture", "Research Cataloging", "Export Engine (PDF/Excel)", "Fast Search"],
    status: "Completed",
    duration: "Enterprise",
    teamSize: "Frontend & API Dev",
    icon: Database,
    color: "from-amber-500 to-orange-600",
    demoUrl: "https://icar-ciwa.org.in/",
    githubUrl: "https://github.com/shree2698"
  }
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = project.icon;

  return (
    <div className="group relative">
      <SpotlightCard 
        className="overflow-hidden transition-all duration-300 hover:-translate-y-1"
        spotlightColor="rgba(88, 166, 255, 0.15)"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-20">
          <span className={`px-2.5 py-0.5 rounded-md text-xs font-semibold font-mono border ${
            project.status === 'Live' ? 'bg-emerald-500/10 text-[#3fb950] border-[#238636]' :
            project.status === 'In Progress' ? 'bg-amber-500/10 text-amber-400 border-amber-500/40' :
            'bg-blue-500/10 text-sky-400 border-sky-500/40'
          }`}>
            {project.status}
          </span>
        </div>

        <CardContent className="p-0">
          <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            {/* Image Section */}
            <div className="lg:w-1/2 relative overflow-hidden">
              <div className="relative h-64 lg:h-80">
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Floating Icon */}
                <div className="absolute top-4 left-4">
                  <div className={`w-12 h-12 rounded-md bg-gradient-to-br ${project.color} p-0.5 shadow-md`}>
                    <div className="w-full h-full bg-white dark:bg-[#161b22] rounded-sm flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                </div>

                {/* Project Number */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-5xl font-black text-white/30 font-mono">0{project.id}</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 p-5 lg:p-6 flex flex-col justify-center">
              <div className="mb-2">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider font-mono">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300 font-display">
                {project.title}
              </h3>

              <p className="text-sm text-foreground/80 leading-relaxed mb-4 font-sans">
                {project.description}
              </p>

              {/* Project Info */}
              <div className="grid grid-cols-2 gap-3 mb-4 text-xs font-mono">
                <div className="flex items-center gap-1.5 text-foreground/70">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 text-foreground/70">
                  <Users className="w-3.5 h-3.5 text-accent" />
                  <span>{project.teamSize}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-foreground/90 mb-2 flex items-center gap-1.5 font-display">
                  <Zap className="w-3.5 h-3.5 text-accent" />
                  Key Features
                </h4>
                <div className="grid grid-cols-2 gap-1.5 font-sans">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[#3fb950] rounded-sm" />
                      <span className="text-xs text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-5">
                <h4 className="text-xs font-semibold text-foreground/90 mb-2 flex items-center gap-1.5 font-display">
                  <Code className="w-3.5 h-3.5 text-accent" />
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5 font-mono">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 bg-slate-100 dark:bg-[#161b22] text-accent rounded-md text-xs font-medium border border-slate-300 dark:border-[#30363d] hover:bg-accent/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2.5 font-sans">
                {project.demoUrl && (
                  <Magnet magnetStrength={3} padding={20}>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#238636] hover:bg-[#2ea043] dark:bg-[#238636] dark:hover:bg-[#2ea043] border border-[#2ea043]/60 text-white rounded-md text-xs font-semibold hover:shadow-md transition-all duration-200"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <ShinyText text="Live Demo" speed={3} />
                    </a>
                  </Magnet>
                )}
                {project.githubUrl && (
                  <Magnet magnetStrength={3} padding={20}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 dark:bg-[#161b22] border border-slate-300 dark:border-[#30363d] text-foreground hover:border-accent hover:text-accent rounded-md text-xs font-semibold transition-all duration-200"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                  </Magnet>
                )}
                <button 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-1 px-3 py-2 text-accent hover:text-sky-400 transition-colors text-xs font-medium group cursor-pointer"
                >
                  Contact Me
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </SpotlightCard>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-12 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-cta/5" />
      <div className="absolute top-40 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-cta/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <AnimatedContent distance={25} direction="vertical" className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-[#161b22] border border-slate-300 dark:border-[#30363d] rounded-md mb-3 font-mono">
            <FolderGit2 className="w-4 h-4 text-accent" />
            <span className="text-xs font-medium text-foreground">
              <DecryptedText text="Engineering Portfolio" animateOn="hover" speed={30} />
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-display">
            Featured{" "}
            <BlurText 
              text="Projects" 
              className="bg-gradient-to-r from-accent to-cta bg-clip-text text-transparent"
              animateBy="words" 
              delay={60} 
            />
          </h2>
          <p className="text-sm md:text-base text-foreground/80 max-w-2xl mx-auto font-sans">
            Showcasing innovative solutions and cutting-edge technologies that solve real-world problems
          </p>
        </AnimatedContent>

        {/* Filter Tabs */}
        <AnimatedContent distance={20} direction="vertical" delay={100}>
          <div className="flex justify-center mb-8 font-mono">
            <div className="flex flex-wrap justify-center bg-slate-100 dark:bg-[#161b22] border border-slate-300 dark:border-[#30363d] rounded-md p-1 gap-1 max-w-full">
              {categories.map((category) => (
                <Magnet key={category} magnetStrength={4} padding={15}>
                  <button
                    onClick={() => setFilter(category)}
                    className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      filter === category
                        ? 'bg-[#238636] border border-[#2ea043] text-white shadow-sm'
                        : 'text-foreground/70 hover:text-accent hover:bg-slate-200 dark:hover:bg-[#21262d]'
                    }`}
                  >
                    {category}
                  </button>
                </Magnet>
              ))}
            </div>
          </div>
        </AnimatedContent>

        {/* Projects Grid */}
        <div className="space-y-6 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <AnimatedContent key={project.id} distance={35} direction="vertical" delay={index * 100}>
              <ProjectCard project={project} index={index} />
            </AnimatedContent>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedContent distance={30} direction="vertical" delay={250}>
          <div className="text-center mt-12">
            <SpotlightCard className="p-6 md:p-8 max-w-3xl mx-auto" spotlightColor="rgba(63, 185, 80, 0.15)">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 font-display">
                Ready to bring your ideas to life?
              </h3>
              <p className="text-sm text-foreground/80 mb-5 max-w-xl mx-auto font-sans">
                Let's collaborate on your next project and create something amazing together.
              </p>
              <button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-2.5 bg-[#238636] hover:bg-[#2ea043] dark:bg-[#238636] dark:hover:bg-[#2ea043] border border-[#2ea043]/60 text-white rounded-md font-semibold hover:shadow-md transition-all duration-200 cursor-pointer text-sm font-sans"
              >
                <ShinyText text="Start a Project" speed={3} />
              </button>
            </SpotlightCard>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}