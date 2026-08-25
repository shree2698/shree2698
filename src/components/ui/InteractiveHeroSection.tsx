"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Code2, Sparkles, X, Play, RotateCcw } from 'lucide-react';
import { useTheme } from 'next-themes';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  delay: number;
}

const InteractiveHeroSection: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDarkMode = resolvedTheme === 'dark';
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'won'>('idle');
  const [score, setScore] = useState(0);
  const [targetCode, setTargetCode] = useState('');
  const [userInput, setUserInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Code snippets for the typing game
  const codeSnippets = React.useMemo(() => [
    'const hello = () => "Hello World!";',
    'function fibonacci(n: number) { return n <= 1 ? n : fibonacci(n-1) + fibonacci(n-2); }',
    'const quickSort = (arr: number[]) => arr.length <= 1 ? arr : [...quickSort(arr.slice(1).filter(x => x <= arr[0])), arr[0], ...quickSort(arr.slice(1).filter(x => x > arr[0]))];',
    'const debounce = (func: Function, delay: number) => { let id: any; return (...args: any[]) => { clearTimeout(id); id = setTimeout(() => func(...args), delay); }; };',
    'const memoize = (fn: Function) => { const cache: Record<string, any> = {}; return (...args: any[]) => cache[JSON.stringify(args)] ??= fn(...args); };'
  ], []);

  // Generate random sparkle positions and colors
  const generateSparkles = useCallback(() => {
    const colors = ['#60A5FA', '#F472B6', '#34D399', '#FBBF24', '#A78BFA'];
    const newSparkles: Sparkle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 4,
      delay: Math.random() * 2
    }));
    setSparkles(newSparkles);
  }, []);

  const handleSparkleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    generateSparkles();
  };

  // Start coding game
  const startGame = useCallback(() => {
    const randomCode = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    setTargetCode(randomCode);
    setUserInput('');
    setScore(0);
    setTimeLeft(30);
    setGameState('playing');
  }, [codeSnippets]);

  // Reset game
  const resetGame = () => {
    setGameState('idle');
    setScore(0);
    setUserInput('');
    setTargetCode('');
    setTimeLeft(30);
  };

  // Handle typing
  const handleTyping = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setUserInput(value);
    
    // Calculate accuracy
    let correct = 0;
    for (let i = 0; i < Math.min(value.length, targetCode.length); i++) {
      if (value[i] === targetCode[i]) correct++;
    }
    
    const accuracy = value.length > 0 ? (correct / value.length) * 100 : 0;
    setScore(Math.round(accuracy));
    
    // Check if completed
    if (value === targetCode) {
      setGameState('won');
    }
  };

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0 && gameState === 'playing') {
      setGameState('idle');
    }
    return () => clearTimeout(timer);
  }, [timeLeft, gameState]);

  // Initialize sparkles
  useEffect(() => {
    if (mounted) {
      generateSparkles();
    }
  }, [mounted, generateSparkles]);

  // Animated code rain effect
  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth || 350;
    canvas.height = canvas.offsetHeight || 350;
    
    const chars = '01{}[]();<>+-*=/.,:;|&%$#@!?abcdefghijklmnopqrstuvwxyz';
    const drops: number[] = [];
    
    for (let i = 0; i < Math.floor(canvas.width / 16); i++) {
      drops[i] = Math.floor(Math.random() * -20);
    }
    
    let animationFrameId: number;
    let lastTime = 0;
    const fps = 20;
    const interval = 1000 / fps;
    let isCancelled = false;

    function draw(currentTime: number) {
      if (isCancelled) return;
      animationFrameId = requestAnimationFrame(draw);
      
      const delta = currentTime - lastTime;
      if (delta < interval) return;
      lastTime = currentTime - (delta % interval);

      if (!ctx || !canvas) return;
      ctx.fillStyle = isDarkMode ? 'rgba(1, 4, 9, 0.15)' : 'rgba(255, 255, 255, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = isDarkMode ? '#58a6ff' : '#0969da';
      ctx.font = '13px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 16, drops[i] * 16);
        
        if (drops[i] * 16 > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
    
    animationFrameId = requestAnimationFrame(draw);
    return () => {
      isCancelled = true;
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted, isDarkMode]);

  const openFullscreen = () => {
    setIsFullscreen(true);
    startGame();
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    resetGame();
  };

  if (!mounted) {
    return (
      <div className="relative w-full h-full min-h-[320px] rounded-lg overflow-hidden bg-slate-100 dark:bg-[#0d1117] flex items-center justify-center">
        <div className="text-5xl font-mono text-accent">{'</>'}</div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[320px]">
      {/* Sparkle Elements */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full animate-ping cursor-pointer pointer-events-none"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: sparkle.color,
            animationDelay: `${sparkle.delay}s`,
            opacity: 0.5,
          }}
        />
      ))}

      {/* Main Interactive Container */}
      <div 
        className="relative w-full h-full rounded-lg overflow-hidden cursor-pointer group"
        onClick={openFullscreen}
        role="button"
        tabIndex={0}
        aria-label="Launch interactive coding challenge"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openFullscreen();
          }
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20 z-10" />
        
        {/* Animated Code Rain Background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-40"
        />
        
        {/* Interactive Code Display */}
        <div className="absolute inset-0 flex items-center justify-center z-20 p-6">
          <div className="text-center space-y-3">
            <div className="text-5xl md:text-6xl font-mono text-accent group-hover:text-emerald-400 transition-colors duration-300">
              {'</>'}
            </div>
            <div className="text-lg text-foreground font-semibold font-display">
              Interactive Code Challenge
            </div>
            <p className="text-xs text-foreground/70 font-sans">
              Click to test your typing & coding skills!
            </p>
            <div className="inline-flex items-center justify-center space-x-2 mt-2 px-3 py-1.5 rounded-md bg-accent/10 border border-accent/30 text-accent text-xs font-medium group-hover:bg-[#238636] group-hover:text-white group-hover:border-[#2ea043] transition-all duration-300 font-mono">
              <Play className="w-3.5 h-3.5" />
              <span>Click to Play</span>
            </div>
          </div>
        </div>

        {/* Floating Badges */}
        <div className="absolute top-4 right-4 z-30 p-2 bg-background/80 backdrop-blur-md rounded-md border border-border/40 shadow-sm">
          <Code2 className="w-4 h-4 text-accent animate-pulse" />
        </div>
        <div 
          className="absolute bottom-4 left-4 z-30 p-2 bg-background/80 backdrop-blur-md rounded-md border border-border/40 hover:bg-accent/20 transition-colors cursor-pointer"
          onClick={handleSparkleClick}
          aria-label="Refresh animations"
          role="button"
          tabIndex={0}
        >
          <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse delay-300" />
        </div>
      </div>

      {/* Fullscreen Game Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Code Typing Challenge"
        >
          <div className="w-full max-w-2xl bg-card text-card-foreground rounded-2xl border border-border shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-foreground">Code Typing Challenge</h2>
                  {gameState === 'playing' && (
                    <div className="flex items-center space-x-3 text-xs mt-0.5">
                      <span className="text-emerald-500 font-semibold">Accuracy: {score}%</span>
                      <span className="text-amber-500 font-semibold">Time: {timeLeft}s</span>
                    </div>
                  )}
                </div>
              </div>
              <button
                onClick={closeFullscreen}
                className="p-2 hover:bg-muted rounded-lg transition-colors text-foreground/60 hover:text-foreground"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Game Content */}
            <div className="p-6 min-h-[320px]">
              {gameState === 'idle' && (
                <div className="text-center space-y-4 py-6">
                  <div className="text-5xl">⚡</div>
                  <h3 className="text-xl font-bold text-foreground">Ready to Code?</h3>
                  <p className="text-sm text-foreground/70 max-w-md mx-auto">
                    Type the code snippet as accurately and quickly as possible before the timer runs out!
                  </p>
                  <button
                    onClick={startGame}
                    className="px-6 py-2.5 bg-gradient-to-r from-accent to-cta hover:opacity-90 text-white rounded-xl font-medium transition-all inline-flex items-center space-x-2 shadow-lg shadow-accent/20"
                  >
                    <Play className="w-4 h-4" />
                    <span>Start Challenge</span>
                  </button>
                </div>
              )}

              {gameState === 'playing' && (
                <div className="space-y-4">
                  <div className="bg-muted/60 rounded-xl p-4 border border-border">
                    <h4 className="text-xs text-foreground/60 mb-2 font-medium uppercase tracking-wider">Type this code snippet:</h4>
                    <pre className="text-accent font-mono text-sm leading-relaxed whitespace-pre-wrap select-none">
                      {targetCode}
                    </pre>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="user-code-input" className="text-xs text-foreground/70 font-medium">Your input:</label>
                    <textarea
                      id="user-code-input"
                      value={userInput}
                      onChange={handleTyping}
                      className="w-full h-28 bg-background border border-border rounded-xl p-3.5 text-foreground font-mono text-sm resize-none focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
                      placeholder="Start typing here..."
                      autoFocus
                    />
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <button
                      onClick={resetGame}
                      className="px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-lg text-xs font-medium transition-colors inline-flex items-center space-x-1.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset</span>
                    </button>
                    <span className="text-xs text-foreground/60 font-mono">
                      {userInput.length} / {targetCode.length} chars
                    </span>
                  </div>
                </div>
              )}

              {gameState === 'won' && (
                <div className="text-center space-y-4 py-6">
                  <div className="text-5xl">🎉</div>
                  <h3 className="text-2xl font-bold text-emerald-500">Awesome Job!</h3>
                  <p className="text-sm text-foreground/70">
                    You completed the challenge with <strong className="text-accent">{score}% accuracy</strong>!
                  </p>
                  <div className="flex justify-center space-x-3 pt-2">
                    <button
                      onClick={startGame}
                      className="px-5 py-2 bg-gradient-to-r from-accent to-cta text-white rounded-xl text-sm font-medium transition-all shadow-md"
                    >
                      Play Again
                    </button>
                    <button
                      onClick={closeFullscreen}
                      className="px-5 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-xl text-sm font-medium transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveHeroSection;