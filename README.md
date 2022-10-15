
# hskpg_blog_next_ts

## A statically generated blog using Next.js, Markdown, and TypeScript
Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)! 

```bash
yarn install
```
