import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { Post, Posts } from "../interfaces/post";
import Author from "../interfaces/author";


class PostClass {
  title: string = ''
  date: string = ''
  slug: string = ''
  excerpt: string = ''
  author: Author = null
  content: string = ''
  ogImage: { url: string } = null
  coverImage: string = ''
  time: string = ''
  tags: string[] = []

  constructor(markdownContent: string, markdownData: {}, slug: string) {
    const props: string[] = Object.getOwnPropertyNames(this)

    props.forEach((prop) => {
      if (prop === 'time') {
        const charLength: number = markdownContent.length

        // 220文字を読むのに1分かかるとする。 hugo のプラグインのロジックを参考にした。
        const charsPerMin = 220

        // 四捨五入する
        const min = Math.round(charLength / charsPerMin)

        this[prop] = `${min} mins`
        return;
      }

      if (prop === 'content') {
        this[prop] = markdownContent
        return;
      }

      if (prop === 'slug') {
        this[prop] = slug
        return;
      }

      if (typeof markdownData[prop] !== 'undefined') {
        this[prop] = markdownData[prop]
        return;
      }

      throw new Error(`"${prop}" does not exist in markdownData.`);

    })
  }
}

const postsDirectory = join(process.cwd(), 'src', '_posts')

/**
 * 記事を格納しているディレクトリにあるファイル名を全て取得する
 * e.g.
 * postSlugs [ 'dynamic-routing.md', 'hello-world.md', 'preview.md' ]
 */
export const getPostSlugs = (): string[] => {
  return fs.readdirSync(postsDirectory)
}

/**
 * ファイル名からそのファイルの中身を取得する。
 *
 * @param slug マークダウンファイルの名前
 * @param fields
 */
export const getPostBySlug = (slug: string, fields: string[] = []): Post => {
  // slug 'hoge.md'
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)

  // md の中身を全て取得する
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // data に --- --- の内容、content に本文が入る
  const { data, content } = matter(fileContents)

  // Ensure only the minimal needed data is exposed
  const post = new PostClass(content, data, slug)
  console.log('post class', post)
  return {
    title: post.title,
    date: post.date,
    slug: post.slug,
    excerpt: post.excerpt,
    author: post.author,
    content: post.content,
    ogImage: post.ogImage,
    coverImage: post.coverImage,
    time: post.time,
    tags: post.tags
  }
}

/**
 * 解析された状態のマークダウンの記事を全て取得して、
 * 記事の日付をもとにソートして返す。
 * @param fields
 */
export const getAllPosts = (fields: string[] = []): Posts => {
  const slugs: string[] = getPostSlugs() // [ 'hoge.md', 'hello-world.md' ]
  return slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}
