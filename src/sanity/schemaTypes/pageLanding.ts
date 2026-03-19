import { defineField, defineType } from "sanity";

export const pageLanding = defineType({
    name: "pageLanding",
    title: "Landing Page",
    type: "document",
    fields: [
        defineField({
            name: "heroTitle",
            title: "Hero Title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "heroSubtitle",
            title: "Hero Subtitle",
            type: "text",
        }),
        defineField({
            name: "ctaText",
            title: "Call to Action Text",
            type: "string",
            description: "The text that appears on the main hero button",
        }),
        defineField({
            name: "ctaLink",
            title: "Call to Action Link",
            type: "string",
            description: "Where the hero button should link to (e.g. /contact)",
        }),
    ],
});
