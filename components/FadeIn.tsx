'use client';

import { motion, type Variants } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  blur?: number;
  y?: number;
  once?: boolean;
  amount?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  blur = 8,
  y = 40,
  once = true,
  amount = 0.15,
  as = 'div',
}: FadeInProps) {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y,
      filter: `blur(${blur}px)`,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration,
        delay,
        ease: EASE,
      },
    },
  };

  const Component = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </Component>
  );
}
