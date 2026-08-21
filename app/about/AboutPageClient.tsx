'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function AboutPageClient() {
  return (
    <main>
      <Nav />

      <section className="section section-white px-5 sm:px-6 md:px-10" style={{ paddingTop: 'clamp(100px, 14vw, 140px)', paddingBottom: 'clamp(50px, 8vw, 80px)' }}>
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

          <h1 className="text-display-lg text-ps-ink mb-6">
            About <span className="font-serif italic">Pager Studio</span>
          </h1>

          <div className="mt-12 space-y-10">
            {/* ── Founder ── */}
            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">
                Founded by <span className="font-serif italic">Sandeep Kumar Gr</span>
              </h2>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-ps-ink flex items-center justify-center shrink-0">
                  <span className="font-serif text-[22px] text-white italic">SK</span>
                </div>
                <div>
                  <p className="text-body font-semibold text-ps-ink">Sandeep Kumar Gr</p>
                  <p className="text-caption text-ps-faint">Founder, Pager Studio</p>
                </div>
              </div>
              <p className="text-body text-ps-muted">
                Sandeep Kumar Gr is the founder of Pager Studio, a specialist AI visibility agency for healthcare practices in India. He built Pager Studio after recognizing that the way patients find doctors had fundamentally shifted — from Google searches to AI-generated answers.
              </p>
            </section>

            {/* ── Why Pager Studio ── */}
            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">
                Why <span className="font-serif italic"> Pager Studio</span> exists
              </h2>
              <p className="text-body text-ps-muted mb-3">
                <!-- TEMPLATE: Edit this section to tell your story. Explain the problem you saw and why you started the company. Keep it honest and direct. -->
                When patients ask ChatGPT or Google AI Overviews for a recommendation, AI picks one clinic and sends them there. That clinic is either yours or your competitor's. Most healthcare practices have no idea this is happening — and even fewer know how to influence it.
              </p>
              <p className="text-body text-ps-muted">
                Pager Studio was built to close that gap. We help clinics appear where patients are actually looking — inside AI-generated answers across ChatGPT, Google Gemini, Perplexity, Claude, Grok, Meta AI, and Google AI Overviews.
              </p>
            </section>

            {/* ── What we believe ── */}
            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">
                What we <span className="font-serif italic">believe</span>
              </h2>
              <ul className="space-y-4 text-body text-ps-muted">
                <li>
                  <strong className="text-ps-ink">AI visibility is not SEO.</strong> Traditional search optimization targets Google's blue links. We optimize for AI reasoning — a fundamentally different process that requires different strategies, different content, and different technical foundations.
                </li>
                <li>
                  <strong className="text-ps-ink">Exclusivity drives results.</strong> We work with one clinic per specialty per city on Authority and Dominant plans. When you sign with Pager Studio, your spot is reserved. The alternative is your competitor getting it.
                </li>
                <li>
                  <strong className="text-ps-ink">Results compound over time.</strong> AI visibility is not a one-time fix. Content published in month one gets cited in month three. Authority built in month two amplifies in month four. That is why we structure our engagements around six-month cycles.
                </li>
              </ul>
            </section>

            {/* ── By the numbers ── */}
            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">
                By the <span className="font-serif italic">numbers</span>
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-5 rounded-[12px] bg-ps-surface border border-ps-line">
                  <p className="text-heading-lg text-ps-ink mb-1">7</p>
                  <p className="text-caption text-ps-faint">AI platforms monitored</p>
                </div>
                <div className="p-5 rounded-[12px] bg-ps-surface border border-ps-line">
                  <p className="text-heading-lg text-ps-ink mb-1">6</p>
                  <p className="text-caption text-ps-faint">Month minimum engagement</p>
                </div>
                <div className="p-5 rounded-[12px] bg-ps-surface border border-ps-line">
                  <p className="text-heading-lg text-ps-ink mb-1">1</p>
                  <p className="text-caption text-ps-faint">Clinic per specialty per city</p>
                </div>
                <div className="p-5 rounded-[12px] bg-ps-surface border border-ps-line">
                  <p className="text-heading-lg text-ps-ink mb-1">48h</p>
                  <p className="text-caption text-ps-faint">Free audit turnaround</p>
                </div>
              </div>
            </section>

            {/* ── CTA ── */}
            <section className="pt-4">
              <h2 className="text-heading-md text-ps-ink mb-4">
                Ready to find out where you <span className="font-serif italic">stand</span>?
              </h2>
              <p className="text-body text-ps-muted mb-6">
                Get a free audit showing exactly how ChatGPT and Google AI Overviews see your practice — and what your competitors are doing that you are not.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-sans text-[14px] font-semibold bg-ps-ink text-white rounded-full px-6 py-3 hover:bg-black hover:shadow-[0_2px_12px_rgba(0,0,0,0.25)] hover:scale-[0.97] active:scale-[0.95] transition-all duration-200 group"
              >
                Get Your Free Audit
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
