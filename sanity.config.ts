import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { blogPost } from './sanity/schemas/blogPost';

export default defineConfig({
  name: 'pager-studio',
  title: 'Pager Studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [blogPost],
  },
});
