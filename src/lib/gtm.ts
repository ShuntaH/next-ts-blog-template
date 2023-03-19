export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID

declare const window: Window & { dataLayer: Array<Record<string, unknown>>; };
export const pageview = (url: string) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}
