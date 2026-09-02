import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import GridTrailWrapper from "@/components/GridTrailWrapper";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Healthcare AEO Strategist — Sandeep Kumar",
    template: "%s — Sandeep Kumar | Pager Studio",
  },
  description:
    "Sandeep Kumar's Healthcare AEO strategy firm. Making healthcare practices visible in AI search — ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
  keywords: [
    "healthcare AEO",
    "answer engine optimization healthcare",
    "AI search healthcare",
    "healthcare AI visibility",
    "AEO strategist",
    "GEO healthcare",
    "generative engine optimization healthcare",
    "healthcare discoverability",
    "Pager Studio",
  ],
  authors: [{ name: "Sandeep Kumar", url: "https://www.pagerstudio.space" }],
  creator: "Sandeep Kumar",
  metadataBase: new URL("https://www.pagerstudio.space"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Pager Studio",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Healthcare AEO Strategist — Sandeep Kumar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare AEO Strategist — Sandeep Kumar",
    description:
      "Sandeep Kumar's Healthcare AEO strategy firm. Making healthcare practices visible in AI search — ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
    images: ["/og-default.png"],
    creator: "@pagerstudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    languages: {
      "en": "https://www.pagerstudio.space",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document.createElement('link');d.rel='icon';d.type='image/png';var m=window.matchMedia('(prefers-color-scheme:dark)');function u(){d.href=m.matches?'/favicon-light.png':'/favicon-dark.png';}u();m.addEventListener('change',u);document.head.appendChild(d);})();`,
          }}
        />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <link rel="alternate" href="/llms.txt" type="text/plain" title="LLM context file" />
        <link rel="alternate" href="/feed.xml" type="application/rss+xml" title="Pager Studio Blog" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="dns-prefetch" href="https://app.cal.com" />
        <link rel="preconnect" href="https://app.cal.com" />
      </head>
      <body className="min-h-screen flex flex-col relative isolate">
        <noscript>
          <div style={{ padding: "2rem", textAlign: "center", fontFamily: "system-ui, sans-serif" }}>
            Pager Studio requires JavaScript to run. Please enable it in your browser.
          </div>
        </noscript>
        <div className="relative z-10">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
          >
            Skip to content
          </a>
          <GridTrailWrapper />
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": "https://www.pagerstudio.space/#person",
                name: "Sandeep Kumar",
                jobTitle: "Healthcare AEO Strategist",
                url: "https://www.linkedin.com/in/sandeepkumargr/",
                image: "https://www.pagerstudio.space/og-default.png",
                description: "Healthcare AEO Strategist and founder of Pager Studio. Specializes in making healthcare practices visible in AI search.",
                sameAs: [
                  "https://www.linkedin.com/in/sandeepkumargr/",
                ],
                worksFor: {
                  "@type": "ProfessionalService",
                  "@id": "https://www.pagerstudio.space/#organization",
                  name: "Pager Studio",
                  url: "https://www.pagerstudio.space",
                },
                knowsAbout: [
                  "Answer Engine Optimization",
                  "Healthcare AEO",
                  "AI Search Visibility",
                  "Generative Engine Optimization",
                  "Medical Entity Optimization",
                  "Schema Markup for Healthcare",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "@id": "https://www.pagerstudio.space/#organization",
                name: "Pager Studio",
                url: "https://www.pagerstudio.space",
                logo: "https://www.pagerstudio.space/logo-dark.png",
                description:
                  "Pager Studio is Sandeep Kumar's healthcare AEO strategy firm. We help healthcare practices get recommended by AI search engines — ChatGPT, Gemini, Perplexity, Google AI Overviews.",
                foundingDate: "2025",
                founder: {
                  "@type": "Person",
                  "@id": "https://www.pagerstudio.space/#person",
                  name: "Sandeep Kumar",
                  jobTitle: "Healthcare AEO Strategist",
                  url: "https://www.linkedin.com/in/sandeepkumargr/",
                },
                sameAs: [
                  "https://instagram.com/pagerstudio",
                  "https://x.com/pagerstudio",
                  "https://linkedin.com/company/pagerstudio",
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  email: "hello@pagerstudio.space",
                  contactType: "customer service",
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Coimbatore",
                  addressRegion: "Tamil Nadu",
                  addressCountry: "IN",
                },
                areaServed: "Worldwide",
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Healthcare AEO Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Healthcare AEO Audit",
                        description: "Complete diagnostic of your practice's AI visibility. $5,000 fixed, delivered in 4-6 weeks.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Healthcare AEO Strategy",
                        description: "Technical optimization, off-page authority, directory presence, and ongoing monitoring.",
                      },
                    },
                  ],
                },
              },
            ]),
          }}
        />
      </body>
    </html>
  );
}
