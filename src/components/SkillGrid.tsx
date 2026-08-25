"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Database, 
  Globe, 
  Layers, 
  Palette, 
  Zap, 
  FileCode, 
  Cpu,
  Server,
  Bot,
  Container,
  GitBranch,
  Sparkles,
  Shuffle,
  RotateCcw,
  Trophy,
  Dices,
  Play,
  CheckCircle2,
  Unlock,
  Eye,
  Gamepad2,
  Timer,
  Award,
  ArrowRight
} from "lucide-react";

import { BlurText } from "@/components/reactbits/BlurText";
import { DecryptedText } from "@/components/reactbits/DecryptedText";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { Magnet } from "@/components/reactbits/Magnet";
import { AnimatedContent } from "@/components/reactbits/AnimatedContent";
import { ShinyText } from "@/components/reactbits/ShinyText";

export type Skill = {
  id: number;
  initialIndex: number;
  name: string;
  category: "Frontend" | "Backend" | "Databases" | "AI & Tools";
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  proficiency: number;
  color: string;
};

const allSkills: Skill[] = [
  { 
    id: 1,
    initialIndex: 1,
    name: "React.js", 
    category: "Frontend", 
    icon: Code2, 
    description: "Component-driven architecture, custom hooks, React 19 concurrent features",
    proficiency: 95,
    color: "from-sky-500 to-blue-600"
  },
  { 
    id: 2,
    initialIndex: 2,
    name: "Next.js", 
    category: "Frontend", 
    icon: Globe, 
    description: "App Router, SSR, SSG, Server Actions, Turbopack optimization",
    proficiency: 94,
    color: "from-slate-700 to-black"
  },
  { 
    id: 3,
    initialIndex: 3,
    name: "TypeScript", 
    category: "Frontend", 
    icon: FileCode, 
    description: "Strict static typing, generics, interfaces, enterprise DX",
    proficiency: 92,
    color: "from-blue-600 to-indigo-600"
  },
  { 
    id: 4,
    initialIndex: 4,
    name: "Agentic AI & MCP", 
    category: "AI & Tools", 
    icon: Bot, 
    description: "Custom AI Agent skills, Model Context Protocol (MCP), tool orchestration",
    proficiency: 94,
    color: "from-emerald-500 to-teal-600"
  },
  { 
    id: 5,
    initialIndex: 5,
    name: "Tailwind CSS", 
    category: "Frontend", 
    icon: Palette, 
    description: "Responsive design systems, custom utilities, dark mode styling",
    proficiency: 96,
    color: "from-cyan-500 to-sky-600"
  },
  { 
    id: 6,
    initialIndex: 6,
    name: "Node.js", 
    category: "Backend", 
    icon: Server, 
    description: "High-throughput asynchronous event-driven backend microservices",
    proficiency: 90,
    color: "from-green-600 to-emerald-700"
  },
  { 
    id: 7,
    initialIndex: 7,
    name: "Express.js", 
    category: "Backend", 
    icon: Globe, 
    description: "RESTful routing, auth middleware pipelines, rate limiters",
    proficiency: 90,
    color: "from-slate-600 to-slate-800"
  },
  { 
    id: 8,
    initialIndex: 8,
    name: "NestJS", 
    category: "Backend", 
    icon: Cpu, 
    description: "Modular enterprise architecture, dependency injection, decorators",
    proficiency: 84,
    color: "from-red-500 to-rose-600"
  },
  { 
    id: 9,
    initialIndex: 9,
    name: "MongoDB", 
    category: "Databases", 
    icon: Database, 
    description: "Document aggregation pipelines, indexing, Mongoose schemas",
    proficiency: 88,
    color: "from-green-500 to-emerald-600"
  },
  { 
    id: 10,
    initialIndex: 10,
    name: "PostgreSQL", 
    category: "Databases", 
    icon: Database, 
    description: "Relational schemas, complex JOIN queries, ACID transactions",
    proficiency: 86,
    color: "from-blue-500 to-sky-600"
  },
  { 
    id: 11,
    initialIndex: 11,
    name: "Prisma ORM", 
    category: "Databases", 
    icon: Layers, 
    description: "Type-safe database queries, schema migrations, client bindings",
    proficiency: 88,
    color: "from-indigo-500 to-purple-600"
  },
  { 
    id: 12,
    initialIndex: 12,
    name: "LangChain & RAG", 
    category: "AI & Tools", 
    icon: Sparkles, 
    description: "Context retrieval augmentation, vector embeddings, prompt chains",
    proficiency: 88,
    color: "from-purple-500 to-pink-600"
  },
  { 
    id: 13,
    initialIndex: 13,
    name: "JavaScript", 
    category: "Frontend", 
    icon: Zap, 
    description: "ES6+ asynchronous promises, closures, functional programming",
    proficiency: 94,
    color: "from-amber-400 to-yellow-500"
  },
  { 
    id: 14,
    initialIndex: 14,
    name: "Docker", 
    category: "AI & Tools", 
    icon: Container, 
    description: "Containerization, multi-stage Docker builds, compose setups",
    proficiency: 82,
    color: "from-sky-600 to-blue-700"
  },
  { 
    id: 15,
    initialIndex: 15,
    name: "Git & GitHub", 
    category: "AI & Tools", 
    icon: GitBranch, 
    description: "Version control workflows, CI/CD actions, open source contributions",
    proficiency: 95,
    color: "from-orange-500 to-red-600"
  }
];

