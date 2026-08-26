import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
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
