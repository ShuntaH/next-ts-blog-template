
# next-ts-blog-template
A blog template using Next.js, TypeScript, Markdown, Chakra UI, client-side search, and SEO optimization.

## DEMO
→　[DEMO SITE](https://next-ts-blog-template.vercel.app/ "DEMO")

## Features
- Static Site Generation (SSG)
- Client-side full-text search
- SEO optimization
- Responsive and accessible UI with Chakra UI
- RSS feed
- Google Analytics pageview tracking with Google Tag Manager


## Technologies Used
- Next.js
- TypeScript
- Remark
- Rehype
- Chakra UI
- Fuse
- ESLint
- Prettier
- Husky

## Blog Structure
The project structure is based on the following directory setup:

- `_md_files`: Markdown files
- `_posts`: Article metadata
- `_articles`: Static pages (e.g. disclaimer)
- `constant.ts`: Configuration values
- `public`: Background images, favicons, etc.

## Markdown Syntax
Refer to the sample markdown file for article writing.
[the sample page](https://next-ts-blog-template.vercel.app/posts/how-to-write-md-en, "the sample page")

## Note
The project is built using Next.js v13 but does not use the app directory.

## Usage
Clone the repository and run:

```bash
npm install
npm run dev
```

Visit http://localhost:3000 and create articles in the _md_files directory.

Don't forget to add your Google Tag Manager container ID to the `env.local` file for Google Analytics integration.
