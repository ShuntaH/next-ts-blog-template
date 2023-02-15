import { Card, CardBody, CardFooter, CardHeader, CardProps, Heading, Text } from '@chakra-ui/react'
import { STYLES } from "lib/constants";
import React from "react";
import NextLink from "next/link";
import { Post } from "interfaces/post";
import PostTags from "components/post/post-tags";
import PostMeta from "components/post/post-meta";


type Props = {
  post: Post,
  cardProps?: CardProps
}

const PostCard: React.VFC<Props> = ({ post, cardProps}) => {
  const postHref = (post: Post) => `/posts/${post.slug}`

  return (
      <Card
        as={NextLink}
        href={postHref(post)}
        position={"relative"}
        bgColor={"transparent"}
        border={'2px'}
        borderColor={"rgba(51, 65, 85, 1)"}
        borderStyle={"solid"}
        marginBottom={STYLES.gap}
        padding={{base: STYLES.gapSm, md: STYLES.gap}}
        borderRadius={STYLES.radius}
        overflow={"hidden"}
        backdropFilter={'blur(4px)'}
        boxShadow={'var(0 0 #0000,0 0 #0000),var(0 0 #0000,0 0 #0000),var(0 25px 50px -12px rgb(0 0 0 / 0.25))'}
        {...cardProps}
      >
        <CardHeader as={"header"} paddingY={1} paddingX={0}>
          <Heading
            as={'h3'}
            _hover={{color: STYLES.accentColorLighter}}
            fontSize={{base: "ms", md: "xl"}}
            marginBottom={{base: 2, md: 1}}
          >
            {post.title}
          </Heading>
          <PostMeta time={post.time} date={post.date} author={post.author} />
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
          paddingX={0}
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
          paddingX={0}
        >
        </CardFooter>
      </Card>
  );
}

export default PostCard
