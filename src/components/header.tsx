import { Flex, Link } from '@chakra-ui/react'
import { BLOG_NAME, STYLES } from "../lib/constants";
import NextLink from 'next/link'
import SearchForm from "./search/search-form";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import ChakraFontAwesomeIcon from "./chakra-font-awesome-icon";
import React from "react";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { NavigationIcon } from "../interfaces/icon";


const Header = () => {
  const icons: NavigationIcon[] = [
    {
      href: '/tags',
      title: 'Tags',
      icon: faTags
    },
    {
      href: 'https://github.com/ShuntaH',
      title: 'GitHub',
      icon: faGithubAlt
    }
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
      overflow={"hidden"}
    >
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

      <Flex
        marginY={"auto"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <SearchForm boxProps={{marginRight:STYLES.gap}}
        />
        {
          icons.map((ni: NavigationIcon, index) => (
            <Link
              key={index}
              display={"block"}
              href={ni.href}
              as={NextLink}
              target={"_blank"}
              rel={"noopener"}
              title={ni.title}
              fontSize={'2xl'}
              _notLast={{
                marginRight:STYLES.gap
              }}
            >
              <ChakraFontAwesomeIcon icon={ni.icon}/>
            </Link>
        ))
        }
      </Flex>
    </Flex>
  );
}

export default Header
