"use client";

import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*[]{}<>/\\";

export function AsciiBorder() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  if (!mounted) return null;

  // Approximate character size in pixels for monospace font (adjust as needed)
  // Reducing width calculation slightly to ensure we overestimate columns and cover full width
  const charWidth = 6;
  const charHeight = 10;

  const cols = Math.ceil(dimensions.width / charWidth) + 20; // Add extra buffer
  const rows = Math.ceil(dimensions.height / charHeight);

  const generateLine = (length: number) => {
    return Array.from(
      { length },
      () => CHARS[Math.floor(Math.random() * CHARS.length)]
    ).join("");
  };

  const generateVerticalLine = (length: number) => {
    return Array.from({ length }, () => {
      // Higher density: almost always return a character
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    }).join("\n");
  };

  return (
    <div
      style={{ fontFamily: "SF Mono" }}
      className="absolute top-0 left-0 w-full h-screen pointer-events-none z-50 font-mono text-[10px] leading-[12px] text-primary font-bold opacity-50 overflow-hidden"
    >
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full whitespace-nowrap overflow-hidden">
        {generateLine(cols)}
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full whitespace-nowrap overflow-hidden">
        {generateLine(cols)}
      </div>

      {/* Left Border */}
      <div className="absolute top-0 left-0 h-full w-[1ch] whitespace-pre overflow-hidden flex flex-col">
        {generateVerticalLine(rows)}
      </div>

      {/* Right Border */}
      <div className="absolute top-0 right-0 h-full w-[1ch] whitespace-pre overflow-hidden flex flex-col text-right items-end">
        {generateVerticalLine(rows)}
      </div>
    </div>
  );
}
