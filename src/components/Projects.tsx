"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { ExternalLink, Github, Code, Users, Calendar, ArrowRight, Zap, Database, Globe, Bot, Layout, ShieldCheck, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    category: "AI & SaaS Platforms",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "AI Embeddings", "TailwindCSS"],
    features: ["Automated Ticket Triage", "RAG Knowledge Search", "Real-time Metrics", "Multi-tenant Architecture"],
    status: "Completed",
    duration: "4 months",
    teamSize: "Full Stack Lead",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    demoUrl: "https://github.com/shree2698/quickdesk",
    githubUrl: "https://github.com/shree2698/quickdesk"
  },
  {
    id: 3,
    title: "LifeSync Productivity Suite",
    description: "Comprehensive personal productivity and wellness suite unifying habit tracking, financial budget analytics, dynamic calendar reminders, and automated daily routines into an intuitive interface.",
    imgSrc: pms,
    category: "Full Stack Applications",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    features: ["Habit Tracking", "Budget Analytics", "Daily Routine Planner", "Interactive Visualizations"],
    status: "Completed",
    duration: "3 months",
    teamSize: "Independent Developer",
    icon: Layout,
    color: "from-emerald-500 to-teal-500",
    demoUrl: "https://github.com/shree2698/LifeSync",
    githubUrl: "https://github.com/shree2698/LifeSync"
  },
  {
    id: 4,
    title: "Souree Tech Agency Portal",
    description: "Modern digital transformation agency portal showcasing enterprise AI solutions, interactive case studies, responsive micro-animations, and fast edge-optimized static rendering.",
    imgSrc: icar,
    category: "Web & Digital Experience",
    technologies: ["Next.js", "TailwindCSS", "Framer Motion", "TypeScript", "Vercel"],
    features: ["Edge Rendering", "Interactive Animations", "Enterprise Showcase", "SEO Optimized"],
    status: "Live",
    duration: "2 months",
    teamSize: "Frontend Specialist",
    icon: Globe,
    color: "from-amber-500 to-orange-500",
    demoUrl: "https://tanushree-portfolio-five.vercel.app",
    githubUrl: "https://github.com/shree2698"
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = project.icon;

  return (
    <div className="group relative">
      <Card 
        className="overflow-hidden border-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 hover:shadow-2xl transition-all duration-700 hover:-translate-y-3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Status Badge */}
        <div className="absolute top-6 right-6 z-20">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            project.status === 'Live' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200' :
            project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
            'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
          }`}>
            {project.status}
          </span>
        </div>

        <CardContent className="p-0">
          <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            {/* Image Section */}
            <div className="lg:w-1/2 relative overflow-hidden">
              <div className="relative h-80 lg:h-96">
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Floating Icon */}
                <div className="absolute top-6 left-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} p-1 shadow-xl`}>
                    <div className="w-full h-full bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-slate-700 dark:text-slate-300" />
                    </div>
                  </div>
                </div>

                {/* Project Number */}
                <div className="absolute bottom-6 left-6">
                  <span className="text-6xl font-black text-white/20">0{project.id}</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-4">
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Project Info */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <Calendar className="w-4 h-4" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <Users className="w-4 h-4" />
                  <span>{project.teamSize}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Key Features
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium border border-accent/20 hover:bg-accent/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent to-cta text-white rounded-xl text-sm font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Globe className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-accent text-accent rounded-xl text-sm font-semibold hover:bg-accent hover:text-white transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
                <button 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-accent hover:text-cta transition-colors text-sm font-medium group cursor-pointer"
                >
                  Contact Me
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
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
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-cta/5" />
      <div className="absolute top-40 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-cta/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-accent to-cta bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-accent to-cta rounded-full w-24 mx-auto" />
          </div>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mt-6 max-w-3xl mx-auto">
            Showcasing innovative solutions and cutting-edge technologies that solve real-world problems
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center bg-slate-100 dark:bg-slate-800 rounded-2xl p-1.5 gap-1 max-w-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  filter === category
                    ? 'bg-gradient-to-r from-accent to-cta text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-accent/10 to-cta/10 rounded-3xl p-8 md:p-12 border border-accent/20">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to bring your ideas to life?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project and create something amazing together.
            </p>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-gradient-to-r from-accent to-cta text-white rounded-2xl font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}