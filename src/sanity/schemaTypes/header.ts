import { defineField, defineType } from "sanity";

export const header = defineType({
    name: "header",
    title: "Header",
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
            name: "navLinks",
            title: "Navigation Links",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "label", title: "Label", type: "string" }),
                        defineField({ name: "link", title: "Link", type: "string" }),
                    ],
                },
            ],
        }),

        defineField({
            name: "navBackgroundImage",
            title: "Navigation Background Image",
            type: "image",
            options: { hotspot: true },
        }),
    ],
});
