import { useCallback, useEffect, useState } from "react";
import { FilteredPost, FilteredPosts } from "interfaces/post";
import Fuse from "fuse.js";
import { devLog } from "lib/helpers";
import { FUSE_OPTIONS, SEARCH_MIN_CHARS } from "lib/constants";
import { useSearchInputContext } from "contexts/searchInputContext";
import { useFuseContext } from "contexts/fuseContext";

/**
 * Fuseをセットアップする。
 * Fuse はインスタンスで getStaticProps から コンポーネントに渡せないので、クライアントサイドでセットアップする。
 * @param filteredPosts
 */
export function useSetupFuse(filteredPosts: FilteredPosts) {
  const handleSetupFuse = useCallback(
    () => new Fuse(filteredPosts, FUSE_OPTIONS),
    [ filteredPosts ]
  );
  devLog([ "useSetupFuse called" ])
  return handleSetupFuse()
}

// fuseで検索して結果を返す
export function useSearch() {
  const [ prevTimer, setPrevTimer ] = useState<NodeJS.Timeout | undefined>(undefined)
  const [ searchResultPosts, setSearchResultPosts ] = useState<Fuse.FuseResult<FilteredPost>[]>([])
  const { searchInput } = useSearchInputContext()
  const fuse = useFuseContext()

  // 入力値から検索して最新の検索結果に更新する
  const handleSearch = useCallback(() => {
    clearTimeout(prevTimer)
    const currentTimer = setTimeout(() => {
      devLog([ 'timer in settimeout', `${prevTimer}` ])
      devLog([ 'input in settimeout', `${searchInput}` ])
      if (!fuse || searchInput.length < SEARCH_MIN_CHARS) {
        setSearchResultPosts([])
        return
      }
      const result = fuse.search(searchInput)
      setSearchResultPosts(result)
    }, 1000)
    devLog([ 'current timer', `${currentTimer}` ])
    setPrevTimer(currentTimer)
  }, [ searchInput ])

  // const handleSearchDebounced = debounce(
  //   () => {
  //     handleSearch()
  //     devLog([ 'useEffect handleSearch called', `input: ${searchInput}` ])
  //   },
  //   1000
  // )


  useEffect(
    () => {
      // 入力文字数に関わらず更新する。制限すると入力文字数が検索を開始する文字数より少なくても
      // 前の検索結果を残してしまう。
      handleSearch()
    },
    [ searchInput ]
  )

  return searchResultPosts
}
