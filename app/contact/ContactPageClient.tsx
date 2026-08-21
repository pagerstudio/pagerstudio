'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, type Variants, AnimatePresence } from 'framer-motion';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { EXTENDED_SPECIALTIES } from '@/lib/specialties';

const EASE_OUT = [0.22, 1, 0.36, 1] as [number, number, number, number];

const specialties = [...EXTENDED_SPECIALTIES];

const howItWorks = [
  { num: '01', title: 'Tell us about your practice', desc: 'Your specialty, location, and website.' },
  { num: '02', title: 'We run the audit', desc: 'ChatGPT + Google AI Overviews tested.' },
  { num: '03', title: 'Get your report in 48 hours', desc: 'Gaps, rankings, and next steps.' },
];

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE_OUT },
  }),
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.3, ease: EASE_OUT },
  },
};

const INPUT_STYLE = {
  background: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(255,255,255,0.12)',
};

const PLAN_LABELS: Record<string, string> = {
  foundation: 'Foundation',
  authority: 'Authority',
  dominant: 'Dominant',
};

const PLAN_SUBLINES: Record<string, string> = {
  foundation: 'Let\'s build your AI visibility foundation.',
  authority: 'Let\'s build your authority across every AI platform.',
  dominant: 'Let\'s dominate your specialty across multiple cities.',
};

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className="flex items-center gap-2 flex-1">
          <div
            className="h-1 flex-1 rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              background: i < current
                ? '#ffffff'
                : i === current
                  ? 'rgba(255,255,255,0.6)'
                  : 'rgba(255,255,255,0.12)',
            }}
          />
        </div>
      ))}
      <span className="text-caption-sm tabular-nums ml-2" style={{ color: 'rgba(255,255,255,0.4)', textTransform: 'none' }}>
        {current + 1} / {total}
      </span>
    </div>
  );
}

export default function ContactPageClient() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-ps-black"><Nav /></main>}>
      <ContactPage />
    </Suspense>
  );
}

