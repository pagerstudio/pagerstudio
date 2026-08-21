'use client';

import { motion } from 'framer-motion';
import SwipeCardStack from './SwipeCardStack';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function WhyPagerStudio() {
  return (
    <section
      className="section section-surface px-5 sm:px-10"
      id="why"
      aria-label="Why Pager Studio"
    >
      <div className="container-sm mx-auto flex flex-col items-center gap-10 sm:gap-16">

        {/* Centered header */}
        <div className="text-center">
          <motion.h2
            className="text-heading-xl text-ps-ink text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            What we <span className="font-serif italic">bring</span> in.
          </motion.h2>
          <motion.p
            className="text-body-sm text-ps-muted mt-5 max-w-[460px] mx-auto"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            What you actually need to know before deciding.
          </motion.p>
        </div>

        {/* Swipe card stack */}
        <motion.div
          className="w-full max-w-[520px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
        >
          <SwipeCardStack />
        </motion.div>

      </div>
    </section>
  );
}
