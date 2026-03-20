import { z } from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.email("Invalid email address."),
    message: z.string().min(5, "Message must be at least 5 characters."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
