import { type ReactNode } from "react";

function CornerPlus() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1">
      <line x1="5" y1="0" x2="5" y2="10" />
      <line x1="0" y1="5" x2="10" y2="5" />
    </svg>
  );
}

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function GlassCard({ children, className = "", style }: GlassCardProps) {
  return (
    <div className={`relative bg-white/50 backdrop-blur-md border border-border-default ${className}`} style={style}>
      <span aria-hidden="true" className="absolute -top-[5px] -left-[5px] text-text-tertiary select-none"><CornerPlus /></span>
      <span aria-hidden="true" className="absolute -top-[5px] -right-[5px] text-text-tertiary select-none"><CornerPlus /></span>
      <span aria-hidden="true" className="absolute -bottom-[5px] -left-[5px] text-text-tertiary select-none"><CornerPlus /></span>
      <span aria-hidden="true" className="absolute -bottom-[5px] -right-[5px] text-text-tertiary select-none"><CornerPlus /></span>
      {children}
    </div>
  );
}
