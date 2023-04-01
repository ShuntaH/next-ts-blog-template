import { promises as fs } from 'fs'
import RSS from 'rss'
import { getAllPosts } from "./api/post";
import { Post } from "../interfaces/post";
import { AUTHOR, BLOG_NAME, FEED_URL, SITE_URL } from "./constants";

export async function generate() {
  const feed = new RSS({
    title: BLOG_NAME,
    site_url: SITE_URL,
    feed_url: FEED_URL,
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

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
