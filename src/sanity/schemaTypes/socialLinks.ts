import { defineField, defineType } from "sanity";

export const socialLinks = defineType({
    name: "socialLinks",
    title: "Social Links",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),

        defineField({
            name: "icons",
            title: "Icons",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "icon", title: "Icon", type: "image" }),
                        defineField({ name: "iconName", title: "Icon Name", type: "string" }),
                        defineField({ name: "link", title: "Link", type: "string" }),
                    ],
                },
            ],
        }),
    ],
});
