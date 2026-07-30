import type { Metadata, Viewport } from 'next';
import { Instrument_Serif, Manrope } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

const siteUrl = 'https://www.pagerstudio.space';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Pager Studio — AI Visibility for Healthcare Practices',
    template: '%s | Pager Studio',
  },
  description:
    'Pager Studio helps healthcare practices get discovered and recommended inside AI answers — ChatGPT, Gemini, Claude, Perplexity, Grok, and Google AI Overviews.',
  keywords: [
    'AI visibility',
    'healthcare SEO',
    'AI search optimization',
    'ChatGPT optimization',
    'Gemini optimization',
    'Claude optimization',
    'Perplexity optimization',
    'Grok optimization',
    'Google AI Overviews',
    'AEO',
    'answer engine optimization',
    'medical practice marketing',
    'doctor marketing',
    'clinic visibility',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Pager Studio',
    title: 'Pager Studio — AI Visibility for Healthcare Practices',
    description:
      'Pager Studio helps healthcare practices get discovered and recommended inside AI answers — ChatGPT, Gemini, Claude, Perplexity, Grok, and Google AI Overviews.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Pager Studio — AI Visibility for Healthcare' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pager Studio — AI Visibility for Healthcare Practices',
    description:
      'Pager Studio helps healthcare practices get discovered and recommended inside AI answers.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#ffffff',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Pager Studio',
  url: siteUrl,
  email: 'hello.pagerstudio@gmail.com',
  description:
    'AI visibility agency helping healthcare practices get discovered and recommended on ChatGPT, Google Gemini, Perplexity, Claude, Grok, Meta AI, and Google AI Overviews.',
  founder: {
    '@type': 'Person',
    name: 'Sandeep Kumar',
  },
  areaServed: 'IN',
  knowsAbout: [
    'AI Visibility',
    'AEO',
    'GEO',
    'Generative Engine Optimization',
    'Healthcare Marketing',
    'AI Search Optimization',
  ],
  sameAs: [
    'https://linkedin.com/company/pagerstudio',
    'https://twitter.com/pagerstudio',
    'https://instagram.com/pagerstudio',
  ],
};

const freeAuditServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Free AI Visibility Audit',
  description:
    'A structured citation report showing how your practice appears across ChatGPT and Google AI Overviews. Delivered within 48 hours. No credit card required.',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Pager Studio',
    url: siteUrl,
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
  },
};

const implementationServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Visibility Implementation',
  description:
    'Monthly retainer plans (Foundation, Authority, Dominant) covering schema markup, authority content, physician profile optimization, directory citations, and monitoring across 3\u20137 AI platforms. Minimum six-month engagement.',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Pager Studio',
    url: siteUrl,
  },
  offers: {
    '@type': 'Offer',
    priceRange: 'INR',
  },
};

const monitoringServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Visibility Monitoring',
  description:
    'Citation tracking across all major AI platforms with monthly reports showing visibility score, movement versus previous month, and competitor comparison.',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Pager Studio',
    url: siteUrl,
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Pager Studio',
  url: siteUrl,
  description: 'AI visibility for healthcare practices.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Pricing', item: `${siteUrl}/pricing` },
    { '@type': 'ListItem', position: 3, name: 'Blog', item: `${siteUrl}/blog` },
    { '@type': 'ListItem', position: 4, name: 'FAQ', item: `${siteUrl}/faq` },
    { '@type': 'ListItem', position: 5, name: 'Contact', item: `${siteUrl}/contact` },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${manrope.variable} bg-ps-white`}
    >
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="free-audit-service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(freeAuditServiceSchema) }}
        />
        <Script
          id="implementation-service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(implementationServiceSchema) }}
        />
        <Script
          id="monitoring-service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(monitoringServiceSchema) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZYNBJTTZH9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZYNBJTTZH9');`}
        </Script>
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="font-sans text-ps-ink antialiased">
        {children}
      </body>
    </html>
  );
}
