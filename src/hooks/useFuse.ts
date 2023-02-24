import { useCallback, useEffect, useState } from "react";
import { FilteredPost, FilteredPosts } from "interfaces/post";
import Fuse from "fuse.js";
import { devLog } from "lib/helpers";
import { FUSE_OPTIONS, SEARCH_MIN_CHARS } from "lib/constants";
import { useSearchInput } from "contexts/searchInputContext";
import { useFuseContext } from "contexts/fuseContext";

/**
 * 取得した記事情報と検索オプションを Fuse クラスに渡してインスタン化したものを返す。
 * インスタンスは クライアントサイドに渡せないので、これは クライアントサイドで呼ぶ.
 * 任意の場所で呼べるようにするために、記事取得はこの関数内ではなく、引数として渡す。
 *
 * @param filteredPosts
 */
export function useSetupFuse(filteredPosts: FilteredPosts) {
  const handleSetupFuse = useCallback(
    () => {
      return new Fuse(filteredPosts, FUSE_OPTIONS)
    },
    [ filteredPosts ]
  );

  devLog([ "useSetupFuse called" ])
  return handleSetupFuse()
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
