'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SERVICES = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Free Audit' },
];

const SPECIALTIES = [
  'IVF & Fertility',
  'Dental Implants',
  'Cosmetic Dermatology',
  'LASIK & Eye Care',
  'Hair Transplant',
  'Plastic Surgery',
];

const LEGAL_LINKS = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/disclaimer', label: 'Disclaimer' },
];

const SOCIAL_LINKS = [
  { href: 'https://linkedin.com/company/pagerstudio', label: 'LinkedIn' },
  { href: 'https://twitter.com/pagerstudio', label: 'X' },
  { href: 'https://instagram.com/pagerstudio', label: 'Instagram' },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="border-t border-ps-line bg-white">
      <div className="container py-12 sm:py-16">
        {/* Top section — brand + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-[360px]">
            <Link
              href="/"
              className="font-serif text-[28px] leading-none tracking-tight text-ps-ink inline-block mb-4"
              aria-label="Pager Studio home"
            >
              Pager <span className="italic">Studio</span>
            </Link>
            <p className="text-body-sm text-ps-muted leading-[1.7] mb-5">
              We help healthcare practices get discovered and recommended inside AI answers — ChatGPT, Gemini, Perplexity, Google AI Overviews, and more.
            </p>
            <a
              href="mailto:hello.pagerstudio@gmail.com"
              className="text-body-sm text-ps-ink font-medium hover:text-ps-muted transition-colors duration-200"
            >
              hello.pagerstudio@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-4">
            <Link
              href="/contact"
              className="btn btn-primary text-[13px] h-11 px-6"
            >
              Get Your Free Audit
              <svg className="btn-arrow w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </Link>
            <div className="flex gap-5">
              {SOCIAL_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-caption-sm text-ps-faint hover:text-ps-ink active:text-ps-ink active:opacity-70 transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Middle section — links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div>
            <h3 className="text-caption-sm text-ps-ink mb-4">Company</h3>
            <nav className="flex flex-col gap-2.5" aria-label="Company links">
              {SERVICES.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-body-sm text-ps-muted hover:text-ps-ink active:text-ps-ink active:opacity-70 transition-colors duration-200"
                  aria-current={pathname === href ? 'page' : undefined}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-caption-sm text-ps-ink mb-4">Specialties</h3>
            <ul className="flex flex-col gap-2.5">
              {SPECIALTIES.map((s) => (
                <li key={s} className="text-body-sm text-ps-muted">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-caption-sm text-ps-ink mb-4">Legal</h3>
            <nav className="flex flex-col gap-2.5" aria-label="Legal links">
              {LEGAL_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-body-sm text-ps-muted hover:text-ps-ink active:text-ps-ink active:opacity-70 transition-colors duration-200"
                  aria-current={pathname === href ? 'page' : undefined}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom — copyright */}
        <div className="pt-8 border-t border-ps-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-caption-sm text-ps-faint">
            © {new Date().getFullYear()} Pager Studio. All rights reserved.
          </p>
          <p className="text-caption-sm text-ps-faint">
            AI visibility for healthcare practices.
          </p>
        </div>
      </div>
    </footer>
  );
}
