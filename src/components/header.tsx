import { Box, Flex, Link, List, ListItem } from '@chakra-ui/react'
import { BLOG_NAME } from "../lib/constants";

type Menu = {
  href: string,
  content: string
}

const Header = () => {
  const menus: Menu[] = [
    { href: '', content: 'Terms' },
    { href: '/terms', content: 'Terms' },
    { href: '/about', content: 'About' },
  ]

  return (
    <Flex
      as={'nav'}
      flexWrap={'wrap'}
      justifyContent={"space-between"}
      marginBlockStart={"auto"}
      marginInlineEnd={"auto"}
    >
      <Box>
        <Link href='/Users/mbp/develop/hskpg_blog/public'>
          {BLOG_NAME}
        </Link>
      </Box>

      <List>
        {menus.map((menu: Menu, index: number) => {
          return (
            <ListItem key={index}>
              <Link href={menu.href}>{menu.content}</Link>
            </ListItem>
          )
        })}
      </List>
    </Flex>
  );
}

export default Header
