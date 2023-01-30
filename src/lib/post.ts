import { Author } from "../interfaces/author";
import { MarkdownData } from "../interfaces/post";

class Post {
  title: string = ''
  date: string = ''
  slug: string = ''
  excerpt: string = ''
  author: Author = { name: '', picture: '' }
  content: string = ''
  ogImage: { url: string } = { url: '' }
  coverImage: string = ''
  time: string = ''
  tags: string[] = []

  constructor(markdownContent: string, markdownData: MarkdownData, slug: string) {
    /**
     * 渡された slug の解析されたマークダウンからそれぞれのデータを入れていく。
     * @param markdownContent 本文
     * @param markdownData
     * @param slug
     */
    this.content = markdownContent
    this.slug = slug
    this.title = markdownData.title
    this.date = markdownData.date
    this.excerpt = markdownData.excerpt
    this.author = markdownData.author
    this.ogImage = markdownData.ogImage
    this.coverImage = markdownData.coverImage
    this.tags = markdownData.tags

    const charLength: number = markdownContent.length

    // 220文字を読むのに1分かかるとする。 hugo のプラグインのロジックを参考にした。
    const charsPerMin = 220

    // 四捨五入する
    const min = Math.round(charLength / charsPerMin)

    this.time = `${min} mins`
  }
}

export default Post
