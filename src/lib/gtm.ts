export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID

declare const window: Window & { dataLayer: Array<Record<string, unknown>> };
export const pageview = (url: string) => {
  /*
   * google tag manager のタグとトリガーを設定する。
   * pageview は 「Google アナリティクス:GA4 設定」のタグを作成するだけ。
   * pageview イベントのタグやトリガーは作成不要。
   */
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}
