'use client';

import { useEffect, useRef } from 'react';

const CELL = 5;
const GAP = 3;
const STEP = CELL + GAP;
const IDLE_TIMEOUT = 1500;
const SETTLE_BRIGHTNESS = 0.005;
const AMBIENT_BASE = 0.035;
const AMBIENT_VARIANCE = 0.03;

export default function PixelGrid() {
  const ref = useRef<HTMLCanvasElement>(null);
  const visibleRef = useRef(true);
  const tabVisibleRef = useRef(true);

  useEffect(() => {
    const cvs = ref.current;
    if (!cvs) return;
    const canvas = cvs;
    const ctx = canvas.getContext('2d')!;
    const parent = canvas.parentElement as HTMLElement;

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reducedMotion = reducedMotionQuery.matches;

    let cols = 0, rows = 0;
    let brightness: Float32Array = new Float32Array(0);
    let fadeDelay: Float32Array = new Float32Array(0);
    let fadeSpeedArr: Float32Array = new Float32Array(0);
    let pixelSize: Float32Array = new Float32Array(0);
    let ambientPhase: Float32Array = new Float32Array(0);
    let ambientSpeed: Float32Array = new Float32Array(0);
    let shimmerDone = false;
    let raf = 0;
    let lastDrawTime = 0;
    const AMBIENT_FRAME_INTERVAL = 80;
    let lastX = -1, lastY = -1;
    let lastMoveTime = 0;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();
      const w = Math.floor(rect.width);
      const h = Math.floor(rect.height);
      if (!w || !h) return;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.floor(w / STEP);
      rows = Math.floor(h / STEP);
      const total = cols * rows;
      brightness = new Float32Array(total);
      fadeDelay = new Float32Array(total);
      fadeSpeedArr = new Float32Array(total);
      pixelSize = new Float32Array(total);
      ambientPhase = new Float32Array(total);
      ambientSpeed = new Float32Array(total);
      shimmerDone = false;

      for (let i = 0; i < total; i++) {
        ambientPhase[i] = Math.random() * Math.PI * 2;
        ambientSpeed[i] = 0.0005 + Math.random() * 0.001;
      }
    }

    function shimmer() {
      if (reducedMotion || cols === 0 || rows === 0) return;
      const totalWidth = cols * STEP;
      const sweepWidth = totalWidth * 0.35;
      const duration = 2400;
      const start = performance.now();

      function tickShimmer(now: number) {
        const elapsed = now - start;
        const t = Math.min(elapsed / duration, 1);
        const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        const sweepX = ease * (totalWidth + sweepWidth * 2) - sweepWidth;

        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const x = c * STEP;
            if (x + CELL > canvas.width / (window.devicePixelRatio || 1)) continue;
            const dist = x - sweepX;
            if (dist > -sweepWidth && dist < sweepWidth) {
              const norm = 1 - Math.abs(dist) / sweepWidth;
              const smooth = norm * norm * (3 - 2 * norm);
              const intensity = smooth * (0.2 + smooth * 0.3);
              const idx = r * cols + c;

              const wave = Math.sin(norm * Math.PI) * 0.6 + 0.4;
              pixelSize[idx] = CELL + smooth * 3 * wave;

              if (intensity > brightness[idx]) {
                brightness[idx] = intensity;
                fadeDelay[idx] = 0;
                fadeSpeedArr[idx] = 0.008 + Math.random() * 0.008;
              }
            }
          }
        }

        wake();

        if (t < 1) {
          requestAnimationFrame(tickShimmer);
        } else {
          shimmerDone = true;
          for (let i = 0; i < cols * rows; i++) {
            pixelSize[i] = CELL;
          }
        }
      }

      requestAnimationFrame(tickShimmer);
    }

    function lightPath(x: number, y: number, px: number, py: number) {
      const dx = x - px;
      const dy = y - py;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const steps = Math.max(1, Math.ceil(dist / (STEP / 2)));

      for (let i = 0; i <= steps; i++) {
        if (Math.random() < 0.35) continue;
        const t = i / steps;
        const ix = px + dx * t;
        const iy = py + dy * t;
        const gc = Math.floor(ix / STEP);
        const gr = Math.floor(iy / STEP);

        for (let s = 0; s < 36; s++) {
          const angle = Math.random() * Math.PI * 2;
          const r2 = Math.random() * 14;
          const c = gc + Math.round(Math.cos(angle) * r2);
          const r = gr + Math.round(Math.sin(angle) * r2);
          if (c < 0 || r < 0 || c >= cols || r >= rows) continue;
          const idx = r * cols + c;
          if (brightness[idx] > 0.01) continue;
          brightness[idx] = 0.3 + Math.random() * 0.3;
          fadeDelay[idx] = Math.floor(Math.random() * 20 + 5);
          fadeSpeedArr[idx] = 0.03 + Math.random() * 0.05;
        }
      }
    }

    function draw(): boolean {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      const now = performance.now();
      let anyLit = false;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * STEP;
          const y = r * STEP;
          if (x + CELL > w || y + CELL > h) continue;

          const idx = r * cols + c;

          if (shimmerDone && brightness[idx] < AMBIENT_BASE * 0.5) {
            const blink = Math.sin(now * ambientSpeed[idx] + ambientPhase[idx]);
            const ambientVal = AMBIENT_BASE + blink * AMBIENT_VARIANCE * 0.5;
            const flicker = Math.random() < 0.003 ? AMBIENT_VARIANCE * 2 : 0;
            const finalAlpha = Math.max(0.01, ambientVal + flicker);
            ctx.fillStyle = `rgba(255,255,255,${finalAlpha})`;
            const size = CELL;
            ctx.fillRect(c * STEP + (CELL - size) / 2, r * STEP + (CELL - size) / 2, size, size);
            continue;
          }

          if (brightness[idx] < SETTLE_BRIGHTNESS) continue;

          anyLit = true;

          if (fadeDelay[idx] > 0) {
            fadeDelay[idx]--;
          } else {
            const target = shimmerDone ? AMBIENT_BASE : 0;
            if (shimmerDone) {
              brightness[idx] = Math.max(target, brightness[idx] - fadeSpeedArr[idx] * 0.5);
              if (brightness[idx] <= target + 0.01) {
                brightness[idx] = 0;
              }
            } else {
              brightness[idx] = Math.max(0, brightness[idx] - fadeSpeedArr[idx]);
            }
          }

          const alpha = brightness[idx] * 0.2;
          if (alpha < 0.005) continue;

          const size = pixelSize[idx] || CELL;
          const offset = (CELL - size) / 2;

          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.fillRect(c * STEP + offset, r * STEP + offset, size, size);
        }
      }

      if (shimmerDone && !anyLit) return true;
      return anyLit;
    }

    function tick(timestamp: number) {
      if (reducedMotion || !visibleRef.current || !tabVisibleRef.current) {
        raf = 0;
        return;
      }

      const idleForAWhile = performance.now() - lastMoveTime > IDLE_TIMEOUT;

      if (idleForAWhile && shimmerDone) {
        if (timestamp - lastDrawTime < AMBIENT_FRAME_INTERVAL) {
          raf = requestAnimationFrame(tick);
          return;
        }
        lastDrawTime = timestamp;
      }

      draw();

      if (idleForAWhile && shimmerDone) {
        raf = requestAnimationFrame(tick);
      } else if (!idleForAWhile) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    }

    function wake() {
      if (reducedMotion || !visibleRef.current || !tabVisibleRef.current) return;
      if (!raf) raf = requestAnimationFrame(tick);
    }

    function handleMove(x: number, y: number) {
      if (reducedMotion) return;
      if (lastX >= 0) {
        const dx = x - lastX;
        const dy = y - lastY;
        if (dx * dx + dy * dy < 4) return;
      }
      lightPath(x, y, lastX < 0 ? x : lastX, lastY < 0 ? y : lastY);
      lastX = x;
      lastY = y;
      lastMoveTime = performance.now();
      wake();
    }

    function onPointerMove(e: PointerEvent) {
      const rect = parent.getBoundingClientRect();
      handleMove(e.clientX - rect.left, e.clientY - rect.top);
    }

    function onTouchMove(e: TouchEvent) {
      const rect = parent.getBoundingClientRect();
      const touch = e.touches[0];
      if (touch) {
        handleMove(touch.clientX - rect.left, touch.clientY - rect.top);
      }
    }

    function onPointerLeave() {
      lastX = -1;
      lastY = -1;
    }

    function onTouchEnd() {
      lastX = -1;
      lastY = -1;
    }

    function onReducedMotionChange(e: MediaQueryListEvent) {
      reducedMotion = e.matches;
      if (reducedMotion) {
        cancelAnimationFrame(raf);
        raf = 0;
        const dpr = window.devicePixelRatio || 1;
        ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      } else {
        wake();
      }
    }

    function onVisibilityChange() {
      tabVisibleRef.current = !document.hidden;
      if (!document.hidden) {
        wake();
      } else if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    }

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          wake();
        } else if (raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { rootMargin: '200px' }
    );
    intersectionObserver.observe(parent);

    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    resize();
    shimmer();

    parent.addEventListener('pointermove', onPointerMove);
    parent.addEventListener('pointerleave', onPointerLeave);
    parent.addEventListener('touchmove', onTouchMove, { passive: true });
    parent.addEventListener('touchend', onTouchEnd);
    document.addEventListener('visibilitychange', onVisibilityChange);
    reducedMotionQuery.addEventListener('change', onReducedMotionChange);

    return () => {
      cancelAnimationFrame(raf);
      raf = 0;
      intersectionObserver.disconnect();
      ro.disconnect();
      parent.removeEventListener('pointermove', onPointerMove);
      parent.removeEventListener('pointerleave', onPointerLeave);
      parent.removeEventListener('touchmove', onTouchMove);
      parent.removeEventListener('touchend', onTouchEnd);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      reducedMotionQuery.removeEventListener('change', onReducedMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}
