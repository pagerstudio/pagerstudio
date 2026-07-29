'use client';

import dynamic from 'next/dynamic';

const NextStudio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false }
);

export default function StudioPage() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

  if (!projectId) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sanity Studio</h1>
          <p style={{ color: '#666' }}>Set NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local to enable the Studio.</p>
        </div>
      </div>
    );
  }

  // Dynamically require config so it's only evaluated client-side when projectId is set
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const config = require('../../sanity.config').default;
  return <NextStudio config={config} />;
}
