import type { Metadata } from 'next';
import Script from 'next/script';
import FaqPageClient from './FaqPageClient';

export const metadata: Metadata = {
  title: 'FAQ — AI Visibility for Healthcare',
  description:
    'Straight answers about AI visibility, our process, and what working with Pager Studio actually looks like.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'FAQ | Pager Studio',
    description:
      'Straight answers about AI visibility, our process, and what working with Pager Studio actually looks like.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get my clinic recommended by ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ChatGPT recommends clinics that have strong structured data on their website, consistent directory presence, named physician credentials, and authoritative content that directly answers patient questions. To get recommended, your practice needs medical schema markup, FAQ content written the way patients ask questions, and citations from trusted health directories.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is my clinic not showing up in Google AI Overviews?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google AI Overviews pulls from pages it considers authoritative, well-structured, and directly relevant to the search query. If your clinic is missing schema markup, lacks depth in its content, or has inconsistent information across directories, Google AI will cite your competitors instead.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is AI search optimization for doctors and clinics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI search optimization — also called AEO, Answer Engine Optimization — is the process of making your practice visible and citable inside AI-generated answers. When a patient asks ChatGPT or Gemini "best dermatologist in Bangalore," AI search optimization is what determines whether your name appears in the answer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does schema markup help doctors get found by AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — significantly. Schema markup is structured data that tells AI systems exactly what your practice is, who your doctors are, what procedures you offer, and where you are located. Without it, AI has to guess — and it will cite a competitor that made it easier.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from Google Ads or paid promotion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Paid ads do not influence what AI platforms recommend. AI recommendations are driven by structured data, authority signals, and citation patterns — not ad spend. That is what we build.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the free audit actually cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We run your practice name through live prompts on ChatGPT and Google AI Overviews and deliver a structured citation report within 48 hours showing where you appear, where you do not, and how competitors are being recommended instead.',
      },
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqPageClient />
    </>
  );
}
