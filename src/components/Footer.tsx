"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/pagerstudio" },
  { label: "X", href: "https://x.com/pagerstudio" },
  { label: "LinkedIn", href: "https://linkedin.com/company/pagerstudio" },
];

const pageLinks = [
  { label: "Healthcare AEO", href: "/healthcare-aeo" },
  { label: "Services", href: "/services" },
  { label: "AEO Audit", href: "/healthcare-aeo-audit" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Book a Call", href: "/book" },
  { label: "Pricing", href: "/pricing" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Cookies", href: "/cookies" },
  { label: "AI Policy", href: "/ai-policy" },
];

export default function Footer() {
  const [showPreferredModal, setShowPreferredModal] = useState(false);

  return (
    <footer className="px-[20px] md:px-8 pb-4">
      <div
        className="mx-auto max-w-5xl text-white rounded-2xl px-[30px] md:px-12 py-[40px] md:py-10"
        style={{ backgroundColor: "#000" }}
      >
        {/* Row 1: Logo + Social */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-10">
          <Link href="/" aria-label="Pager Studio — Home" className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded">
            <Logo dark={false} />
          </Link>

          <nav aria-label="Social links" className="flex items-center justify-center gap-6 md:gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer me"
                aria-label={`${link.label} (opens in new tab)`}
                className="group text-body md:text-title-1 font-semibold text-white hover:text-text-inverse-secondary transition-colors inline-flex items-center gap-1.5 min-h-[44px] px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Row 2: Preferred Source Button */}
        <div className="mt-6 md:mt-8 flex justify-center">
          <button
            onClick={() => setShowPreferredModal(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-footnote md:text-subhead text-text-inverse-secondary hover:text-white hover:border-white/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <span>★</span>
            Add as Preferred Source on Google
          </button>
        </div>

        {/* Row 3: Page Links (horizontal) */}
        <nav aria-label="Page links" className="mt-6 md:mt-8 flex items-center justify-center flex-wrap gap-x-5 gap-y-2">
          {pageLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group text-footnote md:text-body text-text-inverse-secondary hover:text-white transition-colors inline-flex items-center py-1.5 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Row 4: Legal */}
        <div className="mt-6 md:mt-8 pt-6 border-t border-white/10 flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-4">
          <p className="text-micro text-text-inverse-secondary text-center">
            &copy; 2026 Pager Studio. All rights reserved.
          </p>
          <nav aria-label="Legal links" className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group text-micro text-text-inverse-secondary hover:text-white transition-colors inline-flex items-center gap-1 min-h-[44px] px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Preferred Source Modal */}
      {showPreferredModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setShowPreferredModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Add as Preferred Source"
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-title-2 font-semibold text-black">
              Add Pager Studio as a Preferred Source
            </h3>
            <p className="mt-3 text-subhead text-text-secondary leading-relaxed">
              Click the button below to open Google&apos;s source preferences. Search for <strong>pagerstudio.space</strong> and star it. You&apos;ll start seeing our content with a ★ Preferred badge in Google AI answers.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="https://www.google.com/preferences/source?q=pagerstudio.space"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black text-white text-sm font-semibold hover:bg-fill-active transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                <span>★</span>
                Open Google Preferences
              </a>
              <button
                onClick={() => setShowPreferredModal(false)}
                className="text-footnote text-text-tertiary hover:text-black transition-colors py-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
