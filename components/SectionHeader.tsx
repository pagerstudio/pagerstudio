'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
}

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  theme = 'light',
}: SectionHeaderProps) {
  const textColor = theme === 'dark' ? 'text-white' : 'text-ps-ink';
  const mutedColor = theme === 'dark' ? 'text-white/50' : 'text-ps-muted';
  const eyebrowColor = theme === 'dark' ? 'text-white/40' : 'text-ps-faint';

  return (
    <div className={align === 'center' ? 'text-center mb-12 sm:mb-16' : 'mb-12 sm:mb-16'}>
      {eyebrow && (
        <motion.p
          className={`text-caption-sm ${eyebrowColor} mb-4`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        className={`text-heading-xl ${textColor} ${align === 'center' ? 'max-w-[900px] mx-auto' : ''}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className={`text-body ${mutedColor} mt-5 max-w-[600px] ${align === 'center' ? 'mx-auto' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
