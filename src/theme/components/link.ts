import { ComponentStyleConfig } from "@chakra-ui/react";

const Link: ComponentStyleConfig = {
  // 1. We can update the base styles
  baseStyle: {
    _hover: {
      textDecoration: 'none',
      color: 'blue.50',
      // textShadow: '#CBD5E0 1px 0 1px;'
    }
  }
}

export { Link }
