import { Box, Flex, Link } from '@chakra-ui/react'
import { BLOG_NAME, STYLES } from "../lib/constants";
import NextLink from 'next/link'
import SearchForm from "./search/search-form";


const Header = () => {


  return (
    <Flex
      as='nav'
      flexWrap='wrap'
      justifyContent="space-between"
      maxWidth={`calc(${STYLES.navWidth} + ${STYLES.gap} * 2)`}
      marginInlineStart="auto"
      marginInlineEnd="auto"
      lineHeight={STYLES.headerHeight}
      letterSpacing={'0.01em'}
    >
      <Box display={"flex"} margin={`auto ${STYLES.gap}`}>
        <Link href='/' as={NextLink} fontSize={"24px"} fontWeight={700}>
          {BLOG_NAME}
        </Link>
      </Box>

      <SearchForm></SearchForm>
    </Flex>
  );
}

export default Header
