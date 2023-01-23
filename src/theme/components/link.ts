import { ComponentStyleConfig } from "@chakra-ui/react";

const Link: ComponentStyleConfig = {
  // 1. We can update the base styles
  baseStyle: {
    _hover: {
      textDecoration: 'none',
      color: 'purple.200'
    }
  }
}

export { Link }
