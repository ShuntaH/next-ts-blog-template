import type Post from '../interfaces/post'
import ArticleHeading from "./article-heading";

type Props = {
  posts: Post[]
}

const ArticleHeadingList = ({posts}: Props) => {
  return (
    <section>
      <div>
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
      </div>
    </section>
  )
}

export default ArticleHeadingList
