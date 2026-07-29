'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { CORE_SPECIALTIES } from '@/lib/specialties';

const ICONS: Record<string, React.ReactNode> = {
  'ivf-fertility': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      <path d="M8 12h8M12 8v8" strokeWidth="1.2"/>
    </svg>
  ),
  'hair-transplant': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M6 3v18M18 3v18M6 12h12M6 7h12M6 17h12"/>
      <circle cx="12" cy="12" r="3" strokeWidth="1.2"/>
    </svg>
  ),
  'cosmetic-derm': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v2M12 16v2M6 12h2M16 12h2" strokeWidth="1.2"/>
      <circle cx="12" cy="12" r="4" strokeWidth="1.2"/>
    </svg>
  ),
  'dental': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M12 2C8 2 5 5 5 9c0 3 1.5 5.5 3 7.5.5.7 1 1.5 1 2.5v1h6v-1c0-1 .5-1.8 1-2.5 1.5-2 3-4.5 3-7.5 0-4-3-7-7-7z"/>
      <path d="M9 22h6" strokeWidth="1.2"/>
      <path d="M10 14h4" strokeWidth="1"/>
    </svg>
  ),
  'lasik': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeWidth="1"/>
    </svg>
  ),
  'plastic-surgery': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="1"/>
    </svg>
  ),
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.08 },
  }),
};

export default function WhoWeWorkWith() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section section-white">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            className="text-heading-xl text-ps-ink mb-4"
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Who we work with
          </motion.h2>
          <motion.p
            className="text-body-sm text-ps-muted max-w-[560px] mx-auto"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 16, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Pager Studio exclusively partners with high-value healthcare providers where patient decisions are driven by trust, research, and AI recommendations.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CORE_SPECIALTIES.map((s, i) => (
            <motion.div
              key={s.id}
              className="border border-ps-line rounded-card p-6 sm:p-8 transition-all duration-300 hover:border-ps-ink/20 hover:-translate-y-1"
              custom={i}
              variants={cardVariants}
              initial={prefersReducedMotion ? 'visible' : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <h3 className="text-heading-md text-ps-ink mb-2">
                {s.fullName}
              </h3>
              <p className="text-body-sm text-ps-muted leading-[1.6]">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.p
          className="text-body-sm text-ps-faint text-center mt-12 sm:mt-16 max-w-[600px] mx-auto"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          We intentionally focus on a select group of healthcare specialties to deliver deeper expertise, better outcomes, and long-term strategic partnerships.
        </motion.p>

      </div>
    </section>
  );
}
