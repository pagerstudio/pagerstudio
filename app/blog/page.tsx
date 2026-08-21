import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { getAllPosts } from '@/lib/blog';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BlogIndexClient from './BlogIndexClient';

export const metadata: Metadata = {
  title: 'AI Visibility Blog for Healthcare Practices',
  description: 'Insights on AI visibility, medical schema markup, and how healthcare practices get recommended by AI.',
  alternates: {
    canonical: '/blog',
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="bg-white min-h-screen">
      <Nav />

      {/* JSON-LD ItemList */}
      <Script
        id="blog-item-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: posts.map((post, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: `https://www.pagerstudio.space/blog/${post.slug}`,
              name: post.title,
            })),
          }),
        }}
      />

      <section className="pt-[100px] sm:pt-[140px] pb-[30px] sm:pb-[40px] px-5 sm:px-6 md:px-10">
        <div className="max-w-[800px] mx-auto text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-sans text-[13px] font-medium text-ps-muted hover:text-ps-ink transition-colors duration-200 mb-8 group"
          >
            <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l7 7m-7-7l7-7" />
            </svg>
            Home
          </Link>
          <h1 className="font-serif text-[clamp(2.4rem,4vw,3.6rem)] leading-[1.06] tracking-[-0.02em] text-ps-ink mb-4 italic">
            Writing
          </h1>
          <p className="font-sans text-[15px] sm:text-[16px] leading-[1.65] text-ps-muted max-w-[480px] mx-auto">
            Thoughts on AI visibility, search optimization, and how healthcare practices get found by patients.
          </p>
        </div>
      </section>

      <BlogIndexClient posts={posts} />

      <Footer />
    </main>
  );
}
