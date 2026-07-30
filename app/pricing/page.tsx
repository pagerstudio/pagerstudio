import type { Metadata } from 'next';
import Script from 'next/script';
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

const pricingSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'Product',
      name: 'Foundation Plan',
      description: 'For clinics entering AI search for the first time. 3 AI platforms: ChatGPT, Google Gemini, Google AI Overviews.',
      offers: {
        '@type': 'Offer',
        price: '50000',
        priceCurrency: 'INR',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@type': 'Product',
      name: 'Authority Plan',
      description: 'For clinics ready to compete across every major AI platform. 7 AI platforms: ChatGPT, Google Gemini, Google AI Overviews, Perplexity, Claude, Grok, Meta AI.',
      offers: {
        '@type': 'Offer',
        price: '85000',
        priceCurrency: 'INR',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@type': 'Product',
      name: 'Dominant Plan',
      description: 'For clinics that want to own their specialty across multiple cities. 7 AI platforms with 3 cities coverage.',
      offers: {
        '@type': 'Offer',
        price: '150000',
        priceCurrency: 'INR',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/InStock',
      },
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <Script
        id="pricing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <PricingPageClient />
    </>
  );
}
