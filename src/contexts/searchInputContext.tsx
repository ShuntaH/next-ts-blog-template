import React, { createContext, useContext, useReducer } from 'react'
// 全文検索のために入力欄に打ち込まれている文字の管理と更新をする

// 検索入力欄の値
const initialSearchInput: string = ''

/**
 * 公式のドキュメント
 * ref: https://beta.reactjs.org/learn/scaling-up-with-reducer-and-context
 * では値とそれのdispatch、それぞれ Context を
 * 用意しているが、 Context はほぼ自由に値を取れるので、
 * 値と dispatch を useState の返り値のようにまとめて管理する。
 */
const SearchInputContext = createContext<{
  searchInput: string
  dispatch: React.Dispatch<SearchInputAction>
}>({
  // グローバルに管理したい状態
  searchInput: initialSearchInput,
  // グローバルでグローバルで管理したい状態を変更する dispatch
  dispatch: () => {}
})

interface SearchInputAction {
  type: 'update'
  searchInput: string
}

const searchInputReducer = (
  prevSearchInput: string,
  action: SearchInputAction
) => {
  switch (action.type) {
    case 'update': {
      // return で値を返す必要がある
      return action.searchInput
    }
    default:
      throw Error('Unknown SearchInputAction: ' + action.type)
  }
}

interface SearchInputProviderProps {
  children: React.ReactNode
}

export const SearchInputProvider = ({ children }: SearchInputProviderProps) => {
  const [searchInput, dispatch] = useReducer(
    // 更新するための関数
    searchInputReducer,
    // 検索入力の初期値
    initialSearchInput
  )

  return (
    <SearchInputContext.Provider value={{ searchInput, dispatch }}>
      {children}
    </SearchInputContext.Provider>
  )
}

export const useSearchInputContext = () => useContext(SearchInputContext)
