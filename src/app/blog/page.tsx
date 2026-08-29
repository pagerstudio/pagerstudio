import type { Metadata } from "next";
import Link from "next/link";
import { getCachedAllPosts } from "@/lib/blog";
import BackButton from "@/components/BackButton";
import GlassCard from "@/components/GlassCard";
import ArrowTopRight from "@/components/ArrowTopRight";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AEO, AI search, and healthcare visibility from Pager Studio. Learn how AI search differs from Google and why healthcare practices need AEO.",
  keywords: [
    "AEO blog",
    "healthcare AI search",
    "answer engine optimization articles",
    "AI visibility healthcare",
    "healthcare marketing blog",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog",
    description: "Insights on AEO, AI search, and healthcare visibility.",
    url: "https://www.pagerstudio.space/blog",
    images: ["/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "Insights on AEO, AI search, and healthcare visibility.",
  },
};

export default async function BlogPage() {
  const posts = await getCachedAllPosts();

  return (
    <>
      <BackButton />
      <section className="px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[60px] md:pb-24">
        <GlassCard className="mx-auto max-w-3xl px-[20px] md:px-[40px] py-[20px] md:py-[30px]">
          <div className="flex items-start justify-between">
            <h1 className="text-display md:text-display-xl font-semibold leading-tight tracking-tight">
              Blog
            </h1>
            <a
              href="/feed.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-micro md:text-caption text-text-tertiary hover:text-text-primary transition-colors mt-1"
            >
              RSS Feed
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5"
              >
                <path d="M4 11a9 9 0 0 1 9 9" />
                <path d="M4 4a16 16 0 0 1 16 16" />
                <circle cx="5" cy="19" r="1" />
              </svg>
            </a>
          </div>
          <p className="mt-3 text-subhead text-text-secondary">
            Insights on AEO, AI search, and healthcare visibility.
          </p>

          {posts.length === 0 ? (
            <p className="mt-12 text-subhead text-text-tertiary">
              No posts published yet.
            </p>
          ) : (
            <div className="mt-12 space-y-5">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded-2xl"
                >
                  <article className="relative overflow-hidden rounded-2xl bg-white border border-border-subtle p-6 md:p-8 transition-all duration-200">
                    <h2 className="text-title-1 font-semibold leading-snug">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-subhead leading-prose text-text-secondary line-clamp-2">
                      {post.description}
                    </p>
                    <p className="mt-4 text-micro text-text-tertiary">
                      {new Date(post.date + "T00:00:00Z").toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                        timeZone: "UTC",
                      })}{" "}
                      · {post.readTime}
                    </p>
                    <ArrowTopRight />
                  </article>
                </Link>
              ))}
            </div>
          )}
        </GlassCard>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Blog | Pager Studio",
            description: "Insights on AEO, AI search, and healthcare visibility.",
            url: "https://www.pagerstudio.space/blog",
            publisher: {
              "@type": "Organization",
              name: "Pager Studio",
              url: "https://www.pagerstudio.space",
            },
            hasPart: posts.map((post) => ({
              "@type": "Article",
              headline: post.title,
              description: post.description,
              url: `https://www.pagerstudio.space/blog/${post.slug}`,
              datePublished: post.date,
              dateModified: post.date,
              author: {
                "@type": "Person",
                name: "Sandeep Kumar",
                jobTitle: "Healthcare AEO Strategist",
                url: "https://www.pagerstudio.space/about",
                sameAs: [
                  "https://www.linkedin.com/in/sandeepkumargr/",
                ],
              },
              publisher: {
                "@type": "Organization",
                name: "Pager Studio",
              },
            })),
          }),
        }}
      />
    </>
  );
}
