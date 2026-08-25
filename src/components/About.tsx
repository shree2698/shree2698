"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import absrc from "@/assets/images/vector.jpg";
import { 
  Code2, 
  Database, 
  Globe, 
  Users, 
  Award, 
  Calendar,
  Target,
  Lightbulb,
  ArrowRight,
  CheckCircle
} from "lucide-react";

interface Stat {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Skill {
  name: string;
  category: string;
}

const About: React.FC = () => {

  const stats: Stat[] = [
    { value: "2.5+", label: "Years Experience", icon: Calendar },
    { value: "15+", label: "Projects Completed", icon: Target },
    { value: "10+", label: "Technologies", icon: Code2 },
    { value: "98%", label: "Client Satisfaction", icon: Award }
  ];

  const skills: Skill[] = [
    { name: "MongoDB", category: "Database" },
    { name: "Express.js", category: "Backend" },
    { name: "React.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "GraphQL", category: "API" },
    { name: "REST APIs", category: "API" },
    { name: "TypeScript", category: "Language" },
    { name: "Next.js", category: "Framework" }
  ];

  const values: string[] = [
    "Clean, maintainable code architecture",
    "Agile development methodologies",
    "Cross-functional team collaboration",
    "Continuous learning and innovation",
    "User-centric design approach",
    "Performance optimization focus"
  ];

  const handleContactScroll = (): void => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative py-12 bg-background text-foreground overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-cta/5" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cta/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-md mb-3 font-mono">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-xs font-medium text-foreground/80">Get to know me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-display">
            About <span className="bg-gradient-to-r from-accent to-cta bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-base text-foreground/70 max-w-2xl mx-auto font-sans">
            Passionate full-stack developer crafting innovative solutions with modern technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            {/* Story */}
            <div className="space-y-4 font-sans">
              <div className="p-4 bg-background/50 backdrop-blur-sm border border-border rounded-md">
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 bg-accent/10 rounded-md">
                    <Code2 className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1 font-display">Full-Stack & Next.js Engineering</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed font-sans">
                      With <span className="text-accent font-semibold font-mono">2.5+ years</span> of professional engineering experience, 
                      I build scalable web applications and high-performance microservices using <span className="text-cta font-semibold">React, Next.js, TypeScript, Node.js, and NestJS</span>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-background/50 backdrop-blur-sm border border-border rounded-md">
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 bg-cta/10 rounded-md">
                    <Globe className="w-4 h-4 text-cta" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1 font-display">Agentic AI, MCP & LLM Pipelines</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed font-sans">
                      Pioneering modern AI systems, I build <span className="text-accent font-semibold">AI Agent skills, Model Context Protocol (MCP) servers</span>, and RAG architectures that automate complex workflows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-background/50 backdrop-blur-sm border border-border rounded-md">
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 bg-accent/10 rounded-md">
                    <Lightbulb className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1 font-display">Industry Experience & Clean Architecture</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed font-sans">
                      Working as a Software Developer at <strong>Jnine Infotech</strong> in Bhubaneswar, India, I focus on test-driven development, database optimization (PostgreSQL, MongoDB, Prisma), and modern developer tooling.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2 font-display">
                <Target className="w-4 h-4 text-accent" />
                Core Values & Approach
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2.5 bg-background/30 rounded-md border border-border/50 hover:bg-accent/5 transition-colors font-sans"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                    <span className="text-xs text-foreground/80">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Button
              onClick={handleContactScroll}
              className="group bg-gradient-to-r from-accent to-cta hover:from-accent/90 hover:to-cta/90 text-white shadow-md hover:shadow-lg transition-all duration-300 px-5 py-2.5 rounded-md cursor-pointer text-sm font-semibold font-sans"
            >
              Let's Work Together
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Image & Stats Section */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative">
              <div className="relative aspect-square max-w-sm mx-auto">
                {/* Decorative Elements */}
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-cta/20 rounded-full blur-xl animate-pulse delay-700" />
                
                {/* Image Container */}
                <div className="relative w-full h-full rounded-md overflow-hidden bg-gradient-to-br from-accent/10 to-cta/10 backdrop-blur-sm border border-border/20 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent z-10" />
                  <Image
                    src={absrc}
                    alt="About Tanushree Mahato - Software Developer"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Tech Icons */}
                  <div className="absolute top-3 right-3 z-20 p-2 bg-background/80 backdrop-blur-sm rounded-md border border-border/30">
                    <Database className="w-4 h-4 text-accent animate-pulse" />
                  </div>
                  <div className="absolute bottom-3 left-3 z-20 p-2 bg-background/80 backdrop-blur-sm rounded-md border border-border/30">
                    <Globe className="w-4 h-4 text-cta animate-pulse delay-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-3 bg-background/50 backdrop-blur-sm border border-border rounded-md text-center hover:bg-accent/5 transition-colors group"
                >
                  <div className="flex justify-center mb-1.5">
                    <div className="p-1.5 bg-accent/10 rounded-md group-hover:bg-accent/20 transition-colors">
                      <stat.icon className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                  <div className="text-xl font-bold text-foreground mb-0.5 font-display">{stat.value}</div>
                  <div className="text-xs text-foreground/60 font-mono">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Skills Tags */}
            <div>
              <h3 className="text-sm font-semibold mb-2.5 text-center font-display">Technical Expertise</h3>
              <div className="flex flex-wrap gap-1.5 justify-center font-mono">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-0.5 bg-background/50 border border-border rounded-md text-xs font-medium text-foreground/80 hover:bg-accent/10 hover:border-accent/30 transition-all duration-200"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;