import { Box, BoxProps, Flex, Link } from '@chakra-ui/react'
import { BLOG_NAME, STYLES } from "lib/constants";
import NextLink from 'next/link'
import { faTags } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { NavigationIcon } from "interfaces/icon";
import SearchForm from "components/search/search-form";
import ChakraFontAwesomeIcon from "components/chakra-font-awesome-icon";

const icons: NavigationIcon[] = [
  {
    href: '/tags',
    title: 'Tags',
    external: false,
    icon: faTags
  },
  {
    href: 'https://github.com/ShuntaH',
    title: 'GitHub',
    external: true,
    icon: faGithubAlt
  }
]

const Header: React.FC<BoxProps> = (props) => {
  return (
    // md 以上は flex でアイテムは横並び、 それ以下は block で縦並び
    <Box {...props}>
      <Flex
        as='nav'
        flexWrap='wrap'
        justifyContent="space-between"
        maxWidth={STYLES.navMaxWidth}
        marginInlineStart="auto"
        marginInlineEnd="auto"
        lineHeight={STYLES.headerHeight}
        letterSpacing={'0.01em'}
        overflow={"hidden"}
      >
        {/*左サイド*/}
        <Flex margin={`auto ${STYLES.gap}`}>
          <Link
            href='/'
            as={NextLink}
            fontSize={"24px"}
            fontWeight={700}
          >
            {BLOG_NAME}
          </Link>
        </Flex>

        {/*右サイド*/}
        <Flex
          margin={`auto ${STYLES.gap}`}
          justifyContent={"space-between"}
          flexWrap={"nowrap"}
          alignItems={"center"}
        >
          {/*スマホの時はヘッダーの右サイドのアイテムリストの中から非表示にする*/}
          <SearchForm
            boxProps={{
              marginRight:STYLES.gap,
              display: {
                base: 'none',
                md: "block"
              }}}
          />

          <Flex>
            {
              icons.map((ni: NavigationIcon, index) => (
                <Link
                  key={index}
                  display={"block"}
                  href={ni.href}
                  as={NextLink}
                  target={ni.external ? "_blank" : ""}
                  rel={"noopener"}
                  title={ni.title}
                  fontSize={'xl'}
                  _notLast={{marginRight: STYLES.gap}}
                >
                  <ChakraFontAwesomeIcon icon={ni.icon}/>
                </Link>
              ))
            }
          </Flex>
        </Flex>
      </Flex>

      {/*スマホサイズの時は行を変えて表示する*/}
      <SearchForm
        boxProps={{
          display: {md: 'none'},
          maxWidth: STYLES.navMaxWidth,
          margin: `auto ${STYLES.gap}`,
          lineHeight: STYLES.headerHeight,
          letterSpacing: '0.01em',
          overflow: "hidden"
        }}
      />
    </Box>
  )
}

export default Header
