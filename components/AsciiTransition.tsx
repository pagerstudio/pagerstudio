'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

const CHARS = '/\\|-_*<>[]=';

const CELL_W = 40;
const CELL_H = 30;
const FONT = '13px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';
const FONT_COLOR = '#ffffff';
const BG_COLOR = '#000000';

const RING_DELAY = 28;
const ENTER_MS = 600;
const HOLD_MS = 500;
const EXIT_MS = 550;
const CYCLE_MS = 100;
const CYCLE_RATIO = 0.06;

interface GridData {
  cols: number;
  rows: number;
  chars: string[];
  ring: number[];
  maxRing: number;
}

function buildGrid(w: number, h: number): GridData {
  const cols = Math.ceil(w / CELL_W);
  const rows = Math.ceil(h / CELL_H);
  const centerCol = (cols - 1) / 2;
  const centerRow = (rows - 1) / 2;
  const n = cols * rows;
  const chars = new Array<string>(n);
  const ring = new Array<number>(n);
  let maxRing = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const i = r * cols + c;
      const dist = Math.max(Math.abs(c - centerCol), Math.abs(r - centerRow));
      ring[i] = dist;
      if (dist > maxRing) maxRing = dist;
      chars[i] = CHARS[(Math.random() * CHARS.length) | 0];
    }
  }
  return { cols, rows, chars, ring, maxRing };
}

export default function AsciiTransition({ children }: { children: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();
  const prevPathname = useRef<string>('');
  const rafRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ivRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const phaseRef = useRef<'idle' | 'enter' | 'hold' | 'exit'>('idle');
  const gridRef = useRef<GridData | null>(null);
  const visRef = useRef<boolean[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = w + 'px';
      canvas!.style.height = h + 'px';
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      const g = gridRef.current;
      const v = visRef.current;
      if (!g || !ctx) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = FONT_COLOR;
      ctx.font = FONT;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      for (let i = 0; i < g.chars.length; i++) {
        if (!v[i]) continue;
        const col = i % g.cols;
        const row = (i / g.cols) | 0;
        ctx.fillText(g.chars[i], col * CELL_W + CELL_W / 2, row * CELL_H + CELL_H / 2);
      }
    }

    function cleanup() {
      if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = 0; }
      if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
      if (ivRef.current) { clearInterval(ivRef.current); ivRef.current = null; }
    }

    function startEnter() {
      const g = gridRef.current;
      if (!g) return;
      const n = g.chars.length;
      const vis = new Array<boolean>(n).fill(false);
      visRef.current = vis;
      phaseRef.current = 'enter';

      const maxDelay = (g.maxRing + 1) * RING_DELAY;
      const t0 = performance.now();

      function tick() {
        const elapsed = Math.min(performance.now() - t0, maxDelay + 100);
        for (let i = 0; i < n; i++) {
          vis[i] = elapsed >= g!.ring[i] * RING_DELAY;
        }
        draw();
        if (elapsed < maxDelay + 50) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          for (let i = 0; i < n; i++) vis[i] = true;
          draw();
          phaseRef.current = 'hold';
          startHold();
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    function startHold() {
      const g = gridRef.current;
      if (!g) return;
      const n = g.chars.length;

      ivRef.current = setInterval(() => {
        const count = Math.max(1, (n * CYCLE_RATIO) | 0);
        for (let i = 0; i < count; i++) {
          g.chars[(Math.random() * n) | 0] = CHARS[(Math.random() * CHARS.length) | 0];
        }
        draw();
      }, CYCLE_MS);

      timerRef.current = setTimeout(() => {
        if (ivRef.current) { clearInterval(ivRef.current); ivRef.current = null; }
        startExit();
      }, HOLD_MS);
    }

    function startExit() {
      const g = gridRef.current;
      if (!g) return;
      const n = g.chars.length;
      const vis = visRef.current;
      phaseRef.current = 'exit';

      let ring = g.maxRing;
      const t0 = performance.now();
      const maxRing = g.maxRing;

      function tick() {
        const elapsed = performance.now() - t0;
        const targetRing = maxRing - Math.min((elapsed / EXIT_MS) * (maxRing + 1), maxRing + 1);
        while (ring >= 0 && ring > targetRing) {
          for (let i = 0; i < n; i++) {
            if (g!.ring[i] === ring) vis[i] = false;
          }
          ring--;
        }
        draw();
        if (ring >= 0) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          phaseRef.current = 'idle';
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    function triggerAnimation() {
      cleanup();
      resize();
      const g = buildGrid(window.innerWidth, window.innerHeight);
      gridRef.current = g;
      if (reduce) {
        const n = g.chars.length;
        visRef.current = new Array<boolean>(n).fill(true);
        draw();
        phaseRef.current = 'hold';
        timerRef.current = setTimeout(() => {
          phaseRef.current = 'idle';
        }, HOLD_MS);
      } else {
        startEnter();
      }
    }

    function handleNav() {
      const newPath = window.location.pathname;
      if (newPath === prevPathname.current) return;
      prevPathname.current = newPath;
      triggerAnimation();
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && phaseRef.current !== 'idle') {
        cleanup();
        phaseRef.current = 'idle';
        const ctx2 = canvasRef.current?.getContext('2d');
        if (ctx2) {
          const dpr = window.devicePixelRatio || 1;
          ctx2.clearRect(0, 0, canvas!.width / dpr, canvas!.height / dpr);
        }
      }
    }

    resize();
    prevPathname.current = window.location.pathname;

    window.addEventListener('popstate', handleNav);
    window.addEventListener('resize', resize);
    window.addEventListener('keydown', handleKeyDown);

    const origPush = history.pushState;
    const origReplace = history.replaceState;
    history.pushState = function (...args) {
      origPush.apply(this, args);
      handleNav();
    };
    history.replaceState = function (...args) {
      origReplace.apply(this, args);
      handleNav();
    };

    return () => {
      cleanup();
      window.removeEventListener('popstate', handleNav);
      window.removeEventListener('resize', resize);
      window.removeEventListener('keydown', handleKeyDown);
      history.pushState = origPush;
      history.replaceState = origReplace;
    };
  }, [reduce]);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          pointerEvents: 'none',
          display: 'block',
        }}
      />
      {children}
    </>
  );
}
