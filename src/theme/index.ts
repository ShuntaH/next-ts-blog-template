// my main theme entrypoint

import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './styles'
import { Link } from "./components/link";
// Foundational style overrides
// import borders from './foundations/borders'
// Component style overrides

/**
 * ここにtheme配下のディレクトリにある全てのファイルを集約する
 */
const overrides = {
  // styles,
  styles: {
    global: styles
  },
  components: {
    // Other components go here
    Link

  },
}

export default extendTheme(overrides)
