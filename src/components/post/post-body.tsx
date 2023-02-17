import markdownStyles from 'components/markdown-styles.module.css'
import { Box, BoxProps } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import markdownToReactElements from "lib/markdownToReactElements";

type Props = {
  content: string
  boxProps?: BoxProps
}

const PostBody: React.VFC<Props> = ({ content, boxProps }) => {
  const [reactElm, setReactElm] = useState(null)
  useEffect(() => {
    (async () => {
      const elm: any = await markdownToReactElements(content)
      setReactElm(elm)
    })()

  }, [])
  return (
    <Box w={"full"} {...boxProps}>
      <Box
        className={markdownStyles['markdown']}
      >
        {reactElm}
      </Box>
    </Box>
  )
}

export default PostBody
