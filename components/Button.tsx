'use client';

import { motion } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  showArrow?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  showArrow = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: 'h-10 px-5 text-[13px]',
    md: 'h-[52px] px-6 text-[14px]',
    lg: 'h-[56px] px-8 text-[15px]',
  };

  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
  };

  const classes = `btn ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const arrow = showArrow ? (
    <svg className="btn-arrow w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  ) : null;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2 }}
      >
        {children}
        {arrow}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {children}
      {arrow}
    </motion.button>
  );
}
