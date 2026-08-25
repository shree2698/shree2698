"use client";

import React, { useEffect, useRef, useState, useId } from "react";
import "./CurvedLoop.css";

export interface CurvedLoopProps {
  text?: string;
  speed?: number;
  direction?: "left" | "right";
  interactive?: boolean;
  className?: string;
  pathD?: string;
}

export const CurvedLoop: React.FC<CurvedLoopProps> = ({
  text = "NEXT.JS • REACT • AGENTIC AI • TYPESCRIPT • FULL STACK • MCP • PYTHON • ",
  speed = 1.2,
  direction = "left",
  interactive = true,
  className = "fill-foreground/90 font-mono tracking-widest text-sm md:text-base",
  pathD = "M -600,60 Q -150,110 360,60 Q 870,10 1380,60 Q 1890,110 2400,60",
}) => {
  const pathId = useId();
  const measureRef = useRef<SVGTextElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const textPathRef = useRef<SVGTextPathElement>(null);

  const [spacing, setSpacing] = useState(0);
  const [totalText, setTotalText] = useState("");
  const [ready, setReady] = useState(false);

  const offsetRef = useRef(0);
  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const velRef = useRef(0);
  const dirRef = useRef<"left" | "right">(direction);

  useEffect(() => {
    dirRef.current = direction;
  }, [direction]);

  useEffect(() => {
    if (!measureRef.current || !pathRef.current) return;

    const singleTextLen = Math.max(50, measureRef.current.getComputedTextLength() || 200);
    const pathLength = Math.max(1440, pathRef.current.getTotalLength() || 3000);

    // Repeat enough times to cover the extended curve 6x with large overflow buffer
    const repeatCount = Math.ceil((pathLength * 5) / singleTextLen) + 12;
    const repeated = Array(repeatCount).fill(text).join("");

    setSpacing(singleTextLen);
    setTotalText(repeated);

    const initial = -singleTextLen * 3;
    offsetRef.current = initial;
    if (textPathRef.current) {
      textPathRef.current.setAttribute("startOffset", `${initial}px`);
    }

    setReady(true);
  }, [text, className]);

  useEffect(() => {
    if (!spacing || !ready) return;

    let frame: number;

    const step = () => {
      if (!dragRef.current && textPathRef.current) {
        const delta = dirRef.current === "right" ? speed : -speed;
        let nextOffset = offsetRef.current + delta;

        // Seamless modulus infinite wrapping without any visual jump
        const wrap = spacing;
        if (wrap > 0) {
          while (nextOffset <= -wrap * 4) {
            nextOffset += wrap;
          }
          while (nextOffset > -wrap * 3) {
            nextOffset -= wrap;
          }
        }

        offsetRef.current = nextOffset;
        textPathRef.current.setAttribute("startOffset", `${nextOffset}px`);
      }
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [spacing, speed, ready]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!interactive) return;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Ignore
    }
    dragRef.current = true;
    lastXRef.current = e.clientX;
    velRef.current = 0;
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!interactive || !dragRef.current || !textPathRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velRef.current = dx;

    let nextOffset = offsetRef.current + dx;
    const wrap = spacing;
    if (wrap > 0) {
      while (nextOffset <= -wrap * 4) {
        nextOffset += wrap;
      }
      while (nextOffset > -wrap * 3) {
        nextOffset -= wrap;
      }
    }

    offsetRef.current = nextOffset;
    textPathRef.current.setAttribute("startOffset", `${nextOffset}px`);
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!interactive) return;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore
    }
    dragRef.current = false;
    dirRef.current = velRef.current > 0 ? "right" : "left";
  };

  const cursorStyle = interactive ? (dragRef.current ? "grabbing" : "grab") : "auto";

  return (
    <div
      className="curved-loop-jacket"
      style={{ visibility: ready ? "visible" : "hidden", cursor: cursorStyle }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <svg className="curved-loop-svg" viewBox="0 0 1440 120">
        <text
          ref={measureRef}
          xmlSpace="preserve"
          style={{ visibility: "hidden", opacity: 0, pointerEvents: "none", position: "absolute" }}
        >
          {text}
        </text>
        <defs>
          <path ref={pathRef} id={pathId} d={pathD} fill="none" stroke="transparent" />
        </defs>
        {ready && (
          <text fontWeight="bold" xmlSpace="preserve" className={className}>
            <textPath ref={textPathRef} href={`#${pathId}`} xmlSpace="preserve">
              {totalText}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
};

export default CurvedLoop;
