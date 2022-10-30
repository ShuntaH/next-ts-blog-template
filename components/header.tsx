import { Container, Flex, Heading, HStack, Link } from '@chakra-ui/react'
import { BLOG_NAME } from "../lib/constants";

const Header = () => {
  return (
    <Container w={'100%'} h={'75px'} bgColor={'black'} color={"white"} letterSpacing={'0.02em'}>
      <Flex w={'100%'} maxWidth={'1200px'} marginInline={"auto"} p={4} justifyContent={'space-between'}>
        <Heading as='h1' size='xl' noOfLines={1}>
          <Link href='/'>
            {BLOG_NAME}
          </Link>
        </Heading>

        <HStack spacing='24px'>
          <Link href='/terms' fontWeight={'medium'}>
            Terms
          </Link>
          <Link href='/about' fontWeight={'medium'}>
            About
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
}

export default Header
