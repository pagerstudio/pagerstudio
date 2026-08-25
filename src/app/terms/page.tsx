import type { Metadata } from "next";
import BackButton from "@/components/BackButton";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Pager Studio's terms and conditions — engagement terms, payment, and legal details for AEO services.",
  keywords: [
    "Pager Studio terms",
    "AEO engagement terms",
    "healthcare marketing terms",
  ],
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms & Conditions | Pager Studio",
    description: "Pager Studio's terms and conditions.",
    url: "https://pagerstudio.space/terms",
    images: ["/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Pager Studio",
    description: "Pager Studio's terms and conditions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <>
      <BackButton />
      <section className="px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[60px] md:pb-24">
        <GlassCard className="mx-auto max-w-2xl px-[20px] md:px-[40px] py-[20px] md:py-[30px]">
          <h1 className="text-display font-semibold leading-tight tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-xs text-text-tertiary">Last updated: August 2026</p>

          <div className="mt-10 space-y-8 text-subhead leading-prose text-text-secondary">
            <section>
              <h2 className="text-lg font-semibold mb-3">What We Do</h2>
              <p>
                <strong className="font-semibold text-black">Pager Studio</strong> helps
                healthcare practices get discovered and recommended inside AI
                platforms — ChatGPT, Google Gemini, Perplexity, Claude, Grok,
                Meta AI, and Google AI Overviews. Our services include AI
                visibility audits, website schema markup implementation,
                authority content creation, physician profile optimization,
                and ongoing citation monitoring.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Free Audit</h2>
              <p>
                The free audit is provided at no cost with no obligation. You
                receive a structured report within 48 hours showing where your
                practice currently stands in ChatGPT and Google AI Overviews.
                We may follow up once to discuss results. You are under no
                obligation to purchase anything. We do not store payment
                information for free audits.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Engagement Terms</h2>
              <p>
                All paid engagements with Pager Studio begin with a paid AEO
                audit. The audit fee is{" "}
                <strong className="font-semibold text-black">$5,000, fixed</strong>,
                and must be paid in full before work begins. The audit fee is
                credited toward implementation and monitoring if the client
                proceeds with a full engagement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Minimum Engagement Term</h2>
              <p>
                A minimum engagement of six (6) months is required for
                implementation and monitoring services. Shorter engagements
                are not offered, as a strong AI visibility foundation requires
                sustained effort.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Payment Terms</h2>
              <ul className="space-y-2">
                <li className="flex gap-3">
                  <span className="text-text-tertiary font-medium shrink-0">+</span>
                  <p>
                    <strong className="font-semibold text-black">Monthly billing.</strong>{" "}
                    After the initial six months, billing continues
                    month-to-month. You may cancel with 30 days notice.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-tertiary font-medium shrink-0">+</span>
                  <p>
                    <strong className="font-semibold text-black">Annual billing.</strong>{" "}
                    Annual plans are billed upfront at a 20% discount. Annual
                    plans are non-refundable after 14 days of activation.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-tertiary font-medium shrink-0">+</span>
                  <p>
                    <strong className="font-semibold text-black">Payment methods.</strong>{" "}
                    Payments are processed through our secure payment processor.
                    We do not store your card details.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-tertiary font-medium shrink-0">+</span>
                  <p>
                    <strong className="font-semibold text-black">Late payments.</strong>{" "}
                    Services may be paused if payment is overdue by more than
                    14 days. We will notify you before pausing.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-tertiary font-medium shrink-0">+</span>
                  <p>
                    All pricing adjustments require written client sign-off
                    before proceeding. Payment terms are Net 30 unless
                    otherwise agreed in writing.
                  </p>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Audit Fee Credit</h2>
              <p>
                If the client proceeds to a full engagement after the audit,
                the $5,000 audit fee is credited toward the first month of
                implementation. If the client does not proceed, the audit fee
                is non-refundable, as the diagnostic work is delivered in full
                regardless.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">What You Get</h2>
              <p>
                Depending on your plan, you receive one or more of the
                following: AI visibility audit, schema markup implementation,
                authority content creation, physician profile optimization,
                FAQ content, directory citation management, and monthly
                citation reports. Specific deliverables are outlined in your
                onboarding documents and plan description.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Results and Expectations</h2>
              <p>
                We build the technical and content foundation that AI
                platforms need to recommend your practice. Most clients see
                measurable citation lift within 60 to 90 days. However, AI
                platforms are independent systems — we do not control their
                algorithms or outputs. We cannot guarantee specific rankings,
                citation frequency, or patient volume. What we guarantee is
                that the work gets done, the foundation is built correctly,
                and you receive transparent monthly reporting.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Exclusivity</h2>
              <p>
                We work with one clinic per specialty per city on Authority
                and Dominant plans. Your city and specialty combination is
                exclusively yours for the duration of your engagement. If you
                cancel, that exclusivity is released and becomes available to
                other clinics. Foundation plan does not include exclusivity.
                Exclusivity is first come, first served.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Your Responsibilities</h2>
              <ul className="space-y-2">
                {[
                  "Provide accurate practice information during onboarding",
                  "Grant timely access to your website CMS or backend for implementation",
                  "Review and approve content within 5 business days of submission",
                  "Notify us of any changes to your practice name, address, or contact details",
                  "Ensure you have the authority to authorize work on behalf of your practice",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-text-tertiary font-medium shrink-0">+</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Cancellation</h2>
              <p>
                After your initial six-month engagement, you may cancel with
                30 days written notice. Upon cancellation, we will complete
                any in-progress work for the current billing cycle. We do not
                provide partial refunds for unused portions of a billing
                cycle. All data and assets created for your practice will be
                made available to you for download within 14 days of
                cancellation.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Termination for Cause</h2>
              <p>
                Either party may terminate this agreement immediately by
                written notice if the other party materially breaches any
                provision of these terms and fails to cure such breach within
                14 days of receiving written notice. Material breaches include
                but are not limited to: non-payment, unauthorized disclosure
                of confidential information, and failure to perform services
                as agreed.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Intellectual Property</h2>
              <p>
                All content, schema markup, and assets we create for your
                practice become your property upon full payment. Pager Studio
                retains the right to reference anonymized, aggregated case
                study data for marketing purposes — but only with your prior
                written consent. We will never use your practice name, logo,
                or identifiable information in marketing without permission.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Confidentiality</h2>
              <p>
                Both parties agree to maintain the confidentiality of all
                non-public information received during the engagement. This
                includes practice data, strategies, financial information,
                and any information marked as confidential. Neither party
                shall disclose such information to third parties without
                prior written consent, except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Limitation of Liability</h2>
              <p>
                Pager Studio is not liable for any indirect, incidental, or
                consequential damages arising from your use of our services.
                Our total liability is limited to the amount you paid us in
                the 12 months preceding the claim. We are not responsible for
                changes in AI platform algorithms, outages, or third-party
                decisions that affect your visibility.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Force Majeure</h2>
              <p>
                Neither party shall be liable for any delay or failure to
                perform resulting from causes beyond its reasonable control,
                including but not limited to acts of God, natural disasters,
                pandemics, government actions, regulatory changes, internet
                outages, or third-party platform failures.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Indemnification</h2>
              <p>
                Each party agrees to indemnify and hold harmless the other
                party from any claims, damages, or expenses arising from the
                indemnifying party&apos;s breach of these terms or violation of
                applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Severability</h2>
              <p>
                If any provision of these terms is found to be invalid or
                unenforceable, the remaining provisions shall remain in full
                force and effect. The invalid provision shall be modified to
                the minimum extent necessary to make it valid and enforceable.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Entire Agreement</h2>
              <p>
                These terms, together with any onboarding documents and
                signed agreements, constitute the entire agreement between
                you and Pager Studio regarding the services. Any prior
                understandings or agreements are superseded by these terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Assignment</h2>
              <p>
                Neither party may assign its rights or obligations under these
                terms without the prior written consent of the other party,
                except that Pager Studio may assign its rights to a successor
                in connection with a merger, acquisition, or sale of
                substantially all of its assets.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Governing Law</h2>
              <p>
                These terms are governed by the laws of India. Any disputes
                shall be subject to the exclusive jurisdiction of the courts
                in Coimbatore, Tamil Nadu, India. For international clients,
                disputes shall be resolved through arbitration under
                internationally recognized rules.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Changes to These Terms</h2>
              <p>
                We may update these terms from time to time. Significant
                changes will be communicated by email. Continued use of our
                services after changes are posted constitutes acceptance of
                the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
              <p>
                Questions about these terms? Email us at{" "}
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
              name: "Terms & Conditions | Pager Studio",
              description: "Pager Studio's terms and conditions — engagement terms, payment, and legal details.",
              url: "https://pagerstudio.space/terms",
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
                { "@type": "ListItem", position: 2, name: "Terms & Conditions", item: "https://pagerstudio.space/terms" },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
