import type { Metadata } from 'next';
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

export default function ContactPage() {
  return <ContactPageClient />;
}
