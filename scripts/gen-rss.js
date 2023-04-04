const {promises: fs} = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')
const blogName = 'Demo Blog'

/**
 * RSSフィードを生成する。SSGで生成するので、ビルド前に実行する。
 * ビルドごとに新しいRSSフィードが作成される。
 * @returns {Promise<void>}
 */
async function generate() {
  const feed = new RSS({
    title: blogName,
    site_url: 'https://next-ts-blog-template.vercel.app',
    feed_url: 'https://next-ts-blog-template.vercel.app/feed.xml',
    language: 'ja',
    description: "This is a Next.js blog focusing on technology topics such as software development, data science, AI," +
      " blockchain, and more. We aim to share knowledge on technical challenges to contribute to" +
      " a better world.",
    image_url: path.join(__dirname, '..', 'public', 'favicon', 'favicon-32x32.png'),
    copyright: `© ${new Date().getFullYear()} ${blogName}`,
  })

  const slugs = await fs.readdir(path.join(__dirname, '..', '_md_files', '_posts'))

  await Promise.all(
    slugs.map(async (slug) => {
      const cleanedSlug = slug.replace(/\.md$/, '')
      const fullPath = path.join(__dirname, '..', '_md_files', '_posts', `${cleanedSlug}.md`)
      const content = await fs.readFile(fullPath, 'utf8') // utf8で読み込む
      const frontmatter = matter(content) // data部分を取得

      const item = {
        title: frontmatter.data.title,
        url: `/posts/${cleanedSlug}`,
        date: frontmatter.data.updatedAt,
        description: frontmatter.data.excerpt,
        categories: frontmatter.data.tags,
      }
      console.log('------------------------------------');
      console.log(`Adding ${item.title} to RSS feed`);
      feed.item(item)
    })
  )

  await fs.writeFile(
    './public/feed.xml',
    feed.xml({indent: true}),
  )
  console.log('------------------------------------');
  await console.log('RSS feed generated!')
}

console.log('Generating RSS feed...')
console.log('------------------------------------');
generate()

