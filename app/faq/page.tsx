import type { Metadata } from 'next';
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

export default function FaqPage() {
  return <FaqPageClient />;
}
