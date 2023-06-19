import * as z from "zod";

// TODO: add neccessary fields
export const postFormSchema = z
  .object({
    title: z.string().nonempty(),
    content: z.string().optional(),
    visibility: z
      .enum(["public", "supporters", "membership"])
      .refine((value) => value != null || value != "", {
        message: "You have to select at least one item.",
      })
      .default("public"),
    membership: z.array(z.string()).optional(),
    file: z
      .object({
        url: z.string(),
        type: z.string(),
      })
      .optional(),
    thumbnail: z
      .object({
        url: z.string(),
        type: z.enum(["image"]),
      })
      .optional(),
  })
  .refine(
    (schema) =>
      schema.visibility === "membership"
        ? schema.membership && schema.membership.length > 0
        : true,
    {
      message: "You have to select at least one item.",
      path: ["membership"],
    }
  );

export type PostFormValues = z.infer<typeof postFormSchema>;
