'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

const EASE = [0.22, 1, 0.36, 1] as const;

const FRAMEWORK = [
  {
    phase: 'Audit',
    body: 'A comprehensive review of the practice\'s current AI visibility, technical infrastructure, and off-page authority signals, establishing a baseline.',
  },
  {
    phase: 'Implement',
    body: 'Targeted technical optimization and directory/authority-building work based on audit findings.',
  },
  {
    phase: 'Monitor',
    body: 'Ongoing tracking of AI engine visibility, with adjustments as platforms and algorithms evolve.',
  },
];

const SPECIALTIES = [
  'IVF and fertility centers',
  'Hair restoration clinics',
  'Cosmetic dermatology clinics',
  'Dental implant centers',
  'LASIK and vision correction',
  'Plastic surgery',
];

const FAQS = [
  {
    q: 'What is AEO?',
    a: 'AEO is the practice of optimizing a business\'s online presence so that AI systems \u2014 such as ChatGPT, Perplexity, Google AI Overviews, and Gemini \u2014 can accurately find, understand, and recommend it in response to user questions. It differs from traditional SEO, which optimizes for search engine results pages rather than AI-generated answers.',
  },
  {
    q: 'Does Pager Studio offer SEO?',
    a: 'No. Pager Studio specializes exclusively in AEO for healthcare providers. It does not offer general SEO, paid advertising, or social media management.',
  },
  {
    q: 'Which specialties?',
    a: 'IVF and fertility centers, hair restoration clinics, cosmetic dermatology clinics, dental implant centers, LASIK and vision correction, and plastic surgery.',
  },
  {
    q: 'Which markets?',
    a: 'The United States, United Kingdom, and United Arab Emirates.',
  },
  {
    q: 'How long is a typical engagement?',
    a: 'A minimum of six months, reflecting the time AI engines require to build measurable trust in a provider\'s technical and authority signals.',
  },
  {
    q: 'Does Pager Studio handle patient data?',
    a: 'No. Pager Studio works only with a practice\'s public business information and never collects or processes patient health data.',
  },
];

