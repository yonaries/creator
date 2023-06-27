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
    file: z.instanceof(File).optional(),
    thumbnail: z.instanceof(File).optional(),
    attachments: z.array(z.instanceof(File)).optional(),
  })
  .refine(
    (schema) =>
      schema.visibility === "membership"
        ? schema.membership && schema.membership.length > 0
        : true,
    {
      message: "You have to select at least one membership.",
      path: ["membership"],
    }
  );

export type PostFormValues = z.infer<typeof postFormSchema>;
