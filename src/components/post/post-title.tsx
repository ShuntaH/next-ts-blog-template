import { Heading, HeadingProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode
  headingProps?: HeadingProps
}

const PostTitle: React.VFC<Props> = ({ headingProps, children }) => (
  <Heading as={"h1"} {...headingProps}>{children}</Heading>
)

export default PostTitle
