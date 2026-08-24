"use client";

import { useEffect, useRef } from "react";

const CELL_SIZE = 60;
const FADE_DURATION = 500;
const THROTTLE_MS = 16;

export default function GridTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cellsRef = useRef<Map<string, number>>(new Map());
  const rafRef = useRef<number>(0);
  const lastMoveRef = useRef<number>(0);
  const idleRef = useRef(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const patternCanvas = document.createElement("canvas");
    patternCanvas.width = CELL_SIZE;
    patternCanvas.height = CELL_SIZE;
    const pctx = patternCanvas.getContext("2d")!;

    const spacing = 8;
    pctx.lineWidth = 1.5;
    pctx.lineCap = "round";
    pctx.strokeStyle = "black";
    for (let i = -CELL_SIZE; i <= CELL_SIZE * 2; i += spacing) {
      pctx.beginPath();
      pctx.moveTo(i, 0);
      pctx.lineTo(i - CELL_SIZE, CELL_SIZE);
      pctx.stroke();
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let running = true;

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = Date.now();

      const scrollX = window.scrollX;
      const scrollY = window.scrollY;

      cellsRef.current.forEach((time, key) => {
        const age = now - time;
        if (age > FADE_DURATION) {
          cellsRef.current.delete(key);
          return;
        }
        const opacity = 1 - age / FADE_DURATION;
        const [col, row] = key.split(",").map(Number);

        ctx.save();
        ctx.globalAlpha = opacity * 0.4;
        ctx.drawImage(patternCanvas, col * CELL_SIZE - scrollX, row * CELL_SIZE - scrollY);
        ctx.restore();
      });

      if (cellsRef.current.size > 0) {
        rafRef.current = requestAnimationFrame(draw);
      } else {
        idleRef.current = true;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMoveRef.current < THROTTLE_MS) return;
      lastMoveRef.current = now;
      const docX = e.clientX + window.scrollX;
      const docY = e.clientY + window.scrollY;
      const col = Math.floor(docX / CELL_SIZE);
      const row = Math.floor(docY / CELL_SIZE);
      const key = `${col},${row}`;
      cellsRef.current.set(key, now);

      if (idleRef.current) {
        idleRef.current = false;
        rafRef.current = requestAnimationFrame(draw);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleScroll = () => {
      if (cellsRef.current.size > 0 && idleRef.current) {
        idleRef.current = false;
        rafRef.current = requestAnimationFrame(draw);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      running = false;
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
