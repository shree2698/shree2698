"use client";

import React from "react";
import Image from "next/image";
import { GitBranch, Star, Code2, Award, Flame, ExternalLink, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function GitHubStats() {
  return (
    <section className="py-20 bg-background relative overflow-hidden" id="github-activity">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-cta/5" />
      <div className="absolute top-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cta/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
            <GitBranch className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground/80">Continuous Coding & Open Source</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            GitHub & Coding{" "}
            <span className="bg-gradient-to-r from-accent to-cta bg-clip-text text-transparent">
              Activity
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Constantly learning, solving algorithmic problems, and shipping production-grade open source projects.
          </p>
        </div>

        {/* Quick Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          <a
            href="https://github.com/shree2698"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="border border-border/50 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/80 dark:to-slate-900/80 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground/60">GitHub Repos</h4>
                  <p className="text-2xl font-bold text-foreground">Active</p>
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
            <Card className="border border-border/50 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/80 dark:to-slate-900/80 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground/60">LeetCode Profile</h4>
                  <p className="text-2xl font-bold text-foreground">Problem Solver</p>
                </div>
              </CardContent>
            </Card>
          </a>

          <div className="group">
            <Card className="border border-border/50 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/80 dark:to-slate-900/80">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground/60">Core Expertise</h4>
                  <p className="text-2xl font-bold text-foreground">Full Stack & AI</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="group">
            <Card className="border border-border/50 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/80 dark:to-slate-900/80">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground/60">Architecture</h4>
                  <p className="text-2xl font-bold text-foreground">Agentic SDLC</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Embed Card */}
        <Card className="border border-border/50 bg-gradient-to-br from-slate-50/90 to-slate-100/90 dark:from-slate-800/90 dark:to-slate-900/90 backdrop-blur-md shadow-2xl rounded-3xl p-6 sm:p-8 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-border/30">
              <div>
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <GitBranch className="w-5 h-5 text-accent" />
                  GitHub Contribution Activity
                </h3>
                <p className="text-xs text-foreground/60">Live metrics from @shree2698 on GitHub</p>
              </div>
              <a
                href="https://github.com/shree2698"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white text-xs font-semibold transition-all"
              >
                <span>View GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Streak & Metrics Images */}
            <div className="flex justify-center overflow-x-auto py-2">
              <img
                src="https://streak-stats.demolab.com?user=shree2698&theme=tokyonight&hide_border=true"
                alt="GitHub Streak Stats"
                className="rounded-2xl max-w-full shadow-md"
                loading="lazy"
              />
            </div>

            {/* Activity Graph */}
            <div className="flex justify-center overflow-x-auto py-2">
              <img
                src="https://github-readme-activity-graph.vercel.app/graph?username=shree2698&theme=tokyo-night&hide_border=true&area=true"
                alt="GitHub Contribution Graph"
                className="rounded-2xl max-w-full shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
