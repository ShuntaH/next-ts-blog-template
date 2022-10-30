import ArticleHeadingList from '../components/article-heading-list'
import { getAllPosts } from '../lib/api'
import Post from '../interfaces/post'
import { Container, Text } from "@chakra-ui/react";


type Props = {
  allPosts: Post[]
}

/**
 * This is the page that is rendered when the user visits the root of your application.
 */

export default function Index({allPosts}: Props) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)

  return (
    // ページ固有のhead内容を設定したい時
    // <Head>
    //   <title>hskpg blog</title>
    // </Head>

    <Container width={'100%'} maxWidth={'900px'} marginInline={'auto'}>
      {
        allPosts.length > 0 ?
          <ArticleHeadingList posts={allPosts}/>
          :
          <Text align={"center"}>
            There is no post yet.
          </Text>
      }
    </Container>
  )
}

// 効かなかった
// Index.getLayout = function getLayout(page) {
//   return (
//     <Layout>
//       {page}
//     </Layout>
//   )
// }

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: {allPosts},
  }
}
