import type { Metadata } from "next";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Healthcare AEO — Answer Engine Optimization for Medical Practices",
  description:
    "Healthcare AEO (Answer Engine Optimization) makes your practice visible in AI search — ChatGPT, Gemini, Perplexity, and Google AI Overviews. Pager Studio specializes in healthcare AEO strategy.",
  keywords: [
    "healthcare AEO",
    "answer engine optimization healthcare",
    "AEO for medical practices",
    "AI search healthcare",
    "healthcare AI visibility",
    "AEO strategy healthcare",
  ],
  alternates: {
    canonical: "/healthcare-aeo",
  },
  openGraph: {
    title: "Healthcare AEO — Answer Engine Optimization for Medical Practices",
    description:
      "Healthcare AEO makes your practice visible in AI search — ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
    url: "https://pagerstudio.space/healthcare-aeo",
    images: ["/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare AEO — Answer Engine Optimization for Medical Practices",
    description:
      "Healthcare AEO makes your practice visible in AI search — ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
    images: ["/og-default.png"],
  },
};

const pillars = [
  {
    title: "Structured Data & Schema Markup",
    description:
      "MedicalOrganization, Physician, and Service schema that tells AI exactly what your practice is, what you treat, and where you are.",
  },
  {
    title: "Consistent Directory Presence",
    description:
      "Your name, address, phone, and specialties must match across Google Business Profile, Healthgrades, Zocdoc, Vitals, and your website.",
  },
  {
    title: "Extractable Content",
    description:
      "Service pages, FAQs, and condition explainers written for AI comprehension — not marketing fluff that AI ignores.",
  },
  {
    title: "Off-Page Authority",
    description:
      "Citations, mentions, and references from trusted sources that AI engines use to verify your credibility.",
  },
];

const specialties = [
  "IVF & Fertility",
  "Hair Restoration",
  "Cosmetic Dermatology",
  "Dental Implants",
  "LASIK",
  "Plastic Surgery",
  "Orthopedics",
  "Cardiology",
];

export default function HealthcareAEOPage() {
  return (
    <>
      <BackButton className="max-w-[1440px]" />
      <section className="px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[90px] md:pb-[180px]">
        <GlassCard className="mx-auto max-w-[1440px] px-[30px] md:px-[60px] pt-[30px] md:pt-[60px] pb-[30px] md:pb-[60px]">
          <p className="text-subhead font-medium text-text-secondary">
            {"// Healthcare AEO //"}
          </p>
          <h1 className="mt-[20px] md:mt-[30px] text-display md:text-display-xl font-semibold leading-snug tracking-tight">
            Healthcare AEO: Make Your Practice Visible in AI Search
          </h1>
          <p className="mt-[20px] md:mt-[30px] text-subhead leading-prose text-text-secondary max-w-[720px]">
            Patients no longer just Google healthcare providers. They ask
            ChatGPT, Gemini, and Perplexity — and AI gives them one answer.{" "}
            <strong className="font-semibold text-black">
              Healthcare AEO ensures that answer includes your practice.
            </strong>
          </p>
          <div className="mt-[30px] flex flex-col md:flex-row gap-[16px]">
            <Button href="/book">Book a Discovery Call</Button>
            <Button href="/pricing" variant="secondary">
              See Pricing &amp; Process
            </Button>
          </div>
        </GlassCard>

        {/* What is Healthcare AEO */}
        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <h2 className="text-title-1 font-semibold tracking-tight">
            {"// What is Healthcare AEO? //"}
          </h2>
          <p className="mt-[16px] text-subhead leading-prose text-text-secondary max-w-[720px]">
            Healthcare AEO (Answer Engine Optimization) is the practice of
            structuring your online presence so that AI systems — including AI
            search engines, large language models, and virtual assistants — can
            find, understand, and recommend your healthcare practice when
            patients ask relevant questions.
          </p>
          <p className="mt-[16px] text-subhead leading-prose text-text-secondary max-w-[720px]">
            Unlike traditional SEO, which focuses on ranking in Google&apos;s
            results, AEO focuses on being the source AI cites when it answers a
            patient&apos;s question.{" "}
            <strong className="font-semibold text-black">
              SEO gets you ranked. AEO gets you recommended.
            </strong>
          </p>
        </Section>

        {/* Why Healthcare */}
        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <h2 className="text-title-1 font-semibold tracking-tight">
            {"// Why Healthcare Needs AEO //"}
          </h2>
          <ul className="mt-[16px] space-y-[16px] text-subhead leading-prose text-text-secondary">
            <li className="flex gap-3">
              <span className="text-text-tertiary font-medium shrink-0">+</span>
              <p>
                <span className="font-semibold text-black">
                  High-stakes decisions.
                </span>{" "}
                Patients aren&apos;t casually browsing. They want a clear,
                trustworthy answer — which is exactly what AI provides.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-text-tertiary font-medium shrink-0">+</span>
              <p>
                <span className="font-semibold text-black">
                  Complex information.
                </span>{" "}
                Specialties, insurance networks, locations, availability —
                healthcare data is intricate and hard to synthesize manually.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-text-tertiary font-medium shrink-0">+</span>
              <p>
                <span className="font-semibold text-black">
                  Trust requirements.
                </span>{" "}
                Patients need to trust their provider. AI systems build trust by
                citing authoritative, consistent sources.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-text-tertiary font-medium shrink-0">+</span>
              <p>
                <span className="font-semibold text-black">
                  Geographic specificity.
                </span>{" "}
                Healthcare is local. AI needs to know exactly where you are, what
                you treat, and who you serve.
              </p>
            </li>
          </ul>
        </Section>

        {/* The Four Pillars */}
        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <h2 className="text-title-1 font-semibold tracking-tight">
            {"// The Four Pillars of Healthcare AEO //"}
          </h2>
          <div className="mt-[20px] md:mt-[30px] space-y-[20px] md:space-y-[30px]">
            {pillars.map((pillar) => (
              <GlassCard
                key={pillar.title}
                className="px-[30px] md:px-[40px] py-[30px] md:py-[40px]"
              >
                <h3 className="text-title-2 font-semibold tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-[12px] text-body leading-relaxed-body text-text-secondary">
                  {pillar.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </Section>

        {/* Specialties */}
        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <h2 className="text-title-1 font-semibold tracking-tight">
            {"// Specialties We Serve //"}
          </h2>
          <div className="mt-[16px] flex flex-wrap gap-[12px]">
            {specialties.map((specialty) => (
              <span
                key={specialty}
                className="px-[16px] py-[8px] rounded-full border border-border-subtle text-footnote font-medium text-text-secondary"
              >
                {specialty}
              </span>
            ))}
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

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Healthcare AEO",
              description:
                "Healthcare AEO (Answer Engine Optimization) makes medical practices visible in AI search — ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
              provider: {
                "@type": "ProfessionalService",
                "@id": "https://pagerstudio.space/#organization",
                name: "Pager Studio",
                url: "https://pagerstudio.space",
              },
              serviceType: "Healthcare AEO Strategy",
              areaServed: "Worldwide",
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://pagerstudio.space" },
                { "@type": "ListItem", position: 2, name: "Healthcare AEO", item: "https://pagerstudio.space/healthcare-aeo" },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
