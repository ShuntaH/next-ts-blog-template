import { Box, BoxProps, Flex, Text } from "@chakra-ui/react";
import PostCards from "./post-cards";
import { Posts } from "../../interfaces/post";
import TextSpan from "../foundations/text-span";
import { useRouter } from "next/router";

type Props = {
  posts: Posts,

  boxProps?: BoxProps
}

const PostsPage = ({ posts, boxProps }: Props) => {
  const router = useRouter()
  const currentPathname = router.pathname


  const createpagination = () => {
    if (currentPathname.includes('pages')) {
      // トップページではなく
      return {
        currentPage: router.query
      }
    }
    const currentPage = 1
    const prevPage = null
    const nextPage = 2
    return {
      currentPage: 1,
      prevPage: 1,
      nextPage: 2
    }
  }

  return (
    posts.length > 0 ?
    <Box>
      <PostCards posts={posts}/>

      {/*トップページだったら戻るはない*/}
      <Flex justifyContent={"space-between"}>
        {/*<Link as={NextLink}>Previous</Link>*/}
        <TextSpan textProps={{ color: "gray.500" }}>Previous</TextSpan>
        {/*<Link as={NextLink}>1 of 30</Link>*/}
        {/*<Link as={NextLink}>Next</Link>*/}
      </Flex>
    </Box>
    :
    <Box>
      {/*todo 見た目確認*/}
      <Text align={"center"}>
        There is no post yet.
      </Text>
    </Box>)

}

export default PostsPage
