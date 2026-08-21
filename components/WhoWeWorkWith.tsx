'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { CORE_SPECIALTIES } from '@/lib/specialties';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Who we <span className="font-serif italic">work</span> with
          </motion.h2>
          <motion.p
            className="text-body-sm text-ps-muted max-w-[560px] mx-auto"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Pager <span className="font-serif italic">Studio</span> exclusively partners with high-value healthcare providers where patient decisions are driven by trust, research, and AI recommendations.
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
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          We intentionally focus on a select group of healthcare specialties to deliver deeper expertise, better outcomes, and long-term strategic partnerships.
        </motion.p>

      </div>
    </section>
  );
}
