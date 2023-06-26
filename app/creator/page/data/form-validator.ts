import * as z from "zod";

export const pageFormSchema = z.object({
  name: z.string().min(3, "minimum of 3 characters required"),
  headline: z.string().min(3, "minimum of 3 characters required").optional(),
  profileImage: z.instanceof(File).optional(),
  description: z.string().optional(),
  coverImage: z.instanceof(File).optional(),
  thankYouMessage: z.string().optional(),
});

export type PageFormValues = z.infer<typeof pageFormSchema>;
