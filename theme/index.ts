// my main theme entrypoint

import { extendTheme } from '@chakra-ui/react'

// Global style overrides
// import styles from './styles'
// Foundational style overrides
// import borders from './foundations/borders'
// Component style overrides
import { Container } from './components/layout'

const overrides = {
  // styles,
  // Other foundational style overrides go here
  components: {
    // Other components go here
    Container

  },
}

export default extendTheme(overrides)
