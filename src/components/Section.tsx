import GlassCard from "./GlassCard";
import Separator from "./Separator";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  noSeparator?: boolean;
}

export default function Section({ children, className, style, noSeparator = false }: SectionProps) {
  return (
    <>
      {!noSeparator && <Separator />}
      <GlassCard className={`w-full ${className ?? ""}`} style={style}>
        {children}
      </GlassCard>
    </>
  );
}
