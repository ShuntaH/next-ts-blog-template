import React from "react";
import { Text } from "@chakra-ui/react";
import ChakraFontAwesomeIcon from "components/foundations/chakra-font-awesome-icon";
import { faReadme } from "@fortawesome/free-brands-svg-icons";
import { STYLES } from "lib/constants";

type Props = {
  time: string
}

function PostTime({ time }: Props) {
  return (
    <Text
      as={"span"}
      display={"inline-flex"}
      alignItems={"center"}
      flexWrap={"wrap"}
      paddingInlineEnd={1}
    >
      <ChakraFontAwesomeIcon
        paddingTop={0.5}
        paddingRight={1}
        icon={faReadme}
        color={STYLES.color}
        size={"lg"}
      />
      <Text as={"span"}>{time}</Text>
    </Text>
  )
}

export default PostTime
