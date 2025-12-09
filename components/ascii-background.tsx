"use client";

import { useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*[]{}<>/\\";

// Configuration for easy toggling
const ENABLE_FLASHING = true;

export function AsciiBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;

    // Configuration
    const fontSize = 12;
    const charWidth = 7; // Adjust based on SF Mono measurement
    const updateProbability = 0.005; // Chance to update a character per frame

    // Offset to center the grid
    let offsetX = 0;
    let offsetY = 0;

    const grid: string[] = [];
    const alphas: number[] = [];

    const initGrid = (c: number, r: number) => {
      grid.length = 0;
      alphas.length = 0;
      for (let i = 0; i < c * r; i++) {
        grid.push(CHARS[Math.floor(Math.random() * CHARS.length)]);
        alphas.push(0.1); // Base opacity
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      // Handle high DPI displays
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // CSS size
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      cols = Math.ceil(width / charWidth);
      rows = Math.ceil(height / fontSize);

      // Calculate offset to center the grid content
      offsetX = (width - cols * charWidth) / 2;
      offsetY = (height - rows * fontSize) / 2;

      initGrid(cols, rows);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.font = `${fontSize}px "SF Mono", monospace`;
      ctx.textBaseline = "top";

      // We'll use a hardcoded color that matches the theme's primary/foreground but faint
      // Using a low opacity white/light color assuming dark mode or vice versa
      // Ideally we'd read the CSS variable, but for a "faint animation" valid CSS color strings work best
      // ctx.fillStyle = "currentColor"; // This allows the parent color to cascade, but canvas doesn't support currentColor directly in fillStyle usually?
      // Actually canvas fillStyle doesn't support currentColor.
      // We'll rely on the canvas class setting the color and us using a concrete color here.
      // Let's use a standard muted color.
      // ctx.fillStyle = "#ffffff"; // Base color, opacity handled by globalAlpha
      // ctx.globalAlpha = 0.1; // Very faint

      // Update and draw
      const totalChars = cols * rows;
      for (let i = 0; i < totalChars; i++) {
        // Randomly update character
        if (Math.random() < updateProbability) {
          grid[i] = CHARS[Math.floor(Math.random() * CHARS.length)];
          if (ENABLE_FLASHING) {
            alphas[i] = 0.25; // Flash to higher opacity
          }
        }

        // Decay opacity back to base 0.1
        if (alphas[i] > 0.1) {
          alphas[i] = Math.max(0.1, alphas[i] - 0.01); // Decay speed
        }

        const col = i % cols;
        const row = Math.floor(i / cols);

        ctx.fillStyle = `rgba(255, 255, 255, ${alphas[i]})`;
        ctx.fillText(
          grid[i],
          col * charWidth + offsetX,
          row * fontSize + offsetY
        );
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 text-primary"
      aria-hidden="true"
    />
  );
}