function BrandText({ text }: { text: string }) {
  const parts = text.split(/(Pager Studio)/g);
  return (
    <>
      {parts.map((part, i) =>
        part === 'Pager Studio' ? (
          <span key={i} className="font-serif italic">Pager Studio</span>
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

      {/* ─── Hero ─────────────────────────────────────────────── */}
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
              className="text-display-xl text-ps-ink mb-8"
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              About <span className="font-serif italic">Pager Studio</span>
            </motion.h1>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            >
              <p className="text-body-lg text-ps-ink font-medium">
                <BrandText text="Pager Studio is a boutique AEO (AI Engine Optimization) agency that helps elite healthcare practices become visible and citable inside AI answer engines \u2014 including ChatGPT, Perplexity, Google AI Overviews, and Gemini." />
              </p>
              <p className="text-body text-ps-muted">
                Founded and operated by a single strategist, <span className="font-serif italic">Pager Studio</span> works with a maximum of ten healthcare practices at a time across the United States, United Kingdom, and United Arab Emirates.
              </p>
              <p className="text-body text-ps-muted">
                <span className="font-serif italic">Pager Studio</span> does not offer traditional SEO. Its work is limited to how AI systems retrieve, understand, and recommend healthcare providers \u2014 a distinct discipline from ranking in search engine results pages.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── What we do ───────────────────────────────────────── */}
      <section className="section section-white !pt-0">
        <div className="container">
          <div className="max-w-[720px]">
            <FadeIn blur={6} y={30}>
              <p className="text-caption-sm text-ps-faint mb-3">What we do</p>
            </FadeIn>
            <FadeIn blur={6} y={30} delay={0.05}>
              <h2 className="text-heading-lg text-ps-ink mb-6">
                What <span className="font-serif italic">Pager Studio</span> does
              </h2>
            </FadeIn>
            <FadeIn blur={4} y={20} delay={0.1}>
              <p className="text-body text-ps-muted mb-8">
                <BrandText text="Pager Studio audits, implements, and monitors the technical and authority signals that determine whether an AI engine surfaces a practice when a prospective patient asks a question like \u201Cbest IVF clinic in London\u201D or \u201Ctop-rated hair transplant surgeon in Dubai.\u201D" />
              </p>
            </FadeIn>

            <div className="border-t border-ps-line">
              {FRAMEWORK.map((f, i) => (
                <FadeIn key={f.phase} blur={4} y={20} delay={0.15 + i * 0.08}>
                  <div className="flex gap-6 py-5 border-b border-ps-line">
                    <span className="font-serif italic text-ps-faint shrink-0 pt-0.5" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: 1.2 }}>
                      {f.phase}
                    </span>
                    <p className="text-body-sm text-ps-muted leading-relaxed">
                      {f.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Who we serve ─────────────────────────────────────── */}
      <section className="section section-surface">
        <div className="container">
          <div className="max-w-[720px]">
            <FadeIn blur={6} y={30}>
              <p className="text-caption-sm text-ps-faint mb-3">Specialties</p>
            </FadeIn>
            <FadeIn blur={6} y={30} delay={0.05}>
              <h2 className="text-heading-lg text-ps-ink mb-6">
                Who we <span className="font-serif italic">serve</span>
              </h2>
            </FadeIn>
            <FadeIn blur={4} y={20} delay={0.1}>
              <p className="text-body text-ps-muted mb-6">
                <BrandText text="Pager Studio works exclusively with six healthcare specialties:" />
              </p>
            </FadeIn>

            <div className="flex flex-wrap items-baseline gap-x-[0.35em] gap-y-1 mb-6">
              {SPECIALTIES.map((s, i) => (
                <span key={s} className="contents">
                  <span className="font-serif italic text-ps-ink" style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
                    {s}
                  </span>
                  {i < SPECIALTIES.length - 1 && (
                    <span className="text-ps-faint text-[0.5em] select-none">&middot;</span>
                  )}
                </span>
              ))}
            </div>

            <FadeIn blur={4} y={20} delay={0.15}>
              <p className="text-body text-ps-muted">
                This scope is intentional. Each of these specialties involves high-value, research-intensive patient decisions \u2014 exactly the kind of query where AI engines are increasingly the first stop before a phone call or consultation is booked.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── Solo operator ────────────────────────────────────── */}
      <section className="section section-black texture-lines">
        <div className="container">
          <div className="max-w-[720px]">
            <motion.p
              className="text-heading-xl text-white mb-6"
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              Why a <span className="font-serif italic">solo operator</span>, not an agency team
            </motion.p>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            >
              <p className="text-body text-white/60">
                <BrandText text="Pager Studio is built and run by one strategist, not a rotating team of account managers. Every client works directly with the person doing the audit, implementation, and monitoring \u2014 no handoffs, no junior staff." />
              </p>
              <p className="text-body text-white/60">
                AI-assisted workflows allow this single-operator model to deliver the depth of work that would typically require a full agency team, without the coordination overhead or diluted attention that comes with it.
              </p>
              <p className="text-body text-white font-medium">
                Capacity is deliberately capped at ten active clients at any time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Founder ──────────────────────────────────────────── */}
      <section className="section section-white">
        <div className="container">
          <div className="max-w-[720px]">
            <FadeIn blur={6} y={30}>
              <p className="text-caption-sm text-ps-faint mb-3">Founder</p>
            </FadeIn>
            <FadeIn blur={6} y={30} delay={0.05}>
              <h2 className="text-heading-lg text-ps-ink mb-6">
                <span className="font-serif italic">Sandeep Kumar GR</span>
              </h2>
            </FadeIn>
            <FadeIn blur={4} y={20} delay={0.1}>
              <blockquote className="border-l-2 border-ps-ink pl-6 mb-8">
                <p className="font-serif italic text-ps-ink leading-[1.1] tracking-[-0.015em]" style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)' }}>
                  Healthcare agencies were applying SEO tactics to a problem that no longer worked that way.
                </p>
              </blockquote>
            </FadeIn>
            <FadeIn blur={4} y={20} delay={0.15}>
              <p className="text-body text-ps-muted mb-4">
                Sandeep built <span className="font-serif italic">Pager Studio</span>&apos;s methodology around a specific observation: patients researching high-stakes procedures like IVF or hair restoration were increasingly asking AI engines directly, and most practices had no visibility there at all.
              </p>
            </FadeIn>
            <FadeIn blur={4} y={20} delay={0.2}>
              <p className="text-body text-ps-muted mb-4">
                Rather than adapting an existing SEO offering, he built AEO as a standalone discipline from the ground up, deliberately scoped to a small number of high-value healthcare specialties rather than horizontal across industries.
              </p>
            </FadeIn>
            <FadeIn blur={4} y={20} delay={0.25}>
              <p className="text-body text-ps-muted mb-4">
                To support the agency&apos;s audit process, Sandeep also built <span className="font-serif italic">Pager Studio</span>&apos;s proprietary AI visibility audit tool \u2014 a Next.js application powered by Groq and OpenAI that scores healthcare websites on their current AI visibility. This tool underpins the Audit phase of every client engagement.
              </p>
            </FadeIn>
            <FadeIn blur={4} y={20} delay={0.3}>
              <p className="text-body text-ps-muted">
                Every practice that works with <span className="font-serif italic">Pager Studio</span> works directly with Sandeep \u2014 there is no account manager layer and no handoff to junior staff at any stage of the engagement.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── Security + Engagement ────────────────────────────── */}
      <section className="section section-surface">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-[960px]">
            <FadeIn blur={4} y={20}>
              <p className="text-caption-sm text-ps-faint mb-3">Security</p>
              <h3 className="text-heading-md text-ps-ink mb-4">
                No patient data. <span className="font-serif italic">Ever.</span>
              </h3>
              <p className="text-body text-ps-muted">
                <BrandText text="Pager Studio does not collect, store, or process patient data of any kind. All work is limited to the practice's public-facing business information. Every client engagement is governed by a signed legal agreement, and client performance data is never used in Pager Studio's own marketing or case studies." />
              </p>
            </FadeIn>

            <FadeIn blur={4} y={20} delay={0.08}>
              <p className="text-caption-sm text-ps-faint mb-3">Engagement</p>
              <h3 className="text-heading-md text-ps-ink mb-4">
                Minimum six <span className="font-serif italic">months.</span>
              </h3>
              <p className="text-body text-ps-muted">
                AI engines build trust in a provider gradually, through sustained technical optimization, off-page authority development, and directory consistency \u2014 this cannot be compressed into a short-term project. Pricing is value-based and customized to each practice&apos;s size, specialties, provider count, and market.
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
              <p className="text-caption-sm text-ps-faint mb-3">FAQ</p>
            </FadeIn>
            <FadeIn blur={6} y={30} delay={0.05}>
              <h2 className="text-heading-lg text-ps-ink mb-10">
                Frequently asked <span className="font-serif italic">questions</span>
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
              Ready to find out where you <span className="font-serif italic">stand</span>?
            </h2>
          </FadeIn>
          <FadeIn blur={4} y={16} delay={0.1}>
            <p className="text-body-sm text-white/45 max-w-[460px] mx-auto mb-10">
              Get a free audit showing exactly how ChatGPT and Google AI Overviews see your practice \u2014 and what your competitors are doing that you are not.
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
