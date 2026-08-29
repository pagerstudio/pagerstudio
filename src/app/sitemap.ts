import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.pagerstudio.space";
  const posts = getAllPosts();

  const staticPages = [
    { url: baseUrl, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/pricing`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/book`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/faq`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/privacy`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/terms`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/cookies`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/ai-policy`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/ivf-fertility-aeo`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/dermatology-aeo`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/dental-implant-aeo`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/lasik-aeo`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/hair-restoration-aeo`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/plastic-surgery-aeo`, changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages.map((page) => ({
      ...page,
      lastModified: new Date(),
    })),
    ...blogPages,
  ];
}
