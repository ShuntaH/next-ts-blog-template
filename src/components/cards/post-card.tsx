import { Box, Card, CardBody, CardFooter, CardHeader, Heading, Link } from '@chakra-ui/react'
import { STYLES } from "../../lib/constants";
import React from "react";
import Post from "../../interfaces/post";
import DateFormatter from "../date-formatter";
import NextLink from "next/link";


type Props = {
  index: number
  post: Post
}

const PostCard = ({ post, index }: Props) => {
  const postHref = (post: Post) => `/posts/${post.slug}`

  return (
    <Card
      key={index}
      as={"article"}
      position={"relative"}
      minHeight={'320px'}
      marginBottom={STYLES.gap}
      padding={STYLES.gap}
      borderRadius={STYLES.radius}
      overflow={"hidden"}
    >
      <CardHeader as={"header"}>
        <Heading as={'h3'} fontSize={'xl'} mb={4}>
          <Link href={postHref(post)} as={NextLink}>
            {post.title}
          </Link>
        </Heading>
      </CardHeader>

      <CardBody sx={{
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": "3"
      }}>
        {post.excerpt}
      </CardBody>

      <CardFooter as={"footer"} display={"block"}>
        <DateFormatter dateString={post.date}/>
        <Box>
          <Link href={postHref(post)} color={"purple.400"}>
            Read more →
          </Link>
        </Box>
      </CardFooter>
    </Card>
  );
}

export default PostCard
