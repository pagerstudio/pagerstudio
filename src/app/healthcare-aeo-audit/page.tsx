import type { Metadata } from "next";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Healthcare AEO Audit — $5,000 Fixed",
  description:
    "A complete diagnostic of your healthcare practice's AI visibility. $5,000 fixed. Delivered in 4-6 weeks. Covers ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
  keywords: [
    "healthcare AEO audit",
    "AI visibility audit healthcare",
    "AEO audit cost",
    "healthcare AI search audit",
    "AEO audit for medical practices",
  ],
  alternates: {
    canonical: "/healthcare-aeo-audit",
  },
  openGraph: {
    title: "Healthcare AEO Audit — $5,000 Fixed",
    description:
      "A complete diagnostic of your healthcare practice's AI visibility. $5,000 fixed.",
    url: "https://pagerstudio.space/healthcare-aeo-audit",
    images: ["/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare AEO Audit — $5,000 Fixed",
    description:
      "A complete diagnostic of your healthcare practice's AI visibility. $5,000 fixed.",
    images: ["/og-default.png"],
  },
};

const deliverables = [
  "Current AI visibility score across ChatGPT, Gemini, Perplexity, and Google AI Overviews",
  "Data consistency audit across all directory listings and web properties",
  "Structured data (schema markup) coverage report",
  "Content extractability assessment — can AI parse your service pages?",
  "Authority signal mapping — what third-party sources validate your practice",
  "Competitor comparison — how you rank against competitors in AI's view",
  "Prioritized roadmap with clear next steps",
];

const platforms = [
  {
    name: "ChatGPT",
    description:
      "OpenAI's search-enabled AI. Recommendations based on training data and real-time search.",
  },
  {
    name: "Gemini",
    description:
      "Google's AI assistant. Integrates with Google Business Profile and search index.",
  },
  {
    name: "Perplexity",
    description:
      "AI-native search engine. Cites sources directly and synthesizes answers.",
  },
  {
    name: "Google AI Overviews",
    description:
      "AI-generated summaries at the top of Google search results.",
  },
];

