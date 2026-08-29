"use client";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  return (
    <details
      open={defaultOpen}
      className="group border border-border-subtle rounded-xl overflow-hidden"
    >
      <summary className="flex items-center justify-between px-[30px] md:px-[40px] py-[20px] md:py-[24px] cursor-pointer list-none text-title-2 font-semibold tracking-tight hover:bg-white/5 transition-colors">
        {title}
        <span className="text-text-tertiary text-xl font-light transition-transform duration-200 group-open:rotate-45 shrink-0 ml-4">
          +
        </span>
      </summary>
      <div className="px-[30px] md:px-[40px] pb-[24px] text-body leading-relaxed-body text-text-secondary">
        {children}
      </div>
    </details>
  );
}

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export function Accordion({ children, className = "" }: AccordionProps) {
  return (
    <div className={`space-y-[12px] ${className}`}>{children}</div>
  );
}
