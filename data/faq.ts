export interface FaqItem {
  id: string;
  q: string;
  a: string;
}

export interface SchemaFaq {
  question: string;
  answer: string;
}

export const faqs: SchemaFaq[] = [
  {
    question: 'Is this just SEO?',
    answer:
      'No. SEO targets search engine rankings. Pager Studio targets AI platforms — ChatGPT, Gemini, Perplexity, Claude, and others — where patients are increasingly asking for recommendations directly.',
  },
  {
    question: 'What does the free audit actually cover?',
    answer:
      'We run your practice name through live prompts on ChatGPT and Google AI Overviews and deliver a structured citation report within 48 hours showing where you appear, where you don\u2019t, and how competitors are being recommended instead.',
  },
  {
    question: 'How is this different from Google Ads or paid promotion?',
    answer:
      "Paid ads don\u2019t influence what AI platforms recommend. AI recommendations are driven by structured data, authority signals, and citation patterns \u2014 not ad spend. That\u2019s what we build.",
  },
  {
    question: 'Do you work with all healthcare specialties?',
    answer:
      'We focus on high-value specialties where AI recommendations directly influence patient decisions: IVF, Dental, Dermatology, LASIK, Hair Transplant, and Plastic Surgery.',
  },
  {
    question: 'How does exclusivity work?',
    answer:
      'On Authority and Dominant plans, we work with one clinic per specialty per city. First paid engagement locks that slot. Foundation plan does not include exclusivity.',
  },
  {
    question: 'What is the minimum commitment?',
    answer:
      'All paid plans require a minimum six-month engagement. After six months billing continues month-to-month with 30 days notice to cancel.',
  },
  {
    question: 'Do you guarantee AI recommendations?',
    answer:
      "No ethical agency can guarantee placement on platforms we don\u2019t control. We guarantee the work \u2014 structured data implementation, authority content, citation building \u2014 and we track and report visibility movement every month.",
  },
  {
    question: 'Who do you work with?',
    answer:
      'Practice owners and clinic managers only. We are a B2B agency and do not work with patients directly or provide any medical advice.',
  },
];

export const homepageFaq: FaqItem[] = faqs.map((f, i) => ({
  id: `faq-${i}`,
  q: f.question,
  a: f.answer,
}));

export const pricingFaq: FaqItem[] = [
  { id: 'pricing-seo', q: 'How is this different from SEO?', a: "SEO gets you ranked on Google's blue links. We get you recommended inside AI answers — before the patient reaches a search results page. Most clinics doing SEO are completely invisible in AI search." },
  { id: 'pricing-ads', q: 'How is this different from Google Ads?', a: 'Google Ads stops the moment you stop paying. AI visibility compounds — the content and authority we build keeps working every month after.' },
  { id: 'pricing-already-seo', q: "What if I'm already doing SEO?", a: "They work together. Your SEO agency handles Google rankings. We handle the AI search layer they aren't covering." },
  { id: 'pricing-ymyl', q: 'Why does healthcare need specialist work?', a: "AI platforms apply YMYL standards to health content. Getting cited requires doctor credentials, medical schema markup, E-E-A-T signals, and medically structured content. General AEO agencies don't build any of this." },
  { id: 'pricing-big-website', q: 'Do I need a big website already?', a: "No. We build what's needed as part of the engagement." },
  { id: 'pricing-free-audit', q: 'What does the free audit include?', a: 'We run your clinic through top patient prompts on ChatGPT and Google AI Overviews. You get a structured report within 48 hours showing where you appear, what AI says about you, and what gaps are preventing you from being cited.' },
  { id: 'pricing-full-audit', q: "What's included in the full audit?", a: "40+ prompts across ChatGPT and Google AI Overviews, a complete competitor gap analysis, a technical readiness check of your website's schema markup, a content authority assessment, and a prioritized list of recommendations. Delivered before we begin any work." },
  { id: 'pricing-upgrade', q: 'Can I upgrade plans?', a: 'Yes, at the next billing cycle without losing any progress.' },
  { id: 'pricing-location', q: 'Where do you operate?', a: 'We work with healthcare practices across India. We are not limited by geography for remote work — content, schema, and authority building are done digitally. For practices outside India, contact us directly.' },
  { id: 'pricing-setup', q: 'Is there a setup fee?', a: 'No. Month 1 is foundation month — schema, GBP optimization, doctor profiles, directory citations, E-E-A-T setup. Content begins from week 2.' },
];
