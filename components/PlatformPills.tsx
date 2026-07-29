'use client';

import Container from './Container';
import SectionHeader from './SectionHeader';

const CDN_BASE = 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons';

const PLATFORMS = [
  {
    name: 'ChatGPT',
    logo: `${CDN_BASE}/openai.svg`,
    description: 'OpenAI conversational AI assistant',
    url: 'https://chat.openai.com',
    color: '#10A37F',
  },
  {
    name: 'Gemini',
    logo: `${CDN_BASE}/gemini-color.svg`,
    description: 'Google AI multimodal model',
    url: 'https://gemini.google.com',
  },
  {
    name: 'Claude',
    logo: `${CDN_BASE}/claude-color.svg`,
    description: 'Anthropic AI assistant',
    url: 'https://claude.ai',
  },
  {
    name: 'Perplexity',
    logo: `${CDN_BASE}/perplexity-color.svg`,
    description: 'AI-powered answer engine',
    url: 'https://perplexity.ai',
  },
  {
    name: 'Grok',
    logo: `${CDN_BASE}/grok.svg`,
    description: 'xAI conversational AI',
    url: 'https://grok.com',
    color: '#000000',
  },
  {
    name: 'Google AI Overviews',
    logo: `${CDN_BASE}/google-color.svg`,
    description: 'Google AI-generated search summaries',
    url: 'https://www.google.com/search',
  },
];

export default function PlatformPills() {
  return (
    <section className="section section-white" aria-labelledby="platforms-heading">
      <Container size="sm">
        <div id="platforms-heading">
          <SectionHeader
            eyebrow="Platforms"
            title={<>Platforms we <span className="font-serif italic">optimize</span> for</>}
          />
        </div>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5"
          role="list"
          aria-label="AI platforms we optimize for"
        >
          {PLATFORMS.map((p) => (
            <div
              key={p.name}
              className="card card-subtle flex flex-col items-center justify-center gap-3 text-center p-6 sm:p-8"
              role="listitem"
              itemScope
              itemType="https://schema.org/SoftwareApplication"
            >
              <img
                src={p.logo}
                alt={`${p.name} logo — ${p.description}`}
                width={40}
                height={40}
                loading="lazy"
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
                style={p.color ? { color: p.color } : undefined}
                draggable={false}
                itemProp="image"
              />
              <span
                className="text-body-sm font-medium text-ps-ink leading-tight"
                itemProp="name"
              >
                {p.name}
              </span>
              <meta itemProp="applicationCategory" content="AI Assistant" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
