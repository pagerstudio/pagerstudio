import type { Metadata } from "next";
import BackButton from "@/components/BackButton";
import CalEmbed from "@/components/CalEmbed";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "Book a Discovery Call",
  description:
    "Schedule a discovery call with Pager Studio to discuss your practice's AI visibility and AEO strategy. Free consultation for healthcare practices.",
  keywords: [
    "book AEO consultation",
    "healthcare AI visibility call",
    "AEO discovery call",
    "book healthcare marketing call",
  ],
  alternates: {
    canonical: "/book",
  },
  openGraph: {
    title: "Book a Discovery Call",
    description: "Schedule a discovery call to discuss your practice's AI visibility.",
    url: "https://www.pagerstudio.space/book",
    images: ["/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Discovery Call",
    description: "Schedule a discovery call to discuss your practice's AI visibility.",
  },
};

const qualifyingPoints = [
  {
    label: "What Happens on the Call",
    text: "Before the call, we prepare a free basic AEO snapshot of your practice — no cost, no obligation. During the 30-minute call, we walk you through it live. This is a qualification call, not a sales pitch.",
  },
  {
    label: "Pricing",
    text: "This call and the snapshot are free. If it's a fit, the next step is our End-to-End In-Depth AEO Audit — a separate, deeper engagement at $5,000 fixed.",
  },
];

export default function BookPage() {
  return (
    <>
      <BackButton className="max-w-[1440px]" />
      <section className="px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[90px] md:pb-[180px]">
        <GlassCard className="mx-auto max-w-[1440px] px-[30px] md:px-[60px] pt-[30px] md:pt-[60px] pb-[20px] md:pb-[30px]">
          <div className="flex flex-col md:flex-row md:items-start gap-[30px]">
            <div className="flex-1">
              <h1 className="text-display md:text-display-xl font-semibold leading-tight tracking-tight">
                Book a Discovery Call
              </h1>
              <p className="mt-[20px] text-subhead leading-relaxed text-text-secondary">
                Before you book, please review a few things upfront:
              </p>
              <ul className="mt-[20px] space-y-[20px] text-left text-callout leading-relaxed">
                {qualifyingPoints.map((point) => (
                  <li key={point.label} className="flex gap-3 text-text-secondary">
                    <span className="text-text-tertiary font-medium shrink-0">+</span>
                    <p>
                      <span className="font-semibold text-black">{point.label}</span>: {point.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full min-w-0">
              <CalEmbed />
            </div>
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
              name: "Pager Studio Discovery Call",
              description:
                "Free discovery call to discuss your practice's AI visibility and AEO strategy.",
              provider: {
                "@type": "ProfessionalService",
                "@id": "https://www.pagerstudio.space/#organization",
                name: "Pager Studio",
                url: "https://www.pagerstudio.space",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Free discovery call",
                availability: "https://schema.org/InStock",
              },
              areaServed: "Worldwide",
              serviceType: "AEO Consultation",
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pagerstudio.space" },
                { "@type": "ListItem", position: 2, name: "Book a Call", item: "https://www.pagerstudio.space/book" },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
