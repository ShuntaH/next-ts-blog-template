import type Post from '../interfaces/post'
import ArticleHeading from "./article-heading";
import { Box } from "@chakra-ui/react";

type Props = {
  posts: Post[]
}

const ArticleHeadingList = ({posts}: Props) => {
  return (
    <section>
      <Box>
        {posts.map((post) => (
          <ArticleHeading
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </Box>
    </section>
  )
}

export default ArticleHeadingList
