import type { Metadata } from "next";
import BackButton from "@/components/BackButton";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Pager Studio's cookie policy — what cookies we use, why, and how to manage your preferences.",
  keywords: [
    "Pager Studio cookies",
    "cookie policy",
    "privacy cookies",
  ],
  alternates: {
    canonical: "/cookies",
  },
  openGraph: {
    title: "Cookie Policy",
    description: "Pager Studio's cookie policy.",
    url: "https://www.pagerstudio.space/cookies",
    images: ["/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy",
    description: "Pager Studio's cookie policy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiePolicyPage() {
  return (
    <>
      <BackButton />
      <section className="px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[60px] md:pb-24">
        <GlassCard className="mx-auto max-w-2xl px-[20px] md:px-[40px] py-[20px] md:py-[30px]">
          <h1 className="text-display font-semibold leading-tight tracking-tight">
            Cookie Policy
          </h1>
          <p className="mt-3 text-xs text-text-tertiary">Last updated: August 2026</p>

          <div className="mt-10 space-y-8 text-subhead leading-prose text-text-secondary">
            <section>
              <h2 className="text-lg font-semibold mb-3">Who We Are</h2>
              <p>
                Pager Studio is a healthcare AI visibility agency operated out
                of India. This cookie policy explains how we use cookies and
                similar technologies when you visit our website at{" "}
                <strong className="font-semibold text-black">
                  pagerstudio.space
                </strong>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">What Are Cookies</h2>
              <p>
                Cookies are small text files placed on your device when you
                visit a website. They help the site remember your actions and
                preferences over time. Some cookies are set by the website
                itself (first-party), while others are set by external services
                (third-party).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">How We Use Cookies</h2>
              <p>
                Pager Studio uses only strictly necessary cookies. We do not
                use advertising, marketing, or retargeting cookies. Our
                website does not use any tracking pixels or cross-site
                tracking technologies.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Cookie Categories</h2>
              <ul className="mt-3 space-y-4">
                <li>
                  <strong className="font-semibold text-black">
                    Strictly Necessary Cookies
                  </strong>{" "}
                  — These cookies are essential for the website to function.
                  They enable core features like page navigation and access to
                  secure areas. The website cannot function properly without
                  these cookies. Consent is not required for these cookies.
                  <ul className="mt-2 ml-4 list-disc space-y-1 text-sm">
                    <li>
                      <code className="bg-fill-hover px-1.5 py-0.5 rounded text-xs">
                        pager_cookie_consent
                      </code>{" "}
                      — Stores your cookie consent preferences. Duration: 12
                      months. Set by: Pager Studio.
                    </li>
                    <li>
                      <code className="bg-fill-hover px-1.5 py-0.5 rounded text-xs">
                        __session
                      </code>{" "}
                      — Maintains your session state across page requests.
                      Duration: Session. Set by: Pager Studio.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong className="font-semibold text-black">
                    Analytics Cookies
                  </strong>{" "}
                  — These cookies collect anonymous information about how
                  visitors use our website, such as which pages are visited
                  most often. We use privacy-respecting analytics tools that
                  do not use cookies for tracking. If enabled, analytics
                  cookies would be set by:
                  <ul className="mt-2 ml-4 list-disc space-y-1 text-sm">
                    <li>
                      <strong className="font-semibold text-black">
                        Plausible Analytics
                      </strong>{" "}
                      — Privacy-first, cookie-free analytics. Plausible Analytics collects no
                      personal data. Data is processed in the EU.
                    </li>
                    <li>
                      <strong className="font-semibold text-black">
                        Fathom Analytics
                      </strong>{" "}
                      — Alternative privacy-first analytics. No cookies used.
                      GDPR compliant.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong className="font-semibold text-black">
                    Marketing / Advertising Cookies
                  </strong>{" "}
                  — <strong className="font-semibold text-black">We do not use these cookies.</strong>{" "}
                  Pager Studio does not run advertisements, retargeting
                  campaigns, or social media tracking pixels.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Third-Party Cookies</h2>
              <p>
                Our website embeds a Cal.com scheduling widget on the{" "}
                <strong className="font-semibold text-black">/book</strong>{" "}
                page. This widget may set its own cookies for scheduling
                functionality. The widget only loads these cookies after you provide
                consent via our cookie banner, or if you interact directly
                with the widget.
              </p>
              <p className="mt-2">
                Cal.com&apos;s privacy policy:{" "}
                <a
                  href="https://cal.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-text-secondary transition-colors"
                >
                  cal.com/privacy
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                Managing Your Cookie Preferences
              </h2>
              <p>
                When you first visit our website, a cookie consent banner
                appears allowing you to accept or reject non-essential cookies.
                You can change your preferences at any time by clicking the
                &quot;Cookie Settings&quot; link in our footer.
              </p>
              <p className="mt-2">
                You can also control cookies through your browser settings.
                Most browsers allow you to block or delete cookies. Note that
                blocking strictly necessary cookies may impair the website&apos;s
                functionality.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                Global Privacy Control (GPC)
              </h2>
              <p>
                We honor the Global Privacy Control (GPC) signal. If your
                browser sends a GPC signal, we will automatically disable
                analytics cookies and not prompt you for consent.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                Consent Records
              </h2>
              <p>
                When you provide or withdraw cookie consent, we store the
                following information locally in your browser: your consent
                choices, the timestamp of your decision, and the version of
                this cookie policy. We use this record to demonstrate
                compliance with privacy regulations.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                Changes to This Policy
              </h2>
              <p>
                We may update this cookie policy from time to time. Significant
                changes, we will communicate them through the cookie consent banner
                or by notice on our website. Your continued use of our website
                after changes are posted constitutes acceptance of the updated
                policy.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
              <p>
                Questions about this cookie policy? Email us at{" "}
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
              name: "Cookie Policy | Pager Studio",
              description:
                "Pager Studio's cookie policy — what cookies we use, why, and how to manage your preferences.",
              url: "https://www.pagerstudio.space/cookies",
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
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pagerstudio.space" },
                { "@type": "ListItem", position: 2, name: "Cookie Policy", item: "https://www.pagerstudio.space/cookies" },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
