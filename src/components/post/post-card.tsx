import { Box, Card, CardBody, CardFooter, CardHeader, chakra, Heading, Text } from '@chakra-ui/react'
import { STYLES } from "../../lib/constants";
import React from "react";
import { Post } from "../../interfaces/post";
import NextLink from "next/link";
import PostInfo from "./post-info";
import PostTags from "./post-tags";


type Props = {
  post: Post
}

const PostCard = ({ post }: Props) => {
  const postHref = (post: Post) => `/posts/${post.slug}`
  console.log('post', post)

  return (
    <Box
      as={NextLink}
      href={postHref(post)}
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
            _hover={{color: STYLES.accentColorHover}}
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
            _hover={{color: STYLES.accentColorHover}}
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

export default chakra(PostCard)
