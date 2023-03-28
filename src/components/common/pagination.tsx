import { Flex, FlexProps, Link, LinkProps, Text, TextProps } from '@chakra-ui/react'
import { Pagination as PaginationType } from 'interfaces/pagination'
import NextLink from 'next/link'
import React from 'react'
import { STYLES } from "../../lib/constants";

interface Props {
  pagination: PaginationType
  flexProps?: FlexProps
}

const textProps: TextProps = {
  as: 'span',
  display: 'inline-block',
  color: STYLES.textColorDark,
  overflowX: 'hidden',
  width: '70px',
  textAlign: 'center',
  _hover: { cursor: 'default' }
}

const linkProps: LinkProps = {
  display: 'inline-block',
  overflowX: 'hidden',
  width: '70px',
  textAlign: 'center',
  as: NextLink
}

function Pagination({ pagination, flexProps }: Props) {
  return <Flex
    justifyContent={'space-between'}
    width={'full'}
    {...flexProps}
  >
    {
      pagination.prevPageHref
        ? <Link
          {...linkProps}
          href={pagination.prevPageHref}
          title={'previous page'}
        >
          Previous
        </Link>
        : <Text {...textProps}>Previous</Text>
    }

    <Text {...textProps}>
      {pagination.currentPageNumber} of {pagination.totalPageCount}
    </Text>

    {
      pagination.nextPageHref
        ? <Link {...linkProps} href={pagination.nextPageHref} title={'next page'}>Next</Link>
        : <Text {...textProps}>Next</Text>
    }
  </Flex>
}

export default Pagination
