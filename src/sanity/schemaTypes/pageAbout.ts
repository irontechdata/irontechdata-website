import { defineField, defineType } from "sanity";

export const pageAbout = defineType({
  name: "pageAbout",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "pageTitle",
      title: "Page Title",
      type: "string",
    }),

    // 1. COMPANY OVERVIEW
    defineField({
      name: "companyOverview",
      title: "Company Overview",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({
          name: "description",
          title: "Description",
          type: "array",
          of: [{ type: "block" }],
        }),
        defineField({
          name: "mainIllustration",
          title: "Main Illustration",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "hexagonNodeIllustration",
          title: "Hexagon Node Illustration",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "backgroundImage",
          title: "Background Image",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),

    // 2. MISSION & VISION
    defineField({
      name: "missionVision",
      title: "Mission & Vision",
      type: "object",
      fields: [
        defineField({
          name: "mission",
          title: "Mission",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
            defineField({ name: "icon", title: "Icon", type: "image" }),
          ],
        }),
        defineField({
          name: "vision",
          title: "Vision",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
            defineField({ name: "icon", title: "Icon", type: "image" }),
          ],
        }),
        defineField({
          name: "backgroundImage",
          title: "Background Image (Overlay Illustration)",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),

    // 3. WHAT WE DO / OUR APPROACH
    defineField({
      name: "whatWeDoSection",
      title: "What We Do & Our Approach",
      type: "object",
      fields: [
        defineField({
          name: "whatWeDo",
          title: "What We Do",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "array",
              of: [{ type: "block" }],
            }),
          ],
        }),
        defineField({
          name: "ourApproach",
          title: "Our Approach",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "array",
              of: [{ type: "block" }],
            }),
          ],
        }),
        defineField({
          name: "whyChoose",
          title: "Why Choose IrontechData",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "items",
              title: "Items",
              type: "array",
              of: [{ type: "block" }],
            }),
          ],
        }),
        defineField({
          name: "mainIllustration",
          title: "Main Illustration",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "hexagonNodeIllustration",
          title: "Hexagon Node Illustration",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "backgroundImage",
          title: "Background Image",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),

    // 4. TARGET CUSTOMERS & COMMITMENT
    defineField({
      name: "customersCommitment",
      title: "Target Customers & Our Commitment",
      type: "object",
      fields: [
        defineField({
          name: "targetCustomers",
          title: "Target Customers",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
          ],
        }),
        defineField({
          name: "ourCommitment",
          title: "Our Commitment",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
          ],
        }),

        defineField({
          name: "graphic",
          title: "Graphic Cluster",
          type: "image",
        }),
      ],
    }),

    // 5. COMPANY INFORMATION
    defineField({
      name: "companyInformation",
      title: "Company Information",
      type: "object",
      fields: [
        defineField({
          name: "logo",
          title: "Logo",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "companyName",
          title: "Company Name",
          type: "string",
        }),
        defineField({ name: "brandName", title: "Brand Name", type: "string" }),
        defineField({ name: "industry", title: "Industry", type: "string" }),
        defineField({ name: "coreFocus", title: "Core Focus", type: "string" }),
        defineField({
          name: "backgroundImage",
          title: "Background Image",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "hexagonNodeIllustration",
          title: "Hexagon Node Illustration",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
  ],
});
