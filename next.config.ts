import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "pagerstudio.space",
          },
        ],
        destination: "https://www.pagerstudio.space/:path*",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/healthcare-aeo",
        destination: "/blog/what-is-aeo-healthcare",
        permanent: true,
      },
      {
        source: "/healthcare-aeo-audit",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/disclaimer",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/blog/healthcare-entity-optimization",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/healthcare-practice-ai-search-visibility",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/aeo-for-hair-restoration",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        { key: "Strict-Transport-Security", value: "max-age=31536000" },
        { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://app.cal.com https://cal.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://app.cal.com https://cal.com; font-src 'self'; connect-src 'self' https://app.cal.com https://cal.com; frame-src 'self' https://app.cal.com https://cal.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'" },
        { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
      ],
    },
  ],
};

export default nextConfig;
