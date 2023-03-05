import { FilteredPost, FilteredPosts, Posts } from "interfaces/post";
import { markdownToPlainText } from "lib/markdown/client";


// 新規オブジェクトを返すよう関数にする
export const getFilteredInitialPost = (): FilteredPost => {
  return {
    title: '',
    excerpt: '',
    content: '',
    slug: '',
    tags: []
  }
}

/**
 * 記事データからそれぞれ、検索対象ではないデータ(slug や time など)
 * は除いて、必要なデータのみから検索用途の記事データを作成する。
 */
export async function getFilteredPosts(allPosts: Posts): Promise<FilteredPosts> {
  return await Promise.all(allPosts.map(async (post) => {
    return {
      ...post,
      content: await markdownToPlainText(post.content),
    }
  }))
}
