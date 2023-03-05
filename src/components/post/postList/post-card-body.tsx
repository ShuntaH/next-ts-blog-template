import { CardBody, CardBodyProps, Text } from "@chakra-ui/react";
import React from "react";
import { Post } from "interfaces/post";
import { STYLES } from "lib/constants";

type Props = {
  post: Post
  cardBodyProps?: CardBodyProps
}

function PostCardBody({ post, cardBodyProps }: Props) {
  return (
    <CardBody
      sx={{
        overflow: "hidden",
        display: "-webkit-box",
        "WebkitBoxOrient": "vertical",
        "WebkitLineClamp": "2"
      }}
      letterSpacing={'0.04em'}
      paddingTop={1}
      paddingBottom={1}
      paddingX={0}
      {...cardBodyProps}
    >
      <Text fontSize={"xs"} color={STYLES.textColor} lineHeight={1.5}>
        {post.excerpt}
      </Text>
    </CardBody>
  )
}

export default PostCardBody
