import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    work: defineCollection({
      type: 'page',
      source: 'work/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        company: z.string(),
        role: z.string(),
        industry: z.string(),
        skills: z.array(z.string()).optional(),
        thumbnail: z.string().optional(),
        featured: z.boolean().default(false),
        order: z.number().default(99),
        draft: z.boolean().default(false),
      }),
    }),
  },
})
