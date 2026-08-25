"use client";

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  onAnimationComplete?: () => void;
}

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.05,
  rootMargin = '0px',
  onAnimationComplete,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '50px 0px 0px 0px' });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const elements = useMemo(() => {
    return animateBy === 'words' ? text.split(' ') : text.split('');
  }, [text, animateBy]);

  const yOffset = direction === 'top' ? -14 : 14;

  const isAnimated = mounted && inView;

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {elements.map((element, index) => {
        const isSpace = element === ' ';
        const displayChar = isSpace ? '\u00A0' : element;

        return (
          <motion.span
            key={index}
            initial={{ filter: 'blur(8px)', opacity: 0, y: yOffset }}
            animate={
              isAnimated
                ? { filter: 'blur(0px)', opacity: 1, y: 0 }
                : { filter: 'blur(8px)', opacity: 0, y: yOffset }
            }
            transition={{
              duration: 0.4,
              delay: (index * delay) / 1000,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
            className="inline-block will-change-transform"
            style={{
              display: 'inline-block',
              color: 'inherit',
              WebkitBackgroundClip: 'inherit',
              backgroundClip: 'inherit',
            }}
          >
            {displayChar}
            {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </motion.span>
        );
      })}
    </span>
  );
};

export default BlurText;
