'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

/* ──────────────── Data ──────────────── */

const plans = [
  {
    name: 'Foundation',
    monthlyPrice: 50000,
    annualPrice: 40000,
    description: 'For clinics entering AI search for the first time.',
    highlight: false,
    tag: '',
    features: [
      '3 AI platforms: ChatGPT, Google Gemini, Google AI Overviews',
      '20 clinic pages optimized for AI answers',
      '5 trusted health directory placements',
      '5 AI citation sources added',
      '50 patient search queries monitored',
      '1 city',
      'Monthly AI ranking report',
    ],
    footnote: 'AI Visibility Audit included.',
  },
  {
    name: 'Authority',
    monthlyPrice: 85000,
    annualPrice: 68000,
    description: 'For clinics ready to compete across every major AI platform.',
    highlight: true,
    tag: 'Most Popular',
    features: [
      '7 AI platforms: ChatGPT, Google Gemini, Google AI Overviews, Perplexity, Claude, Grok, Meta AI',
      '50 clinic pages optimized for AI answers',
      '15 trusted health directory placements',
      '15 AI citation sources added',
      '100 patient search queries monitored',
      '1 city',
      'Monthly AI ranking report',
      'Direct access to your visibility team',
      'Monthly growth call with your strategist',
      'One clinic per specialty per city',
    ],
    footnote: 'AI Visibility Audit included.',
  },
  {
    name: 'Dominant',
    monthlyPrice: 150000,
    annualPrice: 120000,
    description: 'For clinics that want to own their specialty across multiple cities.',
    highlight: false,
    tag: '',
    features: [
      '7 AI platforms: ChatGPT, Google Gemini, Google AI Overviews, Perplexity, Claude, Grok, Meta AI',
      '100 clinic pages optimized for AI answers',
      '25 trusted health directory placements',
      '25 AI citation sources added',
      '200 patient search queries monitored',
      '3 cities',
      'Monthly AI ranking report',
      'Direct access to your visibility team',
      'Bi-weekly growth calls with your strategist',
      'Quarterly competitor visibility audit',
      'One clinic per specialty per city',
    ],
    footnote: 'AI Visibility Audit included.',
  },
];

function formatINR(n: number) {
  return '₹' + n.toLocaleString('en-IN');
}

const comparisonHeaders = ['Foundation', 'Authority', 'Dominant'];
const comparisonRows = [
  { label: 'Monthly price', values: ['₹50,000', '₹85,000', '₹1,50,000'] },
  { label: 'Annual price/mo', values: ['₹40,000', '₹68,000', '₹1,20,000'] },
  { label: 'AI Visibility Audit', values: ['Included', 'Included', 'Included'] },
  { label: 'Clinic pages optimized/mo', values: ['20', '50', '100'] },
  { label: 'Directory placements/mo', values: ['5', '15', '25'] },
  { label: 'AI citation sources/mo', values: ['5', '15', '25'] },
  { label: 'AI platforms', values: ['3', '7', '7'] },
  { label: 'Cities', values: ['1', '1', '3'] },
  { label: 'Search queries monitored', values: ['50', '100', '200'] },
  { label: 'Growth calls', values: ['—', 'Monthly', 'Bi-weekly'] },
  { label: 'Visibility team access', values: ['—', '✓', '✓'] },
  { label: 'Quarterly competitor audit', values: ['—', '—', '✓'] },
  { label: 'Exclusivity', values: ['—', '✓', '✓'] },
];

import { CORE_SPECIALTIES } from '@/lib/specialties';
import { pricingFaq } from '@/data/faq';

/* ──────────────── FAQ Schema ──────────────── */

function PricingFaqSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pricingFaq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ──────────────── FAQ Item ──────────────── */

