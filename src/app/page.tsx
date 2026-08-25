import type { Metadata } from "next";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import SwipeableCards from "@/components/SwipeableCards";
import { getCachedAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Healthcare AEO Strategist — Pager Studio",
  description:
    "Pager Studio is a Healthcare AEO (Answer Engine Optimization) strategy firm. We make healthcare practices visible in AI search — ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
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
    title: "Healthcare AEO Strategist — Pager Studio",
    description:
      "Pager Studio is a Healthcare AEO strategy firm. We make healthcare practices visible in AI search.",
    url: "https://pagerstudio.space",
    images: ["/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare AEO Strategist — Pager Studio",
    description:
      "Pager Studio is a Healthcare AEO strategy firm. We make healthcare practices visible in AI search.",
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
    text: "Client results and metrics are never used for Pager Studio's own marketing.",
  },
  {
    label: "Minimum Engagement Term",
    text: "For a strong AI visibility foundation, 6 months is necessary. We don't offer anything less.",
  },
  {
    label: "Transparent Pricing",
    text: "The audit fee is fixed and disclosed upfront. Any pricing adjustments require your sign-off before proceeding.",
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
          <h1 className="max-w-[720px] text-[18px] sm:text-[22px] md:text-display-xl leading-[1.3] md:leading-[1.25] font-normal text-black tracking-[-0.03em] hero-animate" style={{ animationDelay: "0ms" }}>
            <span className="font-semibold"><a href="https://www.linkedin.com/in/sandeepkumargr/" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded">Sandeep Kumar</a></span> {"// Healthcare AEO Strategist //"}
            <br />
            {"Making healthcare practices visible in"}
            <br />
            {"AI search — ChatGPT, Gemini,"}
            <br />
            {"Perplexity, Google AI Overviews."}
          </h1>
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

      {/* Must Read */}
      <section className="px-[20px] md:px-[30px] pt-[60px] md:pt-[120px] pb-[90px] md:pb-[180px]">
        <GlassCard className="mx-auto max-w-[720px] mt-[20px] md:mt-[30px] px-[30px] md:px-[60px] py-[30px] md:py-[60px]">
          <div className="text-center mb-[20px] md:mb-[30px]">
            <h2 className="text-title-1 font-semibold tracking-tight">{"// Must Read //"}</h2>
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
              name: "Pager Studio",
              url: "https://pagerstudio.space",
              description:
                "Healthcare AEO (Answer Engine Optimization) strategy firm. We make healthcare practices visible in AI search — ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
              founder: {
                "@type": "Person",
                name: "Sandeep Kumar",
                jobTitle: "Healthcare AEO Strategist",
                url: "https://www.linkedin.com/in/sandeepkumargr/",
              },
              sameAs: [
                "https://instagram.com/pagerstudio",
                "https://x.com/pagerstudio",
                "https://linkedin.com/company/pagerstudio",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@pagerstudio.space",
                contactType: "customer service",
              },
              areaServed: "Worldwide",
              serviceType: [
                "Healthcare AEO Strategy",
                "Healthcare AEO Audit",
                "AI Visibility Optimization",
                "Healthcare AI Search Optimization",
              ],
              priceRange: "$$",
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://pagerstudio.space/#website",
              name: "Pager Studio",
              url: "https://pagerstudio.space",
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://pagerstudio.space/#webpage",
              name: "Healthcare AEO Strategist — Pager Studio",
              url: "https://pagerstudio.space",
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
