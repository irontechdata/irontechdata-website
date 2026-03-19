import { type SchemaTypeDefinition } from "sanity";
import { pageLanding } from "./pageLanding";
import { siteSettings } from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [pageLanding, siteSettings],
};
