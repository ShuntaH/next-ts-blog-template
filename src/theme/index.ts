// my main theme entrypoint

import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import { Link } from "./components/link";
import { BreadcrumbLink } from "./components/breadcrumb";
import { STYLES } from "../lib/constants";
// Foundational style overrides
// import borders from './foundations/borders'
// Component style overrides

/**
 * ここにtheme配下のディレクトリにある全てのファイルを集約する
 */
const overrides = {
  // styles,
  styles: {
    global: STYLES
  },
  components: {
    // Other components go here
    Link,
    BreadcrumbLink

  },
}

export default extendTheme(overrides)
