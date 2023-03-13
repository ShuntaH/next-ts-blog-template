import { BLOG_DESCRIPTION, DEFAULT_OPEN_GRAPH } from 'lib/constants'
import { PageSeo } from 'interfaces/seo'
import { useMemo } from 'react'

// デフォルトの SEO 設定でページごとに変わる部分だけ変更して返す
export function useSeo(title: string, description: string, url: string): PageSeo {
  return useMemo(
    () => {
      const openGraph = { ...DEFAULT_OPEN_GRAPH }
      openGraph.title = title
      openGraph.description = BLOG_DESCRIPTION + description
      openGraph.url = url

      return {
        title,
        description,
        openGraph
      }
    },
    [ title, description, url ]
  )
}
