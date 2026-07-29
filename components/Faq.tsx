'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { homepageFaq, type FaqItem } from '@/data/faq';

const EASE = [0.22, 1, 0.36, 1] as const;

function FaqItemRow({ item, openId, onToggle, index }: { item: FaqItem; openId: string | null; onToggle: (id: string) => void; index: number }) {
  const isOpen = openId === item.id;
  const answerId = `faq-answer-${item.id}`;
  return (
    <motion.div
      className={`bg-white border border-ps-line/60 rounded-[12px] transition-shadow duration-300 ${
        isOpen ? 'shadow-[0_1px_4px_rgba(0,0,0,0.04)]' : 'shadow-none hover:shadow-[0_1px_3px_rgba(0,0,0,0.03)]'
      }`}
      initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: EASE }}
    >
      <button
        type="button"
        className="faq-trigger flex items-center w-full px-6 py-5 bg-transparent border-none cursor-pointer text-body font-semibold text-ps-ink text-left gap-4 hover:text-ps-muted active:text-ps-muted transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-ps-ink focus-visible:outline-offset-2 focus-visible:rounded"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={() => onToggle(item.id)}
      >
        <span className="flex-1">{item.q}</span>
        <span className="faq-icon text-[20px] font-light flex-shrink-0 text-ps-muted select-none transition-transform duration-300 self-center" aria-hidden="true">
          {isOpen ? '×' : '+'}
        </span>
      </button>
      <div id={answerId} role="region" className="faq-answer overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ maxHeight: isOpen ? '800px' : '0px' }}>
        <div className="px-6 pb-5">
          <p className="text-body text-ps-muted">{item.a}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(homepageFaq[0].id);
  const midpoint = Math.ceil(homepageFaq.length / 2);
  const col1 = homepageFaq.slice(0, midpoint);
  const col2 = homepageFaq.slice(midpoint);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className="section section-white px-5 sm:px-10 !pb-0"
      id="faq"
      aria-label="Frequently asked questions"
    >
      <div className="container mx-auto">
        <motion.p
          className="text-caption-sm text-ps-faint mb-4 text-center eyebrow"
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          FAQ
        </motion.p>
        <motion.h2
          className="text-heading-xl text-ps-ink mb-5 text-center section-heading"
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
        >
          Got questions? We&apos;ve got answers.
        </motion.h2>
        <motion.p
          className="text-body-sm text-ps-muted text-center max-w-[520px] mx-auto mb-8 sm:mb-16 section-sub"
          initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          Everything you need to know before getting started — straight to the point.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-x-[60px]">
          <div className="flex flex-col gap-3">
            {col1.map((item, i) => (
              <FaqItemRow key={item.id} item={item} openId={openId} onToggle={toggle} index={i} />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {col2.map((item, i) => (
              <FaqItemRow key={item.id} item={item} openId={openId} onToggle={toggle} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
