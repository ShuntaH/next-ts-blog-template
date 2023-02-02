import Fuse from "fuse.js";
import { Post, Posts } from "../interfaces/post";

export const setupSearchOnClientSide = (posts: Posts): Fuse<Post> => {
  const options = {
    includeScore: true,
    keys: [
      "title",
      "excerpt",
      "content",
      "tags"
    ]
  }

  // 検索対象に getAllPosts をそのまま入れてはいけない。
  // node が実行環境のため、クライアントサイドでは記事情報はマークダウンから取得できないし、
  // マークダウンはビルド時に見られるのであって、
  // ビルドされてそれが配信されたブラウザで実行できるべきでもない

  // todo context に入れる
  return new Fuse(posts, options)
}

export const searchOnClientSide = (fuse: Fuse<Post>, text: string = '') => {
  return fuse.search(text)
}
