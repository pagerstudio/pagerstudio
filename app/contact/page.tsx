import type { Metadata } from 'next';
import Script from 'next/script';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact — Free AI Visibility Audit',
  description:
    'Get a free AI visibility audit for your healthcare practice. See how ChatGPT and Google AI Overviews describe your clinic.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | Pager Studio',
    description:
      'Get a free AI visibility audit for your healthcare practice. See how ChatGPT and Google AI Overviews describe your clinic.',
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Pager Studio',
  url: 'https://www.pagerstudio.space/contact',
  mainEntity: {
    '@type': 'ProfessionalService',
    name: 'Pager Studio',
    url: 'https://www.pagerstudio.space',
    email: 'hello.pagerstudio@gmail.com',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello.pagerstudio@gmail.com',
      contactType: 'customer service',
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactPageClient />
    </>
  );
}
