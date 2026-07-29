'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FOOTER_LINKS = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

const LEGAL_LINKS = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/disclaimer', label: 'Disclaimer' },
];

const SOCIAL_LINKS = [
  { href: 'https://linkedin.com/company/pagerstudio', label: 'LinkedIn', external: true },
  { href: 'https://twitter.com/pagerstudio', label: 'X', external: true },
  { href: 'https://instagram.com/pagerstudio', label: 'Instagram', external: true },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="py-10 sm:py-12 border-t border-ps-line bg-white">
      <div className="container flex flex-wrap items-start sm:items-center gap-8 sm:gap-10">
        <div className="flex-1 flex flex-col gap-1.5">
          <Link
            href="/"
            className="font-serif text-[24px] leading-none tracking-tight text-ps-ink"
            aria-label="Pager Studio home"
          >
            Pager <span className="italic">Studio</span>
          </Link>
          <p className="text-caption-sm text-ps-faint">AI visibility for healthcare practices.</p>
        </div>

        <nav className="flex flex-wrap gap-7" aria-label="Footer navigation">
          {FOOTER_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-caption text-ps-muted hover:text-ps-ink active:text-ps-ink active:opacity-70 transition-colors duration-200"
              aria-current={pathname === href ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        <nav className="flex flex-wrap gap-7" aria-label="Social links">
          {SOCIAL_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption text-ps-muted hover:text-ps-ink active:text-ps-ink active:opacity-70 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        <nav className="flex flex-wrap gap-7 w-full" aria-label="Legal navigation">
          {LEGAL_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-caption-sm text-ps-faint hover:text-ps-muted active:text-ps-muted active:opacity-70 transition-colors duration-200"
              aria-current={pathname === href ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        <p className="text-caption-sm text-ps-faint w-full pt-6 border-t border-ps-line">
          © {new Date().getFullYear()} Pager Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
