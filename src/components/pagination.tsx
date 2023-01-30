import { Flex, FlexProps, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { Pagination } from "../interfaces/pagination";
import TextSpan from "./foundations/text-span";

type Props = {
  pagination: Pagination,
  flexProps?: FlexProps
}

const textProps = { color: "gray.500", _hover: {cursor: "default"}}

const Pagination = ({ pagination, flexProps }: Props) => (

  <Flex justifyContent={"space-between"} {...flexProps}>
    {
      pagination.prevPageHref ?
        <Link
          as={NextLink}
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
      textProps={{_hover: {cursor: "default"}}}>
      {pagination.currentPageNumber} of {pagination.totalPageCount}
    </TextSpan>

    {
      pagination.nextPageHref ?
        <Link
          as={NextLink}
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
