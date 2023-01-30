import { Flex, FlexProps, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { Pagination } from "../interfaces/pagination";
import TextSpan from "./foundations/text-span";

type Props = {
  pagination: Pagination,
  flexProps?: FlexProps
}

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
        <TextSpan textProps={{ color: "gray.500"}}>
          Previous
        </TextSpan>
    }

    <TextSpan>
      {pagination.currentPageNumber} of {pagination.totalPageCount}
    </TextSpan>

    {
      pagination.nextPageHref ?
        <Link as={NextLink} href={pagination.nextPageHref}>
          Next
        </Link>
        :
        <TextSpan textProps={{ color: "gray.500"}}>
          Next
        </TextSpan>
    }
  </Flex>
)

export default Pagination
