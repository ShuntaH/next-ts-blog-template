import { Flex, FlexProps, Link, LinkProps, TextProps } from "@chakra-ui/react";
import { Pagination } from "../interfaces/pagination";
import TextSpan from "./foundations/text-span";
import NextLink from "next/link";


type Props = {
  pagination: Pagination,
  flexProps?: FlexProps
}

const textProps: TextProps = {
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

const Pagination = ({ pagination, flexProps }: Props) => (

  <Flex
    justifyContent={"space-between"}
    width={"full"}
    {...flexProps}
  >
    {
      pagination.prevPageHref ?
        <Link
          {...linkProps}
          href={pagination.prevPageHref}
        >
          Previous
        </Link>
        :
        <TextSpan textProps={textProps}>
          Previous
        </TextSpan>
    }

    <TextSpan
      textProps={{
        display: "inline-block",
        _hover: {cursor: "default"},
        overflowX: "hidden",
        width: "70px",
        textAlign: "center",
    }}
    >
      {pagination.currentPageNumber} of {pagination.totalPageCount}
    </TextSpan>

    {
      pagination.nextPageHref ?
        <Link
          {...linkProps}
          href={pagination.nextPageHref}
        >
          Next
        </Link>
        :
        <TextSpan textProps={textProps}>
          Next
        </TextSpan>
    }
  </Flex>
)

export default Pagination
