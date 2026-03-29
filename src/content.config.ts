// 1. Importer des utilitaires depuis `astro:content`
import { defineCollection } from 'astro:content';

// 2. Importer un ou plusieurs chargeurs
import { glob, file } from 'astro/loaders';

// 3. Importer Zod
import { z } from 'astro/zod';

// 4. Définir votre/vos collection(s)
const projets = defineCollection({ 
  loader: glob({pattern:"**/*.{md,mdx}", base:"./src/content/projets"}),
  schema: ({ image }) => z.object({
      id: z.string(),
      slug: z.string(),
      selection: z.boolean().optional(),
      titre: z.string(),
      tags: z.array(z.enum(["Webdesign", "HTML", "CSS", "JavaScript", "Direction artistique", "Branding", "Motion design", "Identité Visuelle", "Typographie", "Landing page", "Stratégie de marque"])),
      bgColor: z.string(),
      foreground: z.string(),
      couleurFondBtn: z.string(),
      lieu: z.string(),
      date: z.string(),
      cover1: z.object ({src: image(), alt: z.string()}),
      cover2: z.object ({src: image(), alt: z.string()}),
      cover3: z.object ({src: image(), alt: z.string()}),
    })
  });

// 5. Exporter un seul objet `collections` pour enregistrer votre/vos collection(s)
export const collections = { projets };
