import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getPostBySlug, getAllSlugs } from '@/lib/blog';
import { extractHeadings, extractHeadingsFromPortableText } from '@/lib/toc';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BlogPostClient from './BlogPostClient';
import ReadingProgress from './ReadingProgress';
import BackToTop from './BackToTop';
import TableOfContents from './TableOfContents';
import ContentRenderer from './ContentRenderer';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `https://pagerstudio.space/blog/${post.slug}`,
    },
  };
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const headings = post.source === 'sanity'
    ? extractHeadingsFromPortableText(JSON.parse(post.content))
    : extractHeadings(post.content);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Pager Studio',
      url: 'https://pagerstudio.space',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Pager Studio',
      url: 'https://pagerstudio.space',
    },
    description: post.excerpt,
    medicalSpecialty: post.specialty,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://pagerstudio.space/blog/${post.slug}`,
    },
  };

  return (
    <main className="bg-white min-h-screen">
      <Nav />
      <ReadingProgress />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="pt-[110px] sm:pt-[150px] pb-[60px] sm:pb-[100px] px-5 sm:px-6 md:px-10">
        <header className="max-w-[680px] mx-auto mb-10 sm:mb-14">
          <BlogPostClient>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 font-sans text-[13px] font-medium text-ps-muted hover:text-ps-ink transition-colors duration-200 mb-6 group"
            >
              <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l7 7m-7-7l7-7" />
              </svg>
              Back to blog
            </Link>

            <div className="flex items-center gap-2.5 mb-5">
              <span className="inline-block font-sans text-[11px] font-semibold text-ps-muted tracking-widest uppercase bg-ps-surface border border-ps-line rounded-full px-3 py-1">
                {post.specialty}
              </span>
            </div>

            <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] text-ps-ink mb-5">
              {post.title}
            </h1>

            <p className="font-sans text-[17px] sm:text-[18px] leading-[1.7] text-ps-muted max-w-[600px] mb-6">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-ps-line">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-ps-ink flex items-center justify-center">
                  <span className="font-sans text-[11px] font-bold text-white">PS</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[13px] font-medium text-ps-ink">Pager Studio</span>
                  <span className="font-sans text-[11px] text-ps-faint">Healthcare AI Visibility</span>
                </div>
              </div>
              <span className="text-ps-line">·</span>
              <time className="font-sans text-[13px] text-ps-faint" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
              <span className="text-ps-line">·</span>
              <span className="font-sans text-[13px] text-ps-faint">{post.readTime}</span>
            </div>
          </BlogPostClient>
        </header>

        <div className="max-w-[680px] mx-auto relative">
          <TableOfContents headings={headings} />

          <BlogPostClient>
            <div className="prose-custom font-sans text-[18px] leading-[1.8] text-[#374151]">
              <ContentRenderer source={post.content} type={post.source} />
            </div>
          </BlogPostClient>

          {/* CTA Box */}
          <div className="mt-12 sm:mt-16 p-8 sm:p-10 rounded-[16px] bg-ps-surface border border-ps-line">
            <h3 className="font-serif text-[1.4rem] leading-[1.2] text-ps-ink mb-3">
              See where your practice stands with AI
            </h3>
            <p className="font-sans text-[15px] leading-[1.65] text-ps-muted mb-5 max-w-[480px]">
              Get a free audit showing exactly how ChatGPT and Google AI Overviews see your practice — and what is missing.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-sans text-[14px] font-semibold bg-ps-ink text-white rounded-full px-6 py-3 hover:bg-black hover:shadow-[0_2px_12px_rgba(0,0,0,0.25)] hover:scale-[0.97] active:scale-[0.95] transition-all duration-200 group"
            >
              Get Your Free Audit
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="font-sans text-[12px] mt-3 text-ps-faint">
              No credit card required. Report delivered in 48 hours.
            </p>
          </div>
        </div>
      </article>

      <Footer />
      <BackToTop />
    </main>
  );
}
