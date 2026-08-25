import type { Metadata } from "next";
import Button from "@/components/Button";
import BackButton from "@/components/BackButton";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "Pricing & Process",
  description:
    "Pager Studio's process: a full AEO audit ($5,000, fixed), followed by implementation and ongoing monitoring to make your practice discoverable to AI search.",
  keywords: [
    "AEO audit cost",
    "healthcare AEO pricing",
    "AI search optimization pricing",
    "AEO strategy cost",
    "healthcare marketing pricing",
  ],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing & Process | Pager Studio",
    description:
      "AEO audit, implementation, and monitoring for healthcare practices.",
    url: "https://pagerstudio.vercel.app/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing & Process | Pager Studio",
    description:
      "AEO audit, implementation, and monitoring for healthcare practices.",
  },
};

const steps = [
  {
    num: "1.",
    title: "Audit",
    description:
      "A complete diagnostic of your practice's current AI visibility — how AI engines and agents see (or fail to see) you today, delivered as a clear report with findings and priorities.",
  },
  {
    num: "2.",
    title: "Implement",
    description:
      "Technical optimization, off-page authority, and directory presence — built around your practice, specialty, and markets.",
  },
  {
    num: "3.",
    title: "Monitor",
    description:
      "Ongoing tracking across AI platforms to keep your practice visible as AI search evolves, with regular reporting.",
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
            Pager Studio&apos;s process is straightforward: a full audit, followed by
            implementation and ongoing monitoring.{" "}
            <strong className="font-semibold text-black">
              The audit is $5,000, fixed.
            </strong>{" "}
            Implementation and monitoring are quoted after your audit, based on
            your practice, specialties, and markets — your audit fee is credited
            toward it if you move forward.
          </p>

          <div className="mt-[20px] md:mt-[30px] space-y-[20px] md:space-y-[30px]">
            {steps.map((step) => (
              <div key={step.title} className="flex gap-3 text-subhead leading-prose text-text-secondary">
                <span className="font-semibold text-black shrink-0">{step.num}</span>
                <p>
                  <span className="font-semibold text-black">{step.title}</span>:{" "}
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-[60px]">
            <p className="text-subhead text-text-secondary mb-[30px]">Ready to start?</p>
            <Button href="/book">Free Discovery Call</Button>
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
                "A complete diagnostic of your practice's current AI visibility — how AI engines and agents see (or fail to see) you today, delivered as a clear report with findings and priorities.",
              provider: {
                "@type": "ProfessionalService",
                "@id": "https://pagerstudio.vercel.app/#organization",
                name: "Pager Studio",
                url: "https://pagerstudio.vercel.app",
              },
              areaServed: [
                { "@type": "Country", name: "United States" },
                { "@type": "Country", name: "United Kingdom" },
                { "@type": "Country", name: "United Arab Emirates" },
              ],
              serviceType: ["AEO Audit", "AI Visibility Diagnostic"],
              offers: {
                "@type": "Offer",
                price: "5000",
                priceCurrency: "USD",
                description: "Fixed-fee AEO audit for healthcare practices",
                availability: "https://schema.org/InStock",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Pager Studio Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AEO Audit",
                      description: "Complete diagnostic of AI visibility",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AEO Implementation",
                      description: "Technical optimization, off-page authority, and directory presence",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AEO Monitoring",
                      description: "Ongoing tracking across AI platforms with regular reporting",
                    },
                  },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://pagerstudio.vercel.app" },
                { "@type": "ListItem", position: 2, name: "Pricing & Process", item: "https://pagerstudio.vercel.app/pricing" },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
