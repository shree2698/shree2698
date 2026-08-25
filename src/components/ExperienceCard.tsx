"use client";

import React, { useState } from "react";
import { 
  Calendar, MapPin, Code, Users, Zap, Briefcase, 
  Compass, Flag, Navigation, Mountain, Award, Sparkles,
  ChevronRight, Car, CheckCircle2
} from "lucide-react";
import { BlurText } from "@/components/reactbits/BlurText";
import { DecryptedText } from "@/components/reactbits/DecryptedText";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { Magnet } from "@/components/reactbits/Magnet";
import { AnimatedContent } from "@/components/reactbits/AnimatedContent";
import { ShinyText } from "@/components/reactbits/ShinyText";

type Milestone = {
  id: number;
  mile: string;
  station: string;
  title: string;
  company: string;
  description: string;
  date: string;
  location: string;
  status: "Active Destination" | "Milestone Conquered" | "Offer Accepted • Joining Soon";
  speed: string;
  elevation: string;
  skills: string[];
  highlights: string[];
  icon: React.ComponentType<{ className?: string }>;
  scenery: {
    badgeColor: string;
    signColor: string;
    gradient: string;
  };
};

const journeyStops: Milestone[] = [
  {
    id: 1,
    mile: "MILE 5.0",
    station: "AI Frontier Pass • Future Horizon",
    title: "Junior AI Solutions Engineer",
    company: "HyScaler",
    description: "Confirmed acceptance of Letter of Intent for the position of Junior AI Solutions Engineer. Joining the HyScaler team on 7th September 2026 at 9:00 AM IST to engineer enterprise AI workflows, Agentic systems, LLM integrations, and scalable intelligent solutions.",
    date: "Joining 7th Sept 2026 • Full-time",
    location: "HyScaler • 9:00 AM IST",
    status: "Offer Accepted • Joining Soon",
    speed: "Next Orbit Velocity",
    elevation: "Peak AI Solutions",
    skills: ["AI Solutions Architecture", "Agentic AI", "LLM Systems", "Python", "Next.js", "Enterprise SaaS", "Vector DBs", "Prompt Engineering"],
    highlights: [
      "Accepted Letter of Intent (LOI) for Junior AI Solutions Engineer",
      "Official Joining Date: 7th September 2026 at 9:00 AM IST",
      "Building cutting-edge enterprise AI solutions & intelligent agent workflows"
    ],
    icon: Sparkles,
    scenery: {
      badgeColor: "bg-amber-400/20 text-amber-300 border-amber-400/50",
      signColor: "bg-[#d29922] border-[#e3b341]",
      gradient: "from-amber-400 via-orange-500 to-rose-500"
    }
  },
  {
    id: 2,
    mile: "MILE 4.0",
    station: "Summit Station • Full-Stack & Cloud",
    title: "Junior Software Development Engineer",
    company: "Jnine Infotech",
    description: "Architecting and scaling mission-critical web applications with Next.js, React, Node.js, and Agentic AI workflows. Driving 40% performance gains, designing distributed APIs, and leading full-lifecycle feature deployments.",
    date: "Jan 2024 - Present",
    location: "Bhubaneswar • On-site",
    status: "Active Destination",
    speed: "Full Speed",
    elevation: "3,400+ hrs code",
    skills: ["React", "Next.js", "Node.js", "MongoDB", "Express", "TypeScript", "Agentic AI", "MCP"],
    highlights: [
      "Enhanced full-stack app rendering performance by 40%",
      "Engineered resilient multi-tenant architectures and microservices",
      "Mentored junior developers & established CI/CD QA audit standards"
    ],
    icon: Code,
    scenery: {
      badgeColor: "bg-emerald-500/20 text-[#3fb950] border-[#238636]",
      signColor: "bg-[#238636] border-[#2ea043]",
      gradient: "from-emerald-500 to-teal-600"
    }
  },
  {
    id: 3,
    mile: "MILE 3.0",
    station: "Release Highway • Expressway 5",
    title: "Junior Software Engineer",
    company: "Technoboot Pvt Ltd",
    description: "Built robust web apps with high availability and strict test suites. Streamlined continuous delivery pipelines and contributed to 5+ core production releases.",
    date: "Jul 2023 - Dec 2024",
    location: "On-site",
    status: "Milestone Conquered",
    speed: "Cruising 100 km/h",
    elevation: "5+ Major Releases",
    skills: ["React", "Node.js", "JavaScript", "Git", "Agile", "REST APIs", "Tailwind CSS"],
    highlights: [
      "Reduced production bug occurrences by 30% with automated testing",
      "Implemented seamless CI/CD delivery pipelines",
      "Delivered 5+ high-impact client web portals"
    ],
    icon: Navigation,
    scenery: {
      badgeColor: "bg-blue-500/20 text-sky-400 border-sky-500/40",
      signColor: "bg-[#1f6feb] border-[#388bfd]",
      gradient: "from-blue-500 to-indigo-600"
    }
  },
  {
    id: 4,
    mile: "MILE 2.0",
    station: "Optimization Valley • Bridge 2",
    title: "Associate Software Engineer",
    company: "Technoboot Pvt Ltd",
    description: "Spearheaded modular frontend features and backend query optimization. Raised overall code coverage to 85% and eliminated major system bottlenecks.",
    date: "Mar 2023 - Jun 2023",
    location: "On-site",
    status: "Milestone Conquered",
    speed: "Accelerating",
    elevation: "85% Code Coverage",
    skills: ["JavaScript", "React", "API Integration", "Query Optimization", "Jest", "Debugging"],
    highlights: [
      "Optimized complex database queries reducing query latencies",
      "Boosted test suite code coverage to 85%",
      "Streamlined bug triage and root-cause analysis"
    ],
    icon: Compass,
    scenery: {
      badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/40",
      signColor: "bg-[#8957e5] border-[#a371f7]",
      gradient: "from-purple-500 to-pink-600"
    }
  },
  {
    id: 5,
    mile: "MILE 1.0",
    station: "Launchpad Pass • Starting Valley",
    title: "Software Development Intern",
    company: "Quantumware Pvt Ltd",
    description: "Accelerated full-stack foundations with hands-on MERN stack development and agile team sprints. Delivered 3 production features and recognized with excellence award.",
    date: "Mar 2022 - Jun 2022",
    location: "On-site",
    status: "Milestone Conquered",
    speed: "First Ignition",
    elevation: "Foundational Ascent",
    skills: ["MERN Stack", "Git", "Algorithms", "HTML5/CSS3", "Problem Solving"],
    highlights: [
      "Successfully delivered 3 end-to-end web modules",
      "Mastered agile sprint workflows and Git code reviews",
      "Honored with company Excellence Award for outstanding velocity"
    ],
    icon: Flag,
    scenery: {
      badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/40",
      signColor: "bg-[#d29922] border-[#e3b341]",
      gradient: "from-amber-500 to-orange-600"
    }
  }
];

