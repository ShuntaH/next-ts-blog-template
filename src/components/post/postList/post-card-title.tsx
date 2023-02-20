import { Heading, HeadingProps } from "@chakra-ui/react";
import React from "react";
import { STYLES } from "lib/constants";

const PostCardTitle: React.FC<HeadingProps> = (props) => (
  <Heading
    as={'h3'}
    letterSpacing={'0.03em'}
    wordBreak={"break-word"}
    _hover={STYLES.hoverLighterStyle}
    fontSize={{base: "md", md: "xl"}}
    marginBottom={{base: 2, md: 1}}
  >
    {props.children}
  </Heading>
)

export default PostCardTitle
