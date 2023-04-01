import { Box, Link, List, ListItem, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { STYLES } from 'lib/constants'
import React, { useMemo } from 'react'
import { copyright } from "../lib/helpers";

interface Menu {
  href: string
  content: string
}

const menus: Menu[] = [
  { href: '/disclaimer', content: 'Disclaimer' },
  { href: '/about', content: 'About' }
]

function Footer () {
  const copyrightText = useMemo(
    () => copyright(),
    []
  )

  return (
    <Box
      as={'footer'}
      maxWidth={`calc(${STYLES.mainWidth} + ${STYLES.gap} * 2)`}
      color={STYLES.textColorDarker}
      margin={'auto'}
      textAlign={'center'}
      lineHeight={'24px'}
      padding={`calc(${STYLES.footerHeight} - ${STYLES.gap} / 2) ${STYLES.gap}`}
      fontSize={'sm'}
      fontWeight={'medium'}
    >
      <List
        wordBreak={'keep-all'}
        overflowX={'auto'}
        whiteSpace={'nowrap'}
        listStyleType={'none'}
        display={'flex'}
        justifyContent={'end'}

      >
        {menus.map((menu: Menu, index: number) => {
          return (
            <ListItem key={index} _notFirst={{ marginInlineStart: `${STYLES.gap}` }}>
              <Link
                href={menu.href}
                as={NextLink}
                display={'block'}
                title={menu.content}
              >
                {menu.content}
              </Link>
            </ListItem>
          )
        })}
        <ListItem display={{ base: 'block', md: 'none' }} marginLeft={`${STYLES.gap}`}>
          {copyrightText}
        </ListItem>
      </List>

      <Text display={{ base: 'none', md: 'block' }}>
        {copyrightText}
      </Text>
    </Box>
  )
}

export default Footer
