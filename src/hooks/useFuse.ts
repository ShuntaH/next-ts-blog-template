import { useCallback, useEffect, useState } from "react";
import { getFilteredInitialPost } from "lib/search";
import { FilteredPost, FilteredPosts, Posts } from "interfaces/post";
import Fuse from "fuse.js";
import { markdownToPlainText } from "lib/transformMarkdown";
import { devLog } from "lib/helpers";
import { FUSE_OPTIONS, SEARCH_KEYS, SEARCH_MIN_CHARS } from "lib/constants";
import { useSearchInput } from "contexts/searchInputContext";
import { useFuseContext } from "contexts/fuseContext";

/**
 * 取得した記事情報と検索オプションを Fuse クラスに渡してインスタン化したものを返す。
 * インスタンスは クライアントサイドに渡せないので、これは クライアントサイドで呼ぶ.
 * 任意の場所で呼べるようにするために、記事取得はこの関数内ではなく、引数として渡す。
 *
 * @param allPosts
 */
export function useSetupFuse(allPosts: Posts) {
  const initialPost = getFilteredInitialPost()
  const [ fuse, setFuse ] = useState<Fuse<FilteredPost>>(new Fuse([ initialPost ], {}))
  const setup = useCallback(
    async (allPosts: Posts): Promise<Fuse<FilteredPost>> => {

      /**
       * 記事データからそれぞれ、検索対象ではないデータ(slug や time など)
       * は除いて、必要なデータのみから検索用途の記事データを作成する。
       */
      const filteredPosts: FilteredPosts = allPosts.map((post) => {
        const filteredPost: FilteredPost = getFilteredInitialPost()

        SEARCH_KEYS.forEach(async (key) => {
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
      await Promise.all(
        filteredPosts.map(
          async item => {
            item.content = await markdownToPlainText(item.content)
          }))
      return new Fuse(filteredPosts, FUSE_OPTIONS)
    },
    [ allPosts ])

  useEffect(() => {
    (async () => {
      setFuse(await setup(allPosts))
    })()
    devLog([ 'useFuse called' ])
  }, [ allPosts ]);

  return fuse
}

// fuseで検索して結果を返す
export function useSearch() {
  const [ searchResultPosts, setSearchResultPosts ] = useState<Fuse.FuseResult<FilteredPost>[]>([])
  const { searchInput, dispatch } = useSearchInput()
  const fuse = useFuseContext()

  /**
   * 入力値から検索して最新の検索結果に更新する
   */
  const handleSearch = useCallback(() => {
    if (!fuse || searchInput.length < SEARCH_MIN_CHARS) {
      setSearchResultPosts([])
      return
    }

    const result = fuse.search(searchInput)
    setSearchResultPosts(result)
  }, [ searchInput ])

  useEffect(
    () => {
      // 入力文字数に関わらず更新する。制限すると入力文字数が検索を開始する文字数より少なくても
      // 前の検索結果を残してしまう。
      handleSearch()
      devLog([ 'search called', searchResultPosts ])
    },
    [ searchInput ]
  )

  return searchResultPosts
}
