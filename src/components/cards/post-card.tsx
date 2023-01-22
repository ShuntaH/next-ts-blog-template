import { Box, Card, CardBody, CardFooter, CardHeader, Heading, Link } from '@chakra-ui/react'
import { STYLES } from "../../lib/constants";
import React from "react";
import Post from "../../interfaces/post";
import DateFormatter from "../date-formatter";


type Props = {
  posts: Post[]
}

const PostCard = ({ posts }: Props) => {
  const lastPostIndex = posts.length - 1
  const postHref = (post: Post) => `/posts/${post.slug}`

  return (
    <>
      {
        posts.map((post, index) => (
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
                <Link href={postHref(post)}>
                  {post.title}
                </Link>
              </Heading>
            </CardHeader>

            <CardBody overflow={"hidden"}>{post.excerpt}</CardBody>

            <CardFooter as={"footer"} display={"block"}>
              <DateFormatter dateString={post.date}/>
              <Box>
                <Link href={postHref(post)} color={"purple.400"}>
                  Read more →
                </Link>
              </Box>
            </CardFooter>
          </Card>
        ))}
    </>
  );
}

export default PostCard
