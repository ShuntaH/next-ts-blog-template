import { Heading, HeadingProps } from "@chakra-ui/react";
import React from "react";
import { STYLES } from "lib/constants";

const PostCardTitle: React.FC<HeadingProps> = (props) => (
  <Heading
    as={'h3'}
    _hover={STYLES.hoverLighterStyle}
    fontSize={{base: "ms", md: "xl"}}
    marginBottom={{base: 2, md: 1}}
  >
    {props.children}
  </Heading>
)

export default PostCardTitle
