import { Heading, HeadingProps } from "@chakra-ui/react";
import React from "react";

const PostTitle: React.FC<HeadingProps> = (props) => (
  <Heading
    as={"h1"}
    letterSpacing={'0.03em'}
    wordBreak={"break-word"}
    fontSize={{base: "2xl", md: "3xl"}}
    {...props}
  >
    {props.children}
  </Heading>
)

export default PostTitle
