"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ className = "" }: { className?: string }) {
  const router = useRouter();

  return (
    <section className="px-[20px] md:px-[30px] pt-[20px] md:pt-[30px]">
      <div className={`mx-auto max-w-[720px] ${className}`}>
        <button
          onClick={() => {
            if (window.history.length > 1) {
              router.back();
            } else {
              router.push("/");
            }
          }}
          className="group relative inline-flex items-center justify-center px-7 py-3.5 min-h-[44px] rounded-full text-subhead font-semibold bg-white text-black border border-border-default hover:bg-white transition-all duration-200 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 after:absolute after:inset-0 after:pointer-events-none after:bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,rgba(0,0,0,0.15)_4px,rgba(0,0,0,0.15)_5px)] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
        >
          <svg
            className="relative z-10 mr-2 h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          <span className="relative z-10">Back</span>
        </button>
      </div>
    </section>
  );
}
