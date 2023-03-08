import React, { createContext, useContext } from "react";
import Fuse from "fuse.js";
import { FilteredPost } from "interfaces/post";
import { getFilteredInitialPost } from "lib/api/filterPost";

// client-side only fuse はサーバーサイドのみ
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
