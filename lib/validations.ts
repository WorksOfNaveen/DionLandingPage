import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(80),
  email: z.email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .max(25, "Phone number is too long.")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(20, "Please share at least a few details about your requirement.")
    .max(1200, "Message is too long."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
