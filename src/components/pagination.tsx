import { Flex, FlexProps, Link, LinkProps, Text, TextProps } from "@chakra-ui/react";
import { Pagination } from "interfaces/pagination";
import NextLink from "next/link";
import React from "react";


type Props = {
  pagination: Pagination,
  flexProps?: FlexProps
}

const textProps: TextProps = {
  as: 'span',
  display: "inline-block",
  color: "gray.500",
  overflowX: "hidden",
  width: "70px",
  textAlign: "center",
  _hover: {cursor: "default"}
}

const linkProps: LinkProps = {
  display: "inline-block",
  overflowX: "hidden",
  width: "70px",
  textAlign: "center",
  as: NextLink
}

const Pagination: React.FC<Props> = ({ pagination, flexProps }) => (

  <Flex
    justifyContent={"space-between"}
    width={"full"}
    {...flexProps}
  >
    {
      pagination.prevPageHref ?
        <Link {...linkProps} href={pagination.prevPageHref}>Previous</Link>
        :
        <Text {...textProps}>Previous</Text>
    }

    <Text {...textProps}>
      {pagination.currentPageNumber} of {pagination.totalPageCount}
    </Text>

    {
      pagination.nextPageHref ?
        <Link {...linkProps} href={pagination.nextPageHref}>Next</Link>
        :
        <Text {...textProps}>Next</Text>
    }
  </Flex>
)

export default Pagination
