import { Box, Link, List, ListItem, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { BLOG_NAME, STYLES } from "lib/constants";
import React from "react";

type Menu = {
  href: string,
  content: string
}

const menus: Menu[] = [
  { href: '/disclaimer', content: 'Disclaimer' },
  { href: '/about', content: 'About' },
]

function Footer () {
  return (
    <Box
      as={"footer"}
      maxWidth={`calc(${STYLES.mainWidth} + ${STYLES.gap} * 2)`}
      color={STYLES.textColorDarker}
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
              <Link href={menu.href} as={NextLink} display={"block"} title={menu.content}>
                {menu.content}
              </Link>
            </ListItem>
          )
        })}
        <ListItem display={{base: 'block', md: 'none'}} marginLeft={`${STYLES.gap}`}>
          ©︎ {new Date().getFullYear()} {BLOG_NAME}
        </ListItem>
      </List>

      <Text display={{base: 'none', md: 'block'}}>
        ©︎ {new Date().getFullYear()} {BLOG_NAME}
      </Text>
    </Box>
  )
}

export default Footer
