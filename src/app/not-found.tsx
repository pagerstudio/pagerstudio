import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[60px] md:pb-24">
      <div className="mx-auto max-w-2xl text-center py-20">
        <h1 className="text-display font-semibold leading-tight tracking-tight">
          Page Not Found
        </h1>
        <p className="mt-4 text-subhead text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-fill-active transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
