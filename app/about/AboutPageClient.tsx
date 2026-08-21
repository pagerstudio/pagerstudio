'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

const EASE = [0.22, 1, 0.36, 1] as const;

const SPECIALTIES = [
  'IVF and fertility centers',
  'Hair restoration clinics',
  'Cosmetic dermatology clinics',
  'Dental implant centers',
  'LASIK and vision correction',
  'Plastic surgery',
];

const PROMISES = [
  { heading: 'One strategist, every engagement.', body: 'No account managers. No handoffs. No junior staff. You work directly with the person doing the work.' },
  { heading: 'One clinic per specialty per city.', body: 'When you sign, your spot is reserved. The alternative is your competitor getting it.' },
  { heading: 'Minimum six months.', body: 'AI engines build trust gradually. This cannot be compressed into a short-term project.' },
  { heading: 'No patient data. Ever.', body: 'All work is limited to your public business information. Governed by a signed legal agreement.' },
];

const FAQS = [
  { q: 'What is AEO?', a: 'AI Engine Optimization — optimizing your online presence so AI systems like ChatGPT, Perplexity, and Google AI Overviews can find, understand, and recommend you. Different from SEO, which targets search result pages.' },
  { q: 'Does Pager Studio offer SEO?', a: 'No. AEO for healthcare providers only. No general SEO, paid ads, or social media.' },
  { q: 'Which markets?', a: 'United States, United Kingdom, and United Arab Emirates.' },
  { q: 'How long is a typical engagement?', a: 'Minimum six months. AI engines need sustained signals to build measurable trust.' },
  { q: 'Does Pager Studio handle patient data?', a: 'No. Only your public business information. Never patient health data.' },
];

