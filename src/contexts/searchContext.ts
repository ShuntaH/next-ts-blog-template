import { createContext } from 'react';
import Fuse from "fuse.js";
import { FilteredPost } from "../interfaces/post";

export const SearchContext = createContext<Fuse<FilteredPost> | null>(null)

// memo: ここに記事を取得するメソッドを作ってはいけない。使用箇所はコンポーネントの中になる想定だが、
// クライアントサイドで処理されるので記事を取得する中の fs が呼べない
// 書いても良いが export してはいけない。

