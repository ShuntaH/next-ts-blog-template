import { ComponentStyleConfig } from '@chakra-ui/react'
import { STYLES } from 'lib/constants'

const Link: ComponentStyleConfig = {
  // 1. We can update the base styles
  baseStyle: {
    _hover: STYLES.hoverLightStyle,
    backgroundColor: 'transparent'
  }
}

export { Link }
