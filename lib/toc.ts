export interface TocEntry {
  id: string;
  text: string;
  level: 2 | 3;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function extractTextFromBlock(block: Record<string, unknown>): string {
  if (!block.children || !Array.isArray(block.children)) return '';
  return block.children
    .map((child: Record<string, unknown>) => (typeof child.text === 'string' ? child.text : ''))
    .join('');
}

export function extractHeadingsFromPortableText(blocks: Record<string, unknown>[]): TocEntry[] {
  const headings: TocEntry[] = [];
  const seen = new Map<string, number>();
  for (const block of blocks) {
    if (block._type === 'block' && (block.style === 'h2' || block.style === 'h3')) {
      const text = extractTextFromBlock(block);
      if (text) {
        const baseId = slugify(text);
        const count = seen.get(baseId) || 0;
        seen.set(baseId, count + 1);
        headings.push({ id: count > 0 ? `${baseId}-${count}` : baseId, text, level: block.style === 'h2' ? 2 : 3 });
      }
    }
  }
  return headings;
}

export function extractHeadings(content: string): TocEntry[] {
  const headings: TocEntry[] = [];
  const lines = content.split('\n');
  const seen = new Map<string, number>();

  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length as 2 | 3;
      const text = match[2]
        .replace(/\*\*(.+?)\*\*/g, '$1')
        .replace(/\*(.+?)\*/g, '$1')
        .replace(/`(.+?)`/g, '$1')
        .replace(/\[(.+?)\]\(.+?\)/g, '$1')
        .trim();
      const baseId = slugify(text);
      const count = seen.get(baseId) || 0;
      seen.set(baseId, count + 1);
      headings.push({ id: count > 0 ? `${baseId}-${count}` : baseId, text, level });
    }
  }

  return headings;
}
