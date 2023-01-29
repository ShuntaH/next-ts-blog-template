import { Author } from "../interfaces/author";

class Post {
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
    /**
     * 渡された slug の解析されたマークダウンからそれぞれのデータを入れていく。
     * @param markdownContent 本文
     * @param markdownData
     * @param slug
     */

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

export default Post
