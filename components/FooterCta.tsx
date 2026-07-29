'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function FooterCta() {
  return (
    <section
      className="section section-white px-4"
      aria-label="Final call to action"
    >
      <div className="bg-ps-black rounded-[20px] sm:rounded-[28px] max-w-[1200px] mx-auto px-5 sm:px-6 md:px-[60px] py-[50px] sm:py-[60px] md:py-[100px] text-center">
        <motion.p
          className="text-caption-sm text-white/45 mb-4 text-center"
          initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          Start here
        </motion.p>
        <motion.h2
          className="text-heading-xl text-white mb-5"
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        >
          Your patients are asking <span className="font-serif italic">AI</span><br />
          where to go. Are you there?
        </motion.h2>
        <motion.p
          className="text-body-sm text-white/45 max-w-[460px] mx-auto mb-10"
          initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
        >
          Run your free audit — no credit card, no commitment. Find out in 48 hours where you stand inside ChatGPT and Google AI Overviews.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
        >
          <Link
            href="/contact"
            className="btn btn-primary bg-white text-ps-black hover:bg-ps-black hover:text-white hover:border-white group"
          >
            Get Your Free Audit
            <span className="btn-arrow relative w-4 h-4">
              <svg className="absolute inset-0 w-4 h-4 transition-opacity duration-200 opacity-100 group-hover:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
              <svg className="absolute inset-0 w-4 h-4 transition-opacity duration-200 opacity-0 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
