'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

/* ──────────────── FAQ Data ──────────────── */

interface FaqItem {
  q: string;
  a: string;
}

const categories: { label: React.ReactNode; id: string; items: FaqItem[] }[] = [
  {
    label: <>Getting <span className="font-serif italic">Found</span> by AI</>,
    id: 'getting-found',
    items: [
      {
        q: 'How do I get my clinic recommended by ChatGPT?',
        a: 'ChatGPT recommends clinics that have strong structured data on their website, consistent directory presence, named physician credentials, and authoritative content that directly answers patient questions. To get recommended, your practice needs medical schema markup (MedicalClinic, Physician, MedicalProcedure), FAQ content written the way patients ask questions, and citations from trusted health directories. This is exactly what we build at Pager Studio — every month, for one clinic per specialty per city (Authority and Dominant plans include exclusivity).',
      },
      {
        q: 'Why is my clinic not showing up in Google AI Overviews?',
        a: 'Google AI Overviews pulls from pages it considers authoritative, well-structured, and directly relevant to the search query. If your clinic is missing schema markup, lacks depth in its content, or has inconsistent information across directories, Google AI will cite your competitors instead. A technical readiness audit is the first step — we offer one free.',
      },
      {
        q: 'How do I rank in Perplexity for healthcare searches?',
        a: 'Perplexity cites sources it finds credible, well-structured, and directly answering the query. For healthcare, this means having pages that use clear question-and-answer formatting, proper medical schema, named doctor credentials, and citations from authoritative third-party sources. Perplexity is one of the seven platforms we track and optimize for across our Authority and Dominant plans.',
      },
      {
        q: 'What is AI search optimization for doctors and clinics?',
        a: 'AI search optimization — also called AEO, Answer Engine Optimization — is the process of making your practice visible and citable inside AI-generated answers. When a patient asks ChatGPT or Gemini "best dermatologist in Bangalore," AI search optimization is what determines whether your name appears in the answer. It involves structured data, authority content, physician credentialing signals, and prompt testing across platforms. It is different from SEO and requires a different approach entirely.',
      },
      {
        q: 'How do I get more patients from AI search?',
        a: 'Patients using AI to find healthcare providers are high-intent — they are actively choosing who to trust before they ever call a clinic. To capture this audience, your practice needs to be cited in AI answers for the queries your patients are already asking. This requires schema markup, optimized provider profiles, FAQ content, and directory authority — all working together. Practices that invest in AI visibility now are capturing patients that competitors are invisible to.',
      },
      {
        q: 'Does schema markup help doctors get found by AI?',
        a: 'Yes — significantly. Schema markup is structured data that tells AI systems exactly what your practice is, who your doctors are, what procedures you offer, and where you are located. Without it, AI has to guess — and it will cite a competitor that made it easier. Medical schema types that matter most are MedicalClinic, Physician, MedicalProcedure, and FAQPage. These are part of every implementation we do at Pager Studio.',
      },
      {
        q: 'How do I improve my clinic\'s AI visibility in India?',
        a: 'AI visibility in India requires optimizing for the platforms Indian patients actually use — ChatGPT, Google AI Overviews, Perplexity, and Google Gemini. It also requires understanding local search behavior: patients in Mumbai, Bangalore, Delhi, and other metros are actively using AI to find specialists before booking. The steps are: audit your current citation presence, fix technical gaps on your website, build authority content, and maintain consistent directory citations. Pager Studio does all of this as a done-for-you monthly service.',
      },
      {
        q: 'Why does my competitor show up in ChatGPT but I don\'t?',
        a: 'Your competitor has likely done one or more of the following: added medical schema markup to their website, built authoritative FAQ content, maintained consistent directory listings, or had their physicians profiled on credible third-party sources. AI cites the practice that has given it the clearest, most trustworthy signal. Our audit identifies exactly which gaps are causing you to be invisible — and what it takes to close them.',
      },
      {
        q: 'How long does it take to start appearing in AI answers?',
        a: 'Most practices see measurable citation lift within 60 to 90 days of implementation beginning. The timeline depends on your current baseline — if you have zero schema markup and thin content, there is more to build. If you have some foundation already, results can come faster. AI visibility compounds: work done in month one gets cited in month three, and authority built across six months creates a durable advantage that is hard for competitors to reverse quickly.',
      },
      {
        q: 'What AI platforms do patients in India use to find doctors?',
        a: 'The primary platforms are ChatGPT (GPT-4o), Google AI Overviews (visible on every Google search), Google Gemini, and Perplexity. Meta AI is growing rapidly on WhatsApp and Instagram. Grok is used by a smaller but vocal audience. We track and optimize across all seven platforms on our Authority and Dominant plans — because visibility on one platform alone is not enough.',
      },
    ],
  },
  {
    label: <>Understanding AI <span className="font-serif italic">Visibility</span></>,
    id: 'ai-visibility',
    items: [
      {
        q: 'What is AI visibility for healthcare?',
        a: 'AI visibility is how prominently your practice appears when patients ask AI platforms — ChatGPT, Google Gemini, Perplexity, or Google AI Overviews — questions like "best IVF clinic in Mumbai" or "top dermatologist near me." Unlike traditional search where you rank on a list, AI gives a direct answer and names specific providers. If your practice isn\'t being cited in those answers, patients don\'t find you — even if you rank well on Google.',
      },
      {
        q: 'How does AI decide which doctor or clinic to recommend?',
        a: 'AI platforms pull from multiple signals — structured data on your website, your presence on authoritative directories, the quality and depth of your online content, named doctor credentials, and how consistently your practice information appears across the web. AI treats healthcare content under YMYL (Your Money Your Life) standards, meaning it prioritizes expertise, authority, and trustworthiness above all else.',
      },
      {
        q: 'What is AEO and how is it different from SEO?',
        a: 'SEO (Search Engine Optimization) is about ranking on Google\'s blue-link results. AEO (Answer Engine Optimization) is about being the answer AI gives when someone asks a direct question. SEO targets algorithms. AEO targets AI reasoning. They overlap in some technical areas but require fundamentally different content strategies, schema markup, and authority signals.',
      },
      {
        q: 'Does being listed on Practo or Justdial help with AI visibility?',
        a: 'Partially. Directory listings contribute to your overall citation footprint, which AI does factor in. But directory presence alone is not enough. AI needs structured data on your own website, authoritative long-form content, named physician credentials, and consistent NAP (name, address, phone) data across sources. We build all of these — directory citations are one piece of a larger system.',
      },
      {
        q: 'Is AI visibility the same as Google AI Overviews?',
        a: 'No. Google AI Overviews is one platform. AI visibility covers ChatGPT, Google Gemini, Perplexity, Claude, Grok, Meta AI, and more. Each platform has different citation behavior. We track and optimize across all of them — not just Google.',
      },
    ],
  },
  {
    label: <>Our <span className="font-serif italic">Process</span></>,
    id: 'process',
    items: [
      {
        q: 'What happens during the free audit?',
        a: 'We run your practice name, specialty, and location through live AI prompts on ChatGPT and Google AI Overviews — the exact questions patients ask. We document where you appear, what AI says about you, what it says about your competitors, and what technical gaps are preventing you from being cited. You receive a structured report within 48 hours.',
      },
      {
        q: 'What does the full AI Visibility Audit include?',
        a: 'The full audit goes deeper — 40+ prompts across ChatGPT and Google AI Overviews, a complete competitor gap analysis, a technical readiness check of your website\'s schema markup, a content authority assessment, and a prioritized list of recommendations. It is included on signup for all paid plans.',
      },
      {
        q: 'How long does implementation take before we see results?',
        a: 'Most clients see measurable citation lift within 60 to 90 days. AI visibility compounds — content published in month one gets cited in month three, authority built in month two amplifies in month four. The full impact of a six-month engagement is significantly greater than any single month in isolation.',
      },
      {
        q: 'Do you write the content or do we?',
        a: 'We do. Every optimized page, authority article, FAQ set, provider profile, and schema markup is written and implemented by us. You review and approve. We handle everything technical — you focus on your practice.',
      },
      {
        q: 'Do I need technical access to my website?',
        a: 'For the basic audit — no. For implementation, we need access to your website\'s CMS or backend to install schema markup and publish optimized pages. We work with most major platforms including WordPress, Squarespace, Wix, Webflow, and custom-built sites.',
      },
      {
        q: 'Which AI platforms do you track and optimize for?',
        a: 'Foundation plan covers ChatGPT, Google Gemini, and Google AI Overviews. Authority and Dominant plans cover ChatGPT, Google Gemini, Google AI Overviews, Perplexity, Claude, Grok, and Meta AI — seven platforms in total.',
      },
    ],
  },
  {
    label: <>Pricing & <span className="font-serif italic">Plans</span></>,
    id: 'pricing',
    items: [
      {
        q: 'Is the audit free to run?',
        a: 'Yes. The free audit is completely free — no credit card, no commitment. You get a structured citation report within 48 hours showing exactly where your practice stands in ChatGPT and Google AI Overviews right now.',
      },
      {
        q: 'What is the minimum engagement?',
        a: 'Six months. AI visibility compounds over time — a shorter engagement does not give the content and authority signals enough time to take full effect. After six months, you can continue month-to-month or cancel with 30 days notice.',
      },
      {
        q: 'Can I cancel the monthly retainer anytime?',
        a: 'Yes, after your initial six-month engagement. The retainer is month-to-month with 30 days notice. If you cancel on a Authority or Dominant plan, your city exclusivity is released and becomes available to a competing clinic in your specialty.',
      },
      {
        q: 'Can I upgrade plans mid-engagement?',
        a: 'Yes. You can upgrade from Foundation to Authority or Authority to Dominant at any point. Downgrading is not available mid-engagement.',
      },
      {
        q: 'Is there a setup fee?',
        a: 'No setup fee. The full AI Visibility Audit included on signup covers the onboarding and baseline work.',
      },
      {
        q: 'Do you offer annual pricing?',
        a: 'Yes. Annual plans are 20% off monthly pricing across all three plans.',
      },
    ],
  },
  {
    label: <>Results & <span className="font-serif italic">Measurement</span></>,
    id: 'results',
    items: [
      {
        q: 'How do you measure success?',
        a: 'We track citation frequency across all major AI platforms — how often your practice is named, in what context, and for which patient queries. Each month you receive a citation report showing your visibility score, movement versus the previous month, and how you compare to key competitors in your city and specialty.',
      },
      {
        q: 'What if I\'m already doing SEO?',
        a: 'SEO and AI visibility are complementary but distinct. Your existing SEO work helps — domain authority and quality content carry over. But SEO alone will not get you cited by AI. We build the additional layer that AI platforms specifically need: structured schema markup, YMYL-standard health content, and named physician authority signals that SEO agencies do not typically build.',
      },
      {
        q: 'What if my competitor signs up with you first?',
        a: 'We work with one clinic per specialty per city on Authority and Dominant plans. If a competing clinic in your specialty and city signs up before you, we cannot take you on as a client for that city. Foundation plan does not include exclusivity. We recommend not waiting — exclusivity is first come, first served.',
      },
    ],
  },
  {
    label: <>Privacy & <span className="font-serif italic">Operations</span></>,
    id: 'privacy',
    items: [
      {
        q: 'Is my practice data kept private?',
        a: 'Absolutely. We treat all client data with the same confidentiality standards expected in healthcare. We sign NDAs as standard. We do not share, sell, or reference client data outside of our direct working relationship. All audits and reports are private to your practice.',
      },
      {
        q: 'Where do you currently operate?',
        a: 'We work with healthcare practices across India. We are not limited by geography for remote work — content, schema, and authority building are done digitally. For practices outside India, contact us directly.',
      },
      {
        q: 'Do you work with solo practitioners or only groups?',
        a: 'Both. Solo practitioners often see faster results because the authority can be concentrated on a single named physician. Group practices benefit from broader content coverage across multiple providers and specialties.',
      },
    ],
  },
];

