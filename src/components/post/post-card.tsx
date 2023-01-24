import { Box, Card, CardBody, CardFooter, CardHeader, chakra, Heading, Link } from '@chakra-ui/react'
import { STYLES } from "../../lib/constants";
import React from "react";
import Post from "../../interfaces/post";
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
          fontSize={'xl'}
          marginBottom={2}
        >
          <Link
            href={postHref(post)}
            as={NextLink}
          >
            {post.title}
          </Link>
        </Heading>
        <PostTags tags={post.tags}/>
      </CardHeader>

      <CardBody
        sx={{
          overflow: "hidden",
          display: "-webkit-box",
          "WebkitBoxOrient": "vertical",
          "WebkitLineClamp": "3"
        }}
        paddingTop={3}
        paddingBottom={3}
      >
        {post.excerpt}
      </CardBody>

      <CardFooter as={"footer"} display={"block"}>
        <PostInfo time={post.time} date={post.date} author={post.author} />
        <Box>
          <Link
            href={postHref(post)}
            color={STYLES.accentColor}
          >
            Read more →
          </Link>
        </Box>
      </CardFooter>
    </Card>
  );
}

export default chakra(PostCard)
