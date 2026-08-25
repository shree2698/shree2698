"use client";

import Link from "next/link";
import { Magnet } from "@/components/reactbits/Magnet";
import { AnimatedContent } from "@/components/reactbits/AnimatedContent";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <AnimatedContent distance={20} direction="vertical" delay={100}>
      <footer className="bg-slate-100 dark:bg-[#0d1117] border border-slate-300 dark:border-[#30363d] text-foreground py-4 mt-6 rounded-md font-sans">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Side */}
          <p className="text-sm text-center md:text-left">
            &copy; <span className="font-mono">{year}</span> Tanushree Mahato. All rights reserved.
          </p>

          {/* Right Side - Links */}
          <div className="flex flex-wrap gap-4 text-sm font-sans items-center">
            <Magnet magnetStrength={3} padding={10}>
              <Link href="#projects" className="hover:text-accent transition-colors">
                Projects
              </Link>
            </Magnet>
            <Magnet magnetStrength={3} padding={10}>
              <Link href="#github-activity" className="hover:text-accent transition-colors">
                Activity
              </Link>
            </Magnet>
            <Magnet magnetStrength={3} padding={10}>
              <Link href="#contact" className="hover:text-accent transition-colors">
                Contact
              </Link>
            </Magnet>
            <Magnet magnetStrength={3} padding={10}>
              <a
                href="https://github.com/shree2698"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                GitHub
              </a>
            </Magnet>
            <Magnet magnetStrength={3} padding={10}>
              <a
                href="https://leetcode.com/u/tshreem1998/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 text-amber-500 font-mono transition-colors"
              >
                LeetCode
              </a>
            </Magnet>
            <Magnet magnetStrength={3} padding={10}>
              <a
                href="https://www.linkedin.com/in/tanushree-mahato-a6a16920a"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
            </Magnet>
          </div>
        </div>
      </footer>
    </AnimatedContent>
  );
}
