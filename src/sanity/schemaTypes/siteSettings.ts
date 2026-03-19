import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
    name: "siteSettings",
    title: "Site Settings",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Site Title",
            type: "string",
            validation: (rule) => rule.required(),
            description: "The name of your site (used in the navbar and default SEO titles)",
        }),
        defineField({
            name: "description",
            title: "Site Description",
            type: "text",
            description: "Default SEO description for the site",
        }),
        defineField({
            name: "ogImage",
            title: "Open Graph Image",
            type: "image",
            description: "Default image to display when sharing the site on social media",
            options: {
                hotspot: true,
            },
        }),
    ],
});
