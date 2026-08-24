import Image from "next/image";

export default function Logo({ dark = true, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <Image
        src={dark ? "/logo-dark.png" : "/logo-light.png"}
        alt="Pager Studio logo"
        width={64}
        height={64}
        className="h-16 w-16 object-contain"
      />
      <span className={`text-display font-semibold tracking-[-0.01em] leading-[1.1] ${dark ? "text-black" : "text-white"}`}>
        Pager<br />Studio
      </span>
    </span>
  );
}
