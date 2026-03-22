"use client";

import { useTransition } from "react";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { sendContactEmail } from "@/actions/send-email";
import { contactFormSchema } from "@/lib/schemas";

export const ContactForm = () => {
    const [isPending, startTransition] = useTransition();

    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
        validators: {
            onChange: contactFormSchema,
        },
        onSubmit: ({ value }) => {
            startTransition(async () => {
                const result = await sendContactEmail(value);

                if (result?.error) {
                    toast.error(result.error);
                } else {
                    toast.success("Message sent successfully!");
                    form.reset();
                }
            });
        },
    });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
            }}
            className="flex w-full max-w-3xl flex-col gap-6"
        >
            <div className="flex flex-col gap-2">
                <form.Field
                    name="name"
                    validators={{
                        onChange: contactFormSchema.shape.name,
                    }}
                    children={(field) => {
                        const isInvalid =
                            field.state.meta.isTouched && field.state.meta.errors.length > 0;
                        return (
                            <div className="flex flex-col gap-1">
                                <Input
                                    id={field.name}
                                    name={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    placeholder="NAME"
                                    className="h-14 rounded-none border-none bg-zinc-200 px-4 font-bold text-black placeholder:text-black focus-visible:ring-primary"
                                    aria-invalid={isInvalid}
                                />
                                {isInvalid && (
                                    <p className="text-sm font-medium text-destructive">
                                        {field.state.meta.errors[0]?.message}
                                    </p>
                                )}
                            </div>
                        );
                    }}
                />

                <form.Field
                    name="email"
                    validators={{
                        onChange: contactFormSchema.shape.email,
                    }}
                    children={(field) => {
                        const isInvalid =
                            field.state.meta.isTouched && field.state.meta.errors.length > 0;
                        return (
                            <div className="flex flex-col gap-1">
                                <Input
                                    id={field.name}
                                    name={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    placeholder="EMAIL ADDRESS"
                                    className="h-14 rounded-none border-none bg-zinc-200 px-4 font-bold text-black placeholder:text-black focus-visible:ring-primary"
                                    aria-invalid={isInvalid}
                                />
                                {isInvalid && (
                                    <p className="text-sm font-medium text-destructive">
                                        {field.state.meta.errors[0]?.message}
                                    </p>
                                )}
                            </div>
                        );
                    }}
                />

                <form.Field
                    name="message"
                    validators={{
                        onChange: contactFormSchema.shape.message,
                    }}
                    children={(field) => {
                        const isInvalid =
                            field.state.meta.isTouched && field.state.meta.errors.length > 0;
                        return (
                            <div className="flex flex-col gap-1">
                                <Textarea
                                    id={field.name}
                                    name={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    placeholder="MESSAGE"
                                    className="min-h-[120px] rounded-none border-none bg-zinc-200 px-4 py-3 font-bold text-black placeholder:text-black focus-visible:ring-primary"
                                    aria-invalid={isInvalid}
                                />
                                {isInvalid && (
                                    <p className="text-sm font-medium text-destructive">
                                        {field.state.meta.errors[0]?.message}
                                    </p>
                                )}
                            </div>
                        );
                    }}
                />
            </div>

            <form.Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting]}
                children={([canSubmit, isSubmitting]) => (
                    <Button
                        type="submit"
                        disabled={!canSubmit || isPending || isSubmitting}
                        className={`w-full rounded-full py-6 text-2xl font-bold uppercase tracking-wider text-white transition-all hover:scale-[1.02] hover:bg-primary/90 active:scale-95 disabled:pointer-events-none disabled:opacity-50 
                            ${isPending || isSubmitting ? "bg-primary" : "bg-primary"}
                            ${!canSubmit || isPending || isSubmitting ? "cursor-not-allowed" : "cursor-pointer"}
                        `}
                    >
                        {isPending || isSubmitting ? "SENDING..." : "SUBMIT"}
                    </Button>
                )}
            />
        </form>
    );
};
