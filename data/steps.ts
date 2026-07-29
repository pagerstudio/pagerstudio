export interface Step {
  step: string;
  title: string;
  titleBreak: string;
  body: string;
  bullets: string[];
}

export const steps: Step[] = [
  {
    step: 'Step 01',
    title: 'Discover',
    titleBreak: '& Audit',
    body: 'We run your practice name, specialty, and location through 40+ live AI prompts — the exact questions patients are asking right now. You get a detailed citation report: where you appear, and what AI says about you.',
    bullets: [
      'Live prompt testing across all major AI platforms',
      'Competitor gap analysis',
      'Technical readiness check',
    ],
  },
  {
    step: 'Step 02',
    title: 'Optimize',
    titleBreak: '& Build',
    body: 'We build the content and structured data that AI systems use to understand, cite, and recommend your practice. Schema markup, FAQ content, authority pages, provider profiles — done for you, installed on your site.',
    bullets: [
      'Schema markup & structured data',
      'AI-optimized authority content',
      'Provider and practice profile optimization',
    ],
  },
  {
    step: 'Step 03',
    title: 'Monitor',
    titleBreak: '& Grow',
    body: 'AI models update continuously. What gets you cited today may shift tomorrow. Our monthly retainer keeps you tracked, your content current, and your citation rate trending up — with a clear monthly report you can actually read.',
    bullets: [
      'Monthly AI citation report',
      'Continuous content refresh',
      'Competitor monitoring',
    ],
  },
];
