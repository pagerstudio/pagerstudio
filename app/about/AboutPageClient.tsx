'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

const EASE = [0.22, 1, 0.36, 1] as const;

const BELIEFS = [
  {
    title: 'AI visibility is not SEO.',
    body: 'Traditional search optimization targets Google\'s blue links. We optimize for AI reasoning — a fundamentally different process that requires different strategies, different content, and different technical foundations.',
  },
  {
    title: 'Exclusivity drives results.',
    body: 'We work with one clinic per specialty per city on Authority and Dominant plans. When you sign with Pager Studio, your spot is reserved. The alternative is your competitor getting it.',
  },
  {
    title: 'Results compound over time.',
    body: 'AI visibility is not a one-time fix. Content published in month one gets cited in month three. Authority built in month two amplifies in month four. That is why we structure our engagements around six-month cycles.',
  },
];

const STATS = [
  { value: '7', label: 'AI platforms monitored' },
  { value: '6', label: 'Month minimum engagement' },
  { value: '1', label: 'Clinic per specialty per city' },
  { value: '48h', label: 'Free audit turnaround' },
];

export default function AboutPageClient() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="section-white px-5 sm:px-6 md:px-10" style={{ paddingTop: 'clamp(100px, 14vw, 140px)', paddingBottom: 'clamp(50px, 8vw, 80px)' }}>
        <div className="max-w-[720px] mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-sans text-[13px] font-medium text-ps-muted hover:text-ps-ink transition-colors duration-200 mb-8 group"
          >
            <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l7 7m-7-7l7-7" />
            </svg>
            Home
          </Link>

          <motion.h1
            className="text-display-lg text-ps-ink mb-6"
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            About <span className="font-serif italic">Pager Studio</span>
          </motion.h1>

          <motion.p
            className="text-body-lg text-ps-muted max-w-[600px]"
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            The specialist AI visibility agency for healthcare practices in India.
          </motion.p>
        </div>
      </section>

      {/* Founder */}
      <section className="section-surface px-5 sm:px-6 md:px-10" style={{ paddingTop: 'clamp(60px, 8vw, 100px)', paddingBottom: 'clamp(60px, 8vw, 100px)' }}>
        <div className="max-w-[720px] mx-auto">
          <FadeIn blur={6} y={30}>
            <p className="text-caption-sm text-ps-faint mb-4">Founder</p>
          </FadeIn>
          <FadeIn blur={6} y={30} delay={0.05}>
            <h2 className="text-heading-lg text-ps-ink mb-8">
              Built by <span className="font-serif italic">Sandeep Kumar Gr</span>
            </h2>
          </FadeIn>
          <FadeIn blur={4} y={20} delay={0.1}>
            <div className="flex items-center gap-5 mb-8">
              <div className="w-20 h-20 rounded-full bg-ps-ink flex items-center justify-center shrink-0">
                <span className="font-serif text-[28px] text-white italic">SK</span>
              </div>
              <div>
                <p className="text-body font-semibold text-ps-ink">Sandeep Kumar Gr</p>
                <p className="text-caption text-ps-faint">Founder</p>
              </div>
            </div>
          </FadeIn>
          {/*
            TEMPLATE: Edit this paragraph to tell your story.
            Explain the problem you saw and why you started the company.
            Keep it honest and direct.
          */}
          <FadeIn blur={4} y={20} delay={0.15}>
            <p className="text-body text-ps-muted mb-4">
              Sandeep Kumar Gr is the founder of <span className="font-serif italic">Pager Studio</span>, a specialist AI visibility agency for healthcare practices in India. He built <span className="font-serif italic">Pager Studio</span> after recognizing that the way patients find doctors had fundamentally shifted — from Google searches to AI-generated answers.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why we exist */}
      <section className="section-white px-5 sm:px-6 md:px-10" style={{ paddingTop: 'clamp(60px, 8vw, 100px)', paddingBottom: 'clamp(60px, 8vw, 100px)' }}>
        <div className="max-w-[720px] mx-auto">
          <FadeIn blur={6} y={30}>
            <p className="text-caption-sm text-ps-faint mb-4">Why we exist</p>
          </FadeIn>
          <FadeIn blur={6} y={30} delay={0.05}>
            <h2 className="text-heading-lg text-ps-ink mb-8">
              The shift no one is <span className="font-serif italic">talking about</span>
            </h2>
          </FadeIn>
          {/*
            TEMPLATE: Edit this section to tell your story.
            Explain the problem you saw and why you started the company.
            Keep it honest and direct.
          */}
          <FadeIn blur={4} y={20} delay={0.1}>
            <p className="text-body text-ps-muted mb-4">
              When patients ask ChatGPT or Google AI Overviews for a recommendation, AI picks one clinic and sends them there. That clinic is either yours or your competitor&apos;s. Most healthcare practices have no idea this is happening — and even fewer know how to influence it.
            </p>
          </FadeIn>
          <FadeIn blur={4} y={20} delay={0.15}>
            <p className="text-body text-ps-muted">
              <span className="font-serif italic">Pager Studio</span> was built to close that gap. We help clinics appear where patients are actually looking — inside AI-generated answers across ChatGPT, Google Gemini, Perplexity, Claude, Grok, Meta AI, and Google AI Overviews.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What we believe (cards) */}
      <section className="section-surface px-5 sm:px-6 md:px-10" style={{ paddingTop: 'clamp(60px, 8vw, 100px)', paddingBottom: 'clamp(60px, 8vw, 100px)' }}>
        <div className="max-w-[720px] mx-auto">
          <FadeIn blur={6} y={30}>
            <p className="text-caption-sm text-ps-faint mb-4">Principles</p>
          </FadeIn>
          <FadeIn blur={6} y={30} delay={0.05}>
            <h2 className="text-heading-lg text-ps-ink mb-10">
              What we <span className="font-serif italic">believe</span>
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {BELIEFS.map((b, i) => (
              <FadeIn key={b.title} blur={4} y={20} delay={0.1 + i * 0.08}>
                <div className="group bg-white rounded-[16px] border border-ps-line p-6 sm:p-8 transition-all duration-300 hover:border-ps-ink hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                  <div className="flex items-start gap-4">
                    <span className="text-[40px] sm:text-[48px] font-serif text-ps-ink/10 leading-none select-none shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-body font-semibold text-ps-ink mb-2">{b.title}</h3>
                      <p className="text-body-sm text-ps-muted leading-relaxed">{b.body}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* By the numbers */}
      <section className="section-white px-5 sm:px-6 md:px-10" style={{ paddingTop: 'clamp(60px, 8vw, 100px)', paddingBottom: 'clamp(60px, 8vw, 100px)' }}>
        <div className="max-w-[720px] mx-auto">
          <FadeIn blur={6} y={30}>
            <p className="text-caption-sm text-ps-faint mb-4">At a glance</p>
          </FadeIn>
          <FadeIn blur={6} y={30} delay={0.05}>
            <h2 className="text-heading-lg text-ps-ink mb-10">
              By the <span className="font-serif italic">numbers</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <FadeIn key={s.label} blur={4} y={20} delay={0.1 + i * 0.06}>
                <div className="bg-ps-surface border border-ps-line rounded-[16px] p-6 sm:p-8 text-center transition-all duration-300 hover:border-ps-ink group">
                  <p className="text-[40px] sm:text-display-lg text-ps-ink font-sans leading-none mb-2 group-hover:scale-[1.03] transition-transform duration-300">
                    {s.value}
                  </p>
                  <p className="text-caption text-ps-faint">{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (black) */}
      <section className="section-white px-4" style={{ paddingBottom: 'clamp(60px, 8vw, 100px)' }}>
        <div className="bg-ps-black texture-lines texture-shimmer rounded-[20px] sm:rounded-[28px] max-w-[1200px] mx-auto px-5 sm:px-6 md:px-[60px] py-[50px] sm:py-[60px] md:py-[100px] text-center">
          <FadeIn blur={4} y={16}>
            <p className="text-caption-sm text-white/45 mb-4 text-center">Start here</p>
          </FadeIn>
          <FadeIn blur={6} y={30} delay={0.05}>
            <h2 className="text-heading-xl text-white mb-5">
              Ready to find out where you <span className="font-serif italic">stand</span>?
            </h2>
          </FadeIn>
          <FadeIn blur={4} y={16} delay={0.1}>
            <p className="text-body-sm text-white/45 max-w-[460px] mx-auto mb-10">
              Get a free audit showing exactly how ChatGPT and Google AI Overviews see your practice — and what your competitors are doing that you are not.
            </p>
          </FadeIn>
          <FadeIn blur={4} y={16} delay={0.15}>
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
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