function ContactPage() {
  const searchParams = useSearchParams();
  const prefilledEmail = searchParams.get('email') || '';
  const planParam = searchParams.get('plan') || '';

  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [specialty, setSpecialty] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    practice: '',
    name: '',
    email: prefilledEmail,
    city: '',
    website: '',
  });

  const [attemptedNext, setAttemptedNext] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const updateField = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const canProceed = () => {
    if (step === 0) {
      return (
        form.practice.trim().length >= 2 &&
        form.name.trim().length >= 2 &&
        isValidEmail(form.email.trim())
      );
    }
    if (step === 1) return form.city.trim().length >= 2 && specialty;
    return true;
  };

  const handleNext = () => {
    if (!canProceed()) {
      setAttemptedNext(true);
      return;
    }
    setAttemptedNext(false);
    setStep(1);
  };

  const handleBack = () => {
    if (step > 0) {
      setAttemptedNext(false);
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canProceed()) {
      setAttemptedNext(true);
      return;
    }
    setIsSubmitting(true);
    setFormError('');
    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          practice: form.practice,
          name: form.name,
          email: form.email,
          city: form.city,
          website: form.website,
          specialty,
          plan: planParam,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setFormError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setFormError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-ps-black texture-lines">
      <Nav />

      <section className="min-h-screen flex items-center px-5 sm:px-6 md:px-10 pt-24 sm:pt-32 pb-16">
        <div className="container grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-10 lg:gap-20 items-center">

          {/* Left column */}
          <div className="text-white">
            <motion.p
              className="text-caption-sm mb-5"
              style={{ color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              Free AI Visibility Audit
            </motion.p>
            <motion.h1
              className="text-display-lg mb-6"
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              {planParam && PLAN_LABELS[planParam] ? (
                <>
                  You selected the<br className="hidden sm:block" /> {PLAN_LABELS[planParam]} plan.
                </>
              ) : (
                <>
                  See where your practice<br className="hidden sm:block" /> stands <span className="font-serif italic">with AI</span>.
                </>
              )}
            </motion.h1>
            <motion.p
              className="text-body mb-10 max-w-[440px]"
              style={{ color: 'rgba(255,255,255,0.5)' }}
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              {planParam && PLAN_SUBLINES[planParam] ? (
                PLAN_SUBLINES[planParam]
              ) : (
                <>
                  We&apos;ll audit how ChatGPT and Google AI Overviews currently describe
                  your practice — and show you exactly what&apos;s missing.
                </>
              )}
            </motion.p>

            <motion.div
              className="flex flex-col gap-0 mb-10"
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              {howItWorks.map((s, i) => (
                <div
                  key={s.num}
                  className={`flex items-start gap-4 py-5 ${
                    i < howItWorks.length - 1 ? 'border-b' : ''
                  }`}
                  style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <span
                    className="text-caption-sm mt-0.5 flex-shrink-0 w-7"
                    style={{ color: 'rgba(255,255,255,0.3)', textTransform: 'none' }}
                  >
                    {s.num}
                  </span>
                  <div>
                    <p className="text-body font-semibold text-white leading-[1.4]">
                      {s.title}
                    </p>
                    <p className="text-body-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column — form card */}
          <motion.div
            className="rounded-[20px] p-7 sm:p-8 md:p-9 bg-white/[0.07] border border-white/[0.14]"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: EASE_OUT }}
                  className="text-center py-12"
                >
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-5">
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-heading-lg text-white mb-3">You&apos;re all <span className="font-serif italic">set</span></h3>
                  <p className="text-body max-w-[300px] mx-auto mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    We&apos;ll run your audit across ChatGPT and Google AI Overviews and deliver your report within 48 hours.
                  </p>
                  <div
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="text-body-sm font-medium text-white">Audit in progress</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-heading-md text-white mb-1">
                    Get Your Free <span className="font-serif italic">Audit</span>
                  </h2>
                  {planParam && PLAN_LABELS[planParam] && (
                    <p className="text-body-sm mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      You selected the {PLAN_LABELS[planParam]} plan. Let&apos;s start with your free audit.
                    </p>
                  )}
                  <p className="text-body-sm mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {step === 0 ? 'Step 1 of 2 — Your details' : 'Step 2 of 2 — Your practice'}
                  </p>

                  <StepIndicator current={step} total={2} />

                  <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input type="hidden" name="plan" value={planParam} />
                    <AnimatePresence mode="wait">
                      {step === 0 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3, ease: EASE_OUT }}
                          className="flex flex-col gap-4"
                        >
                          <div className="flex flex-col gap-1.5">
                            <label className="text-caption font-medium flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'none' }}>
                              Practice name <span className="text-white/30">*</span>
                            </label>
                            <input
                              type="text"
                              name="practice"
                              placeholder="e.g. Radiance Dermatology"
                              required
                              value={form.practice}
                              onChange={(e) => updateField('practice', e.target.value)}
                              className="w-full text-body text-white placeholder:text-white/30 rounded-[10px] px-4 py-3 outline-none transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] focus:ring-1 focus:ring-white/25"
                              style={{
                                ...INPUT_STYLE,
                                borderColor: attemptedNext && form.practice.trim().length < 2 ? '#ef4444' : undefined,
                              }}
                            />
                            {attemptedNext && form.practice.trim().length < 2 && (
                              <span className="text-caption-sm text-red-400" style={{ textTransform: 'none' }}>Enter your practice name</span>
                            )}
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label className="text-caption font-medium flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'none' }}>
                              Your name <span className="text-white/30">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              placeholder="e.g. Dr. Priya Sharma"
                              required
                              value={form.name}
                              onChange={(e) => updateField('name', e.target.value)}
                              className="w-full text-body text-white placeholder:text-white/30 rounded-[10px] px-4 py-3 outline-none transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] focus:ring-1 focus:ring-white/25"
                              style={{
                                ...INPUT_STYLE,
                                borderColor: attemptedNext && form.name.trim().length < 2 ? '#ef4444' : undefined,
                              }}
                            />
                            {attemptedNext && form.name.trim().length < 2 && (
                              <span className="text-caption-sm text-red-400" style={{ textTransform: 'none' }}>Enter your name</span>
                            )}
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label className="text-caption font-medium flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'none' }}>
                              Work email <span className="text-white/30">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              placeholder="you@practice.com"
                              required
                              value={form.email}
                              onChange={(e) => updateField('email', e.target.value)}
                              className="w-full text-body text-white placeholder:text-white/30 rounded-[10px] px-4 py-3 outline-none transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] focus:ring-1 focus:ring-white/25"
                              style={{
                                ...INPUT_STYLE,
                                borderColor: attemptedNext && !isValidEmail(form.email.trim()) ? '#ef4444' : undefined,
                              }}
                            />
                            {attemptedNext && !isValidEmail(form.email.trim()) && (
                              <span className="text-caption-sm text-red-400" style={{ textTransform: 'none' }}>
                                {form.email.trim() ? 'Enter a valid email address' : 'Enter your work email'}
                              </span>
                            )}
                          </div>
                        </motion.div>
                      )}

                      {step === 1 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3, ease: EASE_OUT }}
                          className="flex flex-col gap-4"
                        >
                          <div className="flex flex-col gap-1.5">
                            <label className="text-caption font-medium flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'none' }}>
                              City / Location <span className="text-white/30">*</span>
                            </label>
                            <input
                              type="text"
                              name="city"
                              placeholder="e.g. Mumbai"
                              required
                              value={form.city}
                              onChange={(e) => updateField('city', e.target.value)}
                              className="w-full text-body text-white placeholder:text-white/30 rounded-[10px] px-4 py-3 outline-none transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] focus:ring-1 focus:ring-white/25"
                              style={{
                                ...INPUT_STYLE,
                                borderColor: attemptedNext && form.city.trim().length < 2 ? '#ef4444' : undefined,
                              }}
                            />
                            {attemptedNext && form.city.trim().length < 2 && (
                              <span className="text-caption-sm text-red-400" style={{ textTransform: 'none' }}>Enter your city</span>
                            )}
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label className="text-caption font-medium flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'none' }}>
                              Website <span className="font-normal" style={{ color: 'rgba(255,255,255,0.25)' }}>optional</span>
                            </label>
                            <input
                              type="url"
                              name="website"
                              placeholder="https://yourpractice.com"
                              value={form.website}
                              onChange={(e) => updateField('website', e.target.value)}
                              className="w-full text-body text-white placeholder:text-white/30 rounded-[10px] px-4 py-3 outline-none transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] focus:ring-1 focus:ring-white/25"
                              style={INPUT_STYLE}
                            />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label className="text-caption font-medium flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'none' }}>
                              Specialty <span className="text-white/30">*</span>
                            </label>
                            <div className="relative" ref={dropdownRef}>
                              <input type="hidden" name="specialty" value={specialty} required />
                              <button
                                type="button"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="w-full text-body rounded-[10px] px-4 py-3 outline-none text-left transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] focus:ring-1 focus:ring-white/25 flex items-center justify-between"
                                style={{
                                  ...INPUT_STYLE,
                                  color: specialty ? '#fff' : 'rgba(255,255,255,0.4)',
                                }}
                              >
                                <span>{specialty || 'Select your specialty'}</span>
                                <svg
                                  className={`w-4 h-4 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${dropdownOpen ? 'rotate-180' : ''}`}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="rgba(255,255,255,0.4)"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M6 9l6 6 6-6" />
                                </svg>
                              </button>
                              {dropdownOpen && (
                                <div
                                  className="absolute z-50 w-full mt-1.5 rounded-[10px] overflow-hidden max-h-[200px] overflow-y-auto"
                                  style={{
                                    background: '#1a1a1a',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
                                  }}
                                >
                                  {specialties.map((s) => (
                                    <button
                                      key={s}
                                      type="button"
                                      onClick={() => {
                                        setSpecialty(s);
                                        setDropdownOpen(false);
                                      }}
                                      className={`w-full text-left text-body px-4 py-2.5 transition-colors duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                        specialty === s
                                          ? 'bg-white/10 text-white'
                                          : 'text-white/70 hover:bg-white/[0.06] hover:text-white'
                                      }`}
                                    >
                                      {s}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                            {attemptedNext && !specialty && (
                              <span className="text-caption-sm text-red-400" style={{ textTransform: 'none' }}>Select your specialty</span>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Navigation */}
                    <div aria-live="polite" className="min-h-[20px]">
                      {formError && (
                        <p className="text-caption-sm text-red-400 text-center" style={{ textTransform: 'none' }}>
                          {formError}
                        </p>
                      )}
                    </div>
                    <div className="flex gap-3 mt-1">
                      {step > 0 && (
                        <button
                          type="button"
                          onClick={handleBack}
                          className="text-body-sm font-medium rounded-[10px] px-5 py-3 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/[0.12] active:scale-95 cursor-pointer"
                          style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.6)' }}
                        >
                          Back
                        </button>
                      )}
                      {step < 1 ? (
                        <button
                          type="button"
                          onClick={handleNext}
                          disabled={!canProceed()}
                          className="flex-1 text-body font-semibold rounded-[10px] py-3 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:opacity-[0.88] hover:scale-[0.98] active:opacity-70 active:scale-95 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
                          style={{ background: '#ffffff', color: '#111111' }}
                        >
                          Continue
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={!canProceed() || isSubmitting}
                          className="flex-1 text-body font-semibold rounded-[10px] py-3 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:opacity-[0.88] hover:scale-[0.98] active:opacity-70 active:scale-95 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
                          style={{ background: '#ffffff', color: '#111111' }}
                        >
                          {isSubmitting ? 'Submitting...' : 'Get Your Free Audit'}
                        </button>
                      )}
                    </div>
                  </form>
                  {!planParam && (
                    <p className="text-body-sm mt-4 text-center" style={{ color: 'rgba(255,255,255,0.4)' }}>
                      See where your practice stands with AI.
                    </p>
                  )}
                  <p className="text-caption mt-3.5 text-center" style={{ color: 'rgba(255,255,255,0.3)', textTransform: 'none', letterSpacing: 0 }}>
                    No credit card required. Report delivered in 48 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
