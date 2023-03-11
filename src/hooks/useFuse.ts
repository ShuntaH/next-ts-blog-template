import { useCallback, useEffect, useState } from "react";
import { FilteredPost, FilteredPosts } from "interfaces/post";
import Fuse from "fuse.js";
import { devLog } from "lib/helpers";
import { FUSE_OPTIONS, SEARCH_MIN_CHARS } from "lib/constants";
import { useSearchInputContext } from "contexts/searchInputContext";
import { useFuseContext } from "contexts/fuseContext";

/**
 * Fuseをセットアップする。
 * Fuse はインスタンスで getStaticProps から コンポーネントに渡せないので、
 * クライアントサイドでセットアップする。
 * @param filteredPosts
 */
export function useSetupFuse(filteredPosts: FilteredPosts) {
  const handleSetupFuse = useCallback(
    () => new Fuse(filteredPosts, FUSE_OPTIONS),
    [ filteredPosts ]
  );
  return handleSetupFuse()
}

// fuseで検索して結果を返す
export function useSearch() {
  // debounce の中で timer を作ると再レンダーの時に前の timer が追えなくなるので以前の
  // setTimeout を止められなくなる。 state で管理する
  const [ timer, setTimer ] = useState<NodeJS.Timeout | undefined>(undefined)
  const [ searchResultPosts, setSearchResultPosts ] = useState<Fuse.FuseResult<FilteredPost>[]>([])
  const { searchInput } = useSearchInputContext()
  const fuse = useFuseContext()

  useEffect(
    () => {
      // 初期レンダーの時はから文字なので検索しない
      searchInput && handleSearch()
    },
    [ searchInput ]
  )

  // 入力値から検索して最新の検索結果に更新する
  const handleSearch = useCallback(() => {
    // 直前のスナップショットでの timer をキャンセルする。
    // useEffect のクリーンアップで clearTimeout はしない。
    // そこですると、作成した NewTimer ではなく、直前の timer をキャンセルするので
    // 新しい入力があった時に NewTimer は cleanTimeout されないため。
    clearTimeout(timer)

    const newTimer = setTimeout(() => {
      devLog([
        "setTimeout called",
        "timer", timer
      ], false)

      if (!fuse || searchInput.length <= SEARCH_MIN_CHARS) {
        // 入力文字数に関わらず更新する。制限すると入力文字数が検索を開始する文字数より少なくても
        // 前の検索結果を残してしまう。
        setSearchResultPosts([])
        return
      }
      const result = fuse.search(searchInput)
      setSearchResultPosts(result)
    }, 300)

    setTimer(newTimer)
  }, [ searchInput ])

  return searchResultPosts
}
