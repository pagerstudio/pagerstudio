'use client';

import { useEffect, useRef, useState, useId } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import TiltCard from './TiltCard';

function useCountUp(target: number, prefix = '', suffix = '', duration = 1.4, decimals = 0) {
  const [value, setValue] = useState(prefix + '0' + suffix);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const animated = useRef(false);

  useEffect(() => {
    if (!inView || animated.current) return;
    animated.current = true;

    const controls = animate(0, target, {
      duration,
      ease: 'circOut',
      onUpdate: (latest) => {
        const v = decimals > 0 ? latest.toFixed(decimals) : Math.round(latest);
        setValue(prefix + v + suffix);
      },
    });

    return () => controls.stop();
  }, [inView, target, duration, prefix, suffix, decimals]);

  return { ref, value };
}

export default function ShockingStats() {
  const counter3 = useCountUp(36, '', '%', 1.4);
  const counter4 = useCountUp(47, '', '%', 1.2);
  const counter5 = useCountUp(89, '', '%', 1.4);
  const counterRevenue = useCountUp(1.5, '−₹', 'Cr', 1.6, 1);
  const gradientId = useId();

  return (
    <section className="section section-white" aria-label="Shocking Stats">
      <div className="container">
        <motion.p
          className="text-caption-sm text-ps-faint mb-4"
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Shocking Stats
        </motion.p>
        <motion.h2
          className="text-heading-xl text-ps-ink mb-12"
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          The numbers don&apos;t lie.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-3">
          {/* Card 1 — 47% with ChatGPT chat */}
          <TiltCard className="bg-white rounded-[24px] border border-[#E5E5E5] p-5 sm:p-6 flex flex-col min-h-0 sm:min-h-[380px] relative" delay={0}>
            {/* Stat header */}
            <div className="flex items-start gap-4 mb-4">
              <div ref={counter4.ref} className="text-display-lg text-ps-ink">{counter4.value}</div>
              <div className="flex flex-col gap-1 pt-6">
                <span className="text-body-sm font-semibold text-ps-ink leading-[1.4]">of patients use AI search tools like ChatGPT, Gemini, Claude, and Perplexity</span>
                <span className="text-caption text-ps-faint leading-[1.5] normal-case">to find answers, recommendations, and healthcare providers.</span>
              </div>
            </div>

            {/* ChatGPT interface */}
            <div className="bg-[#F7F7F8] rounded-xl flex-1 flex flex-col overflow-hidden border border-[#E5E5E5]">
              {/* Chat messages */}
              <div className="flex-1 p-3 sm:p-4 space-y-4 sm:space-y-5 overflow-hidden">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-[#E8E8E8] rounded-3xl rounded-tr-lg px-4 py-2.5 max-w-[280px]">
                    <span className="font-sans text-[11px] text-[#333] leading-relaxed block">best dermatologist near me in Mumbai</span>
                  </div>
                </div>
                {/* AI message */}
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#10A37F] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073z"/></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="bg-white rounded-3xl rounded-tl-lg px-4 py-3 border border-[#E5E5E5]">
                      <p className="font-sans text-[12px] text-[#333] leading-[1.8]">
                        Based on ratings and reviews, here are the top 3 dermatologists in Mumbai:
                      </p>
                      <div className="mt-3 space-y-2">
                        {[
                          { name: 'Dr. Priya Sharma', spec: 'Cosmetic Dermatologist', rating: '4.9', reviews: '2,400+ reviews', badge: 'Top rated' },
                          { name: 'Dr. Rahul Mehta', spec: 'Dermatologist & Hair Transplant', rating: '4.8', reviews: '1,800+ reviews', badge: '' },
                          { name: 'Dr. Anjali Patel', spec: 'Board Certified Dermatologist', rating: '4.8', reviews: '1,200+ reviews', badge: '' },
                        ].map((doc, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="font-sans text-[11px] text-[#111] font-semibold mt-px">{i + 1}.</span>
                            <div className="flex-1">
                              <div className="flex items-center gap-1.5">
                                <span className="font-sans text-[11px] text-[#111] font-medium">{doc.name}</span>
                                {doc.badge && <span className="font-sans text-[8px] bg-[#E8F5E9] text-[#2E7D32] px-1.5 py-0.5 rounded-full font-medium">{doc.badge}</span>}
                              </div>
                              <span className="font-sans text-[9px] text-[#999] block">{doc.spec}</span>
                              <span className="font-sans text-[9px] text-[#999]">{doc.rating}★ · {doc.reviews}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="font-sans text-[11px] text-[#999] mt-3 leading-relaxed italic">Would you like me to check appointment availability for any of these?</p>
                    </div>
                    {/* Action buttons */}
                    <div className="flex items-center gap-1 mt-2 ml-1">
                      <button type="button" className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#E8E8E8] active:bg-[#DCDCDC] transition-colors" aria-label="Like">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
                      </button>
                      <button type="button" className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#E8E8E8] active:bg-[#DCDCDC] transition-colors" aria-label="Dislike">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" transform="scale(-1,1) translate(-24,0)"/><path d="M17 22h3a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-3" transform="scale(-1,1) translate(-24,0)"/></svg>
                      </button>
                      <button type="button" className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#E8E8E8] active:bg-[#DCDCDC] transition-colors" aria-label="Copy">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                      </button>
                      <button type="button" className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#E8E8E8] active:bg-[#DCDCDC] transition-colors" aria-label="Share">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Input bar */}
              <div className="px-4 pb-4">
                <div className="flex items-center gap-2 bg-white border border-[#E5E5E5] rounded-2xl px-4 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                  <span className="font-sans text-[12px] text-[#999] flex-1">Message ChatGPT...</span>
                  <div className="w-7 h-7 rounded-full bg-[#111] flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                  </div>
                </div>
              </div>
            </div>
            <a href="https://rater8.com/2026-patient-choice-report/" target="_blank" rel="noopener noreferrer" className="text-caption-sm text-ps-faint mt-3 hover:underline block normal-case">Source: rater8, 2026</a>
          </TiltCard>

          {/* Card 2 — −₹1.5Cr Revenue loss stat */}
          <TiltCard className="bg-white rounded-[24px] border border-[#E5E5E5] p-5 sm:p-8 flex flex-col items-center justify-center min-h-0 sm:min-h-[340px] relative" delay={0.1}>
            {/* Red decline graph in a box */}
            <div className="border border-[#E5E5E5] rounded-xl p-5 mb-5 w-full max-w-[480px]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-sans text-[9px] text-[#999] uppercase tracking-wider">Revenue trend</span>
                <span className="font-sans text-[9px] text-[#DC2626] font-semibold">−12%</span>
              </div>
              <svg width="100%" height="130" viewBox="0 0 200 50" fill="none" preserveAspectRatio="none">
                <defs>
                  <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#DC2626" stopOpacity="0.12"/>
                    <stop offset="100%" stopColor="#DC2626" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0 8 L40 12 L80 16 L120 22 L160 32 L200 45 L200 50 L0 50 Z" fill={`url(#${gradientId})`} />
                <polyline points="0,8 40,12 80,16 120,22 160,32 200,45" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <circle cx="200" cy="45" r="2.5" fill="#DC2626" />
              </svg>
              <div className="flex items-center justify-between mt-1.5">
                <span className="font-sans text-[8px] text-[#CCC]">Jan</span>
                <span className="font-sans text-[8px] text-[#CCC]">Jul</span>
                <span className="font-sans text-[8px] text-[#CCC]">Dec</span>
              </div>
            </div>
            <div ref={counterRevenue.ref} className="text-display-lg text-ps-ink block">{counterRevenue.value}</div>
            <p className="text-body-sm text-ps-muted mt-4 text-center max-w-[260px]">
              Estimated annual revenue loss if AI sends 5 patients a month elsewhere.
            </p>
            <a href="https://rater8.com/2026-patient-choice-report/" target="_blank" rel="noopener noreferrer" className="text-caption-sm text-ps-faint mt-2 hover:underline block normal-case">Source: rater8, 2026</a>
          </TiltCard>

          {/* Card 3 — 36% research report with bar chart */}
          <TiltCard className="bg-white rounded-[24px] border border-[#E5E5E5] p-5 sm:p-6 flex flex-col md:flex-row relative" delay={0.2}>
            {/* Left side — title, stat, subtext */}
            <div className="flex flex-col justify-between flex-1 md:pr-8 md:pl-4 py-2">
              <div>
                <span className="font-sans text-[10px] font-semibold tracking-[0.1em] uppercase text-[#999] block mb-2">Patient Choice Report · 2026</span>
                <div ref={counter3.ref} className="text-display-lg text-ps-ink">{counter3.value}</div>
              </div>
              <p className="text-body-sm text-ps-muted mt-4 md:mt-6 max-w-[280px]">
                of patients say AI decided which doctor they chose — ahead of Google search and doctor referrals.
              </p>
              <div className="mt-auto pt-4 md:pt-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#111] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L9.5 8.5L3 12l6.5 3.5L12 22l2.5-6.5L21 12l-6.5-3.5L12 2z"/></svg>
                  </span>
                  <span className="font-sans text-[11px] font-semibold text-[#111]">AI is now the deciding layer</span>
                </div>
                <a href="https://rater8.com/2026-patient-choice-report/" target="_blank" rel="noopener noreferrer" className="text-caption-sm text-ps-faint mt-2 block hover:underline normal-case">Source: rater8, 2026</a>
              </div>
            </div>

            {/* Right side — bar chart in box */}
            <div className="bg-white rounded-2xl border border-black/20 p-5 sm:p-6 flex flex-col w-full md:w-[380px] flex-shrink-0 mt-4 md:mt-0">
              <span className="font-sans text-[10px] font-semibold text-[#999] uppercase tracking-wider block mb-5">Which source influenced your choice?</span>

              {/* Mobile bars */}
              <div className="relative md:hidden" style={{ height: '200px' }}>
                <div className="absolute left-2 right-2 border-t-2 border-dashed border-[#D1D5DB]" style={{ bottom: '188px' }} />
                <div className="absolute bottom-0 left-3 right-3 flex items-end justify-center gap-3">
                  {[
                    { label: 'AI tools', h: 188, highlight: true },
                    { label: 'Google', h: 154, highlight: false },
                    { label: 'Doctor', h: 120, highlight: false },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center gap-1 w-[55px]">
                      <div className="w-full rounded-2xl" style={{ height: item.h, backgroundColor: item.highlight ? '#111' : '#F0F0F0', backgroundImage: item.highlight ? 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.12) 4px, rgba(255,255,255,0.12) 8px)' : 'repeating-linear-gradient(45deg, transparent, transparent 4px, #E0E0E0 4px, #E0E0E0 8px)' }} />
                      <span className={`font-sans text-[10px] whitespace-nowrap ${item.highlight ? 'font-semibold text-[#111]' : 'text-[#999]'}`}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop bars */}
              <div className="relative hidden md:block" style={{ height: '350px' }}>
                <div className="absolute left-2 right-2 border-t-2 border-dashed border-[#D1D5DB]" style={{ bottom: '330px' }} />
                <div className="absolute bottom-0 left-4 right-4 flex items-end justify-center gap-6">
                  {[
                    { label: 'AI tools', h: 330, highlight: true },
                    { label: 'Google', h: 270, highlight: false },
                    { label: 'Doctor', h: 210, highlight: false },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center gap-1 w-[80px]">
                      <div className="w-full rounded-2xl" style={{ height: item.h, backgroundColor: item.highlight ? '#111' : '#F0F0F0', backgroundImage: item.highlight ? 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.12) 4px, rgba(255,255,255,0.12) 8px)' : 'repeating-linear-gradient(45deg, transparent, transparent 4px, #E0E0E0 4px, #E0E0E0 8px)' }} />
                      <span className={`font-sans text-[10px] whitespace-nowrap font-semibold text-[#111]`}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Card 4 — 89% Google AI Overview mockup */}
          <TiltCard className="bg-white rounded-[24px] border border-[#E5E5E5] p-5 sm:p-6 flex flex-col min-h-0 sm:min-h-[420px] relative" delay={0.3}>
            {/* Google AI Overview in a box frame */}
            <div className="border border-[#DDD] rounded-xl p-3 sm:p-4 mb-4">
              {/* Search bar */}
              <div className="flex items-center gap-2.5 border border-[#E5E5E5] rounded-full px-3 py-2 mb-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                <span className="font-sans text-[11px] text-[#111]">best dermatologist near me</span>
                <svg className="ml-auto" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/></svg>
              </div>

              {/* AI Overview header */}
              <div className="flex items-center gap-1.5 mb-2.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L9.5 8.5L3 12l6.5 3.5L12 22l2.5-6.5L21 12l-6.5-3.5L12 2z" fill="#111" stroke="#111" strokeWidth="0.5"/>
                </svg>
                <span className="font-sans text-[11px] font-semibold text-[#111]">AI Overview</span>
                <span className="font-sans text-[9px] text-[#999] ml-0.5">· Generating...</span>
              </div>

              {/* AI generated answer */}
              <div className="bg-[#F8F9FA] rounded-lg p-3 mb-3">
                <p className="font-sans text-[11px] leading-[1.7] text-[#333]">
                  The top-rated dermatologists in your area include <span className="font-semibold">Dr. Priya Sharma</span> (4.9★, 2,400+ reviews), <span className="font-semibold">Dr. Rahul Mehta</span> (4.8★, 1,800+ reviews), and <span className="font-semibold">Dr. Anjali Patel</span> (4.8★, 1,200+ reviews).
                </p>
                {/* Source chips */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {['Practo', 'Google Reviews', 'Justdial'].map((name) => (
                    <span key={name} className="inline-flex items-center gap-1 bg-white border border-[#E5E5E5] rounded-full px-2 py-0.5">
                      <span className="w-3 h-3 rounded-full bg-[#EEE] flex items-center justify-center text-[6px] font-bold text-[#666]">{name[0]}</span>
                      <span className="font-sans text-[9px] text-[#666]">{name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Organic results */}
              <div className="space-y-2">
                {[
                  { title: 'Top 10 Dermatologists in Your City', url: 'practo.com/dermatologist', desc: 'Find the best rated skin specialists...' },
                  { title: 'Best Dermatologists - Book Online', url: 'justdial.com/dermatology', desc: 'Compare ratings, read patient reviews...' },
                ].map((r, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="w-3 h-3 rounded-full bg-[#EEE] flex items-center justify-center text-[6px] font-bold text-[#888]">{r.url[0]?.toUpperCase()}</span>
                      <span className="font-sans text-[9px] text-[#666]">{r.url}</span>
                    </div>
                    <span className="font-sans text-[11px] text-[#1a0dab] group-hover:underline block leading-tight">{r.title}</span>
                    <span className="font-sans text-[9px] text-[#666] leading-snug block">{r.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stat below */}
            <div className="flex items-center gap-3 sm:gap-4 mt-auto pt-4 sm:pt-6">
              <div ref={counter5.ref} className="text-display-lg text-ps-ink">{counter5.value}</div>
              <div className="flex flex-col gap-1">
                <span className="text-body-sm font-semibold text-ps-ink">of Google healthcare searches</span>
                <span className="text-caption text-ps-faint normal-case">now show an AI Overview before websites.</span>
              </div>
            </div>
            <a href="https://www.brightedge.com/resources/weekly-ai-search-insights/healthcare-ai-evolution-google-2023-2025" target="_blank" rel="noopener noreferrer" className="text-caption-sm text-ps-faint mt-1 sm:mt-3 hover:underline block normal-case">Source: BrightEdge Research, 2026</a>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
