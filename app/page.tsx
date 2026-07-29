import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import RevealParagraph from '@/components/RevealParagraph';
import HowWeWork from '@/components/HowWeWork';
import WhoWeWorkWith from '@/components/WhoWeWorkWith';
import Faq from '@/components/Faq';
import ShockingStats from '@/components/ShockingStats';
import StrategyCall from '@/components/StrategyCall';
import WhyPagerStudio from '@/components/WhyPagerStudio';
import PlatformPills from '@/components/PlatformPills';
import FooterCta from '@/components/FooterCta';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import { faqs } from '@/data/faq';

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.answer,
    },
  })),
};

export default function Page() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <Nav />
      <Hero />
      <RevealParagraph />
      <FadeIn blur={10} y={50} amount={0.05}>
        <ShockingStats />
      </FadeIn>
      <FadeIn blur={8} y={40} delay={0.1}>
        <StrategyCall />
      </FadeIn>
      <HowWeWork />
      <FadeIn blur={8} y={40} amount={0.05}>
        <WhoWeWorkWith />
      </FadeIn>
      <FadeIn blur={10} y={50} amount={0.05}>
        <WhyPagerStudio />
      </FadeIn>
      <FadeIn blur={8} y={40}>
        <PlatformPills />
      </FadeIn>
      <FadeIn blur={8} y={40} amount={0.05}>
        <Faq />
      </FadeIn>
      <FadeIn blur={10} y={50} amount={0.05}>
        <FooterCta />
      </FadeIn>
      <Footer />
    </main>
  );
}
