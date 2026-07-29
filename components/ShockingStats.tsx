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
  const counter1 = useCountUp(47, '', '%', 1.4);
  const counter2 = useCountUp(55, '', '%', 1.2);
  const counter3 = useCountUp(36, '', '%', 1.4);
  const counter4 = useCountUp(89, '', '%', 1.4);
  const gradientId = useId();

  return (
    <section className="section section-white" aria-label="Industry Data">
      <div className="container">
        <motion.p
          className="text-caption-sm text-ps-faint mb-4"
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Industry Data
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Card 1 — 47% use AI to research providers */}
          <TiltCard className="bg-white rounded-[24px] border border-[#E5E5E5] p-6 sm:p-8 flex flex-col relative md:col-span-2" delay={0}>
            <div className="flex items-start gap-4 mb-5">
              <div ref={counter1.ref} className="text-display-lg text-ps-ink">{counter1.value}</div>
              <div className="flex flex-col gap-1 pt-5">
                <span className="text-body-sm font-semibold text-ps-ink leading-[1.3]">of patients used AI tools to research healthcare providers</span>
                <span className="text-caption text-ps-faint normal-case">Up from 31% in 2025 — +16pts in 9 months.</span>
              </div>
            </div>

            {/* ChatGPT mockup */}
            <div className="bg-[#F7F7F8] rounded-xl overflow-hidden border border-[#E5E5E5]">
              <div className="p-4 space-y-4">
                <div className="flex justify-end">
                  <div className="bg-[#E8E8E8] rounded-2xl rounded-tr-md px-4 py-2">
                    <span className="font-sans text-xs text-[#333]">best dermatologist near me in Mumbai</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#10A37F] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073z"/></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 border border-[#E5E5E5]">
                      <p className="font-sans text-xs text-[#333] leading-relaxed">
                        Top 3 dermatologists in Mumbai:
                      </p>
                      <div className="mt-2 space-y-1.5">
                        {[
                          { name: 'Dr. Priya Sharma', rating: '4.9', reviews: '2,400+' },
                          { name: 'Dr. Rahul Mehta', rating: '4.8', reviews: '1,800+' },
                          { name: 'Dr. Anjali Desai', rating: '4.8', reviews: '1,200+' },
                        ].map((doc, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className="font-sans text-[10px] text-[#111] font-semibold">{i + 1}.</span>
                            <span className="font-sans text-[10px] text-[#111] font-medium">{doc.name}</span>
                            <span className="font-sans text-[9px] text-[#999]">{doc.rating}★ · {doc.reviews}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 pb-4">
                <div className="flex items-center gap-2 bg-white border border-[#E5E5E5] rounded-xl px-4 py-2.5">
                  <span className="font-sans text-xs text-[#999] flex-1">Message ChatGPT...</span>
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                  </div>
                </div>
              </div>
            </div>
            <a href="https://rater8.com/2026-patient-choice-report/" target="_blank" rel="noopener noreferrer" className="text-caption-sm text-ps-faint mt-3 hover:underline block normal-case">Source: rater8 2026 Patient Choice Report</a>
          </TiltCard>

          {/* Card 2 — 55% canceled/avoided booking because of reviews */}
          <TiltCard className="bg-white rounded-[24px] border border-[#E5E5E5] p-6 sm:p-8 flex flex-col items-center justify-center relative md:col-span-1" delay={0.1}>
            <div className="border border-[#E5E5E5] rounded-xl p-4 mb-5 w-full">
              <div className="flex items-center justify-between mb-2">
                <span className="font-sans text-[10px] text-[#999] uppercase tracking-wider">Canceled or avoided booking</span>
                <span className="font-sans text-[10px] text-[#DC2626] font-semibold">+15pts YoY</span>
              </div>
              <svg width="100%" height="80" viewBox="0 0 200 50" fill="none" preserveAspectRatio="none">
                <defs>
                  <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#DC2626" stopOpacity="0.12"/>
                    <stop offset="100%" stopColor="#DC2626" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0 30 L40 28 L80 22 L120 16 L160 12 L200 8 L200 50 L0 50 Z" fill={`url(#${gradientId})`} />
                <polyline points="0,30 40,28 80,22 120,16 160,12 200,8" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <circle cx="200" cy="8" r="2.5" fill="#DC2626" />
              </svg>
              <div className="flex items-center justify-between mt-1.5">
                <span className="font-sans text-[9px] text-[#CCC]">2025: 40%</span>
                <span className="font-sans text-[9px] text-[#CCC]">2026: 55%</span>
              </div>
            </div>
            <div ref={counter2.ref} className="text-display-lg text-ps-ink">{counter2.value}</div>
            <p className="text-body-sm text-ps-muted mt-3 text-center max-w-[260px]">
              of patients canceled or avoided booking because of online reviews.
            </p>
            <a href="https://rater8.com/2026-patient-choice-report/" target="_blank" rel="noopener noreferrer" className="text-caption-sm text-ps-faint mt-2 hover:underline block normal-case">Source: rater8 2026 Patient Choice Report</a>
          </TiltCard>

          {/* Card 3 — 36% bar chart: what influences patient choice */}
          <TiltCard className="bg-white rounded-[24px] border border-[#E5E5E5] p-6 sm:p-8 flex flex-col md:flex-row relative md:col-span-2" delay={0.2}>
            <div className="flex flex-col justify-between flex-1 md:pr-6 md:pl-2">
              <div>
                <span className="font-sans text-[10px] font-semibold tracking-[0.1em] uppercase text-[#999] block mb-2">Patient Choice Report · 2026</span>
                <div ref={counter3.ref} className="text-display-lg text-ps-ink">{counter3.value}</div>
              </div>
              <p className="text-body-sm text-ps-muted mt-4 max-w-[240px]">
                of patients say AI tools most influence which doctor they choose.
              </p>
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#111] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L9.5 8.5L3 12l6.5 3.5L12 22l2.5-6.5L21 12l-6.5-3.5L12 2z"/></svg>
                  </span>
                  <span className="font-sans text-xs font-semibold text-[#111]">AI is now the deciding layer</span>
                </div>
                <a href="https://rater8.com/2026-patient-choice-report/" target="_blank" rel="noopener noreferrer" className="text-caption-sm text-ps-faint mt-1.5 block hover:underline normal-case">Source: rater8 2026 Patient Choice Report</a>
              </div>
            </div>

            {/* Bar chart */}
            <div className="bg-white rounded-2xl border border-black/20 p-5 flex flex-col w-full md:w-[340px] flex-shrink-0 mt-4 md:mt-0">
              <span className="font-sans text-[10px] font-semibold text-[#999] uppercase tracking-wider block mb-4">Which source influenced your choice?</span>

              {/* Mobile bars */}
              <div className="relative md:hidden" style={{ height: '130px' }}>
                <div className="absolute left-2 right-2 border-t-2 border-dashed border-[#D1D5DB]" style={{ bottom: '118px' }} />
                <div className="absolute bottom-0 left-3 right-3 flex items-end justify-center gap-4">
                  {[
                    { label: 'AI tools', value: '36%', h: 108, highlight: true },
                    { label: 'Google', value: '34%', h: 102, highlight: false },
                    { label: 'Doctor', value: '32%', h: 96, highlight: false },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center gap-1 w-[55px]">
                      <span className="font-sans text-[9px] font-semibold text-[#111]">{item.value}</span>
                      <div className="w-full rounded-xl" style={{ height: item.h, backgroundColor: item.highlight ? '#111' : '#F0F0F0', backgroundImage: item.highlight ? 'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,0.12) 3px, rgba(255,255,255,0.12) 6px)' : 'repeating-linear-gradient(45deg, transparent, transparent 3px, #E0E0E0 3px, #E0E0E0 6px)' }} />
                      <span className={`font-sans text-[10px] whitespace-nowrap ${item.highlight ? 'font-semibold text-[#111]' : 'text-[#999]'}`}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop bars */}
              <div className="relative hidden md:block" style={{ height: '200px' }}>
                <div className="absolute left-2 right-2 border-t-2 border-dashed border-[#D1D5DB]" style={{ bottom: '188px' }} />
                <div className="absolute bottom-0 left-4 right-4 flex items-end justify-center gap-6">
                  {[
                    { label: 'AI tools', value: '36%', h: 188, highlight: true },
                    { label: 'Google', value: '34%', h: 177, highlight: false },
                    { label: 'Doctor', value: '32%', h: 166, highlight: false },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center gap-1 w-[75px]">
                      <span className="font-sans text-[10px] font-semibold text-[#111]">{item.value}</span>
                      <div className="w-full rounded-xl" style={{ height: item.h, backgroundColor: item.highlight ? '#111' : '#F0F0F0', backgroundImage: item.highlight ? 'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,0.12) 3px, rgba(255,255,255,0.12) 6px)' : 'repeating-linear-gradient(45deg, transparent, transparent 3px, #E0E0E0 3px, #E0E0E0 6px)' }} />
                      <span className="font-sans text-[10px] whitespace-nowrap font-semibold text-[#111]">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Card 4 — 89% Google AI Overview */}
          <TiltCard className="bg-white rounded-[24px] border border-[#E5E5E5] p-6 sm:p-8 flex flex-col relative md:col-span-1" delay={0.3}>
            <div className="border border-[#DDD] rounded-xl p-4 mb-4">
              <div className="flex items-center gap-2.5 border border-[#E5E5E5] rounded-full px-4 py-2 mb-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                <span className="font-sans text-xs text-[#111]">best dermatologist near me</span>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L9.5 8.5L3 12l6.5 3.5L12 22l2.5-6.5L21 12l-6.5-3.5L12 2z" fill="#111" stroke="#111" strokeWidth="0.5"/>
                </svg>
                <span className="font-sans text-xs font-semibold text-[#111]">AI Overview</span>
              </div>

              <div className="bg-[#F8F9FA] rounded-lg p-3">
                <p className="font-sans text-xs leading-relaxed text-[#333]">
                  Top-rated dermatologists: <span className="font-semibold">Dr. Priya Sharma</span> (4.9★, 2,400+ reviews), <span className="font-semibold">Dr. Rahul Mehta</span> (4.8★, 1,800+ reviews), <span className="font-semibold">Dr. Anjali Desai</span> (4.8★, 1,200+ reviews).
                </p>
                <div className="flex gap-1.5 mt-2">
                  {['Practo', 'Reviews', 'Justdial'].map((name) => (
                    <span key={name} className="inline-flex items-center gap-0.5 bg-white border border-[#E5E5E5] rounded-full px-2 py-0.5">
                      <span className="font-sans text-[8px] text-[#666]">{name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-auto">
              <div ref={counter4.ref} className="text-display-lg text-ps-ink">{counter4.value}</div>
              <div className="flex flex-col gap-1">
                <span className="text-body-sm font-semibold text-ps-ink">of Google healthcare searches</span>
                <span className="text-caption text-ps-faint normal-case">trigger an AI Overview before websites.</span>
              </div>
            </div>
            <a href="https://www.brightedge.com/resources/weekly-ai-search-insights/healthcare-ai-evolution-google-2023-2025" target="_blank" rel="noopener noreferrer" className="text-caption-sm text-ps-faint mt-2 hover:underline block normal-case">Source: BrightEdge Research</a>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
