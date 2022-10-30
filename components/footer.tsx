import { Flex, Text } from "@chakra-ui/react";
import { BLOG_NAME } from "../lib/constants";

const Footer = () => {
  return (
    <Flex
      w={'100%'}
      h={'60px'}
      alignItems={'center'}
      justifyContent={'center'}
      letterSpacing={'0.02em'}
    >
      <Text fontWeight={'medium'}>
        ©︎ {new Date().getFullYear()} {BLOG_NAME}
      </Text>
    </Flex>
  )
}

export default Footer
