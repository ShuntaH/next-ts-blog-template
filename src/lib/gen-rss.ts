import { promises as fs } from 'fs'
import RSS from 'rss'
import { getAllPosts } from "./api/post";
import { Post } from "../interfaces/post";
import { AUTHOR, BLOG_DESCRIPTION, BLOG_NAME, FEED_URL, PUBLIC_DIR, SITE_URL } from "./constants";
import { copyright } from "./helpers";

export async function generate() {
  const feed = new RSS({
    title: BLOG_NAME,
    site_url: SITE_URL,
    feed_url: FEED_URL,
    language: 'ja',
    description: BLOG_DESCRIPTION,
    image_url: `${PUBLIC_DIR}/favicon/favicon-32x32.png`,
    copyright: copyright(),
  })

  await Promise.all(
    getAllPosts().map(async (post: Post) => {
      feed.item({
        title: post.title,
        url: `/posts/${post.slug}`,
        date: post.publishedAt,
        description: post.excerpt,
        categories: post.tags,
        author: AUTHOR,
      })
    })
  )

  await fs.writeFile(`${PUBLIC_DIR}/feed.xml`, feed.xml({ indent: true }))
}

generate()
