
# next-ts-blog-template
A blog template built using Next.js, TypeScript, Markdown for article management, Chakra UI for styling, client-side full-text search functionality, and SEO optimization.

## Features
- Static Site Generation (SSG) using Next.js for improved performance and SEO optimization.
- Client-side full-text search functionality powered by Fuse, allowing users to easily search through all of the content on the site.
- SEO optimization for improved search engine visibility.

## Technologies Used
- Next.js - a React framework for building server-side rendered and static web applications.
- TypeScript - a statically typed superset of JavaScript that improves code quality and developer productivity.
- Remark - a markdown processor for transforming markdown files into HTML.
- Rehype - a HTML processor for transforming HTML files into React components.
- Chakra UI - a popular React component library for building responsive and accessible user interfaces.
- Fuse - a lightweight fuzzy-search library for client-side full-text search functionality.
- ESLint - a pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- Prettier - an opinionated code formatter for JavaScript, JSON, CSS, YAML, and more.
- Husky - a tool for managing Git hooks.

## Blog Structure
The project structure is based on the following directory setup:

- _md_files directory is the root directory for Markdown files. Articles are created here.
- _posts directory is where the articles are stored. Meta-data such as title, excerpt, status (published flag), publication date, update date, share image URL (empty string for now as images are not yet implemented), and tags should be set.
- _articles directory can be used to create pages like a disclaimer page, which can be placed in the site's footer.
- Constant values like the blog name, search settings, and others should be set in constant.ts.
- The background image should be stored in the public directory and its path should be set in the HOME_IMAGE constant.

## Markdown Syntax
Please refer to the sample markdown file for guidance on how to write your articles.

## Note
The project is built using Next.js v13 but does not use the app directory.

## Getting Started
To use this project, clone the repository and run the following commands:

```bash
npm install
npm run dev
```

This will start the development server at http://localhost:3000. You can then create your articles in the _md_files directory and they will be automatically generated as pages on the site.
