/* eslint-disable @typescript-eslint/no-require-imports */
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') });
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '97eftwco',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN,
});

const BLOG_DIR = path.join(__dirname, '..', 'content/blog');

function parseInline(text) {
  const marks = [];
  let remaining = text;

  // Handle bold
  if (remaining.startsWith('**') && remaining.endsWith('**')) {
    marks.push({ type: 'strong' });
    remaining = remaining.slice(2, -2);
  }

  // Handle links [text](url)
  const linkMatch = remaining.match(/^\[(.+?)\]\((.+?)\)$/);
  if (linkMatch) {
    return [{
      _type: 'span',
      text: linkMatch[1],
      marks: [{ type: 'link', href: linkMatch[2] }],
    }];
  }

  // Handle inline code
  if (remaining.startsWith('`') && remaining.endsWith('`')) {
    marks.push({ type: 'code' });
    remaining = remaining.slice(1, -1);
  }

  // Handle italic
  if (remaining.startsWith('*') && remaining.endsWith('*') && !remaining.startsWith('**')) {
    marks.push({ type: 'em' });
    remaining = remaining.slice(1, -1);
  }

  return [{
    _type: 'span',
    text: remaining,
    marks: marks.length > 0 ? marks : undefined,
  }];
}

function markdownToBlocks(content) {
  const blocks = [];
  const lines = content.split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Skip empty lines
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Skip horizontal rules
    if (line.trim() === '---') {
      i++;
      continue;
    }

    // Code blocks
    if (line.trim().startsWith('```')) {
      const lang = line.trim().replace('```', '').trim();
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      blocks.push({
        _type: 'block',
        _key: `block-${blocks.length}`,
        style: 'code',
        code: codeLines.join('\n'),
        language: lang || 'text',
      });
      i++;
      continue;
    }

    // Headings
    const headingMatch = line.match(/^(#{2,3})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length === 2 ? 'h2' : 'h3';
      blocks.push({
        _type: 'block',
        _key: `block-${blocks.length}`,
        style: level,
        children: parseInline(headingMatch[2]),
      });
      i++;
      continue;
    }

    // Unordered list
    if (line.trim().startsWith('- ')) {
      const listItems = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        const itemText = lines[i].trim().slice(2);
        listItems.push({
          _type: 'block',
          _key: `block-${blocks.length + listItems.length}`,
          style: 'normal',
          listItem: 'bullet',
          children: parseInline(itemText),
        });
        i++;
      }
      blocks.push(...listItems);
      continue;
    }

    // Ordered list
    const orderedMatch = line.trim().match(/^\d+\.\s+(.+)$/);
    if (orderedMatch) {
      const listItems = [];
      while (i < lines.length) {
        const itemMatch = lines[i].trim().match(/^\d+\.\s+(.+)$/);
        if (!itemMatch) break;
        listItems.push({
          _type: 'block',
          _key: `block-${blocks.length + listItems.length}`,
          style: 'normal',
          listItem: 'number',
          children: parseInline(itemMatch[1]),
        });
        i++;
      }
      blocks.push(...listItems);
      continue;
    }

    // Regular paragraph
    blocks.push({
      _type: 'block',
      _key: `block-${blocks.length}`,
      style: 'normal',
      children: parseInline(line),
    });
    i++;
  }

  return blocks;
}

async function migrate() {
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'));

  for (const file of files) {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
    const { data, content } = matter(raw);

    const blocks = markdownToBlocks(content);

    const doc = {
      _type: 'blogPost',
      title: data.title,
      slug: { _type: 'slug', current: data.slug },
      specialty: data.specialty || 'General',
      date: data.date,
      excerpt: data.excerpt,
      readTime: data.readTime || '5 min read',
      content: blocks,
    };

    try {
      const result = client.create(doc);
      await result;
      console.log(`✓ Created: ${data.title}`);
    } catch (err) {
      console.error(`✗ Failed: ${data.title}`, err.message);
    }
  }

  console.log('\nDone! Migrated all posts.');
}

migrate().catch(console.error);
