import type { Metadata } from "next";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import Section from "@/components/Section";
import PreferredSourceButton from "@/components/PreferredSourceButton";

export const metadata: Metadata = {
  title: "IVF & Fertility AEO — Get Recommended by AI Search | Sandeep Kumar",
  description:
    "Sandeep Kumar helps IVF clinics and fertility centers get recommended by AI search engines — ChatGPT, Gemini, Perplexity, Google AI Overviews. Healthcare AEO for fertility practices.",
  keywords: [
    "IVF AEO",
    "fertility clinic AI visibility",
    "IVF answer engine optimization",
    "fertility center AI search",
    "IVF SEO alternative",
    "fertility clinic ChatGPT",
  ],
  alternates: {
    canonical: "/ivf-fertility-aeo",
  },
  openGraph: {
    title: "IVF & Fertility AEO — Get Recommended by AI Search",
    description: "Sandeep Kumar helps IVF clinics and fertility centers get recommended by AI search engines.",
    url: "https://www.pagerstudio.space/ivf-fertility-aeo",
    images: ["/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "IVF & Fertility AEO — Get Recommended by AI Search",
    description: "Sandeep Kumar helps IVF clinics and fertility centers get recommended by AI search engines.",
    images: ["/og-default.png"],
  },
};

const faqs = [
  {
    question: "How do IVF patients choose a clinic?",
    answer: "More IVF patients now ask AI — 'which IVF clinic has the highest success rates near me?' — before they ever Google. If your clinic isn't in AI's answer, you've already lost that patient.",
  },
  {
    question: "Why is traditional SEO not enough for IVF clinics?",
    answer: "SEO gets you ranked on page 1 of Google. AEO gets you recommended inside AI answers. An IVF clinic can rank #1 on Google and still be invisible to ChatGPT and Gemini if its data isn't structured for AI consumption.",
  },
  {
    question: "What does AEO do for fertility clinics specifically?",
    answer: "AEO makes your clinic's success rates, credentials, and patient outcomes parseable by AI systems. When a patient asks ChatGPT about IVF success rates in your city, AI pulls from structured data — and if yours isn't there, it recommends a competitor.",
  },
  {
    question: "How long does it take for an IVF clinic to become visible in AI?",
    answer: "Initial data consistency improvements can show up in weeks. Full AI visibility — structured data, cross-platform authority, directory presence — takes 3-6 months. Early movers in fertility AEO have a significant advantage because few clinics are doing this yet.",
  },
];


export default function IVFFertilityAEOPage() {
  return (
    <>
      <BackButton className="max-w-[1440px]" />
      <section className="px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[90px] md:pb-[180px]">
        <GlassCard className="mx-auto max-w-[1440px] px-[30px] md:px-[60px] pt-[30px] md:pt-[60px] pb-[30px] md:pb-[60px]">
          <p className="text-subhead font-medium text-text-secondary">
            {"// IVF & Fertility //"}
          </p>
          <h1 className="mt-[20px] md:mt-[30px] text-display md:text-display-xl font-semibold leading-snug tracking-tight">
            How IVF Clinics Get Recommended by AI Search
          </h1>
          <p className="mt-[16px] text-subhead leading-prose text-text-secondary max-w-[720px]">
            When someone asks ChatGPT &ldquo;which IVF clinic has the highest success rates near me?&rdquo; — does your clinic appear? Sandeep Kumar helps fertility practices get recommended by AI search engines through healthcare AEO.
          </p>
          <div className="mt-[30px]">
            <Button href="/book">Book a Discovery Call</Button>
          </div>
        </GlassCard>

        {/* Why IVF Needs AEO */}
        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <h2 className="text-title-1 font-semibold tracking-tight">
            {"// Why Do IVF Clinics Need AEO? //"}</h2>
          <p className="mt-[16px] text-subhead leading-prose text-text-secondary">
            IVF is one of the most researched medical decisions patients make. They don&apos;t just search — they ask AI. &ldquo;Which IVF clinic has the best success rates?&rdquo; &ldquo;How much does IVF cost in [city]?&rdquo; &ldquo;Which fertility specialist is recommended?&rdquo;
          </p>
          <p className="mt-[16px] text-subhead leading-prose text-text-secondary">
            AI gives one answer. Not ten links. If your clinic&apos;s data isn&apos;t structured for AI consumption, the patient goes to whichever clinic AI recommends — and it won&apos;t be yours.
          </p>
        </Section>

        {/* What AEO Includes */}
        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <h2 className="text-title-1 font-semibold tracking-tight">
            {"// What Does AEO for IVF Actually Include? //"}</h2>
          <div className="mt-[16px] space-y-[16px] text-subhead leading-prose text-text-secondary">
            <p>
              <span className="font-semibold text-black">Structured data.</span>{" "}
              Schema markup that tells AI exactly what your clinic does, your success rates, your specialties, and your credentials.
            </p>
            <p>
              <span className="font-semibold text-black">Directory consistency.</span>{" "}
              Your clinic&apos;s NAP (name, address, phone) must be identical across every directory, review site, and healthcare listing.
            </p>
            <p>
              <span className="font-semibold text-black">Content extractability.</span>{" "}
              Your service pages must be structured so AI can parse them — not walls of text AI ignores.
            </p>
            <p>
              <span className="font-semibold text-black">Authority signals.</span>{" "}
              Third-party sources that validate your clinic — medical boards, associations, trusted review platforms.
            </p>
          </div>
        </Section>

        {/* FAQ */}
        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <h2 className="text-title-1 font-semibold tracking-tight">
            {"// Frequently Asked Questions About IVF AEO //"}</h2>
          <div className="mt-[16px] space-y-[20px]">
            {faqs.map((faq) => (
              <GlassCard key={faq.question} className="px-[30px] md:px-[40px] py-[30px] md:py-[40px]">
                <h3 className="text-title-2 font-semibold tracking-tight">{faq.question}</h3>
                <p className="mt-[12px] text-body leading-relaxed-body text-text-secondary">{faq.answer}</p>
              </GlassCard>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <GlassCard className="mx-auto max-w-[720px] px-[30px] md:px-[60px] py-[30px] md:py-[60px] text-center">
          <h2 className="text-title-1 font-semibold tracking-tight">
            Ready to see how AI sees your IVF clinic?
          </h2>
          <p className="mt-[16px] text-body leading-relaxed-body text-text-secondary">
            Start with a free discovery call. We&apos;ll show you a basic AEO snapshot of your fertility practice — live, on the call.
          </p>
          <div className="mt-[24px]">
            <Button href="/book">Book a Discovery Call</Button>
          </div>
        </GlassCard>

        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <PreferredSourceButton />
        </Section>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "IVF & Fertility AEO — Sandeep Kumar",
              description: "Healthcare AEO for IVF clinics and fertility centers. Get recommended by ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
              provider: {
                "@type": "ProfessionalService",
                "@id": "https://www.pagerstudio.space/#organization",
                name: "Pager Studio",
                url: "https://www.pagerstudio.space",
              },
              areaServed: "Worldwide",
              serviceType: ["Healthcare AEO", "IVF AEO", "Fertility Clinic AI Visibility"],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pagerstudio.space" },
                { "@type": "ListItem", position: 2, name: "IVF & Fertility AEO", item: "https://www.pagerstudio.space/ivf-fertility-aeo" },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
