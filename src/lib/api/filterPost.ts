import { FilteredPost, FilteredPosts, Posts } from "interfaces/post";
import { markdownToPlainText } from "lib/transformMarkdown";

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
    const filteredPost: FilteredPost = getFilteredInitialPost()
    // for で回したいが forEach だと await が使えない。フィールド数も少ないので直接入れている。
    filteredPost.tags = [ ...post.tags ]
    filteredPost.content = await markdownToPlainText(post.content)
    filteredPost.title = post.title
    filteredPost.excerpt = post.excerpt
    filteredPost.slug = post.slug
    return filteredPost
  }))
}
