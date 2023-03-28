import { Box, BoxProps, Flex, Link, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { BLOG_NAME, headerIcons, STYLES } from 'lib/constants'
import NextLink from 'next/link'
import React from 'react'
import { NavigationIcon } from 'interfaces/icon'
import SearchFormHeader from 'components/search/header/search-form-header'
import ChakraFontAwesomeIcon from 'components/foundations/chakra-font-awesome-icon'
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";


function Header(props: BoxProps) {
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
        overflow={'hidden'}
      >
        {/* 左サイド */}
        <Box margin={`auto ${STYLES.gap}`}>
          <Link
            href='/'
            as={NextLink}
            fontSize={'24px'}
            fontWeight={700}
            letterSpacing={'0.02em'}
            _hover={STYLES.hoverLighterStyle}
            title={'Home'}
            color={STYLES.textColor}
          >
            {BLOG_NAME}
          </Link>
        </Box>

        {/* 右サイド */}
        <Flex
          margin={`auto ${STYLES.gap}`}
          justifyContent={'space-between'}
          flexWrap={'nowrap'}
          alignItems={'center'}
        >
          {/* スマホの時はヘッダーの右サイドのアイテムリストの中から非表示にする */}
          <SearchFormHeader
            boxProps={{
              marginRight: STYLES.gap,
              display: { base: 'none', md: 'block' }
            }}
          />

          {
            headerIcons.map(
              (ni: NavigationIcon, index) => (
                <LinkBox
                  key={index}
                  position={"relative"}
                  display={"flex"}
                  alignItems={"center"}
                  _notLast={{ marginRight: STYLES.gap }}
                  height={'40px'}
                >
                  <LinkOverlay
                    href={ni.href}
                    as={NextLink}
                    target={ni.external ? '_blank' : ''}
                    rel={'noopener'}
                    title={ni.title}
                  >
                  </LinkOverlay>
                  <ChakraFontAwesomeIcon
                    icon={ni.icon}
                    display={'inline'}
                    width={4}
                    _hover={STYLES.hoverLightStyle}
                  />
                  {
                    ni.external && (
                      <ChakraFontAwesomeIcon
                        position={"absolute"}
                        top={'4px'}
                        right={"-12px"}
                        display={"inline"}
                        color={'gray.200'}
                        opacity={0.3}
                        icon={faExternalLink}
                        height={'0.6em'}
                      />
                    )
                  }
                </LinkBox>
              ))
          }
        </Flex>
      </Flex>

      {/* スマホサイズの時は行を変えて表示する */}
      <SearchFormHeader
        boxProps={{
          display: { md: 'none' },
          maxWidth: STYLES.navMaxWidth,
          margin: `auto ${STYLES.gap}`,
          lineHeight: STYLES.headerHeight,
          letterSpacing: '0.01em',
          overflow: 'hidden'
        }}
      />
    </Box>
  )
}

export default Header
