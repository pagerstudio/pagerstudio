import type { Metadata } from "next";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Services — How Pager Studio Works",
  description:
    "Pager Studio's process: a one-time AEO audit, then a 6-month foundation if we're a fit, then month-to-month. Simple, no surprises.",
  keywords: [
    "healthcare AEO services",
    "AEO audit",
    "AI visibility services",
    "healthcare AI search optimization",
    "AEO process",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services — How Pager Studio Works",
    description:
      "One-time audit. 6-month foundation. Month-to-month. That's it.",
    url: "https://pagerstudio.space/services",
    images: ["/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — How Pager Studio Works",
    description:
      "One-time audit. 6-month foundation. Month-to-month. That's it.",
    images: ["/og-default.png"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <BackButton className="max-w-[1440px]" />
      <section className="px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[90px] md:pb-[180px]">
        <GlassCard className="mx-auto max-w-[1440px] px-[30px] md:px-[60px] pt-[30px] md:pt-[60px] pb-[30px] md:pb-[60px]">
          <p className="text-subhead font-medium text-text-secondary">
            {"// Services //"}
          </p>
          <h1 className="mt-[20px] md:mt-[30px] text-display md:text-display-xl font-semibold leading-snug tracking-tight">
            How Pager Studio Works
          </h1>
          <p className="mt-[20px] md:mt-[30px] text-subhead leading-prose text-text-secondary max-w-[720px]">
            No retainers to start. No long-term contracts upfront. One audit to
            see if we&apos;re a fit. Then a 6-month foundation. Then
            month-to-month. That&apos;s the whole model.
          </p>
          <div className="mt-[30px]">
            <Button href="/book">Book a Discovery Call</Button>
          </div>
        </GlassCard>

        {/* The Three Phases */}
        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <h2 className="text-title-1 font-semibold tracking-tight">
            {"// The Three Phases //"}
          </h2>

          <div className="mt-[30px] space-y-[20px] md:space-y-[30px]">
            {/* Phase 1 */}
            <GlassCard className="px-[30px] md:px-[40px] py-[30px] md:py-[40px]">
              <div className="flex items-center gap-3">
                <span className="text-title-1 font-semibold text-text-tertiary">1.</span>
                <h3 className="text-title-1 font-semibold tracking-tight">
                  The Audit
                </h3>
              </div>
              <p className="mt-[12px] text-body leading-relaxed-body text-text-secondary">
                A one-time, fixed-fee diagnostic of your practice&apos;s AI visibility.
                We analyze how ChatGPT, Gemini, Perplexity, and Google AI Overviews
                currently see (or fail to see) your practice. You get a comprehensive
                report with findings, priorities, and a clear roadmap.
              </p>
              <div className="mt-[16px] flex flex-wrap gap-4 text-subhead text-text-secondary">
                <span className="font-semibold text-black">$5,000, fixed</span>
                <span className="text-text-tertiary">·</span>
                <span>4-6 weeks</span>
                <span className="text-text-tertiary">·</span>
                <span>No obligation to continue</span>
              </div>
              <p className="mt-[12px] text-body leading-relaxed-body text-text-secondary">
                This is the decision point. We both review the audit results and
                decide if we&apos;re a match. If not, you keep the report — it&apos;s
                yours. If yes, we move to Phase 2.
              </p>
            </GlassCard>

            {/* Phase 2 */}
            <GlassCard className="px-[30px] md:px-[40px] py-[30px] md:py-[40px]">
              <div className="flex items-center gap-3">
                <span className="text-title-1 font-semibold text-text-tertiary">2.</span>
                <h3 className="text-title-1 font-semibold tracking-tight">
                  The 6-Month Foundation
                </h3>
              </div>
              <p className="mt-[12px] text-body leading-relaxed-body text-text-secondary">
                If both sides are aligned after the audit, we start a 6-month
                foundation engagement. This is where the real work happens. Your
                audit fee is credited toward this phase.
              </p>

              <div className="mt-[20px] grid md:grid-cols-2 gap-[20px]">
                <div className="rounded-xl border border-border-subtle p-5">
                  <h4 className="font-semibold text-black">Months 1-3: Implementation</h4>
                  <p className="mt-2 text-subhead text-text-secondary leading-relaxed">
                    Structured data, schema markup, directory consistency, content
                    restructuring, entity optimization — everything that makes AI
                    systems understand and trust your practice.
                  </p>
                </div>
                <div className="rounded-xl border border-border-subtle p-5">
                  <h4 className="font-semibold text-black">Months 4-6: Monitoring</h4>
                  <p className="mt-2 text-subhead text-text-secondary leading-relaxed">
                    We track what AI platforms say about you across updates, measure
                    progress against baseline, and adjust strategy as the landscape
                    changes.
                  </p>
                </div>
              </div>

              <p className="mt-[16px] text-body leading-relaxed-body text-text-secondary">
                6-month minimum. That&apos;s the only commitment. Pricing is quoted
                after your audit, based on your practice, specialties, and markets.
              </p>
            </GlassCard>

            {/* Phase 3 */}
            <GlassCard className="px-[30px] md:px-[40px] py-[30px] md:py-[40px]">
              <div className="flex items-center gap-3">
                <span className="text-title-1 font-semibold text-text-tertiary">3.</span>
                <h3 className="text-title-1 font-semibold tracking-tight">
                  Month-to-Month
                </h3>
              </div>
              <p className="mt-[12px] text-body leading-relaxed-body text-text-secondary">
                After the 6-month foundation, we continue on a month-to-month
                basis. No renewed contracts. No renewal negotiations. We keep
                monitoring, adjusting, and maintaining your AI visibility. You
                stay because it&apos;s working, not because you&apos;re locked in.
              </p>
              <p className="mt-[12px] text-body leading-relaxed-body text-text-secondary">
                Cancel anytime with 30 days notice. No penalties. No questions.
              </p>
            </GlassCard>
          </div>
        </Section>

        {/* What's NOT included */}
        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <h2 className="text-title-1 font-semibold tracking-tight">
            {"// What We Don't Do //"}
          </h2>
          <div className="mt-[16px] space-y-[12px] text-subhead leading-prose text-text-secondary">
            <p>
              <span className="font-semibold text-black">No vague &ldquo;strategy&rdquo; deliverables.</span>{" "}
              We implement. You get structured data on your site, directory
              listings fixed, content restructured — not a 40-page PDF you file
              away.
            </p>
            <p>
              <span className="font-semibold text-black">No long-term contracts to start.</span>{" "}
              The audit is one-time. The 6-month foundation is the minimum.
              After that, month-to-month. That&apos;s it.
            </p>
            <p>
              <span className="font-semibold text-black">No &ldquo;full-service digital marketing.&rdquo;</span>{" "}
              We do one thing: make healthcare practices visible in AI search.
              We don&apos;t run your Google Ads, manage your social media, or
              build your website from scratch.
            </p>
            <p>
              <span className="font-semibold text-black">No patient data.</span>{" "}
              We never collect, store, or work with patient data. Every
              engagement is NDA-covered.
            </p>
          </div>
        </Section>

        {/* CTA */}
        <GlassCard className="mx-auto max-w-[720px] px-[30px] md:px-[60px] py-[30px] md:py-[60px] text-center">
          <h2 className="text-title-1 font-semibold tracking-tight">
            Ready to see how AI sees your practice?
          </h2>
          <p className="mt-[16px] text-body leading-relaxed-body text-text-secondary">
            Start with a free discovery call. We&apos;ll show you a basic AEO
            snapshot of your practice — live, on the call.
          </p>
          <div className="mt-[24px]">
            <Button href="/book">Book a Discovery Call</Button>
          </div>
        </GlassCard>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Pager Studio — Healthcare AEO Services",
              description:
                "One-time AEO audit, 6-month foundation implementation and monitoring, then month-to-month. Simple process for making healthcare practices visible in AI search.",
              provider: {
                "@type": "ProfessionalService",
                "@id": "https://pagerstudio.space/#organization",
                name: "Pager Studio",
                url: "https://pagerstudio.space",
              },
              areaServed: "Worldwide",
              serviceType: [
                "AEO Audit",
                "AEO Implementation",
                "AI Visibility Monitoring",
              ],
              offers: {
                "@type": "Offer",
                price: "5000",
                priceCurrency: "USD",
                description: "Fixed-fee AEO audit for healthcare practices",
                availability: "https://schema.org/InStock",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://pagerstudio.space" },
                { "@type": "ListItem", position: 2, name: "Services", item: "https://pagerstudio.space/services" },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