export default function SkillsGrid() {
  // Game States
  const [viewMode, setViewMode] = useState<"puzzle" | "unlocked">("puzzle");
  const [tiles, setTiles] = useState<(Skill | null)[]>(() => {
    // Start with a gentle 6-move scramble so it's fun and easy to solve
    return [...allSkills, null];
  });
  const [moves, setMoves] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isSolved, setIsSolved] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeTab, setActiveTab] = useState<string>("All");

  // Timer Ref
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Check solved condition
  const checkIsSolved = useCallback((currentTiles: (Skill | null)[]) => {
    for (let i = 0; i < 15; i++) {
      if (!currentTiles[i] || currentTiles[i]?.initialIndex !== i + 1) {
        return false;
      }
    }
    return currentTiles[15] === null;
  }, []);

  // Timer running when game has started and not solved
  useEffect(() => {
    if (hasStarted && !isSolved && viewMode === "puzzle") {
      timerRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [hasStarted, isSolved, viewMode]);

  // Initial scramble on mount for genuine game challenge
  useEffect(() => {
    scrambleTiles(8);
  }, []);

  const scrambleTiles = (moveCount = 12) => {
    let currentTiles = [...allSkills, null];
    let emptyIndex = 15;

    for (let step = 0; step < moveCount; step++) {
      const row = Math.floor(emptyIndex / 4);
      const col = emptyIndex % 4;
      const validNeighbors: number[] = [];

      if (row > 0) validNeighbors.push(emptyIndex - 4);
      if (row < 3) validNeighbors.push(emptyIndex + 4);
      if (col > 0) validNeighbors.push(emptyIndex - 1);
      if (col < 3) validNeighbors.push(emptyIndex + 1);

      const chosenIndex = validNeighbors[Math.floor(Math.random() * validNeighbors.length)];
      currentTiles[emptyIndex] = currentTiles[chosenIndex];
      currentTiles[chosenIndex] = null;
      emptyIndex = chosenIndex;
    }

    setTiles(currentTiles);
    setMoves(0);
    setSeconds(0);
    setHasStarted(false);
    setIsSolved(false);
  };

  const moveTile = (index: number) => {
    const emptyIndex = tiles.findIndex(t => t === null);
    if (emptyIndex === -1) return;

    const row1 = Math.floor(index / 4);
    const col1 = index % 4;
    const row2 = Math.floor(emptyIndex / 4);
    const col2 = emptyIndex % 4;

    const isAdjacent = Math.abs(row1 - row2) + Math.abs(col1 - col2) === 1;

    if (isAdjacent) {
      if (!hasStarted) setHasStarted(true);

      const nextTiles = [...tiles];
      nextTiles[emptyIndex] = nextTiles[index];
      nextTiles[index] = null;
      setTiles(nextTiles);
      const newMoves = moves + 1;
      setMoves(newMoves);

      const solved = checkIsSolved(nextTiles);
      if (solved) {
        setIsSolved(true);
        // Automatically reveal all skills upon victory after a brief celebratory delay
        setTimeout(() => {
          setViewMode("unlocked");
        }, 1200);
      }
    }
  };

  const instantSolve = () => {
    setTiles([...allSkills, null]);
    setIsSolved(true);
    setViewMode("unlocked");
  };

  const resetAndPlayAgain = () => {
    setViewMode("puzzle");
    scrambleTiles(12);
  };

  const categories = ["All", "Frontend", "Backend", "Databases", "AI & Tools"];

  const filteredUnlockedSkills = activeTab === "All" 
    ? allSkills 
    : allSkills.filter(s => s.category === activeTab);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <section className="relative py-16 bg-background overflow-hidden" id="skills">
      {/* Atmosphere Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cta/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedContent distance={25} direction="vertical" className="text-center mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-[#161b22] border border-slate-300 dark:border-[#30363d] rounded-md font-mono">
            <Gamepad2 className="w-4 h-4 text-accent animate-bounce" />
            <span className="text-xs font-medium text-foreground">
              <DecryptedText text="Tech Puzzle Challenge • Slide To Unlock" animateOn="hover" speed={30} />
            </span>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-display tracking-tight">
              Tech Stack &{' '}
              <BlurText 
                text={viewMode === "unlocked" ? "Skills Showcase" : "Skills Game"} 
                className="bg-gradient-to-r from-accent via-sky-400 to-emerald-400 bg-clip-text text-transparent"
                animateBy="words" 
                delay={60} 
              />
            </h2>
            
            <p className="text-sm md:text-base text-foreground/80 max-w-2xl mx-auto leading-relaxed font-sans">
              {viewMode === "puzzle" 
                ? "Solve the 15-puzzle number matrix to unlock the full engineering skill catalog!" 
                : "🎉 Puzzle Mastered! All engineering skills & proficiencies unlocked and revealed."}
            </p>
          </div>

          {/* View Mode & Game Control Toolbar */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3 font-mono">
            {viewMode === "puzzle" ? (
              <>
                {/* Stats Bar */}
                <div className="inline-flex items-center gap-3 bg-slate-100 dark:bg-[#161b22] border border-slate-300 dark:border-[#30363d] px-4 py-2 rounded-lg text-xs shadow-sm">
                  <span className="text-foreground/70">
                    Moves: <strong className="text-accent font-bold">{moves}</strong>
                  </span>
                  <span className="w-1 h-3 bg-slate-300 dark:bg-[#30363d] rounded" />
                  <span className="flex items-center gap-1 text-foreground/70">
                    <Timer className="w-3.5 h-3.5 text-amber-400" />
                    <strong className="font-mono">{formatTime(seconds)}</strong>
                  </span>
                  <span className="w-1 h-3 bg-slate-300 dark:bg-[#30363d] rounded" />
                  {isSolved ? (
                    <span className="text-[#3fb950] font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Solved! Unlocking...
                    </span>
                  ) : (
                    <span className="text-amber-400 font-semibold">
                      🎮 Play to Unlock
                    </span>
                  )}
                </div>

                {/* Shuffle Button */}
                <Magnet magnetStrength={3} padding={15}>
                  <button
                    onClick={() => scrambleTiles(16)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-200 dark:bg-[#21262d] hover:border-accent border border-slate-300 dark:border-[#30363d] text-foreground text-xs font-semibold transition-all cursor-pointer shadow-sm hover:scale-105"
                  >
                    <Shuffle className="w-3.5 h-3.5 text-accent" />
                    <span>Shuffle</span>
                  </button>
                </Magnet>

                {/* Instant Solve Button */}
                <Magnet magnetStrength={3} padding={15}>
                  <button
                    onClick={instantSolve}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#238636] hover:bg-[#2ea043] text-white text-xs font-semibold transition-all cursor-pointer shadow-sm hover:scale-105"
                  >
                    <Unlock className="w-3.5 h-3.5" />
                    <span>Instant Reveal All</span>
                  </button>
                </Magnet>
              </>
            ) : (
              /* Unlocked Toolbar */
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/20 text-[#3fb950] border border-[#238636] rounded-md text-xs font-semibold font-mono">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span>15/15 Skills Fully Unlocked!</span>
                </div>

                <Magnet magnetStrength={3} padding={15}>
                  <button
                    onClick={resetAndPlayAgain}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-slate-200 dark:bg-[#21262d] border border-slate-300 dark:border-[#30363d] text-foreground text-xs font-semibold hover:border-accent transition-all cursor-pointer"
                  >
                    <Gamepad2 className="w-3.5 h-3.5 text-accent" />
                    <span>Play Puzzle Again</span>
                  </button>
                </Magnet>
              </div>
            )}
          </div>
        </AnimatedContent>

        {/* Dynamic Game vs Full Unlocked View Container */}
        <AnimatePresence mode="wait">
          {viewMode === "puzzle" ? (
            /* PUZZLE GAME VIEW (15-Sliding Puzzle Matrix) */
            <motion.div
              key="puzzle-view"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="p-3 sm:p-5 bg-slate-200/70 dark:bg-[#0d1117]/90 border-2 border-slate-300 dark:border-[#30363d] rounded-2xl shadow-2xl backdrop-blur-md relative">
                {/* Solved celebration overlay */}
                {isSolved && (
                  <div className="absolute inset-0 z-30 bg-black/60 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-6 text-center animate-fade-in">
                    <Trophy className="w-16 h-16 text-amber-400 mb-3 animate-bounce" />
                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-1">
                      🎉 Victory! Matrix Solved!
                    </h3>
                    <p className="text-sm text-emerald-400 font-mono mb-4">
                      Completed in {moves} moves • Unlocking full skills catalog...
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative">
                  {tiles.map((skill, index) => {
                    if (skill === null) {
                      return (
                        <motion.div
                          key="empty-slot"
                          layout
                          transition={{ type: "spring", stiffness: 350, damping: 28 }}
                          className="min-h-[140px] sm:min-h-[160px] rounded-xl border-2 border-dashed border-slate-400/40 dark:border-[#30363d] flex flex-col items-center justify-center p-3 text-center bg-slate-300/30 dark:bg-[#161b22]/30 shadow-inner"
                        >
                          <span className="text-2xl opacity-20 font-mono font-bold">16</span>
                          <span className="text-[11px] font-mono text-foreground/40 mt-1">Empty Slot</span>
                          <span className="text-[10px] font-mono text-accent/60">Click neighbor to slide</span>
                        </motion.div>
                      );
                    }

                    const IconComponent = skill.icon;

                    return (
                      <motion.div
                        key={skill.id}
                        layout
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                        onClick={() => moveTile(index)}
                        className="min-h-[140px] sm:min-h-[160px] rounded-xl overflow-hidden cursor-pointer select-none hover:scale-[1.02] transition-transform"
                      >
                        <SpotlightCard 
                          className="h-full p-3.5 flex flex-col justify-between border border-slate-300 dark:border-[#30363d] bg-slate-100 dark:bg-[#161b22] hover:border-accent shadow-md relative"
                          spotlightColor="rgba(88, 166, 255, 0.15)"
                        >
                          {/* Top Row: Number Badge & Category */}
                          <div className="flex items-center justify-between gap-1 mb-2 font-mono">
                            <span className="px-2 py-0.5 rounded bg-black/10 text-accent text-[11px] font-bold border border-accent/30 shadow-sm">
                              {String(skill.initialIndex).padStart(2, "0")}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-[#0d1117] text-foreground/70 font-semibold border border-slate-300 dark:border-[#30363d]">
                              {skill.category}
                            </span>
                          </div>

                          {/* Middle: Icon & Skill Name */}
                          <div className="flex items-center gap-2.5 my-1">
                            <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${skill.color} p-0.5 shadow-md flex-shrink-0`}>
                              <div className="w-full h-full bg-white dark:bg-[#161b22] rounded-[6px] flex items-center justify-center">
                                <IconComponent className="w-4 h-4 text-accent" />
                              </div>
                            </div>
                            <div className="min-w-0 flex-1">
                              <h3 className="text-sm sm:text-base font-bold text-foreground font-display truncate">
                                {skill.name}
                              </h3>
                              <p className="text-[11px] text-foreground/70 line-clamp-1 font-sans">
                                {skill.description}
                              </p>
                            </div>
                          </div>

                          {/* Bottom: Proficiency Bar */}
                          <div className="pt-2 border-t border-slate-200 dark:border-[#30363d]/60 font-mono">
                            <div className="flex justify-between items-center text-[10px] mb-1">
                              <span className="text-foreground/60">Proficiency</span>
                              <span className="text-accent font-bold">{skill.proficiency}%</span>
                            </div>
                            <div className="w-full h-1 bg-slate-200 dark:bg-[#0d1117] rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-accent to-[#3fb950] rounded-full"
                                style={{ width: `${skill.proficiency}%` }}
                              />
                            </div>
                          </div>
                        </SpotlightCard>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ) : (
            /* FULL UNLOCKED SKILLS SHOWCASE VIEW */
            <motion.div
              key="unlocked-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-6xl mx-auto space-y-6"
            >
              {/* Category Filter Pills */}
              <div className="flex flex-wrap justify-center gap-2 font-mono">
                {categories.map((category) => (
                  <Magnet key={category} magnetStrength={3} padding={15}>
                    <button
                      onClick={() => setActiveTab(category)}
                      className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                        activeTab === category
                          ? "bg-[#238636] border border-[#2ea043] text-white shadow-sm scale-105"
                          : "bg-slate-100 dark:bg-[#161b22] border border-slate-300 dark:border-[#30363d] text-foreground/80 hover:border-accent hover:text-accent"
                      }`}
                    >
                      {category}
                    </button>
                  </Magnet>
                ))}
              </div>

              {/* Full 15-Skills Showcase Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredUnlockedSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <AnimatedContent key={skill.id} distance={20} direction="vertical" delay={index * 40}>
                      <SpotlightCard 
                        className="h-full p-4 border border-slate-300 dark:border-[#30363d] hover:border-accent transition-all duration-300 shadow-md group"
                        spotlightColor="rgba(88, 166, 255, 0.18)"
                      >
                        <div className="flex items-center justify-between mb-3 font-mono">
                          <span className="px-2 py-0.5 rounded bg-black/10 text-accent text-xs font-bold border border-accent/30">
                            #{String(skill.initialIndex).padStart(2, "0")}
                          </span>
                          <span className="text-[11px] px-2 py-0.5 rounded bg-slate-200 dark:bg-[#161b22] text-foreground/80 font-semibold border border-slate-300 dark:border-[#30363d]">
                            {skill.category}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${skill.color} p-0.5 shadow-md flex-shrink-0 group-hover:scale-105 transition-transform`}>
                            <div className="w-full h-full bg-white dark:bg-[#161b22] rounded-[6px] flex items-center justify-center">
                              <IconComponent className="w-5 h-5 text-accent" />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-foreground font-display group-hover:text-accent transition-colors">
                              {skill.name}
                            </h3>
                            <span className="text-xs text-[#3fb950] font-mono font-semibold">Mastery: {skill.proficiency}%</span>
                          </div>
                        </div>

                        <p className="text-xs text-foreground/80 leading-relaxed mb-4 font-sans">
                          {skill.description}
                        </p>

                        <div className="space-y-1 font-mono">
                          <div className="w-full h-1.5 bg-slate-200 dark:bg-[#30363d] rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-accent via-sky-400 to-[#3fb950] rounded-full transition-all duration-1000"
                              style={{ width: `${skill.proficiency}%` }}
                            />
                          </div>
                        </div>
                      </SpotlightCard>
                    </AnimatedContent>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Motivational Banner */}
        <AnimatedContent distance={20} direction="vertical" delay={200} className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-[#161b22] border border-slate-300 dark:border-[#30363d] rounded-md font-mono text-xs text-foreground/80 shadow-sm">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>3.4+ Years Building Full Stack Systems & Agentic AI Architectures</span>
            <div className="w-1.5 h-1.5 bg-[#3fb950] rounded-full animate-ping" />
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}