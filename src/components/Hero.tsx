"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    Instagram,
    Linkedin,
    Github,
    Mail,
    Download,
    ArrowRight,
    Code2,
    Sparkles,
    MapPin,
    Bot,
    Trophy
} from "lucide-react";
import InteractiveHeroSection from "./ui/InteractiveHeroSection";
import { BlurText } from "@/components/reactbits/BlurText";
import { DecryptedText } from "@/components/reactbits/DecryptedText";
import { ShinyText } from "@/components/reactbits/ShinyText";
import { Magnet } from "@/components/reactbits/Magnet";
import { AnimatedContent } from "@/components/reactbits/AnimatedContent";

const Hero: React.FC = () => {
    const [taglineIndex, setTaglineIndex] = useState(0);
    const taglines = [
        "Full Stack Developer & AI Application Builder",
        "React & Next.js Ecosystem Specialist",
        "Building Agentic AI & SaaS Products",
        "Designing Scalable Backend Systems"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTaglineIndex((prev) => (prev + 1) % taglines.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [taglines.length]);

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/TanushreeMahato_FullStackDeveloper.pdf";
        link.setAttribute("download", "TanushreeMahato_FullStackDeveloper.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleScrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    const socialLinks = [
        {
            icon: Github,
            href: "https://github.com/shree2698",
            label: "GitHub",
            color: "hover:bg-gray-900 hover:text-white"
        },
        {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/tanushree-mahato-a6a16920a",
            label: "LinkedIn",
            color: "hover:bg-blue-600 hover:text-white"
        },
        {
            icon: Trophy,
            href: "https://leetcode.com/u/tshreem1998/",
            label: "LeetCode",
            color: "hover:bg-amber-500 hover:text-white"
        },
        {
            icon: Mail,
            href: "mailto:tanushreemahato.261298@gmail.com",
            label: "Email",
            color: "hover:bg-red-500 hover:text-white"
        }
    ];

    const techStack = ["Next.js", "React", "TypeScript", "Node.js", "AI Agents", "NestJS", "PostgreSQL", "MongoDB", "Prisma", "TailwindCSS"];
    const startDate = new Date("2023-04-20");
    const now = new Date();
    const experienceInYears = ((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365)).toFixed(1);

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background" id="home">
            {/* Background elements */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(90vh-4rem)]">

                    {/* Content Section */}
                    <AnimatedContent distance={30} direction="vertical" delay={100} className="space-y-6 lg:pr-6">
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 max-w-full flex-wrap px-3 py-1.5 bg-slate-100/80 dark:bg-[#161b22] border border-slate-300 dark:border-[#30363d] rounded-md backdrop-blur-sm font-mono">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#3fb950] rounded-full animate-pulse flex-shrink-0" />
                                <span className="text-xs font-medium text-foreground whitespace-nowrap">
                                    <DecryptedText text="Available for opportunities" animateOn="hover" speed={30} />
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5 text-foreground/80">
                                <MapPin className="w-3 h-3 text-accent flex-shrink-0" />
                                <span className="text-xs">Bhubaneswar, India • Open to Remote</span>
                            </div>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-3 font-display">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                <span className="text-foreground">Hello, I'm</span>
                                <br />
                                <BlurText 
                                    text="Tanushree Mahato" 
                                    className="bg-gradient-to-r from-accent via-sky-400 to-emerald-400 bg-clip-text text-transparent"
                                    animateBy="words" 
                                    delay={70} 
                                />
                                <span className="text-foreground">.</span>
                            </h1>

                            <div className="flex items-center gap-3 text-lg md:text-xl lg:text-2xl font-semibold min-h-[36px]">
                                <Bot className="w-6 h-6 text-accent flex-shrink-0 animate-bounce" />
                                <span key={taglineIndex} className="text-foreground transition-all duration-500">
                                    {taglines[taglineIndex]}
                                </span>
                                <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse flex-shrink-0" />
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-base text-foreground/80 leading-relaxed max-w-2xl font-sans">
                            Passionate Full-Stack Developer with{" "}
                            <span className="text-accent font-semibold font-mono">{experienceInYears}+ years</span> of professional experience,
                            specializing in modern web architectures with <span className="text-accent font-semibold">React & Next.js</span>,
                            robust backend services (<span className="font-semibold text-foreground">Node.js, Express, NestJS</span>), and
                            cutting-edge <span className="text-emerald-400 font-semibold">Agentic AI, MCP & LLM platforms</span>.
                            Working at <strong className="text-foreground">Jnine Infotech</strong>, delivering high-performance digital products and clean architecture.
                        </p>

                        {/* Tech Stack */}
                        <div className="space-y-2">
                            <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider font-mono">Tech Stack & Tools</p>
                            <div className="flex flex-wrap gap-1.5 font-mono">
                                {techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2.5 py-0.5 bg-slate-100/80 dark:bg-[#161b22] border border-slate-300 dark:border-[#30363d] rounded-md text-xs font-medium text-foreground hover:border-accent hover:text-accent transition-all duration-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3 pt-2 font-sans">
                            <Button
                                onClick={handleScrollToProjects}
                                className="group bg-[#238636] hover:bg-[#2ea043] dark:bg-[#238636] dark:hover:bg-[#2ea043] border border-[#2ea043]/60 text-white shadow-md hover:shadow-lg transition-all duration-300 px-5 py-2.5 rounded-md cursor-pointer text-sm font-semibold"
                            >
                                <ShinyText text="View Featured Projects" speed={3} />
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>

                            <Button
                                onClick={handleDownload}
                                variant="outline"
                                className="group border-slate-300 dark:border-[#30363d] bg-transparent hover:bg-slate-100 dark:hover:bg-[#161b22] dark:hover:border-accent px-5 py-2.5 rounded-md transition-all duration-300 cursor-pointer text-sm font-semibold text-foreground"
                            >
                                <Download className="mr-2 w-4 h-4 group-hover:animate-bounce" />
                                Download Resume
                            </Button>
                        </div>

                        {/* Social Links */}
                        <div className="pt-4">
                            <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2 font-mono">Connect With Me</p>
                            <div className="flex gap-2">
                                {socialLinks.map((social) => (
                                    <Magnet key={social.label} magnetStrength={3} padding={30}>
                                        <a
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`group p-2.5 bg-slate-100/80 dark:bg-[#161b22] border border-slate-300 dark:border-[#30363d] rounded-md transition-all duration-300 ${social.color} hover:border-accent hover:shadow-md backdrop-blur-sm block`}
                                            aria-label={social.label}
                                        >
                                            <social.icon className="w-4 h-4 text-foreground/80 group-hover:text-accent transition-colors" />
                                        </a>
                                    </Magnet>
                                ))}
                            </div>
                        </div>
                    </AnimatedContent>

                    {/* Image Section */}
                    <AnimatedContent distance={30} direction="vertical" delay={200} className="relative lg:order-2 order-1">
                        <div className="relative aspect-square max-w-md mx-auto">
                            {/* Decorative Elements */}
                            <div className="absolute -top-3 -left-3 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse" />
                            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl animate-pulse delay-500" />

                            {/* Main Image Container */}
                            <div className="relative w-full h-full rounded-lg overflow-hidden bg-slate-100 dark:bg-[#0d1117] backdrop-blur-sm border border-slate-300 dark:border-[#30363d] shadow-xl">
                                <InteractiveHeroSection />
                            </div>

                            {/* Experience Badge */}
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-20">
                                <div className="px-4 py-2 bg-white dark:bg-[#161b22] border border-slate-300 dark:border-[#30363d] rounded-md shadow-md backdrop-blur-sm">
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-accent font-display">{experienceInYears}+</div>
                                        <div className="text-[10px] text-foreground/70 uppercase tracking-wide font-mono">Years Experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </div>
        </section>
    );
};

export default Hero;