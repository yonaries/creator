import * as z from "zod";

export const membershipFormSchema = z.object({
  title: z
    .string({ required_error: "Title must be provided" })
    .min(3, { message: "Title must be at least 3 characters long" }),
  fee: z.coerce
    .number({ required_error: "Fee must be provided" })
    .min(1, { message: "Fee must be at least 1" }),
  // status:z.boolean().default(true),
  coverImage: z.string().optional(),
  description: z.string().optional(),
  benefit: z
    .array(
      z.object({
        title: z
          .string()
          .min(3, { message: "Title must be at least 3 characters long" }),
        description: z.string().optional(),
      }),
      { required_error: "Benefit must have at least 1 item" }
    )
    .min(1, { message: "Benefit must have at least 1 item" }),
});

export type MembershipFormValues = z.infer<typeof membershipFormSchema>;

export const benefitFormSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" }),
  description: z.string().optional(),
});

export type BenefitFormValues = z.infer<typeof benefitFormSchema>;
