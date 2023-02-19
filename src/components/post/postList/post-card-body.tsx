import { CardBody, CardBodyProps, Text } from "@chakra-ui/react";
import React from "react";
import { Post } from "interfaces/post";

type Props = {
  post: Post
  cardBodyProps?: CardBodyProps
}

const PostCardBody: React.FC<Props> = ({ post, cardBodyProps }) => {
  return (
    <CardBody
      sx={{
        overflow: "hidden",
        display: "-webkit-box",
        "WebkitBoxOrient": "vertical",
        "WebkitLineClamp": "2"
      }}
      paddingTop={1}
      paddingBottom={1}
      paddingX={0}
      {...cardBodyProps}
    >
      <Text fontSize={"sm"} color={"gray.200"}>
        {post.excerpt}
      </Text>
    </CardBody>
  )
}

export default PostCardBody
