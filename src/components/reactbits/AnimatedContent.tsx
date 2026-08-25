"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedContentProps {
  children: React.ReactNode;
  distance?: number;
  direction?: 'vertical' | 'horizontal';
  reverse?: boolean;
  config?: { tension?: number; friction?: number };
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  className?: string;
}

export const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 30,
  direction = 'vertical',
  reverse = false,
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  const axis = direction === 'vertical' ? 'y' : 'x';
  const offset = reverse ? -distance : distance;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: animateOpacity ? initialOpacity : 1,
        [axis]: offset,
        scale: scale !== 1 ? scale : 1,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              [axis]: 0,
              scale: 1,
            }
          : {
              opacity: animateOpacity ? initialOpacity : 1,
              [axis]: offset,
              scale: scale !== 1 ? scale : 1,
            }
      }
      transition={{
        duration: 0.6,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContent;