export default function HealthcareAEOAuditPage() {
  return (
    <>
      <BackButton className="max-w-[1440px]" />
      <section className="px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[90px] md:pb-[180px]">
        <GlassCard className="mx-auto max-w-[1440px] px-[30px] md:px-[60px] pt-[30px] md:pt-[60px] pb-[30px] md:pb-[60px]">
          <p className="text-subhead font-medium text-text-secondary">
            {"// Healthcare AEO Audit //"}
          </p>
          <h1 className="mt-[20px] md:mt-[30px] text-display md:text-display-xl font-semibold leading-snug tracking-tight">
            Healthcare AEO Audit — $5,000 Fixed
          </h1>
          <p className="mt-[20px] md:mt-[30px] text-subhead leading-prose text-text-secondary max-w-[720px]">
            A complete diagnostic of your healthcare practice&apos;s AI
            visibility. How AI engines and agents see (or fail to see) you today
            — delivered as a clear report with findings and priorities.
          </p>
          <div className="mt-[30px] flex flex-col md:flex-row gap-[16px]">
            <Button href="/book">Book a Discovery Call</Button>
            <Button href="/pricing" variant="secondary">
              See Full Pricing
            </Button>
          </div>
        </GlassCard>

        {/* What's Included */}
        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <h2 className="text-title-1 font-semibold tracking-tight">
            {"// What's Included //"}
          </h2>
          <ul className="mt-[16px] space-y-[16px] text-subhead leading-prose text-text-secondary">
            {deliverables.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-text-tertiary font-medium shrink-0">+</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Platforms Covered */}
        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <h2 className="text-title-1 font-semibold tracking-tight">
            {"// Platforms Covered //"}
          </h2>
          <div className="mt-[20px] md:mt-[30px] space-y-[20px] md:space-y-[30px]">
            {platforms.map((platform) => (
              <GlassCard
                key={platform.name}
                className="px-[30px] md:px-[40px] py-[30px] md:py-[40px]"
              >
                <h3 className="text-title-2 font-semibold tracking-tight">
                  {platform.name}
                </h3>
                <p className="mt-[12px] text-body leading-relaxed-body text-text-secondary">
                  {platform.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </Section>

        {/* Timeline */}
        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <h2 className="text-title-1 font-semibold tracking-tight">
            {"// Timeline //"}
          </h2>
          <div className="mt-[16px] space-y-[16px] text-subhead leading-prose text-text-secondary">
            <div className="flex gap-3">
              <span className="text-text-tertiary font-medium shrink-0">+</span>
              <p>
                <span className="font-semibold text-black">
                  Week 1-2: Data Collection
                </span>{" "}
                — We audit your current AI visibility, directory listings, and
                structured data across all platforms.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-text-tertiary font-medium shrink-0">+</span>
              <p>
                <span className="font-semibold text-black">
                  Week 3-4: Analysis
                </span>{" "}
                — We analyze findings, compare against competitors, and identify
                gaps and opportunities.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-text-tertiary font-medium shrink-0">+</span>
              <p>
                <span className="font-semibold text-black">
                  Week 5-6: Delivery
                </span>{" "}
                — You receive a comprehensive report with a prioritized roadmap
                and clear next steps.
              </p>
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <h2 className="text-title-1 font-semibold tracking-tight">
            {"// Frequently Asked Questions //"}
          </h2>
          <div className="mt-[16px] space-y-[20px] text-subhead leading-prose text-text-secondary">
            <div>
              <h3 className="font-semibold text-black">
                Who is this audit for?
              </h3>
              <p className="mt-[8px]">
                Healthcare practices — IVF clinics, fertility centers, dental
                practices, cosmetic dermatology, hair restoration, LASIK,
                plastic surgery, orthopedics, and cardiology.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-black">
                Who is this audit NOT for?
              </h3>
              <p className="mt-[8px]">
                Non-healthcare businesses, practices not yet ready to invest in
                AI visibility, or anyone looking for a quick SEO fix.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-black">
                What happens after the audit?
              </h3>
              <p className="mt-[8px]">
                You receive a comprehensive report with a prioritized roadmap.
                If you want to proceed, the next step is implementation —
                strategy, technical optimization, and ongoing monitoring.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-black">Why $5,000?</h3>
              <p className="mt-[8px]">
                Because a thorough AEO audit requires manual analysis across
                multiple AI platforms, directory verification, structured data
                review, and competitive analysis. The $5,000 fee covers all of
                this — and is credited toward implementation if you move forward.
              </p>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <GlassCard className="mx-auto max-w-[720px] px-[30px] md:px-[60px] py-[30px] md:py-[60px] text-center">
          <h2 className="text-title-1 font-semibold tracking-tight">
            Ready to see how AI sees your practice?
          </h2>
          <p className="mt-[16px] text-body leading-relaxed-body text-text-secondary">
            Book a free discovery call. We&apos;ll walk you through a basic AEO
            snapshot — no cost, no obligation.
          </p>
          <div className="mt-[24px]">
            <Button href="/book">Book a Discovery Call</Button>
          </div>
        </GlassCard>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Healthcare AEO Audit",
              description:
                "A complete diagnostic of your healthcare practice's AI visibility across ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
              provider: {
                "@type": "ProfessionalService",
                "@id": "https://pagerstudio.space/#organization",
                name: "Pager Studio",
                url: "https://pagerstudio.space",
              },
              offers: {
                "@type": "Offer",
                price: "5000",
                priceCurrency: "USD",
                description: "Healthcare AEO Audit — $5,000 fixed",
                availability: "https://schema.org/InStock",
              },
              serviceType: "Healthcare AEO Audit",
              areaServed: "Worldwide",
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://pagerstudio.space" },
                { "@type": "ListItem", position: 2, name: "Healthcare AEO Audit", item: "https://pagerstudio.space/healthcare-aeo-audit" },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
