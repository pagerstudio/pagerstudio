import type { MetadataRoute } from "next";
import { getCachedAllPosts } from "@/lib/blog";

const lastModified = new Date("2026-08-01");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://pagerstudio.vercel.app";

  const staticPages = [
    { url: baseUrl, lastModified, changeFrequency: "monthly" as const, priority: 1 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/book`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/disclaimer`, lastModified, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/cookies`, lastModified, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/ai-policy`, lastModified, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const posts = (await getCachedAllPosts()).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...posts];
}
