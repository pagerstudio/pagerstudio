import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { createClient, type SanityClient } from '@sanity/client';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  title: string;
  slug: string;
  specialty: string;
  date: string;
  excerpt: string;
  readTime: string;
  content: string;
  source: 'sanity' | 'mdx';
}

const SANITY_ENABLED = /^[a-z0-9]+$/.test(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '');

let _client: SanityClient | null = null;
function getClient(): SanityClient {
  if (!_client) {
    _client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
      dataset: 'production',
      apiVersion: '2024-01-01',
      useCdn: true,
    });
  }
  return _client;
}

async function getSanityPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost"] | order(date desc) {
    title,
    "slug": slug.current,
    specialty,
    date,
    excerpt,
    readTime,
    content
  }`;
  const posts = await getClient().fetch(query);
  return posts.map((p: Record<string, unknown>) => ({
    title: p.title as string,
    slug: p.slug as string,
    specialty: (p.specialty as string) || '',
    date: p.date as string,
    excerpt: p.excerpt as string,
    readTime: (p.readTime as string) || '5 min read',
    content: JSON.stringify(p.content),
    source: 'sanity' as const,
  }));
}

async function getSanityPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "blogPost" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    specialty,
    date,
    excerpt,
    readTime,
    content
  }`;
  const post = await getClient().fetch(query, { slug });
  if (!post) return null;
  return {
    title: post.title,
    slug: post.slug,
    specialty: post.specialty || '',
    date: post.date,
    excerpt: post.excerpt,
    readTime: post.readTime || '5 min read',
    content: JSON.stringify(post.content),
    source: 'sanity',
  };
}

function getMdxPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'));
  return files.map((file) => {
    const filePath = path.join(BLOG_DIR, file);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);
    return {
      title: data.title || 'Untitled',
      slug: data.slug || file.replace('.mdx', ''),
      specialty: data.specialty || '',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      readTime: data.readTime || '5 min read',
      content,
      source: 'mdx' as const,
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function getMdxPostBySlug(slug: string): BlogPost | null {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'));
  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);
    const postSlug = data.slug || file.replace('.mdx', '');
    if (postSlug === slug) {
      return {
        title: data.title || 'Untitled',
        slug: postSlug,
        specialty: data.specialty || '',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        readTime: data.readTime || '5 min read',
        content,
        source: 'mdx',
      };
    }
  }
  return null;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  if (SANITY_ENABLED) {
    try {
      return await getSanityPosts();
    } catch {
      console.warn('Sanity fetch failed, falling back to MDX');
    }
  }
  return getMdxPosts();
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (SANITY_ENABLED) {
    try {
      return await getSanityPostBySlug(slug);
    } catch {
      console.warn('Sanity fetch failed, falling back to MDX');
    }
  }
  return getMdxPostBySlug(slug);
}

export async function getAllSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((p) => p.slug);
}
