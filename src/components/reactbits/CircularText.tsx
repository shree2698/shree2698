"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./CircularText.css";

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
  className?: string;
}

export const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const [currentRotation, setCurrentRotation] = useState(0);

  useEffect(() => {
    controls.start({
      rotate: currentRotation + 360,
      scale: 1,
      transition: {
        ease: "linear",
        duration: spinDuration,
        repeat: Infinity,
      },
    });
  }, [spinDuration, controls, onHover, text]);

  const handleHoverStart = () => {
    if (!onHover) return;

    let duration = spinDuration;
    let scale = 1;

    switch (onHover) {
      case "slowDown":
        duration = spinDuration * 2;
        break;
      case "speedUp":
        duration = spinDuration / 4;
        break;
      case "pause":
        controls.stop();
        return;
      case "goBonkers":
        duration = spinDuration / 20;
        scale = 1.08;
        break;
      default:
        break;
    }

    controls.start({
      rotate: currentRotation + 360,
      scale,
      transition: {
        ease: "linear",
        duration,
        repeat: Infinity,
      },
    });
  };

  const handleHoverEnd = () => {
    controls.start({
      rotate: currentRotation + 360,
      scale: 1,
      transition: {
        ease: "linear",
        duration: spinDuration,
        repeat: Infinity,
      },
    });
  };

  return (
    <motion.div
      initial={{ rotate: 0 }}
      className={`circular-text ${className}`}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      onUpdate={(latest) => {
        if (typeof latest.rotate === "number") {
          setCurrentRotation(latest.rotate);
        }
      }}
    >
      {letters.map((letter, i) => {
        const rotation = (360 / letters.length) * i;
        const factor = Number((Math.PI / letters.length).toFixed(0));
        const x = factor * i;
        const y = factor * i;
        const transform = `rotateZ(${rotation}deg) translate3d(${x}px, ${y}px, 0)`;

        return (
          <span key={i} style={{ transform, WebkitTransform: transform }}>
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
