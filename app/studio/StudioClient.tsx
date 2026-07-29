'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const NextStudio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false }
);

const STUDIO_PASSWORD = process.env.NEXT_PUBLIC_STUDIO_PASSWORD;

export default function StudioPage() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (sessionStorage.getItem('studio_auth') === '1') {
      setAuthorized(true);
    }
  }, []);

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

  if (!STUDIO_PASSWORD) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sanity Studio</h1>
          <p style={{ color: '#666' }}>Set NEXT_PUBLIC_STUDIO_PASSWORD in environment variables to enable access.</p>
        </div>
      </div>
    );
  }

  if (!authorized) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'system-ui, sans-serif', background: '#f5f5f5' }}>
        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', width: '320px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Studio Access</h1>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '1.5rem' }}>Enter password to continue</p>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (password === STUDIO_PASSWORD) {
              sessionStorage.setItem('studio_auth', '1');
              setAuthorized(true);
            } else {
              setError('Wrong password');
              setPassword('');
            }
          }}>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(''); }}
              placeholder="Password"
              autoFocus
              style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', marginBottom: '0.75rem', outline: 'none', boxSizing: 'border-box' }}
            />
            {error && <p style={{ color: '#e53e3e', fontSize: '13px', marginBottom: '0.75rem' }}>{error}</p>}
            <button
              type="submit"
              style={{ width: '100%', padding: '10px', background: '#111', color: 'white', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const config = require('../../sanity.config').default;
  return <NextStudio config={config} />;
}
