import React from "react";
import { Flex, FlexProps } from "@chakra-ui/react";
import DateFormatter from "../date-formatter";
import TextSpan from "../foundations/text-span";
import { Author } from "../../interfaces/post";

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
    fontSize={"sm"}
  >
    <TextSpan>{time}</TextSpan>
    <TextSpan>・</TextSpan>
    <TextSpan>
      <DateFormatter dateString={date}/>
    </TextSpan>
  </Flex>
)

export default PostMeta
