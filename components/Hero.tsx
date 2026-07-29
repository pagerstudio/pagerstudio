'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PixelGrid from './PixelGrid';
import { motion, useReducedMotion } from 'framer-motion';

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 2.7,
    },
  },
};

const childVariants = {
  hidden: { y: 80, opacity: 0, filter: 'blur(8px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 1.2, ease: EASE_OUT },
  },
};

const bodyVariant = {
  hidden: { y: 30, opacity: 0, filter: 'blur(4px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease: EASE_OUT },
  },
};

const formVariant = {
  hidden: { y: 30, opacity: 0, filter: 'blur(4px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease: EASE_OUT },
  },
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/contact?email=${encodeURIComponent(email)}`);
  };

  return (
    <section className="hero section-black min-h-screen flex flex-col" id="audit" aria-label="Hero">
      <div className="bg-ps-black w-full mx-auto relative flex-1 flex flex-col overflow-hidden">
        <PixelGrid />

        <div className="relative z-[2] flex-1 flex flex-col items-center justify-center px-10 sm:px-12 md:px-20 pb-10 md:pb-24 pt-10 sm:pt-20 md:pt-32">
          {prefersReducedMotion ? (
            <div className="w-full max-w-[900px] flex flex-col items-center text-center">
              <h1 className="text-display-xl text-white mb-6">
                <span className="block">Healthcare discovery has <span className="font-serif italic">changed</span>.</span>
                <span className="block">Patients Now Ask AI.</span>
              </h1>

              <p className="text-body-lg text-white/55 max-w-[520px]">
                Patients are shifting from Google to AI to find specialists. AI picks one clinic and sends them there. That clinic is either yours or your competitor&apos;s.
              </p>

              <div className="mt-10 sm:mt-12 flex items-center justify-center relative z-[3] w-full max-w-[400px] sm:max-w-none">
                <form onSubmit={handleSubmit} aria-label="Free audit signup" className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3 bg-white rounded-2xl sm:rounded-full px-5 sm:px-2 py-4 sm:py-2 w-full">
                  <input
                    type="email"
                    id="hero-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    aria-label="Email address"
                    className="w-full sm:w-[280px] text-body-sm text-ps-ink placeholder:text-ps-faint rounded-xl sm:rounded-full px-5 py-3 outline-none border border-ps-line transition-all duration-200 focus:ring-2 focus:ring-ps-ink/10 focus:border-ps-ink/30 bg-white"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary w-full sm:w-auto h-auto py-3 px-7 text-[14px] group/btn"
                  >
                    Get Your Free Audit
                    <svg className="btn-arrow w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <motion.div
              className="w-full max-w-[900px] flex flex-col items-center text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-display-xl text-white mb-6">
                <motion.span className="block" variants={childVariants}>
                  Healthcare discovery has <span className="font-serif italic">changed</span>.
                </motion.span>
                <motion.span className="block" variants={childVariants}>
                  Patients Now Ask AI.
                </motion.span>
              </h1>

              <motion.p className="text-body-lg text-white/55 max-w-[520px]" variants={bodyVariant}>
                Patients are shifting from Google to AI to find specialists. AI picks one clinic and sends them there. That clinic is either yours or your competitor&apos;s.
              </motion.p>

              <motion.div className="mt-10 sm:mt-12 flex items-center justify-center relative z-[3] w-full max-w-[400px] sm:max-w-none" variants={formVariant}>
                <form onSubmit={handleSubmit} aria-label="Free audit signup" className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3 bg-white rounded-2xl sm:rounded-full px-5 sm:px-2 py-4 sm:py-2 w-full">
                  <input
                    type="email"
                    id="hero-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    aria-label="Email address"
                    className="w-full sm:w-[280px] text-body-sm text-ps-ink placeholder:text-ps-faint rounded-xl sm:rounded-full px-5 py-3 outline-none border border-ps-line transition-all duration-200 focus:ring-2 focus:ring-ps-ink/10 focus:border-ps-ink/30 bg-white"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary w-full sm:w-auto h-auto py-3 px-7 text-[14px] group/btn"
                  >
                    Get Your Free Audit
                    <svg className="btn-arrow w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
