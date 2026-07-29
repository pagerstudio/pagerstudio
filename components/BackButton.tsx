'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="fixed top-4 sm:top-5 left-5 sm:left-6 z-[102] flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/95 backdrop-blur-xl border border-ps-line/50 text-caption-sm text-ps-muted hover:text-ps-ink hover:border-ps-ink/20 transition-all duration-200 shadow-[0_2px_24px_rgba(0,0,0,0.07)] cursor-pointer"
      aria-label="Go back"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 12H5" />
        <path d="M12 19l-7-7 7-7" />
      </svg>
      <span>Back</span>
    </button>
  );
}
