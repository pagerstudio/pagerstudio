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
  'LASIK and vision correction practices',
  'Plastic surgery practices',
];

const FRAMEWORK = [
  {
    phase: '01',
    title: 'Audit',
    body: 'A comprehensive review of the practice\'s current AI visibility, technical infrastructure, and off-page authority signals, establishing a baseline.',
  },
  {
    phase: '02',
    title: 'Implement',
    body: 'Targeted technical optimization and directory/authority-building work based on audit findings.',
  },
  {
    phase: '03',
    title: 'Monitor',
    body: 'Ongoing tracking of AI engine visibility, with adjustments as platforms and algorithms evolve.',
  },
];

const FAQS = [
  {
    q: 'What is AEO (AI Engine Optimization)?',
    a: 'AEO is the practice of optimizing a business\'s online presence so that AI systems \u2014 such as ChatGPT, Perplexity, Google AI Overviews, and Gemini \u2014 can accurately find, understand, and recommend it in response to user questions. It differs from traditional SEO, which optimizes for search engine results pages rather than AI-generated answers.',
  },
  {
    q: 'Does Pager Studio offer SEO services?',
    a: 'No. Pager Studio specializes exclusively in AEO for healthcare providers. It does not offer general SEO, paid advertising, or social media management.',
  },
  {
    q: 'Which healthcare specialties does Pager Studio work with?',
    a: 'IVF and fertility centers, hair restoration clinics, cosmetic dermatology clinics, dental implant centers, LASIK and vision correction practices, and plastic surgery practices.',
  },
  {
    q: 'Which markets does Pager Studio serve?',
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

          <motion.div
            className="text-body-lg text-ps-muted max-w-[640px] space-y-4"
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            <p>
              <strong className="text-ps-ink font-semibold"><span className="font-serif italic">Pager Studio</span> is a boutique AEO (AI Engine Optimization) agency that helps elite healthcare practices become visible and citable inside AI answer engines \u2014 including ChatGPT, Perplexity, Google AI Overviews, and Gemini.</strong>
            </p>
            <p>
              Founded and operated by a single strategist, <span className="font-serif italic">Pager Studio</span> works with a maximum of ten healthcare practices at a time across the United States, United Kingdom, and United Arab Emirates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Pager Studio Does */}
      <section className="section-surface px-5 sm:px-6 md:px-10" style={{ paddingTop: 'clamp(60px, 8vw, 100px)', paddingBottom: 'clamp(60px, 8vw, 100px)' }}>
        <div className="max-w-[720px] mx-auto">
          <FadeIn blur={6} y={30}>
            <p className="text-caption-sm text-ps-faint mb-4">What we do</p>
          </FadeIn>
          <FadeIn blur={6} y={30} delay={0.05}>
            <h2 className="text-heading-lg text-ps-ink mb-8">
              What <span className="font-serif italic">Pager Studio</span> does
            </h2>
          </FadeIn>
          <FadeIn blur={4} y={20} delay={0.1}>
            <p className="text-body text-ps-muted mb-4">
              <BrandText text="Pager Studio audits, implements, and monitors the technical and authority signals that determine whether an AI engine surfaces a practice when a prospective patient asks a question like \u201Cbest IVF clinic in London\u201D or \u201Ctop-rated hair transplant surgeon in Dubai.\u201D" />
            </p>
          </FadeIn>
          <FadeIn blur={4} y={20} delay={0.15}>
            <p className="text-body text-ps-muted mb-8">
              The work is delivered through a three-phase framework:
            </p>
          </FadeIn>
          <div className="space-y-4">
            {FRAMEWORK.map((f, i) => (
              <FadeIn key={f.phase} blur={4} y={20} delay={0.2 + i * 0.08}>
                <div className="group bg-white rounded-[16px] border border-ps-line p-6 sm:p-8 transition-all duration-300 hover:border-ps-ink hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                  <div className="flex items-start gap-4">
                    <span className="text-[40px] sm:text-[48px] font-serif text-ps-ink/10 leading-none select-none shrink-0">
                      {f.phase}
                    </span>
                    <div>
                      <h3 className="text-body font-semibold text-ps-ink mb-2">{f.title}</h3>
                      <p className="text-body-sm text-ps-muted leading-relaxed">{f.body}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Who Pager Studio Serves */}
      <section className="section-white px-5 sm:px-6 md:px-10" style={{ paddingTop: 'clamp(60px, 8vw, 100px)', paddingBottom: 'clamp(60px, 8vw, 100px)' }}>
        <div className="max-w-[720px] mx-auto">
          <FadeIn blur={6} y={30}>
            <p className="text-caption-sm text-ps-faint mb-4">Specialties</p>
          </FadeIn>
          <FadeIn blur={6} y={30} delay={0.05}>
            <h2 className="text-heading-lg text-ps-ink mb-8">
              Who <span className="font-serif italic">Pager Studio</span> serves
            </h2>
          </FadeIn>
          <FadeIn blur={4} y={20} delay={0.1}>
            <p className="text-body text-ps-muted mb-6">
              <BrandText text="Pager Studio works exclusively with six healthcare specialties:" />
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SPECIALTIES.map((s, i) => (
              <FadeIn key={s} blur={4} y={20} delay={0.12 + i * 0.06}>
                <div className="flex items-center gap-3 bg-ps-surface border border-ps-line rounded-[12px] px-5 py-4 transition-all duration-300 hover:border-ps-ink group">
                  <span className="w-8 h-8 rounded-full bg-ps-ink flex items-center justify-center shrink-0">
                    <span className="font-sans text-[11px] font-bold text-white">{i + 1}</span>
                  </span>
                  <span className="text-body-sm font-medium text-ps-ink">{s}</span>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn blur={4} y={20} delay={0.5}>
            <p className="text-body-sm text-ps-muted mt-6">
              This scope is intentional. Each of these specialties involves high-value, research-intensive patient decisions \u2014 exactly the kind of query where AI engines are increasingly the first stop before a phone call or consultation is booked.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why a Solo Operator */}
      <section className="section-surface px-5 sm:px-6 md:px-10" style={{ paddingTop: 'clamp(60px, 8vw, 100px)', paddingBottom: 'clamp(60px, 8vw, 100px)' }}>
        <div className="max-w-[720px] mx-auto">
          <FadeIn blur={6} y={30}>
            <p className="text-caption-sm text-ps-faint mb-4">Model</p>
          </FadeIn>
          <FadeIn blur={6} y={30} delay={0.05}>
            <h2 className="text-heading-lg text-ps-ink mb-8">
              Why a <span className="font-serif italic">solo operator</span>, not an agency team
            </h2>
          </FadeIn>
          <FadeIn blur={4} y={20} delay={0.1}>
            <p className="text-body text-ps-muted mb-4">
              <BrandText text="Pager Studio is built and run by one strategist, not a rotating team of account managers. Every client works directly with the person doing the audit, implementation, and monitoring \u2014 no handoffs, no junior staff." />
            </p>
          </FadeIn>
          <FadeIn blur={4} y={20} delay={0.15}>
            <p className="text-body text-ps-muted mb-4">
              AI-assisted workflows allow this single-operator model to deliver the depth of work that would typically require a full agency team, without the coordination overhead or diluted attention that comes with it.
            </p>
          </FadeIn>
          <FadeIn blur={4} y={20} delay={0.2}>
            <p className="text-body text-ps-ink font-medium">
              Capacity is deliberately capped at ten active clients at any time.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Founder */}
      <section className="section-white px-5 sm:px-6 md:px-10" style={{ paddingTop: 'clamp(60px, 8vw, 100px)', paddingBottom: 'clamp(60px, 8vw, 100px)' }}>
        <div className="max-w-[720px] mx-auto">
          <FadeIn blur={6} y={30}>
            <p className="text-caption-sm text-ps-faint mb-4">Founder</p>
          </FadeIn>
          <FadeIn blur={6} y={30} delay={0.05}>
            <h2 className="text-heading-lg text-ps-ink mb-8">
              <span className="font-serif italic">Sandeep Kumar GR</span>
            </h2>
          </FadeIn>
          <FadeIn blur={4} y={20} delay={0.1}>
            <div className="flex items-center gap-5 mb-8">
              <div className="w-20 h-20 rounded-full bg-ps-ink flex items-center justify-center shrink-0">
                <span className="font-serif text-[28px] text-white italic">SK</span>
              </div>
              <div>
                <p className="text-body font-semibold text-ps-ink">Sandeep Kumar GR</p>
                <p className="text-caption text-ps-faint">Founder & Sole Strategist</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn blur={4} y={20} delay={0.15}>
            <p className="text-body text-ps-muted mb-4">
              Sandeep built <span className="font-serif italic">Pager Studio</span>&apos;s methodology around a specific observation: healthcare marketing agencies were applying traditional SEO tactics to a problem that no longer worked that way \u2014 patients researching high-stakes procedures like IVF or hair restoration were increasingly asking AI engines directly, and most practices had no visibility there at all.
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
      </section>

      {/* Security and Confidentiality */}
      <section className="section-surface px-5 sm:px-6 md:px-10" style={{ paddingTop: 'clamp(60px, 8vw, 100px)', paddingBottom: 'clamp(60px, 8vw, 100px)' }}>
        <div className="max-w-[720px] mx-auto">
          <FadeIn blur={6} y={30}>
            <p className="text-caption-sm text-ps-faint mb-4">Security</p>
          </FadeIn>
          <FadeIn blur={6} y={30} delay={0.05}>
            <h2 className="text-heading-lg text-ps-ink mb-8">
              Security and <span className="font-serif italic">confidentiality</span>
            </h2>
          </FadeIn>
          <FadeIn blur={4} y={20} delay={0.1}>
            <p className="text-body text-ps-muted mb-4">
              <BrandText text="Pager Studio does not collect, store, or process patient data of any kind. All work is limited to the practice's public-facing business information \u2014 website content, directory listings, provider credentials, and public authority signals." />
            </p>
          </FadeIn>
          <FadeIn blur={4} y={20} delay={0.15}>
            <p className="text-body text-ps-muted">
              Every client engagement is governed by a signed legal agreement, and client performance data is never used in <span className="font-serif italic">Pager Studio</span>&apos;s own marketing or case studies.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Engagement Structure */}
      <section className="section-white px-5 sm:px-6 md:px-10" style={{ paddingTop: 'clamp(60px, 8vw, 100px)', paddingBottom: 'clamp(60px, 8vw, 100px)' }}>
        <div className="max-w-[720px] mx-auto">
          <FadeIn blur={6} y={30}>
            <p className="text-caption-sm text-ps-faint mb-4">Engagement</p>
          </FadeIn>
          <FadeIn blur={6} y={30} delay={0.05}>
            <h2 className="text-heading-lg text-ps-ink mb-8">
              Engagement <span className="font-serif italic">structure</span>
            </h2>
          </FadeIn>
          <FadeIn blur={4} y={20} delay={0.1}>
            <p className="text-body text-ps-muted mb-4">
              Every <span className="font-serif italic">Pager Studio</span> engagement runs a minimum of six months under a signed agreement. AI engines build trust in a provider gradually, through sustained technical optimization, off-page authority development, and directory consistency \u2014 this cannot be compressed into a short-term project.
            </p>
          </FadeIn>
          <FadeIn blur={4} y={20} delay={0.15}>
            <p className="text-body text-ps-muted">
              Pricing is value-based and customized to each practice&apos;s size, specialties, provider count, and market, rather than fixed-tier packages.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-surface px-5 sm:px-6 md:px-10" style={{ paddingTop: 'clamp(60px, 8vw, 100px)', paddingBottom: 'clamp(60px, 8vw, 100px)' }}>
        <div className="max-w-[720px] mx-auto">
          <FadeIn blur={6} y={30}>
            <p className="text-caption-sm text-ps-faint mb-4">FAQ</p>
          </FadeIn>
          <FadeIn blur={6} y={30} delay={0.05}>
            <h2 className="text-heading-lg text-ps-ink mb-10">
              Frequently asked <span className="font-serif italic">questions</span>
            </h2>
          </FadeIn>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FadeIn key={faq.q} blur={4} y={20} delay={0.1 + i * 0.06}>
                <details className="group bg-white rounded-[12px] border border-ps-line overflow-hidden transition-all duration-300 open:border-ps-ink open:shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                  <summary className="flex items-center gap-4 px-6 py-5 cursor-pointer text-body font-semibold text-ps-ink list-none hover:text-ps-muted transition-colors duration-200">
                    <span className="flex-1">{faq.q}</span>
                    <span className="text-[20px] font-light text-ps-muted transition-transform duration-300 group-open:rotate-45 flex-shrink-0 select-none">+</span>
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-body text-ps-muted"><BrandText text={faq.a} /></p>
                  </div>
                </details>
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
