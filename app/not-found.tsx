import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="bg-ps-white min-h-screen flex flex-col">
      <Nav />

      <section className="flex-1 flex flex-col items-center justify-center px-5 sm:px-6 md:px-10 pt-[100px] sm:pt-[140px] pb-[60px] sm:pb-[100px]">
        <div className="max-w-[600px] text-center">
          <p className="font-sans text-[12px] font-semibold tracking-[0.1em] uppercase text-ps-faint mb-4">
            404
          </p>
          <h1 className="font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.06] tracking-[-0.02em] text-ps-ink mb-5 italic">
            This page doesn&apos;t <span className="not-italic">exist.</span>
          </h1>
          <p className="font-sans text-[16px] leading-[1.65] text-ps-muted mb-10 max-w-[420px] mx-auto">
            The page you&apos;re looking for may have been moved or doesn&apos;t exist. Head back and try again.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <Link
              href="/"
              className="inline-block bg-ps-ink text-white font-sans text-[14px] font-semibold px-8 py-[14px] rounded-full hover:opacity-[0.88] hover:scale-[0.98] active:opacity-70 active:scale-95 transition-all duration-200 text-center"
            >
              Go Home ↗
            </Link>
            <Link
              href="/blog"
              className="inline-block bg-ps-surface text-ps-ink font-sans text-[14px] font-semibold px-8 py-[14px] rounded-full border border-ps-line hover:bg-ps-line/40 active:bg-ps-line/60 transition-all duration-200 text-center"
            >
              Read the Blog ↗
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
