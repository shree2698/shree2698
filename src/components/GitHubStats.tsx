"use client";

import React from "react";
import Image from "next/image";
import { GitBranch, Star, Code2, Award, Flame, ExternalLink, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function GitHubStats() {
  return (
    <section className="py-12 bg-background relative overflow-hidden" id="github-activity">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-cta/5" />
      <div className="absolute top-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cta/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-md font-mono">
            <GitBranch className="w-4 h-4 text-accent" />
            <span className="text-xs font-medium text-foreground/80">Continuous Coding & Open Source</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">
            GitHub & Coding{" "}
            <span className="bg-gradient-to-r from-accent to-cta bg-clip-text text-transparent">
              Activity
            </span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-sans">
            Constantly learning, solving algorithmic problems, and shipping production-grade open source projects.
          </p>
        </div>

        {/* Quick Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto mb-8">
          <a
            href="https://github.com/shree2698"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="border border-border/50 rounded-md bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/80 dark:to-slate-900/80 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <CardContent className="p-3.5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-foreground/60 font-mono">GitHub Repos</h4>
                  <p className="text-lg font-bold text-foreground font-display">Active</p>
                </div>
              </CardContent>
            </Card>
          </a>

          <a
            href="https://leetcode.com/u/tshreem1998/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="border border-border/50 rounded-md bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/80 dark:to-slate-900/80 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <CardContent className="p-3.5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:scale-105 transition-transform">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-foreground/60 font-mono">LeetCode Profile</h4>
                  <p className="text-lg font-bold text-foreground font-display">Problem Solver</p>
                </div>
              </CardContent>
            </Card>
          </a>

          <div className="group">
            <Card className="border border-border/50 rounded-md bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/80 dark:to-slate-900/80">
              <CardContent className="p-3.5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-foreground/60 font-mono">Core Expertise</h4>
                  <p className="text-lg font-bold text-foreground font-display">Full Stack & AI</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="group">
            <Card className="border border-border/50 rounded-md bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/80 dark:to-slate-900/80">
              <CardContent className="p-3.5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-purple-500/10 flex items-center justify-center text-purple-500">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-foreground/60 font-mono">Architecture</h4>
                  <p className="text-lg font-bold text-foreground font-display">Agentic SDLC</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Embed Card */}
        <Card className="border border-border/50 bg-gradient-to-br from-slate-50/90 to-slate-100/90 dark:from-slate-800/90 dark:to-slate-900/90 backdrop-blur-md shadow-lg rounded-md p-4 sm:p-6 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-3 border-b border-border/30">
              <div>
                <h3 className="text-base font-bold text-foreground flex items-center gap-2 font-display">
                  <GitBranch className="w-4 h-4 text-accent" />
                  GitHub Contribution Activity
                </h3>
                <p className="text-[11px] text-foreground/60 font-mono">Live metrics from @shree2698 on GitHub</p>
              </div>
              <a
                href="https://github.com/shree2698"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-accent/10 text-accent hover:bg-accent hover:text-white text-xs font-semibold transition-all font-mono"
              >
                <span>View GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Streak & Metrics Images */}
            <div className="flex justify-center overflow-x-auto py-1">
              <img
                src="https://streak-stats.demolab.com?user=shree2698&theme=tokyonight&hide_border=true"
                alt="GitHub Streak Stats"
                className="rounded-md max-w-full shadow-sm"
                loading="lazy"
              />
            </div>

            {/* Activity Graph */}
            <div className="flex justify-center overflow-x-auto py-1">
              <img
                src="https://github-readme-activity-graph.vercel.app/graph?username=shree2698&theme=tokyo-night&hide_border=true&area=true"
                alt="GitHub Contribution Graph"
                className="rounded-md max-w-full shadow-sm"
                loading="lazy"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
