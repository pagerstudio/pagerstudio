'use client';

import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from './mdx-components';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function extractText(node: React.ReactNode): string {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractText).join('');
  if (node && typeof node === 'object' && 'props' in node) {
    return extractText((node as { props: { children?: React.ReactNode } }).props.children);
  }
  return '';
}

function slugFromChildren(children: React.ReactNode): string {
  const text = extractText(children);
  return slugify(text);
}

const headingCounters = new Map<string, number>();

function uniqueSlug(children: React.ReactNode): string {
  const baseId = slugFromChildren(children);
  const count = headingCounters.get(baseId) || 0;
  headingCounters.set(baseId, count + 1);
  return count > 0 ? `${baseId}-${count}` : baseId;
}

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children, ...props }) => {
      const id = uniqueSlug(children);
      return <h2 id={id} {...props}>{children}</h2>;
    },
    h3: ({ children, ...props }) => {
      const id = uniqueSlug(children);
      return <h3 id={id} {...props}>{children}</h3>;
    },
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="link-underline">{children}</a>
    ),
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => <code>{children}</code>,
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  types: {
    span: ({ value }) => <span>{value?.text}</span>,
  },
};

interface ContentRendererProps {
  source: string;
  type: 'sanity' | 'mdx';
}

export default function ContentRenderer({ source, type }: ContentRendererProps) {
  if (type === 'sanity') {
    headingCounters.clear();
    const blocks = JSON.parse(source);
    return (
      <PortableText value={blocks} components={portableTextComponents} />
    );
  }

  return (
    <MDXRemote source={source} components={mdxComponents} />
  );
}
