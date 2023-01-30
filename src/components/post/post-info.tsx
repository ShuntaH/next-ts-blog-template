import React from "react";
import { Avatar, Box, Flex } from "@chakra-ui/react";
import DateFormatter from "../date-formatter";
import { Author } from "../../interfaces/author";

type Props = {
  time: string
  date: string
  author: Author
}

const PostInfo = ({ time, date, author }: Props) => (
  <Flex
    flexWrap={"wrap"}
    alignItems={"center"}
    flexDirection={"row"}
    marginBottom={2}
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

export default PostInfo
