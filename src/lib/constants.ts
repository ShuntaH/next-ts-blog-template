import { ThemeTypings } from "@chakra-ui/styled-system";
import { join } from "path";
import Fuse from "fuse.js";
import { FilteredPost } from "interfaces/post";
import { SearchKeys } from "interfaces/search";
import { DefaultSeoProps } from "next-seo";

const HOME_IMAGE = "/assets/hongkong-bg.png";
export const HOME_OG_IMAGE_URL = HOME_IMAGE
export const BLOG_NAME = 'hskpg blog'
export const BLOG_DESCRIPTION = "hskpg's tech and daily life blog"

// pagination
export const POST_COUNT_PER_PAGE = 10

// search
export const SEARCH_MIN_CHARS = 2
export const SEARCH_CHAR_DISTANCE_IN_VALUE = 15 // 全文検索対象の単語が複数近く見つかった時、何文字の間隔まで1hitとみなすか
export const SEARCH_CHAR_NUMBER_AROUND_IN_VALUE = 20 // 全文検索対象の単語の前後の何文字を表示するか
export const SEARCH_KEYS: SearchKeys[] = [
  "title",
  "excerpt",
  "content",
  "tags",
  "slug"
]

// fuse
export const FUSE_OPTIONS: Fuse.IFuseOptions<FilteredPost> = {
  isCaseSensitive: true, // 大文字・小文字を区別しない
  minMatchCharLength: 2, // ヒット文字数がこれ以上。入力文字数ではない。2の時、1文字入力でも曖昧検索の結果2文字がヒットすれば出る
  findAllMatches: true, // 検索対象が見つかっても最後まで探す
  includeScore: true, // 検索結果と検索クエリとの一致度のスコア
  threshold: 0.2, // どれくらいの一致度か 0だと完全一致
  includeMatches: true, // 一致した場所
  keys: SEARCH_KEYS // 検索対象のキー
}

// blur background image src
export const BACKGROUND_IMAGE_PATH = HOME_IMAGE

// markdown file path
const file_base_path = join(process.cwd(), '_md_files')
export const POST_DIRECTORY_PATH = join(file_base_path, '_posts')
export const ARTICLE_DIRECTORY_PATH = join(file_base_path, '_articles')

// TOC hook
export const TOC_HEADING = 'お品書き'

// Style
/**
 * todo chakra ui で css var の定義がいまいち上手く書けないので js でかく。
 */
const gap = '24px'
const gapSm = '10px'
const navWidth = '1024px'
const mainWidth = '720px'
const headerHeight = '60px'
const footerHeight = '60px'
const radius = '8px'
const contentMaxWidth = `calc(${mainWidth} + ${gap} * 2)`
const contentGap = '20px'
const navMaxWidth = `calc(${navWidth} + ${gap} * 2)`
const baseColorScheme: ThemeTypings["colorSchemes"] = 'blue'
const color: ThemeTypings["colors"] = `${baseColorScheme}.300`
const colorLight: ThemeTypings["colors"] = `${baseColorScheme}.200`
const colorLighter: ThemeTypings["colors"] = `${baseColorScheme}.50`
const baseTextColor: ThemeTypings["colorSchemes"] = 'gray'
const textColor: ThemeTypings["colors"] = `${baseTextColor}.50`
const textColorDark: ThemeTypings["colors"] = `${baseTextColor}.100`
const textColorDarker: ThemeTypings["colors"] = `${baseTextColor}.400`

const baseHoverStyle = {
  textDecoration: 'none'
}
const hoverLightStyle = {
  ...baseHoverStyle,
  color: colorLight
}
const hoverLighterStyle = {
  ...baseHoverStyle,
  color: colorLighter
}

export const STYLES = {
  gap,
  gapSm,
  navWidth,
  mainWidth,
  contentGap,
  contentMaxWidth,
  headerHeight,
  footerHeight,
  navMaxWidth,
  radius,
  baseColorScheme,
  color,
  colorLight,
  colorLighter,
  textColor,
  textColorDark,
  textColorDarker,
  baseHoverStyle,
  hoverLightStyle,
  hoverLighterStyle
}

// SEO
export const DEFAULT_SEO: DefaultSeoProps = {
  title: BLOG_NAME,
  titleTemplate: '%s | ' + BLOG_NAME,
  defaultTitle: 'Page',
  description: BLOG_DESCRIPTION,
  additionalLinkTags: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon/icon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon/icon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicon/apple-touch-icon-180x180.png',
    },
    {
      rel: 'manifest',
      href: '/favicon/manifest.json',
    }
  ],
  twitter: {
    cardType: 'summary_large_image',
  },
  openGraph: {
    url: 'https://blog.hskpg.site',
    type: 'website',
    locale: 'ja_JP',
    siteName: BLOG_NAME,
    title: BLOG_NAME,
    description: BLOG_DESCRIPTION,
    images: [
      {
        url: HOME_OG_IMAGE_URL,
        width: 800,
        height: 600,
        alt: BLOG_NAME + ' Og Image Alt',
      },
      {
        url: '/assets/icon.png',
        width: 800,
        height: 600,
        alt: BLOG_NAME + ' Og Image Alt',
      },
    ],
    profile: {
      username: 'hskpg',
    },
  },
};

