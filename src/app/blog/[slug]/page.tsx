import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: [
      "AEO",
      "answer engine optimization",
      "healthcare AI visibility",
      "AI search healthcare",
      post.category.toLowerCase(),
      post.title.toLowerCase(),
    ],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ["Sandeep Kumar"],
      url: `https://pagerstudio.space/blog/${post.slug}`,
      siteName: "Pager Studio",
      images: [
        {
          url: "/og-default.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/og-default.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

function extractFAQs(content: string) {
  const faqRegex = /###\s+(.+?)\n\n((?:(?!###\s|##\s|$)[\s\S]+?)+)/g;
  const faqs: { question: string; answer: string }[] = [];
  let match;

  const faqSectionMatch = content.match(/##\s+Frequently Asked Questions([\s\S]*?)$/);
  if (!faqSectionMatch) return faqs;

  const faqSection = faqSectionMatch[1];

  while ((match = faqRegex.exec(faqSection)) !== null) {
    const question = match[1].trim();
    const answer = match[2].trim().replace(/\n\n/g, " ").replace(/\*\*(.+?)\*\*/g, "$1");
    faqs.push({ question, answer });
  }

  return faqs;
}

function splitContent(content: string): { intro: string; sections: { heading: string; body: string }[] } {
  const lines = content.split("\n");
  let introLines: string[] = [];
  const sections: { heading: string; body: string[] }[] = [];
  let current: { heading: string; body: string[] } | null = null;

  for (const line of lines) {
    if (line.startsWith("## ")) {
      if (current) {
        sections.push({ heading: current.heading, body: current.body });
      }
      current = { heading: line.replace(/^##\s+/, ""), body: [] };
    } else if (current) {
      current.body.push(line);
    } else {
      introLines.push(line);
    }
  }

  if (current) {
    sections.push({ heading: current.heading, body: current.body });
  }

  const intro = introLines.join("\n").trim();

  return {
    intro,
    sections: sections.map((s) => ({
      heading: s.heading,
      body: s.body.join("\n").trim(),
    })),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const faqs = extractFAQs(post.content);
  const { intro, sections } = splitContent(post.content);

  const wordCount = post.content.split(/\s+/).length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    wordCount,
    articleSection: post.category,
    image: "/og-default.png",
    url: `https://pagerstudio.space/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: "Sandeep Kumar",
      jobTitle: "AEO Strategist",
      url: "https://pagerstudio.space",
      sameAs: [
        "https://instagram.com/pagerstudio",
        "https://x.com/pagerstudio",
        "https://linkedin.com/company/pagerstudio",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "Pager Studio",
      url: "https://pagerstudio.space",
      logo: {
        "@type": "ImageObject",
        url: "/og-default.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://pagerstudio.space/blog/${post.slug}`,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".prose > p:first-of-type"],
    },
    about: {
      "@type": "Thing",
      name: post.category,
    },
    keywords: [
      "AEO",
      "answer engine optimization",
      "healthcare AI visibility",
      post.category,
    ],
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://pagerstudio.space" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://pagerstudio.space/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://pagerstudio.space/blog/${post.slug}` },
    ],
  };

  const faqLd = faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  const schemas = [jsonLd, breadcrumbLd, ...(faqLd ? [faqLd] : [])];

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />
      <section className="px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[60px] md:pb-24">
        <div className="mx-auto max-w-2xl flex flex-col items-center">

          {/* Header + Intro */}
          <Section noSeparator className="px-[20px] md:px-[40px] py-[20px] md:py-[30px]">
            <header className="mt-0">
              <div className="flex items-center gap-3 text-footnote text-text-tertiary">
                <time dateTime={post.date}>
                  {new Date(post.date + "T00:00:00Z").toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC",
                  })}
                </time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="mt-4 text-display md:text-display-xl font-semibold leading-tight tracking-tight">
                {post.title}
              </h1>
              <p className="mt-3 text-footnote text-text-secondary">
                Sandeep Kumar, Pager Studio
              </p>
            </header>
            {intro && (
              <div className="mt-8 prose max-w-none">
                <MDXRemote
                  source={intro}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                      rehypePlugins: [rehypeSlug],
                    },
                  }}
                />
              </div>
            )}
          </Section>

          {/* Sections */}
          {sections.map((section) => (
            <Section key={section.heading} className="px-[20px] md:px-[40px] py-[20px] md:py-[30px]">
              <div className="prose max-w-none">
                <MDXRemote
                  source={`## ${section.heading}\n\n${section.body}`}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                      rehypePlugins: [rehypeSlug],
                    },
                  }}
                />
              </div>
            </Section>
          ))}

          {/* CTA */}
          <Section className="px-[20px] md:px-[40px] py-[20px] md:py-[30px]">
            <div className="flex flex-wrap gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-fill-active transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                Book a Discovery Call
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-text-primary text-black text-sm font-semibold hover:bg-fill-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                See Pricing &amp; Process
              </Link>
            </div>
          </Section>

        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
    </>
  );
}
