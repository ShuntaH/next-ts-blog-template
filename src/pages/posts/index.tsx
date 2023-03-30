import { useRouter } from 'next/router'
import { useEffect } from 'react'

/**
 * pages/pages/[page].tsx と中身がおなじなのでリダイレクトする。
 */
export default function PaginatedPage () {
  const router = useRouter()
  useEffect(() => {
    (async () => {
      await router.replace('/pages/1')
    })()
  }, [])
}
