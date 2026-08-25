"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: 'hover' | 'view';
}

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 40,
  maxIterations = 12,
  sequential = true,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+~`|}{[]:;?><,./-=',
  className = '',
  parentClassName = '',
  encryptedClassName = 'text-accent opacity-80',
  animateOn = 'hover',
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-20px' });

  const getAvailableChars = () => {
    return useOriginalCharsOnly
      ? Array.from(new Set(text.split(''))).filter((c) => c !== ' ')
      : characters.split('');
  };

  const shuffleText = (currentText: string, originalText: string, revealed: Set<number>) => {
    const available = getAvailableChars();
    return originalText
      .split('')
      .map((char, i) => {
        if (char === ' ') return ' ';
        if (revealed.has(i)) return originalText[i];
        return available[Math.floor(Math.random() * available.length)];
      })
      .join('');
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let iteration = 0;

    const shouldAnimate =
      (animateOn === 'view' && isInView) || (animateOn === 'hover' && isHovering);

    if (shouldAnimate) {
      setIsScrambling(true);
      interval = setInterval(() => {
        setRevealedIndices((prev) => {
          const next = new Set(prev);
          if (sequential) {
            if (revealDirection === 'start') {
              next.add(next.size);
            } else if (revealDirection === 'end') {
              next.add(text.length - 1 - next.size);
            } else {
              const center = Math.floor(text.length / 2);
              const offset = Math.floor(next.size / 2);
              next.add(center + (next.size % 2 === 0 ? offset : -offset));
            }
          } else {
            next.add(Math.floor(Math.random() * text.length));
          }
          return next;
        });

        iteration++;
        if (iteration >= maxIterations || revealedIndices.size >= text.length) {
          clearInterval(interval);
          setIsScrambling(false);
          setDisplayText(text);
        }
      }, speed);
    } else {
      setDisplayText(text);
      setRevealedIndices(new Set());
    }

    return () => clearInterval(interval);
  }, [isHovering, isInView, animateOn, text, speed, maxIterations, sequential, revealDirection]);

  useEffect(() => {
    if (isScrambling) {
      setDisplayText(shuffleText(displayText, text, revealedIndices));
    }
  }, [revealedIndices, isScrambling, text]);

  return (
    <span
      ref={containerRef}
      className={`inline-block whitespace-pre-wrap cursor-default ${parentClassName}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className={className}>
        {displayText.split('').map((char, index) => {
          const isRevealedOrDone = revealedIndices.has(index) || !isScrambling;
          return (
            <span
              key={index}
              className={isRevealedOrDone ? className : encryptedClassName}
            >
              {char}
            </span>
          );
        })}
      </span>
    </span>
  );
};

export default DecryptedText;
