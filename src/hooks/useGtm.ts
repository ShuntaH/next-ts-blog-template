import { useEffect } from 'react'
import { useRouter } from "next/router";
import { pageview } from "../lib/gtm";

/**
 * Google Tag Manager を使うためのフック
 */
export function useGtm() {
  const router = useRouter()
  useEffect(() => {
    // SSG なので SPAでのページ遷移は考慮しない
    pageview(router.asPath)
  }, [])
}
