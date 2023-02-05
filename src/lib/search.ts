import Fuse from "fuse.js";
import { FilteredPost, FilteredPosts, Post, Posts } from "../interfaces/post";

type Keys = [ "title", "excerpt", "content", "tags" ]

export const getFilteredInitialPost = (): FilteredPost => {
  // 新規オブジェクトを返すよう関数にする
  return {
    title: '',
    excerpt: '',
    content: '',
    tags: []
  }
}
/**
 * 取得した記事情報と検索オプションを Fuse クラスに渡してインスタン化したものを返す。
 * 記事取得は fs の実行環境が node のため、サーバーサイドでするのに注意する。
 * 任意の場所で呼べるようにするために、記事取得はこの関数内ではなく、引数として渡す。
 *
 * @param allPosts
 */
export const setupFullTextSearch = (allPosts: Posts): Fuse<FilteredPost> => {
  // 記事データの中で検索対象のデータを指定する
  const keys: Keys = [
    "title",
    "excerpt",
    "content",
    "tags"
  ]

  // 全文検索のオプションを指定する
  const options = {
    isCaseSensitive: true,
    minMatchCharLength: 2,
    findAllMatches: true,
    keys
  }

  const filteredPosts: FilteredPosts = allPosts.map((post) => {
    // 記事データからそれぞれ、検索対象ではないデータ(slug や time など)
    // は除いて、必要なデータのみから検索用途の記事データを作成する。

    const filteredPost: FilteredPost = getFilteredInitialPost()

    keys.forEach((key) => {
      if (key === "tags") {
        // filteredPost[key] だと ts 型エラー
        // todo 直したい
        filteredPost.tags = post[key]
        return
      }
      filteredPost[key] = post[key]
    })

    return filteredPost
  })

  // todo contexts に入れる
  return new Fuse(filteredPosts, options)
}

/**
 * 検索を実際にして結果を返す。
 * @param fuse 検索機能のセットアップが終わっているインスタンス
 * @param text 検索したい文字列
 */
export const fullTextSearch = (
  fuse: Fuse<Post>,
  text: string = ''
) => fuse.search(text)
