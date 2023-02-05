import React, { createContext, useContext } from 'react';
import Fuse from "fuse.js";
import { FilteredPost } from "../interfaces/post";

// memo: ここに記事を取得するメソッドを作ってはいけない。使用箇所はコンポーネントの中になる想定だが、
// クライアントサイドで処理されるので記事を取得する中の fs が呼べない
// 書いても良いが export してはいけない。

// 全文検索するための fuse インスタンス
const FuseContext = createContext<Fuse<FilteredPost> | null>(null)

type FuseProviderProps = {
  children: React.ReactNode
  fuse: Fuse<FilteredPost>
}

export const FuseProvider = ({children, fuse}: FuseProviderProps) => (
  <FuseContext.Provider value={fuse}>
    {children}
  </FuseContext.Provider>
)

export const useFuse = () => useContext(FuseContext)

// 検索入力欄の値
const SearchInputContext = createContext('')

type SearchInputProviderProps = {
  children: React.ReactNode
  valueInput: string
}

export const SearchInputProvider = ({children, valueInput}: SearchInputProviderProps) => (
  <SearchInputContext.Provider value={valueInput}>
    {children}
  </SearchInputContext.Provider>
)

export const useSearchInput = () => useContext(SearchInputContext)
