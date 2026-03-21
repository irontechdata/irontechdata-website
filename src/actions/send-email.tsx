"use server";

import { Resend } from "resend";
import { ContactEmailTemplate } from "@/components/emails/contact-template";
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactFormValues) {
    const isDev = process.env.NODE_ENV === "development";
    const toEmail = isDev ? ["jan@irontechdata.com"] : ["sales@irontechdata.com"];

    try {
        const validatedFields = contactFormSchema.safeParse(data);

        if (!validatedFields.success) {
            return { error: "Invalid form data." };
        }

        const { name, email, message } = validatedFields.data;

        const { data: resendData, error } = await resend.emails.send({
            from: "Iron Tech Data Contact <noreply@irontechdata.com>",
            to: toEmail,
            subject: `New Inquiry from ${name}`,
            react: <ContactEmailTemplate name={name} email={email} message={message} />,
            replyTo: email,
        });

        if (error) {
            console.error("Resend Error:", error);
            return { error: error.message };
        }

        return { success: true, data: resendData };
    } catch (error: any) {
        console.error("Server Action Error:", error);
        return { error: "Failed to send email. Please try again later." };
    }
}
