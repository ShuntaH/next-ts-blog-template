import { Container, Flex, Heading, HStack, Link } from '@chakra-ui/react'

const Header = () => {
  return (
    <Container w={'100%'} bgColor={'black'} color={"white"} letterSpacing={'0.02em'}>
      <Flex w={'100%'} maxWidth={'1200px'} marginInline={"auto"} py={4} px={6} justifyContent={'space-between'}>
        <Heading as='h1' size='xl' noOfLines={1}>
          <Link href='/'>
            hskpg blog
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
