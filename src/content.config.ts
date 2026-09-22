import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { courseNodeSchema } from "astro-course-university/schemas";

const weekSchema = z.coerce.number().int().min(1).max(12);
const courseNodeLoader = (dir: string) =>
  glob({ pattern: ["**/*.{md,mdx}", "!**/CLAUDE.md"], base: `src/content/${dir}` });
const teacherRefs = z.array(reference("people")).min(1);

const weightedMarking = z
  .object({
    mode: z.literal("weighted"),
    criteria: z
      .array(z.object({ name: z.string().trim().min(1), weight: z.number().positive() }))
      .min(1),
  })
  .superRefine((marking, ctx) => {
    const total = marking.criteria.reduce((sum, criterion) => sum + criterion.weight, 0);
    if (total !== 100) {
      ctx.addIssue({
        code: "custom",
        path: ["criteria"],
        message: `criterion weights sum to ${total}, not 100`,
      });
    }
  });

const holisticMarking = z.object({
  mode: z.literal("holistic"),
  description: z.string().trim().min(40),
});

export const collections = {
  sessions: defineCollection({
    loader: courseNodeLoader("sessions"),
    schema: courseNodeSchema
      .extend({
        week: weekSchema,
        date: z.coerce.date(),
        teachers: teacherRefs.optional(),
      })
      .loose(),
  }),

  assessments: defineCollection({
    loader: courseNodeLoader("assessments"),
    schema: courseNodeSchema
      .extend({
        week: weekSchema,
        due: z.coerce.date(),
        weight: z.coerce.number().positive().max(100),
        marking: z.discriminatedUnion("mode", [weightedMarking, holisticMarking]).optional(),
      })
      .loose(),
  }),

  lectures: defineCollection({
    loader: courseNodeLoader("lectures"),
    schema: courseNodeSchema
      .extend({
        week: weekSchema,
        date: z.coerce.date(),
        teachers: teacherRefs.optional(),
        slides: z
          .string()
          .regex(/^\/decks\/[a-z0-9-]+\/$/)
          .optional(),
      })
      .loose(),
  }),

  people: defineCollection({
    loader: courseNodeLoader("people"),
    schema: ({ image }) =>
      z
        .object({
          title: z.string().trim().min(1),
          description: z.string().trim().min(40),
          role: z.string().trim().min(1),
          contact: z.string().trim().min(1).optional(),
          affiliation: z.string().trim().min(1).optional(),
          email: z.email().optional(),
          url: z.url().optional(),
          photo: image().optional(),
          photoAlt: z.string().trim().optional(),
          published: z.coerce.boolean().default(true),
        })
        .superRefine((person, ctx) => {
          if (person.photo && !person.photoAlt) {
            ctx.addIssue({
              code: "custom",
              path: ["photoAlt"],
              message: "describe the photo when one is supplied",
            });
          }
        }),
  }),

  // A worked-example CYOA demo (src/pages/play/) and its clue-web view, both
  // reading this same collection so the two stay in sync by construction.
  // Deliberately not in graphCollections/courseApiCollections: it's original
  // demo fiction, not course-structural content, and must stay out of the
  // programs/courses API and the fixed assignment-2 spec assertions.
  // Nested under play/scenario/ (not play-scenes/) so llms.txt's file-path
  // derived URL matches the actual /play/scenario/<slug>/ route.
  playScenes: defineCollection({
    loader: courseNodeLoader("play/scenario"),
    schema: z.object({
      title: z.string().trim().min(1),
      // Exactly one entry is the opening scene; scenario/index.astro finds it.
      start: z.coerce.boolean().default(false),
      // Present only on terminal scenes.
      ending: z.enum(["success", "failure", "ambiguous"]).optional(),
      // A clue `id` recurring across scenes is a redundant path to the same
      // information — the taxonomies are Studio 6's (redundancy) and (delivery).
      clues: z
        .array(
          z.object({
            id: z.string().trim().min(1),
            name: z.string().trim().min(1),
            redundancy: z.enum(["core", "supporting", "advantage"]),
            delivery: z.enum(["literature", "social", "trace"]),
          }),
        )
        .default([]),
    }),
  }),
};
