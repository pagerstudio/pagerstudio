import type { Metadata } from "next";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "FAQ — Healthcare AEO Questions Answered",
  description:
    "Answers to common questions about Healthcare AEO, AI search visibility, and how Pager Studio helps healthcare practices get recommended by AI.",
  keywords: [
    "healthcare AEO FAQ",
    "AEO questions",
    "AI search healthcare FAQ",
    "answer engine optimization questions",
  ],
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ — Healthcare AEO Questions Answered",
    description:
      "Answers to common questions about Healthcare AEO and AI search visibility.",
    url: "https://www.pagerstudio.space/faq",
    images: ["/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ — Healthcare AEO Questions Answered",
    description:
      "Answers to common questions about Healthcare AEO and AI search visibility.",
    images: ["/og-default.png"],
  },
};

const faqs = [
  {
    question: "What is Healthcare AEO?",
    answer:
      "Healthcare AEO (Answer Engine Optimization) is the practice of structuring your online presence so that AI systems — ChatGPT, Gemini, Perplexity, Google AI Overviews — can find, understand, and recommend your practice when patients ask relevant questions.",
  },
  {
    question: "How is AEO different from SEO?",
    answer:
      "SEO focuses on ranking in Google's search results. AEO focuses on being cited in AI-generated answers. A healthcare practice can rank #1 on Google and still be invisible to AI if it hasn't structured its data for AI consumption.",
  },
  {
    question: "Why do healthcare practices need AEO?",
    answer:
      "Patients are increasingly using AI tools instead of Googling. AI gives one answer — not ten links. If you haven't structured your practice for AI consumption, AI will recommend a competitor instead.",
  },
  {
    question: "How long does AEO take to show results?",
    answer:
      "AI systems can index initial improvements in data consistency within weeks. Building full AI visibility — structured data, cross-platform consistency, authority signals — typically takes 3-6 months. The compound effect of early action means starting now provides lasting competitive advantage.",
  },
  {
    question: "What is included in the Healthcare AEO Audit?",
    answer:
      "The audit covers your current AI visibility across ChatGPT, Gemini, Perplexity, and Google AI Overviews. We analyze data consistency, structured data coverage, content extractability, and authority signals. You receive a comprehensive report with a prioritized roadmap. The audit is $5,000 fixed and delivered in 4-6 weeks.",
  },
  {
    question: "Who is the AEO Audit for?",
    answer:
      "Healthcare practices — IVF clinics, fertility centers, dental practices, cosmetic dermatology, hair restoration, LASIK, and plastic surgery. Any high-consideration specialty where patients research extensively before booking.",
  },
  {
    question: "Why is the audit $5,000?",
    answer:
      "A thorough AEO audit requires manual analysis across multiple AI platforms, directory verification, structured data review, and competitive analysis. The $5,000 fee covers all of this — and is credited toward implementation if you move forward.",
  },
  {
    question: "What happens after the audit?",
    answer:
      "You receive a comprehensive report with a prioritized roadmap. If you want to proceed, the next step is implementation — strategy, technical optimization, and ongoing monitoring. Minimum engagement is 6 months.",
  },
  {
    question: "Do you work with non-healthcare businesses?",
    answer:
      "No. Pager Studio works exclusively with healthcare practices. This specialization allows us to build deep expertise in healthcare AEO rather than spreading ourselves across industries.",
  },
  {
    question: "How do I check if my practice is visible to AI?",
    answer:
      "Ask an AI tool (ChatGPT, Gemini, or Perplexity) a question a patient would ask about your specialty in your area. If your practice isn't mentioned, AI either doesn't know you exist or doesn't trust your data enough to recommend you.",
  },
  {
    question: "Do you publish client results?",
    answer:
      "No. All engagements are covered by a formal NDA. We never publish client names, metrics, or the strategies we build for them. If you want proof, we'll run a basic audit of your practice and show you what's working and what isn't.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free discovery call. Before the call, we prepare a basic AEO snapshot of your practice. During the 30-minute call, we walk you through it live. This is a qualification call, not a sales pitch.",
  },
];

export default function FAQPage() {
  return (
    <>
      <BackButton className="max-w-[1440px]" />
      <section className="px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[90px] md:pb-[180px]">
        <GlassCard className="mx-auto max-w-[720px] px-[30px] md:px-[60px] pt-[30px] md:pt-[60px] pb-[30px] md:pb-[60px]">
          <p className="text-subhead font-medium text-text-secondary">
            {"// FAQ //"}
          </p>
          <h1 className="mt-[20px] md:mt-[30px] text-display md:text-display-xl font-semibold leading-snug tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-[20px] md:mt-[30px] text-subhead leading-prose text-text-secondary">
            Answers to common questions about Healthcare AEO, AI search
            visibility, and how Pager Studio helps healthcare practices get
            recommended by AI.
          </p>
        </GlassCard>

        <div className="mx-auto max-w-[720px] mt-[30px] space-y-[16px]">
          {faqs.map((faq) => (
            <GlassCard
              key={faq.question}
              className="px-[30px] md:px-[40px] py-[30px] md:py-[40px]"
            >
              <h2 className="text-title-2 font-semibold tracking-tight">
                {faq.question}
              </h2>
              <p className="mt-[12px] text-body leading-relaxed-body text-text-secondary">
                {faq.answer}
              </p>
            </GlassCard>
          ))}
        </div>

        <div className="mx-auto max-w-[720px] mt-[30px] text-center">
          <Button href="/book">Book a Discovery Call</Button>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
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
                { "@type": "ListItem", position: 2, name: "FAQ", item: "https://www.pagerstudio.space/faq" },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
