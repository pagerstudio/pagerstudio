'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-ps-white flex items-center justify-center px-5">
      <div className="text-center max-w-[400px]">
        <p className="font-sans text-[11px] font-semibold tracking-[0.1em] uppercase text-ps-faint mb-4">
          Something went wrong
        </p>
        <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.06] tracking-[-0.02em] text-ps-ink mb-4">
          Unexpected error
        </h1>
        <p className="font-sans text-[15px] leading-[1.65] text-ps-muted mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="bg-ps-ink text-white font-sans text-sm font-semibold px-8 py-[14px] rounded-full hover:opacity-[0.88] hover:scale-[0.98] active:opacity-70 active:scale-95 transition-all duration-200"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
