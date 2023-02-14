import { FilteredPost } from "interfaces/post";


export const getFilteredInitialPost = (): FilteredPost => {
  // 新規オブジェクトを返すよう関数にする
  return {
    title: '',
    excerpt: '',
    content: '',
    slug: '',
    tags: []
  }
}


