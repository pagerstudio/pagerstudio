import type { Metadata } from "next";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import Section from "@/components/Section";
import PreferredSourceButton from "@/components/PreferredSourceButton";

export const metadata: Metadata = {
  title: "Hair Restoration AEO — Get Recommended by AI Search | Sandeep Kumar",
  description:
    "Sandeep Kumar helps hair restoration clinics get recommended by AI search. Healthcare AEO for hair transplant practices.",
  keywords: [
    "hair restoration AEO",
    "hair transplant AI visibility",
    "hair restoration answer engine optimization",
    "hair transplant AI search",
    "hair restoration ChatGPT",
  ],
  alternates: {
    canonical: "/hair-restoration-aeo",
  },
  openGraph: {
    title: "Hair Restoration AEO — Get Recommended by AI Search",
    description: "Sandeep Kumar helps hair restoration clinics get recommended by AI search engines.",
    url: "https://www.pagerstudio.space/hair-restoration-aeo",
    images: ["/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hair Restoration AEO — Get Recommended by AI Search",
    description: "Sandeep Kumar helps hair restoration clinics get recommended by AI search engines.",
    images: ["/og-default.png"],
  },
};

const faqs = [
  {
    question: "Why do hair restoration clinics need AEO?",
    answer: "Patients researching hair transplants ask AI — 'which hair transplant clinic is best near me?' and 'how much does FUE cost?' — before they Google. If your clinic isn't in AI's answer, the patient books with whichever provider AI recommends.",
  },
  {
    question: "What's the difference between hair restoration SEO and AEO?",
    answer: "Hair restoration SEO gets you ranked in Google. AEO gets you recommended inside AI answers. A hair transplant clinic can rank #1 on Google and still be invisible to ChatGPT if its techniques, outcomes, and credentials aren't structured for AI.",
  },
  {
    question: "How does AEO help with hair transplant consultation bookings?",
    answer: "When a patient asks AI about hair transplant techniques, costs, or surgeon credentials, AEO ensures your clinic's information is structured so AI cites it. This drives consultation requests from patients ready to proceed.",
  },
  {
    question: "How long does it take for a hair restoration clinic to become visible in AI?",
    answer: "Initial data improvements show up in weeks. Full AI visibility takes 3-6 months. Hair restoration clinics that start AEO now have a significant advantage because few are optimizing for AI yet.",
  },
];


export default function HairRestorationAEOPage() {
  return (
    <>
      <BackButton className="max-w-[1440px]" />
      <section className="px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[90px] md:pb-[180px]">
        <GlassCard className="mx-auto max-w-[1440px] px-[30px] md:px-[60px] pt-[30px] md:pt-[60px] pb-[30px] md:pb-[60px]">
          <p className="text-subhead font-medium text-text-secondary">
            {"// Hair Restoration //"}
          </p>
          <h1 className="mt-[20px] md:mt-[30px] text-display md:text-display-xl font-semibold leading-snug tracking-tight">
            How Hair Restoration Clinics Get Recommended by AI Search
          </h1>
          <p className="mt-[16px] text-subhead leading-prose text-text-secondary max-w-[720px]">
            When someone asks ChatGPT &ldquo;which hair transplant clinic is best near me?&rdquo; — does your clinic appear? Sandeep Kumar helps hair restoration practices get recommended by AI search engines through healthcare AEO.
          </p>
          <div className="mt-[30px]">
            <Button href="/book">Book a Discovery Call</Button>
          </div>
        </GlassCard>

        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <h2 className="text-title-1 font-semibold tracking-tight">
            {"// Why Do Hair Restoration Clinics Need AEO? //"}</h2>
          <p className="mt-[16px] text-subhead leading-prose text-text-secondary">
            Hair transplants are one of the most researched cosmetic procedures. Patients ask AI about FUE vs FUT, costs, surgeon experience, and natural-looking results — not just which clinic is nearby.
          </p>
          <p className="mt-[16px] text-subhead leading-prose text-text-secondary">
            AI gives one answer. If your clinic&apos;s techniques, success rates, and credentials aren&apos;t structured for AI consumption, the patient books with whichever hair restoration provider AI recommends.
          </p>
        </Section>

        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <h2 className="text-title-1 font-semibold tracking-tight">
            {"// What Does AEO for Hair Restoration Include? //"}</h2>
          <div className="mt-[16px] space-y-[16px] text-subhead leading-prose text-text-secondary">
            <p>
              <span className="font-semibold text-black">Structured data.</span>{" "}
              Schema markup that tells AI your techniques (FUE/FUT), surgeon certifications, and outcomes.
            </p>
            <p>
              <span className="font-semibold text-black">Directory consistency.</span>{" "}
              Your clinic&apos;s NAP must be identical across every hair restoration directory and healthcare listing.
            </p>
            <p>
              <span className="font-semibold text-black">Content extractability.</span>{" "}
              Your service pages must be structured so AI can parse technique types, costs, and recovery information.
            </p>
            <p>
              <span className="font-semibold text-black">Authority signals.</span>{" "}
              Surgeon certifications, professional memberships, and third-party reviews that validate your expertise.
            </p>
          </div>
        </Section>

        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <h2 className="text-title-1 font-semibold tracking-tight">
            {"// Frequently Asked Questions About Hair Restoration AEO //"}</h2>
          <div className="mt-[16px] space-y-[20px]">
            {faqs.map((faq) => (
              <GlassCard key={faq.question} className="px-[30px] md:px-[40px] py-[30px] md:py-[40px]">
                <h3 className="text-title-2 font-semibold tracking-tight">{faq.question}</h3>
                <p className="mt-[12px] text-body leading-relaxed-body text-text-secondary">{faq.answer}</p>
              </GlassCard>
            ))}
          </div>
        </Section>

        <GlassCard className="mx-auto max-w-[720px] px-[30px] md:px-[60px] py-[30px] md:py-[60px] text-center">
          <h2 className="text-title-1 font-semibold tracking-tight">
            Ready to see how AI sees your hair restoration clinic?
          </h2>
          <p className="mt-[16px] text-body leading-relaxed-body text-text-secondary">
            Start with a free discovery call. We&apos;ll show you a basic AEO snapshot of your hair restoration practice — live, on the call.
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
              name: "Hair Restoration AEO — Sandeep Kumar",
              description: "Healthcare AEO for hair restoration clinics. Get recommended by ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
              provider: {
                "@type": "ProfessionalService",
                "@id": "https://www.pagerstudio.space/#organization",
                name: "Pager Studio",
                url: "https://www.pagerstudio.space",
              },
              areaServed: "Worldwide",
              serviceType: ["Healthcare AEO", "Hair Restoration AEO", "Hair Transplant AI Visibility"],
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
                { "@type": "ListItem", position: 2, name: "Hair Restoration AEO", item: "https://www.pagerstudio.space/hair-restoration-aeo" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Hair Restoration AEO — Get Recommended by AI Search | Sandeep Kumar",
              url: "https://www.pagerstudio.space/hair-restoration-aeo",
              speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: ["h1"],
              },
            },
          ]),
        }}
      />
    </>
  );
}
