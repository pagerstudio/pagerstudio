import type { Metadata } from "next";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Section from "@/components/Section";
import PreferredSourceButton from "@/components/PreferredSourceButton";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pager Studio is an AEO strategy firm for healthcare, founded by Sandeep Kumar. We help healthcare practices become discoverable, accurately described, and trusted across AI search.",
  keywords: [
    "Pager Studio about",
    "Sandeep Kumar AEO",
    "healthcare AEO strategist",
    "answer engine optimization firm",
    "AI visibility healthcare",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About",
    description:
      "Pager Studio is an AEO strategy firm for healthcare, founded by Sandeep Kumar.",
    url: "https://www.pagerstudio.space/about",
    images: ["/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About",
    description:
      "Pager Studio is an AEO strategy firm for healthcare, founded by Sandeep Kumar.",
  },
};

const specialties = [
  "IVF & Fertility",
  "Hair Restoration",
  "Cosmetic Dermatology",
  "Dental Implants",
  "LASIK",
  "Plastic Surgery",
];

const expertise = [
  "Healthcare AEO (Answer Engine Optimization)",
  "AI Search Visibility (ChatGPT, Gemini, Perplexity, Google AI Overviews)",
  "Generative Engine Optimization (GEO)",
  "Medical Entity Optimization",
  "Schema Markup for Healthcare",
  "Directory Consistency & Verification",
  "AI Monitoring & Reporting",
];

export default function AboutPage() {
  return (
    <>
      <BackButton />
      <section className="px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[90px] md:pb-[180px]">
        <div className="mx-auto max-w-[720px] flex flex-col items-center">

          {/* Intro */}
          <Section noSeparator className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] hero-animate" style={{ animationDelay: "0ms" }}>
            <p className="text-subhead font-medium text-text-secondary">
              {"// About //"}
            </p>
            <h1 className="mt-[20px] md:mt-[30px] text-display md:text-display-xl font-semibold leading-snug tracking-tight">
              Who we are and why we do this
            </h1>
          </Section>

          {/* Founder */}
          <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] hero-animate" style={{ animationDelay: "80ms" }}>
            <h2 className="text-title-1 font-semibold tracking-tight">{"// Founder //"}</h2>
            <p className="mt-[16px] text-subhead leading-prose text-text-secondary">
              Hello, I&apos;m{" "}
              <a
                href="https://www.linkedin.com/in/sandeepkumargr/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-black hover:text-text-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded"
              >
                Sandeep Kumar
              </a>
              .
            </p>
            <p className="mt-[16px] text-subhead leading-prose text-text-secondary">
              I run Pager Studio solo. No team, no outsourced work, no junior copywriter drafting your strategy. When you email about a change in how ChatGPT describes your fertility clinic, I&apos;m the one who reads it and acts on it.
            </p>
            <p className="mt-[16px] text-subhead leading-prose text-text-secondary">
              I&apos;m based in Coimbatore, India. Healthcare AEO isn&apos;t synchronous work — I monitor your AI visibility around the clock and we sync on calls during your business hours.
            </p>
            <p className="mt-[16px] text-subhead leading-prose text-text-secondary">
              Before this, I watched healthcare practices spend $4,000-$8,000 a month on SEO firms that delivered blog posts no one reads and backlinks from directories that stopped mattering years ago. The reports looked impressive. The patient referral numbers didn&apos;t change. One dental implant client told me their previous agency&apos;s biggest win was getting them listed on a &quot;top dentists&quot; page that drove exactly zero consultation requests in 14 months.
            </p>
            <p className="mt-[16px] text-subhead leading-prose text-text-secondary">
              That was the old game. Patients don&apos;t search anymore — they ask an AI which practice to trust, and it answers before they ever visit your website. I make sure it answers with your name.
            </p>
            <div className="mt-[24px]">
              <Button href="/book">Book a Discovery Call</Button>
            </div>
          </Section>

          {/* Specialties */}
          <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] hero-animate" style={{ animationDelay: "120ms" }}>
            <h2 className="text-title-1 font-semibold tracking-tight">{"// Specialties //"}</h2>
            <p className="mt-[16px] text-subhead leading-prose text-text-secondary">
              Pager Studio works exclusively with healthcare practices in
              high-consideration specialties:
            </p>
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

          {/* Expertise */}
          <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] hero-animate" style={{ animationDelay: "160ms" }}>
            <h2 className="text-title-1 font-semibold tracking-tight">{"// Expertise //"}</h2>
            <ul className="mt-[16px] space-y-[16px] text-subhead leading-prose text-text-secondary">
              {expertise.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-text-tertiary font-medium shrink-0">+</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </Section>

          {/* About the Firm */}
          <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] hero-animate" style={{ animationDelay: "160ms" }}>
            <h2 className="text-title-1 font-semibold tracking-tight">{"// About the Firm //"}</h2>
            <p className="mt-[16px] text-subhead leading-prose text-text-secondary">
              Pager Studio is an AEO strategy firm for healthcare practices — IVF and fertility centers, hair restoration clinics, cosmetic dermatology practices, dental implant centers, LASIK and vision correction clinics, and plastic surgery practices.
            </p>
            <p className="mt-[16px] text-subhead leading-prose text-text-secondary">
              A few things to know upfront. We take on up to 10 clients at a time. Every engagement is NDA-covered. We never collect or work with patient data. We don&apos;t publish client names, metrics, or the strategies we build for them — not now, not ever.
            </p>
            <div className="mt-[24px]">
              <Button href="/pricing">See Pricing &amp; Process</Button>
            </div>
          </Section>

          {/* Preferred Source */}
          <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] hero-animate" style={{ animationDelay: "200ms" }}>
            <PreferredSourceButton />
          </Section>

        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sandeep Kumar",
              jobTitle: "Healthcare AEO Strategist",
              url: "https://www.linkedin.com/in/sandeepkumargr/",
              worksFor: {
                "@type": "Organization",
                name: "Pager Studio",
                url: "https://www.pagerstudio.space",
              },
              knowsAbout: [
                "Answer Engine Optimization",
                "Healthcare AEO",
                "AI Search Optimization",
                "Generative Engine Optimization",
                "Medical Entity Optimization",
                "Schema Markup for Healthcare",
                "Healthcare Marketing",
              ],
              sameAs: [
                "https://www.linkedin.com/in/sandeepkumargr/",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://www.pagerstudio.space/#organization",
              name: "Pager Studio",
              url: "https://www.pagerstudio.space",
              description:
                "Pager Studio is a Healthcare AEO (Answer Engine Optimization) strategy firm. We make healthcare practices visible in AI search — ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
              founder: {
                "@type": "Person",
                name: "Sandeep Kumar",
              jobTitle: "Healthcare Strategist",
                url: "https://www.linkedin.com/in/sandeepkumargr/",
              },
              areaServed: "Worldwide",
              serviceType: [
                "Healthcare AEO Strategy",
                "Healthcare AEO Audit",
                "AI Visibility Optimization",
                "Healthcare AI Search Optimization",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              name: "About | Pager Studio",
              url: "https://www.pagerstudio.space/about",
              speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: ["h1"],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pagerstudio.space" },
                { "@type": "ListItem", position: 2, name: "About", item: "https://www.pagerstudio.space/about" },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
