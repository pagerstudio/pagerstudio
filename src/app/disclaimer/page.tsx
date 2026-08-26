import type { Metadata } from "next";
import BackButton from "@/components/BackButton";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Pager Studio's disclaimer — no guaranteed rankings, not medical advice, third-party platform dependency.",
  keywords: [
    "Pager Studio disclaimer",
    "AEO disclaimer",
    "healthcare marketing disclaimer",
  ],
  alternates: {
    canonical: "/disclaimer",
  },
  openGraph: {
    title: "Disclaimer",
    description: "Pager Studio's disclaimer.",
    url: "https://pagerstudio.space/disclaimer",
    images: ["/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer",
    description: "Pager Studio's disclaimer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <BackButton />
      <section className="px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[60px] md:pb-24">
        <GlassCard className="mx-auto max-w-2xl px-[20px] md:px-[40px] py-[20px] md:py-[30px]">
          <h1 className="text-display font-semibold leading-tight tracking-tight">
            Disclaimer
          </h1>
          <p className="mt-3 text-xs text-text-tertiary">Last updated: August 2026</p>

          <div className="mt-10 space-y-8 text-subhead leading-prose text-text-secondary">
            <section>
              <h2 className="text-lg font-semibold mb-3">
                AI Visibility Results Are Not Guaranteed
              </h2>
              <p>
                Pager Studio helps healthcare practices build the technical
                and content foundation needed to appear in AI-generated
                answers. However, AI platforms — including ChatGPT, Google
                Gemini, Perplexity, Claude, Grok, Meta AI, and Google AI
                Overviews — are independent systems with their own
                algorithms, data sources, and decision-making processes. We
                do not control these platforms and cannot guarantee that your
                practice will be cited, recommended, or ranked in any
                specific way.
              </p>
              <p className="mt-3">
                Results vary based on your specialty, location, competition,
                starting baseline, and the current state of AI platform
                algorithms. Most practices see measurable improvement within
                60 to 90 days, but timelines are not guaranteed.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                No Guaranteed Rankings or Results
              </h2>
              <p>
                AI visibility outcomes depend on factors outside Pager
                Studio&apos;s control, including how AI platforms (Google,
                OpenAI, Anthropic, and others) index, process, and surface
                information. Pager Studio does not guarantee specific
                rankings, mentions, or placement in AI search outputs. Our
                services improve the likelihood of being found — they do not
                ensure it.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                No Patient Volume Guarantees
              </h2>
              <p>
                Increased AI visibility does not automatically translate to
                increased patient appointments or revenue. AI citations drive
                awareness and consideration — but patients make their own
                decisions based on many factors including reviews, pricing,
                location, and personal preference. Pager Studio does not
                guarantee any specific number of patients, appointments, or
                revenue.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                Audit Reports Reflect a Point in Time
              </h2>
              <p>
                Your free audit or paid audit report shows where your
                practice stands at the time the audit was conducted. AI
                platforms update their outputs frequently. Your visibility
                may change between audits due to factors outside our control,
                including platform updates, competitor actions, or changes to
                your website. Audit reports are a snapshot — not a permanent
                guarantee.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                Competitor Actions
              </h2>
              <p>
                AI visibility is a competitive landscape. Even after we build
                a strong foundation for your practice, competitors may invest
                in their own AI visibility efforts. We do not guarantee that
                you will always outperform competitors — only that we will
                build and maintain the best possible foundation for your
                practice.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                Not Medical, Legal, or Financial Advice
              </h2>
              <p>
                Pager Studio provides marketing and AI visibility strategy
                services only. Nothing on this website or in our engagements
                constitutes medical, legal, or financial advice. Healthcare
                practices should consult qualified professionals for
                clinical, regulatory, or legal decisions.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                Third-Party Platform Dependency
              </h2>
              <p>
                AI search engines and platforms are operated by third parties
                that can change how they index, rank, and present information
                at any time and without notice. Pager Studio monitors these
                platforms and adapts strategies accordingly, but cannot
                control or guarantee their behavior.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                Testimonials and Examples
              </h2>
              <p>
                Any examples, case studies, or testimonials on this website
                reflect the experiences of specific clients and should not be
                taken as a guarantee of results for your practice. Individual
                outcomes depend on many variables including specialty, market,
                competition, and implementation timeline.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                External Links
              </h2>
              <p>
                Our website may contain links to external sites. We are not
                responsible for the content, accuracy, or privacy practices
                of third-party sites. Linking to another site does not
                constitute endorsement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Content Accuracy</h2>
              <p>
                The information on this website is provided for general
                informational purposes. While we strive for accuracy, Pager
                Studio makes no warranties about the completeness or
                reliability of any content published on this site or in
                client-facing materials.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                AI-Generated Content Disclosure
              </h2>
              <p>
                In accordance with the EU AI Act Article 50, Pager Studio
                discloses that content created for client websites —
                including website copy, FAQ answers, authority articles, and
                provider profiles — may be created or optimized with the
                assistance of AI tools. All AI-assisted content is reviewed
                and edited by human team members before delivery.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
              <p>
                Questions about this disclaimer? Email us at{" "}
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
              name: "Disclaimer | Pager Studio",
              description: "Pager Studio's disclaimer — no guaranteed rankings, not medical advice, third-party platform dependency.",
              url: "https://pagerstudio.space/disclaimer",
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
                { "@type": "ListItem", position: 1, name: "Home", item: "https://pagerstudio.space" },
                { "@type": "ListItem", position: 2, name: "Disclaimer", item: "https://pagerstudio.space/disclaimer" },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
