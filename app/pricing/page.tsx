import type { Metadata } from 'next';
import PricingPageClient from './PricingPageClient';

export const metadata: Metadata = {
  title: 'Pricing — AI Visibility Plans',
  description:
    'Choose a plan for your healthcare practice. Foundation, Authority, and Dominant plans for AI search optimization across ChatGPT, Google AI Overviews, and Perplexity.',
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'Pricing | Pager Studio',
    description:
      'Choose a plan for your healthcare practice. Foundation, Authority, and Dominant plans for AI search optimization.',
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}
