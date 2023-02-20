import React from "react";
import { Text, TextProps } from "@chakra-ui/react";
import DateFormatter from "components/common/date-formatter";
import { STYLES } from "lib/constants";
import ChakraFontAwesomeIcon from "components/chakra-font-awesome-icon";
import { faFeather } from "@fortawesome/free-solid-svg-icons";

type Props = {
  publishedAt: string
  updatedAt: string
  textProps?: TextProps
}

const PostDate: React.FC<Props> = ({ publishedAt, updatedAt, textProps }) => {
  return (
    <Text letterSpacing={'0.03em'} {...textProps}>
      <ChakraFontAwesomeIcon
        paddingTop={0.5}
        paddingRight={1}
        icon={faFeather}
        color={STYLES.baseColor}
        size={"lg"}
      />
      <DateFormatter dateString={publishedAt}/>
      {
        publishedAt === updatedAt ? null : ' / ' + <DateFormatter dateString={updatedAt}/>
      }
    </Text>
  )
}

export default PostDate
