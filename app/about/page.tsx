import type { Metadata } from 'next';
import Script from 'next/script';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About — Sandeep Kumar Gr, Founder',
  description:
    'Pager Studio was founded by Sandeep Kumar Gr to help healthcare practices get discovered and recommended inside AI answers.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Pager Studio',
    description:
      'Pager Studio was founded by Sandeep Kumar Gr to help healthcare practices get discovered and recommended inside AI answers.',
  },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Pager Studio',
  url: 'https://www.pagerstudio.space/about',
  mainEntity: {
    '@type': 'Person',
    name: 'Sandeep Kumar Gr',
    jobTitle: 'Founder',
    url: 'https://www.pagerstudio.space/about',
    worksFor: {
      '@type': 'ProfessionalService',
      name: 'Pager Studio',
      url: 'https://www.pagerstudio.space',
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
