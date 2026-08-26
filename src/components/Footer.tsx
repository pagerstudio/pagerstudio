"use client";

import Link from "next/link";
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

function FooterPreferredBtn() {
  const handleClick = () => {
    window.open(
      "https://www.google.com/preferences/source?q=pagerstudio.space",
      "preferred-source",
      "width=500,height=600,scrollbars=yes,resizable=yes"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold shadow-sm hover:shadow-md transition-all border border-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      Preferred on Google
    </button>
  );
}

export default function Footer() {
  return (
    <footer className="px-[20px] md:px-8 pb-4">
      <div
        className="mx-auto max-w-5xl text-white rounded-2xl px-[30px] md:px-12 py-[40px] md:py-10"
        style={{ backgroundColor: "#000" }}
      >
        {/* Row 1: Logo + Social (centered) + Preferred Source */}
        <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-3 md:items-center">
          <Link href="/" aria-label="Pager Studio — Home" className="shrink-0 justify-self-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded">
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

          <div className="justify-self-end">
            <FooterPreferredBtn />
          </div>
        </div>

        {/* Row 2: Page Links */}
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

        {/* Row 3: Legal */}
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
    </footer>
  );
}
