import { Card, CardBody, CardFooter, CardHeader, CardProps, Heading, Text } from '@chakra-ui/react'
import { STYLES } from "../../lib/constants";
import React from "react";
import NextLink from "next/link";
import PostInfo from "./post-meta";
import { Post } from "../../interfaces/post";
import PostTags from "./post-tags";


type Props = {
  post: Post,
  cardProps?: CardProps
}

const PostCard = ({ post, cardProps }: Props) => {
  const postHref = (post: Post) => `/posts/${post.slug}`

  return (
      <Card
        as={NextLink}
        href={postHref(post)}
        position={"relative"}
        bgColor={"transparent"}
        border={'2px'}
        borderColor={"whiteAlpha.200"}
        boxShadow={1}
        borderStyle={"solid"}
        marginBottom={STYLES.gap}
        padding={STYLES.gap}
        borderRadius={STYLES.radius}
        overflow={"hidden"}
        {...cardProps}
      >
        <CardHeader as={"header"} paddingY={1}>
          <Heading
            as={'h3'}
            _hover={{color: STYLES.accentColorLighter}}
            fontSize={'xl'}

          >
            {post.title}
          </Heading>
          <PostInfo time={post.time} date={post.date} author={post.author} />
          <PostTags tags={post.tags} stackProps={{marginBottom: 2}}/>
        </CardHeader>

        <CardBody
          sx={{
            overflow: "hidden",
            display: "-webkit-box",
            "WebkitBoxOrient": "vertical",
            "WebkitLineClamp": "2"
          }}
          paddingTop={1}
          paddingBottom={1}
        >
          <Text fontSize={"sm"} color={"gray.200"}>
            {post.excerpt}
          </Text>
        </CardBody>

        <CardFooter
          as={"footer"}
          display={"block"}
          paddingTop={1}
          paddingBottom={1}
        >
        </CardFooter>
      </Card>
  );
}

export default PostCard