/* ──────────────── JSON-LD Schema ──────────────── */

function FaqSchema() {
  const allItems = categories.flatMap((c) => c.items);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allItems.map((item) => ({
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

/* ──────────────── Accordion Item ──────────────── */

function FaqAccordion({ item, isOpen, onToggle, index }: { item: FaqItem; isOpen: boolean; onToggle: () => void; index: number }) {
  const answerId = `faq-answer-${index}`;
  return (
    <div
      className={`bg-white border border-ps-line/60 rounded-[12px] transition-shadow duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isOpen ? 'shadow-[0_1px_4px_rgba(0,0,0,0.04)]' : 'shadow-none hover:shadow-[0_1px_3px_rgba(0,0,0,0.03)]'
      }`}
    >
      <button
        type="button"
        className="faq-trigger flex items-center w-full px-6 py-5 bg-transparent border-none cursor-pointer text-body font-semibold text-ps-ink text-left gap-4 hover:text-ps-muted active:text-ps-muted transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-ps-ink focus-visible:outline-offset-2 focus-visible:rounded"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
      >
        <span className="flex-1">{item.q}</span>
        <span className="faq-icon text-[20px] font-light flex-shrink-0 text-ps-muted select-none transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] self-center" aria-hidden="true">
          {isOpen ? '×' : '+'}
        </span>
      </button>
      <div
        id={answerId}
        role="region"
        className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ maxHeight: isOpen ? '800px' : '0px' }}
      >
        <div className="px-6 pb-5">
          <p className="text-body text-ps-muted">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

/* ──────────────── Page ──────────────── */

export default function FaqPageClient() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <main>
      <FaqSchema />
      <Nav />

      {/* ── Hero ── */}
      <section className="section section-white px-5 sm:px-6 md:px-10" style={{ paddingTop: 'clamp(100px, 14vw, 140px)', paddingBottom: 'clamp(50px, 8vw, 80px)' }}>
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-caption-sm text-ps-faint mb-5">
            FAQ
          </p>
          <h1 className="text-display-lg text-ps-ink mb-6">
            Everything you want to <span className="font-serif italic">know</span>.
          </h1>
          <p className="text-body-lg text-ps-muted max-w-[520px] mx-auto">
            Straight answers about AI visibility, our process, and what working with Pager Studio actually looks like.
          </p>
        </div>
      </section>

      {/* ── FAQ Categories ── */}
      {categories.map((cat) => (
        <section key={cat.id} className="py-[40px] sm:py-[60px] px-5 sm:px-6 md:px-10 bg-white border-t border-ps-line">
          <div className="container-sm">
            <h2 className="text-heading-md text-ps-ink/60 mb-5">
              {cat.label}
            </h2>
            <div className="flex flex-col gap-3">
              {cat.items.map((item, idx) => (
                <FaqAccordion
                  key={item.q}
                  item={item}
                  index={idx}
                  isOpen={openId === item.q}
                  onToggle={() => setOpenId((prev) => (prev === item.q ? null : item.q))}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── Bottom CTA ── */}
      <section className="section section-white px-5 sm:px-6 md:px-10">
        <div className="bg-ps-black rounded-[20px] sm:rounded-[28px] max-w-[1200px] mx-auto px-5 sm:px-6 md:px-[60px] py-[35px] sm:py-[60px] md:py-[100px] text-center">
          <p
            className="text-caption-sm mb-4"
            style={{ color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase' }}
          >
            Still have questions
          </p>
          <h2 className="text-display-lg text-white mb-5">
            Book a free 30-minute <span className="font-serif italic">call</span>.
          </h2>
          <p
            className="text-body-lg max-w-[460px] mx-auto mb-10"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            We&apos;ll walk you through exactly where your clinic stands — and what it takes to be recommended by AI.
          </p>
          <a
            href="/contact"
            className="btn btn-primary bg-white text-ps-black hover:bg-ps-black hover:text-white hover:border-white active:opacity-70 active:scale-95"
          >
            Book Your Free Strategy Call ↗
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
