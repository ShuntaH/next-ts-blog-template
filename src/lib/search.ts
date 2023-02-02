import Fuse from "fuse.js";
import { FilteredPost, FilteredPosts, Post, Posts } from "../interfaces/post";

type Keys = [ "title", "excerpt", "content", "tags" ]


export const setupSearchOnClientSide = (posts: Posts): Fuse<FilteredPost> => {
  const keys: Keys = [
    "title",
    "excerpt",
    "content",
    "tags"
  ]

  const options = {
    isCaseSensitive: true,
    minMatchCharLength: 2,
    findAllMatches: true,
    keys
  }

  const filteredPosts: FilteredPosts = posts.map((post) => {
    const filteredPost: FilteredPost = {
      title: '',
      excerpt: '',
      content: '',
      tags: []
    }

    keys.forEach((key) => {
      if (key === "tags") {
        // filteredPost[key] だとエラー
        filteredPost.tags = post[key]
        return
      }
      filteredPost[key] = post[key]
    })

    return filteredPost
  })


  // 検索対象に getAllPosts をそのまま入れてはいけない。
  // node が実行環境のため、クライアントサイドでは記事情報はマークダウンから取得できないし、
  // マークダウンはビルド時に見られるのであって、
  // ビルドされてそれが配信されたブラウザで実行できるべきでもない
  // todo contexts に入れる
  return new Fuse(filteredPosts, options)
}

export const searchOnClientSide = (
  fuse: Fuse<Post>,
  text: string = ''
) => {
  return fuse.search(text)
}
