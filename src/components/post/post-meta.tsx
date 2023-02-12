import React from "react";
import { Flex, FlexProps } from "@chakra-ui/react";

import { Author } from "interfaces/post";
import TextSpan from "components/foundations/text-span";
import DateFormatter from "components/date-formatter";

type Props = {
  time: string
  date: string
  author: Author
  flexProps?: FlexProps
}

const PostMeta = ({ time, date, flexProps }: Props) => (
  <Flex
    {...flexProps}
    flexWrap={"wrap"}
    alignItems={"center"}
    flexDirection={"row"}
    marginBottom={2}
    fontSize={"smaller"}
    color={"gray.300"}

  >
    <TextSpan>
      <DateFormatter dateString={date}/>
    </TextSpan>
    <TextSpan>・</TextSpan>
    <TextSpan>{time}</TextSpan>

  </Flex>
)

export default PostMeta
