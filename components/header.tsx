import { Box, Flex, Heading, HStack, Link } from '@chakra-ui/react'

const Header = () => {
  return (
    <Flex w={'100%'} py={4} bgColor={'black'} color={"white"} justifyContent={'space-between'}>
      <Heading as='h1' size='xl' noOfLines={1}>
        <Link href='/' textDecoration={'none'}>
          hskpg blog
        </Link>
      </Heading>

      <HStack spacing='24px'>
        <Box w='40px' h='40px' bg='yellow.200'>
          <Link href='/' textDecoration={'none'}>
            hskpg blog
          </Link>
        </Box>
        <Box w='40px' h='40px' bg='tomato'>
          <Link href='/' textDecoration={'none'}>
            hskpg blog
          </Link>
        </Box>
      </HStack>
    </Flex>
  );
}

export default Header
