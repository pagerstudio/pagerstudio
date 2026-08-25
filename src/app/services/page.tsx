import type { Metadata } from "next";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Services — Healthcare AEO Strategy & Implementation",
  description:
    "Pager Studio offers Healthcare AEO strategy, audits, implementation, and monitoring. We make healthcare practices visible in AI search.",
  keywords: [
    "healthcare AEO services",
    "AEO audit",
    "AI visibility services",
    "healthcare AI search optimization",
    "AEO strategy healthcare",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services — Healthcare AEO Strategy & Implementation",
    description:
      "Pager Studio offers Healthcare AEO strategy, audits, implementation, and monitoring.",
    url: "https://pagerstudio.space/services",
    images: ["/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — Healthcare AEO Strategy & Implementation",
    description:
      "Pager Studio offers Healthcare AEO strategy, audits, implementation, and monitoring.",
    images: ["/og-default.png"],
  },
};

const services = [
  {
    title: "Healthcare AEO Audit",
    description:
      "A complete diagnostic of your practice's AI visibility across ChatGPT, Gemini, Perplexity, and Google AI Overviews. $5,000 fixed. Delivered in 4-6 weeks.",
    href: "/healthcare-aeo-audit",
  },
  {
    title: "AEO Strategy",
    description:
      "A comprehensive strategy for making your practice visible in AI search. Covers structured data, directory presence, content optimization, and authority signals.",
    href: "/healthcare-aeo",
  },
  {
    title: "AI Visibility Monitoring",
    description:
      "Ongoing tracking of what AI platforms say about your practice across updates. Regular reporting and adjustments as the AI search landscape changes.",
    href: "/book",
  },
  {
    title: "Entity Optimization",
    description:
      "Making your practice a recognizable, verifiable entity across the web. Ensures AI systems correctly identify, understand, and trust your practice.",
    href: "/book",
  },
];

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
            Healthcare AEO Services
          </h1>
          <p className="mt-[20px] md:mt-[30px] text-subhead leading-prose text-text-secondary max-w-[720px]">
            Pager Studio offers a focused set of services designed to make
            healthcare practices visible in AI search. Every engagement is
            tailored to your practice, specialties, and markets.
          </p>
          <div className="mt-[30px]">
            <Button href="/book">Book a Discovery Call</Button>
          </div>
        </GlassCard>

        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <div className="space-y-[20px] md:space-y-[30px]">
            {services.map((service) => (
              <GlassCard
                key={service.title}
                className="px-[30px] md:px-[40px] py-[30px] md:py-[40px]"
              >
                <h2 className="text-title-1 font-semibold tracking-tight">
                  {service.title}
                </h2>
                <p className="mt-[12px] text-body leading-relaxed-body text-text-secondary">
                  {service.description}
                </p>
                <div className="mt-[20px]">
                  <Button href={service.href} variant="secondary">
                    Learn More
                  </Button>
                </div>
              </GlassCard>
            ))}
          </div>
        </Section>

        {/* Process */}
        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <h2 className="text-title-1 font-semibold tracking-tight">
            {"// How We Work //"}
          </h2>
          <div className="mt-[16px] space-y-[16px] text-subhead leading-prose text-text-secondary">
            <div className="flex gap-3">
              <span className="text-text-tertiary font-medium shrink-0">1.</span>
              <p>
                <span className="font-semibold text-black">
                  Free Discovery Call
                </span>{" "}
                — We prepare a basic AEO snapshot of your practice and walk you
                through it live. No cost, no obligation.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-text-tertiary font-medium shrink-0">2.</span>
              <p>
                <span className="font-semibold text-black">
                  AEO Audit ($5,000 fixed)
                </span>{" "}
                — 4-6 weeks analyzing how AI systems currently see your practice.
                You receive a comprehensive report with a prioritized roadmap.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-text-tertiary font-medium shrink-0">3.</span>
              <p>
                <span className="font-semibold text-black">
                  Implementation (6-month minimum)
                </span>{" "}
                — Technical optimization, off-page authority, directory presence,
                and the structural work that makes AI systems understand your
                specialties correctly.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-text-tertiary font-medium shrink-0">4.</span>
              <p>
                <span className="font-semibold text-black">Monitoring</span> — We
                track what AI platforms actually say about you across updates and
                adjust as the landscape changes.
              </p>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <GlassCard className="mx-auto max-w-[720px] px-[30px] md:px-[60px] py-[30px] md:py-[60px] text-center">
          <h2 className="text-title-1 font-semibold tracking-tight">
            Ready to become visible to AI?
          </h2>
          <p className="mt-[16px] text-body leading-relaxed-body text-text-secondary">
            Book a free discovery call. We&apos;ll show you how AI currently sees
            your practice — and what to do about it.
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
              name: "Healthcare AEO Services",
              description:
                "Pager Studio offers Healthcare AEO strategy, audits, implementation, and monitoring.",
              provider: {
                "@type": "ProfessionalService",
                "@id": "https://pagerstudio.space/#organization",
                name: "Pager Studio",
                url: "https://pagerstudio.space",
              },
              serviceType: [
                "Healthcare AEO Strategy",
                "Healthcare AEO Audit",
                "AI Visibility Monitoring",
                "Entity Optimization",
              ],
              areaServed: "Worldwide",
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
