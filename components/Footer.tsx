import Link from 'next/link';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

const SPECIALTIES = [
  'IVF & Fertility',
  'Dental Implants',
  'Cosmetic Dermatology',
  'LASIK & Eye Care',
  'Hair Transplant',
  'Plastic Surgery',
];

const SOCIAL_LINKS = [
  { href: 'https://linkedin.com/company/pagerstudio', label: 'LinkedIn' },
  { href: 'https://instagram.com/pagerstudio', label: 'Instagram' },
  { href: 'https://x.com/pagerstudio', label: 'X' },
];

const LEGAL_LINKS = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/disclaimer', label: 'Disclaimer' },
];

export default function Footer() {
  return (
    <footer className="bg-ps-black">
      <div className="container py-16 sm:py-20">
        {/* Logo */}
        <div className="mb-16 sm:mb-20">
          <Link
            href="/"
            className="font-serif text-[28px] sm:text-[32px] leading-none tracking-tight text-white inline-block"
            aria-label="Pager Studio home"
          >
            Pager <span className="italic">Studio</span>
          </Link>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_1fr] gap-10 sm:gap-12 mb-16 sm:mb-20">
          {/* Navigation */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/40 mb-5">Navigation</h3>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[15px] text-white/70 hover:text-white transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/40 mb-5">Specialties</h3>
            <ul className="flex flex-col gap-3">
              {SPECIALTIES.map((s) => (
                <li key={s} className="text-[15px] text-white/70">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/40 mb-5">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello.pagerstudio@gmail.com"
                className="text-[15px] text-white/70 hover:text-white transition-colors duration-200"
              >
                hello.pagerstudio@gmail.com
              </a>
              <Link
                href="/contact"
                className="text-[15px] text-white/70 hover:text-white transition-colors duration-200"
              >
                Get Your Free Audit
              </Link>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/40 mb-5">Follow Us</h3>
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-white/70 hover:text-white transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          <p className="text-[13px] text-white/30">
            © {new Date().getFullYear()} Pager Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            {LEGAL_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[13px] text-white/30 hover:text-white/60 transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Large brand name */}
        <div className="overflow-hidden pt-6 sm:pt-8 -mb-8 sm:-mb-12">
          <p className="font-serif text-[clamp(90px,20vw,260px)] leading-[0.85] tracking-tight text-white whitespace-nowrap text-center">
            Pager <span className="italic">Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