function BrandText({ text }: { text: string }) {
  const parts = text.split(/(Pager Studio)/g);
  return (
    <>
      {parts.map((part, i) =>
        part === 'Pager Studio' ? (
          <span key={i}>Pager <span className="font-serif italic">Studio</span></span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function AboutPageClient() {
  return (
    <main>
      <Nav />

      {/* ─── Hero: what is Pager Studio ────────────────────────── */}
      <section className="section section-white">
        <div className="container">
          <FadeIn blur={4} y={16}>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 font-sans text-[13px] font-medium text-ps-muted hover:text-ps-ink transition-colors duration-200 mb-10 group"
            >
              <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l7 7m-7-7l7-7" />
              </svg>
              Home
            </Link>
          </FadeIn>

          <div className="max-w-[720px]">
            <motion.h1
              className="text-display-xl text-ps-ink mb-6"
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              What is Pager <span className="font-serif italic">Studio</span>?
            </motion.h1>

            <motion.p
              className="text-body-lg text-ps-muted mb-4"
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            >
              A boutique AEO (AI Engine Optimization) agency. We help elite healthcare practices get recommended inside AI answer engines — ChatGPT, Perplexity, Google AI Overviews, and Gemini.
            </motion.p>

            <motion.p
              className="text-body text-ps-muted"
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            >
              Not SEO. Not paid ads. Just the discipline of appearing when patients ask AI where to go.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── Who is behind it ──────────────────────────────────── */}
      <section className="section section-white !pt-0">
        <div className="container">
          <div className="max-w-[720px]">
            <FadeIn blur={6} y={30}>
              <h2 className="text-heading-lg text-ps-ink mb-6">
                Who is behind Pager <span className="font-serif italic">Studio</span>?
              </h2>
            </FadeIn>
            <FadeIn blur={4} y={20} delay={0.05}>
              <p className="text-body text-ps-muted mb-4">
                <strong className="text-ps-ink font-semibold">Sandeep Kumar GR</strong> — founder and sole strategist. Based in Coimbatore, India. Runs every client engagement personally.
              </p>
            </FadeIn>
            <FadeIn blur={4} y={20} delay={0.1}>
              <blockquote className="border-l-2 border-ps-ink pl-6 mb-6">
                <p className="font-serif italic text-ps-ink leading-[1.1] tracking-[-0.015em]" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                  Healthcare agencies were applying SEO tactics to a problem that no longer worked that way.
                </p>
              </blockquote>
            </FadeIn>
            <FadeIn blur={4} y={20} delay={0.15}>
              <p className="text-body-sm text-ps-muted mb-3">
                Patients researching IVF, hair restoration, and other high-stakes procedures were increasingly asking AI engines directly — and most practices had no visibility there at all.
              </p>
            </FadeIn>
            <FadeIn blur={4} y={20} delay={0.2}>
              <p className="text-body-sm text-ps-muted mb-3">
                Rather than adapting an existing SEO offering, Sandeep built AEO as a standalone discipline from the ground up, scoped to six healthcare specialties.
              </p>
            </FadeIn>
            <FadeIn blur={4} y={20} delay={0.25}>
              <p className="text-body-sm text-ps-muted">
                He also built Pager <span className="font-serif italic">Studio</span>&apos;s proprietary AI visibility audit tool — a Next.js application powered by Groq and OpenAI that scores healthcare websites on their current AI visibility. This tool underpins every Audit phase.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── What we promise ───────────────────────────────────── */}
      <section className="section section-black texture-lines">
        <div className="container">
          <div className="max-w-[720px]">
            <motion.h2
              className="text-heading-xl text-white mb-10"
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              What we promise
            </motion.h2>

            <div className="border-t border-white/15">
              {PROMISES.map((p, i) => (
                <motion.div
                  key={p.heading}
                  className="py-6 border-b border-white/15"
                  initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: EASE }}
                >
                  <h3 className="text-body font-semibold text-white mb-2">{p.heading}</h3>
                  <p className="text-body-sm text-white/50">{p.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Who we serve ─────────────────────────────────────── */}
      <section className="section section-white">
        <div className="container">
          <div className="max-w-[720px]">
            <FadeIn blur={6} y={30}>
              <h2 className="text-heading-lg text-ps-ink mb-4">
                Who we serve
              </h2>
            </FadeIn>
            <FadeIn blur={4} y={20} delay={0.05}>
              <p className="text-body text-ps-muted mb-6">
                Six healthcare specialties. Each involves high-value, research-intensive patient decisions — exactly where AI engines are becoming the first stop.
              </p>
            </FadeIn>

            <div className="flex flex-wrap items-baseline gap-x-[0.35em] gap-y-1">
              {SPECIALTIES.map((s, i) => (
                <span key={s} className="contents">
                  <span className="font-sans font-semibold text-ps-ink" style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
                    {s}
                  </span>
                  {i < SPECIALTIES.length - 1 && (
                    <span className="text-ps-faint text-[0.5em] select-none">&middot;</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── How we work ──────────────────────────────────────── */}
      <section className="section section-surface">
        <div className="container">
          <div className="max-w-[720px]">
            <FadeIn blur={6} y={30}>
              <h2 className="text-heading-lg text-ps-ink mb-6">
                How we work
              </h2>
            </FadeIn>

            <div className="border-t border-ps-line">
              {[
                { phase: 'Audit', body: 'Baseline your current AI visibility, technical infrastructure, and authority signals.' },
                { phase: 'Implement', body: 'Targeted technical optimization and directory/authority-building based on audit findings.' },
                { phase: 'Monitor', body: 'Ongoing tracking with adjustments as platforms and algorithms evolve.' },
              ].map((f, i) => (
                <FadeIn key={f.phase} blur={4} y={20} delay={0.1 + i * 0.08}>
                  <div className="flex gap-6 py-5 border-b border-ps-line">
                    <span className="font-sans font-semibold text-ps-ink shrink-0 pt-0.5" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: 1.2 }}>
                      {f.phase}
                    </span>
                    <p className="text-body-sm text-ps-muted leading-relaxed">
                      {f.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn blur={4} y={20} delay={0.35}>
              <p className="text-body-sm text-ps-faint mt-6">
                Pricing is value-based, customized to each practice. Minimum engagement: six months.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────── */}
      <section className="section section-white">
        <div className="container">
          <div className="max-w-[720px]">
            <FadeIn blur={6} y={30}>
              <h2 className="text-heading-lg text-ps-ink mb-10">
                Frequently asked questions
              </h2>
            </FadeIn>

            <div className="border-t border-ps-line">
              {FAQS.map((faq, i) => (
                <FadeIn key={faq.q} blur={4} y={16} delay={0.08 + i * 0.05}>
                  <div className="py-5 border-b border-ps-line">
                    <p className="text-body font-semibold text-ps-ink mb-2">{faq.q}</p>
                    <p className="text-body-sm text-ps-muted leading-relaxed"><BrandText text={faq.a} /></p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="section section-white px-4">
        <div className="bg-ps-black texture-lines texture-shimmer rounded-[20px] sm:rounded-[28px] max-w-[1200px] mx-auto px-5 sm:px-6 md:px-[60px] py-[50px] sm:py-[60px] md:py-[100px] text-center">
          <FadeIn blur={4} y={16}>
            <p className="text-caption-sm text-white/45 mb-4 text-center">Start here</p>
          </FadeIn>
          <FadeIn blur={6} y={30} delay={0.05}>
            <h2 className="text-heading-xl text-white mb-5">
              Ready to find out where you stand?
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
