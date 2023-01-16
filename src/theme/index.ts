// my main theme entrypoint

import { extendTheme } from '@chakra-ui/react'

// Global style overrides
// import styles from './styles'
// Foundational style overrides
// import borders from './foundations/borders'
// Component style overrides
import { Container } from './components/layout'
import { Link } from './components/navigation'

const overrides = {
  // styles,
  // Other foundational style overrides go here
  components: {
    // Other components go here
    Container,
    Link

  },
}

export default extendTheme(overrides)
