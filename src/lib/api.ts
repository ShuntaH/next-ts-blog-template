import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'


const postsDirectory = join(process.cwd(), 'src', '_posts')

/**
 * 記事を格納しているディレクトリにあるファイル名を全て取得する
 * e.g.
 * postSlugs [ 'dynamic-routing.md', 'hello-world.md', 'preview.md' ]
 */
export const getPostSlugs = () => {
  const postSlugs = fs.readdirSync(postsDirectory)
  return fs.readdirSync(postsDirectory)
}

/**
 * ファイル名からそのファイルの中身を取得する。
 *
 * @param slug マークダウンファイルの名前
 * @param fields
 */
export const getPostBySlug = (slug: string, fields: string[] = []) => {
  // slug 'hoge.md'
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)

  // md の中身を全て取得する
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // data に --- --- の内容、content に本文が入る
  const { data, content } = matter(fileContents)
  console.log('data', data)

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

    if (field === 'time') {
      const charLength: number = content.length

      // 220文字を読むのに1分かかるとする。 hugo のプラグインのロジックを参考にした。
      const charsPerMin = 220

      // 四捨五入する
      const min = Math.round(charLength / charsPerMin)

      items[field] = `${min} mins`
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  console.log('items', items)
  return items
}

/**
 * 解析された状態のマークダウンの記事を全て取得して、
 * 記事の日付をもとにソートして返す。
 * @param fields
 */
export const getAllPosts = (fields: string[] = []) => {
  const slugs = getPostSlugs() // [ 'hoge.md', 'hello-world.md' ]
  return slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}
