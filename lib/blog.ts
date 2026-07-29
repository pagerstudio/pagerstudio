import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  title: string;
  slug: string;
  specialty: string;
  date: string;
  excerpt: string;
  readTime: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'));

  const posts = files.map((file) => {
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
      content: content || '',
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
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
        content: content || '',
      };
    }
  }
  return null;
}

export function getAllSlugs(): string[] {
  const posts = getAllPosts();
  return posts.map((p) => p.slug);
}
