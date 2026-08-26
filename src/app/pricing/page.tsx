import type { Metadata } from "next";
import Button from "@/components/Button";
import BackButton from "@/components/BackButton";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "Pricing & Process",
  description:
    "Pager Studio's pricing: $5,000 fixed audit. 6-month foundation. Month-to-month after that. No surprises, no hidden fees.",
  keywords: [
    "AEO audit cost",
    "healthcare AEO pricing",
    "AI search optimization pricing",
    "AEO pricing",
    "healthcare marketing pricing",
  ],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing & Process",
    description: "$5,000 audit. 6-month foundation. Month-to-month. That's it.",
    url: "https://pagerstudio.space/pricing",
    images: ["/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing & Process",
    description: "$5,000 audit. 6-month foundation. Month-to-month. That's it.",
  },
};

const steps = [
  {
    num: "1.",
    title: "Audit",
    price: "$5,000, fixed",
    timing: "4-6 weeks",
    description:
      "One-time diagnostic of your practice's AI visibility. You get a comprehensive report with findings, priorities, and a roadmap. No obligation to continue.",
  },
  {
    num: "2.",
    title: "6-Month Foundation",
    price: "Quoted after audit",
    timing: "6-month minimum",
    description:
      "Months 1-3: Implementation — structured data, directories, content, entity optimization. Months 4-6: Monitoring — tracking AI mentions, measuring progress, adjusting strategy. Your audit fee is credited toward this.",
  },
  {
    num: "3.",
    title: "Month-to-Month",
    price: "Quoted after foundation",
    timing: "No contract",
    description:
      "Ongoing monitoring and maintenance after the 6-month foundation. Cancel anytime with 30 days notice. No penalties. No renewal negotiations.",
  },
];

export default function PricingPage() {
  return (
    <>
      <BackButton />
      <section className="px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[90px] md:pb-[180px]">
        <GlassCard className="mx-auto max-w-[720px] px-[30px] md:px-[60px] py-[30px] md:py-[60px]">
          <p className="text-subhead font-medium text-text-secondary">
            {"// Pricing & Process //"}
          </p>
          <h1 className="mt-[20px] md:mt-[30px] text-display md:text-display-xl font-semibold leading-snug tracking-tight">
            Make your practice discoverable to AI search and agents
          </h1>
          <p className="mt-[20px] md:mt-[30px] text-subhead leading-prose text-text-secondary">
            The pricing is simple. The process is simple. No hidden fees, no
            long-term contracts to start, no surprises.
          </p>

          <div className="mt-[30px] space-y-[20px] md:space-y-[30px]">
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-xl border border-border-subtle p-5 md:p-6"
              >
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-text-tertiary">{step.num}</span>
                    <h3 className="font-semibold text-black">{step.title}</h3>
                  </div>
                  <div className="flex items-center gap-3 text-subhead">
                    <span className="font-semibold text-black">{step.price}</span>
                    <span className="text-text-tertiary">·</span>
                    <span className="text-text-secondary">{step.timing}</span>
                  </div>
                </div>
                <p className="mt-[12px] text-subhead leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-[60px]">
            <p className="text-subhead text-text-secondary mb-[30px]">Ready to start?</p>
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
              name: "Pager Studio AEO Audit",
              description:
                "One-time AEO audit ($5,000 fixed), 6-month foundation implementation and monitoring, then month-to-month. Simple process for making healthcare practices visible in AI search.",
              provider: {
                "@type": "ProfessionalService",
                "@id": "https://pagerstudio.space/#organization",
                name: "Pager Studio",
                url: "https://pagerstudio.space",
              },
              areaServed: "Worldwide",
              serviceType: ["AEO Audit", "AEO Implementation", "AI Visibility Monitoring"],
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
                { "@type": "ListItem", position: 2, name: "Pricing & Process", item: "https://pagerstudio.space/pricing" },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
