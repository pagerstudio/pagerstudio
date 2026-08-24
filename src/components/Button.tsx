import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center px-7 py-3.5 min-h-[44px] rounded-full text-subhead font-semibold transition-all duration-200 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2";

  const styles = {
    primary:
      "bg-black text-white hover:bg-fill-active after:absolute after:inset-0 after:pointer-events-none after:bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,rgba(255,255,255,0.15)_4px,rgba(255,255,255,0.15)_5px)] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300",
    secondary:
      "bg-white text-black border border-border-default hover:bg-white after:absolute after:inset-0 after:pointer-events-none after:bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,rgba(0,0,0,0.15)_4px,rgba(0,0,0,0.15)_5px)] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      <span className="relative z-10">{children}</span>
      <svg
        className="relative z-10 ml-2 h-4 w-4 transition-transform duration-200 group-hover:-rotate-45"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    </Link>
  );
}
