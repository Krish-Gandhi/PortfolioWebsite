import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    image: z.string().optional(),
    skills: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog,
};
