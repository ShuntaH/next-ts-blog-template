import { useCallback, useEffect, useState } from "react";
import { getFilteredInitialPost } from "lib/search";
import { FilteredPost, FilteredPosts, Posts } from "interfaces/post";
import Fuse from "fuse.js";
import { SearchKeys } from "interfaces/search";
import { markdownToPlainText } from "lib/transformMarkdown";
import { devLog } from "lib/helpers";

/**
 * 取得した記事情報と検索オプションを Fuse クラスに渡してインスタン化したものを返す。
 * インスタンスは クライアントサイドに渡せないので、これは クライアントサイドで呼ぶ.
 * 任意の場所で呼べるようにするために、記事取得はこの関数内ではなく、引数として渡す。
 *
 * @param allPosts
 */
export function useFuse(allPosts: Posts) {
  const initialPost = getFilteredInitialPost()
  const [ fuse, setFuse ] = useState<Fuse<FilteredPost>>(new Fuse([ initialPost ], {}))

  const setupFullTextSearch = useCallback(async (allPosts: Posts): Promise<Fuse<FilteredPost>> => {
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

        keys.forEach(async (key) => {
          if (key === "tags") {
            filteredPost.tags = [ ...post[key] ]
            return
          }
          filteredPost[key] = post[key]
        })
        return filteredPost
      })

      // promise は foreach の中で使えない。
      // また Promise.all も完全な逐次処理ではない。
      // しかし、contentが最終的に全部変更できていれば良い。
      // 見通しのためと ssg のビルド時に呼ばれるので 複数回 loop しているのは許容するとする。
      await Promise.all(filteredPosts.map(async item => item.content = await markdownToPlainText(item.content)))
      return new Fuse(filteredPosts, options)
    },
    [ allPosts ])

  useEffect(() => {
    (async () => {
      setFuse(await setupFullTextSearch(allPosts))
    })()
    devLog([ 'useFuse called' ])
  }, []);


  return fuse
}
