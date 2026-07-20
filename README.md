# Iron Tech Data Website

This is the official website for **Iron Tech Data**, built with modern web technologies: Next.js (App Router), React 19, Sanity CMS, Resend (for contact forms), Tailwind CSS v4, and Motion.

---

## 📋 Prerequisites

Before setting up the repository, make sure you have the following installed:
- **Node.js** (v20+ recommended)
- **pnpm** (preferred package manager)

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

### 1. Install Dependencies
Install the required package dependencies using `pnpm`:
```bash
pnpm install
```

### 2. Configure Environment Variables
Copy the example environment variables file to create your local environment configuration:
```bash
cp .env.example .env.local
```
Then, open `.env.local` and populate the keys:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`: Your Sanity project ID.
- `NEXT_PUBLIC_SANITY_DATASET`: The dataset environment name (e.g., `production`).
- `RESEND_API_KEY`: API key for email delivery via Resend.
- `NEXT_PUBLIC_SITE_URL`: Root site URL (default: `http://localhost:3000`).

### 3. Generate Sanity Types (Important)
This project uses **Sanity Typegen** to automatically generate TypeScript types from the Sanity schemas and queries. If you make schema changes, or need to initialize types for the first time, run:
```bash
pnpm sanityGenerate
```
This runs a two-step script under the hood:
1. `sanity schema extract` — Extracts the Sanity schema layout.
2. `sanity typegen generate` — Translates the schema into type definitions in `sanity.types.ts`.

### 4. Run the Development Server
Start the local development server:
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🛠️ Commands Reference

The following scripts are defined in `package.json`:

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Runs the Next.js local development server. |
| `pnpm build` | Compiles the production build. |
| `pnpm start` | Runs the compiled Next.js production build locally. |
| `pnpm lint` | Runs ESLint analysis on the code. |
| `pnpm schema` | Extracts Sanity schema definition into `schema.json`. |
| `pnpm typegen` | Generates TypeScript definitions from schema queries. |
| `pnpm sanityGenerate` | Combines `schema` and `typegen` commands to sync TS types. |

---

## 📁 Project Structure

* **`src/app/`**: Application routes and pages (Next.js App Router).
* **`src/components/`**: Reusable React components (e.g., landing sections, forms, layout elements).
* **`src/sanity/`**: Sanity client settings, configuration, and schema schema definitions.
* **`src/lib/`**: Shared schemas (e.g., zod validation schemas) and helper utilities.
* **`public/`**: Static assets like images and SVG icons.
