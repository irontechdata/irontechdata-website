import { defineField, defineType } from "sanity";

export const footer = defineType({
    name: "footer",
    title: "Footer",
    type: "document",
    fields: [
        defineField({
            name: "pageTitle",
            title: "Page Title",
            type: "string",
        }),

        defineField({
            name: "logo",
            title: "Logo",
            type: "image",
            options: { hotspot: true },
        }),

        defineField({
            name: "addressText",
            title: "Address Text",
            type: "string",
        }),

        defineField({
            name: "phoneLandline",
            title: "Phone Number (Landline)",
            type: "string",
        }),

        defineField({
            name: "phoneMobile",
            title: "Phone Number (Mobile)",
            type: "string",
        }),

        defineField({
            name: "email",
            title: "Email",
            type: "string",
        }),
        
        defineField({
            name: "footerBackgroundImage",
            title: "Footer Background Image",
            type: "image",
            options: { hotspot: true },
        })
    ],
});
