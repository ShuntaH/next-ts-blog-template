import { Box, BoxProps, Flex, Text } from "@chakra-ui/react";
import PostCards from "./post-cards";
import { Posts } from "../../interfaces/post";

type Props = {
  posts: Posts
  boxProps?: BoxProps
}

const PostsPage = ({ posts, boxProps }: Props) => (
  posts.length > 0 ?
    <Box>
      <PostCards posts={posts}/>
      <Flex justifyContent={"space-between"}>
        {/*<Link as={NextLink}>Previous</Link>*/}
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
    </Box>

  )

export default PostsPage
