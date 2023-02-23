import React, { createContext, useContext } from "react";
import Fuse from "fuse.js";
import { FilteredPost } from "interfaces/post";
import { getFilteredInitialPost } from "lib/search";

// memo: ここに記事を取得するメソッドを作ってはいけない。使用箇所はコンポーネントの中になる想定だが、
// クライアントサイドで処理されるので記事を取得する中の fs が呼べない
// 書いても良いが export してはいけない。

const FuseContext = createContext<Fuse<FilteredPost>>(new Fuse([getFilteredInitialPost()], {  }))

type FuseProviderProps = {
  children: React.ReactNode
  fuse: Fuse<FilteredPost>
}

/**
 * 全文検索するための fuse インスタンス を children に渡す
 * @param children
 * @param fuse
 * @constructor
 */
export function FuseProvider({ children, fuse }: FuseProviderProps) {
  return (
    <FuseContext.Provider value={fuse}>
      {children}
    </FuseContext.Provider>
  )
}

export const useFuseContext = () => useContext(FuseContext)
