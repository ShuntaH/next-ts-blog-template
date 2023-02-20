import { ThemeTypings } from "@chakra-ui/styled-system";
import { join } from "path";

export const HOME_OG_IMAGE_URL =
  'https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg'
export const BLOG_NAME = 'hskpg blog'
export const BLOG_DISCRIPTION = "memo"

// pagination
export const POST_COUNT_PER_PAGE = 10

// search
export const SEARCH_MIN_CHARS = 2
export const SEARCH_CHAR_DISTANCE_IN_VALUE = 15 // 全文検索対象の単語が複数近く見つかった時、何文字の間隔まで1hitとみなすか
export const SEARCH_CHAR_NUMBER_AROUND_IN_VALUE = 20 // 全文検索対象の単語の前後の何文字を表示するか

// blur background image src
export const BACKGROUND_IMAGE_PATH = "/assets/hongkong-bg.png"
// export const BackgroundImagePath = ""

//
export const POST_DIRECTORY_PATH = join(process.cwd(), '_posts')
export const ARTICLE_DIRECTORY_PATH = join(process.cwd(), '_articles')
/**
 * todo chakra ui で css var の定義の仕方がわからなかったので js でかく。 theme での書き方がわかったらそちらで書く
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
const baseColor: ThemeTypings["colors"] = `${baseColorScheme}.300`
const colorLight: ThemeTypings["colors"] = `${baseColorScheme}.200`
const colorLighter: ThemeTypings["colors"] = `${baseColorScheme}.50`
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
  baseColor,
  colorLight,
  colorLighter,
  baseHoverStyle,
  hoverLightStyle,
  hoverLighterStyle
}
