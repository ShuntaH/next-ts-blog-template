import type Post from '../interfaces/post'
import ArticleHeading from "./article-heading";
import {Box} from "@chakra-ui/react";

type Props = {
    posts: Post[]
}

const ArticleHeadingList = ({posts}: Props) => {
    const lastPostIndex = posts.length - 1

    return (
        <section>
            <Box>
                {
                    posts.map((post, index) => (
                        index !== lastPostIndex ? (
                            <ArticleHeading
                                key={post.slug}
                                title={post.title}
                                coverImage={post.coverImage}
                                date={post.date}
                                author={post.author}
                                slug={post.slug}
                                excerpt={post.excerpt}
                            />
                        ) : (
                            <ArticleHeading
                                key={post.slug}
                                title={post.title}
                                coverImage={post.coverImage}
                                date={post.date}
                                author={post.author}
                                slug={post.slug}
                                excerpt={post.excerpt}
                                marginBottom={0}
                            />
                        )
                    ))
                }
            </Box>
        </section>
    )
}

export default ArticleHeadingList
