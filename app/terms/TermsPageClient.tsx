'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

function BrandText({ text }: { text: string }) {
  const parts = text.split(/(Pager Studio)/g);
  return (
    <>
      {parts.map((part, i) =>
        part === 'Pager Studio' ? (
          <span key={i} className="font-serif italic">Pager Studio</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function TermsPageClient() {
  return (
    <main>
      <Nav />

      <section className="section section-white px-5 sm:px-6 md:px-10" style={{ paddingTop: 'clamp(100px, 14vw, 140px)', paddingBottom: 'clamp(50px, 8vw, 80px)' }}>
        <div className="max-w-[720px] mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-sans text-[13px] font-medium text-ps-muted hover:text-ps-ink transition-colors duration-200 mb-8 group"
          >
            <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l7 7m-7-7l7-7" />
            </svg>
            Home
          </Link>
          <p className="text-caption-sm text-ps-faint mb-5">Legal</p>
          <h1 className="text-display-lg text-ps-ink mb-6">Terms of <span className="font-serif italic">Service</span></h1>
          <p className="text-body text-ps-muted mb-2">Last updated: July 29, 2026</p>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">What <span className="font-serif italic">we</span> do</h2>
              <p className="text-body text-ps-muted">
                <span className="font-serif italic">Pager Studio</span> helps healthcare practices get discovered and recommended inside AI platforms — ChatGPT, Google Gemini, Perplexity, Claude, Grok, Meta AI, and Google AI Overviews. Our services include AI visibility audits, website schema markup implementation, authority content creation, physician profile optimization, and ongoing citation monitoring.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4"><span className="font-serif italic">Free</span> audit</h2>
              <p className="text-body text-ps-muted">
                The free audit is provided at no cost with no obligation. You receive a structured report within 48 hours showing where your practice currently stands in ChatGPT and Google AI Overviews. We may follow up once to discuss results. You are under no obligation to purchase anything. We do not store payment information for free audits.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">Paid services and <span className="font-serif italic">billing</span></h2>
              <ul className="list-disc pl-5 space-y-2 text-body text-ps-muted">
                <li><strong className="text-ps-ink">Minimum engagement.</strong> All paid plans require a minimum six-month commitment. AI visibility compounds over time — shorter engagements do not give results enough time to materialize.</li>
                <li><strong className="text-ps-ink">Monthly billing.</strong> After the initial six months, billing continues month-to-month. You may cancel with 30 days notice.</li>
                <li><strong className="text-ps-ink">Annual billing.</strong> Annual plans are billed upfront at a 20% discount. Annual plans are non-refundable after 14 days of activation. We recommend reviewing this clause with a Chartered Accountant before onboarding annual clients, as India&apos;s Consumer Protection Act may override this provision.</li>
                <li><strong className="text-ps-ink">Payment methods.</strong> Payments are processed through our secure payment processor. We do not store your card details.</li>
                <li><strong className="text-ps-ink">Late payments.</strong> Services may be paused if payment is overdue by more than 14 days. We will notify you before pausing.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">What <span className="font-serif italic">you</span> get</h2>
              <p className="text-body text-ps-muted">
                Depending on your plan, you receive one or more of the following: AI visibility audit, schema markup implementation, authority content creation, physician profile optimization, FAQ content, directory citation management, and monthly citation reports. Specific deliverables are outlined in your onboarding documents and plan description.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">Results and <span className="font-serif italic">expectations</span></h2>
              <p className="text-body text-ps-muted">
                We build the technical and content foundation that AI platforms need to recommend your practice. Most clients see measurable citation lift within 60 to 90 days. However, AI platforms are independent systems — we do not control their algorithms or outputs. We cannot guarantee specific rankings, citation frequency, or patient volume. What we guarantee is that the work gets done, the foundation is built correctly, and you receive transparent monthly reporting on what is happening.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4"><span className="font-serif italic">Exclusivity</span></h2>
              <p className="text-body text-ps-muted">
                We work with one clinic per specialty per city on Authority and Dominant plans. Your city and specialty combination is exclusively yours for the duration of your engagement. If you cancel, that exclusivity is released and becomes available to other clinics. Foundation plan does not include exclusivity. Exclusivity is first come, first served.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">Your <span className="font-serif italic">responsibilities</span></h2>
              <ul className="list-disc pl-5 space-y-2 text-body text-ps-muted">
                <li>Provide accurate practice information during onboarding</li>
                <li>Grant timely access to your website CMS or backend for implementation</li>
                <li>Review and approve content within 5 business days of submission</li>
                <li>Notify us of any changes to your practice name, address, or contact details</li>
                <li>Ensure you have the authority to authorize work on behalf of your practice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4"><span className="font-serif italic">Cancellation</span></h2>
              <p className="text-body text-ps-muted">
                After your initial six-month engagement, you may cancel with 30 days written notice. Upon cancellation, we will complete any in-progress work for the current billing cycle. We do not provide partial refunds for unused portions of a billing cycle. All data and assets created for your practice will be made available to you for download within 14 days of cancellation.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">Intellectual <span className="font-serif italic">property</span></h2>
              <p className="text-body text-ps-muted">
                All content, schema markup, and assets we create for your practice become your property upon full payment. <span className="font-serif italic">Pager Studio</span> retains the right to reference anonymized, aggregated case study data for marketing purposes — but only with your prior written consent. We will never use your practice name, logo, or identifiable information in marketing without permission.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">Limitation of <span className="font-serif italic">liability</span></h2>
              <p className="text-body text-ps-muted">
                <span className="font-serif italic">Pager Studio</span> is not liable for any indirect, incidental, or consequential damages arising from your use of our services. Our total liability is limited to the amount you paid us in the 12 months preceding the claim. We are not responsible for changes in AI platform algorithms, outages, or third-party decisions that affect your visibility.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">Governing <span className="font-serif italic">law</span></h2>
              <p className="text-body text-ps-muted">
                These terms are governed by the laws of India. For clients based in India, disputes shall be resolved in the courts of Tamil Nadu, India. For international clients, disputes shall be resolved through arbitration under internationally recognized rules.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">Changes to these <span className="font-serif italic">terms</span></h2>
              <p className="text-body text-ps-muted">
                We may update these terms from time to time. Significant changes will be communicated by email. Continued use of our services after changes are posted constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">Contact <span className="font-serif italic">us</span></h2>
              <p className="text-body text-ps-muted">
                Questions about these terms? Email us at{' '}
                <a href="mailto:hello.pagerstudio@gmail.com" className="underline text-ps-ink hover:text-ps-muted transition-colors">
                  hello.pagerstudio@gmail.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
