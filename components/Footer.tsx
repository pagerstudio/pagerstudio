import Link from 'next/link';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

const SPECIALTIES = [
  { name: 'IVF & Fertility Centers', desc: 'Helping fertility providers become the trusted recommendation for patients researching their path to parenthood.' },
  { name: 'Hair Restoration Clinics', desc: 'Increasing AI visibility for clinics offering advanced hair restoration and transplant procedures.' },
  { name: 'Cosmetic Dermatology Clinics', desc: 'Helping aesthetic skin clinics stand out when patients seek trusted cosmetic care.' },
  { name: 'Dental Implant Centers', desc: 'Making dental implant providers easier for AI to discover, understand, and recommend.' },
  { name: 'LASIK & Vision Correction Centers', desc: 'Positioning vision correction specialists to appear in AI-powered healthcare recommendations.' },
  { name: 'Plastic Surgery Practices', desc: 'Helping cosmetic and reconstructive surgery practices build visibility and trust across AI platforms.' },
];

const SOCIAL_LINKS = [
  { href: 'https://instagram.com/pagerstudio', label: 'Instagram' },
  { href: 'https://x.com/pagerstudio', label: 'X' },
  { href: 'https://linkedin.com/company/pagerstudio', label: 'LinkedIn' },
];

const LEGAL_LINKS = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/disclaimer', label: 'Disclaimer' },
];

export default function Footer() {
  return (
    <footer className="bg-ps-black texture-lines overflow-hidden">
      <div className="container pt-8 sm:pt-12 pb-0">
        {/* Logo */}
        <div className="mb-10 sm:mb-14">
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0"
            aria-label="Pager Studio home"
          >
            <img
              src="/logo-light.png"
              alt=""
              className="h-[22px] sm:h-[26px] w-auto"
            />
            <span className="font-serif text-[28px] sm:text-[32px] leading-none tracking-tight text-white">
              Pager <span className="italic">Studio</span>
            </span>
          </Link>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-16 mb-16 sm:mb-20">
          {/* Navigation */}
          <div className="w-full">
            <h3 className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/40 mb-5">Navigation</h3>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                className="link-underline text-[15px] text-white/70 hover:text-white transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Specialties */}
          <div className="w-full">
            <h3 className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/40 mb-5">Specialties</h3>
            <div className="flex flex-col gap-3">
              {SPECIALTIES.map((s) => (
                <h4 key={s.name} className="text-[15px] text-white/70">{s.name}</h4>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="w-full sm:pl-20">
            <h3 className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/40 mb-5">Contact Us</h3>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="mailto:hello.pagerstudio@gmail.com"
                className="link-underline text-[15px] text-white/70 hover:text-white transition-colors duration-200"
              >
                hello.pagerstudio@gmail.com
              </a>
              <Link
                href="/contact"
                className="link-underline text-[15px] text-white/70 hover:text-white transition-colors duration-200"
              >
                Get Your Free Audit
              </Link>
            </div>
            <h3 className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/40 mb-5">Follow Us</h3>
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-[15px] text-white/70 hover:text-white transition-colors duration-200"
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
            © {new Date().getFullYear()} Pager <span className="font-serif italic">Studio</span>. All rights reserved.
          </p>
          <div className="flex gap-6">
            {LEGAL_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="link-underline text-[13px] text-white/30 hover:text-white/60 transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Large brand name */}
        <div className="relative h-[100px] sm:h-[140px] lg:h-[180px] overflow-hidden">
          <p className="absolute bottom-0 left-0 right-0 font-serif text-[clamp(90px,20vw,260px)] leading-[0.85] tracking-tight text-white whitespace-nowrap text-center translate-y-[30%]">
            Pager <span className="italic">Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
