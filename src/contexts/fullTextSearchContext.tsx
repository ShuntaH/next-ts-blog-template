import React, { createContext, useContext } from "react";
import Fuse from "fuse.js";
import { FilteredPost } from "interfaces/post";

// memo: ここに記事を取得するメソッドを作ってはいけない。使用箇所はコンポーネントの中になる想定だが、
// クライアントサイドで処理されるので記事を取得する中の fs が呼べない
// 書いても良いが export してはいけない。

const FullTextSearchContext = createContext<Promise<Fuse<FilteredPost>> | null>(null)

type FullTextSearchProviderProps = {
  children: React.ReactNode
  fuse: Promise<Fuse<FilteredPost>>
}

/**
 * 全文検索するための fuse インスタンス を children に渡す
 * @param children
 * @param fuse
 * @constructor
 */
export const FullTextSearchProvider: React.FC<FullTextSearchProviderProps> = ({ children, fuse }) => (
  <FullTextSearchContext.Provider value={fuse}>
    {children}
  </FullTextSearchContext.Provider>
)

export const useFullTextSearch = () => useContext(FullTextSearchContext)
