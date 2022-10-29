import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Post from '../interfaces/post'
import { Container } from "@chakra-ui/react";


type Props = {
  allPosts: Post[]
}

/**
 * This is the page that is rendered when the user visits the root of your application.
 */

export default function Index({allPosts}: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      {/*ページ固有のhead内容を設定したい時*/}
      {/*<Head>*/}
      {/*  <title>hskpg blog</title>*/}
      {/*</Head>*/}

      <Container px={5}>
        <Intro></Intro>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}/>
        )}
        ーーーーーーーーーーーーーーーーー

        {morePosts.length > 0 && <MoreStories posts={morePosts}/>}
      </Container></>

  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

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
