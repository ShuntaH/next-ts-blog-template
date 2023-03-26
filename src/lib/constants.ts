import { ThemeTypings } from '@chakra-ui/styled-system'
import { join } from 'path'
import Fuse from 'fuse.js'
import { FilteredPost } from 'interfaces/post'
import { SearchKeys } from 'interfaces/search'
import { DefaultSeoProps } from 'next-seo'
import { OpenGraph } from 'next-seo/lib/types'
import { NavigationIcon } from "../interfaces/icon";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

const HOME_IMAGE = '/assets/background-image.jpeg'
export const HOME_OG_IMAGE_URL = HOME_IMAGE
export const BLOG_NAME = 'Demo Blog'
export const BLOG_DESCRIPTION = "This is a Next.js blog focusing on technology topics such as software development, data science, AI, blockchain, and more. We aim to share knowledge on technical challenges to contribute to a better world."

// pagination
export const POST_COUNT_PER_PAGE = 10

// search options
export const SEARCH_MIN_CHARS = 2
export const SEARCH_CHAR_DISTANCE_IN_VALUE = 15 // 全文検索対象の単語が複数近く見つかった時、何文字の間隔まで1hitとみなすか
export const SEARCH_CHAR_NUMBER_AROUND_IN_VALUE = 20 // 全文検索対象の単語の前後の何文字を表示するか
export const SEARCH_KEYS: SearchKeys[] = [
  'title',
  'excerpt',
  'content',
  'tags',
  'slug'
]
export const SEARCH_FORM_PLACEHOLDER = 'Full text search'

// fuse options
export const FUSE_OPTIONS: Fuse.IFuseOptions<FilteredPost> = {
  isCaseSensitive: true, // 大文字・小文字を区別しない
  minMatchCharLength: 2, // ヒット文字数がこれ以上。入力文字数ではない。2の時、1文字入力でも曖昧検索の結果2文字がヒットすれば出る
  findAllMatches: true, // 検索対象が見つかっても最後まで探す
  includeScore: true, // 検索結果と検索クエリとの一致度のスコア
  threshold: 0.1, // どれくらいの一致度か 0だと完全一致していないとヒットしない
  distance: 100000, // 難しいのでドキュメント参照すること。多めに設定しないと文章の後半がヒットしない。
  includeMatches: true, // 一致した場所
  keys: SEARCH_KEYS // 検索対象のキー
}

// blur background image src
export const BACKGROUND_IMAGE_PATH = HOME_IMAGE

// markdown file path
const FILE_PATH = join(process.cwd(), '_md_files')
export const POST_DIRECTORY_PATH = join(FILE_PATH, '_posts')
export const ARTICLE_DIRECTORY_PATH = join(FILE_PATH, '_articles')

// KEY
export const ACTION_KEY_DEFAULT = [ 'Ctrl', 'Control' ]
export const ACTION_KEY_APPLE = [ '⌘', 'Command' ]
export const HOT_KEY_DEFAULT = 'ctrlKey'
export const HOT_KEY_APPLE = 'metaKey'

// TOC hook
export const TOC_HEADING = 'お品書き'

// rehypeAutolinkHeadings
export const HEADING_LINK_ICON_CLASSNAME = 'heading-link-icon'

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
const baseColorScheme: ThemeTypings['colorSchemes'] = 'blue'
const color: ThemeTypings['colors'] = `${baseColorScheme}.300`
const colorLight: ThemeTypings['colors'] = `${baseColorScheme}.200`
const colorLighter: ThemeTypings['colors'] = `${baseColorScheme}.50`
const baseTextColor: ThemeTypings['colorSchemes'] = 'gray'
const textColor: ThemeTypings['colors'] = `${baseTextColor}.50`
const textColorDark: ThemeTypings['colors'] = `${baseTextColor}.100`
const textColorDarker: ThemeTypings['colors'] = `${baseTextColor}.400`

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
export const DEFAULT_OPEN_GRAPH: OpenGraph = {
  url: '/',
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
      alt: BLOG_NAME + ' Og Image Alt'
    },
    {
      url: '/assets/icon.png',
      width: 800,
      height: 600,
      alt: BLOG_NAME + ' Og Image Alt'
    }
  ],
  profile: {
    username: 'Demo Blog'
  }
}

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
      href: '/favicon/favicon-16x16.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon/favicon-32x32.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicon/apple-touch-icon.png'
    },
    {
      rel: 'manifest',
      href: '/favicon/site.webmanifest'
    }
  ],
  twitter: {
    cardType: 'summary_large_image'
  },
  openGraph: DEFAULT_OPEN_GRAPH
}

// icons in header
export const headerIcons: NavigationIcon[] = [
  // snsアカウントなどもここで設定
  {
    href: '/tags',
    title: 'Tags',
    external: false,
    icon: faTags
  },
  {
    href: 'https://github.com/',
    title: 'GitHub',
    external: true,
    icon: faGithubAlt
  }
]
