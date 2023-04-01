import { useEffect } from 'react'
import { useRouter } from "next/router";
import { GTM_ID } from "../lib/constants";

declare const window: Window & { dataLayer: Array<Record<string, unknown>> };

/**
 * Google Tag Manager の page view イベントを発火する。
 * google tag manager の設定は「Google アナリティクス:GA4 設定」のタグを作成するだけ。
 */
export function useGTMPageView() {
  const router = useRouter()
  useEffect(() => {
    if (!GTM_ID) return;
    // SSG なので SPAでのページ遷移は考慮しない
    window.dataLayer.push({
      event: 'pageview',
      page: router.asPath,
    })
  }, [])
}
