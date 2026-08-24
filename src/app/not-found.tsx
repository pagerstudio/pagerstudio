import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <BackButton />
      <section className="px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[60px] md:pb-24">
        <GlassCard className="mx-auto max-w-[720px] px-[20px] md:px-[40px] py-[40px] md:py-[60px] text-center">
          <h1 className="text-[80px] md:text-[120px] font-semibold leading-none tracking-tight text-text-tertiary">
            404
          </h1>
          <h2 className="mt-4 text-title-1 md:text-display font-semibold leading-snug tracking-tight">
            Page Not Found
          </h2>
          <p className="mt-4 text-subhead text-text-secondary max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist, has been moved, or is no longer available.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-fill-active transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              Go Home
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-border-default text-black text-sm font-semibold hover:bg-fill-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              Read the Blog
            </Link>
          </div>
        </GlassCard>
      </section>
    </>
  );
}
