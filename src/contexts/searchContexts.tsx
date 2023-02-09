import React, { createContext, useContext, useReducer } from 'react';
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

export const FuseProvider = ({ children, fuse }: FuseProviderProps) => (
  <FuseContext.Provider value={fuse}>
    {children}
  </FuseContext.Provider>
)

export const useFuse = () => useContext(FuseContext)

// 検索入力欄の値
const initialValueInput: string = ''

/**
 * 公式のドキュメント
 * ref: https://beta.reactjs.org/learn/scaling-up-with-reducer-and-context
 * では値とそれのdispatch、それぞれ Context を
 * 用意しているが、 Context はほぼ自由に値を取れるので、
 * 値と dispatch を useState の返り値のようにまとめて管理する。
 */
const SearchInputContext = createContext<{
  valueInput: string,
  dispatch: React.Dispatch<SearchInputAction>
}>({
  valueInput: initialValueInput,
  dispatch: () => {}
})

type SearchInputAction = {
  type: 'update'
  valueInput: string
}

const searchInputReducer = (
  valueInput: string,
  action: SearchInputAction
) => {
  switch (action.type) {
    case 'update': {
      // return で値を返す必要がある
      return action.valueInput
    }
    default:
      throw Error('Unknown SearchInputAction: ' + action.type);
  }
}

type SearchInputProviderProps = {
  children: React.ReactNode
}

export const SearchInputProvider = ({ children }: SearchInputProviderProps) => {
  const [ valueInput, dispatch ] = useReducer(
    searchInputReducer,
    initialValueInput
  )

  return (
    <SearchInputContext.Provider
      value={{
        valueInput: valueInput,
        dispatch
    }}>
      {children}
    </SearchInputContext.Provider>
  )
}

export const useSearchInput = () => useContext(SearchInputContext)
