/**
 * ポストの中から全文検索の対象となるデータの種類
 */
export const BadgeColors = {
  title: "cyan",
  excerpt: 'green',
  content: 'yellow',
  tags: 'pink',
  slug: 'gray'
}
export type SearchKeys = keyof typeof BadgeColors
export type BadgeColorValues = typeof BadgeColors[keyof typeof BadgeColors]
