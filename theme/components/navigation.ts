import { ComponentStyleConfig, defineStyleConfig } from "@chakra-ui/react";

export const Link: ComponentStyleConfig = defineStyleConfig({
  // 1. We can update the base styles
  baseStyle: {
    _hover: {
      textDecoration: 'none',
      color: 'gray.100',
      // textShadow: '#CBD5E0 1px 0 1px;'
    }
  },
  // 2. We can add a new button size or extend existing
  sizes: {},
  // 3. We can add a new visual variant
  variants: {
    // 'with-shadow': {
    //   bg: 'red.400',
    //   boxShadow: '0 0 2px 2px #efdfde',
    // },
    // // 4. We can override existing variants
    // solid: (props: StyleFunctionProps) => ({
    //   bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
    // }),
    // // 5. We can add responsive variants
    // sm: {
    //   bg: 'teal.500',
    //   fontSize: 'md',
    // },
  },
  // 6. We can overwrite defaultProps
  defaultProps: {
    // size: 'lg', // default is md
    // variant: 'sm', // default is solid
    // colorScheme: 'green', // default is gray
  },
})
