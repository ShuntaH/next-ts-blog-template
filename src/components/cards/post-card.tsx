import { Card, CardBody, CardFooter, CardHeader, Heading, Link } from '@chakra-ui/react'
import { STYLES } from "../../lib/constants";
import React from "react";
import Post from "../../interfaces/post";
import DateFormatter from "../date-formatter";


type Props = {
  posts: Post[]
}

const PostCard = ({ posts }: Props) => {
  const lastPostIndex = posts.length - 1

  return (
    <>
      {
        posts.map((post, index) => (
          <Card
            key={index}
            as={"article"}
            position={"relative"}
            minHeight={'320px'}
            marginBottom={`var(${STYLES.gap})`}
            padding={`var(${STYLES.gap})`}
            borderRadius={`var(${STYLES.radius})`}
            overflow={"hidden"}
          >
            <CardHeader as={"header"}>
              <Heading as={'h3'} fontSize={'xl'} mb={4}>
                <Link href={`/posts/${post.slug}`}>
                  {post.title}
                </Link>
              </Heading>
            </CardHeader>

            <CardBody>{post.excerpt}</CardBody>

            <CardFooter as={"footer"}>
              <DateFormatter dateString={post.date}/>
            </CardFooter>
          </Card>
        ))}
    </>
  );
}

export default PostCard
