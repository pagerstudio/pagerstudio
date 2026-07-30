import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
          color: '#fff',
          fontFamily: 'sans-serif',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: '64px',
            fontWeight: '300',
            letterSpacing: '-0.02em',
            marginBottom: '24px',
            textAlign: 'center',
          }}
        >
          Pager Studio
        </div>
        <div
          style={{
            fontSize: '28px',
            color: '#999',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: '1.4',
          }}
        >
          AI Visibility for Healthcare Practices
        </div>
        <div
          style={{
            fontSize: '20px',
            color: '#666',
            marginTop: '40px',
            textAlign: 'center',
          }}
        >
          Get recommended on ChatGPT, Google AI Overviews and more
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
