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
    default: "Healthcare AEO Strategist — Pager Studio",
    template: "%s | Pager Studio",
  },
  description:
    "Pager Studio is a Healthcare AEO (Answer Engine Optimization) strategy firm. We make healthcare practices visible in AI search — ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
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
  authors: [{ name: "Sandeep Kumar", url: "https://pagerstudio.space" }],
  creator: "Sandeep Kumar",
  metadataBase: new URL("https://pagerstudio.space"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Pager Studio",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Healthcare AEO Strategist — Pager Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare AEO Strategist — Pager Studio",
    description:
      "Pager Studio is a Healthcare AEO strategy firm. We make healthcare practices visible in AI search.",
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
    canonical: "https://pagerstudio.space",
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
        <link rel="icon" href="/favicon-dark.png" type="image/png" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/favicon-light.png" type="image/png" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-dark.png" media="(prefers-color-scheme: light)" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-light.png" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <link rel="alternate" href="/llms.txt" type="text/plain" title="LLM context file" />
        <link rel="alternate" href="/feed.xml" type="application/rss+xml" title="Pager Studio Blog" />
        <link rel="manifest" href="/manifest.json" />
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://pagerstudio.space/#organization",
              name: "Pager Studio",
              url: "https://pagerstudio.space",
              logo: "https://pagerstudio.space/logo-dark.png",
              description:
                "AEO strategy firm focused on making healthcare practices discoverable through AI search and agents.",
              founder: {
                "@type": "Person",
                name: "Sandeep Kumar",
                jobTitle: "AEO Strategist",
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
              areaServed: "Worldwide",
            }),
          }}
        />
      </body>
    </html>
  );
}
