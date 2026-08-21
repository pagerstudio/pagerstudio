import type { Metadata } from 'next';
import Script from 'next/script';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About Pager Studio — AI Engine Optimization for Healthcare',
  description:
    'Pager Studio is a boutique AEO agency founded by Sandeep Kumar GR. It helps elite healthcare practices become visible and citable inside ChatGPT, Perplexity, Google AI Overviews, and Gemini.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Pager Studio — AI Engine Optimization for Healthcare',
    description:
      'Pager Studio is a boutique AEO agency founded by Sandeep Kumar GR. It helps elite healthcare practices become visible and citable inside AI answer engines.',
  },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Pager Studio',
  url: 'https://www.pagerstudio.space/about',
  description:
    'Pager Studio is a boutique AEO agency that helps elite healthcare practices become visible and citable inside AI answer engines.',
  mainEntity: {
    '@type': 'Person',
    name: 'Sandeep Kumar GR',
    jobTitle: 'Founder & Sole Strategist',
    url: 'https://www.pagerstudio.space/about',
    worksFor: {
      '@type': 'ProfessionalService',
      name: 'Pager Studio',
      url: 'https://www.pagerstudio.space',
      description:
        'Boutique AEO agency for elite healthcare practices. Maximum ten clients at a time across the US, UK, and UAE.',
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AboutPageClient />
    </>
  );
}
