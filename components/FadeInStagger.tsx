'use client';

import { motion, type Variants } from 'framer-motion';

interface FadeInStaggerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
  once?: boolean;
  amount?: number;
}

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: {
      staggerChildren: stagger,
    },
  }),
};

export default function FadeInStagger({
  children,
  className = '',
  stagger = 0.1,
  y = 40,
  once = true,
  amount = 0.1,
}: FadeInStaggerProps) {
  const customChildVariants: Variants = {
    hidden: {
      opacity: 0,
      y,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: EASE,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      custom={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={customChildVariants}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={customChildVariants}>{children}</motion.div>
      }
    </motion.div>
  );
}
