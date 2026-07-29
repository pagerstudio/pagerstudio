import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { blogPost } from './sanity/schemas/blogPost';

export default defineConfig({
  name: 'pager-studio',
  title: 'Pager Studio',
  projectId: '97eftwco',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [blogPost],
  },
});
