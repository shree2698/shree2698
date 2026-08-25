"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground/10 dark:bg-foreground/10 text-foreground dark:text-foreground py-4 mt-6 rounded-md font-sans">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side */}
        <p className="text-sm text-center md:text-left">
          &copy; <span className="font-mono">{year}</span> Tanushree Mahato. All rights reserved.
        </p>

        {/* Right Side - Links */}
        <div className="flex flex-wrap gap-4 text-sm font-sans">
          <Link href="#projects" className="hover:underline">
            Projects
          </Link>
          <Link href="#github-activity" className="hover:underline">
            Activity
          </Link>
          <Link href="#contact" className="hover:underline">
            Contact
          </Link>
          <a
            href="https://github.com/shree2698"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://leetcode.com/u/tshreem1998/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-amber-500 font-mono"
          >
            LeetCode
          </a>
          <a
            href="https://www.linkedin.com/in/tanushree-mahato-a6a16920a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
