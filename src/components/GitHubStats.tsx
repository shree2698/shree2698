"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { GitBranch, Star, Code2, Flame, ExternalLink, Trophy, GitCommit } from "lucide-react";
import { BlurText } from "@/components/reactbits/BlurText";
import { DecryptedText } from "@/components/reactbits/DecryptedText";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { Magnet } from "@/components/reactbits/Magnet";
import { AnimatedContent } from "@/components/reactbits/AnimatedContent";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="h-32 w-full flex items-center justify-center text-xs text-foreground/60 font-mono animate-pulse">
        Fetching live GitHub contributions...
      </div>
    ),
  }
);

export default function GitHubStats() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const colorScheme = mounted && resolvedTheme === "light" ? "light" : "dark";

  return (
    <section className="py-12 bg-background relative overflow-hidden" id="github-activity">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-cta/5" />
      <div className="absolute top-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cta/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedContent distance={25} direction="vertical" className="text-center mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-[#161b22] border border-slate-300 dark:border-[#30363d] rounded-md font-mono">
            <GitBranch className="w-4 h-4 text-accent" />
            <span className="text-xs font-medium text-foreground">
              <DecryptedText text="Open Source & Activity" animateOn="hover" speed={30} />
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">
            GitHub Contribution{" "}
            <BlurText 
              text="Graph" 
              className="bg-gradient-to-r from-accent to-cta bg-clip-text text-transparent"
              animateBy="words" 
              delay={60} 
            />
          </h2>
          <p className="text-sm text-foreground/80 max-w-2xl mx-auto font-sans">
            Constantly pushing code, architecting AI tools, and shipping production-grade open source projects.
          </p>
        </AnimatedContent>

        {/* Quick Highlights */}
        <AnimatedContent distance={25} direction="vertical" delay={100}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto mb-8">
            <a
              href="https://github.com/shree2698"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <SpotlightCard className="p-3.5 transition-all duration-300 hover:-translate-y-1" spotlightColor="rgba(88, 166, 255, 0.15)">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-accent/10 dark:bg-[#161b22] border border-transparent dark:border-[#30363d] flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-foreground/70 font-mono">GitHub Profile</h4>
                    <p className="text-lg font-bold text-foreground font-display">@shree2698</p>
                  </div>
                </div>
              </SpotlightCard>
            </a>

            <a
              href="https://leetcode.com/u/tshreem1998/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <SpotlightCard className="p-3.5 transition-all duration-300 hover:-translate-y-1" spotlightColor="rgba(227, 179, 65, 0.15)">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-amber-500/10 dark:bg-[#161b22] border border-transparent dark:border-[#30363d] flex items-center justify-center text-[#e3b341] group-hover:scale-105 transition-transform">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-foreground/70 font-mono">LeetCode</h4>
                    <p className="text-lg font-bold text-foreground font-display">Problem Solver</p>
                  </div>
                </div>
              </SpotlightCard>
            </a>

            <div className="group">
              <SpotlightCard className="p-3.5" spotlightColor="rgba(63, 185, 80, 0.15)">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-emerald-500/10 dark:bg-[#161b22] border border-transparent dark:border-[#30363d] flex items-center justify-center text-[#3fb950]">
                    <GitCommit className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-foreground/70 font-mono">Commit Rate</h4>
                    <p className="text-lg font-bold text-foreground font-display">Consistent</p>
                  </div>
                </div>
              </SpotlightCard>
            </div>

            <div className="group">
              <SpotlightCard className="p-3.5" spotlightColor="rgba(137, 87, 229, 0.15)">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-purple-500/10 dark:bg-[#161b22] border border-transparent dark:border-[#30363d] flex items-center justify-center text-purple-400">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-foreground/70 font-mono">Focus</h4>
                    <p className="text-lg font-bold text-foreground font-display">AI & Full Stack</p>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </AnimatedContent>

        {/* Live GitHub Calendar Contribution Graph */}
        <AnimatedContent distance={30} direction="vertical" delay={200}>
          <SpotlightCard className="p-4 sm:p-6 max-w-4xl mx-auto shadow-xl" spotlightColor="rgba(63, 185, 80, 0.18)">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-[#30363d]">
                <div>
                  <h3 className="text-base font-bold text-foreground flex items-center gap-2 font-display">
                    <GitBranch className="w-4 h-4 text-[#3fb950]" />
                    Contribution Activity Graph
                  </h3>
                  <p className="text-[11px] text-foreground/70 font-mono">Live public contribution calendar from GitHub</p>
                </div>
                <Magnet magnetStrength={3} padding={15}>
                  <a
                    href="https://github.com/shree2698"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-100 dark:bg-[#161b22] text-accent hover:bg-accent hover:text-white border border-slate-300 dark:border-[#30363d] text-xs font-semibold transition-all font-mono"
                  >
                    <span>Follow on GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </Magnet>
              </div>

              {/* Interactive Calendar */}
              <div className="flex justify-center overflow-x-auto py-3 px-2">
                <div className="min-w-[680px] flex justify-center">
                  <GitHubCalendar
                    username="shree2698"
                    colorScheme={colorScheme}
                    fontSize={12}
                    blockSize={12}
                    blockMargin={4}
                    theme={{
                      light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                      dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                    }}
                    labels={{
                      totalCount: "{{count}} contributions in the last year",
                    }}
                  />
                </div>
              </div>

              {/* Streak Stats Banner */}
              <div className="flex justify-center overflow-x-auto pt-2 border-t border-slate-200 dark:border-[#30363d]">
                <img
                  src="https://streak-stats.demolab.com?user=shree2698&theme=tokyonight&hide_border=true"
                  alt="GitHub Streak Stats"
                  className="rounded-md max-w-full shadow-sm"
                  loading="lazy"
                />
              </div>
            </div>
          </SpotlightCard>
        </AnimatedContent>
      </div>
    </section>
  );
}
