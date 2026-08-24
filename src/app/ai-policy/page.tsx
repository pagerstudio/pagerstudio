import type { Metadata } from "next";
import BackButton from "@/components/BackButton";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "AI Policy",
  description:
    "Pager Studio's AI policy — how we use AI responsibly, data protections, and compliance with the EU AI Act.",
  keywords: [
    "Pager Studio AI policy",
    "AI ethics policy",
    "responsible AI",
    "EU AI Act compliance",
  ],
  alternates: {
    canonical: "/ai-policy",
  },
  openGraph: {
    title: "AI Policy | Pager Studio",
    description: "Pager Studio's AI policy — responsible AI usage and compliance.",
    url: "https://pagerstudio.vercel.app/ai-policy",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Policy | Pager Studio",
    description: "Pager Studio's AI policy — responsible AI usage and compliance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AIPolicyPage() {
  return (
    <>
      <BackButton />
      <section className="px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[60px] md:pb-24">
        <GlassCard className="mx-auto max-w-2xl px-[20px] md:px-[40px] py-[20px] md:py-[30px]">
          <h1 className="text-display font-semibold leading-tight tracking-tight">
            AI Policy
          </h1>
          <p className="mt-3 text-xs text-text-tertiary">Last updated: August 2026</p>

          <div className="mt-10 space-y-8 text-subhead leading-prose text-text-secondary">
            <section>
              <h2 className="text-lg font-semibold mb-3">Scope and Purpose</h2>
              <p>
                This policy governs how Pager Studio uses artificial
                intelligence tools and technologies in delivering AEO (Answer
                Engine Optimization) services to healthcare practices. It
                applies to all staff, contractors, and systems operated by
                Pager Studio. This policy is designed to comply with the
                EU AI Act (Regulation EU 2024/1689) and applicable data
                protection regulations.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">What We Do With AI</h2>
              <p>
                Pager Studio uses AI as a tool to help healthcare practices
                become more visible in AI-generated search results. Our
                services include:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  "Analyzing how AI platforms currently reference healthcare practices",
                  "Implementing schema markup and structured data for AI readability",
                  "Creating authority content optimized for AI citation",
                  "Monitoring AI platform outputs for changes in visibility",
                  "Optimizing physician profiles and practice information for AI discovery",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-text-tertiary font-medium shrink-0">+</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Approved AI Tools</h2>
              <p>
                We use AI tools in three tiers based on data sensitivity and
                risk:
              </p>
              <ul className="mt-3 space-y-3">
                <li>
                  <strong className="font-semibold text-black">Approved Tools</strong> — AI
                  tools cleared for use with non-sensitive business data.
                  These include large language models for content generation,
                  AI-powered analytics tools, and automated auditing tools.
                  All approved tools are vetted for data processing practices
                  and privacy compliance.
                </li>
                <li>
                  <strong className="font-semibold text-black">Restricted Tools</strong> — AI
                  tools that require approval before use. These include any
                  new AI tool not yet evaluated, tools that process client
                  data, and tools with unclear data retention policies.
                </li>
                <li>
                  <strong className="font-semibold text-black">Prohibited Tools</strong> — AI
                  tools that must never be used with client data. This
                  includes tools that train on user input, tools without
                  adequate data protection, and tools that violate healthcare
                  data regulations.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Prohibited Data</h2>
              <p>
                The following types of data must never be entered into any
                AI tool, regardless of its approved status:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  "Protected Health Information (PHI) — patient names, diagnoses, treatment records",
                  "Personally Identifiable Information (PII) — patient Social Security numbers, dates of birth, contact information",
                  "Payment data — credit card numbers, bank account details",
                  "Authentication credentials — passwords, API keys, access tokens",
                  "Source code or proprietary algorithms",
                  "Confidential business information marked as restricted",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-text-tertiary font-medium shrink-0">+</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Data Protection</h2>
              <p>
                When using AI tools in our services, we implement the
                following protections:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  "Client data is anonymized before being processed by AI tools where possible",
                  "We do not use AI tools that train on client data for their own model improvement",
                  "All AI tool usage is logged for audit purposes",
                  "Client data is never shared with AI tool providers beyond what is necessary for the service",
                  "We maintain data processing agreements with AI tool providers where required",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-text-tertiary font-medium shrink-0">+</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                Transparency and Disclosure
              </h2>
              <p>
                In accordance with the EU AI Act Article 50, we maintain
                transparency about our use of AI:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  "We disclose when content on client websites has been created or optimized with AI assistance",
                  "We inform clients about which AI tools are used in delivering our services",
                  "We clearly label AI-generated content where required by applicable regulations",
                  "We do not use AI to create deceptive or misleading content",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-text-tertiary font-medium shrink-0">+</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">AI Literacy</h2>
              <p>
                In accordance with the EU AI Act Article 4, all Pager Studio
                staff and contractors who use AI tools must complete AI
                literacy training before gaining access. This training
                covers:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  "Understanding AI capabilities and limitations",
                  "Recognizing potential biases in AI outputs",
                  "Proper data handling when using AI tools",
                  "When and how to verify AI-generated content",
                  "Reporting procedures for AI-related incidents",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-text-tertiary font-medium shrink-0">+</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-3">
                Training is refreshed annually and completion is tracked.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                Incident Reporting
              </h2>
              <p>
                If an AI tool produces harmful, biased, or inaccurate output,
                or if client data is accidentally exposed through an AI tool,
                the following process applies:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  "Report the incident to the policy owner within 24 hours",
                  "Affected client data is secured and the exposure is contained",
                  "The incident is documented and reviewed within 5 business days",
                  "Affected clients are notified if their data was compromised",
                  "Corrective measures are implemented and documented",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-text-tertiary font-medium shrink-0">+</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                Vendor Assessment
              </h2>
              <p>
                Before adopting any new AI tool, we evaluate:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  "Data training practices — does the tool train on user input?",
                  "Data retention — how long is data stored and where?",
                  "Data residency — where is data physically processed and stored?",
                  "Security certifications — SOC 2, ISO 27001, or equivalent?",
                  "Privacy policy — is it clear and compliant with GDPR?",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-text-tertiary font-medium shrink-0">+</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Enforcement</h2>
              <p>
                Violations of this policy may result in:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  "Immediate revocation of AI tool access",
                  "Written warning and mandatory retraining",
                  "Formal reprimand for repeated violations",
                  "Termination of employment or contract for severe breaches",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-text-tertiary font-medium shrink-0">+</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Review Cadence</h2>
              <p>
                This policy is reviewed at least quarterly and updated
                immediately when:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  "A major new AI tool is adopted into our workflow",
                  "Relevant AI regulations are updated (e.g., EU AI Act milestones)",
                  "An AI-related incident occurs that requires policy changes",
                  "Client feedback identifies gaps in our AI practices",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-text-tertiary font-medium shrink-0">+</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
              <p>
                Questions about this AI policy? Email us at{" "}
                <strong className="font-semibold text-black">
                  hello@pagerstudio.space
                </strong>
                .
              </p>
            </section>
          </div>
        </GlassCard>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "AI Policy | Pager Studio",
              description:
                "Pager Studio's AI policy — how we use AI responsibly, data protections, and compliance with the EU AI Act.",
              url: "https://pagerstudio.vercel.app/ai-policy",
              dateModified: "2026-08-01",
              speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: ["h1"],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://pagerstudio.vercel.app" },
                { "@type": "ListItem", position: 2, name: "AI Policy", item: "https://pagerstudio.vercel.app/ai-policy" },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
