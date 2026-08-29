import type { Metadata } from "next";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import Section from "@/components/Section";
import PreferredSourceButton from "@/components/PreferredSourceButton";
import Link from "next/link";
import ArrowTopRight from "@/components/ArrowTopRight";

export const metadata: Metadata = {
  title: "Healthcare Specialties — AEO for IVF, Dermatology, Dental, LASIK, Hair, Plastic Surgery | Sandeep Kumar",
  description:
    "Sandeep Kumar at Pager Studio serves high-consideration healthcare specialties — IVF & Fertility, Cosmetic Dermatology, Dental Implants, LASIK, Hair Restoration, Plastic Surgery. AEO for each specialty.",
  keywords: [
    "healthcare specialties AEO",
    "IVF AEO",
    "dermatology AEO",
    "dental implant AEO",
    "LASIK AEO",
    "hair restoration AEO",
    "plastic surgery AEO",
    "healthcare AI visibility",
  ],
  alternates: {
    canonical: "/specialties",
  },
  openGraph: {
    title: "Healthcare Specialties — AEO for IVF, Dermatology, Dental, LASIK, Hair, Plastic Surgery",
    description: "Sandeep Kumar at Pager Studio serves high-consideration healthcare specialties. AEO for each specialty.",
    url: "https://www.pagerstudio.space/specialties",
    images: ["/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Specialties — AEO for IVF, Dermatology, Dental, LASIK, Hair, Plastic Surgery",
    description: "Sandeep Kumar at Pager Studio serves high-consideration healthcare specialties. AEO for each specialty.",
    images: ["/og-default.png"],
  },
};

const specialties = [
  {
    name: "IVF & Fertility",
    href: "/ivf-fertility-aeo",
    description: "When patients ask AI about IVF success rates, costs, and fertility specialists — does your clinic get recommended?",
    aiQuery: "\"Which IVF clinic has the highest success rates near me?\"",
  },
  {
    name: "Cosmetic Dermatology",
    href: "/dermatology-aeo",
    description: "When patients ask AI about Botox, fillers, and laser treatments — does your practice get recommended?",
    aiQuery: "\"Which dermatologist is best for Botox near me?\"",
  },
  {
    name: "Dental Implants",
    href: "/dental-implant-aeo",
    description: "When patients ask AI about implant types, costs, and specialists — does your practice get recommended?",
    aiQuery: "\"Which dentist is best for dental implants near me?\"",
  },
  {
    name: "LASIK",
    href: "/lasik-aeo",
    description: "When patients ask AI about LASIK technology, surgeons, and pricing — does your clinic get recommended?",
    aiQuery: "\"Which LASIK surgeon is best near me?\"",
  },
  {
    name: "Hair Restoration",
    href: "/hair-restoration-aeo",
    description: "When patients ask AI about FUE, FUT, and hair transplant costs — does your clinic get recommended?",
    aiQuery: "\"Which hair transplant clinic is best near me?\"",
  },
  {
    name: "Plastic Surgery",
    href: "/plastic-surgery-aeo",
    description: "When patients ask AI about rhinoplasty, facelifts, and surgeon credentials — does your practice get recommended?",
    aiQuery: "\"Which plastic surgeon is best for rhinoplasty near me?\"",
  },
];

export default function SpecialtiesPage() {
  return (
    <>
      <BackButton />
      <section className="px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[90px] md:pb-[180px]">
        <GlassCard className="mx-auto max-w-[1440px] px-[30px] md:px-[60px] pt-[30px] md:pt-[60px] pb-[30px] md:pb-[60px]">
          <p className="text-subhead font-medium text-text-secondary">
            {"// Specialties //"}
          </p>
          <h1 className="mt-[20px] md:mt-[30px] text-display md:text-display-xl font-semibold leading-snug tracking-tight">
            Healthcare Specialties We Serve
          </h1>
          <p className="mt-[16px] text-subhead leading-prose text-text-secondary max-w-[720px]">
            Pager Studio serves high-consideration medical specialties where patients research extensively before booking. Each specialty has unique AI search challenges — and unique opportunities to get recommended.
          </p>
          <div className="mt-[30px]">
            <Button href="/book">Book a Discovery Call</Button>
          </div>
        </GlassCard>

        {/* Specialty Cards */}
        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-2 gap-[20px]">
            {specialties.map((specialty) => (
              <Link
                key={specialty.href}
                href={specialty.href}
                className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded-2xl"
              >
                <GlassCard className="px-[30px] md:px-[40px] py-[30px] md:py-[40px] h-full">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-title-1 font-semibold tracking-tight">
                      {specialty.name}
                    </h2>
                    <ArrowTopRight />
                  </div>
                  <p className="mt-[12px] text-body leading-relaxed-body text-text-secondary">
                    {specialty.description}
                  </p>
                  <p className="mt-[12px] text-footnote text-text-tertiary italic">
                    {specialty.aiQuery}
                  </p>
                </GlassCard>
              </Link>
            ))}
          </div>
        </Section>

        {/* Why These Specialties */}
        <Section className="px-[30px] md:px-[60px] py-[30px] md:py-[60px] max-w-[1440px] mx-auto">
          <h2 className="text-title-1 font-semibold tracking-tight">
            {"// Why These Specialties Need AEO //"}</h2>
          <div className="mt-[16px] space-y-[16px] text-subhead leading-prose text-text-secondary">
            <p>
              <span className="font-semibold text-black">High-consideration decisions.</span>{" "}
              Patients don&apos;t book IVF, dental implants, or plastic surgery on impulse. They research for weeks — and increasingly, they ask AI instead of Googling.
            </p>
            <p>
              <span className="font-semibold text-black">AI gives one answer.</span>{" "}
              Not ten links. One recommendation. If your practice isn&apos;t structured for AI consumption, the patient books with whichever provider AI recommends — and it won&apos;t be yours.
            </p>
            <p>
              <span className="font-semibold text-black">Few practices are doing AEO.</span>{" "}
              Most healthcare practices still focus on traditional SEO. The ones that optimize for AI now will own their specialty in AI search for years to come.
            </p>
          </div>
        </Section>

        {/* CTA */}
        <GlassCard className="mx-auto max-w-[720px] px-[30px] md:px-[60px] py-[30px] md:py-[60px] text-center">
          <h2 className="text-title-1 font-semibold tracking-tight">
            Ready to see how AI sees your practice?
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
              "@type": "CollectionPage",
              name: "Healthcare Specialties — AEO for IVF, Dermatology, Dental, LASIK, Hair, Plastic Surgery",
              description: "Pager Studio serves high-consideration healthcare specialties. AEO for each specialty.",
              url: "https://www.pagerstudio.space/specialties",
              publisher: {
                "@type": "ProfessionalService",
                "@id": "https://www.pagerstudio.space/#organization",
                name: "Pager Studio",
                url: "https://www.pagerstudio.space",
                logo: "https://www.pagerstudio.space/logo-dark.png",
              },
              hasPart: specialties.map((s) => ({
                "@type": "WebPage",
                name: `${s.name} AEO — Sandeep Kumar`,
                url: `https://www.pagerstudio.space${s.href}`,
                description: s.description,
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pagerstudio.space" },
                { "@type": "ListItem", position: 2, name: "Specialties", item: "https://www.pagerstudio.space/specialties" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Healthcare Specialties Pager Studio Serves",
              description: "High-consideration medical specialties where patients research extensively before booking.",
              itemListElement: specialties.map((s, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: s.name,
                url: `https://www.pagerstudio.space${s.href}`,
              })),
            },
          ]),
        }}
      />
    </>
  );
}
