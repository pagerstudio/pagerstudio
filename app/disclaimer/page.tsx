import type { Metadata } from 'next';
import DisclaimerPageClient from './DisclaimerPageClient';

export const metadata: Metadata = {
  title: 'Disclaimer — AI Visibility Services',
  description:
    'Important disclaimers about AI visibility results, healthcare content, and services provided by Pager Studio.',
  alternates: {
    canonical: '/disclaimer',
  },
  openGraph: {
    title: 'Disclaimer | Pager Studio',
    description:
      'Important disclaimers about AI visibility results, healthcare content, and services provided by Pager Studio.',
  },
};

export default function DisclaimerPage() {
  return <DisclaimerPageClient />;
}
