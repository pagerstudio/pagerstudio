import type { Metadata } from "next";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import SwipeableCards from "@/components/SwipeableCards";
import { getCachedAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Healthcare AEO Strategist — Sandeep Kumar",
  description:
    "Patients don't Google anymore — they ask AI. Sandeep Kumar makes sure your healthcare practice is the one AI recommends. ChatGPT, Gemini, Perplexity, Google AI Overviews.",
  keywords: [
    "healthcare AEO",
    "AEO strategist",
    "answer engine optimization healthcare",
    "AI search healthcare",
    "healthcare AI visibility",
    "AEO for healthcare practices",
    "GEO healthcare",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Healthcare AEO Strategist — Sandeep Kumar",
    description:
      "Patients don't Google anymore — they ask AI. We make sure your practice is the one AI recommends.",
    url: "https://www.pagerstudio.space",
    images: ["/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare AEO Strategist — Sandeep Kumar",
    description:
      "Patients don't Google anymore — they ask AI. We make sure your practice is the one AI recommends.",
    images: ["/og-default.png"],
  },
};

const mustReadItems = [
  {
    label: "Confidentiality",
    text: "All engagements are covered by a formal NDA. Pager Studio does not collect patient data — only practice-level business information.",
  },
  {
    label: "Client Data Protection",
    text: "Pager Studio never uses client results or metrics for its own marketing.",
  },
  {
    label: "Minimum Engagement Term",
    text: "For a strong AI visibility foundation, 6 months is necessary. We don't offer anything less.",
  },
  {
    label: "Transparent Pricing",
    text: "The audit fee is fixed and disclosed upfront. No surprise charges — every cost is approved by you before it lands.",
  },
  {
    label: "Limited Capacity",
    text: "Pager Studio maintains a limited client roster to ensure each engagement gets dedicated attention.",
  },
];

export default async function HomePage() {
  const posts = await getCachedAllPosts();

  return (
    <>
      {/* First screen: hero + AEO callout */}
      <section className="flex flex-col items-center text-center px-[20px] md:px-[30px] pt-[60px] md:pt-0 pb-[40px] md:pb-0 min-h-[calc(100vh-76px)]">
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="max-w-[720px] text-[22px] sm:text-[26px] md:text-display-xl leading-[1.3] md:leading-[1.25] font-normal text-black tracking-[-0.03em] hero-animate" style={{ animationDelay: "0ms" }}>
            <span className="block md:inline font-semibold"><a href="https://www.linkedin.com/in/sandeepkumargr/" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded">Sandeep Kumar</a></span>
            <span className="block md:inline">{"// Healthcare AEO Strategist & Founder of Pager Studio //"}</span>
          </h1>
          <p className="max-w-[600px] mt-[20px] md:mt-[24px] text-subhead leading-relaxed-body text-text-secondary hero-animate" style={{ animationDelay: "80ms" }}>
            Pager Studio helps healthcare practices get recommended by AI search engines — ChatGPT, Gemini, Perplexity, Google AI Overviews.
          </p>
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-[16px] md:gap-[30px] mt-[24px] md:mt-[30px] hero-animate" style={{ animationDelay: "150ms" }}>
            <Button href="/book">Book a Discovery Call</Button>
            <Button href="/pricing" variant="secondary">
              See Pricing &amp; Process
            </Button>
          </div>
        </div>

        <div className="mb-[40px] md:mb-[60px] mt-[40px] md:mt-0 w-full max-w-[720px] hero-animate" style={{ animationDelay: "300ms" }}>
          <SwipeableCards posts={posts} />
        </div>
      </section>

      {/* FAQ */}
      <section className="px-[20px] md:px-[30px] pt-[40px] md:pt-[80px] pb-[40px] md:pb-[80px]">
        <GlassCard className="mx-auto max-w-[720px] px-[30px] md:px-[60px] py-[30px] md:py-[60px]">
          <div className="text-center mb-[20px] md:mb-[30px]">
            <h2 className="text-title-1 font-semibold tracking-tight">{"// What Questions Do People Have About Healthcare AEO? //"}</h2>
          </div>
          <div className="space-y-[20px] md:space-y-[30px]">
            <div>
              <h2 className="text-title-2 font-semibold text-black">What is Healthcare AEO?</h2>
              <p className="mt-[8px] text-body leading-relaxed-body text-text-secondary">
                The practice of structuring your online presence so AI systems can find, understand, and recommend your practice.
              </p>
            </div>
            <div>
              <h2 className="text-title-2 font-semibold text-black">How is AEO different from SEO?</h2>
              <p className="mt-[8px] text-body leading-relaxed-body text-text-secondary">
                SEO gets you ranked. AEO gets you recommended. A practice can rank #1 on Google and still be invisible to AI.
              </p>
            </div>
            <div>
              <h2 className="text-title-2 font-semibold text-black">How do I check if my practice is visible to AI?</h2>
              <p className="mt-[8px] text-body leading-relaxed-body text-text-secondary">
                Ask an AI tool a question a patient would ask about your specialty in your area. If your practice isn&apos;t mentioned, AI doesn&apos;t trust your data enough to recommend you.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-[30px]">
            <Button href="/faq" variant="secondary">See All FAQs</Button>
          </div>
        </GlassCard>
      </section>

      {/* Must Read */}
      <section className="px-[20px] md:px-[30px] pt-[60px] md:pt-[120px] pb-[90px] md:pb-[180px]">
        <GlassCard className="mx-auto max-w-[720px] mt-[20px] md:mt-[30px] px-[30px] md:px-[60px] py-[30px] md:py-[60px]">
          <div className="text-center mb-[20px] md:mb-[30px]">
            <h2 className="text-title-1 font-semibold tracking-tight">{"// Before We Work Together //"}</h2>
            <p className="mt-2 md:mt-3 text-body text-text-secondary">
              Before we work together, a few things to know upfront.
            </p>
          </div>
          <ul className="space-y-[20px] md:space-y-[30px]">
            {mustReadItems.map((item) => (
              <li key={item.label} className="flex gap-2 md:gap-3 text-body leading-relaxed-body text-text-secondary">
                <span className="text-text-tertiary font-medium shrink-0">+</span>
                <p>
                  <span className="font-semibold text-black">{item.label}</span>: {item.text}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-[60px]">
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
              "@type": "ProfessionalService",
              "@id": "https://www.pagerstudio.space/#organization",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Healthcare AEO Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Healthcare AEO Audit",
                      description: "Complete diagnostic of your practice's AI visibility. $5,000 fixed, delivered in 4-6 weeks.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Healthcare AEO Strategy",
                      description: "Technical optimization, off-page authority, directory presence, and ongoing monitoring.",
                    },
                  },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is Healthcare AEO?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The practice of structuring your online presence so AI systems can find, understand, and recommend your practice.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How is AEO different from SEO?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "SEO gets you ranked. AEO gets you recommended. A practice can rank #1 on Google and still be invisible to AI.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I check if my practice is visible to AI?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ask an AI tool a question a patient would ask about your specialty in your area. If your practice isn't mentioned, AI doesn't trust your data enough to recommend you.",
                  },
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.pagerstudio.space/#website",
              name: "Pager Studio",
              url: "https://www.pagerstudio.space",
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://www.pagerstudio.space/#webpage",
              name: "Healthcare AEO Strategist — Sandeep Kumar",
              url: "https://www.pagerstudio.space",
              dateModified: "2026-08-29",
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
