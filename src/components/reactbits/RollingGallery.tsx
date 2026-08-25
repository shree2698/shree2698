"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, useMotionValue, useAnimation, useTransform, PanInfo } from "framer-motion";
import "./RollingGallery.css";

export interface RollingGalleryProps {
  images?: string[];
  autoplay?: boolean;
  pauseOnHover?: boolean;
  itemWidth?: number;
  gap?: number;
  className?: string;
  children?: React.ReactNode[];
}

export const RollingGallery: React.FC<RollingGalleryProps> = ({
  images = [],
  autoplay = true,
  pauseOnHover = true,
  itemWidth = 260,
  gap = 20,
  className = "",
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const items = useMemo(() => {
    if (children && children.length > 0) return children;
    return images;
  }, [children, images]);

  const count = items.length;
  const cylinderRadius = useMemo(() => {
    if (count === 0) return 300;
    const faceWidth = itemWidth + gap;
    return Math.max(300, Math.round(faceWidth / (2 * Math.tan(Math.PI / count))));
  }, [count, itemWidth, gap]);

  const angleStep = 360 / Math.max(1, count);
  const wrapPoint = 360;

  useEffect(() => {
    if (!autoplay || isDragging || (pauseOnHover && isHovered)) {
      controls.stop();
      return;
    }

    const startContinuousSpin = () => {
      const currentRot = rotation.get();
      controls.start({
        rotateY: currentRot - 360,
        transition: {
          ease: "linear",
          duration: 30,
          repeat: Infinity,
          onUpdate: (latest) => {
            if (typeof latest === "number") {
              rotation.set(latest % wrapPoint);
            }
          },
        },
      });
    };

    startContinuousSpin();

    return () => {
      controls.stop();
    };
  }, [autoplay, isDragging, isHovered, pauseOnHover, controls, rotation, wrapPoint]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Fallback if browser doesn't support pointer capture
    }
    setIsDragging(true);
    controls.stop();
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Fallback
    }
    setIsDragging(false);
  };

  const handlePan = (_: any, info: PanInfo) => {
    const currentRot = rotation.get();
    const newRot = currentRot + info.delta.x * 0.4;
    rotation.set(newRot % wrapPoint);
  };

  return (
    <div
      ref={containerRef}
      className={`rolling-gallery-container ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <motion.div
        className="rolling-gallery-track"
        style={{
          width: itemWidth,
          height: itemWidth * 0.7,
          rotateY: rotation,
        }}
        animate={controls}
        onPan={handlePan}
      >
        {items.map((item, index) => {
          const itemAngle = index * angleStep;
          const transform = `rotateY(${itemAngle}deg) translateZ(${cylinderRadius}px)`;

          return (
            <div
              key={index}
              className="rolling-gallery-item"
              style={{
                width: itemWidth,
                transform,
                WebkitTransform: transform,
              }}
            >
              {typeof item === "string" ? (
                <img
                  src={item}
                  alt={`gallery-item-${index}`}
                  className="w-full h-full object-cover rounded-lg shadow-xl border border-slate-700 pointer-events-none"
                  draggable={false}
                />
              ) : (
                item
              )}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default RollingGallery;
