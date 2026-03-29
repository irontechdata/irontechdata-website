import { defineField, defineType } from "sanity";

export const pageServices = defineType({
  name: "pageServices",
  title: "Services Page",
  type: "document",
  fields: [
    defineField({
      name: "pageTitle",
      title: "Page Title",
      type: "string",
    }),
    defineField({
      name: "hexagonNodeIllustration",
      title: "Hexagon Node Illustration",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "networkNodeIllustration",
      title: "Network Node Illustration (Single Line)",
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
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "illustration",
              title: "Image/Illustration",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "array",
              of: [{ type: "block" }],
            }),
          ],
        },
      ],
    }),
  ],
});
