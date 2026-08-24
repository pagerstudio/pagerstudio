"use client";

import Link from "next/link";
import { useState, useRef, useCallback } from "react";
import type { BlogPost } from "@/lib/blog";

interface Props {
  posts: BlogPost[];
}

export default function SwipeableCards({ posts }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const post = posts[activeIndex];
  const touchStartX = useRef(0);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setActiveIndex((i) => Math.min(posts.length - 1, i + 1));
      } else {
        setActiveIndex((i) => Math.max(0, i - 1));
      }
    }
  }, [posts.length]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(0, i - 1));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(posts.length - 1, i + 1));
    }
  }, [posts.length]);

  if (!post) return null;

  return (
    <article
      role="group"
      aria-label="Featured blog posts"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="flex flex-col overflow-hidden rounded-2xl bg-black text-white p-6 md:p-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      <div className="flex flex-col min-w-0 text-left">
        <h2 className="text-left text-title-2 md:text-title-1 font-normal leading-snug">
          {post.title}
        </h2>
        <p className="mt-3 md:mt-3 text-footnote md:text-subhead leading-normal text-text-inverse-secondary line-clamp-2 md:line-clamp-none">
          {post.description}
        </p>

        <div className="flex items-center justify-between mt-4 md:mt-6 pt-4 md:pt-6">
          <Link
            href={`/blog/${post.slug}`}
            className="text-micro md:text-footnote text-text-inverse-secondary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
          >
            Read blog ↗
          </Link>

          {posts.length > 1 && (
            <div className="flex items-center gap-1.5 md:gap-2" role="group" aria-label="Post navigation">
              <button
                onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
                disabled={activeIndex === 0}
                aria-label="Previous post"
                className="min-w-[44px] min-h-[44px] w-8 h-8 md:w-11 md:h-11 rounded-full border border-white/20 flex items-center justify-center text-white text-xs md:text-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                &lt;
              </button>
              <span className="text-[10px] md:text-xs text-white/50 tabular-nums" aria-live="polite">
                {activeIndex + 1} / {posts.length}
              </span>
              <button
                onClick={() => setActiveIndex((i) => Math.min(posts.length - 1, i + 1))}
                disabled={activeIndex === posts.length - 1}
                aria-label="Next post"
                className="min-w-[44px] min-h-[44px] w-8 h-8 md:w-11 md:h-11 rounded-full border border-white/20 flex items-center justify-center text-white text-xs md:text-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                &gt;
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
