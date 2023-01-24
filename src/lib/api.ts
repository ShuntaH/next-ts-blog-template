import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'


const postsDirectory = join(process.cwd(), 'src', '_posts')

export const getPostSlugs = () => {
  const postSlugs = fs.readdirSync(postsDirectory)
  console.log('postSlugs', postSlugs)
  return fs.readdirSync(postsDirectory)
}

export const getPostBySlug = (slug: string, fields: string[] = []) => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export const getAllPosts = (fields: string[] = []) => {
  const slugs = getPostSlugs() // [ 'hoge.md', 'hello-world.md' ]
  return slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}
