import type { Metadata } from "next";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import Section from "@/components/Section";
import PreferredSourceButton from "@/components/PreferredSourceButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plastic Surgery AEO — Get Recommended by AI Search | Sandeep Kumar",
  description:
    "Sandeep Kumar helps plastic surgery practices get recommended by AI search engines — ChatGPT, Gemini, Perplexity, Google AI Overviews. Healthcare AEO for plastic surgeons.",
  keywords: [
    "plastic surgery AEO",
    "plastic surgeon AI visibility",
    "plastic surgery answer engine optimization",
    "cosmetic surgery AI search",
    "plastic surgeon ChatGPT",
  ],
  alternates: {
    canonical: "/plastic-surgery-aeo",
  },
  openGraph: {
    title: "Plastic Surgery AEO — Get Recommended by AI Search",
    description: "Sandeep Kumar helps plastic surgery practices get recommended by AI search engines.",
    url: "https://www.pagerstudio.space/plastic-surgery-aeo",
    images: ["/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plastic Surgery AEO — Get Recommended by AI Search",
    description: "Sandeep Kumar helps plastic surgery practices get recommended by AI search engines.",
    images: ["/og-default.png"],
  },
};

const faqs = [
  {
    question: "Why do plastic surgery practices need AEO?",
    answer: "Patients researching plastic surgery ask AI — 'which plastic surgeon is best for rhinoplasty near me?' and 'how much does a facelift cost?' — before they Google. If your practice isn't in AI's answer, the patient books with whichever surgeon AI recommends.",
  },
  {
    question: "What's the difference between plastic surgery SEO and AEO?",
    answer: "Plastic surgery SEO gets you ranked in Google. AEO gets you recommended inside AI answers. A plastic surgery practice can rank #1 on Google and still be invisible to ChatGPT if its specialties, outcomes, and credentials aren't structured for AI.",
  },
  {
    question: "How does AEO help with plastic surgery consultation bookings?",
    answer: "When a patient asks AI about specific procedures, costs, surgeon credentials, or recovery, AEO ensures your practice's information is structured so AI cites it. This drives consultation requests from patients ready to proceed.",
  },
  {
    question: "How long does it take for a plastic surgery practice to become visible in AI?",
    answer: "Initial data improvements show up in weeks. Full AI visibility takes 3-6 months. Plastic surgery practices that start AEO now have a significant advantage because few are optimizing for AI yet.",
  },
];

const specialties = [
  { name: "IVF & Fertility", href: "/ivf-fertility-aeo", current: false },
  { name: "Cosmetic Dermatology", href: "/dermatology-aeo", current: false },
  { name: "Dental Implants", href: "/dental-implant-aeo", current: false },
  { name: "LASIK", href: "/lasik-aeo", current: false },
  { name: "Hair Restoration", href: "/hair-restoration-aeo", current: false },
  { name: "Plastic Surgery", href: "/plastic-surgery-aeo", current: true },
];

export default function PlasticSurgeryAEOPage() {
  return (
    <>
      <BackButton />
      <section className="px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[90px] md:pb-[180px]">
        <GlassCard className="mx-auto max-w-[1440px] px-[30px] md:px-[60px] pt-[30px] md:pt-[60px] pb-[30px] md:pb-[60px]">
          <p className="text-subhead font-medium text-text-secondary">
            {"// Plastic Surgery //"}
          </p>
          <h1 className="mt-[20px] md:mt-[30px] text-display md:text-display-xl font-semibold leading-snug tracking-tight">
            How Plastic Surgery Practices Get Recommended by AI Search
          </h1>
          <p className="mt-[16px] text-subhead leading-prose text-text-secondary max-w-[720px]">
            When someone asks ChatGPT &ldquo;which plastic surgeon is best for rhinoplasty near me?&rdquo; — does your practice appear? Sandeep Kumar helps plastic surgery practices get recommended by AI search engines through healthcare AEO.
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
            {"// Why Do Plastic Surgery Practices Need AEO? //"}</h2>
          <p className="mt-[16px] text-subhead leading-prose text-text-secondary">
            Plastic surgery is one of the most researched medical decisions patients make. They ask AI about specific procedures, surgeon credentials, costs, and before/after outcomes — not just which practice is nearby.
          </p>
          <p className="mt-[16px] text-subhead leading-prose text-text-secondary">
            AI gives one answer. If your practice&apos;s specialties, board certifications, and patient outcomes aren&apos;t structured for AI consumption, the patient books with whichever plastic surgeon AI recommends.
          </p>
        </Section>

        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <h2 className="text-title-1 font-semibold tracking-tight">
            {"// What Does AEO for Plastic Surgery Include? //"}</h2>
          <div className="mt-[16px] space-y-[16px] text-subhead leading-prose text-text-secondary">
            <p>
              <span className="font-semibold text-black">Structured data.</span>{" "}
              Schema markup that tells AI your procedure specialties, board certifications, and patient outcomes.
            </p>
            <p>
              <span className="font-semibold text-black">Directory consistency.</span>{" "}
              Your practice&apos;s NAP must be identical across every plastic surgery directory and healthcare listing.
            </p>
            <p>
              <span className="font-semibold text-black">Content extractability.</span>{" "}
              Your procedure pages must be structured so AI can parse specific treatments, costs, and recovery information.
            </p>
            <p>
              <span className="font-semibold text-black">Authority signals.</span>{" "}
              Board certifications, professional memberships, and third-party reviews that validate your practice.
            </p>
          </div>
        </Section>

        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <h2 className="text-title-1 font-semibold tracking-tight">
            {"// Frequently Asked Questions About Plastic Surgery AEO //"}</h2>
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
            Ready to see how AI sees your plastic surgery practice?
          </h2>
          <p className="mt-[16px] text-body leading-relaxed-body text-text-secondary">
            Start with a free discovery call. We&apos;ll show you a basic AEO snapshot of your plastic surgery practice — live, on the call.
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
              name: "Plastic Surgery AEO — Sandeep Kumar",
              description: "Healthcare AEO for plastic surgery practices. Get recommended by ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
              provider: {
                "@type": "ProfessionalService",
                "@id": "https://www.pagerstudio.space/#organization",
                name: "Pager Studio",
                url: "https://www.pagerstudio.space",
              },
              areaServed: "Worldwide",
              serviceType: ["Healthcare AEO", "Plastic Surgery AEO", "Plastic Surgery AI Visibility"],
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
                { "@type": "ListItem", position: 2, name: "Plastic Surgery AEO", item: "https://www.pagerstudio.space/plastic-surgery-aeo" },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
