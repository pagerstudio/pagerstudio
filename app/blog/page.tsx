import type { Metadata } from 'next';
import Script from 'next/script';
import { getAllPosts } from '@/lib/blog';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BlogIndexClient from './BlogIndexClient';

export const metadata: Metadata = {
  title: 'Blog — Pager Studio',
  description: 'Insights on AI visibility, medical schema markup, and how healthcare practices get recommended by AI.',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

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
              url: `https://pagerstudio.space/blog/${post.slug}`,
              name: post.title,
            })),
          }),
        }}
      />

      <section className="pt-[100px] sm:pt-[140px] pb-[30px] sm:pb-[40px] px-5 sm:px-6 md:px-10">
        <div className="max-w-[800px] mx-auto text-center">
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
