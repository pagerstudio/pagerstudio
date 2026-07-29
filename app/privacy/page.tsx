import type { Metadata } from 'next';
import PrivacyPageClient from './PrivacyPageClient';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Pager Studio collects, uses, and protects your data when you use our AI visibility services for healthcare practices.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Pager Studio',
    description:
      'How Pager Studio collects, uses, and protects your data when you use our AI visibility services.',
  },
};

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
