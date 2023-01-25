import { Card, CardBody, CardFooter, CardHeader, chakra, Heading, Link } from '@chakra-ui/react'
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

      <CardFooter as={"footer"} display={"block"} paddingTop={1} paddingBottom={1}>
        <Link
          as={NextLink}
          display={"block"}
          href={postHref(post)}
          color={STYLES.accentColor}
          marginBottom={5}
        >
          Read more →
        </Link>
        <PostInfo time={post.time} date={post.date} author={post.author} />
        <PostTags tags={post.tags} stackProps={{marginBottom: 4}}/>
      </CardFooter>
    </Card>
  );
}

export default chakra(PostCard)
