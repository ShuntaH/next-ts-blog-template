import React from "react";
import { Flex, FlexProps } from "@chakra-ui/react";
import TextSpan from "components/foundations/text-span";
import DateFormatter from "components/date-formatter";

type Props = {
  time: string
  publishedAt: string
  updatedAt: string
  flexProps?: FlexProps
}

const PostMeta: React.VFC<Props> = ({ time, publishedAt, updatedAt, flexProps }) => (
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
      <TextSpan textProps={{color: "whiteAlpha.700"}}>
        Published:
      </TextSpan>
      {' '}
      <DateFormatter dateString={publishedAt}/>
      {' '}
      <TextSpan textProps={{color: 'whiteAlpha.700'}}>
        Updated:
      </TextSpan>
      {' '}
      <DateFormatter dateString={updatedAt}/>
    </TextSpan>
    <TextSpan>・</TextSpan>
    <TextSpan>{time}</TextSpan>

  </Flex>
)

export default PostMeta
