import { Box, Text } from "@chakra-ui/react";
import { BLOG_NAME, STYLES } from "../lib/constants";

const Footer = () => {
  return (
    <Box
      as={"footer"}
      maxWidth={`calc(${STYLES.mainWidth} + ${STYLES.gap} * 2)`}
      margin={"auto"}
      textAlign={"center"}
      lineHeight={"24px"}
      padding={`calc(${STYLES.footerHeight} - ${STYLES.gap} / 2) ${STYLES.gap}`}
    >
      <Text fontWeight={'medium'} fontSize={"sm"}>
        ©︎ {new Date().getFullYear()} {BLOG_NAME}
      </Text>
    </Box>
  )
}

export default Footer