export default function Experience() {
  const [activeMileId, setActiveMileId] = useState<number>(1);

  return (
    <section id="experience" className="py-16 bg-background relative overflow-hidden">
      {/* Scenic Horizon Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-slate-900/40 to-background pointer-events-none" />
      
      {/* Scenic Mountains Silhouette Background SVG */}
      <div className="absolute top-10 left-0 right-0 h-96 opacity-15 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 320" className="w-full h-full object-cover fill-accent/20">
          <path d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,202.7C672,203,768,149,864,138.7C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedContent distance={25} direction="vertical" className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-[#161b22] border border-slate-300 dark:border-[#30363d] rounded-md font-mono">
            <Compass className="w-4 h-4 text-accent animate-spin-slow" />
            <span className="text-xs font-medium text-foreground">
              <DecryptedText text="Expedition Log & Milestones" animateOn="hover" speed={30} />
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground font-display tracking-tight">
            Professional{" "}
            <BlurText 
              text="Journey Road" 
              className="bg-gradient-to-r from-accent via-sky-400 to-emerald-400 bg-clip-text text-transparent"
              animateBy="words" 
              delay={60} 
            />
          </h2>

          <p className="text-sm md:text-base text-foreground/80 max-w-2xl mx-auto font-sans">
            A scenic expedition across 3.4+ years of engineering velocity, scaling from foundational coding to production architectures.
          </p>

          {/* Highway Scenic Ribbon Pill */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-mono text-foreground/70">
            <span className="inline-flex items-center gap-1 bg-[#161b22] border border-[#30363d] px-2.5 py-1 rounded-full text-[#3fb950]">
              <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-ping" />
              Route: Full Stack & AI Highway
            </span>
            <span className="bg-[#161b22] border border-[#30363d] px-2.5 py-1 rounded-full text-sky-400">
              ⚡ Total Mileage: 3.4+ Years
            </span>
            <span className="bg-[#161b22] border border-[#30363d] px-2.5 py-1 rounded-full text-amber-400">
              🏔️ Current Summit: Jnine Infotech
            </span>
          </div>
        </AnimatedContent>

        {/* Scenic Highway Journey Road Canvas */}
        <div className="relative py-4 max-w-5xl mx-auto">
          {/* Central Asphalt Highway Line (Desktop Winding Road) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-16 pointer-events-none z-0">
            {/* Road Surface */}
            <div className="w-full h-full bg-slate-200 dark:bg-[#161b22] border-x-4 border-slate-300 dark:border-[#30363d] shadow-inner relative flex justify-center">
              {/* Dashed Center Road Divider */}
              <div className="w-1 h-full border-r-2 border-dashed border-amber-400/80 dark:border-amber-400/70 animate-pulse" />
              {/* Highway Shoulder Lines */}
              <div className="absolute left-1 top-0 bottom-0 w-0.5 bg-white/20" />
              <div className="absolute right-1 top-0 bottom-0 w-0.5 bg-white/20" />
            </div>
          </div>

          {/* Mobile Asphalt Highway Line */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-10 pointer-events-none z-0">
            <div className="w-full h-full bg-slate-200 dark:bg-[#161b22] border-x-2 border-slate-300 dark:border-[#30363d] shadow-inner relative flex justify-center">
              <div className="w-0.5 h-full border-r-2 border-dashed border-amber-400/80" />
            </div>
          </div>

          {/* Road Milestones */}
          <div className="space-y-12 md:space-y-20 relative z-10">
            {journeyStops.map((stop, index) => {
              const isEven = index % 2 === 0;
              const IconComp = stop.icon;
              const isActive = activeMileId === stop.id;

              return (
                <AnimatedContent 
                  key={stop.id} 
                  distance={35} 
                  direction="vertical" 
                  delay={index * 120}
                  className="relative"
                >
                  <div className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}>
                    {/* Milestone Card */}
                    <div className="w-full md:w-1/2 pl-14 md:pl-0">
                      <SpotlightCard 
                        className={`transition-all duration-300 p-5 md:p-6 cursor-pointer border ${
                          isActive 
                            ? "border-accent shadow-xl bg-slate-100/90 dark:bg-[#0d1117]/95" 
                            : "hover:border-slate-400 dark:hover:border-[#484f58]"
                        }`}
                        spotlightColor="rgba(88, 166, 255, 0.16)"
                        onClick={() => setActiveMileId(stop.id)}
                      >
                        {/* Highway Station Header Banner */}
                        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-200 dark:border-[#30363d]">
                          <div className="flex items-center gap-2">
                            <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold font-mono tracking-wider text-white shadow-sm ${stop.scenery.signColor}`}>
                              {stop.mile}
                            </span>
                            <span className="text-xs font-semibold text-foreground/80 font-mono">
                              {stop.station}
                            </span>
                          </div>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold font-mono border ${stop.scenery.badgeColor}`}>
                            {stop.status}
                          </span>
                        </div>

                        {/* Title & Company */}
                        <div className="flex items-start gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stop.scenery.gradient} p-0.5 shadow-md flex-shrink-0`}>
                            <div className="w-full h-full bg-white dark:bg-[#161b22] rounded-[6px] flex items-center justify-center">
                              <IconComp className="w-5 h-5 text-accent" />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg font-bold text-foreground font-display">
                              {stop.title}
                            </h3>
                            <p className="text-accent font-semibold text-xs sm:text-sm font-sans">{stop.company}</p>
                          </div>
                        </div>

                        {/* Date & Location */}
                        <div className="flex flex-wrap items-center gap-4 text-xs text-foreground/70 font-mono mb-3 bg-slate-200/50 dark:bg-[#161b22]/70 px-3 py-1.5 rounded-md border border-slate-300 dark:border-[#30363d]">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-accent" />
                            <span>{stop.date}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#3fb950]" />
                            <span>{stop.location}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-amber-400">
                            <span>📈 {stop.elevation}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed mb-3 font-sans">
                          {stop.description}
                        </p>

                        {/* Key Achievements */}
                        <div className="space-y-1.5 mb-4">
                          {stop.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-foreground/80">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#3fb950] flex-shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>

                        {/* Technology Shields */}
                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200 dark:border-[#30363d] font-mono">
                          {stop.skills.map((skill, i) => (
                            <span 
                              key={i}
                              className="px-2 py-0.5 text-[11px] bg-slate-100 dark:bg-[#161b22] text-accent border border-slate-300 dark:border-[#30363d] rounded font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </SpotlightCard>
                    </div>

                    {/* Central Roadside Milestone Marker Node */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
                      <Magnet magnetStrength={4} padding={15}>
                        <button
                          onClick={() => setActiveMileId(stop.id)}
                          className={`w-12 h-12 rounded-full border-4 flex items-center justify-center shadow-2xl transition-all duration-300 cursor-pointer ${
                            isActive
                              ? "bg-accent border-white dark:border-[#0d1117] text-white scale-110 ring-4 ring-accent/30"
                              : "bg-slate-100 dark:bg-[#161b22] border-amber-400 text-amber-400 hover:scale-105"
                          }`}
                        >
                          <Car className="w-5 h-5" />
                        </button>
                      </Magnet>
                      
                      {/* Milestone Sign Pole */}
                      <span className="mt-1 px-2 py-0.5 bg-black/80 text-[10px] font-mono font-bold text-amber-400 rounded border border-amber-400/40 shadow-sm whitespace-nowrap">
                        {stop.mile}
                      </span>
                    </div>

                    {/* Roadside Scenic Billboard / Landmark Overview (Opposite Side on Desktop) */}
                    <div className="hidden md:block w-1/2 text-center md:text-left">
                      <div className={`p-4 rounded-xl border border-slate-300 dark:border-[#30363d] bg-slate-100/50 dark:bg-[#161b22]/50 backdrop-blur-sm max-w-sm ${
                        isEven ? "ml-auto" : "mr-auto"
                      }`}>
                        <div className="flex items-center gap-2 mb-1.5 font-mono text-xs text-foreground/70">
                          <Mountain className="w-4 h-4 text-accent" />
                          <span>Highway Waypoint</span>
                        </div>
                        <h4 className="text-sm font-bold text-foreground font-display">
                          {stop.station}
                        </h4>
                        <p className="text-xs text-foreground/70 font-sans mt-1">
                          Velocity: <strong className="text-accent">{stop.speed}</strong> • Impact: <strong className="text-[#3fb950]">{stop.highlights[0]}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedContent>
              );
            })}
          </div>
        </div>

        {/* Highway Journey Summary Dashboard */}
        <AnimatedContent distance={25} direction="vertical" delay={300}>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <SpotlightCard className="text-center p-5" spotlightColor="rgba(88, 166, 255, 0.15)">
              <div className="text-3xl font-bold text-accent mb-1 font-display">3.4+ Yrs</div>
              <div className="text-xs text-foreground/70 font-mono">Continuous Highway Velocity</div>
            </SpotlightCard>
            <SpotlightCard className="text-center p-5" spotlightColor="rgba(63, 185, 80, 0.15)">
              <div className="text-3xl font-bold text-[#3fb950] mb-1 font-display">15+ Shipments</div>
              <div className="text-xs text-foreground/70 font-mono">Production Features & Apps</div>
            </SpotlightCard>
            <SpotlightCard className="text-center p-5" spotlightColor="rgba(88, 166, 255, 0.15)">
              <div className="text-3xl font-bold text-sky-400 mb-1 font-display">Full Stack & AI</div>
              <div className="text-xs text-foreground/70 font-mono">Modern Architecture Stack</div>
            </SpotlightCard>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}