'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent, useReducedMotion, motion } from 'framer-motion';
import { steps } from '@/data/steps';
import TiltCard from './TiltCard';

/* ── Mobile static layout ──────────────────────────────────── */
function HowWeWorkMobile() {
  return (
    <section className="section-black py-16 px-5 sm:px-6" id="how-we-work">
      <div className="text-center mb-10">
        <motion.h2
          className="text-heading-xl text-white"
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          How we <span className="font-serif italic">work</span>
        </motion.h2>
        <motion.p
          className="text-body-sm mt-3 text-white/60"
          initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Every step brings your clinic closer to the name AI recommends.
        </motion.p>
      </div>

      <div className="max-w-[600px] mx-auto flex flex-col gap-5">
        {steps.map((s, i) => (
          <TiltCard
            key={i}
            className="rounded-[20px] p-6 border border-white/15 bg-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            intensity={6}
          >
            <div className="text-display-lg text-white mb-3 select-none">
              {(i + 1).toString().padStart(2, '0')}
            </div>
            <span className="text-caption-sm text-white/50 block mb-2">
              {s.step}
            </span>
            <h3 className="text-heading-md text-white mb-3">
              <span className="font-serif italic">{s.title}</span>
              <br />
              <span className="text-white/60">{s.titleBreak}</span>
            </h3>
            <p className="text-body-sm text-white/60 mb-4">{s.body}</p>
            <ul className="flex flex-col gap-2">
              {s.bullets.map((b) => (
                <li
                  key={b}
                  className="text-body-sm pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[6px] before:w-1.5 before:h-1.5 before:rounded-full text-white before:bg-white/30"
                >
                  {b}
                </li>
              ))}
            </ul>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}

/* ── Desktop scroll-pinned layout ──────────────────────────── */
export default function HowWeWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const activeIndexRef = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    setMounted(true);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (!mounted || isMobile) return;
    const idx = Math.min(steps.length - 1, Math.floor(latest * steps.length));
    if (idx !== activeIndexRef.current) {
      activeIndexRef.current = idx;
      setActiveIndex(idx);
    }
  });

  if (mounted && isMobile) {
    return <HowWeWorkMobile />;
  }

  const s = steps[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="how-work-outer relative bg-white"
      id="how-we-work"
    >
      <div className="how-we-work-sticky how-work-sticky flex flex-col justify-center">
        <div className="text-center mb-12">
          <motion.h2
            className="text-heading-xl text-ps-ink"
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
          How we <span className="font-serif italic">work</span>
          </motion.h2>
          <motion.p
            className="text-body-sm mt-4 text-ps-muted"
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Every step brings your clinic closer to the name AI recommends.
          </motion.p>
        </div>

        <div className="container w-full grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="text-display-xl mb-6 select-none text-ps-ink">
              {(activeIndex + 1).toString().padStart(2, '0')}
            </div>
            <div className="flex gap-2">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-[3px] flex-1 rounded-full transition-all duration-[1800ms] ease-out ${
                    i <= activeIndex ? 'bg-ps-ink' : 'bg-ps-line/50'
                  }`}
                />
              ))}
            </div>
          </div>

          <TiltCard
            key={activeIndex}
            className="rounded-[20px] p-8 md:p-10 border border-ps-line shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)]"
            intensity={6}
          >
            <span className="text-caption-sm block mb-3 text-ps-muted">
              {s.step}
            </span>
            <h3 className="text-heading-lg mb-5 text-ps-ink">
              <span className="font-serif italic">{s.title}</span>
              <br />
              <span className="text-ps-muted">{s.titleBreak}</span>
            </h3>
            <p className="text-body-sm mb-6 max-w-[520px] text-ps-muted">{s.body}</p>
            <ul className="flex flex-col gap-2.5">
              {s.bullets.map((b) => (
                <li
                  key={b}
                  className="text-body-sm pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[5px] before:w-1.5 before:h-1.5 before:rounded-full text-ps-ink before:bg-ps-ink/30"
                >
                  {b}
                </li>
              ))}
            </ul>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
