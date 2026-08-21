'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function PrivacyPageClient() {
  return (
    <main>
      <Nav />

      <section className="section section-white px-5 sm:px-6 md:px-10" style={{ paddingTop: 'clamp(100px, 14vw, 140px)', paddingBottom: 'clamp(50px, 8vw, 80px)' }}>
        <div className="max-w-[720px] mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-sans text-[13px] font-medium text-ps-muted hover:text-ps-ink transition-colors duration-200 mb-8 group"
          >
            <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l7 7m-7-7l7-7" />
            </svg>
            Home
          </Link>
          <p className="text-caption-sm text-ps-faint mb-5">Legal</p>
          <h1 className="text-display-lg text-ps-ink mb-6">Privacy <span className="font-serif italic">Policy</span></h1>
          <p className="text-body text-ps-muted mb-2">Last updated: July 29, 2026</p>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">Who <span className="font-serif italic">we</span> are</h2>
              <p className="text-body text-ps-muted">
                Pager Studio is a healthcare AI visibility agency operated out of India. We help clinics — including IVF, dental, dermatology, LASIK, and other specialties — get recommended inside AI platforms like ChatGPT, Google Gemini, Perplexity, and Google AI Overviews. This policy explains how we handle your data when you visit our website, run a free audit, or work with us as a client.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">What we <span className="font-serif italic">collect</span></h2>
              <p className="text-body text-ps-muted mb-3">We collect information in three ways:</p>
              <ul className="list-disc pl-5 space-y-2 text-body text-ps-muted">
                <li><strong className="text-ps-ink">When you run a free audit:</strong> your name, clinic name, email address, phone number, specialty, and city. This is used solely to deliver your audit report.</li>
                <li><strong className="text-ps-ink">When you become a client:</strong> your practice details, website access credentials, branding assets, physician profiles, and content we create on your behalf. We also collect payment information through our payment processor — we never store card details ourselves.</li>
                <li><strong className="text-ps-ink">When you browse our site:</strong> standard analytics data like pages visited, time on site, browser type, and approximate location. We use this to improve our website — not to track you across the internet.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">How we use your <span className="font-serif italic">information</span></h2>
              <ul className="list-disc pl-5 space-y-2 text-body text-ps-muted">
                <li>To deliver your free audit report within 48 hours</li>
                <li>To provide and manage your paid AI visibility services</li>
                <li>To communicate with you about your account, reports, and results</li>
                <li>To send you monthly citation reports if you are on a paid plan</li>
                <li>To improve our website and services</li>
              </ul>
              <p className="text-body text-ps-muted mt-3">
                We do not use your data for advertising, and we do not sell your information to third parties. Ever.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">Client data and <span className="font-serif italic">confidentiality</span></h2>
              <p className="text-body text-ps-muted">
                We treat all client data with the same confidentiality standards expected in healthcare. We sign NDAs as standard practice. Your practice data — including audit reports, implementation details, website credentials, and performance metrics — is never shared, sold, or referenced publicly without your written consent. We work with one clinic per specialty per city, and we do not disclose which clinics we work with unless you give us permission.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">AI platforms and <span className="font-serif italic">third-party</span> services</h2>
              <p className="text-body text-ps-muted">
                To deliver our services, we interact with third-party AI platforms (ChatGPT, Gemini, Perplexity, Claude, Grok, Meta AI, Google AI Overviews) and website analytics tools. These platforms have their own privacy policies. We do not control how they process data once it is publicly available on your website or in AI outputs. Our responsibility is limited to the data you provide directly to us.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">Cookies and <span className="font-serif italic">tracking</span></h2>
              <p className="text-body text-ps-muted">
                Our website uses only essential cookies required for basic functionality. We do not use advertising cookies, retargeting pixels, or cross-site tracking. Analytics data is collected in aggregate — we cannot identify individual visitors from it.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">Data <span className="font-serif italic">retention</span></h2>
              <p className="text-body text-ps-muted">
                We retain your data for as long as you are an active client, plus 12 months after your engagement ends. Audit reports and correspondence are retained for 24 months. After that, your data is permanently deleted from our systems. You can request deletion at any time by emailing us.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">Your <span className="font-serif italic">rights</span></h2>
              <p className="text-body text-ps-muted mb-3">You have the right to:</p>
              <ul className="list-disc pl-5 space-y-2 text-body text-ps-muted">
                <li>Access all data we hold about you</li>
                <li>Request correction of any inaccurate information</li>
                <li>Request deletion of your data at any time</li>
                <li>Opt out of non-essential communications</li>
                <li>Receive a copy of your data in a portable format</li>
              </ul>
              <p className="text-body text-ps-muted mt-3">
                To exercise any of these rights, email us at{' '}
                <a href="mailto:hello.pagerstudio@gmail.com" className="underline text-ps-ink hover:text-ps-muted transition-colors">
                  hello.pagerstudio@gmail.com
                </a>
                . We will respond within 14 business days.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4"><span className="font-serif italic">Security</span></h2>
              <p className="text-body text-ps-muted">
                We use industry-standard encryption for data in transit and at rest. Website access credentials provided by clients are stored securely and never shared with unauthorized parties. No system is completely secure, but we take reasonable measures to protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">Changes to this <span className="font-serif italic">policy</span></h2>
              <p className="text-body text-ps-muted">
                We may update this policy from time to time. If we make significant changes, we will notify you by email or by posting a notice on our website. Your continued use of our services after changes are posted constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">Contact <span className="font-serif italic">us</span></h2>
              <p className="text-body text-ps-muted">
                Questions about this policy? Email us at{' '}
                <a href="mailto:hello.pagerstudio@gmail.com" className="underline text-ps-ink hover:text-ps-muted transition-colors">
                  hello.pagerstudio@gmail.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
