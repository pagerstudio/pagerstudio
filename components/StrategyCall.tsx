'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

export default function StrategyCall() {
  return (
    <section className="bg-white">
      <div className="section px-5 sm:px-6 md:px-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-center">

          {/* Left column — headline + CTA */}
          <div className="flex flex-col">
            <motion.h2
              className="text-heading-xl text-ps-ink mb-6"
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Find out how AI sees your clinic — for free.
            </motion.h2>
            <motion.p
              className="text-body text-ps-muted max-w-[480px] mb-10"
              initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              We&apos;ll run a free AI visibility audit and show you exactly where your practice stands inside ChatGPT and Google AI Overviews.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row sm:items-center gap-3"
              initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="/contact"
                className="btn btn-primary group"
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
              <Link
                href="/pricing"
                className="btn btn-secondary group"
              >
                See Our Pricing
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
            <motion.p
              className="text-caption-sm text-ps-muted mt-3"
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Free · No credit card · Results in 48 hours
            </motion.p>
          </div>

          {/* Right column — value card */}
          <TiltCard className="border border-ps-line rounded-[20px] p-8 md:p-10">
            <p className="text-caption-sm text-ps-faint mb-3">
              What you&apos;ll receive
            </p>
            <h3 className="text-heading-md text-ps-ink mb-6">
              Here&apos;s what you <span className="font-serif italic">get</span>:
            </h3>
            <ul className="flex flex-col gap-0">
              {[
                'A free AI Visibility Audit of your clinic.',
                'A report showing how ChatGPT and Google AI Overviews see your practice.',
                'Which AI platforms mention you — and which don\'t.',
                'Your audit report delivered within 48 hours.',
              ].map((item, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 py-3.5 ${
                    i < 3 ? 'border-b border-ps-line/60' : ''
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-ps-ink mt-2.5 flex-shrink-0" />
                  <span className={`text-body-sm ${i === 3 ? 'text-ps-ink font-medium' : 'text-ps-muted'}`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </TiltCard>

        </div>
      </div>
    </section>
  );
}
