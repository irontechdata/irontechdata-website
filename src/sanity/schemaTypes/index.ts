import { type SchemaTypeDefinition } from "sanity";
import { pageLanding } from "./pageLanding";
import { siteSettings } from "./siteSettings";
import { header } from "./header";
import { footer } from "./footer";
import { socialLinks } from "./socialLinks";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [pageLanding, siteSettings, header, footer, socialLinks],
};
