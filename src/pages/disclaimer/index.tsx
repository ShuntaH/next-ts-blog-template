import Layout from "components/layouts/layout";
import { getArticleBySlug } from "lib/api/article";
import { Article } from "interfaces/article";
import { getAllPosts } from "lib/api/post";
import { Posts } from "interfaces/post";
import SimplePage from "components/common/simple-page";
import MarkdownBox from "components/markdown/markdown-box";
import { useFuse } from "hooks/useFuse";


export const getStaticProps = async () => {
  const article = getArticleBySlug('disclaimer')
  const allPosts = getAllPosts()
  return {
    props: { article, allPosts }
  }
}

type Props = {
  article: Article,
  allPosts: Posts
}

/**
 * This is the page that is rendered when the user visits the root of your application.
 */
export default function Index({ article, allPosts }: Props) {
  const fuse = useFuse(allPosts)

  return (
    // ページ固有のhead内容を設定したい時
    // <Head>
    //   <title>hskpg blog</title>
    // </Head>
    <Layout fuse={fuse}>
      <SimplePage title={article.title}>
      <MarkdownBox content={article.content}/>
      </SimplePage>
    </Layout>
  )
}
