'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { BlogPost } from '@/lib/blog';

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function FeaturedPost({ post }: { post: BlogPost }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      href={`/blog/${post.slug}`}
      className="group block mb-12 sm:mb-16"
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <article className="relative">
        <div className="mb-4">
          <span className="inline-block text-caption-sm text-ps-ink tracking-widest bg-ps-surface border border-ps-line rounded-full px-3 py-1 mb-4" style={{ textTransform: 'uppercase' }}>
            Featured
          </span>
        </div>

        <h2 className="text-heading-xl text-ps-ink mb-4 group-hover:text-ps-muted transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]">
          {post.title}
        </h2>

        <p className="text-body-lg text-ps-muted max-w-[640px] mb-5">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-ps-ink flex items-center justify-center">
              <span className="font-sans text-[9px] font-bold text-white">PS</span>
            </div>
            <span className="text-body-sm font-medium text-ps-ink">Pager <span className="font-serif italic">Studio</span></span>
          </div>
          <span className="text-ps-line">·</span>
          <time className="text-body-sm text-ps-faint" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <span className="text-ps-line">·</span>
          <span className="text-body-sm text-ps-faint">{post.readTime}</span>
        </div>
      </article>
    </motion.a>
  );
}

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      key={post.slug}
      href={`/blog/${post.slug}`}
      className="group block py-7 sm:py-8 border-b border-ps-line first:border-t"
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 14 }}
      animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.5, delay: 0.1 + index * 0.06, ease: [0.22, 1, 0.36, 1] }
      }
    >
      <article className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-heading-md text-ps-ink group-hover:text-ps-muted transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] mb-2">
            {post.title}
          </h2>

          <p className="text-body text-ps-muted line-clamp-2 mb-3">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-ps-ink flex items-center justify-center">
                <span className="font-sans text-[8px] font-bold text-white">PS</span>
              </div>
              <span className="text-caption text-ps-faint" style={{ textTransform: 'none', letterSpacing: 0 }}>Pager <span className="font-serif italic">Studio</span></span>
            </div>
            <span className="text-ps-line text-[10px]">·</span>
            <time className="text-caption text-ps-faint" style={{ textTransform: 'none', letterSpacing: 0 }} dateTime={post.date}>
              {formatDate(post.date)}
            </time>
            <span className="text-ps-line text-[10px]">·</span>
            <span className="text-caption text-ps-faint" style={{ textTransform: 'none', letterSpacing: 0 }}>{post.readTime}</span>
          </div>
        </div>

        <div className="hidden sm:flex items-center shrink-0 mt-1">
          <span className="text-body-sm font-medium text-ps-ink opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center gap-1.5">
            Read
            <svg className="w-3.5 h-3.5 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </article>
    </motion.a>
  );
}

export default function BlogIndexClient({ posts }: { posts: BlogPost[] }) {
  const [featured, ...rest] = posts;

  return (
    <section className="px-5 sm:px-6 md:px-10 pb-[60px] sm:pb-[100px]">
      <div className="container-sm">
        {featured && <FeaturedPost post={featured} />}

        <div className="flex flex-col">
          {rest.map((post, i) => (
            <PostCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
