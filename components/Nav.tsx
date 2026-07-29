'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

const SOCIAL_LINKS = [
  { href: 'https://instagram.com/pagerstudio', label: 'Instagram' },
  { href: 'https://x.com/pagerstudio', label: 'X' },
  { href: 'https://linkedin.com/company/pagerstudio', label: 'LinkedIn' },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const handleMenuToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobile();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen, closeMobile]);

  useEffect(() => {
    if (!mobileOpen) return;
    const menu = menuRef.current;
    if (!menu) return;
    const focusable = menu.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    menu.addEventListener('keydown', handleTab);
    return () => menu.removeEventListener('keydown', handleTab);
  }, [mobileOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-white focus:text-ps-ink focus:px-4 focus:py-2 focus:rounded-full focus:shadow-lg focus:outline-none"
      >
        Skip to content
      </a>

      {/* Black backdrop */}
      <div
        className="fixed inset-0 z-[99] bg-ps-black"
        style={{
          opacity: mobileOpen ? 1 : 0,
          transition: 'opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
          pointerEvents: mobileOpen ? 'auto' : 'none',
        }}
        aria-hidden="true"
      />

      {/* Nav pill */}
      <motion.nav
        ref={navRef}
        className="fixed inset-x-0 z-[101] flex justify-center px-5 sm:px-6 top-4 sm:top-5"
        role="navigation"
        aria-label="Main navigation"
        initial={prefersReducedMotion ? {} : { opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 2.4 }}
      >
        <div className="relative w-full max-w-[260px] sm:max-w-[340px]">
          <div
            className="absolute inset-0 rounded-full bg-white/95 backdrop-blur-xl border border-ps-line/50"
            style={{ boxShadow: '0 2px 24px rgba(0,0,0,0.07)' }}
            aria-hidden="true"
          />

          <div className="relative flex items-center justify-between rounded-full pl-5 sm:pl-6 pr-3 sm:pr-4 py-2 sm:py-2.5">
            <Link
              href="/"
              className="font-serif leading-none tracking-tight text-ps-ink whitespace-nowrap text-[21px] sm:text-[26px] shrink-0 active:opacity-70"
              aria-label="Pager Studio home"
            >
              Pager <span className="italic">Studio</span>
            </Link>

            <button
              ref={toggleRef}
              className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full text-ps-ink hover:bg-ps-surface transition-colors duration-150 touch-manipulation ml-1 focus-visible:ring-0 focus:outline-none focus-visible:outline-none"
              onClick={handleMenuToggle}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? (
                <span className="text-[24px] leading-none font-light">×</span>
              ) : (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 7h16M3 15h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            {/* Close button — top right */}
            <button
              onClick={closeMobile}
              className="fixed top-4 sm:top-5 right-5 sm:right-6 z-[110] text-white text-[28px] font-light leading-none focus:outline-none hover:opacity-60 transition-opacity duration-300"
              aria-label="Close menu"
            >
              ×
            </button>

            {/* Pages row */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            >
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMobile}
                  className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 focus:outline-none"
                  aria-current={pathname === href ? 'page' : undefined}
                >
                  <span className="font-serif text-[80px] sm:text-[96px] leading-none tracking-[-0.03em]">
                    {label}
                  </span>
                  <svg className="text-white/30 group-hover:text-white/60 w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </Link>
              ))}
            </motion.div>

            {/* Social row */}
            <motion.div
              className="flex items-center justify-center gap-x-6 mt-14 sm:mt-20"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            >
              {SOCIAL_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-300 focus:outline-none"
                >
                  <span className="text-[45px] sm:text-[52px] font-serif tracking-[-0.02em]">
                    {label}
                  </span>
                  <svg className="text-white/20 group-hover:text-white/40 w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              ))}
            </motion.div>

            {/* Divider */}
            <motion.div
              className="w-12 h-[1px] bg-white/15 mt-14 mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
            />

            {/* CTA */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
            >
              <Link
                href="/contact"
                onClick={closeMobile}
                className="group btn bg-white text-ps-black px-10 py-4 overflow-hidden hover:bg-ps-black hover:text-white hover:border-white"
              >
                Get Your Free Audit
                <svg className="btn-arrow w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>

              <p className="text-caption-sm text-white/20 mt-8">
                AI Visibility for Healthcare
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
