import { useEffect } from 'react'
import { useRouter } from "next/router";
import { pageview } from "../lib/gtm";

/**
 * 検索モーダルをキーボードイベントで開閉するためのフック
 */
export function useGtm() {
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [ router.events ])
}
