'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function DisclaimerPageClient() {
  return (
    <main>
      <Nav />

      <section className="section section-white px-5 sm:px-6 md:px-10" style={{ paddingTop: 'clamp(100px, 14vw, 140px)', paddingBottom: 'clamp(50px, 8vw, 80px)' }}>
        <div className="max-w-[720px] mx-auto">
          <p className="text-caption-sm text-ps-faint mb-5">Legal</p>
          <h1 className="text-display-lg text-ps-ink mb-6"><span className="font-serif italic">Disclaimer</span></h1>
          <p className="text-body text-ps-muted mb-2">Last updated: July 29, 2026</p>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">AI visibility results are not <span className="font-serif italic">guaranteed</span></h2>
              <p className="text-body text-ps-muted">
                Pager Studio helps healthcare practices build the technical and content foundation needed to appear in AI-generated answers. However, AI platforms — including ChatGPT, Google Gemini, Perplexity, Claude, Grok, Meta AI, and Google AI Overviews — are independent systems with their own algorithms, data sources, and decision-making processes. We do not control these platforms and cannot guarantee that your practice will be cited, recommended, or ranked in any specific way.
              </p>
              <p className="text-body text-ps-muted mt-3">
                Results vary based on your specialty, location, competition, starting baseline, and the current state of AI platform algorithms. Most practices see measurable improvement within 60 to 90 days, but timelines are not guaranteed.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">Healthcare content is for <span className="font-serif italic">informational</span> purposes</h2>
              <p className="text-body text-ps-muted">
                Any healthcare-related content we create — including website copy, FAQ answers, authority articles, and provider profiles — is written for marketing and visibility purposes. It is not medical advice. Patients should always consult qualified healthcare professionals for medical decisions. Pager Studio is not a medical practice and does not provide healthcare services.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">Audit reports reflect a <span className="font-serif italic">point in time</span></h2>
              <p className="text-body text-ps-muted">
                Your free audit or paid audit report shows where your practice stands at the time the audit was conducted. AI platforms update their outputs frequently. Your visibility may change between audits due to factors outside our control, including platform updates, competitor actions, or changes to your website. Audit reports are a snapshot — not a permanent guarantee.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">No <span className="font-serif italic">patient volume</span> guarantees</h2>
              <p className="text-body text-ps-muted">
                Increased AI visibility does not automatically translate to increased patient appointments or revenue. AI citations drive awareness and consideration — but patients make their own decisions based on many factors including reviews, pricing, location, and personal preference. Pager Studio does not guarantee any specific number of patients, appointments, or revenue.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4"><span className="font-serif italic">Third-party</span> platforms</h2>
              <p className="text-body text-ps-muted">
                Our services involve interaction with third-party platforms including AI services, directories, and analytics tools. These platforms operate under their own terms of service and privacy policies. Pager Studio is not responsible for changes in their algorithms, policies, or availability that may affect your visibility.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4"><span className="font-serif italic">Competitor</span> actions</h2>
              <p className="text-body text-ps-muted">
                AI visibility is a competitive landscape. Even after we build a strong foundation for your practice, competitors may invest in their own AI visibility efforts. We do not guarantee that you will always outperform competitors — only that we will build and maintain the best possible foundation for your practice.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">Testimonials and <span className="font-serif italic">examples</span></h2>
              <p className="text-body text-ps-muted">
                Any examples, case studies, or testimonials on this website reflect the experiences of specific clients and should not be taken as a guarantee of results for your practice. Individual outcomes depend on many variables including specialty, market, competition, and implementation timeline.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4"><span className="font-serif italic">External</span> links</h2>
              <p className="text-body text-ps-muted">
                Our website may contain links to external sites. We are not responsible for the content, accuracy, or privacy practices of third-party sites. Linking to another site does not constitute endorsement.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ps-ink mb-4">Contact <span className="font-serif italic">us</span></h2>
              <p className="text-body text-ps-muted">
                Questions about this disclaimer? Email us at{' '}
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
