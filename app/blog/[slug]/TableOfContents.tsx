'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import type { TocEntry } from '@/lib/toc';

export default function TableOfContents({ headings }: { headings: TocEntry[] }) {
  const [activeId, setActiveId] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (headings.length === 0) return;

    const headingElements = headings
      .map((h) => document.getElementById(h.id))
      .filter(Boolean) as HTMLElement[];

    if (headingElements.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      }
    );

    for (const el of headingElements) {
      observerRef.current.observe(el);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [headings]);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  if (headings.length === 0) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={prefersReducedMotion ? {} : { opacity: 0, x: 10 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
          exit={prefersReducedMotion ? {} : { opacity: 0, x: 10 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hidden xl:block fixed right-[max(1rem,calc((100vw-680px)/2-280px))] top-[120px] w-[220px] z-[50]"
          aria-label="Table of contents"
        >
          <div className="border-l border-ps-line pl-4">
            <p className="font-sans text-[11px] font-semibold text-ps-muted tracking-widest uppercase mb-3">
              On this page
            </p>
            <ul className="flex flex-col gap-0.5">
              {headings.map((h) => {
                const isActive = activeId === h.id;
                return (
                  <li key={h.id}>
                    <button
                      onClick={() => scrollTo(h.id)}
                      className={`group flex items-center gap-2 w-full text-left transition-colors duration-150 ${
                        h.level === 3 ? 'pl-3' : ''
                      }`}
                    >
                      <span
                        className={`block w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-200 ${
                          isActive
                            ? 'bg-ps-ink scale-110'
                            : 'bg-ps-line group-hover:bg-ps-faint'
                        }`}
                      />
                      <span
                        className={`font-sans text-[12px] leading-[1.4] transition-colors duration-150 line-clamp-2 ${
                          isActive
                            ? 'text-ps-ink font-medium'
                            : 'text-ps-faint group-hover:text-ps-muted'
                        }`}
                      >
                        {h.text}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
