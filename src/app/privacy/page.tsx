import type { Metadata } from "next";
import BackButton from "@/components/BackButton";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Pager Studio's privacy policy — what we collect, how we use it, and your rights. We never collect patient data.",
  keywords: [
    "Pager Studio privacy",
    "healthcare AEO privacy policy",
    "data privacy AEO",
  ],
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy",
    description: "Pager Studio's privacy policy.",
    url: "https://pagerstudio.space/privacy",
    images: ["/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy",
    description: "Pager Studio's privacy policy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <BackButton />
      <section className="px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[60px] md:pb-24">
        <GlassCard className="mx-auto max-w-2xl px-[20px] md:px-[40px] py-[20px] md:py-[30px]">
          <h1 className="text-display font-semibold leading-tight tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-xs text-text-tertiary">Last updated: August 2026</p>

          <div className="mt-10 space-y-8 text-subhead leading-prose text-text-secondary">
            <section>
              <h2 className="text-lg font-semibold mb-3">Who We Are</h2>
              <p>
                <strong className="font-semibold text-black">Pager Studio</strong> is a
                healthcare AI visibility agency operated out of India. We help
                clinics — including IVF, dental, dermatology, LASIK, and other
                specialties — get recommended inside AI platforms like ChatGPT,
                Google Gemini, Perplexity, and Google AI Overviews. This policy
                explains how we handle your data when you visit our website, run
                a free audit, or work with us as a client.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">What We Collect</h2>
              <p className="mb-3">
                We collect information in three ways:
              </p>
              <ul className="space-y-2">
                <li className="flex gap-3">
                  <span className="text-text-tertiary font-medium shrink-0">+</span>
                  <p>
                    <strong className="font-semibold text-black">When you run a free audit:</strong>{" "}
                    your name, clinic name, email address, phone number,
                    specialty, and city. This is used solely to deliver your
                    audit report.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-tertiary font-medium shrink-0">+</span>
                  <p>
                    <strong className="font-semibold text-black">When you become a client:</strong>{" "}
                    your practice details, website access credentials, branding
                    assets, physician profiles, and content we create on your
                    behalf. We also collect payment information through our
                    payment processor — we never store card details ourselves.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-tertiary font-medium shrink-0">+</span>
                  <p>
                    <strong className="font-semibold text-black">When you browse our site:</strong>{" "}
                    standard analytics data like pages visited, time on site,
                    browser type, and approximate location. We use this to
                    improve our website — not to track you across the internet.
                  </p>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">How We Use Your Information</h2>
              <ul className="space-y-2">
                {[
                  "To deliver your free audit report within 48 hours",
                  "To provide and manage your paid AI visibility services",
                  "To communicate with you about your account, reports, and results",
                  "To send you monthly citation reports if you are on a paid plan",
                  "To improve our website and services",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-text-tertiary font-medium shrink-0">+</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-3">
                We do not use your data for advertising, and we do not sell
                your information to third parties. Ever.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Lawful Basis for Processing</h2>
              <p>
                Under GDPR Article 6, we process your data on the following
                legal bases:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex gap-3">
                  <span className="text-text-tertiary font-medium shrink-0">+</span>
                  <p>
                    <strong className="font-semibold text-black">Contractual necessity</strong> —
                    Processing required to perform our engagement with you
                    (delivering audits, implementation, monitoring).
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-tertiary font-medium shrink-0">+</span>
                  <p>
                    <strong className="font-semibold text-black">Legitimate interest</strong> —
                    Processing for our legitimate business interest in
                    improving our services and website, where such interest
                    is not overridden by your rights.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-tertiary font-medium shrink-0">+</span>
                  <p>
                    <strong className="font-semibold text-black">Consent</strong> —
                    Where you have given explicit consent (e.g., cookie
                    analytics, marketing communications).
                  </p>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Client Data and Confidentiality</h2>
              <p>
                We treat all client data with the same confidentiality
                standards expected in healthcare. We sign NDAs as standard
                practice. Your practice data — including audit reports,
                implementation details, website credentials, and performance
                metrics — is never shared, sold, or referenced publicly
                without your written consent. We work with one clinic per
                specialty per city, and we do not disclose which clinics we
                work with unless you give us permission.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">AI Platforms and Third-Party Services</h2>
              <p className="mb-3">
                To deliver our services, we interact with third-party AI
                platforms and business tools:
              </p>
              <ul className="space-y-2">
                <li className="flex gap-3">
                  <span className="text-text-tertiary font-medium shrink-0">+</span>
                  <p>
                    <strong className="font-semibold text-black">AI Platforms:</strong>{" "}
                    ChatGPT (OpenAI), Google Gemini, Perplexity, Claude
                    (Anthropic), Grok (xAI), Meta AI, Google AI Overviews.
                    These platforms have their own privacy policies. We do
                    not control how they process data once it is publicly
                    available on your website or in AI outputs.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-tertiary font-medium shrink-0">+</span>
                  <p>
                    <strong className="font-semibold text-black">Scheduling:</strong>{" "}
                    Cal.com or Calendly (for discovery call booking).
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-tertiary font-medium shrink-0">+</span>
                  <p>
                    <strong className="font-semibold text-black">Hosting:</strong>{" "}
                    Vercel (for website hosting and deployment).
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-tertiary font-medium shrink-0">+</span>
                  <p>
                    <strong className="font-semibold text-black">Analytics:</strong>{" "}
                    Plausible or Fathom (privacy-respecting, cookie-free
                    analytics).
                  </p>
                </li>
              </ul>
              <p className="mt-3">
                Our responsibility is limited to the data you provide
                directly to us.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Cookies and Tracking</h2>
              <p>
                Our website uses only essential cookies required for basic
                functionality. We do not use advertising cookies, retargeting
                pixels, or cross-site tracking. Analytics data is collected in
                aggregate — we cannot identify individual visitors from it.
                For full details, see our{" "}
                <a href="/cookies" className="underline hover:text-text-secondary transition-colors">
                  Cookie Policy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Data Retention</h2>
              <p>
                We retain your data for as long as you are an active client,
                plus 12 months after your engagement ends. Audit reports and
                correspondence are retained for 24 months. After that, your
                data is permanently deleted from our systems. You can request
                deletion at any time by emailing us.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="space-y-2">
                {[
                  "Access all data we hold about you",
                  "Request correction of any inaccurate information",
                  "Request deletion of your data at any time",
                  "Opt out of non-essential communications",
                  "Receive a copy of your data in a portable format",
                  "Withdraw consent at any time (where processing is based on consent)",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-text-tertiary font-medium shrink-0">+</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email us at{" "}
                <strong className="font-semibold text-black">
                  hello@pagerstudio.space
                </strong>
                . We will respond within 14 business days.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">GDPR and UK-GDPR</h2>
              <p>
                Pager Studio serves clients in the UK and EU. If applicable,
                we process data under legitimate interest for the performance
                of our contract. UK and EU clients have the right to lodge a
                complaint with their local supervisory authority.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Cross-Border Data Transfers</h2>
              <p>
                Pager Studio is based in India. When we process data for
                clients in the UK or EU, data may be transferred to and
                processed in India or through our hosting provider (Vercel,
                which operates globally). We ensure appropriate safeguards
                are in place for international transfers, including standard
                contractual clauses where required by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">CCPA</h2>
              <p>
                For California residents: Pager Studio does not sell personal
                information. We do not share business data with third parties
                for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Children&apos;s Data</h2>
              <p>
                Our services are directed to healthcare practices, not
                individuals under 16. We do not knowingly collect personal
                data from children. If you believe a child has provided us
                with personal data, please contact us immediately and we will
                delete it.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Automated Decision-Making</h2>
              <p>
                Pager Studio does not engage in automated decision-making or
                profiling that produces legal or similarly significant effects
                on individuals. AI tools we use assist in analysis and content
                creation but do not make autonomous decisions about clients
                or their patients.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Security</h2>
              <p>
                We use industry-standard encryption for data in transit and at
                rest. Website access credentials provided by clients are
                stored securely and never shared with unauthorized parties.
                No system is completely secure, but we take reasonable
                measures to protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. If we make
                significant changes, we will notify you by email or by posting
                a notice on our website. Your continued use of our services
                after changes are posted constitutes acceptance of the
                updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
              <p>
                Questions about this policy? Email us at{" "}
                <strong className="font-semibold text-black">
                  hello@pagerstudio.space
                </strong>
                .
              </p>
            </section>
          </div>
        </GlassCard>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Privacy Policy | Pager Studio",
              description: "Pager Studio's privacy policy — what we collect, how we use it, and your rights.",
              url: "https://pagerstudio.space/privacy",
              dateModified: "2026-08-01",
              speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: ["h1"],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://pagerstudio.space" },
                { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://pagerstudio.space/privacy" },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
