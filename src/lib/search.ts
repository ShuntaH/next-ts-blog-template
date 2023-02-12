import Fuse from "fuse.js";
import { FilteredPost, FilteredPosts, Posts } from "../interfaces/post";
import { SearchKeys } from "../interfaces/search";


export const getFilteredInitialPost = (): FilteredPost => {
  // 新規オブジェクトを返すよう関数にする
  return {
    title: '',
    excerpt: '',
    content: '',
    slug: '',
    tags: []
  }
}


/**
 * 取得した記事情報と検索オプションを Fuse クラスに渡してインスタン化したものを返す。
 * インスタンスは クライアントサイドに渡せないので、これは クライアントサイドで呼ぶ.
 * 任意の場所で呼べるようにするために、記事取得はこの関数内ではなく、引数として渡す。
 *
 * @param allPosts
 */
export const setupFullTextSearch = (allPosts: Posts): Fuse<FilteredPost> => {
  // 記事データの中で検索対象のデータを指定する
  const keys: SearchKeys[] = [
    "title",
    "excerpt",
    "content",
    "tags",
    "slug"
  ]

  // 全文検索のオプションを指定する
  const options: Fuse.IFuseOptions<FilteredPost> = {
    isCaseSensitive: true, // 大文字・小文字を区別しない
    minMatchCharLength: 2, // ヒット文字数がこれ以上。入力文字数ではない。2の時、1文字入力でも曖昧検索の結果2文字がヒットすれば出る
    findAllMatches: true, // 検索対象が見つかっても最後まで探す
    includeScore: true, // 検索結果と検索クエリとの一致度のスコア
    threshold: 0.2, // どれくらいの一致度か 0だと完全一致
    includeMatches: true, // 一致した場所
    keys
  }


  /**
   * 記事データからそれぞれ、検索対象ではないデータ(slug や time など)
   * は除いて、必要なデータのみから検索用途の記事データを作成する。
   */
  const filteredPosts: FilteredPosts = allPosts.map((post) => {
    const filteredPost: FilteredPost = getFilteredInitialPost()

    keys.forEach((key) => {
      if (key === "tags") {
        // filteredPost[key] だと 配列の参照渡しなので ts 型エラー
        filteredPost.tags = [ ...post[key] ]
        return
      }
      filteredPost[key] = post[key]
    })
    return filteredPost
  })
  return new Fuse(filteredPosts, options)
}
