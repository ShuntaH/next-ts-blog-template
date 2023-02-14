import { Box, Link, List, ListItem, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { BLOG_NAME, STYLES } from "lib/constants";
import React from "react";

type Menu = {
  href: string,
  content: string
}

const memo = [
  { href: '/terms', content: 'Terms' },
  { href: '/about', content: 'About' },
]

const Footer: React.VFC = () => {
  const menus: Menu[] = memo

  return (
    <Box
      as={"footer"}
      maxWidth={`calc(${STYLES.mainWidth} + ${STYLES.gap} * 2)`}
      margin={"auto"}
      textAlign={"center"}
      lineHeight={"24px"}
      padding={`calc(${STYLES.footerHeight} - ${STYLES.gap} / 2) ${STYLES.gap}`}
      fontSize={"sm"}
      fontWeight={'medium'}
    >
      <List
        wordBreak={"keep-all"}
        overflowX={"auto"}
        whiteSpace={"nowrap"}
        listStyleType={"none"}
        display={"flex"}
        justifyContent={"end"}
      >
        {menus.map((menu: Menu, index: number) => {
          return (
            <ListItem key={index} _notFirst={{ marginInlineStart: `${STYLES.gap}` }}>
              <Link href={menu.href} as={NextLink} display={"block"}>
                {menu.content}
              </Link>
            </ListItem>
          )
        })}
      </List>
        <Text>
          ©︎ {new Date().getFullYear()} {BLOG_NAME}
        </Text>
    </Box>
  )
}

export default Footer
