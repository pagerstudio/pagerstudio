import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unstable_cache } from "next/cache";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  lastUpdated?: string;
  readTime: string;
  category: string;
  author: string;
  image: string;
}

export interface BlogPostContent extends BlogPost {
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title as string,
      description: data.description as string,
      date: data.date as string,
      lastUpdated: (data.lastUpdated as string) || undefined,
      readTime: data.readTime as string,
      category: (data.category as string) || "Uncategorized",
      author: (data.author as string) || "Pager Studio",
      image: (data.image as string) || "/og-default.png",
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export const getCachedAllPosts = unstable_cache(
  () => Promise.resolve(getAllPosts()),
  ["blog-all-posts"],
  { revalidate: 3600, tags: ["blog"] }
);

export function getPostBySlug(slug: string): BlogPostContent | null {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    lastUpdated: (data.lastUpdated as string) || undefined,
    readTime: data.readTime as string,
    category: (data.category as string) || "Uncategorized",
    author: (data.author as string) || "Pager Studio",
    image: (data.image as string) || "/og-default.png",
    content,
  };
}
