'use client';

import { useEffect, useRef, useState } from 'react';

const ITALIC_WORDS = new Set(['Googling', 'patients']);

const REVEAL_LINES = [
  "Patients aren't Googling to find clinics anymore",
  "— they're just asking AI.",
  "Do you think AI will recommend your clinic",
  "to patients?",
];

function getOffsetTop(el: HTMLElement): number {
  let top = 0;
  let node: HTMLElement | null = el;
  while (node) {
    top += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return top;
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function RevealParagraph() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const el = outerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      el.querySelectorAll<HTMLElement>('.word').forEach((w) => {
        w.style.opacity = '1';
        w.style.filter = 'blur(0px)';
        w.style.transform = 'translateY(0px)';
      });
      return;
    }

    const wordEls = Array.from(el.querySelectorAll<HTMLElement>('.word'));
    if (wordEls.length === 0) return;

    wordEls.forEach((w) => {
      w.style.opacity = '0';
      w.style.filter = 'blur(10px)';
      w.style.transform = 'translateY(10px)';
      w.style.willChange = 'opacity, filter, transform';
    });

    let ticking = false;
    let cachedTop = -1;
    let cachedHeight = -1;
    let lastRecalc = 0;
    const RECALC_INTERVAL = 200;

    const update = () => {
      if (!el.isConnected) return;
      const now = performance.now();
      if (now - lastRecalc > RECALC_INTERVAL || cachedTop < 0) {
        cachedTop = getOffsetTop(el);
        cachedHeight = el.offsetHeight;
        lastRecalc = now;
      }
      const top = cachedTop;
      const height = cachedHeight;
      const vh = window.innerHeight;
      const scrollY = window.scrollY;

      const start = top;
      const end = top + height - vh;
      const range = end - start;

      if (range <= 0) {
        wordEls.forEach((w) => {
          w.style.opacity = '1';
          w.style.filter = 'blur(0px)';
          w.style.transform = 'translateY(0px)';
        });
        return;
      }

      const rawProgress = Math.max(0, Math.min(1, (scrollY - start) / range));
      const total = wordEls.length;
      const overlap = 0.6;
      const revealEnd = 0.88;

      for (let i = 0; i < total; i++) {
        const wordStart = (i / total) * (revealEnd - overlap / total);
        const wordEnd = wordStart + overlap / total + 1 / total;

        let lp: number;
        if (rawProgress <= wordStart) {
          lp = 0;
        } else if (rawProgress >= wordEnd) {
          lp = 1;
        } else {
          lp = (rawProgress - wordStart) / (wordEnd - wordStart);
        }

        const eased = easeInOutCubic(Math.max(0, Math.min(1, lp)));
        const blur = (1 - eased) * 10;
        const y = (1 - eased) * 10;

        wordEls[i].style.opacity = String(eased);
        wordEls[i].style.filter = `blur(${blur.toFixed(2)}px)`;
        wordEls[i].style.transform = `translateY(${y.toFixed(2)}px)`;
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        update();
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    const initTimeout = setTimeout(() => update(), 100);

    const onResize = () => { cachedTop = -1; cachedHeight = -1; };
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      clearTimeout(initTimeout);
    };
  }, [mounted]);

  const lineArrays = REVEAL_LINES.map(line => line.split(' '));

  return (
    <div
      ref={outerRef}
      className="reveal-outer bg-white"
      aria-label="AI search context"
    >
      <div className="reveal-sticky flex flex-col items-center justify-center px-8 sm:px-12 md:px-16 relative">
        {REVEAL_LINES.map((line, lineIdx) => (
          <p key={lineIdx} className={`reveal-text text-heading-xl whitespace-normal md:whitespace-nowrap text-center text-ps-ink ${lineIdx < REVEAL_LINES.length - 1 ? 'mb-2' : ''}`}>
            {mounted ? (
              lineArrays[lineIdx].map((w, i) => {
                const clean = w.replace(/[^a-zA-Z]/g, '');
                return (
                  <span
                    key={i}
                    className={`word${ITALIC_WORDS.has(clean) ? ' font-serif italic' : ''}`}
                    style={{ display: 'inline-block', transition: 'none' }}
                  >
                    {w}{i < lineArrays[lineIdx].length - 1 ? '\u00A0' : ''}
                  </span>
                );
              })
            ) : (
              line
            )}
          </p>
        ))}
      </div>
    </div>
  );
}
