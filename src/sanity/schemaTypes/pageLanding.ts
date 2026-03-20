import { defineField, defineType } from "sanity";

export const pageLanding = defineType({
    name: "pageLanding",
    title: "Landing Page",
    type: "document",
    fields: [
        defineField({
            name: "pageTitle",
            title: "Page Title",
            type: "string",
        }),

        defineField({
            name: "heroSection",
            title: "Hero Section",
            type: "object",
            fields: [
                defineField({
                    name: "backgroundImages",
                    title: "Background Images",
                    type: "array",
                    of: [{ type: "image", options: { hotspot: true } }],
                    description: "Carousel of background images",
                }),

                defineField({
                    name: "logo",
                    title: "Hero Logo",
                    type: "image",
                    options: { hotspot: true },
                }),

                defineField({
                    name: "cta",
                    title: "Call to Action",
                    type: "object",
                    fields: [
                        defineField({ name: "label", title: "Label", type: "string" }),
                        defineField({ name: "link", title: "Link", type: "string" }),
                    ],
                }),
            ],
        }),

        defineField({
            name: "aboutSection",
            title: "About Section",
            type: "object",
            fields: [
                defineField({ name: "title", title: "Title", type: "string" }),

                defineField({ name: "description", title: "Description", type: "text" }),

                defineField({
                    name: "backgroundImage",
                    title: "Background Image",
                    type: "image",
                    options: { hotspot: true },
                }),

                defineField({
                    name: "backgroundImageGradient",
                    title: "Background Image Gradient",
                    type: "image",
                    options: { hotspot: true },
                }),

                defineField({
                    name: "backgroundImageNodes",
                    title: "Background Image Nodes",
                    type: "image",
                    options: { hotspot: true },
                }),

                defineField({
                    name: "cta",
                    title: "Call to Action",
                    type: "object",
                    fields: [
                        defineField({ name: "label", title: "Label", type: "string" }),
                        defineField({ name: "link", title: "Link", type: "string" }),
                    ],
                }),

                defineField({
                    name: "contentImage",
                    title: "Content Image",
                    type: "image",
                    options: { hotspot: true },
                }),
            ],
        }),

        defineField({
            name: "ourServices",
            title: "Our Services",
            type: "object",
            fields: [
                defineField({
                    name: "backgroundImage",
                    title: "Background Image",
                    type: "image",
                    options: { hotspot: true },
                }),

                defineField({
                    name: "services",
                    title: "Services List",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            name: "serviceItem",
                            fields: [
                                defineField({ name: "icon", title: "Icon/Image", type: "image" }),
                                defineField({ name: "title", title: "Title", type: "string" }),
                                defineField({
                                    name: "subtitle",
                                    title: "Subtitle",
                                    type: "string",
                                }),
                            ],
                        },
                    ],
                    validation: (Rule) => Rule.max(6),
                }),
            ],
        }),

        defineField({
            name: "partners",
            title: "Partners",
            type: "object",
            fields: [
                defineField({
                    name: "backgroundImage",
                    title: "Background Image",
                    type: "image",
                    options: { hotspot: true },
                }),

                defineField({
                    name: "backgroundImageGradient",
                    title: "Background Image Gradient",
                    type: "image",
                    options: { hotspot: true },
                }),

                defineField({
                    name: "backgroundImageNodes",
                    title: "Background Image Nodes",
                    type: "image",
                    options: { hotspot: true },
                }),

                defineField({
                    name: "partnerImages",
                    title: "Partner Images",
                    type: "array",
                    of: [{ type: "image" }],
                    description: "Carousel of partner logos",
                }),
            ],
        }),
    ],
});
