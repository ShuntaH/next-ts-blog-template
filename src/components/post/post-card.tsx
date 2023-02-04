import { Box, BoxProps, Card, CardBody, CardFooter, CardHeader, Heading, Text } from '@chakra-ui/react'
import { STYLES } from "../../lib/constants";
import React from "react";
import NextLink from "next/link";
import PostInfo from "./post-meta";
import PostTags from "./post-tags";
import { Post } from "../../interfaces/post";


type Props = {
  post: Post,
  boxProps?: BoxProps
}

const PostCard = ({ post, boxProps }: Props) => {
  const postHref = (post: Post) => `/posts/${post.slug}`

  return (
    <Box
      as={NextLink}
      href={postHref(post)}
      {...boxProps}
    >
      <Card
        as={"article"}
        position={"relative"}
        minHeight={'320px'}
        marginBottom={STYLES.gap}
        padding={STYLES.gap}
        borderRadius={STYLES.radius}
        overflow={"hidden"}
      >
        <CardHeader as={"header"}>
          <Heading
            as={'h3'}
            _hover={{color: STYLES.accentColorLighter}}
            fontSize={'xl'}
            marginBottom={1}
          >
            {post.title}
          </Heading>
        </CardHeader>

        <CardBody
          sx={{
            overflow: "hidden",
            display: "-webkit-box",
            "WebkitBoxOrient": "vertical",
            "WebkitLineClamp": "3"
          }}
          paddingTop={1}
          paddingBottom={1}
        >
          {post.excerpt}
        </CardBody>

        <CardFooter
          as={"footer"}
          display={"block"}
          paddingTop={1}
          paddingBottom={1}
        >
          <Text
            as={"span"}
            display={"inline-block"}
            color={STYLES.accentColor}
            _hover={{color: STYLES.accentColorLighter}}
            marginBottom={5}
          >
            Read more →
          </Text>
          <PostInfo time={post.time} date={post.date} author={post.author} />
          <PostTags tags={post.tags} stackProps={{marginBottom: 4}}/>
        </CardFooter>
      </Card>
    </Box>
  );
}

export default PostCard
