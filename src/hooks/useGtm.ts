import { useEffect } from 'react'
import { useRouter } from "next/router";
import { pageview } from "../lib/gtm";

/**
 * Google Tag Manager を使うためのフック
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