function FaqItem({ item, isOpen, onToggle }: { item: typeof pricingFaq[0]; isOpen: boolean; onToggle: () => void }) {
  const answerId = `pricing-faq-${item.q.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  return (
    <div className={`faq-item border-b border-ps-line ${isOpen ? 'is-open' : ''}`}>
      <button
        type="button"
        className="faq-trigger flex justify-between items-center w-full py-[22px] bg-transparent border-none cursor-pointer text-body-sm font-semibold text-ps-ink text-left gap-4 hover:text-ps-muted active:text-ps-muted transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-ps-ink focus-visible:outline-offset-2 focus-visible:rounded"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
      >
        <span>{item.q}</span>
        <span className="faq-icon text-[18px] font-light flex-shrink-0 text-ps-muted select-none" aria-hidden="true">+</span>
      </button>
      <div
        id={answerId}
        role="region"
        className="overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ maxHeight: isOpen ? '800px' : '0px' }}
      >
        <p className="text-body-sm text-ps-muted pb-[22px]">{item.a}</p>
      </div>
    </div>
  );
}

/* ──────────────── Page ──────────────── */

export default function PricingPageClient() {
  const [openFaq, setOpenFaq] = useState<string | null>(pricingFaq[0].q);
  const [annual, setAnnual] = useState(false);

  return (
    <main>
      <PricingFaqSchema />
      <Nav />

      {/* ── Plans ── */}
      <section className="section section-white px-5 sm:px-6 md:px-10" id="plans">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-caption-sm text-ps-faint mb-4">
              Plans
            </p>
            <h1 className="text-heading-xl text-ps-ink mb-4">
              Choose your <span className="font-serif italic">plan</span>
            </h1>
            <p className="text-body text-ps-muted max-w-[500px] mx-auto mb-8">
              6-month engagement. One clinic per specialty per city (Authority and Dominant). Cancel anytime after. 20% off annual plans.
            </p>

            {/* Billing toggle */}
            <div className="inline-flex items-center gap-3 bg-ps-surface border border-ps-line rounded-full p-1">
              <button
                onClick={() => setAnnual(false)}
                className={`text-body-sm font-semibold rounded-full px-5 py-2 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  !annual ? 'bg-ps-ink text-white' : 'text-ps-muted hover:text-ps-ink active:text-ps-ink active:scale-[0.97]'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`text-body-sm font-semibold rounded-full px-5 py-2 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  annual ? 'bg-ps-ink text-white' : 'text-ps-muted hover:text-ps-ink active:text-ps-ink active:scale-[0.97]'
                }`}
              >
                Annual <span className="text-caption-sm font-normal opacity-70" style={{ textTransform: 'none' }}>Save 20%</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => {
              const price = annual ? plan.annualPrice : plan.monthlyPrice;
              return (
                <div
                  key={plan.name}
                  className={`relative rounded-[20px] border p-5 sm:p-8 flex flex-col ${
                    plan.highlight
                      ? 'border-ps-ink shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)]'
                      : 'border-ps-line shadow-none'
                  }`}
                >
                  {plan.tag && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ps-ink text-white text-caption-sm tracking-[0.05em] px-4 py-1 rounded-full whitespace-nowrap" style={{ textTransform: 'uppercase' }}>
                      {plan.tag}
                    </span>
                  )}
                  <h3 className="text-heading-md text-ps-ink mb-1">
                    {plan.name}
                  </h3>
                  <div key={annual ? 'annual' : 'monthly'} className="animate-price-in" aria-live="polite">
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="font-sans text-[2rem] font-bold text-ps-ink">{formatINR(price)}</span>
                      <span className="text-body text-ps-muted">/month</span>
                    </div>
                    {annual ? (
                      <p className="text-body-sm text-ps-faint mb-1">
                        Billed annually · Save 20%
                      </p>
                    ) : (
                      <p className="text-body-sm text-ps-faint mb-1">
                        Save 20% with annual billing
                      </p>
                    )}
                  </div>
                  <p className="text-body text-ps-muted mb-6 min-h-[44px]">
                    {plan.description}
                  </p>
                  <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="text-body-sm text-ps-ink pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-2 before:h-2 before:rounded-full before:bg-ps-ink/50">
                        {f}
                      </li>
                    ))}
                  </ul>
                  {plan.footnote && (
                    <p className="text-body-sm text-ps-ink mb-4 font-medium">{plan.footnote}</p>
                  )}
                <Link
                  href={`/contact?plan=${plan.name.toLowerCase()}`}
                  className={`group block text-center btn ${
                    plan.highlight
                      ? 'btn-primary hover:opacity-[0.88] active:opacity-70 active:scale-[0.97]'
                      : 'btn-secondary hover:bg-ps-line/40 active:bg-ps-line/60 active:scale-[0.97]'
                  }`}
                >
                  Start with {plan.name}
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </Link>
              </div>
              );
            })}
          </div>

          <p className="text-caption text-ps-muted text-center mt-8" style={{ textTransform: 'none', letterSpacing: 0 }}>
            Save 20% on annual plans. AI Visibility Audit included on all plans.
          </p>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="section section-surface px-5 sm:px-6 md:px-10">
          <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-heading-lg text-ps-ink mb-4">
                What you&apos;re <span className="font-serif italic">building</span> over 6 months
              </h2>
              <p className="text-body text-ps-muted">Full feature breakdown available on request.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-ps-line">
                    <th className="py-4 pr-6 text-body-sm font-semibold text-ps-muted"></th>
                    {comparisonHeaders.map((h) => (
                      <th key={h} className="py-4 px-4 text-body-sm font-semibold text-ps-ink text-center">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <motion.tr
                      key={row.label}
                      className="compare-row border-b border-ps-line/50"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.05 }}
                      transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <td className="py-3.5 pr-6 text-body-sm text-ps-muted whitespace-nowrap">{row.label}</td>
                      {row.values.map((v, j) => (
                        <td key={j} className="py-3.5 px-4 text-body-sm text-ps-ink text-center">
                          {v}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

      {/* ── Why Healthcare AI Visibility Is Different ── */}
      <section className="section section-white px-6 md:px-10">
          <div className="container-sm">
            <h2 className="text-heading-lg text-ps-ink mb-6">
              Why healthcare AI visibility is <span className="font-serif italic">different</span>
            </h2>
            <p className="text-body-lg text-ps-muted mb-4">
              General SEO agencies optimize for Google&apos;s blue links. General AEO agencies optimize for broad brand
              mentions. Neither understands what AI platforms need to actually cite a healthcare provider.
            </p>
            <p className="text-body-lg text-ps-muted mb-4">
              AI platforms treat health content under YMYL — Your Money Your Life. They only cite clinics and doctors
              they deeply trust. Getting cited requires signals most agencies don&apos;t know exist.
            </p>
            <p className="text-body-lg text-ps-muted mb-4">
              Named doctor credentials. Medical schema markup — MedicalClinic, Physician, MedicalProcedure, FAQPage —
              the machine-readable layer that tells AI exactly what your clinic does and why it should trust you.
              Medically structured content that answers exactly what patients ask. E-E-A-T signals on every page —
              visible author credentials, review dates, medical source citations, accreditation signals.
              Location-specific content, optimized Google Business Profile, consistent directory presence.
            </p>
            <p className="text-body-lg text-ps-ink font-medium">
              This is what we build. Every month. For one clinic per specialty per city (Authority and Dominant plans).
            </p>
          </div>
        </section>

      {/* ── Specialties ── */}
      <section className="section section-surface px-5 sm:px-6 md:px-10" id="specialties-pricing">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-heading-xl text-ps-ink mb-4">
                The <span className="font-serif italic">specialties</span> we work with
              </h2>
              <p className="text-body-lg text-ps-muted max-w-[560px] mx-auto">
                Pager Studio exclusively partners with high-value healthcare providers where patient decisions are driven by trust, research, and AI recommendations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {CORE_SPECIALTIES.map((s) => (
                <div
                  key={s.id}
                  className="group relative bg-white border border-ps-line rounded-[16px] p-7 sm:p-9 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-ps-ink/20 hover:shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
                >
                  <h3 className="text-heading-md text-ps-ink mb-3">
                    {s.fullName}
                  </h3>
                  <p className="text-body text-ps-muted">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-body text-ps-faint text-center mt-12 sm:mt-16 max-w-[600px] mx-auto">
              One clinic per specialty per city (Authority and Dominant plans include exclusivity).
            </p>
          </div>
        </section>

      {/* ── Exclusivity & Timeline ── */}
      <section className="section section-white px-6 md:px-10">
          <div className="container-sm flex flex-col gap-8 sm:gap-14">
            <div>
              <h2 className="text-heading-md text-ps-ink mb-4">
                Why only <span className="font-serif italic">one</span> clinic per city?
              </h2>
              <p className="text-body-lg text-ps-muted mb-3">
                We work with one clinic per specialty per city on Authority and Dominant plans. Not because we can&apos;t handle more — because we won&apos;t.
              </p>
              <p className="text-body-lg text-ps-muted mb-3">
                We cannot build AI visibility for your clinic and your direct competitor simultaneously.
                It wouldn&apos;t be fair and it wouldn&apos;t work.
              </p>
              <p className="text-body-lg text-ps-ink font-medium">
                When you sign with Pager Studio, your specialty in your city is reserved. The spot is either yours or your competitor&apos;s.
              </p>
            </div>

            <div>
              <h2 className="text-heading-md text-ps-ink mb-4">
                Why <span className="font-serif italic">6 months</span>?
              </h2>
              <p className="text-body-lg text-ps-muted mb-3">
                AI visibility compounds. Content published in month 1 gets cited in month 3. Authority built in month 2
                amplifies everything in month 4. This is not Google Ads — it doesn&apos;t stop when you stop paying.
                It&apos;s an asset that keeps working.
              </p>
              <p className="text-body-lg text-ps-muted">
                Weeks 6–8: first AI citation improvements. Month 3: meaningful increase in patient inquiries from AI search.
                Month 6: compounding effect fully active.
              </p>
            </div>
          </div>
        </section>

      {/* ── FAQ ── */}
      <section className="section section-surface px-6 md:px-10" id="pricing-faq">
        <div className="container-sm">
          <h2 className="text-heading-lg text-ps-ink mb-10 text-center">
            Frequently asked <span className="font-serif italic">questions</span>
          </h2>
          <div>
            {pricingFaq.map((f) => (
              <FaqItem
                key={f.q}
                item={f}
                isOpen={openFaq === f.q}
                onToggle={() => setOpenFaq((prev) => (prev === f.q ? null : f.q))}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section section-white px-6 md:px-10" style={{ paddingBottom: 'clamp(72px, 10vw, 100px)' }}>
        <div className="bg-ps-black rounded-[20px] sm:rounded-[28px] max-w-[1200px] mx-auto px-5 sm:px-6 md:px-[60px] py-[40px] sm:py-[60px] md:py-[100px] text-center">
          <p className="text-caption-sm mb-4" style={{ color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase' }}>
            Start here
          </p>
          <h2 className="text-heading-xl text-white mb-5">
            See where you <span className="font-serif italic">stand</span> — for free
          </h2>
          <p className="text-body-lg max-w-[460px] mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.45)' }}>
            We&apos;ll audit how ChatGPT and Google AI Overviews see your practice and deliver a report within 48 hours.
          </p>
          <Link
            href="/contact"
            className="group btn btn-primary bg-white text-ps-black hover:bg-ps-black hover:text-white hover:border-white active:opacity-70 active:scale-95"
          >
            Get Your Free Audit
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </Link>
          <p className="text-caption mt-3" style={{ color: 'rgba(255,255,255,0.35)', textTransform: 'none', letterSpacing: 0 }}>
            No credit card required · Report delivered in 48 hours
          </p>
        </div>
      </section>

      {/* ── Disclaimer ── */}
      <section className="pb-[60px] px-6 md:px-10 bg-white">
        <div className="container-sm text-center">
          <p className="text-caption text-ps-faint" style={{ textTransform: 'none', letterSpacing: 0 }}>
            After your 6-month engagement, you can cancel anytime with 30 days notice.
            If you are on a Authority or Dominant plan, your city exclusivity is released and becomes available to competing clinics in your specialty.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
