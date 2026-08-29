import type { Metadata } from "next";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import Section from "@/components/Section";
import PreferredSourceButton from "@/components/PreferredSourceButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dermatology AEO — Get Recommended by AI Search | Sandeep Kumar",
  description:
    "Sandeep Kumar helps cosmetic dermatology practices get recommended by AI search engines — ChatGPT, Gemini, Perplexity, Google AI Overviews. Healthcare AEO for dermatologists.",
  keywords: [
    "dermatology AEO",
    "dermatology AI visibility",
    "dermatology answer engine optimization",
    "cosmetic dermatology AI search",
    "dermatologist ChatGPT",
  ],
  alternates: {
    canonical: "/dermatology-aeo",
  },
  openGraph: {
    title: "Dermatology AEO — Get Recommended by AI Search",
    description: "Sandeep Kumar helps cosmetic dermatology practices get recommended by AI search engines.",
    url: "https://www.pagerstudio.space/dermatology-aeo",
    images: ["/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dermatology AEO — Get Recommended by AI Search",
    description: "Sandeep Kumar helps cosmetic dermatology practices get recommended by AI search engines.",
    images: ["/og-default.png"],
  },
};

const faqs = [
  {
    question: "Why do dermatologists need AEO?",
    answer: "Patients researching Botox, fillers, or laser treatments now ask AI — 'which dermatologist is best for Botox near me?' — instead of Googling. If your practice isn't in AI's answer, the patient books with whoever AI recommends.",
  },
  {
    question: "What's the difference between dermatology SEO and AEO?",
    answer: "Dermatology SEO gets you ranked in Google's search results. AEO gets you recommended inside AI answers. A dermatology practice can rank #1 on Google and still be invisible to ChatGPT if its data isn't structured for AI.",
  },
  {
    question: "How does AEO help with cosmetic procedure patients?",
    answer: "Cosmetic patients research extensively before booking. They ask AI about specific procedures, costs, and provider credentials. AEO ensures your practice's information is structured so AI can cite it when patients ask these questions.",
  },
  {
    question: "How long does it take for a dermatology practice to become visible in AI?",
    answer: "Initial improvements in data consistency can show up in weeks. Full AI visibility — structured data, directory presence, authority signals — takes 3-6 months. Few dermatology practices are doing AEO yet, so early movers have an advantage.",
  },
];

const specialties = [
  { name: "IVF & Fertility", href: "/ivf-fertility-aeo", current: false },
  { name: "Cosmetic Dermatology", href: "/dermatology-aeo", current: true },
  { name: "Dental Implants", href: "/dental-implant-aeo", current: false },
  { name: "LASIK", href: "/lasik-aeo", current: false },
  { name: "Hair Restoration", href: "/hair-restoration-aeo", current: false },
  { name: "Plastic Surgery", href: "/plastic-surgery-aeo", current: false },
];

export default function DermatologyAEOPage() {
  return (
    <>
      <BackButton />
      <section className="px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[90px] md:pb-[180px]">
        <GlassCard className="mx-auto max-w-[1440px] px-[30px] md:px-[60px] pt-[30px] md:pt-[60px] pb-[30px] md:pb-[60px]">
          <p className="text-subhead font-medium text-text-secondary">
            {"// Cosmetic Dermatology //"}
          </p>
          <h1 className="mt-[20px] md:mt-[30px] text-display md:text-display-xl font-semibold leading-snug tracking-tight">
            How Dermatology Practices Get Recommended by AI Search
          </h1>
          <p className="mt-[16px] text-subhead leading-prose text-text-secondary max-w-[720px]">
            When someone asks ChatGPT &ldquo;which dermatologist is best for Botox near me?&rdquo; — does your practice appear? Sandeep Kumar helps cosmetic dermatology practices get recommended by AI search engines through healthcare AEO.
          </p>
          <div className="mt-[30px]">
            <Button href="/book">Book a Discovery Call</Button>
          </div>
        </GlassCard>

        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <h2 className="text-title-1 font-semibold tracking-tight">
            {"// Which Specialties Does Pager Studio Serve? //"}</h2>
          <div className="mt-[16px] flex flex-wrap gap-[12px]">
            {specialties.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className={`px-[16px] py-[8px] rounded-full border text-footnote font-medium transition-colors ${
                  s.current
                    ? "bg-black text-white border-black"
                    : "border-border-subtle text-text-secondary hover:border-black hover:text-black"
                }`}
              >
                {s.name}
              </Link>
            ))}
          </div>
        </Section>

        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <h2 className="text-title-1 font-semibold tracking-tight">
            {"// Why Do Dermatologists Need AEO? //"}</h2>
          <p className="mt-[16px] text-subhead leading-prose text-text-secondary">
            Cosmetic dermatology is one of the most competitive specialties online. Patients researching Botox, fillers, laser treatments, or chemical peels ask AI for specific recommendations — not just rankings.
          </p>
          <p className="mt-[16px] text-subhead leading-prose text-text-secondary">
            AI gives one answer. If your practice&apos;s credentials, specialties, and patient outcomes aren&apos;t structured for AI consumption, the patient books with whichever dermatologist AI recommends.
          </p>
        </Section>

        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <h2 className="text-title-1 font-semibold tracking-tight">
            {"// What Does AEO for Dermatology Include? //"}</h2>
          <div className="mt-[16px] space-y-[16px] text-subhead leading-prose text-text-secondary">
            <p>
              <span className="font-semibold text-black">Structured data.</span>{" "}
              Schema markup that tells AI your specialties, board certifications, procedures offered, and geographic service area.
            </p>
            <p>
              <span className="font-semibold text-black">Directory consistency.</span>{" "}
              Your practice&apos;s NAP must be identical across healthgrades, zocdoc, realself, and every other directory.
            </p>
            <p>
              <span className="font-semibold text-black">Content extractability.</span>{" "}
              Your procedure pages must be structured so AI can parse them — specific treatments, pricing ranges, recovery times.
            </p>
            <p>
              <span className="font-semibold text-black">Authority signals.</span>{" "}
              Board certifications, professional memberships, and third-party reviews that validate your practice.
            </p>
          </div>
        </Section>

        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <h2 className="text-title-1 font-semibold tracking-tight">
            {"// Frequently Asked Questions About Dermatology AEO //"}</h2>
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
            Ready to see how AI sees your dermatology practice?
          </h2>
          <p className="mt-[16px] text-body leading-relaxed-body text-text-secondary">
            Start with a free discovery call. We&apos;ll show you a basic AEO snapshot of your practice — live, on the call.
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
              name: "Dermatology AEO — Sandeep Kumar",
              description: "Healthcare AEO for cosmetic dermatology practices. Get recommended by ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
              provider: {
                "@type": "ProfessionalService",
                "@id": "https://www.pagerstudio.space/#organization",
                name: "Pager Studio",
                url: "https://www.pagerstudio.space",
              },
              areaServed: "Worldwide",
              serviceType: ["Healthcare AEO", "Dermatology AEO", "Dermatology AI Visibility"],
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
                { "@type": "ListItem", position: 2, name: "Dermatology AEO", item: "https://www.pagerstudio.space/dermatology-aeo" },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
