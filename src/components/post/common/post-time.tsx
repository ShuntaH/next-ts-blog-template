import React from "react";
import { Text } from "@chakra-ui/react";
import ChakraFontAwesomeIcon from "components/chakra-font-awesome-icon";
import { faReadme } from "@fortawesome/free-brands-svg-icons";
import { STYLES } from "lib/constants";

type Props = {
  time: string
}

const PostTime: React.FC<Props> = ({ time }) => {
  return (
    <Text as={"span"} display={"inline-flex"} alignItems={"center"}>
      <ChakraFontAwesomeIcon
        paddingTop={0.5}
        paddingRight={1}
        icon={faReadme}
        color={STYLES.baseColor}
        size={"lg"}
      />
      {time}
    </Text>
  )
}

export default PostTime
