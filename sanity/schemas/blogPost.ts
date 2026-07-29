import { defineType, defineField } from 'sanity';

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'specialty',
      title: 'Specialty',
      type: 'string',
      options: {
        list: [
          { title: 'IVF & Fertility', value: 'IVF & Fertility' },
          { title: 'Dental Implants', value: 'Dental Implants' },
          { title: 'Cosmetic Dermatology', value: 'Cosmetic Dermatology' },
          { title: 'LASIK & Eye Care', value: 'LASIK & Eye Care' },
          { title: 'Hair Restoration', value: 'Hair Restoration' },
          { title: 'Plastic Surgery', value: 'Plastic Surgery' },
          { title: 'General', value: 'General' },
        ],
      },
    }),
    defineField({
      name: 'date',
      title: 'Published Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      initialValue: '5 min read',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt Text', type: 'string' },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', date: 'date', specialty: 'specialty' },
    prepare(selection) {
      const { title, date, specialty } = selection;
      return { title, subtitle: `${specialty || 'General'} — ${date || ''}` };
    },
  },
  orderings: [
    { title: 'Date (newest)', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] },
  ],
});
