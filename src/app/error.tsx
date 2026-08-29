"use client";

export default function Error({
  reset,
}: {
  _error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[60px] md:pb-24">
      <div className="mx-auto max-w-2xl text-center py-20">
        <h1 className="text-display font-semibold leading-tight tracking-tight">
          Something went wrong
        </h1>
        <p className="mt-4 text-subhead text-text-secondary">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="mt-8 inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-fill-active transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        >
          Try Again
        </button>
      </div>
    </section>
  );
}
