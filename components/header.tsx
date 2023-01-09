import {Flex, Heading, HStack, Link} from '@chakra-ui/react'
import {BLOG_NAME} from "../lib/constants";

const Header = () => {
    return (
        <Flex
            w={'100%'}
            h={'100px'}
            maxWidth={'1200px'}
            marginInline={"auto"}
            px={4}
            justifyContent={'space-between'}
            alignItems={"center"}
            letterSpacing={'0.02em'}
        >
            <Heading as='h1' size='md' noOfLines={1}>
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
    );
}

export default Header
