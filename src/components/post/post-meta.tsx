import React from "react";
import { Avatar, Box, Flex, FlexProps } from "@chakra-ui/react";
import DateFormatter from "../date-formatter";
import { Author } from "../../interfaces/author";

type Props = {
  time: string
  date: string
  author: Author
  flexProps?: FlexProps
}

const PostMeta = ({ time, date, author, flexProps }: Props) => (
  <Flex
    {...flexProps}
    flexWrap={"wrap"}
    alignItems={"center"}
    flexDirection={"row"}
    marginBottom={2}
    fontSize={"sm"}
  >
    <Box as={"span"}>{time}</Box>
    <Box>・</Box>
    <Box as={"span"}><DateFormatter dateString={date}/></Box>
    <Avatar
      marginLeft={2}
      name={author.name}
      src={author.picture}
      size='2xs'
      loading={"lazy"}
    />
  </Flex>
)

export default PostMeta
