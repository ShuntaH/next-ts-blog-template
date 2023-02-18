import React from "react";
import { Flex, FlexProps, Text } from "@chakra-ui/react";
import DateFormatter from "components/date-formatter";

type Props = {
  time: string
  publishedAt: string
  updatedAt: string
  flexProps?: FlexProps
}

const PostMeta: React.FC<Props> = ({ time, publishedAt, updatedAt, flexProps }) => (
  <Flex
    {...flexProps}
    flexWrap={"wrap"}
    alignItems={"center"}
    flexDirection={"row"}
    marginBottom={2}
    fontSize={"smaller"}
    color={"gray.300"}
  >
    <Text as={"span"}>
      <Text color={"whiteAlpha.700"} as={'span'}>
        Published:
      </Text>
      {' '}
      <DateFormatter dateString={publishedAt}/>
      {' '}
      <Text color={"whiteAlpha.700"} as={'span'}>
        Updated:
      </Text>
      {' '}
      <DateFormatter dateString={updatedAt}/>
    </Text>
    <Text as={"span"}>・</Text>
    <Text as={"span"}>{time}</Text>
  </Flex>
)

export default PostMeta
