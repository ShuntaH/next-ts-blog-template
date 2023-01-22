import { Box, Flex, Link, List, ListItem } from '@chakra-ui/react'
import { BLOG_NAME, STYLES } from "../lib/constants";
import NextLink from 'next/link'

type Menu = {
  href: string,
  content: string
}

const Header = () => {
  const menus: Menu[] = [
    { href: '/terms', content: 'Terms' },
    { href: '/about', content: 'About' },
  ]

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
          {BLOG_NAME} 🍎
        </Link>
      </Box>

      <List
        wordBreak={"keep-all"}
        overflowX={"auto"}
        whiteSpace={"nowrap"}
        listStyleType={"none"}
        display={"flex"}
        margin={`auto ${STYLES.gap}`}
      >
        {menus.map((menu: Menu, index: number) => {
          return (
            <ListItem key={index} _notFirst={{ marginInlineStart: `${STYLES.gap}` }}>
              <Link href={menu.href} as={NextLink} fontSize={"16px"} display={"block"}>
                {menu.content}
              </Link>
            </ListItem>
          )
        })}
      </List>
    </Flex>
  );
}

export default Header
