import { Heading, HeadingProps } from "@chakra-ui/react";
import React from "react";

const PostTitle: React.FC<HeadingProps> = (props) => (
  <Heading as={"h1"} {...props}>{props.children}</Heading>
)

export default PostTitle
